(() => {
  "use strict";

  const WHATSAPP_NUMBER_INTL = "9647737079079";
  const STORE_CANONICAL_URL = "https://houseofantiques.github.io/mtjer01/";
  const FAV_KEY = "hoa_favorites_v5";
  const LANG_KEY = "hoa_lang_v5";

  const $ = (id) => document.getElementById(id);
  const safeText = (x) => (x == null ? "" : String(x));
  const isObj = (x) => x && typeof x === "object" && !Array.isArray(x);

  const els = {};
  function bindEls(){
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
    els.pinMedia = $("pinMedia");
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

  // i18n
  const I18N = () => window.I18N || null;

  function getLang(){
    const i = I18N();
    if (i && typeof i.getLang === "function") return i.getLang();
    return localStorage.getItem(LANG_KEY) || "ar";
  }

  function applyLangToDOM(lang){
    const isRTL = lang === "ar" || lang === "ku";
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }

  function setLang(lang){
    localStorage.setItem(LANG_KEY, lang);
    const i = I18N();
    if (i && typeof i.setLang === "function") i.setLang(lang);
    else applyLangToDOM(lang);

    renderAll();
    if (state.openKey) openModal(state.openKey, true);
  }

  function normalizeArabic(s){
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

  function formatIQD(num){
    const n = Number(num);
    if (!Number.isFinite(n) || n <= 0) return "—";
    try { return `${n.toLocaleString("en-US")} د.ع`; }
    catch { return `${String(n)} د.ع`; }
  }

  function pickText(obj, field){
    const lang = getLang();
    const v = obj?.[field];
    if (isObj(v)) return safeText(v[lang] || v.ar || v.en || v.ku || "");
    return safeText(v);
  }

  function imgOf(p){
    return safeText(p.image || (Array.isArray(p.images) ? p.images[0] : "") || p._image || "");
  }

  function normalizeStatusKey(p){
    const raw = safeText(p.statusKey || p.status || "").toLowerCase();
    if (raw.includes("acquired") || raw.includes("تم")) return "acquired";
    if (raw.includes("reserved") || raw.includes("محجوز")) return "reserved";
    return "available";
  }

  function statusText(key){
    const lang = getLang();
    if (key === "available") return lang==="en" ? "Available" : (lang==="ku" ? "بەردەستە" : "متوفرة");
    if (key === "reserved")  return lang==="en" ? "Reserved"  : (lang==="ku" ? "گیراوە" : "محجوزة للمعاينة");
    if (key === "acquired")  return lang==="en" ? "Acquired"  : (lang==="ku" ? "وەرگیرا" : "تم اقتناؤها");
    return "—";
  }

  function buildItemLink(p){
    try{
      const base = new URL(STORE_CANONICAL_URL);
      if (!base.pathname.endsWith("/")) base.pathname += "/";
      base.hash = `item=${encodeURIComponent(p._key)}`;
      return base.toString();
    }catch{
      const url = new URL(window.location.href);
      url.hash = `item=${encodeURIComponent(p._key)}`;
      return url.toString();
    }
  }

  async function copyText(t){
    try{ await navigator.clipboard.writeText(t); return true; }catch{ return false; }
  }

  // products
  function getProductsRaw(){
    if (Array.isArray(window.PRODUCTS)) return window.PRODUCTS;
    if (Array.isArray(window.HOA_PRODUCTS)) return window.HOA_PRODUCTS;
    if (Array.isArray(window.products)) return window.products;
    return [];
  }

  let ALL = [];
  function hydrate(){
    const raw = getProductsRaw();
    const seen = new Map();

    ALL = raw.map((p, idx) => {
      const code = safeText(p.code || p.id || `ITEM-${idx+1}`);
      const n = (seen.get(code) || 0) + 1;
      seen.set(code, n);
      const key = n === 1 ? code : `${code}__${n}`;

      const catText = pickText(p, "category") || safeText(p.category || p.cat || "");
      const catKey = normalizeArabic(catText) || "other";

      const priceText = safeText(p.price) || formatIQD(p.priceNumber);

      return {
        ...p,
        _key: key,
        _code: code,
        _img: imgOf(p),
        _catKey: catKey,
        _statusKey: normalizeStatusKey(p),
        _priceText: priceText,
      };
    });
  }

  // favorites
  let favs = new Set();
  function loadFavs(){
    try{
      const raw = localStorage.getItem(FAV_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      favs = new Set(Array.isArray(arr) ? arr : []);
    }catch{ favs = new Set(); }
  }
  function saveFavs(){
    try{ localStorage.setItem(FAV_KEY, JSON.stringify([...favs])); }catch{}
  }
  function toggleFav(key){
    if (!key) return;
    if (favs.has(key)) favs.delete(key);
    else favs.add(key);
    saveFavs();
    renderGrid();
    if (state.openKey === key) updateFavBtn(key);
  }
  function updateFavBtn(key){
    if (!els.favBtn) return;
    els.favBtn.textContent = favs.has(key) ? "♥" : "♡";
  }

  // state
  const state = { q:"", cat:"all", sort:"featured", show:"all", openKey:null };
  function getByKey(key){ return ALL.find(p => p._key === key) || null; }

  // filter + sort
  function matchesSearch(p, qNorm){
    if (!qNorm) return true;
    const name = normalizeArabic(pickText(p,"name"));
    const code = normalizeArabic(p._code);
    const desc = normalizeArabic(pickText(p,"desc"));
    const cat  = normalizeArabic(pickText(p,"category") || p.category || "");
    return name.includes(qNorm) || code.includes(qNorm) || desc.includes(qNorm) || cat.includes(qNorm);
  }

  function passes(p){
    if (state.show === "fav" && !favs.has(p._key)) return false;
    if (state.cat !== "all" && p._catKey !== state.cat) return false;
    return matchesSearch(p, normalizeArabic(state.q));
  }

  function sortList(list){
    const out = list.slice();
    if (state.sort === "newest"){
      out.sort((a,b) => safeText(b.createdAt).localeCompare(safeText(a.createdAt)));
      return out;
    }
    if (state.sort === "priceAsc"){
      out.sort((a,b) => Number(a.priceNumber||0) - Number(b.priceNumber||0));
      return out;
    }
    if (state.sort === "priceDesc"){
      out.sort((a,b) => Number(b.priceNumber||0) - Number(a.priceNumber||0));
      return out;
    }
    out.sort((a,b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    return out;
  }

  // categories
  function buildCatKeys(){
    const set = new Set(["all"]);
    ALL.forEach(p => set.add(p._catKey || "other"));
    return [...set];
  }
  function labelCat(key){
    const lang = getLang();
    if (key === "all") return lang==="en" ? "All" : (lang==="ku" ? "هەموو" : "الكل");
    return key;
  }

  // render
  function renderChips(){
    const keys = buildCatKeys();
    els.chipsWrap.innerHTML = keys.map(k=>{
      const active = state.cat === k ? "is-active" : "";
      return `<button class="chip ${active}" type="button" data-cat="${k}">${labelCat(k)}</button>`;
    }).join("");
  }

  function tileHTML(p){
    const name = pickText(p,"name");
    const st = statusText(p._statusKey);
    const fav = favs.has(p._key);

    return `
      <div class="tile" data-key="${p._key}">
        <img class="tileImg" src="${p._img}" alt="${safeText(name)}" loading="lazy">
        <div class="tileMeta">
          <div class="tileName">${safeText(name)}</div>
          <div class="tileSub">
            <span>${safeText(p._priceText)}</span>
            <span>${safeText(p._code)}</span>
          </div>
          <div class="tileSub">
            <span>${safeText(st)}</span>
            <span class="favDot" title="Fav">${fav ? "♥" : "♡"}</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderGrid(){
    const filtered = ALL.filter(passes);
    const list = sortList(filtered);

    const lang = getLang();
    els.resultsCount.textContent = `${list.length} ${lang==="en"?"Results":(lang==="ku"?"ئەنجامەکان":"نتائج")}`;

    if (!list.length){
      els.productsGrid.innerHTML = "";
      els.emptyState.style.display = "block";
      return;
    }
    els.emptyState.style.display = "none";
    els.productsGrid.innerHTML = list.map(tileHTML).join("");
  }

  function renderAll(){
    renderChips();
    renderGrid();
  }

  // modal
  function openModal(key, silent=false){
    const p = getByKey(key);
    if (!p) return;

    state.openKey = key;

    const lang = getLang();
    const name = pickText(p,"name");
    const desc = pickText(p,"desc");
    const dims = safeText(p.dimensions || p.dimension || p.size || "").trim();

    els.modalTitle.textContent = safeText(name);
    els.modalCode.textContent  = safeText(p._code);
    els.modalStatus.textContent = statusText(p._statusKey);
    els.pinPrice.textContent = safeText(p._priceText);

    if (els.modalBadge){
      els.modalBadge.style.display = p.auction ? "inline-flex" : "none";
      if (p.auction) els.modalBadge.textContent = lang==="en" ? "Auction" : (lang==="ku"?"مەزاد":"مزاد");
    }

    if (els.itemDimensions) els.itemDimensions.textContent = dims;
    if (els.pinDimsWrap) els.pinDimsWrap.style.display = dims ? "block" : "none";

    els.modalMainImg.src = p._img || "";
    els.modalMainImg.alt = safeText(name);

    // details + more
    els.pinDesc.textContent = safeText(desc);
    els.pinDesc.classList.add("is-collapsed");

    const moreTxt = (lang==="en") ? "See more" : (lang==="ku") ? "زیاتر ببینە" : "اضغط للمزيد";
    const lessTxt = (lang==="en") ? "See less" : (lang==="ku") ? "کەمتر ببینە" : "إخفاء";
    const long = safeText(desc).length > 120;

    els.pinMoreBtn.style.display = long ? "inline-block" : "none";
    els.pinMoreBtn.textContent = moreTxt;
    els.pinMoreBtn.onclick = () => {
      const collapsed = els.pinDesc.classList.toggle("is-collapsed");
      els.pinMoreBtn.textContent = collapsed ? moreTxt : lessTxt;
    };

    // toggles
    showPanel("details");
    els.pinDetailsToggle.onclick = () => showPanel("details");
    els.pinOrderToggle.onclick   = () => showPanel("order");

    function showPanel(which){
      if (which === "order"){
        els.pinOrderPanel.style.display = "block";
        els.pinDetails.style.display = "none";
        els.pinOrderToggle.classList.add("active");
        els.pinDetailsToggle.classList.remove("active");
        return;
      }
      els.pinDetails.style.display = "block";
      els.pinOrderPanel.style.display = "none";
      els.pinDetailsToggle.classList.add("active");
      els.pinOrderToggle.classList.remove("active");
    }

    // actions
    updateFavBtn(key);
    els.favBtn.onclick = () => toggleFav(key);

    els.copyLinkBtn.onclick = async () => {
      const ok = await copyText(buildItemLink(p));
      alert(ok ? (lang==="en"?"Link copied":(lang==="ku"?"بەستەر کۆپی کرا":"تم نسخ الرابط")) : (lang==="en"?"Could not copy":"تعذر النسخ"));
    };

    els.shareWaBtn.onclick = () => {
      const msg = buildOrderMessage(p, true);
      window.open(`https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    };

    els.orderWhatsApp.onclick = () => {
      const msg = buildOrderMessage(p, true);
      window.open(`https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    };

    els.copyOrder.onclick = async () => {
      const ok = await copyText(buildOrderMessage(p, true));
      alert(ok ? (lang==="en"?"Copied":(lang==="ku"?"کۆپی کرا":"تم النسخ")) : (lang==="en"?"Could not copy":"تعذر النسخ"));
    };

    renderSimilar(p);

    els.modal.classList.add("is-open");
    els.modal.setAttribute("aria-hidden","false");
    els.modalBody.scrollTop = 0;

    if (!silent){
      try{
        const url = new URL(window.location.href);
        url.hash = `item=${encodeURIComponent(p._key)}`;
        history.pushState({}, "", url.toString());
      }catch{}
    }
  }

  function closeModal(){
    els.modal.classList.remove("is-open");
    els.modal.setAttribute("aria-hidden","true");
    state.openKey = null;
  }

  // similar
  function getSimilar(p, limit=6){
    return ALL.filter(x => x._key !== p._key && x._catKey === p._catKey).slice(0, limit);
  }

  function renderSimilar(p){
    const items = getSimilar(p, 6);
    if (!items.length){
      els.similarProducts.innerHTML = "";
      return;
    }
    const lang = getLang();
    const head = lang==="en" ? "Similar items" : (lang==="ku" ? "دانە هاوشێوەکان" : "قطع مشابهة");

    els.similarProducts.innerHTML = `
      <div class="similarHead">${head}</div>
      <div class="similarGrid">
        ${items.map(x => `
          <button class="similar-item" type="button" data-key="${x._key}">
            <img src="${x._img}" alt="">
            <div class="t">${safeText(pickText(x,"name"))}</div>
            <div class="pr">${safeText(x._priceText)}</div>
          </button>
        `).join("")}
      </div>
    `;

    els.similarProducts.querySelectorAll(".similar-item").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const k = btn.getAttribute("data-key");
        if (k) openModal(k);
      });
    });
  }

  // order message
  function getCustomer(){
    return {
      name: safeText(els.orderName?.value).trim(),
      phone: safeText(els.orderPhone?.value).trim(),
      email: safeText(els.orderEmail?.value).trim(),
      gov: safeText(els.orderGov?.value).trim(),
      area: safeText(els.orderArea?.value).trim(),
      landmark: safeText(els.orderLandmark?.value).trim(),
      notes: safeText(els.orderNotes?.value).trim(),
    };
  }

  function buildOrderMessage(p, includeLink=true){
    const lang = getLang();
    const c = getCustomer();
    const name = pickText(p,"name");
    const desc = pickText(p,"desc");
    const link = includeLink ? buildItemLink(p) : "";
    const st = statusText(p._statusKey);

    if (lang==="en"){
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
        `• Name: ${c.name}`,
        `• Phone: ${c.phone}`,
        `• Email: ${c.email}`,
        `• Governorate/City: ${c.gov}`,
        `• Area: ${c.area}`,
        c.landmark ? `• Landmark: ${c.landmark}` : "",
        c.notes ? `• Notes: ${c.notes}` : "",
      ].filter(Boolean).join("\n");
    }

    if (lang==="ku"){
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
      ].filter(Boolean).join("\n");
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
      `• الاسم: ${c.name}`,
      `• الهاتف: ${c.phone}`,
      `• البريد الإلكتروني: ${c.email}`,
      `• المحافظة/المدينة: ${c.gov}`,
      `• المنطقة: ${c.area}`,
      c.landmark ? `• أقرب نقطة دالة: ${c.landmark}` : "",
      c.notes ? `• ملاحظات: ${c.notes}` : "",
    ].filter(Boolean).join("\n");
  }

  // hash open
  function tryOpenFromHash(){
    const h = safeText(location.hash);
    const m = h.match(/item=([^&]+)/);
    if (!m) return;
    const key = decodeURIComponent(m[1]);
    if (getByKey(key)) setTimeout(()=> openModal(key, true), 50);
  }

  // events
  function bindEvents(){
    if (els.langSelect){
      els.langSelect.value = getLang();
      els.langSelect.addEventListener("change", (e)=> setLang(e.target.value || "ar"));
    }

    els.searchInput?.addEventListener("input",(e)=>{
      state.q = e.target.value || "";
      renderGrid();
    });

    els.sortSelect?.addEventListener("change",(e)=>{
      state.sort = e.target.value || "featured";
      renderGrid();
    });

    els.showSelect?.addEventListener("change",(e)=>{
      state.show = e.target.value || "all";
      renderGrid();
    });

    els.chipsWrap?.addEventListener("click",(e)=>{
      const btn = e.target.closest("button[data-cat]");
      if (!btn) return;
      state.cat = btn.getAttribute("data-cat") || "all";
      renderAll();
    });

    els.productsGrid?.addEventListener("click",(e)=>{
      const tile = e.target.closest(".tile");
      if (!tile) return;
      const key = tile.getAttribute("data-key");
      if (!key) return;

      // fav dot only
      if (e.target.closest(".favDot")){
        toggleFav(key);
        return;
      }
      openModal(key);
    });

    els.modalClose?.addEventListener("click", closeModal);
    els.modal?.addEventListener("click",(e)=>{ if (e.target === els.modal) closeModal(); });
    document.addEventListener("keydown",(e)=>{ if (e.key==="Escape") closeModal(); });

    window.addEventListener("popstate", ()=>{
      if (els.modal.classList.contains("is-open")) closeModal();
      tryOpenFromHash();
    });

    // similar clicks
    document.addEventListener("click",(e)=>{
      const sim = e.target.closest(".similar-item");
      if (!sim) return;
      const k = sim.getAttribute("data-key");
      if (k) openModal(k);
    });
  }

  function init(){
    bindEls();
    applyLangToDOM(getLang());
    loadFavs();
    hydrate();
    bindEvents();
    renderAll();
    tryOpenFromHash();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
