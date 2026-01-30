
(() => {
  "use strict";

  /* =========================
     CONFIG
  ========================= */
  const EMAILJS_PUBLIC_KEY = "tivoinl7MHIKAOORE";
  const EMAILJS_SERVICE_ID = "service_bm4mbb9";
  const EMAILJS_TEMPLATE_ID = "template_yksn5vh";

  const WHATSAPP_NUMBER_INTL = "9647777045544";
  const STORE_CANONICAL_URL = "https://houseofantiques.github.io/mtjer01/";

  const FAV_KEY = "hoa_favorites_v7";
  const LANG_KEY = "hoa_lang_v7";
  const CAT_KEY = "hoa_category_v7";

  /* =========================
     Utils
  ========================= */
  const $ = (id) => document.getElementById(id);
  const safeText = (x) => (x == null ? "" : String(x));
  const isObj = (x) => x && typeof x === "object" && !Array.isArray(x);

  function normalizeArabic(s) {
    return safeText(s)
      .toLowerCase()
      .trim()
      .replace(/[ـ]/g, "")
      .replace(/[ًٌٍَُِّْ]/g, "")
      .replace(/[أإآا]/g, "ا")
      .replace(/ة/g, "ه")
      .replace(/ى/g, "ي")
      .replace(/ؤ/g, "و")
      .replace(/ئ/g, "ي")
      .replace(/\s+/g, " ");
  }

  function formatIQD(num) {
    const n = Number(num);
    if (!Number.isFinite(n) || n <= 0) return "—";
    try {
      return `${n.toLocaleString("en-US")} د.ع`;
    } catch {
      return `${String(n)} د.ع`;
    }
  }

  function pickText(obj, field, getLang) {
    const lang = getLang();
    const v = obj?.[field];
    if (isObj(v)) return safeText(v[lang] || v.ar || v.en || v.ku || "");
    return safeText(v);
  }

  function toast(msg) {
    alert(msg);
  }

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  /* =========================
     DOM (IDs unchanged)
  ========================= */
  const els = {};
  function bindEls() {
    els.langSelect = $("langSelect");
    els.searchInput = $("searchInput");
    els.resultsCount = $("resultsCount");
    els.chipsWrap = $("chipsWrap");
    els.sortSelect = $("sortSelect");
    els.showSelect = $("showSelect");
    els.productsGrid = $("productsGrid");
    els.emptyState = $("emptyState");

    // modal
    els.modal = $("modal");
    els.modalClose = $("modalClose");
    els.modalBody = $("modalBody");
    els.modalMainImg = $("modalMainImg");

    els.pinPrice = $("pinPrice");
    els.modalTitle = $("modalTitle");
    els.modalBadge = $("modalBadge");
    els.modalCode = $("modalCode");
    els.modalStatus = $("modalStatus");

    els.pinDimsWrap = $("pinDimsWrap");
    els.itemDimensions = $("itemDimensions");

    els.pinDetailsToggle = $("pinDetailsToggle");
    els.pinOrderToggle = $("pinOrderToggle");
    els.pinDetails = $("pinDetails");
    els.pinDesc = $("pinDesc");
    els.pinMoreBtn = $("pinMoreBtn");
    els.pinOrderPanel = $("pinOrderPanel");

    els.favBtn = $("favBtn");
    els.shareWaBtn = $("shareWaBtn");
    els.copyLinkBtn = $("copyLinkBtn");

    els.similarProducts = $("similarProducts");

    // order
    els.orderName = $("orderName");
    els.orderPhone = $("orderPhone");
    els.orderEmail = $("orderEmail");
    els.orderGov = $("orderGov");
    els.orderArea = $("orderArea");
    els.orderLandmark = $("orderLandmark");
    els.orderNotes = $("orderNotes");
    els.orderWhatsApp = $("orderWhatsApp");
    els.copyOrder = $("copyOrder");
  }

  /* =========================
     TEXT (same keys)
  ========================= */
  const TXT = {
    all: { ar: "الكل", en: "All", ku: "هەموو" },
    results: { ar: "نتائج", en: "Results", ku: "ئەنجامەکان" },
    available: { ar: "متوفرة", en: "Available", ku: "بەردەستە" },
    reserved: { ar: "محجوزة للمعاينة", en: "Reserved", ku: "گیراوە" },
    acquired: { ar: "تم اقتناؤها", en: "Acquired", ku: "وەرگیرا" },
    auction: { ar: "مزاد", en: "Auction", ku: "مەزاد" },
    similar: { ar: "قطع مشابهة", en: "Similar items", ku: "دانە هاوشێوەکان" },
    seeMore: { ar: "اضغط للمزيد", en: "See more", ku: "زیاتر ببینە" },
    seeLess: { ar: "إخفاء", en: "See less", ku: "کەمتر ببینە" },
    linkCopied: { ar: "تم نسخ الرابط", en: "Link copied", ku: "بەستەر کۆپی کرا" },
    copied: { ar: "تم النسخ", en: "Copied", ku: "کۆپی کرا" },
    copyFail: { ar: "تعذر النسخ", en: "Could not copy", ku: "نەتوانرا کۆپی بکرێت" },
    noResults: { ar: "لا توجد نتائج", en: "No results", ku: "هیچ ئەنجامێک نییە" },

    // Order UI
    orderDetails: { ar: "تفاصيل", en: "Details", ku: "وردەکاری" },
    orderRequest: { ar: "طلب", en: "Order", ku: "داواکردن" },
    customerInfo: { ar: "بيانات الزبون", en: "Customer details", ku: "زانیاری کڕیار" },

    ph_name: { ar: "الاسم الكامل", en: "Full name", ku: "ناوی تەواو" },
    ph_phone: { ar: "رقم الهاتف", en: "Phone number", ku: "ژمارەی تەلەفۆن" },
    ph_email: { ar: "البريد الإلكتروني", en: "Email", ku: "ئیمەیڵ" },
    ph_gov: { ar: "المحافظة", en: "Governorate", ku: "پارێزگا" },
    ph_area: { ar: "المنطقة", en: "Area", ku: "ناوچە" },
    ph_landmark: { ar: "أقرب نقطة دالة (اختياري)", en: "Nearest landmark (optional)", ku: "نیشانەی نزیک (هەڵبژاردەیی)" },
    ph_notes: { ar: "ملاحظات (اختياري)", en: "Notes (optional)", ku: "تێبینی (هەڵبژاردەیی)" },

    sendOrder: { ar: "إرسال الطلب", en: "Send order", ku: "ناردنی داوا" },
    copyOrderBtn: { ar: "نسخ تفاصيل الطلب", en: "Copy order details", ku: "کۆپی کردنی زانیاری داوا" },
    closeTxt: { ar: "إغلاق", en: "Close", ku: "داخستن" },

    req: { ar: "رجاءً أكمل الحقول المطلوبة", en: "Please complete required fields", ku: "تکایە خانە پێویستەکان پڕ بکەوە" },
    badEmail: { ar: "البريد الإلكتروني غير صحيح", en: "Invalid email address", ku: "ئیمەیڵ دروست نییە" },
    badName: { ar: "الاسم لازم يكون ثلاثي (3 كلمات)", en: "Full name must be at least 3 words", ku: "ناو پێویستە 3 وشە یان زیاتر بێت" },
    badPhone: { ar: "رقم الهاتف غير صحيح", en: "Invalid phone number", ku: "ژمارەی تەلەفۆن دروست نییە" },
  };

  /* =========================
     ✅ Categories (FIXED)
     - MUST match lengths + order to avoid "undefined"
  ========================= */
  const CATEGORY_KEYS = [
    "artworks",
    "paintings",
    "wood",
    "copper",
    "silver", // ✅ added
    "crystal",
    "furniture",
    "arabicCalligraphy",
    "accessories",
    "carpets",
    "vases",  // ✅ added
  ];

  const CAT_AR = [
    "اعمال فنية",
    "لوحات",
    "خشب",
    "نحاس",
    "فضة",     // ✅ added
    "كريستال",
    "اثاث",
    "خطوط عربية",
    "اكسسوارات",
    "سجاد",
    "فازات",   // ✅ added
  ];

  const CAT_EN = [
    "Artworks",
    "Paintings",
    "Wood",
    "Copper",
    "Silver",  // ✅ added
    "Crystal",
    "Furniture",
    "Arabic Calligraphy",
    "Accessories",
    "Carpets",
    "Vases",   // ✅ added
  ];

  const CAT_KU = [
    "کاری هونەری",
    "تابلۆکان",
    "دار",
    "مەس",
    "زیو",     // ✅ added
    "کریستاڵ",
    "کەلوپەلی ناوماڵ",
    "خەتاطی عەرەبی",
    "ئاکسسوار",
    "فرش",
    "گۆڵدان",  // ✅ added
  ];

  function getLang() {
    return (els.langSelect && els.langSelect.value) || localStorage.getItem(LANG_KEY) || "ar";
  }
  function t(k) {
    const lang = getLang();
    return (TXT[k] && TXT[k][lang]) || k;
  }
  function catLabel(key) {
    if (key === "all") return t("all");
    const i = CATEGORY_KEYS.indexOf(key);
    if (i === -1) return key;
    const lang = getLang();
    return lang === "en" ? CAT_EN[i] : lang === "ku" ? CAT_KU[i] : CAT_AR[i];
  }
  function applyLangToDOM(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
  }
  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLangToDOM(lang);
    renderAll();
    applyOrderI18n();
    if (state.openKey) openModal(state.openKey, true);
  }

  function applyOrderI18n() {
    if (els.pinDetailsToggle) els.pinDetailsToggle.textContent = t("orderDetails");
    if (els.pinOrderToggle) els.pinOrderToggle.textContent = t("orderRequest");

    if (els.orderName) els.orderName.placeholder = t("ph_name");
    if (els.orderPhone) els.orderPhone.placeholder = "";
    if (els.orderEmail) els.orderEmail.placeholder = "example@email.com";
    if (els.orderGov) els.orderGov.placeholder = t("ph_gov");
    if (els.orderArea) els.orderArea.placeholder = t("ph_area");
    if (els.orderLandmark) els.orderLandmark.placeholder = t("ph_landmark");
    if (els.orderNotes) els.orderNotes.placeholder = t("ph_notes");

    if (els.orderWhatsApp) els.orderWhatsApp.textContent = t("sendOrder");
    if (els.copyOrder) els.copyOrder.textContent = t("copyOrderBtn");

    if (els.modalClose) els.modalClose.textContent = t("closeTxt");
  }

  /* =========================
     Category normalize (FIXED)
  ========================= */
  function normCatInput(s) {
    // ✅ better Arabic normalization (handles ة/ه, أ/ا, etc.)
    return normalizeArabic(s);
  }

  function normalizeCategoryKey(input) {
    const s = normCatInput(input);
    if (!s) return "other";
    if (CATEGORY_KEYS.includes(s)) return s;

    // AR
    if (s.includes("اعمال") || s.includes("اعمال") || s.includes("عمل فني") || s.includes("فن")) return "artworks";
    if (s.includes("لوحات") || s.includes("لوحه") || s.includes("لوحه")) return "paintings";
    if (s.includes("خشب") || s.includes("اخشاب")) return "wood";
    if (s.includes("نحاس")) return "copper";
    if (s.includes("فضه") || s.includes("فضيات") || s.includes("سلفر")) return "silver"; // ✅ silver
    if (s.includes("كريستال")) return "crystal";
    if (s.includes("اثاث") || s.includes("اثاث") || s.includes("كنب") || s.includes("كرسي") || s.includes("طاولة")) return "furniture";
    if (s.includes("خطوط") || s.includes("خط عربي") || s.includes("calligraphy")) return "arabicCalligraphy";
    if (s.includes("اكسسوارات") || s.includes("اكسسوار")) return "accessories";
    if (s.includes("سجاد") || s.includes("زوليه") || s.includes("زوالي")) return "carpets";
    if (s.includes("فازه") || s.includes("فازات") || s.includes("مزهرية") || s.includes("مزاهير")) return "vases"; // ✅ vases

    // EN
    if (s.includes("artwork") || s === "art" || s.includes("artworks")) return "artworks";
    if (s.includes("painting")) return "paintings";
    if (s.includes("wood")) return "wood";
    if (s.includes("copper")) return "copper";
    if (s.includes("silver")) return "silver";
    if (s.includes("crystal")) return "crystal";
    if (s.includes("furniture")) return "furniture";
    if (s.includes("arabic calligraphy") || (s.includes("calligraphy") && s.includes("arabic"))) return "arabicCalligraphy";
    if (s.includes("accessor")) return "accessories";
    if (s.includes("carpet") || s.includes("rug")) return "carpets";
    if (s.includes("vase") || s.includes("vases")) return "vases";

    // KU
    if (s.includes("کاری هونەری") || s.includes("هونەری")) return "artworks";
    if (s.includes("تابلۆ")) return "paintings";
    if (s.includes("دار")) return "wood";
    if (s.includes("مەس")) return "copper";
    if (s.includes("زيو") || s.includes("زیو")) return "silver";
    if (s.includes("کریستاڵ")) return "crystal";
    if (s.includes("کەلوپەل")) return "furniture";
    if (s.includes("خەتاطی")) return "arabicCalligraphy";
    if (s.includes("ئاکسسوار")) return "accessories";
    if (s.includes("فرش")) return "carpets";
    if (s.includes("گۆڵدان") || s.includes("ڤاز")) return "vases";

    return "other";
  }

  /* =========================
     Products hydrate
  ========================= */
  function getProductsRaw() {
    if (Array.isArray(window.PRODUCTS)) return window.PRODUCTS;
    if (Array.isArray(window.HOA_PRODUCTS)) return window.HOA_PRODUCTS;
    if (Array.isArray(window.products)) return window.products;
    return [];
  }

  function normalizeStatusKey(p) {
    const raw = safeText(p.statusKey || p.status || "").toLowerCase();
    if (raw.includes("acquired") || raw.includes("تم")) return "acquired";
    if (raw.includes("reserved") || raw.includes("محجوز")) return "reserved";
    return "available";
  }
  function statusText(key) {
    if (key === "available") return t("available");
    if (key === "reserved") return t("reserved");
    if (key === "acquired") return t("acquired");
    return "—";
  }

  function getImages(p) {
    const arr = Array.isArray(p.images) ? p.images.filter(Boolean) : [];
    const one = safeText(p.image || p._image || "");
    if (one && !arr.includes(one)) arr.unshift(one);
    return arr.filter(Boolean);
  }

  // Small helper to reduce scroll jumps:
  const AR_KEY = "hoa_img_ar_v1";
  let AR_MAP = {};
  function loadAR() {
    try {
      AR_MAP = JSON.parse(localStorage.getItem(AR_KEY) || "{}") || {};
    } catch {
      AR_MAP = {};
    }
  }
  function saveAR() {
    try {
      localStorage.setItem(AR_KEY, JSON.stringify(AR_MAP));
    } catch {}
  }
  function getAR(url) {
    return AR_MAP[url] || null;
  }
  function setAR(url, w, h) {
    if (!url || !w || !h) return;
    const ar = `${w}/${h}`;
    if (AR_MAP[url] !== ar) {
      AR_MAP[url] = ar;
      saveAR();
    }
  }

  let ALL = [];
  function hydrate() {
    const raw = getProductsRaw();
    const seen = new Map();

    ALL = raw.map((p, idx) => {
      const code = safeText(p.code || p.id || `ITEM-${idx + 1}`);
      const n = (seen.get(code) || 0) + 1;
      seen.set(code, n);
      const key = n === 1 ? code : `${code}__${n}`;

      const catText = pickText(p, "category", getLang) || safeText(p.category || p.cat || "");
      const catKey = normalizeCategoryKey(catText);

      const priceText = safeText(p.price) || formatIQD(p.priceNumber);

      const images = getImages(p);
      const cover = images[0] || "";

      return {
        ...p,
        _key: key,
        _code: code,
        _catKey: catKey,
        _statusKey: normalizeStatusKey(p),
        _priceText: priceText,
        _priceNum: Number(p.priceNumber || 0),
        _createdNum: Date.parse(p.createdAt || "") || 0,
        _images: images,
        _cover: cover,
      };
    });
  }

  function getByKey(key) {
    return ALL.find((p) => p._key === key) || null;
  }

  /* =========================
     Favorites
  ========================= */
  let favs = new Set();
  function loadFavs() {
    try {
      const raw = localStorage.getItem(FAV_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      favs = new Set(Array.isArray(arr) ? arr : []);
    } catch {
      favs = new Set();
    }
  }
  function saveFavs() {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify([...favs]));
    } catch {}
  }
  function toggleFav(key) {
    if (!key) return;
    favs.has(key) ? favs.delete(key) : favs.add(key);
    saveFavs();
    renderGrid();
    if (state.openKey === key) updateFavBtn(key);
  }
  function updateFavBtn(key) {
    if (!els.favBtn) return;
    els.favBtn.textContent = favs.has(key) ? "♥" : "♡";
  }

  /* =========================
     State
  ========================= */
  const state = {
    q: "",
    cat: localStorage.getItem(CAT_KEY) || "all",
    sort: "featured",
    show: "all",
    openKey: null,
  };

  /* =========================
     Filtering + sorting
  ========================= */
  function matchesSearch(p, qNorm) {
    if (!qNorm) return true;
    const name = normalizeArabic(pickText(p, "name", getLang));
    const code = normalizeArabic(p._code);
    const desc = normalizeArabic(pickText(p, "desc", getLang));
    return name.includes(qNorm) || code.includes(qNorm) || desc.includes(qNorm);
  }

  function passes(p) {
    if (state.show === "fav" && !favs.has(p._key)) return false;
    if (state.cat !== "all" && p._catKey !== state.cat) return false;
    return matchesSearch(p, normalizeArabic(state.q));
  }

  function sortList(list) {
    const out = list.slice();

    if (state.sort === "newest") {
      out.sort((a, b) => (Date.parse(b.createdAt || "") || 0) - (Date.parse(a.createdAt || "") || 0));
      return out;
    }

    if (state.sort === "priceAsc") {
      out.sort((a, b) => Number(a.priceNumber || 0) - Number(b.priceNumber || 0));
      return out;
    }

    if (state.sort === "priceDesc") {
      out.sort((a, b) => Number(b.priceNumber || 0) - Number(a.priceNumber || 0));
      return out;
    }

    out.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    return out;
  }

  /* =========================
     Categories chips
  ========================= */
  function renderChips() {
    if (!els.chipsWrap) return;
    const keys = ["all", ...CATEGORY_KEYS];
    els.chipsWrap.innerHTML = keys
      .map((k) => {
        const active = state.cat === k ? "is-active" : "";
        return `<button class="chip ${active}" type="button" data-cat="${k}">${catLabel(k)}</button>`;
      })
      .join("");
  }

  /* =========================
     Grid (Pinterest masonry stability fix)
  ========================= */
  function tileHTML(p) {
    const name = pickText(p, "name", getLang);
    const st = statusText(p._statusKey);
    const fav = favs.has(p._key);

    const ar = getAR(p._cover) || "4/3";

    const mediaStyle = [
      "width:100%",
      `aspect-ratio:${ar}`,
      "border-radius:18px",
      "overflow:hidden",
      "background:rgba(255,255,255,.06)",
    ].join(";");

    const imgStyle = [
      "width:100%",
      "height:100%",
      "display:block",
      "object-fit:cover",
    ].join(";");

    return `
      <div class="tile" data-key="${p._key}">
        <div class="tileMedia" style="${mediaStyle}">
          <img class="tileImg" data-cover="1" src="${safeText(p._cover)}" alt="${safeText(name)}" loading="lazy" decoding="async" style="${imgStyle}">
        </div>

        <div class="tileMeta">
          <div class="tileName">${safeText(name)}</div>

          <div class="tileSub">
            <span>${safeText(p._code)}</span>
            <span>${safeText(p._priceText)}</span>
          </div>

          <div class="tileSub">
            <span>${safeText(st)}</span>
            <span class="favDot" title="Fav">${fav ? "♥" : "♡"}</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderGrid() {
    const list = sortList(ALL.filter(passes));
    if (els.resultsCount) els.resultsCount.textContent = `${list.length} ${t("results")}`;

    if (!list.length) {
      if (els.productsGrid) els.productsGrid.innerHTML = "";
      if (els.emptyState) {
        els.emptyState.style.display = "block";
        els.emptyState.textContent = t("noResults");
      }
      return;
    }

    if (els.emptyState) els.emptyState.style.display = "none";
    if (els.productsGrid) els.productsGrid.innerHTML = list.map(tileHTML).join("");

    primeAspectRatios();
  }

  function renderAll() {
    renderChips();
    renderGrid();
    renderFeatured();
  }

  function primeAspectRatios() {
    if (!els.productsGrid) return;
    const imgs = Array.from(els.productsGrid.querySelectorAll('img[data-cover="1"]'));
    imgs.forEach((img) => {
      if (img.__arBound) return;
      img.__arBound = true;

      const onDone = () => {
        const w = img.naturalWidth || 0;
        const h = img.naturalHeight || 0;
        if (w > 0 && h > 0) setAR(img.currentSrc || img.src, w, h);
      };

      if (img.complete) onDone();
      else img.addEventListener("load", onDone, { once: true });
    });
  }

  /* =========================
     Fullscreen modal + back
  ========================= */
  function setBodyScrollLock(lock) {
    document.body.classList.toggle("noScroll", !!lock);
  }

  function buildItemLink(p) {
    try {
      const base = new URL(STORE_CANONICAL_URL);
      if (!base.pathname.endsWith("/")) base.pathname += "/";
      base.hash = `item=${encodeURIComponent(p._key)}`;
      return base.toString();
    } catch {
      const url = new URL(window.location.href);
      url.hash = `item=${encodeURIComponent(p._key)}`;
      return url.toString();
    }
  }

  /* =========================
     Modal media (FIX #1 + #2)
  ========================= */
  function clearModalSlider() {
    const old = els.modalBody?.querySelector(".hoaSlider");
    if (old) old.remove();
    if (els.modalMainImg) {
      els.modalMainImg.style.display = "";
      els.modalMainImg.removeAttribute("data-hidden");
    }
  }

  function renderModalMedia(p) {
    if (!els.modalBody) return;

    const images = Array.isArray(p._images) ? p._images : [];
    const many = images.length > 1;

    clearModalSlider();

    if (els.modalMainImg) {
      els.modalMainImg.style.maxWidth = "100%";
      els.modalMainImg.style.width = "100%";
      els.modalMainImg.style.height = "auto";
      els.modalMainImg.style.maxHeight = "70vh";
      els.modalMainImg.style.objectFit = "contain";
      els.modalMainImg.style.display = many ? "none" : "";
      els.modalMainImg.setAttribute("data-hidden", many ? "1" : "0");
    }

    if (!many) {
      const src = images[0] || p._cover || "";
      els.modalMainImg.src = src;
      return;
    }

    const slider = document.createElement("div");
    slider.className = "hoaSlider";
    slider.setAttribute(
      "style",
      [
        "width:100%",
        "margin:0 0 10px 0",
        "border-radius:18px",
        "overflow:hidden",
        "background:rgba(255,255,255,.05)",
        "position:relative",
      ].join(";")
    );

    slider.innerHTML = `
      <div class="hoaSliderTrack" style="
        display:flex;
        overflow-x:auto;
        scroll-snap-type:x mandatory;
        -webkit-overflow-scrolling:touch;
        gap:8px;
        scrollbar-width:none;
      ">
      ${images
        .map(
          (src) => `
  <div class="hoaSlide" style="
    flex:0 0 100%;
    scroll-snap-align:center;
    height:70vh;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
  ">
    <img src="${safeText(src)}" alt="" loading="lazy" decoding="async"
      style="
        width:100%;
        height:100%;
        object-fit:contain;
        display:block;
        margin:0 auto;
        background:transparent;
      ">
  </div>
`
        )
        .join("")}
      </div>

      <button type="button" class="hoaPrev" aria-label="prev" style="
        position:absolute; top:50%; transform:translateY(-50%);
        left:10px; z-index:2;
        width:40px; height:40px; border-radius:999px;
        border:0; background:rgba(0,0,0,.45); color:#fff;
        display:flex; align-items:center; justify-content:center;
        cursor:pointer;
      ">‹</button>

      <button type="button" class="hoaNext" aria-label="next" style="
        position:absolute; top:50%; transform:translateY(-50%);
        right:10px; z-index:2;
        width:40px; height:40px; border-radius:999px;
        border:0; background:rgba(0,0,0,.45); color:#fff;
        display:flex; align-items:center; justify-content:center;
        cursor:pointer;
      ">›</button>

      <div class="hoaDots" style="
        position:absolute; left:0; right:0; bottom:10px; z-index:2;
        display:flex; gap:6px; justify-content:center; align-items:center;
        pointer-events:auto;
      ">
        ${images
          .map(
            (_, i) => `
          <button type="button" data-i="${i}" aria-label="dot ${i + 1}" style="
            width:8px; height:8px; border-radius:999px;
            border:0; background:rgba(255,255,255,.55);
            cursor:pointer; padding:0;
          "></button>
        `
          )
          .join("")}
      </div>
    `;

    const anchor = els.modalMainImg;
    if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(slider, anchor.nextSibling);
    else els.modalBody.prepend(slider);

    const track = slider.querySelector(".hoaSliderTrack");
    const btnPrev = slider.querySelector(".hoaPrev");
    const btnNext = slider.querySelector(".hoaNext");
    const dotsWrap = slider.querySelector(".hoaDots");
    const dots = Array.from(dotsWrap.querySelectorAll("button"));

    let idx = 0;
    const clamp = (n) => Math.max(0, Math.min(images.length - 1, n));

    const updateDots = () => {
      dots.forEach((d, i) => {
        d.style.background = i === idx ? "rgba(255,255,255,.95)" : "rgba(255,255,255,.55)";
        d.style.transform = i === idx ? "scale(1.2)" : "scale(1)";
      });
    };

    const go = (i) => {
      idx = clamp(i);
      const w = track.clientWidth;
      track.scrollTo({ left: w * idx, behavior: "smooth" });
      updateDots();
    };

    let raf = 0;
    const calcIdxByCenter = () => {
      const slides = Array.from(track.querySelectorAll(".hoaSlide"));
      if (!slides.length) return 0;

      const tr = track.getBoundingClientRect();
      const trackCenter = tr.left + tr.width / 2;

      let bestI = 0;
      let bestD = Infinity;

      slides.forEach((sl, i) => {
        const r = sl.getBoundingClientRect();
        const c = r.left + r.width / 2;
        const d = Math.abs(c - trackCenter);
        if (d < bestD) {
          bestD = d;
          bestI = i;
        }
      });

      return bestI;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        idx = clamp(calcIdxByCenter());
        updateDots();
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });

    btnPrev.addEventListener("click", () => go(idx - 1));
    btnNext.addEventListener("click", () => go(idx + 1));
    dotsWrap.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-i]");
      if (!b) return;
      go(Number(b.getAttribute("data-i") || 0));
    });

    updateDots();
    track.scrollLeft = 0;
  }

  /* =========================
     Similar
  ========================= */
  function getSimilar(p, limit = 6) {
    return ALL.filter((x) => x._key !== p._key && x._catKey === p._catKey).slice(0, limit);
  }
  function renderSimilar(p) {
    if (!els.similarProducts) return;
    const items = getSimilar(p, 6);
    if (!items.length) {
      els.similarProducts.innerHTML = "";
      return;
    }

    els.similarProducts.innerHTML = `
      <div class="similarHead">${t("similar")}</div>
      <div class="similarGrid">
        ${items
          .map(
            (x) => `
          <button class="similar-item" type="button" data-key="${x._key}">
            <img src="${safeText(x._cover)}" alt="" loading="lazy" decoding="async">
            <div class="t">${safeText(pickText(x,"name",getLang))}</div>
            <div class="pr">${safeText(x._priceText)}</div>
          </button>
        `
          )
          .join("")}
      </div>
    `;
  }
  /* =========================
     Order validation + phone
  ========================= */
  let iti = null;
  function initPhoneInput() {
    if (!els.orderPhone) return;
    if (window.intlTelInput) {
      iti = window.intlTelInput(els.orderPhone, {
        initialCountry: "iq",
        separateDialCode: true,
        nationalMode: false,
        autoPlaceholder: "aggressive",
      });
    }
  }

  function isValidEmail(email) {
    const e = safeText(email).trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e);
  }

  function isTripleName(name) {
    const parts = safeText(name).trim().split(/\s+/).filter(Boolean);
    return parts.length >= 3;
  }

  function getPhoneValue() {
    const raw = safeText(els.orderPhone?.value).trim();
    if (iti) {
      const ok = typeof iti.isValidNumber === "function" ? iti.isValidNumber() : raw.replace(/\D/g, "").length >= 7;
      const val = iti.getNumber ? iti.getNumber() : raw;
      return { ok, value: val };
    }
    const ok = raw.replace(/\D/g, "").length >= 7;
    return { ok, value: raw };
  }

  function validateOrder() {
    const name = safeText(els.orderName?.value).trim();
    const email = safeText(els.orderEmail?.value).trim();
    const gov = safeText(els.orderGov?.value).trim();
    const area = safeText(els.orderArea?.value).trim();

    if (!name || !email || !gov || !area) return { ok: false, msg: t("req") };
    if (!isTripleName(name)) return { ok: false, msg: t("badName") };
    if (!isValidEmail(email)) return { ok: false, msg: t("badEmail") };

    const ph = getPhoneValue();
    if (!ph.value || !ph.ok) return { ok: false, msg: t("badPhone") };

    return { ok: true, msg: "ok" };
  }

  function getCustomer() {
    const ph = getPhoneValue();
    return {
      name: safeText(els.orderName?.value).trim(),
      phone: safeText(ph.value).trim(),
      email: safeText(els.orderEmail?.value).trim(),
      gov: safeText(els.orderGov?.value).trim(),
      area: safeText(els.orderArea?.value).trim(),
      landmark: safeText(els.orderLandmark?.value).trim(),
      notes: safeText(els.orderNotes?.value).trim(),
    };
  }

  function buildOrderMessage(p, includeLink = true) {
    const lang = getLang();
    const c = getCustomer();
    const name = pickText(p, "name", getLang);
    const desc = pickText(p, "desc", getLang);
    const link = includeLink ? buildItemLink(p) : "";
    const st = statusText(p._statusKey);

    if (lang === "en") {
      return [
        "Hello House of Antiques 👋",
        "I would like to order / reserve this item:",
        `• Item: ${name}`,
        `• Code: ${p._code}`,
        `• Status: ${st}`,
        `• Price: ${p._priceText}`,
        desc ? `• Details: ${desc}` : "",
        link ? `• Link: ${link}` : "",
        "",
        "Customer details:",
        `• Full name: ${c.name}`,
        `• Phone: ${c.phone}`,
        `• Email: ${c.email}`,
        `• Governorate/City: ${c.gov}`,
        `• Area: ${c.area}`,
        c.landmark ? `• Landmark: ${c.landmark}` : "",
        c.notes ? `• Notes: ${c.notes}` : "",
      ]
        .filter(Boolean)
        .join("\n");
    }

    if (lang === "ku") {
      return [
        "سڵاو بیت التحفیات 👋",
        "دەمەوێت ئەم دانە داوا/گیربکەم:",
        `• شت: ${name}`,
        `• کۆد: ${p._code}`,
        `• دۆخ: ${st}`,
        `• نرخ: ${p._priceText}`,
        desc ? `• وردەکاری: ${desc}` : "",
        link ? `• بەستەر: ${link}` : "",
        "",
        "زانیاری کڕیار:",
        `• ناو: ${c.name}`,
        `• ژمارە: ${c.phone}`,
        `• ئیمەیڵ: ${c.email}`,
        `• پارێزگا/شار: ${c.gov}`,
        `• ناوچە: ${c.area}`,
        c.landmark ? `• نیشانە: ${c.landmark}` : "",
        c.notes ? `• تێبینی: ${c.notes}` : "",
      ]
        .filter(Boolean)
        .join("\n");
    }

    return [
      "مرحباً بيت التحفيات 👋",
      "أرغب بطلب / حجز هذه القطعة:",
      `• القطعة: ${name}`,
      `• الكود: ${p._code}`,
      `• الحالة: ${st}`,
      `• السعر: ${p._priceText}`,
      desc ? `• الوصف: ${desc}` : "",
      link ? `• الرابط: ${link}` : "",
      "",
      "بيانات الزبون:",
      `• الاسم الثلاثي: ${c.name}`,
      `• الهاتف: ${c.phone}`,
      `• البريد الإلكتروني: ${c.email}`,
      `• المحافظة/المدينة: ${c.gov}`,
      `• المنطقة: ${c.area}`,
      c.landmark ? `• أقرب نقطة دالة: ${c.landmark}` : "",
      c.notes ? `• ملاحظات: ${c.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function sendOrderEmail(p, messageText) {
    return new Promise((resolve) => {
      if (!window.emailjs) {
        console.warn("EmailJS not loaded");
        toast("EmailJS غير محمّل");
        return resolve(false);
      }

      if (!window.__hoa_emailjs_inited) {
        try {
          window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
        } catch {
          try {
            window.emailjs.init(EMAILJS_PUBLIC_KEY);
          
          } catch (e) {
            console.warn(e);
            toast("تعذر تهيئة EmailJS");
            return resolve(false);
          }
        }
        window.__hoa_emailjs_inited = true;
      }

      const c = getCustomer();

      const params = {
        item_name: pickText(p, "name", getLang),
        item_code: p._code,
        item_price: p._priceText,
        item_status: statusText(p._statusKey),
        item_link: buildItemLink(p),
        item_image: p._cover || "",
        customer_name: c.name,
        customer_phone: c.phone,
        customer_email: c.email,
        customer_gov: c.gov,
        customer_area: c.area,
        customer_landmark: c.landmark || "-",
        customer_notes: c.notes || "-",
        message: messageText,
      };

      window.emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
        .then(() => {
          toast("تم إرسال الطلب إلى الإيميل ✅");
          resolve(true);
        })
        .catch((err) => {
          console.error("EmailJS send error:", err);
          toast("فشل إرسال الإيميل ❌");
          resolve(false);
        });
    });
  }

  /* =========================
     Modal open/close
  ========================= */
  function openModal(key, silent = false) {
    const p = getByKey(key);
    if (!p || !els.modal) return;

    state.openKey = key;

    const name = pickText(p, "name", getLang);
    const desc = pickText(p, "desc", getLang);
    const dims = safeText(p.dimensions || p.dimension || p.size || "").trim();

    els.modalTitle.textContent = safeText(name);
    els.modalCode.textContent = safeText(p._code);
    els.modalStatus.textContent = statusText(p._statusKey);
    els.pinPrice.textContent = safeText(p._priceText);

    if (els.modalBadge) {
      els.modalBadge.style.display = p.auction ? "inline-flex" : "none";
      if (p.auction) els.modalBadge.textContent = t("auction");
    }

    if (els.itemDimensions) els.itemDimensions.textContent = dims;
    if (els.pinDimsWrap) els.pinDimsWrap.style.display = dims ? "block" : "none";

    // Media (fix #1 + #2)
    renderModalMedia(p);

    // Desc
    els.pinDesc.textContent = safeText(desc) || "—";
    els.pinDesc.classList.add("is-collapsed");

    const long = safeText(desc).length > 120;
    els.pinMoreBtn.style.display = long ? "inline-block" : "none";
    els.pinMoreBtn.textContent = t("seeMore");
    els.pinMoreBtn.onclick = () => {
      const collapsed = els.pinDesc.classList.toggle("is-collapsed");
      els.pinMoreBtn.textContent = collapsed ? t("seeMore") : t("seeLess");
    };

    // Panels

    showPanel("details");
    applyOrderI18n();

    els.pinDetailsToggle.onclick = () => showPanel("details");
    els.pinOrderToggle.onclick = () => showPanel("order");

    function showPanel(which) {
      if (which === "order") {
        els.pinOrderPanel.style.display = "block";
        els.pinDetails.style.display = "none";
        els.pinOrderToggle.classList.add("active");
        els.pinDetailsToggle.classList.remove("active");
      } else {
        els.pinDetails.style.display = "block";
        els.pinOrderPanel.style.display = "none";
        els.pinDetailsToggle.classList.add("active");
        els.pinOrderToggle.classList.remove("active");
      }
    }

    // Fav
    updateFavBtn(key);
    els.favBtn.onclick = () => toggleFav(key);

    // Share/copy
    els.copyLinkBtn.onclick = async () => {
      const ok = await copyToClipboard(buildItemLink(p));
      toast(ok ? t("linkCopied") : t("copyFail"));
    };

    els.shareWaBtn.onclick = () => {
      const msg = buildOrderMessage(p, true);
      window.open(`https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    };

    els.orderWhatsApp.onclick = async () => {
      const check = validateOrder();
      if (!check.ok) {
        toast(check.msg);
        return;
      }
      const msg = buildOrderMessage(p, true);
      await sendOrderEmail(p, msg);
      window.open(`https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    };

    els.copyOrder.onclick = async () => {
      const check = validateOrder();
      if (!check.ok) {
        toast(check.msg);
        return;
      }
      const ok = await copyToClipboard(buildOrderMessage(p, true));
      toast(ok ? t("copied") : t("copyFail"));
    };

    // Similar under the media / content
    renderSimilar(p);

    els.modal.classList.add("is-open");
    els.modal.setAttribute("aria-hidden", "false");
    setBodyScrollLock(true);
    if (els.modalBody) els.modalBody.scrollTop = 0;

    if (!silent) {
      const url = new URL(window.location.href);
      url.hash = `item=${encodeURIComponent(p._key)}`;
      history.pushState({ modal: true, key: p._key }, "", url.toString());
    }
  }

  function closeModal(pushClean = true) {
  if (!els.modal) return;

  els.modal.classList.remove("is-open");
  els.modal.setAttribute("aria-hidden", "true");

  setBodyScrollLock(false);
  state.openKey = null;

  clearModalSlider();

  // optional sound
  window.HOA_SFX?.play?.("click");

  if (pushClean) {
    const url = new URL(window.location.href);
    url.hash = "";
    history.pushState({}, "", url.toString());
  }

  }

  /* =========================
     Featured (unchanged idea)
  ========================= */
  function renderFeatured() {
    const wrap = document.getElementById("featuredWrap");
    if (!wrap) return;

    const featured = ALL.filter((p) => p.featured === true).slice(0, 10);
    if (!featured.length) {
      wrap.innerHTML = "";
      return;
    }

    const lang = getLang();
    const title = lang === "en" ? "Featured" : lang === "ku" ? "هەڵبژاردەکان" : "قطع مميزة";

    wrap.innerHTML = `
      <div class="featuredHead"><div class="title">${title}</div></div>
      <div class="featuredRail">
        ${featured
          .map((p) => {
            const name = pickText(p, "name", getLang) || p._code;
            return `
              <div class="featuredCard" data-key="${p._key}">
                <div class="featuredImg"><img src="${safeText(p._cover)}" alt="" loading="lazy" decoding="async"></div>
                <div class="featuredBody">
                  <div class="featuredName">${safeText(name)}</div>
                  <div class="featuredMeta">
                    <span>${safeText(p._code)}</span>
                    <span>${safeText(p._priceText)}</span>
                  </div>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;

    wrap.querySelectorAll(".featuredCard").forEach((card) => {
      card.addEventListener("click", () => {
        const k = card.getAttribute("data-key");
        if (k) openModal(k);
      });
    });
  }

  /* =========================
     Hash open
  ========================= */
  function tryOpenFromHash() {
    const h = safeText(location.hash);
    const m = h.match(/item=([^&]+)/);
    if (!m) return;
    const key = decodeURIComponent(m[1]);
    if (getByKey(key)) setTimeout(() => openModal(key, true), 50);
  }

  /* =========================
     Hero slider (same logic)
  ========================= */
  function initHeroSlider() {
    const slider = document.getElementById("heroSlider");
    const track = document.getElementById("heroTrack");
    const dotsWrap = document.getElementById("heroDots");
    if (!track || !dotsWrap) return;

    const slides = Array.from(track.children);
    const total = slides.length;
    if (total <= 1) return;

    const isRTL = () => (document.documentElement.dir || "").toLowerCase() === "rtl";

    dotsWrap.innerHTML = slides.map((_, i) => `<button type="button" aria-label="slide ${i + 1}"></button>`).join("");
    const dots = Array.from(dotsWrap.querySelectorAll("button"));

    let idx = 0;
    let timer = null;

    const apply = () => {
      const x = idx * 100;
      track.style.transform = isRTL() ? `translateX(${x}%)` : `translateX(-${x}%)`;
      dots.forEach((d, di) => d.classList.toggle("is-active", di === idx));
    };

    const go = (i, user = false) => {
      idx = (i + total) % total;
      apply();
      if (user) restart();
    };

    const next = () => go(idx + 1);

    function restart() {
      if (timer) clearInterval(timer);
      timer = setInterval(next, 4000);
    }

    dots.forEach((d, i) => d.addEventListener("click", () => go(i, true)));
    slider?.addEventListener("mouseenter", () => timer && clearInterval(timer));
    slider?.addEventListener("mouseleave", () => restart());

    go(0);
    restart();
    window.addEventListener("resize", apply);
  }

  /* =========================
     Events
  ========================= */
  function bindEvents() {
    if (els.langSelect) {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved) els.langSelect.value = saved;
      applyLangToDOM(getLang());
      els.langSelect.addEventListener("change", (e) => setLang(e.target.value || "ar"));
    }

    els.searchInput?.addEventListener("input", (e) => {
      state.q = e.target.value || "";
      renderGrid();
    });

    els.sortSelect?.addEventListener("change", (e) => {
      state.sort = e.target.value || "featured";
      renderGrid();
    });

    els.showSelect?.addEventListener("change", (e) => {
      state.show = e.target.value || "all";
      renderGrid();
    });

    els.chipsWrap?.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-cat]");
      if (!btn) return;
      state.cat = btn.getAttribute("data-cat") || "all";
      localStorage.setItem(CAT_KEY, state.cat);
      renderAll();
    });

    els.productsGrid?.addEventListener("click", (e) => {
      
      const tile = e.target.closest(".tile");
      if (!tile) return;
      const key = tile.getAttribute("data-key");
      if (!key) return;

      if (e.target.closest(".favDot")) {
        toggleFav(key);
        window.HOA_SFX?.play("click");
        toggleFav(key);

        return;
      }
      openModal(key);
    });

    els.modalClose?.addEventListener("click", () => closeModal(true));
    els.modal?.addEventListener("click", (e) => {
      if (e.target === els.modal) closeModal(true);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && els.modal?.classList.contains("is-open")) closeModal(true);
    });

    window.addEventListener("popstate", () => {
      const hasItem = /item=/.test(String(location.hash || ""));
      if (els.modal?.classList.contains("is-open") && !hasItem) {
        closeModal(false);
      } else if (hasItem) {
        tryOpenFromHash();
      }
    });

    document.addEventListener("click", (e) => {
      const sim = e.target.closest(".similar-item");
      if (!sim) return;
      const k = sim.getAttribute("data-key");
      if (k) openModal(k);
    });
  }

  /* =========================
     Init
  ========================= */
  function init() {
    try {
      bindEls();
      loadAR();
      loadFavs();
      hydrate();

      if (state.cat !== "all" && !CATEGORY_KEYS.includes(state.cat)) state.cat = "all";

      // Safe EmailJS init
      if (window.emailjs && EMAILJS_PUBLIC_KEY) {
        try {
          if (typeof window.emailjs.init === "function") {
            try {
              window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
            } catch {
              window.emailjs.init(EMAILJS_PUBLIC_KEY);
              
            }
          }
        } catch (e) {
          console.warn("EmailJS init failed:", e);
        }
      }

      initPhoneInput();
      initHeroSlider();
      
      
      bindEvents();
      renderAll();
      tryOpenFromHash();
    } catch (err) {
      console.error("HOA script error:", err);
      try {
        if (els.emptyState) {
          els.emptyState.style.display = "block";
          els.emptyState.textContent = "JS Error — افتحي Console";
        }
      } catch {}
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
// Fix product images sizing without needing refresh
window.addEventListener("load", () => {
  document.querySelectorAll(".product-card img, .card img, .product img").forEach(img => {
    if (img.complete) return;
    img.addEventListener("load", () => {
      // trigger reflow for some layouts
      img.style.transform = "translateZ(0)";
      requestAnimationFrame(() => (img.style.transform = ""));
    });
  });
});
