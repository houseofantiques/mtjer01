/* =========================================================
   HOA Store — script.js (REWRITTEN FROM SCRATCH + EMAILJS)
   - AR / EN / KU (RTL for AR+KU)
   - Backward compatible products sources
   - WhatsApp order still works
   - ✅ NEW: Send order to EmailJS as well
========================================================= */

(function () {
  "use strict";

  /* =========================
     0) Config
  ========================= */
  const WHATSAPP_NUMBER_INTL = "9647737079079";

  // ✅ EmailJS (provided by you)
  const EMAILJS_PUBLIC_KEY = "tivoinl7MHIKAOORE";
  const EMAILJS_SERVICE_ID = "service_bm4mbb9";
  const EMAILJS_TEMPLATE_ID = "template_yksn5vh";

  const FAV_KEY = "hoa_favorites_v2";
  const THEME_KEY = "hoa_theme_v2";
  const LANG_KEY = "hoa_lang_v2";

  const $ = (id) => document.getElementById(id);

  /* =========================
     1) i18n bridge (optional)
  ========================= */
  const I18N = () => window.I18N || null;

  const t = (key, fallback) => {
    const i = I18N();
    if (i && typeof i.t === "function") {
      const v = i.t(key);
      return v != null && v !== "" ? v : (fallback ?? key);
    }
    return fallback ?? key;
  };

  /* =========================
     2) Helpers
  ========================= */
  function safeText(x) { return x == null ? "" : String(x); }
  function isObj(x) { return x && typeof x === "object" && !Array.isArray(x); }

  function getLang() {
    const i = I18N();
    if (i && typeof i.getLang === "function") return i.getLang();
    return localStorage.getItem(LANG_KEY) || "ar";
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);

    const i = I18N();
    if (i && typeof i.setLang === "function") {
      i.setLang(lang);
    } else {
      const isRTL = (lang === "ar" || lang === "ku");
      document.documentElement.lang = lang;
      document.documentElement.dir = isRTL ? "rtl" : "ltr";
    }

    renderAll();
    if (state.openKey) openModal(state.openKey, state.openTab || "details", true);
  }

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

  /* =========================
     3) Pick multilingual fields
  ========================= */
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
     4) Products source
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
     5) Status
  ========================= */
  function normalizeStatusKey(p) {
    const raw = safeText(p.statusKey || p.status || "").toLowerCase();
    if (raw.includes("available") || raw.includes("متوفر") || raw.includes("متوف")) return "available";
    if (raw.includes("reserved") || raw.includes("محجوز")) return "reserved";
    if (raw.includes("acquired") || raw.includes("sold") || raw.includes("مقتن") || raw.includes("تم اقتن")) return "acquired";
    return "available";
  }

  function statusTextByKey(key) {
    const lang = getLang();
    if (key === "available") return (lang === "en") ? "Available" : (lang === "ku") ? "بەردەستە" : t("status_available", "متوفرة");
    if (key === "reserved")  return (lang === "en") ? "Reserved"  : (lang === "ku") ? "گیراوە"   : t("status_reserved", "محجوزة للمعاينة");
    if (key === "acquired")  return (lang === "en") ? "Acquired"  : (lang === "ku") ? "وەرگیرا"   : t("status_acquired", "تم اقتناؤها");
    return "—";
  }

  /* =========================
     6) Categories
  ========================= */
  function normalizeCategoryKey(catText) {
    const c = normalizeArabic(catText);
    if (!c) return "all";
    if (c.includes("سجاد") || c.includes("قالى") || c.includes("قالی")) return "rugs";
    if (c.includes("خشب") || c.includes("ساعه") || c.includes("ساعات") || c.includes("اثاث") || c.includes("كراموفون") || c.includes("كونسول")) return "wood";
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
    copper: { ar: "نحاس", en: "Copper", ku: "مس" },
    silver: { ar: "فضة", en: "Silver", ku: "زیو" },
    crystal: { ar: "كريستال", en: "Crystal", ku: "کریستال" },
    paintings: { ar: "لوحات", en: "Paintings", ku: "تابلۆکان" },
    calligraphy: { ar: "خطوط عربية", en: "Arabic calligraphy", ku: "خەطی عەرەبی" },
    accessories: { ar: "اكسسوارات", en: "Accessories", ku: "ئێکسسوار" },
    vases: { ar: "فازات", en: "Vases", ku: "فازە" },
    other: { ar: "أخرى", en: "Other", ku: "ئەوانەی تر" }
  };

  function labelForCategory(key) {
    const lang = getLang();
    return (CATEGORY_LABELS[key] && (CATEGORY_LABELS[key][lang] || CATEGORY_LABELS[key].ar)) || key;
  }

  /* =========================
     7) Hydrate products
  ========================= */
  function hydrateProducts() {
    const raw = getProductsRaw();
    const seen = new Map();

    return raw.map((p, idx) => {
      const code = safeText(p.code || p.id || `ITEM-${idx + 1}`);
      const n = (seen.get(code) || 0) + 1;
      seen.set(code, n);
      const key = n === 1 ? code : `${code}__${n}`;

      const image = safeText(p.image) || (Array.isArray(p.images) ? safeText(p.images[0]) : "") || "";
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
     8) Favorites
  ========================= */
  function loadFavs() {
    try {
      const raw = localStorage.getItem(FAV_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(arr) ? arr : []);
    } catch {
      return new Set();
    }
  }

  function saveFavs(set) {
    try { localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(set))); } catch {}
  }

  function toggleFav(key) {
    if (!key) return;
    if (favs.has(key)) favs.delete(key);
    else favs.add(key);
    saveFavs(favs);
    renderGrid();
    if (state.openKey === key) openModal(key, state.openTab || "details", true);
  }

  /* =========================
     9) Theme
  ========================= */
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
     10) State
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

  /* =========================
     11) Elements
  ========================= */
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

    // modal
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

    // order
    els.orderName = $("orderName");
    els.orderPhone = $("orderPhone");
    els.orderGov = $("orderGov");
    els.orderArea = $("orderArea");
    els.orderLandmark = $("orderLandmark");
    els.orderNotes = $("orderNotes");
    els.orderWhatsApp = $("orderWhatsApp");
    els.copyOrder = $("copyOrder");
  }

  /* =========================
     12) Filters + sorting
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

    out.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    return out;
  }

  /* =========================
     13) Render
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
            <button class="btn ghost" type="button" data-action="details" data-key="${p._key}">${t("btn_details", "تفاصيل")}</button>
            <button class="btn ghost" type="button" data-action="order" data-key="${p._key}">${t("btn_order", "طلب")}</button>
            <button class="btn ghost" type="button" data-action="fav" data-key="${p._key}" aria-label="fav">${isFav ? "♥" : "♡"}</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderCounts(count) {
    if (els.resultsCount) els.resultsCount.textContent = `${count} ${t("results_word", "نتائج")}`;
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

  function renderAll() {
    renderChips();
    renderGrid();
  }

  function getByKey(key) {
    return ALL.find(p => p._key === key) || null;
  }

  /* =========================
     14) Modal
  ========================= */
  function setModalTab(tab) {
    const tKey = (tab === "order") ? "order" : "details";
    state.openTab = tKey;

    document.querySelectorAll("[data-modal-tab]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-modal-tab") === tKey);
    });
    document.querySelectorAll("[data-modal-panel]").forEach((panel) => {
      panel.style.display = (panel.getAttribute("data-modal-panel") === tKey) ? "block" : "none";
    });
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

    els.modalTitle.textContent = safeText(name);
    els.modalCode.textContent = safeText(p._code);
    els.modalPrice.textContent = safeText(price);
    els.modalStatus.textContent = safeText(statusText);
    els.modalDesc.textContent = safeText(desc);

    if (els.modalBadge) {
      const isAuc = Boolean(p.auction);
      els.modalBadge.style.display = isAuc ? "inline-flex" : "none";
      if (isAuc) els.modalBadge.textContent = t("badge_auction", "مزاد");
    }

    const imgs = (Array.isArray(p._images) && p._images.length) ? p._images : (p._image ? [p._image] : []);
    els.modalMainImg.src = imgs[0] || "";
    els.modalMainImg.alt = safeText(name);

    els.modalThumbs.innerHTML = imgs.map((u, i) => {
      const active = i === 0 ? "is-active" : "";
      return `<button type="button" data-src="${u}"><img src="${u}" alt="" class="${active}"></button>`;
    }).join("");

    els.modalThumbs.querySelectorAll("button[data-src]").forEach((b) => {
      b.addEventListener("click", () => {
        const src = b.getAttribute("data-src");
        if (src) els.modalMainImg.src = src;
        els.modalThumbs.querySelectorAll("img").forEach(img => img.classList.remove("is-active"));
        const imgEl = b.querySelector("img");
        if (imgEl) imgEl.classList.add("is-active");
      });
    });

    els.favBtn.textContent = favs.has(p._key) ? "♥" : "♡";
    els.favBtn.onclick = () => toggleFav(p._key);

    els.copyLinkBtn.onclick = () => copyLink(p);
    els.shareWaBtn.onclick = () => shareWhatsApp(p);

    // ✅ Order actions
    if (els.orderWhatsApp) els.orderWhatsApp.onclick = () => orderWhatsAppAndEmail(p);
    if (els.copyOrder) els.copyOrder.onclick = () => copyOrderDetails(p);

    if (!silent) {
      els.modal.classList.add("is-open");
      els.modal.setAttribute("aria-hidden", "false");
      setModalTab(tab);
    } else {
      setModalTab(tab);
    }
  }

  function closeModal() {
    if (!els.modal) return;
    els.modal.classList.remove("is-open");
    els.modal.setAttribute("aria-hidden", "true");
    state.openKey = null;
  }

  /* =========================
     15) Link / Clipboard / WhatsApp
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
    alert(ok ? t("copied_link", "تم نسخ الرابط") : t("cannot_copy", "تعذر النسخ"));
  }

  function buildOrderMessage(p, includeLink) {
    const lang = getLang();

    const name = pickText(p, "name");
    const desc = pickText(p, "desc");
    const price = safeText(p.price) || formatIQD(p.priceNumber);
    const statusText = statusTextByKey(p._statusKey);
    const link = includeLink ? buildItemLink(p) : "";

    const customer = getCustomerData();

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
      if (customer.name) lines.push(`• Name: ${customer.name}`);
      if (customer.phone) lines.push(`• Phone: ${customer.phone}`);
      if (customer.gov) lines.push(`• Governorate: ${customer.gov}`);
      if (customer.area) lines.push(`• Area: ${customer.area}`);
      if (customer.landmark) lines.push(`• Landmark: ${customer.landmark}`);
      if (customer.notes) lines.push(`• Notes: ${customer.notes}`);
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
      if (customer.name) lines.push(`• ناو: ${customer.name}`);
      if (customer.phone) lines.push(`• ژمارە: ${customer.phone}`);
      if (customer.gov) lines.push(`• پارێزگا: ${customer.gov}`);
      if (customer.area) lines.push(`• ناوچە: ${customer.area}`);
      if (customer.landmark) lines.push(`• نیشانە: ${customer.landmark}`);
      if (customer.notes) lines.push(`• تێبینی: ${customer.notes}`);
      return lines.join("\n");
    }

    // ar
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
    if (customer.name) lines.push(`• الاسم: ${customer.name}`);
    if (customer.phone) lines.push(`• الهاتف: ${customer.phone}`);
    if (customer.gov) lines.push(`• المحافظة: ${customer.gov}`);
    if (customer.area) lines.push(`• المنطقة: ${customer.area}`);
    if (customer.landmark) lines.push(`• أقرب نقطة دالة: ${customer.landmark}`);
    if (customer.notes) lines.push(`• ملاحظات: ${customer.notes}`);
    return lines.join("\n");
  }

  function shareWhatsApp(p) {
    const msg = buildOrderMessage(p, true);
    window.open(`https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  }

  function openWhatsAppOrder(p) {
    const msg = buildOrderMessage(p, true);
    window.open(`https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  }

  async function copyOrderDetails(p) {
    const ok = await copyText(buildOrderMessage(p, true));
    alert(ok ? t("copied_order", "تم نسخ تفاصيل الطلب") : t("cannot_copy", "تعذر النسخ"));
  }

  /* =========================
     16) Customer + EmailJS
  ========================= */
  function getCustomerData() {
    return {
      name: safeText(els.orderName?.value).trim(),
      phone: safeText(els.orderPhone?.value).trim(),
      gov: safeText(els.orderGov?.value).trim(),
      area: safeText(els.orderArea?.value).trim(),
      landmark: safeText(els.orderLandmark?.value).trim(),
      notes: safeText(els.orderNotes?.value).trim(),
    };
  }

  function validateCustomer(customer) {
    // ✅ minimal validation (doesn't block if you don't want)
    // We'll require name + phone to make email meaningful.
    if (!customer.name || customer.name.length < 2) return { ok: false, msg: t("err_name", "الرجاء إدخال الاسم") };
    if (!customer.phone || customer.phone.length < 7) return { ok: false, msg: t("err_phone", "الرجاء إدخال رقم هاتف صحيح") };
    return { ok: true, msg: "" };
  }

  function emailjsReady() {
    return typeof window.emailjs !== "undefined" && window.emailjs && typeof window.emailjs.send === "function";
  }

  function initEmailJS() {
    // safe init
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
    if (!emailjsReady()) {
      console.warn("EmailJS library not loaded. Add EmailJS CDN script in HTML.");
      return { ok: false, error: "EmailJS not loaded" };
    }

    const customer = getCustomerData();
    const check = validateCustomer(customer);
    if (!check.ok) {
      alert(check.msg);
      return { ok: false, error: check.msg };
    }

    const lang = getLang();
    const itemName = pickText(p, "name");
    const itemDesc = pickText(p, "desc");
    const itemPrice = safeText(p.price) || formatIQD(p.priceNumber);
    const itemStatus = statusTextByKey(p._statusKey);
    const itemLink = buildItemLink(p);

    // ✅ Parameters to match your EmailJS template
    // (You can rename keys inside EmailJS template as you like)
    const params = {
      page: safeText(document.body?.getAttribute("data-page") || "store"),
      lang: lang,

      item_name: safeText(itemName),
      item_code: safeText(p._code),
      item_price: safeText(itemPrice),
      item_status: safeText(itemStatus),
      item_desc: safeText(itemDesc),
      item_link: safeText(itemLink),

      customer_name: safeText(customer.name),
      customer_phone: safeText(customer.phone),
      customer_governorate: safeText(customer.gov),
      customer_area: safeText(customer.area),
      customer_landmark: safeText(customer.landmark),
      customer_notes: safeText(customer.notes),

      whatsapp_message: buildOrderMessage(p, true)
    };

    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
      return { ok: true };
    } catch (err) {
      console.warn("EmailJS send failed:", err);
      return { ok: false, error: err };
    }
  }

  // ✅ Main order button: send email then open WhatsApp (without changing WhatsApp flow)
  async function orderWhatsAppAndEmail(p) {
    // 1) try to send email (non-blocking, but we’ll wait a bit for clarity)
    const res = await sendOrderEmail(p);

    if (res.ok) {
      alert(t("email_sent", "تم إرسال الطلب إلى البريد بنجاح ✅"));
    } else {
      // we still open WhatsApp even if email fails
      alert(t("email_failed", "تعذر إرسال الإيميل، سيتم فتح واتساب لإكمال الطلب ✅"));
    }

    // 2) always open WhatsApp
    openWhatsAppOrder(p);
  }

  /* =========================
     17) Init + Events
  ========================= */
  function tryOpenFromHash() {
    const hash = safeText(window.location.hash);
    const m = hash.match(/item=([^&]+)/);
    if (!m) return;
    const key = decodeURIComponent(m[1]);
    if (getByKey(key)) setTimeout(() => openModal(key, "details"), 50);
  }

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

    // modal
    if (els.modalClose) els.modalClose.addEventListener("click", closeModal);
    if (els.modal) els.modal.addEventListener("click", (e) => { if (e.target === els.modal) closeModal(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

    document.querySelectorAll("[data-modal-tab]").forEach((btn) => {
      btn.addEventListener("click", () => setModalTab(btn.getAttribute("data-modal-tab")));
    });
  }

  function init() {
    bindEls();
    applyTheme();

    // apply saved lang early
    const savedLang = getLang();
    if (I18N() && typeof I18N().setLang === "function") {
      I18N().setLang(savedLang);
    } else {
      const isRTL = (savedLang === "ar" || savedLang === "ku");
      document.documentElement.lang = savedLang;
      document.documentElement.dir = isRTL ? "rtl" : "ltr";
    }

    favs = loadFavs();
    ALL = hydrateProducts();

    if (!ALL.length) {
      console.warn("HOA Store: No products found. Check products.js export (window.PRODUCTS / PRODUCTS).");
    }

    // if EmailJS is loaded, init now (safe)
    initEmailJS();

    bindEvents();
    renderAll();
    tryOpenFromHash();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
