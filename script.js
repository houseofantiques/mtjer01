(() => {
  "use strict";

  /* =========================
     CONFIG
  ========================= */
  const WHATSAPP_NUMBER_INTL = "9647737079079";
  const STORE_CANONICAL_URL  = "https://houseofantiques.github.io/mtjer01/";
  const FAV_KEY  = "hoa_favorites_v6";
  const LANG_KEY = "hoa_lang_v6";

  // ✅ نلغي حفظ الكاتوكري نهائياً حتى ما يصير يثبت "اعمال فنية" بعد الريلود
  // (ملاحظة: إذا تحبين نرجعه لاحقاً نخليه اختياري)
  const CAT_KEY  = "hoa_category_v6"; // موجود فقط حتى نمسحه من التخزين

  const $ = (id) => document.getElementById(id);
  const safeText = (x) => (x == null ? "" : String(x));
  const isObj = (x) => x && typeof x === "object" && !Array.isArray(x);

  /* =========================
     DOM (matches your HTML exactly)
  ========================= */
  const els = {};
  function bindEls() {
    els.langSelect    = $("langSelect");
    els.searchInput   = $("searchInput");
    els.resultsCount  = $("resultsCount");
    els.chipsWrap     = $("chipsWrap");
    els.sortSelect    = $("sortSelect");
    els.showSelect    = $("showSelect");
    els.productsGrid  = $("productsGrid");
    els.emptyState    = $("emptyState");

    // modal
    els.modal         = $("modal");
    els.modalClose    = $("modalClose");
    els.modalBody     = $("modalBody");
    els.modalMainImg  = $("modalMainImg");

    els.pinPrice      = $("pinPrice");
    els.modalTitle    = $("modalTitle");
    els.modalBadge    = $("modalBadge");
    els.modalCode     = $("modalCode");
    els.modalStatus   = $("modalStatus");

    els.pinDimsWrap   = $("pinDimsWrap");
    els.itemDimensions= $("itemDimensions");

    els.pinDetailsToggle = $("pinDetailsToggle");
    els.pinOrderToggle   = $("pinOrderToggle");
    els.pinDetails       = $("pinDetails");
    els.pinDesc          = $("pinDesc");
    els.pinMoreBtn       = $("pinMoreBtn");
    els.pinOrderPanel    = $("pinOrderPanel");

    els.favBtn        = $("favBtn");
    els.shareWaBtn    = $("shareWaBtn");
    els.copyLinkBtn   = $("copyLinkBtn");

    els.similarProducts = $("similarProducts");

    // order
    els.orderName     = $("orderName");
    els.orderPhone    = $("orderPhone");
    els.orderEmail    = $("orderEmail");
    els.orderGov      = $("orderGov");
    els.orderArea     = $("orderArea");
    els.orderLandmark = $("orderLandmark");
    els.orderNotes    = $("orderNotes");
    els.orderWhatsApp = $("orderWhatsApp");
    els.copyOrder     = $("copyOrder");
  }

  /* =========================
     LANG + i18n
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
    featured: { ar: "قطع مميزة", en: "Featured", ku: "هەڵبژاردەکان" },
  };

  const CATEGORY_KEYS = ["artworks","paintings","wood","copper","crystal","furniture","arabicCalligraphy","accessories","carpets"];
  const CAT_AR = ["اعمال فنية","لوحات","خشب","نحاس","كريستال","اثاث","خطوط عربية","اكسسوارات","سجاد"];
  const CAT_EN = ["Artworks","Paintings","Wood","Copper","Crystal","Furniture","Arabic Calligraphy","Accessories","Carpets"];
  const CAT_KU = ["کاری هونەری","تابلۆکان","دار","مەس","کریستاڵ","کەلوپەلی ناوماڵ","خەتاطی عەرەبی","ئاکسسوار","فرش"];

  function getLang() {
    return (els.langSelect && els.langSelect.value) || localStorage.getItem(LANG_KEY) || "ar";
  }
  function t(objKey) {
    const lang = getLang();
    return (TXT[objKey] && TXT[objKey][lang]) || objKey;
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
    document.documentElement.dir  = (lang === "ar" || lang === "ku") ? "rtl" : "ltr";
  }
  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLangToDOM(lang);
    renderAll();
    if (state.openKey) openModal(state.openKey, true);
  }

  /* =========================
     Helpers
  ========================= */
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
    const v = obj?.[field];
    if (isObj(v)) return safeText(v[lang] || v.ar || v.en || v.ku || "");
    return safeText(v);
  }

  function imgOf(p) {
    return safeText(p.image || (Array.isArray(p.images) ? p.images[0] : "") || p._image || "");
  }

  function normalizeStatusKey(p) {
    const raw = safeText(p.statusKey || p.status || "").toLowerCase();
    if (raw.includes("acquired") || raw.includes("تم")) return "acquired";
    if (raw.includes("reserved") || raw.includes("محجوز")) return "reserved";
    return "available";
  }

  function statusText(key) {
    if (key === "available") return t("available");
    if (key === "reserved")  return t("reserved");
    if (key === "acquired")  return t("acquired");
    return "—";
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

  async function copyToClipboard(text) {
    try { await navigator.clipboard.writeText(text); return true; }
    catch { return false; }
  }

  /* =========================
     Category normalize (AR/EN/KU -> fixed key)
  ========================= */
  function normCatInput(s){ return safeText(s).toLowerCase().replace(/\s+/g," ").trim(); }

  function normalizeCategoryKey(input) {
    const s = normCatInput(input);
    if (!s) return "other";
    if (CATEGORY_KEYS.includes(s)) return s;

    // AR
    if (s.includes("اعمال") || s.includes("أعمال") || s.includes("عمل فني") || s.includes("فن")) return "artworks";
    if (s.includes("لوحات") || s.includes("لوحه") || s.includes("لوحة")) return "paintings";
    if (s.includes("خشب") || s.includes("اخشاب")) return "wood";
    if (s.includes("نحاس")) return "copper";
    if (s.includes("كريستال")) return "crystal";
    if (s.includes("اثاث") || s.includes("أثاث") || s.includes("كنب") || s.includes("كرسي") || s.includes("طاولة")) return "furniture";
    if (s.includes("خطوط") || s.includes("خط عربي") || s.includes("calligraphy")) return "arabicCalligraphy";
    if (s.includes("اكسسوارات") || s.includes("إكسسوارات") || s.includes("اكسسوار")) return "accessories";
    if (s.includes("سجاد") || s.includes("زولية") || s.includes("زوالي")) return "carpets";

    // EN
    if (s.includes("artwork") || s === "art" || s.includes("artworks")) return "artworks";
    if (s.includes("painting")) return "paintings";
    if (s.includes("wood")) return "wood";
    if (s.includes("copper")) return "copper";
    if (s.includes("crystal")) return "crystal";
    if (s.includes("furniture")) return "furniture";
    if (s.includes("arabic calligraphy") || (s.includes("calligraphy") && s.includes("arabic"))) return "arabicCalligraphy";
    if (s.includes("accessor")) return "accessories";
    if (s.includes("carpet") || s.includes("rug")) return "carpets";

    // KU (Sorani)
    if (s.includes("کاری هونەری") || s.includes("هونەری")) return "artworks";
    if (s.includes("تابلۆ")) return "paintings";
    if (s.includes("دار")) return "wood";
    if (s.includes("مەس")) return "copper";
    if (s.includes("کریستاڵ")) return "crystal";
    if (s.includes("کەلوپەل")) return "furniture";
    if (s.includes("خەتاطی")) return "arabicCalligraphy";
    if (s.includes("ئاکسسوار")) return "accessories";
    if (s.includes("فرش")) return "carpets";

    return "other";
  }

  /* =========================
     Products
  ========================= */
  function getProductsRaw() {
    if (Array.isArray(window.PRODUCTS)) return window.PRODUCTS;
    if (Array.isArray(window.HOA_PRODUCTS)) return window.HOA_PRODUCTS;
    if (Array.isArray(window.products)) return window.products;
    return [];
  }

  let ALL = [];
  function hydrate() {
    const raw = getProductsRaw();
    const seen = new Map();

    ALL = raw.map((p, idx) => {
      const code = safeText(p.code || p.id || `ITEM-${idx+1}`);
      const n = (seen.get(code) || 0) + 1;
      seen.set(code, n);
      const key = n === 1 ? code : `${code}__${n}`;

      const catText  = pickText(p, "category") || safeText(p.category || p.cat || "");
      const catKey   = normalizeCategoryKey(catText);
      const priceText= safeText(p.price) || formatIQD(p.priceNumber);

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

  /* =========================
     Favorites
  ========================= */
  let favs = new Set();
  function loadFavs() {
    try {
      const raw = localStorage.getItem(FAV_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      favs = new Set(Array.isArray(arr) ? arr : []);
    } catch { favs = new Set(); }
  }
  function saveFavs() {
    try { localStorage.setItem(FAV_KEY, JSON.stringify([...favs])); } catch {}
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
    cat: "all",          // ✅ دايماً نبدأ all
    sort: "featured",
    show: "all",
    openKey: null
  };

  function getByKey(key){ return ALL.find(p => p._key === key) || null; }

  /* =========================
     Filtering
  ========================= */
  function matchesSearch(p, qNorm) {
    if (!qNorm) return true;
    const name = normalizeArabic(pickText(p, "name"));
    const code = normalizeArabic(p._code);
    const desc = normalizeArabic(pickText(p, "desc"));
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
      out.sort((a,b) => safeText(b.createdAt).localeCompare(safeText(a.createdAt)));
      return out;
    }
    if (state.sort === "priceAsc") {
      out.sort((a,b) => Number(a.priceNumber||0) - Number(b.priceNumber||0));
      return out;
    }
    if (state.sort === "priceDesc") {
      out.sort((a,b) => Number(b.priceNumber||0) - Number(a.priceNumber||0));
      return out;
    }
    out.sort((a,b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    return out;
  }

  /* =========================
     Categories (ONLY 9 + all)
  ========================= */
  function renderChips() {
    if (!els.chipsWrap) return;
    const keys = ["all", ...CATEGORY_KEYS];
    els.chipsWrap.innerHTML = keys.map(k => {
      const active = (state.cat === k) ? "is-active" : "";
      return `<button class="chip ${active}" type="button" data-cat="${k}">${catLabel(k)}</button>`;
    }).join("");
  }

  /* =========================
     Featured Row
  ========================= */
  function renderFeatured(){
    const wrap = document.getElementById("featuredWrap");
    if(!wrap) return;

    const featured = ALL.filter(p => p.featured === true).slice(0, 12);
    if(!featured.length){ wrap.innerHTML = ""; return; }

    wrap.innerHTML = `
      <div class="featuredHead">
        <div class="title">${t("featured")}</div>
      </div>
      <div class="featuredRail">
        ${featured.map(p=>{
          const name = pickText(p,"name") || p._code;
          return `
            <div class="featuredCard" data-key="${p._key}">
              <div class="featuredImg"><img src="${p._img}" alt=""></div>
              <div class="featuredBody">
                <div class="featuredName">${safeText(name)}</div>
                <div class="featuredMeta">
                  <span>${safeText(p._code)}</span>
                  <span>${safeText(p._priceText)}</span>
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    wrap.querySelectorAll(".featuredCard").forEach(card=>{
      card.addEventListener("click", ()=>{
        const k = card.getAttribute("data-key");
        if(k) openModal(k);
      });
    });
  }

  /* =========================
     Grid render
  ========================= */
  function tileHTML(p) {
    const name = pickText(p, "name");
    const st = statusText(p._statusKey);
    const fav = favs.has(p._key);

    return `
      <div class="tile" data-key="${p._key}">
        <img class="tileImg" src="${p._img}" alt="${safeText(name)}" loading="lazy">
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
    const filtered = ALL.filter(passes);
    const list = sortList(filtered);

    if (els.resultsCount) els.resultsCount.textContent = `${list.length} ${t("results")}`;

    if (!list.length) {
      if (els.productsGrid) els.productsGrid.innerHTML = "";
      if (els.emptyState){
        els.emptyState.style.display = "block";
        els.emptyState.textContent = t("noResults");
      }
      return;
    }

    if (els.emptyState) els.emptyState.style.display = "none";
    if (els.productsGrid) els.productsGrid.innerHTML = list.map(tileHTML).join("");
  }

  function renderAll() {
    renderChips();
    renderFeatured();
    renderGrid();
  }

  /* =========================
     Modal + Back button fix
  ========================= */
  let modalTrapActive = false;

  function pushModalState(key){
    // ✅ نخلي Back يرجّع يغلق المودال فقط (خصوصاً بالموبايل)
    // نضيف state خاص للمودال فقط (بدون تغيير URL hash)
    history.pushState({ hoaModal: true, key }, "", location.href);
    modalTrapActive = true;
  }

  function openModal(key, silent=false) {
    const p = getByKey(key);
    if (!p) return;

    state.openKey = key;

    const name = pickText(p, "name");
    const desc = pickText(p, "desc");
    const dims = safeText(p.dimensions || p.dimension || p.size || "").trim();

    els.modalTitle.textContent  = safeText(name);
    els.modalCode.textContent   = safeText(p._code);
    els.modalStatus.textContent = statusText(p._statusKey);
    els.pinPrice.textContent    = safeText(p._priceText);

    if (els.modalBadge) {
      els.modalBadge.style.display = p.auction ? "inline-flex" : "none";
      if (p.auction) els.modalBadge.textContent = t("auction");
    }

    if (els.itemDimensions) els.itemDimensions.textContent = dims;
    if (els.pinDimsWrap) els.pinDimsWrap.style.display = dims ? "block" : "none";

    els.modalMainImg.src = p._img || "";
    els.modalMainImg.alt = safeText(name);

    // desc + more
    els.pinDesc.textContent = safeText(desc) || "—";
    els.pinDesc.classList.add("is-collapsed");

    const long = safeText(desc).length > 120;
    els.pinMoreBtn.style.display = long ? "inline-block" : "none";
    els.pinMoreBtn.textContent = t("seeMore");
    els.pinMoreBtn.onclick = () => {
      const collapsed = els.pinDesc.classList.toggle("is-collapsed");
      els.pinMoreBtn.textContent = collapsed ? t("seeMore") : t("seeLess");
    };

    // toggles
    showPanel("details");
    els.pinDetailsToggle.onclick = () => showPanel("details");
    els.pinOrderToggle.onclick   = () => showPanel("order");

    function showPanel(which){
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

    // actions
    updateFavBtn(key);
    els.favBtn.onclick = () => toggleFav(key);

    els.copyLinkBtn.onclick = async () => {
      const ok = await copyToClipboard(buildItemLink(p));
      alert(ok ? t("linkCopied") : t("copyFail"));
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
      const ok = await copyToClipboard(buildOrderMessage(p, true));
      alert(ok ? t("copied") : t("copyFail"));
    };

    renderSimilar(p);

    els.modal.classList.add("is-open");
    els.modal.setAttribute("aria-hidden","false");
    els.modalBody.scrollTop = 0;

    // ✅ pushState حتى زر الرجوع يغلق المودال فقط
    if (!silent) pushModalState(key);
  }

  function closeModal(fromPop=false) {
    els.modal.classList.remove("is-open");
    els.modal.setAttribute("aria-hidden","true");
    state.openKey = null;

    // إذا المستخدم ضغط "اغلاق" مو Back، نرجّع خطوة وحدة حتى ما يبقى modal state
    if (!fromPop && modalTrapActive) {
      modalTrapActive = false;
      history.back();
    }
  }

  /* =========================
     Similar
  ========================= */
  function getSimilar(p, limit=6) {
    return ALL.filter(x => x._key !== p._key && x._catKey === p._catKey).slice(0, limit);
  }

  function renderSimilar(p) {
    const items = getSimilar(p, 6);
    if (!items.length) { els.similarProducts.innerHTML = ""; return; }

    els.similarProducts.innerHTML = `
      <div class="similarHead">${t("similar")}</div>
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

    els.similarProducts.querySelectorAll(".similar-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const k = btn.getAttribute("data-key");
        if (k) openModal(k);
      });
    });
  }

  /* =========================
     Order message
  ========================= */
  function getCustomer() {
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

  function buildOrderMessage(p, includeLink=true) {
    const lang = getLang();
    const c = getCustomer();
    const name = pickText(p,"name");
    const desc = pickText(p,"desc");
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
        `• Name: ${c.name}`,
        `• Phone: ${c.phone}`,
        `• Email: ${c.email}`,
        `• Governorate/City: ${c.gov}`,
        `• Area: ${c.area}`,
        c.landmark ? `• Landmark: ${c.landmark}` : "",
        c.notes ? `• Notes: ${c.notes}` : "",
      ].filter(Boolean).join("\n");
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

  /* =========================
     HERO SLIDER (8 slides / 4s)
  ========================= */
function initHeroSlider(){
  const slider = document.getElementById("heroSlider");
  const track  = document.getElementById("heroTrack");
  const dotsWrap = document.getElementById("heroDots");
  if(!track || !dotsWrap) return;

  const slides = Array.from(track.children);
  const total = slides.length;
  if(total <= 1) return;

  // RTL / LTR aware
  const isRTL = () => (document.documentElement.dir || "").toLowerCase() === "rtl";

  dotsWrap.innerHTML = slides
    .map((_,i)=>`<button type="button" aria-label="slide ${i+1}"></button>`)
    .join("");

  const dots = Array.from(dotsWrap.querySelectorAll("button"));

  let heroIdx = 0;
  let heroTimer = null;

  const apply = () => {
    const x = heroIdx * 100;
    // ✅ RTL يتحرك عكس LTR
    track.style.transform = isRTL()
      ? `translateX(${x}%)`
      : `translateX(-${x}%)`;

    dots.forEach((d,di)=>d.classList.toggle("is-active", di === heroIdx));
  };

  const go = (i, user=false) => {
    heroIdx = (i + total) % total;
    apply();
    if(user) restart();
  };

  const next = () => go(heroIdx + 1);

  function restart(){
    if(heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(next, 4000); // ✅ كل 4 ثواني
  }

  dots.forEach((d,i)=> d.addEventListener("click", ()=> go(i, true)));

  // pause on hover
  slider?.addEventListener("mouseenter", ()=> heroTimer && clearInterval(heroTimer));
  slider?.addEventListener("mouseleave", ()=> restart());

  // start
  go(0);
  restart();

  // ✅ إذا تغيّر الاتجاه بسبب تغيير اللغة
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

      els.langSelect.addEventListener("change", (e) => {
        setLang(e.target.value || "ar");
      });
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
      // ✅ لا نخزن الكاتوكري بعد
      renderAll();
    });

    els.productsGrid?.addEventListener("click", (e) => {
      const tile = e.target.closest(".tile");
      if (!tile) return;
      const key = tile.getAttribute("data-key");
      if (!key) return;

      if (e.target.closest(".favDot")) {
        toggleFav(key);
        return;
      }
      openModal(key);
    });

    els.modalClose?.addEventListener("click", () => closeModal(false));
    els.modal?.addEventListener("click", (e) => { if (e.target === els.modal) closeModal(false); });

    // ESC close
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && els.modal.classList.contains("is-open")) closeModal(false); });

    // ✅ Back button behavior:
    window.addEventListener("popstate", (ev) => {
      // إذا المودال مفتوح: اغلقه وبس
      if (els.modal.classList.contains("is-open")) {
        closeModal(true);
        return;
      }
      // إذا رجعنا لورا عادي (بدون مودال) لا نسوي شي
    });

    // similar clicks (safe)
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
    bindEls();

    // ✅ تنظيف سبب “يفتح اعمال فنية” بعد الريلود
    try { localStorage.removeItem(CAT_KEY); } catch {}

    // ✅ إذا الصفحة تحمل هاش قديم (item=...) احذفه حتى لا يفتح قطعة تلقائياً بعد refresh
    // (هذا يحل “كل ريلود يفتح ايتم” إذا كان الرابط متخزن ببار المتصفح)
    try {
      if (location.hash && /item=/.test(location.hash)) {
        history.replaceState({}, "", location.pathname + location.search);
      }
    } catch {}

    loadFavs();
    hydrate();
    initHeroSlider();

    bindEvents();
    renderAll();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
