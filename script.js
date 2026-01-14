/* =========================================================
   HOA Store — script.js (FROM SCRATCH)
   - AR / EN / KU (RTL for AR+KU)
   - Email FIRST → then WhatsApp
   - Validation + field alerts (required fields only)
     Required: name, phone, governorate/city, area
     Optional: landmark, notes
   - Modal: Details/Order tabs + Sticky Top (shrinks on scroll)

   ✅ ADDED:
   - Featured section (#featuredSection, #featuredRow)
   - Auction toggle button (#auctionToggleBtn) controls #auctionBlock + persists state
   - Separate category: Furniture (أثاث) not merged with Wood

   ✅ FIXED (ONLY):
   - Mobile back button closes the modal (details) instead of exiting the store.
========================================================= */

(() => {
  "use strict";

  /* =========================
     0) CONFIG
  ========================= */
  const WHATSAPP_NUMBER_INTL = "9647737079079";

  // EmailJS
  const EMAILJS_PUBLIC_KEY = "tivoinl7MHIKAOORE";
  const EMAILJS_SERVICE_ID = "service_bm4mbb9";
  const EMAILJS_TEMPLATE_ID = "template_yksn5vh";

  const FAV_KEY = "hoa_favorites_v2";
  const THEME_KEY = "hoa_theme_v2";
  const LANG_KEY = "hoa_lang_v2";

  // ✅ Auction visibility
  const AUCTION_VIS_KEY = "hoa_auction_visible_v1";

  const $ = (id) => document.getElementById(id);

  /* =========================
     1) i18n
  ========================= */
  const I18N = () => window.I18N || null;

  function getLang() {
    const i = I18N();
    if (i && typeof i.getLang === "function") return i.getLang();
    return localStorage.getItem(LANG_KEY) || "ar";
  }

  function applyLangToDOM(lang) {
    const isRTL = lang === "ar" || lang === "ku";
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    const i = I18N();

    if (i && typeof i.setLang === "function") i.setLang(lang);
    else applyLangToDOM(lang);

    renderAll();
    if (state.openKey) openModal(state.openKey, state.openTab || "details", true);
    // ✅ update auction button text after lang change
    syncAuctionToggleUI();
  }

  const MSG = {
    sending:      { ar: "جارٍ إرسال الطلب...", en: "Sending order...", ku: "داواکاری دەنێردرێت..." },
    email_sent:   { ar: "تم إرسال الطلب إلى البريد بنجاح ✅", en: "Order email sent ✅", ku: "ئیمەیڵی داواکاری نێردرا ✅" },
    email_failed: { ar: "تعذر إرسال الإيميل، سيتم المتابعة عبر واتساب.", en: "Email failed; continuing via WhatsApp.", ku: "ئیمەیڵ نەبوو؛ بە واتساپ بەردەوام دەبین." },

    fix_fields:   { ar: "يرجى إكمال الحقول المطلوبة.", en: "Please complete the required fields.", ku: "تکایە خانە پێویستەکان پڕ بکە." },
    required_name:{ ar: "الرجاء إدخال الاسم.", en: "Please enter your name.", ku: "تکایە ناوت بنووسە." },
    required_phone:{ ar: "الرجاء إدخال رقم هاتف صحيح (يمكن دولي).", en: "Please enter a valid phone number (international allowed).", ku: "تکایە ژمارەیەکی دروست بنووسە." },
    required_gov: { ar: "الرجاء إدخال المحافظة/المدينة.", en: "Please enter your governorate/city.", ku: "تکایە پارێزگا/شار بنووسە." },
    required_area:{ ar: "الرجاء إدخال المنطقة.", en: "Please enter your area.", ku: "تکایە ناوچە بنووسە." },

    copied_link:  { ar: "تم نسخ الرابط", en: "Link copied", ku: "بەستەر کۆپی کرا" },
    copied_order: { ar: "تم نسخ تفاصيل الطلب", en: "Order details copied", ku: "وردەکاری داواکاری کۆپی کرا" },
    cannot_copy:  { ar: "تعذر النسخ", en: "Could not copy", ku: "نەتوانرا کۆپی بکرێت" },

    btn_details:  { ar: "تفاصيل", en: "Details", ku: "وردەکاری" },
    btn_order:    { ar: "طلب", en: "Order", ku: "داوا" },

    badge_auction:{ ar: "مزاد", en: "Auction", ku: "مەزاد" },
    results_word: { ar: "نتائج", en: "Results", ku: "ئەنجامەکان" },

    status_available:{ ar: "متوفرة", en: "Available", ku: "بەردەستە" },
    status_reserved: { ar: "محجوزة للمعاينة", en: "Reserved", ku: "گیراوە" },
    status_acquired: { ar: "تم اقتناؤها", en: "Acquired", ku: "وەرگیرا" },

    // ✅ Auction toggle labels
    auction_show: { ar: "إظهار قسم المزاد", en: "Show auction section", ku: "پیشاندانی بەشی مەزاد" },
    auction_hide: { ar: "إخفاء قسم المزاد", en: "Hide auction section", ku: "شاردنەوەی بەشی مەزاد" },

    // ✅ Featured empty
    no_featured:  { ar: "لا توجد قطع مميزة حالياً", en: "No featured items right now", ku: "هیچ دانەیەکی تایبەت نییە" },
  };

  function m(key, fallback) {
    const lang = getLang();
    const obj = MSG[key];
    if (obj && obj[lang]) return obj[lang];
    if (obj && obj.ar) return obj.ar;
    return fallback ?? key;
  }

  /* =========================
     2) HELPERS
  ========================= */
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
    try { return `${n.toLocaleString("en-US")} د.ع`; }
    catch { return `${String(n)} د.ع`; }
  }

  function pickText(obj, field) {
    const lang = getLang();
    const aliases = {
      name: ["name", "title"],
      desc: ["desc", "description"],
      category: ["category", "catName"],
    };
    const keys = aliases[field] || [field];

    for (const k of keys) {
      const v = obj?.[k];
      if (isObj(v)) return safeText(v[lang] || v.ar || v.en || v.ku || "");
      if (typeof v === "string") return v;
    }
    return "";
  }

  /* =========================
     3) PRODUCTS SOURCE
  ========================= */
  function getProductsRaw() {
    const w = window;

    if (Array.isArray(w.PRODUCTS)) return w.PRODUCTS;
    if (Array.isArray(w.HOA_PRODUCTS)) return w.HOA_PRODUCTS;
    if (Array.isArray(w.products)) return w.products;

    try { if (typeof PRODUCTS !== "undefined" && Array.isArray(PRODUCTS)) return PRODUCTS; } catch {}
    try { if (typeof HOA_PRODUCTS !== "undefined" && Array.isArray(HOA_PRODUCTS)) return HOA_PRODUCTS; } catch {}

    return [];
  }

  /* =========================
     4) STATUS + CATEGORY
  ========================= */
  function normalizeStatusKey(p) {
    const raw = safeText(p.statusKey || p.status || "").toLowerCase();
    if (raw.includes("available") || raw.includes("متوفر") || raw.includes("متوف")) return "available";
    if (raw.includes("reserved") || raw.includes("محجوز")) return "reserved";
    return "available";
  }

  function statusTextByKey(key) {
    if (key === "available") return m("status_available", "متوفرة");
    if (key === "reserved") return m("status_reserved", "محجوزة للمعاينة");
    if (key === "acquired") return m("status_acquired", "تم اقتناؤها");
    return "—";
  }

  function normalizeCategoryKey(catText) {
    const c = normalizeArabic(catText);
    if (!c) return "all";

    if (c.includes("سجاد") || c.includes("قالى") || c.includes("قالی")) return "rugs";

    // ✅ separate furniture
    if (c.includes("اثاث") || c.includes("كونسول") || c.includes("طاولة") || c.includes("مائده") || c.includes("كرسي") || c.includes("كنبه") || c.includes("دولاب") || c.includes("تسريحه")) {
      return "furniture";
    }

    // wood (non-furniture)
    if (c.includes("خشب") || c.includes("ساعه") || c.includes("ساعات") || c.includes("كراموفون")) return "wood";

    if (c.includes("نحاس") || c.includes("مس")) return "copper";
    if (c.includes("فضه") || c.includes("زي")) return "silver";
    if (c.includes("كريستال") || c.includes("زجاج")) return "crystal";
    if (c.includes("لوحه") || c.includes("لوحات") || c.includes("تابلو")) return "paintings";
    if (c.includes("خط")) return "calligraphy";
    if (c.includes("اكسسو") || c.includes("اكسسوار")) return "accessories";
    if (c.includes("فاز") || c.includes("فازه")) return "vases";
    return "other";
  }

  const CATEGORY_LABELS = {
    all: { ar: "الكل", en: "All", ku: "هەموو" },
    rugs: { ar: "سجاد", en: "Rugs", ku: "قالی" },
    wood: { ar: "خشب", en: "Wood", ku: "دار" },
    furniture: { ar: "أثاث", en: "Furniture", ku: "کەلوپەلی ناوماڵ" }, // ✅
    copper: { ar: "نحاس", en: "Copper", ku: "مس" },
    silver: { ar: "فضة", en: "Silver", ku: "زیو" },
    crystal: { ar: "كريستال", en: "Crystal", ku: "کریستال" },
    paintings: { ar: "لوحات", en: "Paintings", ku: "تابلۆکان" },
    calligraphy: { ar: "خطوط عربية", en: "Arabic calligraphy", ku: "خەطی عەرەبی" },
    accessories: { ar: "اكسسوارات", en: "Accessories", ku: "ئێکسسوار" },
    vases: { ar: "فازات", en: "Vases", ku: "فازە" },
    other: { ar: "أخرى", en: "Other", ku: "ئەوانەی تر" },
  };

  function labelForCategory(key) {
    const lang = getLang();
    return (CATEGORY_LABELS[key] && (CATEGORY_LABELS[key][lang] || CATEGORY_LABELS[key].ar)) || key;
  }

  /* =========================
     5) HYDRATE PRODUCTS
  ========================= */
  function hydrateProducts() {
    const raw = getProductsRaw();
    const seen = new Map();

    return raw.map((p, idx) => {
      const code = safeText(p.code || p.id || `ITEM-${idx + 1}`);
      const n = (seen.get(code) || 0) + 1;
      seen.set(code, n);
      const key = n === 1 ? code : `${code}__${n}`;

      const image =
        safeText(p.image) ||
        (Array.isArray(p.images) ? safeText(p.images[0]) : "") ||
        "";

      const images = Array.isArray(p.images) && p.images.length ? p.images : (image ? [image] : []);

      const catText = pickText(p, "category") || safeText(p.category || p.cat || "");
      const catKey = safeText(p.categoryKey || normalizeCategoryKey(catText)) || "other";

      return {
        ...p,
        _key: key,
        _code: code,
        _catKey: catKey,
        _statusKey: normalizeStatusKey(p),
        _image: image,
        _images: images,
      };
    });
  }

  /* =========================
     6) FAVORITES + THEME
  ========================= */
  function loadFavs() {
    try {
      const raw = localStorage.getItem(FAV_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(arr) ? arr : []);
    } catch { return new Set(); }
  }

  function saveFavs(set) {
    try { localStorage.setItem(FAV_KEY, JSON.stringify([...set])); } catch {}
  }

  function toggleFav(key) {
    if (!key) return;
    if (favs.has(key)) favs.delete(key); else favs.add(key);
    saveFavs(favs);
    renderFeatured(); // ✅ keep featured in sync
    renderGrid();
    if (state.openKey === key) openModal(state.openKey, state.openTab || "details", true);
  }

  function applyTheme() {
    const theme = localStorage.getItem(THEME_KEY) || "dark";
    document.documentElement.setAttribute("data-theme", theme);
  }

  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    const next = cur === "light" ? "dark" : "light";
    localStorage.setItem(THEME_KEY, next);
    applyTheme();
  }

  /* =========================
     6.5) AUCTION VISIBILITY
  ========================= */
  function getAuctionVisible() {
    const raw = localStorage.getItem(AUCTION_VIS_KEY);
    if (raw == null) return true; // default: visible
    return raw === "1";
  }
  function setAuctionVisible(v) {
    localStorage.setItem(AUCTION_VIS_KEY, v ? "1" : "0");
    syncAuctionToggleUI();
  }
  function syncAuctionToggleUI() {
    if (!els.auctionBlock || !els.auctionToggleBtn) return;
    const visible = getAuctionVisible();
    els.auctionBlock.style.display = visible ? "" : "none";
    els.auctionToggleBtn.textContent = visible ? m("auction_hide") : m("auction_show");
  }

  /* =========================
     6.9) ✅ BACK BUTTON FIX (ONLY CHANGE)
  ========================= */
  const MODAL_HISTORY_MARK = "__hoa_modal__";
  function hasModalHistoryState() {
    return history.state && history.state[MODAL_HISTORY_MARK] === true;
  }
  function pushModalHistory(key) {
    // prevent stacking duplicates if already present
    if (hasModalHistoryState()) return;
    try {
      history.pushState({ ...(history.state || {}), [MODAL_HISTORY_MARK]: true, key }, "", location.href);
    } catch {
      // ignore
    }
  }

  /* =========================
     7) STATE + ELEMENTS
  ========================= */
  let ALL = [];
  let favs = loadFavs();

  const state = {
    q: "",
    cat: "all",
    sort: "featured",
    show: "all",
    openKey: null,
    openTab: "details",
  };

  const els = {};

  function bindEls() {
    els.langSelect = $("langSelect");
    els.themeToggle = $("themeToggle");

    els.searchInput = $("searchInput");
    els.resultsCount = $("resultsCount");
    els.chipsWrap = $("chipsWrap");
    els.sortSelect = $("sortSelect");
    els.showSelect = $("showSelect");

    els.productsGrid = $("productsGrid");
    els.emptyState = $("emptyState");

    els.kpiStoreCount = $("kpiStoreCount");
    els.kpiAuctionCount = $("kpiAuctionCount");

    // ✅ Featured
    els.featuredSection = $("featuredSection");
    els.featuredRow = $("featuredRow");
    els.featuredEmpty = $("featuredEmpty");

    // ✅ Auction toggle
    els.auctionToggleBtn = $("auctionToggleBtn");
    els.auctionBlock = $("auctionBlock");

    // modal core
    els.modal = $("modal");
    els.modalClose = $("modalClose");
    els.modalTitle = $("modalTitle");
    els.modalBadge = $("modalBadge");
    els.modalCode = $("modalCode");
    els.modalPrice = $("modalPrice");
    els.modalStatus = $("modalStatus");
    els.modalDesc = $("modalDesc");
    els.modalMainImg = $("modalMainImg");
    els.modalThumbs = $("modalThumbs");

    els.favBtn = $("favBtn");
    els.copyLinkBtn = $("copyLinkBtn");
    els.shareWaBtn = $("shareWaBtn");

    // order form
    els.orderName = $("orderName");
    els.orderPhone = $("orderPhone");
    els.orderGov = $("orderGov");
    els.orderArea = $("orderArea");
    els.orderLandmark = $("orderLandmark"); // optional
    els.orderNotes = $("orderNotes");       // optional
    els.orderEmail = $("orderEmail");

    els.orderWhatsApp = $("orderWhatsApp");
    els.copyOrder = $("copyOrder");
  }

  /* =========================
     8) FILTER + SORT
  ========================= */
  function matchesSearch(p, qNorm) {
    if (!qNorm) return true;
    const code = normalizeArabic(p._code);
    const name = normalizeArabic(pickText(p, "name"));
    const desc = normalizeArabic(pickText(p, "desc"));
    const cat  = normalizeArabic(pickText(p, "category"));
    return code.includes(qNorm) || name.includes(qNorm) || desc.includes(qNorm) || cat.includes(qNorm);
  }

  function passesFilters(p) {
    if (state.show === "fav" && !favs.has(p._key)) return false;
    if (state.cat !== "all" && p._catKey !== state.cat) return false;
    return matchesSearch(p, normalizeArabic(state.q));
  }

  function sortList(list) {
    const out = list.slice();
    const s = state.sort;

    if (s === "newest") {
      out.sort((a, b) => safeText(b.createdAt).localeCompare(safeText(a.createdAt)));
      return out;
    }
    if (s === "priceAsc") {
      out.sort((a, b) => Number(a.priceNumber || 0) - Number(b.priceNumber || 0));
      return out;
    }
    if (s === "priceDesc") {
      out.sort((a, b) => Number(b.priceNumber || 0) - Number(a.priceNumber || 0));
      return out;
    }

    // featured default
    out.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    return out;
  }

  /* =========================
     9) RENDER
  ========================= */
  function buildCategoryKeys() {
    const keys = new Set(["all"]);
    ALL.forEach(p => keys.add(p._catKey || "other"));
    return Array.from(keys);
  }

  function renderChips() {
    if (!els.chipsWrap) return;
    const keys = buildCategoryKeys();
    els.chipsWrap.innerHTML = keys.map((key) => {
      const active = state.cat === key ? "is-active" : "";
      return `<button class="chip ${active}" type="button" data-cat="${key}">${labelForCategory(key)}</button>`;
    }).join("");
  }

  function cardHTML(p) {
    const name = pickText(p, "name");
    const desc = pickText(p, "desc");
    const price = safeText(p.price) || formatIQD(p.priceNumber);
    const statusText = statusTextByKey(p._statusKey);
    const isFav = favs.has(p._key);

    return `
      <article class="card" data-key="${p._key}">
        <div class="imgWrap">
          <img src="${p._image}" alt="${safeText(name)}" loading="lazy">
        </div>

        <div class="body">
          <div class="name">${safeText(name)}</div>

          <div class="metaRow">
            <span class="price">${safeText(price)}</span>
            <span class="code sku">${safeText(p._code)}</span>
          </div>

          <div class="metaRow">
            <span class="badge">${safeText(statusText)}</span>
          </div>

          <div class="cardDesc">${safeText(desc)}</div>

          <div class="cardActions">
            <button class="btn ghost" type="button" data-action="details" data-key="${p._key}">${m("btn_details","تفاصيل")}</button>
            <button class="btn ghost" type="button" data-action="order" data-key="${p._key}">${m("btn_order","طلب")}</button>
            <button class="btn ghost" type="button" data-action="fav" data-key="${p._key}" aria-label="fav">${isFav ? "♥" : "♡"}</button>
          </div>
        </div>
      </article>
    `;
  }

  // ✅ featured card (compact) — uses same actions so no new logic needed
  function featuredCardHTML(p) {
    const name = pickText(p, "name");
    const price = safeText(p.price) || formatIQD(p.priceNumber);
    const isFav = favs.has(p._key);

    return `
      <article class="card featuredCard" data-key="${p._key}">
        <div class="imgWrap">
          <img src="${p._image}" alt="${safeText(name)}" loading="lazy">
        </div>
        <div class="body">
          <div class="name">${safeText(name)}</div>

          <div class="metaRow">
            <span class="price">${safeText(price)}</span>
            <span class="code sku">${safeText(p._code)}</span>
          </div>

          <div class="cardActions">
            <button class="btn ghost" type="button" data-action="details" data-key="${p._key}">${m("btn_details","تفاصيل")}</button>
            <button class="btn ghost" type="button" data-action="order" data-key="${p._key}">${m("btn_order","طلب")}</button>
            <button class="btn ghost" type="button" data-action="fav" data-key="${p._key}" aria-label="fav">${isFav ? "♥" : "♡"}</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderCounts(count) {
    if (els.resultsCount) els.resultsCount.textContent = `${count} ${m("results_word","نتائج")}`;
    if (els.kpiStoreCount) els.kpiStoreCount.textContent = String(ALL.filter(p => !p.auction).length);
    if (els.kpiAuctionCount) els.kpiAuctionCount.textContent = String(ALL.filter(p => Boolean(p.auction)).length);
  }

  function renderGrid() {
    if (!els.productsGrid) return;

    const filtered = ALL.filter(passesFilters);
    const list = sortList(filtered);

    renderCounts(list.length);

    if (!list.length) {
      els.productsGrid.innerHTML = "";
      if (els.emptyState) els.emptyState.style.display = "block";
      return;
    }
    if (els.emptyState) els.emptyState.style.display = "none";

    els.productsGrid.innerHTML = list.map(cardHTML).join("");
  }

  // ✅ Featured renderer
  function renderFeatured() {
    if (!els.featuredSection || !els.featuredRow) return;

    // You can allow auction featured by removing "!p.auction" if you ever need
const featured = ALL
  .filter(p => Boolean(p.featured) && !p.auction)
  .sort((a, b) => {
    const ra = a.featuredRank ?? 999;
    const rb = b.featuredRank ?? 999;
    return ra - rb;
  });

    if (!featured.length) {
      els.featuredSection.style.display = "none";
      if (els.featuredEmpty) els.featuredEmpty.style.display = "block";
      els.featuredRow.innerHTML = "";
      return;
    }

    els.featuredSection.style.display = "block";
    if (els.featuredEmpty) els.featuredEmpty.style.display = "none";

    // keep it elegant: show up to 10 (change if you want)
    const list = sortList(featured).slice(0, 60);
    els.featuredRow.innerHTML = list.map(featuredCardHTML).join("");
  }

  function renderAll() {
    renderChips();
    renderFeatured(); // ✅
    renderGrid();
  }

  function getByKey(key) {
    return ALL.find(p => p._key === key) || null;
  }

  /* =========================
     10) MODAL TABS + STICKY
  ========================= */
  function setModalTab(tab) {
    const tKey = tab === "order" ? "order" : "details";
    state.openTab = tKey;

    document.querySelectorAll("[data-modal-tab]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-modal-tab") === tKey);
    });

    document.querySelectorAll("[data-modal-panel]").forEach((panel) => {
      panel.style.display = panel.getAttribute("data-modal-panel") === tKey ? "block" : "none";
    });
  }

  function bindModalStickyShrinkOnce() {
    const top = document.getElementById("modalTop");
    const body = document.getElementById("modalBody");
    if (!top || !body) return;
    if (body.__hoaScrollBound) return; // prevent duplicate listeners
    body.__hoaScrollBound = true;

    body.addEventListener("scroll", () => {
      top.classList.toggle("is-scrolled", body.scrollTop > 8);
    }, { passive: true });
  }

  function resetModalScrollState() {
    const top = document.getElementById("modalTop");
    const body = document.getElementById("modalBody");
    if (body) body.scrollTop = 0;
    if (top) top.classList.remove("is-scrolled");
  }

  function openModal(key, tab = "details", silent = false) {
    const p = getByKey(key);
    if (!p || !els.modal) return;

    state.openKey = key;
    state.openTab = tab;

    const name = pickText(p, "name");
    const desc = pickText(p, "desc");
    const price = safeText(p.price) || formatIQD(p.priceNumber);
    const statusText = statusTextByKey(p._statusKey);

    if (els.modalTitle) els.modalTitle.textContent = safeText(name);
    if (els.modalCode)  els.modalCode.textContent = safeText(p._code);
    if (els.modalPrice) els.modalPrice.textContent = safeText(price);
    if (els.modalStatus)els.modalStatus.textContent = safeText(statusText);
    if (els.modalDesc)  els.modalDesc.textContent = safeText(desc);

    if (els.modalBadge) {
      const isAuc = Boolean(p.auction);
      els.modalBadge.style.display = isAuc ? "inline-flex" : "none";
      if (isAuc) els.modalBadge.textContent = m("badge_auction", "مزاد");
    }

    const imgs = (Array.isArray(p._images) && p._images.length) ? p._images : (p._image ? [p._image] : []);
    if (els.modalMainImg) {
      els.modalMainImg.src = imgs[0] || "";
      els.modalMainImg.alt = safeText(name);
    }

    if (els.modalThumbs) {
      els.modalThumbs.innerHTML = imgs.map((u, i) => {
        const active = i === 0 ? "is-active" : "";
        return `<button type="button" data-src="${u}"><img src="${u}" alt="" class="${active}"></button>`;
      }).join("");

      els.modalThumbs.querySelectorAll("button[data-src]").forEach((b) => {
        b.addEventListener("click", () => {
          const src = b.getAttribute("data-src");
          if (src && els.modalMainImg) els.modalMainImg.src = src;
          els.modalThumbs.querySelectorAll("img").forEach(img => img.classList.remove("is-active"));
          const imgEl = b.querySelector("img");
          if (imgEl) imgEl.classList.add("is-active");
        });
      });
    }

    if (els.favBtn) {
      els.favBtn.textContent = favs.has(p._key) ? "♥" : "♡";
      els.favBtn.onclick = () => toggleFav(p._key);
    }

    if (els.copyLinkBtn) els.copyLinkBtn.onclick = () => copyLink(p);
    if (els.shareWaBtn)  els.shareWaBtn.onclick = () => openWhatsAppOrder(p);

    if (els.orderWhatsApp) els.orderWhatsApp.onclick = () => orderEmailThenWhatsApp(p);
    if (els.copyOrder)     els.copyOrder.onclick = () => copyOrderDetails(p);

    setModalTab(tab);
    bindModalStickyShrinkOnce();
    resetModalScrollState();

    if (!silent) {
      // ✅ BACK FIX: push a history state so mobile back closes the modal
      pushModalHistory(key);

      els.modal.classList.add("is-open");
      els.modal.setAttribute("aria-hidden", "false");
    }
  }

  // ✅ BACK FIX: allow skipping history-back when close is triggered by popstate
  function closeModal(opts = {}) {
    const { skipHistory = false } = opts;

    if (!els.modal) return;
    els.modal.classList.remove("is-open");
    els.modal.setAttribute("aria-hidden", "true");
    state.openKey = null;

    // If user tapped "Close" button, go back one step to remove the modal history state.
    if (!skipHistory && hasModalHistoryState()) {
      try { history.back(); } catch {}
    }
  }

  /* =========================
     11) LINK + CLIPBOARD + WA
  ========================= */
  function buildItemLink(p) {
    const url = new URL(window.location.href);
    url.hash = `item=${encodeURIComponent(p._key)}`;
    return url.toString();
  }

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; }
    catch { return false; }
  }

  async function copyLink(p) {
    const ok = await copyText(buildItemLink(p));
    alert(ok ? m("copied_link") : m("cannot_copy"));
  }

  function getCustomerData() {
  return {
    name: safeText(els.orderName?.value).trim(),
    phone: safeText(els.orderPhone?.value).trim(),
    email: safeText(els.orderEmail?.value).trim(), // ✅ مهم
    gov: safeText(els.orderGov?.value).trim(),
    area: safeText(els.orderArea?.value).trim(),
    landmark: safeText(els.orderLandmark?.value).trim(),
    notes: safeText(els.orderNotes?.value).trim(),
  };
}
  function buildOrderMessage(p, includeLink = true) {
    const lang = getLang();
    const name = pickText(p, "name");
    const desc = pickText(p, "desc");
    const price = safeText(p.price) || formatIQD(p.priceNumber);
    const statusText = statusTextByKey(p._statusKey);
    const link = includeLink ? buildItemLink(p) : "";
    const c = getCustomerData();

    const lines = [];

    if (lang === "en") {
      lines.push("Hello House of Antiques 👋");
      lines.push("I would like to order / reserve this item:");
      lines.push(`• Item: ${name}`);
      lines.push(`• Code: ${p._code}`);
      lines.push(`• Status: ${statusText}`);
      lines.push(`• Price: ${price}`);
      if (desc) lines.push(`• Details: ${desc}`);
      if (link) lines.push(`• Link: ${link}`);
      lines.push("");
      lines.push("Customer details:");
      lines.push(`• Name: ${c.name}`);
      lines.push(`• Phone: ${c.phone}`);
      lines.push(`• Governorate/City: ${c.gov}`);
      lines.push(`• Area: ${c.area}`);
      if (c.landmark) lines.push(`• Landmark: ${c.landmark}`);
      if (c.notes) lines.push(`• Notes: ${c.notes}`);
      return lines.join("\n");
    }

    if (lang === "ku") {
      lines.push("سڵاو بیت التحفیات 👋");
      lines.push("دەمەوێت ئەم دانە داوا/گیربکەم:");
      lines.push(`• شت: ${name}`);
      lines.push(`• کۆد: ${p._code}`);
      lines.push(`• دۆخ: ${statusText}`);
      lines.push(`• نرخ: ${price}`);
      if (desc) lines.push(`• وردەکاری: ${desc}`);
      if (link) lines.push(`• بەستەر: ${link}`);
      lines.push("");
      lines.push("زانیاری کڕیار:");
      lines.push(`• ناو: ${c.name}`);
      lines.push(`• ژمارە: ${c.phone}`);
      lines.push(`• پارێزگا/شار: ${c.gov}`);
      lines.push(`• ناوچە: ${c.area}`);
      if (c.landmark) lines.push(`• نیشانە: ${c.landmark}`);
      if (c.notes) lines.push(`• تێبینی: ${c.notes}`);
      return lines.join("\n");
    }

    // AR
    lines.push("مرحباً بيت التحفيات 👋");
    lines.push("أرغب بطلب / حجز هذه القطعة:");
    lines.push(`• القطعة: ${name}`);
    lines.push(`• الكود: ${p._code}`);
    lines.push(`• الحالة: ${statusText}`);
    lines.push(`• السعر: ${price}`);
    if (desc) lines.push(`• الوصف: ${desc}`);
    if (link) lines.push(`• الرابط: ${link}`);
    lines.push("");
    lines.push("بيانات الزبون:");
    lines.push(`• الاسم: ${c.name}`);
    lines.push(`• الهاتف: ${c.phone}`);
    lines.push(`• المحافظة/المدينة: ${c.gov}`);
    lines.push(`• المنطقة: ${c.area}`);
    if (c.landmark) lines.push(`• أقرب نقطة دالة: ${c.landmark}`);
    if (c.notes) lines.push(`• ملاحظات: ${c.notes}`);
    return lines.join("\n");
  }

  function openWhatsAppOrder(p) {
    const msg = buildOrderMessage(p, true);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  async function copyOrderDetails(p) {
    const ok = await copyText(buildOrderMessage(p, true));
    alert(ok ? m("copied_order") : m("cannot_copy"));
  }

  /* =========================
  /* =========================
   12) VALIDATION (UPDATED)
========================= */

/* 📞 Phone validation */
function isValidInternationalPhone(raw) {
  const s = safeText(raw).trim();
  if (!s) return false;

  // يسمح + أرقام ومسافات ورموز بسيطة
  if (!/^[+0-9().\-\s]{6,}$/.test(s)) return false;

  const digits = s.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 16;
}

/* 📧 Email validation */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* UI helpers */
function clearInvalid(el) {
  if (!el) return;
  el.classList.remove("is-invalid");
  el.removeAttribute("aria-invalid");
}

function setInvalid(el) {
  if (!el) return;
  el.classList.add("is-invalid");
  el.setAttribute("aria-invalid", "true");
}

/* ✅ Main validation */
function validateAndAlert() {
  const c = getCustomerData();

  // clear previous states
  clearInvalid(els.orderName);
  clearInvalid(els.orderPhone);
  clearInvalid(els.orderGov);
  clearInvalid(els.orderArea);
  clearInvalid(els.orderEmail);

  /* 👤 الاسم الثلاثي */
  const nameParts = c.name.split(/\s+/).filter(Boolean);
  if (nameParts.length < 3) {
    setInvalid(els.orderName);
    alert("الرجاء إدخال الاسم الكامل الثلاثي");
    els.orderName?.focus?.();
    return false;
  }

  /* 📞 الهاتف */
  if (!isValidInternationalPhone(c.phone)) {
    setInvalid(els.orderPhone);
    alert(m("required_phone"));
    els.orderPhone?.focus?.();
    return false;
  }

  /* 🏙️ المحافظة */
  if (!c.gov || c.gov.length < 2) {
    setInvalid(els.orderGov);
    alert(m("required_gov"));
    els.orderGov?.focus?.();
    return false;
  }

  /* 📍 المنطقة */
  if (!c.area || c.area.length < 2) {
    setInvalid(els.orderArea);
    alert(m("required_area"));
    els.orderArea?.focus?.();
    return false;
  }

  /* 📧 الإيميل */
  if (!isValidEmail(c.email)) {
    setInvalid(els.orderEmail);
    alert("الرجاء إدخال بريد إلكتروني صحيح");
    els.orderEmail?.focus?.();
    return false;
  }

  return true;
}

/* ✨ Live validation */
function bindLiveValidation() {
  const requiredFields = [
    els.orderName,
    els.orderPhone,
    els.orderGov,
    els.orderArea,
    els.orderEmail
  ].filter(Boolean);

  requiredFields.forEach((el) => {
    el.addEventListener("input", () => clearInvalid(el));

    el.addEventListener("blur", () => {
      const c = getCustomerData();

      if (el === els.orderName) {
        const parts = c.name.split(/\s+/).filter(Boolean);
        if (parts.length < 3) setInvalid(el);
      }

      if (el === els.orderPhone && !isValidInternationalPhone(c.phone)) {
        setInvalid(el);
      }

      if (el === els.orderGov && (!c.gov || c.gov.length < 2)) {
        setInvalid(el);
      }

      if (el === els.orderArea && (!c.area || c.area.length < 2)) {
        setInvalid(el);
      }

      if (el === els.orderEmail && !isValidEmail(c.email)) {
        setInvalid(el);
      }
    });
  });
}


  /* =========================
     13) EMAILJS
  ========================= */
  function emailjsReady() {
    return typeof window.emailjs !== "undefined" &&
      window.emailjs &&
      typeof window.emailjs.send === "function";
  }

  function initEmailJS() {
    if (!emailjsReady()) return;
    if (window.__HOA_EMAILJS_INIT__) return;
    try {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
      window.__HOA_EMAILJS_INIT__ = true;
    } catch (e) {
      console.warn("EmailJS init failed:", e);
    }
  }

async function sendOrderEmail(p) {
  initEmailJS();
  if (!emailjsReady()) return { ok: false, error: "EmailJS not loaded" };

  const c = getCustomerData();

  const params = {
    /* =====================
       ITEM DATA (CRITICAL)
    ===================== */
    item_name: safeText(pickText(p, "name")),
    item_code: safeText(p._code),
    item_price: safeText(p.price) || formatIQD(p.priceNumber),
    item_status: safeText(statusTextByKey(p._statusKey)),
    item_desc: safeText(pickText(p, "desc")),

    // ✅ رابط حقيقي قابل للضغط
    item_link: buildItemLink(p),

    // ✅ صورة مباشرة (URL كامل)
    item_image: safeText(
      (Array.isArray(p._images) && p._images.length)
        ? p._images[0]
        : p._image || ""
    ),

    /* =====================
       CUSTOMER DATA
    ===================== */
    customer_name: safeText(c.name),
    customer_phone: safeText(c.phone),
    customer_email: safeText(c.email),
    customer_gov: safeText(c.gov),
    customer_area: safeText(c.area),
    customer_landmark: safeText(c.landmark),
    customer_notes: safeText(c.notes),
  };

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      params
    );
    return { ok: true };
  } catch (err) {
    console.error("EmailJS send failed:", err);
    return { ok: false, error: err };
  }
}

  /* =========================
     15) HASH OPEN
  ========================= */
  function tryOpenFromHash() {
    const hash = safeText(window.location.hash);
    const match = hash.match(/item=([^&]+)/);
    if (!match) return;
    const key = decodeURIComponent(match[1]);
    if (getByKey(key)) setTimeout(() => openModal(key, "details"), 50);
  }

  /* =========================
     16) EVENTS
  ========================= */
  function bindEvents() {
    if (els.themeToggle) els.themeToggle.addEventListener("click", toggleTheme);

    if (els.langSelect) {
      els.langSelect.value = getLang();
      els.langSelect.addEventListener("change", (e) => setLang(e.target.value || "ar"));
    }

    if (els.searchInput) {
      els.searchInput.addEventListener("input", (e) => {
        state.q = e.target.value || "";
        renderGrid();
      });
    }

    if (els.sortSelect) {
      els.sortSelect.addEventListener("change", (e) => {
        state.sort = e.target.value || "featured";
        renderGrid();
        renderFeatured(); // ✅ keep section consistent with sort (optional)
      });
    }

    if (els.showSelect) {
      els.showSelect.addEventListener("change", (e) => {
        state.show = e.target.value || "all";
        renderGrid();
      });
    }

    if (els.chipsWrap) {
      els.chipsWrap.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-cat]");
        if (!btn) return;
        state.cat = btn.getAttribute("data-cat") || "all";
        renderAll();
      });
    }

    // ✅ Featured click (same behavior as grid)
    if (els.featuredRow) {
      els.featuredRow.addEventListener("click", (e) => {
        const actionBtn = e.target.closest("[data-action]");
        const card = e.target.closest(".card");
        const key = actionBtn?.getAttribute("data-key") || card?.getAttribute("data-key");
        if (!key) return;

        if (!actionBtn) return openModal(key, "details");

        const action = actionBtn.getAttribute("data-action");
        if (action === "fav") return toggleFav(key);
        if (action === "details") return openModal(key, "details");
        if (action === "order") return openModal(key, "order");
      });
    }

    if (els.productsGrid) {
      els.productsGrid.addEventListener("click", (e) => {
        const actionBtn = e.target.closest("[data-action]");
        const card = e.target.closest(".card");
        const key = actionBtn?.getAttribute("data-key") || card?.getAttribute("data-key");
        if (!key) return;

        if (!actionBtn) return openModal(key, "details");

        const action = actionBtn.getAttribute("data-action");
        if (action === "fav") return toggleFav(key);
        if (action === "details") return openModal(key, "details");
        if (action === "order") return openModal(key, "order");
      });
    }

    // ✅ Auction toggle button
    if (els.auctionToggleBtn) {
      els.auctionToggleBtn.addEventListener("click", () => {
        setAuctionVisible(!getAuctionVisible());
      });
    }

    // modal close
    if (els.modalClose) els.modalClose.addEventListener("click", () => closeModal());
    if (els.modal) els.modal.addEventListener("click", (e) => { if (e.target === els.modal) closeModal(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

    // ✅ BACK FIX: when user presses mobile back, close modal (instead of leaving store)
    window.addEventListener("popstate", () => {
      if (els.modal && els.modal.classList.contains("is-open")) {
        // close without triggering history.back again
        closeModal({ skipHistory: true });
      }
    });

    // tabs inside modal
    document.querySelectorAll("[data-modal-tab]").forEach((btn) => {
      btn.addEventListener("click", () => setModalTab(btn.getAttribute("data-modal-tab")));
    });

    bindLiveValidation();
  }

  /* =========================
     17) INIT
  ========================= */
  function init() {
    bindEls();
    applyTheme();

    const savedLang = getLang();
    if (I18N() && typeof I18N().setLang === "function") I18N().setLang(savedLang);
    else applyLangToDOM(savedLang);

    favs = loadFavs();
    ALL = hydrateProducts();

    // ✅ Apply auction visibility on load
    syncAuctionToggleUI();

    initEmailJS();
    bindEvents();
    renderAll();
    tryOpenFromHash();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
