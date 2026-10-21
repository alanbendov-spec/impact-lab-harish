(function () {
  "use strict";

  var C = window.DECK_CONTENT;
  var params = new URLSearchParams(window.location.search);
  var lang = ["en", "es", "he"].indexOf(params.get("lang")) >= 0 ? params.get("lang") : "en";
  var audience = ["kids", "adults"].indexOf(params.get("aud")) >= 0 ? params.get("aud") : "kids";
  var L = C.locales[lang];
  var deck = document.getElementById("deck");
  var stage = document.getElementById("stage");
  var timelineShell = document.getElementById("timeline-shell");
  var actIndicator = document.getElementById("act-indicator");
  var counter = document.getElementById("counter");
  var progress = document.getElementById("progress");
  var prevButton = document.getElementById("prev");
  var nextButton = document.getElementById("next");
  var notesPanel = document.getElementById("notes-panel");
  var notesHead = document.getElementById("notes-head");
  var notesText = document.getElementById("notes-text");
  var notesHint = document.getElementById("notes-hint");
  var slides = [];
  var current = -1;
  var activeAnimations = [];
  var activeRaf = 0;
  var timelineWindow = [C.timeline.start, C.timeline.end];

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  document.body.dataset.lang = lang;
  document.body.dataset.audience = audience;

  document.title = L.metaTitle;
  prevButton.setAttribute("aria-label", L.ui.previous);
  nextButton.setAttribute("aria-label", L.ui.next);
  notesPanel.setAttribute("aria-label", L.ui.notes);
  notesHint.textContent = L.ui.notesHint;

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  function actFor(id) {
    return C.acts.find(function (act) { return act.id === id; }) || C.acts[0];
  }

  function localized(item, fallbackField) {
    if (!item) return "";
    if (item[lang] != null) return item[lang];
    if (fallbackField && item[fallbackField] != null) return item[fallbackField];
    return item.en != null ? item.en : "";
  }

  function tagHtml(slide) {
    var tag = slide.tagI18n ? localized(slide.tagI18n) : slide.tag;
    var kind = slide.tag && slide.tag.indexOf("PREDICTION") === 0 ? " prediction" : "";
    return tag ? '<div class="tag' + kind + ' reveal">' + esc(tag) + "</div>" : "";
  }

  function pendingHtml(slide) {
    return slide.pending ? '<div class="pending-badge">' + esc(L.ui.pending) + "</div>" : "";
  }

  function kickerHtml(slide) {
    return (slide.type === "cover" || C.meta.showKickerOnAllSlides) ? '<div class="kicker reveal">' + esc(L.kicker) + "</div>" : "";
  }

  function sourceHtml(slide) {
    return slide.source ? '<div class="source-foot reveal">' + esc(slide.source) + "</div>" : "";
  }

  function copyHtml(slide, options) {
    options = options || {};
    var primary = options.primary == null ? localized(slide) : options.primary;
    var secondary = "";
    var original = slide.original || null;
    if (options.secondary != null) secondary = options.secondary;
    else if (original && original.lang !== lang) secondary = original.text;
    else if (lang === "en" && audience === "kids") secondary = slide.he || "";
    else if (lang !== "en") secondary = slide.en || "";
    var headlineClass = options.medium ? "headline medium reveal" : "headline reveal";
    var secondaryDir = original && original.lang !== lang ? original.lang : (lang === "en" ? "he" : "en");
    var sub = slide.sub ? localized(slide.sub) : (lang === "en" ? slide.subEn : "");
    return (slide.interludeLabel ? '<div class="interlude-label reveal"><b>' + esc(L.interlude) + '</b></div>' : "") + kickerHtml(slide) +
      (primary ? '<h1 class="' + headlineClass + '">' + esc(primary) + "</h1>" : "") +
      (sub ? '<div class="sub-en reveal">' + esc(sub) + "</div>" : "") +
      (secondary ? '<div class="he secondary-copy reveal" lang="' + esc(secondaryDir) + '" dir="' + (secondaryDir === "he" ? "rtl" : "ltr") + '">' + esc(secondary) + "</div>" : "") +
      tagHtml(slide) + sourceHtml(slide);
  }

  function interactionHtml(slide) {
    if (audience === "adults" || !slide.interaction) return "";
    var text = lang === "es" ? (slide.interactionEs || slide.interaction) : (lang === "he" ? (slide.interactionHe || slide.interaction) : slide.interaction);
    return '<div class="interaction-prompt reveal"><b>' + esc(L.ui.interaction) + '</b><span>' + esc(text) + '</span></div>';
  }

  function audioHtml(slide) {
    var enabled = audience === "kids" || (audience === "adults" && lang === "he");
    if (!enabled) return "";
    var mode = audience === "kids" ? "kids" : "adults";
    return '<button class="slide-audio" type="button" aria-label="' + esc(L.ui.audioPlay) + '" data-audio-mode="' + mode + '">' +
      '<span aria-hidden="true">🔊</span><audio preload="metadata" src="audio/' + mode + '/' + esc(slide.id) + '.mp3"></audio></button>';
  }

  function gpuDots() {
    var dots = "";
    for (var i = 0; i < 120; i += 1) dots += '<i style="--delay:' + ((i % 12) * 0.025).toFixed(3) + 's"></i>';
    return dots;
  }

  function formatDuration(seconds) {
    var minutes = Math.floor(seconds / 60);
    return minutes + ":" + String(seconds % 60).padStart(2, "0");
  }

  function imageSlot(image, extraClass) {
    return '<figure class="image-slot reveal ' + (extraClass || "") + '">' +
      '<div class="slot-fallback"><span class="slot-silhouette"></span></div>' +
      '<img src="' + esc(image.src) + '" alt="' + esc(image.label) + '">' +
      '<figcaption class="slot-label">' + esc(image.label) + "</figcaption></figure>";
  }

  function imageRow(images, extraClass) {
    return '<div class="media-row ' + (extraClass || "") + '">' + images.map(function (image) {
      return imageSlot(image);
    }).join("") + "</div>";
  }

  function videoBlock(media) {
    var autoplay = media.autoplay ? ' data-autoplay="true"' : "";
    var muted = media.muted ? " muted" : "";
    var volume = typeof media.volume === "number" ? media.volume : (media.muted ? 0 : 1);
    return '<div class="video reveal" data-video-id="' + esc(media.id) + '">' +
      '<video controls preload="metadata" playsinline' + autoplay + muted + ' data-volume="' + volume + '" src="videos/' + esc(media.slug) + '.mp4"></video>' +
      '<div class="video-placeholder"><div class="play-ring">▶</div><b>' + esc(media.label) +
      '</b><span>' + esc(L.ui.videoMissingDetail) + "</span></div></div>";
  }

  function videoGrid(media) {
    return '<div class="video-grid" style="--video-count:' + media.length + '">' +
      media.map(videoBlock).join("") + "</div>";
  }

  function clockSvg() {
    var ticks = "";
    for (var i = 0; i < 12; i += 1) {
      var angle = i * 30 * Math.PI / 180;
      var x1 = 100 + Math.sin(angle) * 78;
      var y1 = 100 - Math.cos(angle) * 78;
      var x2 = 100 + Math.sin(angle) * 88;
      var y2 = 100 - Math.cos(angle) * 88;
      ticks += '<line class="tick" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"></line>';
    }
    return '<svg class="clock-face reveal" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="94"></circle>' +
      ticks + '<line class="hour-hand" x1="100" y1="105" x2="100" y2="55"></line>' +
      '<line class="minute-hand" x1="100" y1="108" x2="100" y2="30"></line><circle class="pin" cx="100" cy="100" r="5"></circle></svg>';
  }

  function iconSvg(id) {
    var icons = {
      hunger: '<path d="M8 5v7M12 5v7M16 5v7M12 12v12M28 5c-6 4-6 12 0 16M28 5v19"/>',
      war: '<path d="M7 25L25 7M7 7l18 18M5 27h8M19 27h8"/>',
      envy: '<path d="M4 16s5-8 12-8 12 8 12 8-5 8-12 8S4 16 4 16z"/><circle cx="16" cy="16" r="3"/><path d="M7 27L27 5"/>',
      good: '<path d="M16 27V10M16 16c-5 0-8-3-8-7 5 0 8 3 8 7zM16 20c5 0 8-3 8-7-5 0-8 3-8 7z"/><path d="M7 27h18"/>',
      delicacies: '<circle cx="16" cy="16" r="10"/><path d="M8 13c4 2 12 2 16 0M10 21c4-2 8-2 12 0"/>',
      knowledge: '<path d="M5 8c5-2 9-1 11 2v17c-2-3-6-4-11-2V8zM27 8c-5-2-9-1-11 2v17c2-3 6-4 11-2V8z"/>'
    };
    return '<svg viewBox="0 0 32 32" aria-hidden="true">' + icons[id] + "</svg>";
  }

  function accessSvg() {
    return '<div class="access-chart reveal"><svg viewBox="0 0 800 260" preserveAspectRatio="none" aria-hidden="true">' +
      '<path class="access-line" d="M8 245 C100 238 170 230 240 205 S350 162 418 151 S520 118 574 85 S690 55 792 18"></path>' +
      '</svg><div class="access-label">LOWER COST</div></div>';
  }

  function renderSlide(slide, index) {
    var section = document.createElement("section");
    section.className = "slide " + slide.type + "-slide" + (slide.act === "III" ? " has-timeline" : "");
    section.dataset.index = index;
    section.dataset.id = slide.id;
    section.setAttribute("aria-label", localized(slide) || localized(C.challenge));
    if (slide.background) section.classList.add("has-photo-background");
    var html = slide.background ? '<div class="slide-bg" style="background-image:url(&quot;' + esc(slide.background) + '&quot;)"></div>' : "";
    html += pendingHtml(slide);

    switch (slide.type) {
      case "cover":
        html += '<div class="scene"><div class="halo"></div><div class="brand-mark reveal"><div class="brand-orbit"></div><img src="img/emblema-navy.png" alt="' + esc(C.meta.school) + '"></div>' + copyHtml(slide) + "</div>";
        break;
      case "home":
        html += '<div class="scene"><div class="halo"></div><div class="home-shape reveal"><span class="home-roof"></span><span class="home-door"></span></div>' + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "question":
        html += '<div class="scene"><div class="question-mark reveal">?</div>' + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "genesis":
        html += '<div class="genesis-world"><div class="sky-panel left"></div><div class="sky-panel right"></div><div class="sky-light"></div><div class="water"></div></div><div class="scene">' + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "counter":
        html += '<div class="scene"><div class="year-counter reveal" data-from="' + slide.counter.from + '" data-to="' + slide.counter.to + '">' + slide.counter.from + '<small>' + esc(L.ui.years) + "</small></div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "split":
        html += '<div class="scene"><div class="opening-grid">' + slide.split.map(function (item) {
          return '<div class="opening-half reveal"><b>' + esc(localized(item)) + '</b></div>';
        }).join("") + "</div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "image":
        html += '<div class="scene">' + imageSlot(slide.image, "single-image") + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "images":
        html += '<div class="scene">' + imageRow(slide.images) + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "quote":
        html += '<div class="scene"><div class="halo"></div>' + copyHtml(slide) + "</div>";
        break;
      case "week":
        html += '<div class="scene"><div class="week-bar">' + slide.week.map(function (day, i) {
          return '<div class="day reveal ' + (i === 5 ? "highlight" : "") + '"><b>' + esc(day) + "</b></div>";
        }).join("") + "</div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "clock":
        html += '<div class="scene"><div class="clock-wrap">' + clockSvg() + '<div class="digital-time reveal">' + esc(slide.clock) + "</div></div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "aroma":
        html += '<div class="aroma-lines"><span class="aroma-line"></span><span class="aroma-line"></span><span class="aroma-line"></span></div><div class="scene">' + copyHtml(slide) + "</div>";
        break;
      case "timeline":
        html += '<div class="scene">' + copyHtml(slide) + "</div>";
        break;
      case "timeline-video":
        html += '<div class="scene">' + copyHtml(slide, { medium: true }) + (slide.images ? '<div class="timeline-media">' + imageRow(slide.images) + videoGrid(slide.media) + "</div>" : videoGrid(slide.media)) + "</div>";
        break;
      case "timeline-video-focus":
        html += '<div class="scene">' + videoGrid(slide.media) + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "timeline-images":
        html += '<div class="scene">' + copyHtml(slide, { medium: true }) + imageRow(slide.images) + "</div>";
        break;
      case "timeline-symbols":
        html += '<div class="scene">' + copyHtml(slide, { medium: true }) + '<div class="symbol-row">' + slide.symbols.map(function (item, i) {
          return (i ? '<span class="connector reveal"></span>' : "") + '<div class="symbol reveal">' + esc(typeof item === "string" ? item : localized(item)) + "</div>";
        }).join("") + "</div></div>";
        break;
      case "timeline-network":
        html += '<div class="scene">' + copyHtml(slide, { medium: true }) + '<div class="network-row">' + slide.network.map(function (item) {
          return '<div class="network-node reveal">' + esc(item) + "</div>";
        }).join("") + "</div></div>";
        break;
      case "acceleration":
        html += '<div class="scene">' + copyHtml(slide, { medium: true }) + '<div class="acceleration-chart">' + slide.intervals.map(function (item) {
          return '<div class="interval reveal"><label>' + esc(localized(item)) + '</label><div class="interval-track"><div class="interval-bar" data-value="' + item.value + '"></div></div><b>' + item.value + "</b></div>";
        }).join("") + "</div></div>";
        break;
      case "replacement":
        html += '<div class="scene">' + copyHtml(slide, { medium: true }) + '<div class="replacement-row">' + slide.steps.map(function (item, i) {
          return (i ? '<span class="connector reveal"></span>' : "") + '<div class="replacement-step reveal">' + esc(typeof item === "string" ? item : localized(item)) + "</div>";
        }).join("") + "</div></div>";
        break;
      case "video":
        html += '<div class="scene"><div class="copy">' + copyHtml(slide, { medium: true }) + interactionHtml(slide) + "</div>" + videoGrid(slide.media) + "</div>";
        break;
      case "machine-switch":
        html += '<div class="scene"><div class="binary-switch reveal"><div class="switch-track"><span></span></div><b class="zero">0</b><b class="one">1</b><small>' + esc(L.visual.off) + '</small><small>' + esc(L.visual.on) + '</small></div>' + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "machine-human":
        html += '<div class="scene"><div class="human-bits reveal"><div><b>1</b><span>HAND UP</span></div><div><b>0</b><span>HAND DOWN</span></div><div><b>1</b><span>HAND UP</span></div></div>' + copyHtml(slide, { medium: true }) + interactionHtml(slide) + "</div>";
        break;
      case "machine-eniac":
        html += '<div class="scene"><div class="machine-eniac-grid"><div class="eniac-zoom reveal"><div class="zoom-room"></div><div class="zoom-chip"><i></i><b>208B</b><span>' + esc(L.visual.switches) + '</span></div></div>' + videoGrid(slide.media) + '</div>' + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "machine-parallel":
        html += '<div class="scene"><div class="parallel-demo"><div class="cpu-demo reveal"><b>CPU</b><div class="cpu-line"><i></i><i></i><i></i><i></i><i></i><i></i></div><small>' + esc(L.visual.oneLine) + '</small></div><div class="gpu-demo reveal"><b>GPU</b><div class="gpu-grid">' + gpuDots() + '</div><small>' + esc(L.visual.thousandsAtOnce) + '</small></div></div>' + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "alexnet":
        html += '<div class="scene"><div class="alexnet-visual"><div class="gpu-card reveal"><i></i><b>GTX 580</b></div><div class="gpu-card reveal"><i></i><b>GTX 580</b></div><div class="alexnet-score reveal" data-from="26.2" data-to="15.3" data-decimals="1">26.2<span>%</span></div></div>' + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "video-question":
        html += '<div class="scene">' + videoGrid(slide.media) + '<div class="post-video">' + copyHtml(slide) + "</div></div>";
        break;
      case "hours":
        html += '<div class="scene"><div class="digital-time reveal">18:5_</div>' + copyHtml(slide) + "</div>";
        break;
      case "rambam-quote":
        html += '<div class="scene">' + copyHtml(slide) + "</div>";
        break;
      case "rambam-icons":
        html += '<div class="scene">' + copyHtml(slide, { medium: true }) + '<div class="icon-grid">' + C.rambamItems.map(function (item) {
          return '<div class="rambam-icon reveal">' + iconSvg(item.id) + '<b>' + esc(localized(item)) + '</b></div>';
        }).join("") + "</div></div>";
        break;
      case "ready-made":
        html += '<div class="scene"><div class="ready-visual reveal"><div class="product">' + esc(localized(slide.products[0])) + '</div><div class="factory-line"></div><div class="product">' + esc(localized(slide.products[1])) + "</div></div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "abundance":
        html += '<div class="scene"><div class="abundance-word reveal">' + esc(localized(slide.abundanceI18n || { en: slide.abundance })) + "</div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "quote-wall":
        html += '<div class="scene"><div class="quote-wall">' + slide.names.map(function (name) { return '<div class="quote-name reveal">' + esc(name) + "</div>"; }).join("") + "</div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "prediction-cards":
        html += '<div class="scene"><div class="prediction-grid">' + slide.quotes.map(function (item) {
          var translated = localized(item.quoteI18n || { en: item.quote });
          var original = item.quote;
          return '<article class="prediction-card reveal"><span>' + esc(L.ui.prediction) + '</span><b>' + esc(item.name) + '</b><blockquote>' + esc(translated) + '</blockquote>' +
            (lang === "en" ? "" : '<small class="quote-original" lang="en" dir="ltr">' + esc(original) + '</small>') + '<small>' + esc(item.source) + '</small></article>';
        }).join("") + '</div>' + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "post-labor":
        html += '<div class="scene"><div class="post-labor-loop reveal"><div class="loop-node">' + esc(localized(slide.loop[0])) + '</div><div class="loop-line"></div><div class="loop-node">' + esc(localized(slide.loop[1])) + "</div></div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "compare":
        html += '<div class="scene"><div class="compare-grid"><div class="compare-side reveal"><b>' + esc(slide.compare[0].title) + '</b><strong>' + esc(localized(slide.compare[0])) + '</strong></div><div class="compare-arrow reveal">↔</div><div class="compare-side reveal"><b>' + esc(slide.compare[1].title) + '</b><strong>' + esc(localized(slide.compare[1])) + "</strong></div></div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "constellation":
        html += '<div class="scene"><div class="constellation reveal"><svg viewBox="0 0 900 280" preserveAspectRatio="none"><line x1="90" y1="140" x2="360" y2="50"></line><line x1="90" y1="140" x2="390" y2="240"></line><line x1="360" y1="50" x2="810" y2="140"></line><line x1="390" y1="240" x2="810" y2="140"></line></svg>' + slide.nodes.map(function (node) { return '<div class="star-node">' + esc(node) + "</div>"; }).join("") + "</div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "jewish-wisdom":
        html += '<div class="scene"><div class="wisdom-grid">' + slide.wisdom.map(function (item) {
          var translated = localized(item.quoteI18n || { en: item.quote });
          return '<article class="wisdom-card reveal"><b>' + esc(item.name) + '</b><blockquote>' + esc(translated) + '</blockquote>' +
            (lang === "en" ? "" : '<small class="quote-original" lang="en" dir="ltr">' + esc(item.quote) + '</small>') + '</article>';
        }).join("") + '</div>' + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "middot":
        html += '<div class="scene"><div class="middot-row">' + slide.middot.map(function (item) { return '<div class="middah reveal"><b>' + esc(localized(item)) + "</b></div>"; }).join("") + "</div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "lowlands":
        html += '<div class="lowland"></div><div class="light-drop reveal"></div><div class="scene">' + copyHtml(slide) + "</div>";
        break;
      case "access":
        html += '<div class="scene">' + accessSvg() + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "will":
        html += '<div class="scene"><div class="will-word reveal">' + esc(localized(slide)) + '</div>' + (lang === "en" && audience === "kids" ? '<div class="he reveal" dir="rtl">' + esc(slide.he) + '</div>' : "") + tagHtml(slide) + sourceHtml(slide) + "</div>";
        break;
      case "two-people":
        html += '<div class="scene"><div class="people-row"><div class="person reveal"><span class="head"></span><span class="body-shape"></span><span class="phone-shape"></span><b>' + esc(L.visual.scrolls) + '</b></div><span class="divider"></span><div class="person reveal"><span class="head"></span><span class="body-shape"></span><span class="phone-shape"></span><b>' + esc(L.visual.builds) + "</b></div></div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "mission":
        html += '<div class="scene"><div class="mission-rings reveal"><span></span><span></span><span></span><div class="mission-core"></div></div>' + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "challenge":
        html += '<div class="challenge-number">01</div><div class="scene">' + copyHtml(slide, {
          primary: localized(C.challenge),
          secondary: lang === "en" && audience === "kids" ? C.challenge.he : (lang !== "en" ? C.challenge.en : "")
        }) + "</div>";
        break;
      case "sources":
        html += '<div class="scene"><div class="source-grid">' + C.sources.map(function (source) { return '<div class="source-item ' + esc(source.kind) + ' reveal">' + esc(localized(source)) + "</div>"; }).join("") + "</div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      case "credits":
        html += '<div class="scene"><div class="credits-grid">' + slide.credits.map(function (credit) { return '<div class="credit-item reveal">' + esc(credit) + "</div>"; }).join("") + "</div>" + copyHtml(slide, { medium: true }) + "</div>";
        break;
      default:
        html += '<div class="scene">' + copyHtml(slide) + "</div>";
    }

    html += audioHtml(slide);
    section.innerHTML = html;
    deck.appendChild(section);
    slide.el = section;
    slides.push(slide);
  }

  function setupMediaElements() {
    deck.querySelectorAll(".image-slot img").forEach(function (img) {
      function ready() { img.closest(".image-slot").classList.add("ready"); }
      if (img.complete && img.naturalWidth) ready();
      img.addEventListener("load", ready, { once: true });
      img.addEventListener("error", function () { img.style.display = "none"; }, { once: true });
    });

    deck.querySelectorAll(".video").forEach(function (box) {
      var video = box.querySelector("video");
      video.volume = Math.max(0, Math.min(1, Number(video.dataset.volume || 1)));
      video.addEventListener("loadedmetadata", function () {
        box.classList.add("ready");
        box.querySelector(".video-placeholder span").textContent = L.ui.videoReady;
      });
      video.addEventListener("error", function () { box.classList.remove("ready"); });
      video.addEventListener("ended", function () { completeVideo(box); });
      video.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleVideo(box);
      });
      box.querySelector(".video-placeholder").addEventListener("click", function (event) {
        event.stopPropagation();
        if (box.classList.contains("ready")) toggleVideo(box); else completeVideo(box);
      });
    });

    deck.querySelectorAll(".slide-audio").forEach(function (button) {
      var audio = button.querySelector("audio");
      audio.addEventListener("loadedmetadata", function () { button.classList.add("ready"); });
      audio.addEventListener("play", function () {
        button.classList.add("playing");
        button.setAttribute("aria-label", L.ui.audioPause);
      });
      audio.addEventListener("pause", function () {
        button.classList.remove("playing");
        button.setAttribute("aria-label", audio.ended ? L.ui.audioRepeat : L.ui.audioPlay);
      });
      audio.addEventListener("ended", function () {
        button.classList.remove("playing");
        button.classList.add("played");
        button.setAttribute("aria-label", L.ui.audioRepeat);
      });
      audio.addEventListener("error", function () { button.classList.add("audio-error"); });
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleSlideAudio(button);
      });
    });
  }

  function completeVideo(box) {
    var slideEl = box.closest(".slide");
    var video = box.querySelector("video");
    try { video.pause(); } catch (error) {}
    box.classList.add("done");
    box.classList.remove("active-video");
    var next = Array.from(slideEl.querySelectorAll(".video")).find(function (item) { return !item.classList.contains("done"); });
    if (next) next.classList.add("active-video");
    else {
      slideEl.classList.add("video-ended");
      var post = slideEl.querySelectorAll(".post-video .reveal");
      post.forEach(function (element, i) { animateReveal(element, i * 130); });
      if (lang === "he" && audience === "adults") playSlideAudio(slideEl);
    }
  }

  function toggleVideo(box) {
    var video = box.querySelector("video");
    if (!box.classList.contains("ready")) { completeVideo(box); return; }
    if (video.paused) {
      pauseAllVideos(video);
      var promise = video.play();
      if (promise && promise.catch) promise.catch(function () {});
    } else video.pause();
  }

  function pauseAllVideos(except) {
    deck.querySelectorAll("video").forEach(function (video) {
      if (video !== except) { try { video.pause(); } catch (error) {} }
    });
  }

  function pauseAllAudio(except) {
    deck.querySelectorAll(".slide-audio audio").forEach(function (audio) {
      if (audio !== except) { try { audio.pause(); } catch (error) {} }
    });
  }

  function toggleSlideAudio(button) {
    var audio = button.querySelector("audio");
    if (audio.paused) {
      if (audio.ended) audio.currentTime = 0;
      pauseAllAudio(audio);
      pauseAllVideos();
      var promise = audio.play();
      if (promise && promise.catch) promise.catch(function () {});
    } else audio.pause();
  }

  function playSlideAudio(slideEl) {
    var button = slideEl.querySelector(".slide-audio");
    if (!button || slideEl.querySelector(".video:not(.done)")) return;
    toggleSlideAudio(button);
  }

  function audioAction() {
    var button = slides[current].el.querySelector(".slide-audio");
    if (!button) return false;
    toggleSlideAudio(button);
    return true;
  }

  function videoAction() {
    var slideEl = slides[current].el;
    var boxes = Array.from(slideEl.querySelectorAll(".video"));
    if (!boxes.length) return false;
    if (slideEl.classList.contains("video-ended")) return false;
    var box = boxes.find(function (item) { return item.classList.contains("active-video"); }) || boxes.find(function (item) { return !item.classList.contains("done"); }) || boxes[0];
    toggleVideo(box);
    return true;
  }

  function buildTimeline() {
    var svg = '<svg viewBox="0 0 1600 260" preserveAspectRatio="none" aria-label="timeline">' +
      '<text class="tl-row-label" x="8" y="30">' + esc(L.ui.rebbes) + '</text>' +
      '<text class="tl-row-label" x="8" y="157">' + esc(L.ui.revolutions) + '</text>' +
      '<line class="tl-axis timeline-stroke" x1="90" y1="130" x2="1530" y2="130"></line>';
    for (var t = 0; t < 5; t += 1) {
      var tx = 90 + t * 360;
      svg += '<g class="tl-tick" data-tick="' + t + '"><line class="tl-axis" x1="' + tx + '" y1="118" x2="' + tx + '" y2="220"></line><text class="tl-year" x="' + tx + '" y="248" text-anchor="middle"></text></g>';
    }
    C.timeline.rebbes.forEach(function (item, i) {
      svg += '<g class="rebbe-item" data-id="' + esc(item.id) + '" data-start="' + item.start + '" data-end="' + item.end + '">' +
        '<line class="rebbe-line" y1="84" y2="84"></line><circle class="rebbe-node" cy="84" r="6"></circle>' +
        '<text class="rebbe-label" y="' + (i % 2 ? 116 : 57) + '">' + esc(localized(item.nameI18n || { en: item.name })) + '</text>' +
        (item.note ? '<text class="rebbe-note" y="70">' + esc(item.note) + "</text>" : "") + "</g>";
    });
    C.timeline.revolutions.forEach(function (item) {
      var aiClass = item.id === "ai" ? " ai" : "";
      var y = item.id === "ai" ? 201 : 166;
      var height = item.id === "ai" ? 20 : 30;
      var labelY = item.id === "ai" ? y + 14 : y + 20;
      svg += '<g class="rev-item" data-id="' + esc(item.id) + '" data-start="' + item.start + '" data-end="' + item.end + '">' +
        '<rect class="rev-band' + aiClass + '" y="' + y + '" height="' + height + '"></rect><text class="rev-label ' + esc(item.id) + '-label" y="' + labelY + '">' + esc(localized(item.nameI18n || { en: item.name })) + "</text></g>";
    });
    svg += "</svg>";
    timelineShell.innerHTML = svg;
    updateTimeline([C.timeline.start, C.timeline.end], []);
  }

  function timelineX(year, windowYears) {
    return 90 + ((year - windowYears[0]) / (windowYears[1] - windowYears[0])) * 1440;
  }

  function setAttr(element, attribute, target) {
    element.setAttribute(attribute, String(Math.max(attribute === "width" ? 0 : -10000, target)));
  }

  function updateTimeline(windowYears, activeIds) {
    timelineWindow = windowYears.slice();
    var active = new Set(activeIds || []);
    timelineShell.querySelectorAll(".tl-tick").forEach(function (tick, i) {
      var value = Math.round(windowYears[0] + (windowYears[1] - windowYears[0]) * i / 4);
      tick.querySelector("text").textContent = value;
    });
    timelineShell.querySelectorAll(".rebbe-item").forEach(function (group) {
      var start = Number(group.dataset.start), end = Number(group.dataset.end);
      var visible = end >= windowYears[0] && start <= windowYears[1];
      group.style.opacity = visible ? "1" : "0";
      group.style.transition = "opacity .35s";
      var x1 = timelineX(Math.max(start, windowYears[0]), windowYears);
      var x2 = timelineX(Math.min(end, windowYears[1]), windowYears);
      var mid = (x1 + x2) / 2;
      var line = group.querySelector("line"), circle = group.querySelector("circle");
      setAttr(line, "x1", x1); setAttr(line, "x2", x2); setAttr(circle, "cx", mid);
      group.querySelectorAll("text").forEach(function (text) { setAttr(text, "x", mid); });
      circle.classList.toggle("active", active.has(group.dataset.id));
    });
    timelineShell.querySelectorAll(".rev-item").forEach(function (group) {
      var start = Number(group.dataset.start), end = Number(group.dataset.end);
      var visible = end >= windowYears[0] && start <= windowYears[1];
      group.style.opacity = visible ? "1" : "0";
      group.style.transition = "opacity .35s";
      var x1 = timelineX(Math.max(start, windowYears[0]), windowYears);
      var x2 = timelineX(Math.min(end, windowYears[1]), windowYears);
      var width = Math.max(18, x2 - x1);
      var rect = group.querySelector("rect"), text = group.querySelector("text");
      setAttr(rect, "x", x1); setAttr(rect, "width", width);
      var labelX = x1 + width / 2;
      setAttr(text, "x", labelX);
      rect.classList.toggle("active", active.has(group.dataset.id));
    });
  }

  function cancelAnimations() {
    activeAnimations.forEach(function (animation) { try { animation.cancel(); } catch (error) {} });
    activeAnimations = [];
    if (activeRaf) cancelAnimationFrame(activeRaf);
  }

  function animateReveal(element, delay) {
    var animation = element.animate([
      { opacity: 0, transform: "translateY(20px) scale(.985)", filter: "blur(5px)" },
      { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0)" }
    ], { duration: 620, delay: delay, easing: "cubic-bezier(.2,.85,.25,1)", fill: "both" });
    activeAnimations.push(animation);
  }

  function animateCounter(slideEl) {
    var element = slideEl.querySelector(".year-counter, .alexnet-score");
    if (!element) return;
    var from = Number(element.dataset.from), to = Number(element.dataset.to), decimals = Number(element.dataset.decimals || 0), begun = performance.now();
    function frame(now) {
      var p = Math.min(1, (now - begun) / 2100);
      var eased = 1 - Math.pow(1 - p, 4);
      var value = from + (to - from) * eased;
      element.firstChild.nodeValue = decimals ? value.toFixed(decimals) : String(Math.round(value));
      if (p < 1) activeRaf = requestAnimationFrame(frame);
    }
    activeRaf = requestAnimationFrame(frame);
  }

  function playSlide(slide) {
    cancelAnimations();
    slide.el.querySelectorAll(".reveal").forEach(function (element, i) {
      if (!element.closest(".post-video")) animateReveal(element, 80 + i * 105);
    });
    animateCounter(slide.el);
    var hour = slide.el.querySelector(".hour-hand"), minute = slide.el.querySelector(".minute-hand");
    if (hour && minute) {
      activeAnimations.push(hour.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(205deg)" }], { duration: 2100, delay: 250, easing: "cubic-bezier(.2,.85,.25,1)", fill: "both" }));
      activeAnimations.push(minute.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(300deg)" }], { duration: 2100, delay: 250, easing: "cubic-bezier(.2,.85,.25,1)", fill: "both" }));
    }
    var maxInterval = 110;
    slide.el.querySelectorAll(".interval-bar").forEach(function (bar, i) {
      var width = Number(bar.dataset.value) / maxInterval * 100;
      activeAnimations.push(bar.animate([{ width: "0%" }, { width: width + "%" }], { duration: 850, delay: 600 + i * 240, easing: "cubic-bezier(.2,.85,.25,1)", fill: "both" }));
    });
    slide.el.querySelectorAll(".connector").forEach(function (line, i) {
      activeAnimations.push(line.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], { duration: 520, delay: 650 + i * 220, easing: "ease-out", fill: "both" }));
    });
  }

  function resetVideos(slideEl) {
    slideEl.classList.remove("video-ended");
    slideEl.querySelectorAll(".video").forEach(function (box, i) {
      box.classList.remove("done", "active-video");
      if (i === 0) box.classList.add("active-video");
      var video = box.querySelector("video");
      try { video.pause(); video.currentTime = 0; } catch (error) {}
    });
  }

  function autoplaySlideVideo(slideEl) {
    var video = slideEl.querySelector('video[data-autoplay="true"]');
    if (!video) return;
    pauseAllAudio();
    window.setTimeout(function () {
      if (!slideEl.classList.contains("active")) return;
      var promise = video.play();
      if (promise && promise.catch) promise.catch(function () {});
    }, 260);
  }

  function go(index, replaceHash) {
    var target = Math.max(0, Math.min(slides.length - 1, index));
    if (target === current) return;
    pauseAllVideos();
    pauseAllAudio();
    if (current >= 0) slides[current].el.classList.remove("active");
    current = target;
    var slide = slides[current];
    slide.el.classList.add("active");
    resetVideos(slide.el);
    playSlide(slide);
    autoplaySlideVideo(slide.el);

    var act = actFor(slide.act);
    actIndicator.innerHTML = "<strong>" + esc(localized(act.labelI18n || { en: act.label })) + "</strong><span>" + esc(localized(act.titleI18n || { en: act.title })) + "</span>";
    counter.textContent = String(current + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
    progress.style.width = ((current + 1) / slides.length * 100) + "%";
    prevButton.disabled = current === 0;
    nextButton.disabled = current === slides.length - 1;
    notesHead.textContent = L.ui.notes + " · " + String(current + 1).padStart(2, "0");
    var notes = slide.notesI18n ? localized(slide.notesI18n) : (slide.notes || "");
    if (audience === "adults") notes += "\n\n" + L.adultDepth + (slide.source ? "\n" + L.ui.source + ": " + slide.source : "");
    notesText.textContent = L.ui.estimatedDuration + ": " + formatDuration(C.durations[slide.id]) + "\n\n" + notes;

    var showTimeline = slide.act === "III";
    timelineShell.classList.toggle("visible", showTimeline);
    stage.classList.toggle("timeline-active", showTimeline);
    if (showTimeline) updateTimeline(slide.timeline.window, slide.timeline.active);
    if (lang === "he" && audience === "adults" && !slide.el.querySelector(".video")) {
      window.setTimeout(function () { if (slides[current] === slide) playSlideAudio(slide.el); }, 450);
    }
    if (replaceHash !== false) {
      var hash = "#" + (current + 1);
      if (history.replaceState) history.replaceState(null, "", hash); else location.hash = hash;
    }
  }

  function next() { go(current + 1); }
  function previous() { go(current - 1); }
  function fullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
  }
  function toggleNotes() {
    var open = !notesPanel.classList.contains("open");
    notesPanel.classList.toggle("open", open);
    notesPanel.setAttribute("aria-hidden", open ? "false" : "true");
  }

  C.slides.forEach(renderSlide);
  buildTimeline();
  setupMediaElements();

  prevButton.addEventListener("click", function (event) { event.stopPropagation(); previous(); });
  nextButton.addEventListener("click", function (event) { event.stopPropagation(); next(); });
  notesPanel.addEventListener("click", function (event) { event.stopPropagation(); });
  stage.addEventListener("click", function (event) {
    if (event.target.closest("#controls") || event.target.closest("#notes-panel") || event.target.closest(".slide-audio")) return;
    if (!videoAction()) next();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight" || event.key === "PageDown") { event.preventDefault(); next(); }
    else if (event.key === "ArrowLeft" || event.key === "PageUp") { event.preventDefault(); previous(); }
    else if (event.key === " ") { event.preventDefault(); if (!videoAction()) next(); }
    else if (event.key === "f" || event.key === "F") { event.preventDefault(); fullscreen(); }
    else if (event.key === "n" || event.key === "N") { event.preventDefault(); toggleNotes(); }
    else if (event.key === "a" || event.key === "A") { event.preventDefault(); audioAction(); }
    else if (event.key === "Home") { event.preventDefault(); go(0); }
    else if (event.key === "End") { event.preventDefault(); go(slides.length - 1); }
  });
  window.addEventListener("hashchange", function () {
    var value = Number(location.hash.slice(1));
    if (Number.isFinite(value)) go(value - 1, false);
  });

  var initial = Number(location.hash.slice(1));
  go(Number.isFinite(initial) && initial > 0 ? initial - 1 : 0, false);
})();
