"use strict";

/* =========================
   1) WhatsApp + EmailJS
========================= */
const WHATSAPP_NUMBER_INTL = "9647737079079";

const EMAILJS_PUBLIC_KEY = "tivoinl7MHIKAOORE";
const EMAILJS_SERVICE_ID = "service_bm4mbb9";
const EMAILJS_TEMPLATE_ID = "template_yksn5vh";

/* =========================
   2) Categories + Products
========================= */
const CATEGORIES = ["الكل", "سجاد", "خشب", "نحاس", "فضة", "كريستال", "أعمال فنية","فازات" ,"لوحات"];

const PRODUCTS = [
  {
    id: "HOA-FINE-001",
    name: "عمل فني حجري (كولة) — 50 سم",
    category: "أعمال فنية",
    price: "1,450,000 د.ع",
    priceNumber: 1450000,
    desc: "منحوتة حجرية (كولة) بارتفاع 50 سم، عمرها أكثر من 75 سنة. لفنان عراقي غير معروف. قطعة نادرة للعرض في المكتبات أو الواجهات.",
    images: ["images/hoa-01-stone.jpg"],
    image: "images/hoa-01-stone.jpg",
    featured: true,
    createdAt: "2026-01-03",
    status: "available"
  },
  {
    id: "HOA-WOOD-002",
    name: "كرسي خشب قابل للطي — ارتفاع 80 سم",
    category: "خشب",
    price: "280,000 د.ع",
    priceNumber: 280000,
    desc: "كرسي خشبي ينطوي (Foldable) بارتفاع 80 سم. عملي ومناسب للديكور التراثي أو الاستخدام الخفيف.",
    images: ["images/hoa-02-chair.jpg"],
    image: "images/hoa-02-chair.jpg",
    featured: false,
    createdAt: "2026-01-03",
    status: "available"
  },
  {
    id: "HOA-slv-003",
    name: "سيت فرج + مرايا أنتيكة نسائية (3 قطع)",
    category: "فضة",
    price: "1,250,000 د.ع",
    priceNumber: 1250000,
    desc: "سيت نسائي أنتيك (3 قطع): فرج + مرايا + قطعة مرافقة. مناسب لغرفة نوم فخمة أو ركن تصوير.",
    images: ["images/hoa-03-vanity-set.jpg"],
    image: "images/hoa-03-vanity-set.jpg",
    featured: true,
    createdAt: "2026-01-03",
    status: "reserved"
  },
  {
    id: "HOA-WOOD-004",
    name: "باب خشبي مع مدكة نحاس — عمر 120 سنة",
    category: "خشب",
    price: "3,800,000 د.ع",
    priceNumber: 3800000,
    desc: "باب خشبي تاريخي مع مدكة/مطرقة نحاس. العمر قرابة 120 سنة. الأبعاد: ارتفاع 2 متر، عرض 120 سم.",
    images: ["images/hoa-04-door.jpg"],
    image: "images/hoa-04-door.jpg",
    featured: true,
    createdAt: "2026-01-03",
    status: "available"
  },
  {
    id: "HOA-FINE-005",
    name: "سيت فازات فخارية مرسومة يدوياً (3 قطع) — عمر 60 سنة",
    category: "أعمال فنية",
    price: "620,000 د.ع",
    priceNumber: 620000,
    desc: "3 فازات فخارية برسوم يدوية أصلية، عمرها تقريباً 60 سنة. مناسبة لطاولة استقبال أو رف عرض.",
    images: ["images/hoa-05-pottery-set.jpg"],
    image: "images/hoa-05-pottery-set.jpg",
    featured: false,
    createdAt: "2026-01-03",
    status: "available"
  },
  {
    id: "HOA-FINE-006",
    name: "عمل أفريقي من المعجون — ارتفاع 30 سم",
    category: "أعمال فنية",
    price: "390,000 د.ع",
    priceNumber: 390000,
    desc: "مجسّم/عمل أفريقي مصنوع من المعجون بدقة عالية، ارتفاع 30 سم، عمره أكثر من 25 سنة.",
    images: ["images/hoa-06-african-art.jpg"],
    image: "images/hoa-06-african-art.jpg",
    featured: false,
    createdAt: "2026-01-03",
    status: "available"
  },
  {
    id: "HOA-COP-007",
    name: "شيشة نحاس تراثية — عمر 120 سنة",
    category: "نحاس",
    price: "1,900,000 د.ع",
    priceNumber: 1900000,
    desc: "شيشة نحاس قديمة جداً (عمر تقريبي 120 سنة). قطعة مميزة للعرض التراثي أكثر من الاستخدام.",
    images: ["images/hoa-07-hookah.jpg"],
    image: "images/hoa-07-hookah.jpg",
    featured: true,
    createdAt: "2026-01-03",
    status: "sold"
  },
  {
    id: "HOA-CRY-008",
    name: "قطعة كريستال مرسوم عليها ملك عثماني — عمر 150 سنة",
    category: "كريستال",
    price: "2,750,000 د.ع",
    priceNumber: 2750000,
    desc: "قطعة كريستال نادرة برسمة ملك عثماني، تعود للعهد العثماني بعمر تقريبي 150 سنة.",
    images: ["images/hoa-08-ottoman-crystal.jpg"],
    image: "images/hoa-08-ottoman-crystal.jpg",
    featured: true,
    createdAt: "2026-01-03",
    status: "available"
  },
  {
    id: "HOA-COP-009",
    name: "مدكة نحاس ثقيلة (قطعتين) — وزن 900 غرام",
    category: "نحاس",
    price: "520,000 د.ع",
    priceNumber: 520000,
    desc: "مدكة/مدقات نحاس عدد 2، وزن القطعة 900 غرام تقريباً، عمرها قرابة 70 سنة.",
    images: ["images/hoa-09-brass-knockers.jpg"],
    image: "images/hoa-09-brass-knockers.jpg",
    featured: false,
    createdAt: "2026-01-03",
    status: "available"
  },
  {
    
    id: "HOA-CRY-010",
    name: "سيت كريستال (قطعتين) — طول 30 سم",
    category: "كريستال",
    price: "480,000 د.ع",
    priceNumber: 480000,
    desc: "طقم كريستال عدد 2، طول القطعة 30 سم، عمر تقريبي 40 سنة. مناسب للديكور أو طاولة الضيافة.",
    images: ["images/hoa-10-crystal-set.jpg"],
    image: "images/hoa-10-crystal-set.jpg",
    featured: false,
    createdAt: "2026-01-03",
    status: "available"
  },
  {
  id: "HOA-ART-011",
  name: "بورتريه تعبيري — علي نعمة (2014)",
  category: "لوحات",
  price: "2,100,000 د.ع",
  priceNumber: 2100000,
  desc: "لوحة فنية أصلية من أعمال الفنان العراقي علي نعمة، منفذة عام 2014، بأسلوب تعبيري يجسّد ملامح إنسانية عميقة تتقاطع فيها الذاكرة مع الزمن. العمل مرسوم بألوان زيتية على Canvas، ويعتمد على تباين لوني قوي يمنح اللوحة بعدًا دراميًا وتأمليًا. الأبعاد: 40 × 120 سم. الحالة: ممتازة.",
  images: [
    "images/hoa-art-011.jpg"
  ],
  image: "images/hoa-art-011.jpg",
  featured: true,
  createdAt: "2014-01-01",
  status: "available"
},
{
  
  id: "HOA-slv-012",
  name: "سِيت فضة تراثي (3 قطع) — نقش يدوي",
  category: "فضة",
  price: "1,650,000 د.ع",
  priceNumber: 1650000,
  desc: "سِيت فضة تراثي مكوّن من ثلاث قطع أصلية، يعود عمرها لأكثر من 60 عامًا، منفذة بنقوش يدوية دقيقة تعكس الذائقة الحِرفية للفضة في منتصف القرن العشرين.",
  images: [
    "images/hoa-slv-012.jpg"
  ],
  image: "images/hoa-slv-012.jpg",
  featured: true,
  createdAt: "1960-01-01",
  status: "available"
},
{
  id: "HOA-ART-013",
  name: "تكوين إنساني — جواد سليم",
  category: "أعمال فنية",
  price: "11,500,000 د.ع",
  priceNumber: 7500000,
  desc: "عمل نحتي تجريدي منفذ من النحاس، منسوب إلى الفنان العراقي الرائد جواد سليم، يعود تاريخه إلى ما يقارب 40 عامًا. يجسد العمل الأسلوب الحداثي الذي يميز تجربة الفنان، حيث يتداخل الجسد الإنساني مع التكوين التجريدي في حركة عمودية متزنة تعبّر عن العلاقة بين الكتلة والفراغ. الارتفاع: 80 سم. الحالة: جيدة جدًا.",
  images: [
    "images/hoa-art-013.jpg"
  ],
  image: "images/hoa-art-013.jpg",
  featured: true,
  createdAt: "1985-01-01",
  status: "available"
},
{
  id: "HOA-VAS-014",
  name: "فازة فخار منقوشة يدويًا — تراثية",
  category: "فازات",
  price: "720,000 د.ع",
  priceNumber: 720000,
  desc: "فازة فخارية تراثية مصنوعة يدويًا، يعود عمرها إلى ما يقارب 50 عامًا، تتميّز بنقوش يدوية منفذة بألوان خاصة تضيف للقطعة طابعًا فنيًا دافئًا. الشكل الانسيابي للفازة يجعلها مناسبة للعرض في المساحات التراثية أو ضمن مجموعات الاقتناء. الطول: 60 سم. الحالة: جيدة جدًا.",
  images: [
    "images/hoa-vas-014.jpg"
  ],
  image: "images/hoa-vas-014.jpg",
  featured: false,
  createdAt: "1975-01-01",
  status: "available"
},
{
  id: "HOA-TRL-015",
  name: "مكِنة خياطة “الفراشة” — خمسينات القرن الماضي",
  category: "أدوات تراثية",
  price: "1,450,000 د.ع",
  priceNumber: 1450000,
  desc: "مكِنة خياطة تراثية معروفة باسم “الفراشة”، تعود إلى خمسينات القرن الماضي، محفوظة بحالتها الأصلية مع منضدة خشب وغطاء خشبي متكاملين. تتميّز بتصميمها الكلاسيكي المتين، والمكِنة شغّالة وتصلح للعرض التراثي أو للاستخدام الخفيف لهواة الاقتناء. الحالة: جيدة جدًا.",
  images: [
    "images/hoa-trl-015.jpg"
  ],
  image: "images/hoa-trl-015.jpg",
  featured: true,
  createdAt: "1955-01-01",
  status: "available"
},
{
  id: "HOA-ART-016",
  name: "من التراث الريفي",
  category: "لوحات",
  price: "1,450,000 د.ع",
  priceNumber: 1450000,
  desc: "لوحة فنية تجسّد مشهد البايطار في بيئة ريفية، تعكس العلاقة بين الإنسان والحيوان من خلال تعبيرات إنسانية عميقة وحضور بصري للخيل كعنصر مركزي في التكوين. اعتمد الفنان على توزيع متوازن للشخصيات مع ألوان دافئة تعبّر عن الذاكرة الشعبية. العمر: حوالي 20 سنة. الحالة: جيدة جدًا.",
  images: [
    "images/hoa-art-016.jpg"
  ],
  image: "images/hoa-art-016.jpg",
  featured: false,
  createdAt: "2005-01-01",
  status: "available"
},
{
  id: "HOA-ART-017",
  name: "لوحة أوروبية مؤطرة مع شمعدانات برونزية فكتورية",
  category: "لوحات ",
  price: "4,500,000 د.ع",
  priceNumber: 4500000,
  desc: "لوحة أوروبية قديمة تجسّد مشهدًا بحريًا تاريخيًا بأسلوب واقعي، مؤطرة بإطار فكتوري فاخر غني بالزخارف البارزة والعناصر الزخرفية الدقيقة. يرافق اللوحة شمعدانان برونزيان أصليان متناسقان، ما يجعلها قطعة عرض متكاملة ذات حضور ملكي. العمر: أكثر من 80 سنة. الحالة: جيدة جدًا نسبةً لعمر القطعة.",
  images: [
    "images/hoa-art-017.jpg",
    "images/hoa-art-017-1.jpg",
    "images/hoa-art-017-2.jpg",
    "images/hoa-art-017-3.jpg"
  ],
  image: "images/hoa-art-017.jpg",
  featured: true,
  createdAt: "1940-01-01",
  status: "available"
}


];

/* =========================
   3) Elements
========================= */
const els = {
  grid: document.getElementById("productsGrid"),
  chips: document.getElementById("categoryChips"),
  search: document.getElementById("searchInput"),
  sort: document.getElementById("sortSelect"),
  view: document.getElementById("viewSelect"),
  resultsHint: document.getElementById("resultsHint"),
  countItems: document.getElementById("countItems"),

  modal: document.getElementById("productModal"),
  modalPanel: document.querySelector("#productModal .modal__panel"),
  modalContent: document.querySelector("#productModal .modal__content"),
  modalMainImg: document.getElementById("modalMainImg"),
  modalThumbs: document.getElementById("modalThumbs"),
  modalTitle: document.getElementById("modalTitle"),
  modalCategory: document.getElementById("modalCategory"),
  modalStatus: document.getElementById("modalStatus"),
  modalCode: document.getElementById("modalCode"),
  modalPrice: document.getElementById("modalPrice"),
  modalDesc: document.getElementById("modalDesc"),

  favBtn: document.getElementById("favBtn"),

  tabDetails: document.getElementById("tabDetails"),
  tabOrder: document.getElementById("tabOrder"),
  detailsSection: document.getElementById("detailsSection"),
  orderSection: document.getElementById("orderSection"),

  suggestedWrap: document.getElementById("suggestedWrap"),
  suggestedGrid: document.getElementById("suggestedGrid"),

  form: document.getElementById("orderForm"),
  custName: document.getElementById("custName"),
  custPhone: document.getElementById("custPhone"),
  custGov: document.getElementById("custGov"),
  custArea: document.getElementById("custArea"),
  custLandmark: document.getElementById("custLandmark"),
  custNote: document.getElementById("custNote"),
  formStatus: document.getElementById("formStatus"),
  copyBtn: document.getElementById("copyDetailsBtn"),
  orderSubmitBtn: document.getElementById("orderSubmitBtn"),

  shareWAItemBtn: document.getElementById("shareWAItemBtn"),
  copyLinkBtn: document.getElementById("copyLinkBtn"),
  nativeShareBtn: document.getElementById("nativeShareBtn"),

  themeBtn: document.getElementById("themeBtn"),
  year: document.getElementById("year"),
  quickWA: document.getElementById("whatsAppQuick"),
  footerWA: document.getElementById("footerWhatsApp"),
  mobileOrderBtn: document.getElementById("mobileOrderBtn")
};

let state = {
  category: "الكل",
  q: "",
  sort: "featured",
  view: "all",
  activeProduct: null,
  activeImgIndex: 0
};

/* =========================
   4) Favorites (LocalStorage)
========================= */
const FAV_KEY = "hoa_favs_v1";
function getFavs() {
  try { return new Set(JSON.parse(localStorage.getItem(FAV_KEY) || "[]")); }
  catch { return new Set(); }
}
function setFavs(set) { localStorage.setItem(FAV_KEY, JSON.stringify([...set])); }
function isFav(id) { return getFavs().has(id); }
function toggleFav(id) {
  const s = getFavs();
  if (s.has(id)) s.delete(id); else s.add(id);
  setFavs(s);
  return s.has(id);
}

/* =========================
   5) Helpers
========================= */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[m]));
}
function parseDate(d) { return new Date(d).getTime(); }
function statusLabel(status) {
  if (status === "reserved") return "محجوزة للمعاينة";
  if (status === "sold") return "انتقلت لمقتنٍ";
  return "متوفرة";
}
function statusClass(status) {
  if (status === "reserved") return "status-reserved";
  if (status === "sold") return "status-sold";
  return "status-available";
}
function getWhatsappUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(text)}`;
}
function toAbsoluteUrl(url) {
  try { return new URL(url, window.location.href).href; }
  catch { return url; }
}
function getProductUrl(productId) {
  const u = new URL(window.location.href);
  u.searchParams.set("p", productId);
  u.hash = ""; // نخلي الرابط نظيف
  return u.href;
}

/* =========================
   6) EmailJS
========================= */
function initEmailJS() {
  if (!window.emailjs) return;
  if (!EMAILJS_PUBLIC_KEY) return;
  emailjs.init(EMAILJS_PUBLIC_KEY);
}
async function sendOrderEmail({ product, customer, productUrl, imageUrl }) {
  if (!window.emailjs) return;

  const templateParams = {
    customer_name: customer.name,
    customer_phone: customer.phone,
    customer_gov: customer.gov,
    customer_area: customer.area,
    customer_landmark: customer.landmark || "-",
    customer_note: customer.note || "-",

    product_name: product.name,
    product_category: product.category,
    product_code: product.id,
    product_price: product.price,

    product_url: productUrl,
    product_image_url: imageUrl
  };

  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
}

/* =========================
   7) Render Chips / Filter / Sort
========================= */
function renderChips() {
  if (!els.chips) return;
  els.chips.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (state.category === cat ? " is-active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => { state.category = cat; render(); });
    els.chips.appendChild(btn);
  });
}

function getFilteredProducts() {
  const q = state.q.trim().toLowerCase();
  const favs = getFavs();

  return PRODUCTS.filter((p) => {
    const catOK = state.category === "الكل" ? true : p.category === state.category;
    const qOK = !q ? true :
      p.name.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);

    const favOK = state.view === "favorites" ? favs.has(p.id) : true;
    return catOK && qOK && favOK;
  });
}

function sortProducts(list) {
  const s = state.sort;
  const copy = [...list];

  if (s === "featured") {
    copy.sort((a, b) => {
      const af = a.featured ? 1 : 0;
      const bf = b.featured ? 1 : 0;
      if (bf !== af) return bf - af;
      return parseDate(b.createdAt) - parseDate(a.createdAt);
    });
    return copy;
  }
  if (s === "newest") return copy.sort((a, b) => parseDate(b.createdAt) - parseDate(a.createdAt));
  if (s === "priceAsc") return copy.sort((a, b) => (a.priceNumber ?? 9e15) - (b.priceNumber ?? 9e15));
  if (s === "priceDesc") return copy.sort((a, b) => (b.priceNumber ?? -9e15) - (a.priceNumber ?? -9e15));
  return copy;
}

/* =========================
   8) Render Grid
========================= */
function renderGrid() {
  if (!els.grid) return;

  const filtered = getFilteredProducts();
  const sorted = sortProducts(filtered);

  if (els.countItems) els.countItems.textContent = String(PRODUCTS.length);
  if (els.resultsHint) {
    els.resultsHint.textContent =
      `${sorted.length} نتيجة` +
      (state.category !== "الكل" ? ` ضمن "${state.category}"` : "") +
      (state.view === "favorites" ? " (المفضلة)" : "");
  }

  if (sorted.length === 0) {
    els.grid.innerHTML = `
      <div class="card" style="grid-column: 1 / -1; min-height:auto; padding:16px;">
        <div class="card__body">
          <div class="card__name">لا يوجد نتائج</div>
          <div class="card__meta">جرّب تبدّيل التصنيف أو تقليل كلمات البحث.</div>
        </div>
      </div>
    `;
    return;
  }

  const favs = getFavs();

  els.grid.innerHTML = sorted.map((p) => {
    const favOn = favs.has(p.id);
    const canOrder = p.status !== "sold";

    return `
      <article class="card" tabindex="0" role="button" data-id="${escapeHtml(p.id)}" aria-label="عرض التفاصيل ${escapeHtml(p.name)}">
        <img class="card__img" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy">
        <div class="card__body">
          <div class="card__top">
            <div class="card__name">${escapeHtml(p.name)}</div>
            <div class="badgesRow">
              <span class="badge">${escapeHtml(p.category)}</span>
              <span class="badge ${statusClass(p.status)}">${escapeHtml(statusLabel(p.status))}</span>
            </div>
          </div>

          <div class="card__meta">
            <span>${escapeHtml(p.id)}</span>
            <span class="price">${escapeHtml(p.price)}</span>
          </div>

          <div class="card__cta">
            <button class="smallbtn" type="button" data-open="${escapeHtml(p.id)}">تفاصيل</button>
            ${
              canOrder
                ? `<button class="smallbtn is-primary" type="button" data-order="${escapeHtml(p.id)}">اطلب</button>`
                : `<button class="smallbtn" type="button" disabled title="مباعة">مباعة</button>`
            }
          </div>

          <button class="smallbtn" style="margin-top:8px" type="button" data-fav="${escapeHtml(p.id)}">
            ${favOn ? "❤️ في المفضلة" : "♡ إضافة للمفضلة"}
          </button>
        </div>
      </article>
    `;
  }).join("");

  // تفاصيل
  els.grid.querySelectorAll("[data-open]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openProduct(btn.getAttribute("data-open"), { mode: "details" });
    });
  });

  // اطلب
  els.grid.querySelectorAll("[data-order]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openProduct(btn.getAttribute("data-order"), { mode: "order" });
    });
  });

  // مفضلة
  els.grid.querySelectorAll("[data-fav]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-fav");
      const on = toggleFav(id);
      btn.textContent = on ? " في المفضلة" : "♡ إضافة للمفضلة";
      renderGrid();
    });
  });

  // كلك على الكارت
  els.grid.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => openProduct(card.getAttribute("data-id"), { mode: "details" }));
    card.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        openProduct(card.getAttribute("data-id"), { mode: "details" });
      }
    });
  });
}

function render(){ renderGrid(); }

/* =========================
   9) Modal + History (Back fix)
========================= */
function lockBodyScroll(locked){
  document.body.style.overflow = locked ? "hidden" : "";
}

function isModalOpen(){
  return els.modal && els.modal.classList.contains("is-open");
}

/**
 * ✅ pushState when opening modal
 * so Back button closes modal instead of leaving site
 */
function pushModalState(productId){
  const u = new URL(window.location.href);
  u.searchParams.set("p", productId);
  history.pushState({ modal: true, pid: productId }, "", u.toString());
}

/**
 * when closing from UI (X / backdrop) we go back one step
 * if the current state is modal state
 */
let ignoreNextPop = false;

function openModal(){
  if (!els.modal) return;
  els.modal.classList.add("is-open");
  els.modal.setAttribute("aria-hidden", "false");
  lockBodyScroll(true);
}

function closeModal({ viaHistory = false } = {}){
  if (!els.modal) return;

  els.modal.classList.remove("is-open");
  els.modal.setAttribute("aria-hidden", "true");
  lockBodyScroll(false);

  state.activeProduct = null;
  state.activeImgIndex = 0;

  if (els.formStatus) els.formStatus.textContent = "";
  if (els.form) els.form.reset();

  // إذا الإغلاق مو جاي من back، نرجع خطوة
  if (!viaHistory) {
    // إذا state الحالي هو modal، رجّعي خطوة
    if (history.state && history.state.modal) {
      ignoreNextPop = true;
      history.back();
    } else {
      // تنظيف بارامتر p إذا موجود
      const u = new URL(window.location.href);
      u.searchParams.delete("p");
      history.replaceState(history.state, "", u.toString());
    }
  }
}

/* Popstate: Back/Forward */
window.addEventListener("popstate", () => {
  if (ignoreNextPop) {
    ignoreNextPop = false;
    return;
  }

  // إذا المودال مفتوح واليوزر ضغط back => سكري المودال
  if (isModalOpen()) {
    closeModal({ viaHistory: true });
    return;
  }

  // إذا رجع لرابط بيه p => افتحي القطعة
  const u = new URL(window.location.href);
  const pid = u.searchParams.get("p");
  if (pid) openProduct(pid, { mode: "details", fromHistory: true });
});

/* =========================
   10) Tabs
========================= */
function setTab(mode, p){
  const showOrder = (mode === "order");
  const canOrder = p.status !== "sold";

  if (els.tabDetails) els.tabDetails.classList.toggle("is-active", !showOrder);
  if (els.tabOrder) {
    els.tabOrder.classList.toggle("is-active", showOrder);
    els.tabOrder.style.display = canOrder ? "" : "none";
  }

  if (els.detailsSection){
    els.detailsSection.hidden = showOrder;
    els.detailsSection.style.display = showOrder ? "none" : "";
  }

  if (els.orderSection){
    const shouldShow = showOrder && canOrder;
    els.orderSection.hidden = !shouldShow;
    els.orderSection.style.display = shouldShow ? "" : "none";
  }

  if (!canOrder && showOrder){
    if (els.detailsSection){
      els.detailsSection.hidden = false;
      els.detailsSection.style.display = "";
    }
    if (els.orderSection){
      els.orderSection.hidden = true;
      els.orderSection.style.display = "none";
    }
    if (els.tabDetails) els.tabDetails.classList.add("is-active");
  }

  // ✅ مهم: رجّع سكرول المودال للأعلى حتى ما تضيع الفورم بالموبايل
  if (els.modalContent) els.modalContent.scrollTop = 0;
}

/* =========================
   11) Gallery
========================= */
function setMainImage(p, idx){
  const imgs = (p.images && p.images.length) ? p.images : [p.image].filter(Boolean);
  const safeIdx = Math.max(0, Math.min(idx, imgs.length - 1));
  state.activeImgIndex = safeIdx;

  const src = imgs[safeIdx] || p.image || "";
  if (els.modalMainImg){
    els.modalMainImg.src = src;
    els.modalMainImg.alt = p.name;
  }

  if (els.modalThumbs){
    els.modalThumbs.innerHTML = imgs.map((u, i) => `
      <button type="button" aria-label="صورة ${i + 1}">
        <img src="${escapeHtml(u)}" class="${i === safeIdx ? "is-active" : ""}" alt="${escapeHtml(p.name)}">
      </button>
    `).join("");

    els.modalThumbs.querySelectorAll("button").forEach((b, i) => {
      b.addEventListener("click", () => setMainImage(p, i));
    });
  }
}

/* =========================
   12) Suggested
========================= */
function renderSuggested(p){
  if (!els.suggestedWrap || !els.suggestedGrid) return;

  const similar = PRODUCTS.filter(x => x.id !== p.id && x.category === p.category).slice(0, 4);
  if (similar.length === 0){
    els.suggestedWrap.style.display = "none";
    return;
  }

  els.suggestedWrap.style.display = "";
  els.suggestedGrid.innerHTML = similar.map(s => `
    <div class="suggestedCard" data-sid="${escapeHtml(s.id)}">
      <img src="${escapeHtml(s.image)}" alt="${escapeHtml(s.name)}" loading="lazy" />
      <div class="t">${escapeHtml(s.name)}</div>
      <div class="m">${escapeHtml(s.price)} • ${escapeHtml(statusLabel(s.status))}</div>
    </div>
  `).join("");

  els.suggestedGrid.querySelectorAll("[data-sid]").forEach(card => {
    card.addEventListener("click", () => openProduct(card.getAttribute("data-sid"), { mode: "details" }));
  });
}

/* =========================
   13) Modal content apply
========================= */
function applyStatusToModal(p){
  if (els.modalStatus){
    els.modalStatus.textContent = statusLabel(p.status);
    els.modalStatus.className = `badge status-badge ${statusClass(p.status)}`;
  }

  if (els.orderSubmitBtn){
    const disabled = (p.status === "sold");
    els.orderSubmitBtn.disabled = disabled;
    els.orderSubmitBtn.style.opacity = disabled ? "0.6" : "";
  }

  if (els.formStatus){
    if (p.status === "sold") els.formStatus.textContent = "❌ هذه القطعة مباعة حالياً.";
    else if (p.status === "reserved") els.formStatus.textContent = "⚠️ هذه القطعة محجوزة — تواصل للتأكد من التوفر.";
    else els.formStatus.textContent = "";
  }
}

function openProduct(id, opts = {}){
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  state.activeProduct = p;

  // fill modal data
  if (els.modalTitle) els.modalTitle.textContent = p.name;
  if (els.modalCategory) els.modalCategory.textContent = p.category;
  if (els.modalCode) els.modalCode.textContent = p.id;
  if (els.modalPrice) els.modalPrice.textContent = p.price;
  if (els.modalDesc) els.modalDesc.textContent = p.desc;

  setMainImage(p, 0);

  if (els.favBtn){
    const on = isFav(p.id);
    els.favBtn.textContent = on ? "♥" : "♡";
    els.favBtn.classList.toggle("is-on", on);
  }

  renderSuggested(p);
  applyStatusToModal(p);

  const mode = (opts.mode === "order") ? "order" : "details";
  setTab(mode, p);

  // ✅ history: only push if not from popstate
  if (!opts.fromHistory) pushModalState(p.id);

  openModal();

  // ✅ focus order field (scroll safe)
  if (mode === "order" && p.status !== "sold") {
    setTimeout(() => {
      if (els.custName){
        els.custName.focus({ preventScroll: false });
        els.custName.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 250);
  }
}

/* Tabs click */
if (els.tabDetails) els.tabDetails.addEventListener("click", () => {
  const p = state.activeProduct; if (!p) return;
  setTab("details", p);
});
if (els.tabOrder) els.tabOrder.addEventListener("click", () => {
  const p = state.activeProduct; if (!p) return;
  setTab("order", p);
});

/* Favorite click */
if (els.favBtn){
  els.favBtn.addEventListener("click", () => {
    const p = state.activeProduct; if (!p) return;
    const on = toggleFav(p.id);
    els.favBtn.textContent = on ? "♥" : "♡";
    els.favBtn.classList.toggle("is-on", on);
    renderGrid();
  });
}

/* Close modal by X/backdrop */
if (els.modal){
  els.modal.addEventListener("click", (e) => {
    if (e.target && e.target.getAttribute("data-close") === "true") closeModal();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isModalOpen()) closeModal();
});

/* =========================
   14) Share
========================= */
function shareTextForProduct(p){
  const url = getProductUrl(p.id);
  return `✨ ${p.name}\nالكود: ${p.id}\nالسعر: ${p.price}\nالحالة: ${statusLabel(p.status)}\nالرابط: ${url}`;
}

if (els.shareWAItemBtn){
  els.shareWAItemBtn.addEventListener("click", () => {
    const p = state.activeProduct; if (!p) return;
    window.open(getWhatsappUrl(shareTextForProduct(p)), "_blank");
  });
}

if (els.copyLinkBtn){
  els.copyLinkBtn.addEventListener("click", async () => {
    const p = state.activeProduct; if (!p) return;
    const url = getProductUrl(p.id);
    try {
      await navigator.clipboard.writeText(url);
      if (els.formStatus) els.formStatus.textContent = "تم نسخ رابط القطعة ✅";
    } catch {
      if (els.formStatus) els.formStatus.textContent = "تعذر النسخ تلقائياً. انسخ الرابط يدوياً.";
    }
  });
}

if (els.nativeShareBtn){
  els.nativeShareBtn.addEventListener("click", async () => {
    const p = state.activeProduct; if (!p) return;
    const url = getProductUrl(p.id);

    if (navigator.share) {
      try { await navigator.share({ title: p.name, text: shareTextForProduct(p), url }); } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(url);
        if (els.formStatus) els.formStatus.textContent = "تم نسخ الرابط ✅";
      } catch {
        if (els.formStatus) els.formStatus.textContent = "جهازك لا يدعم المشاركة.";
      }
    }
  });
}

/* =========================
   15) Order submit (EmailJS then WhatsApp)
========================= */
function buildOrderText({ product, customer, pageUrl, imageUrl }) {
  return [
    "🛍️ طلب اقتناء – بيت التحفيات",
    "————————————",
    `👤 الاسم: ${customer.name}`,
    `📞 الهاتف: ${customer.phone}`,
    "",
    "📍 العنوان:",
    `• المحافظة: ${customer.gov}`,
    `• المنطقة: ${customer.area}`,
    `• أقرب نقطة دالة: ${customer.landmark || "-"}`,
    "",
    `📝 ملاحظات: ${customer.note || "-"}`,
    "",
    "📦 تفاصيل القطعة:",
    `• الاسم: ${product.name}`,
    `• التصنيف: ${product.category}`,
    `• الحالة: ${statusLabel(product.status)}`,
    `• الكود: ${product.id}`,
    `• السعر: ${product.price}`,
    "",
    `🖼️ رابط صورة القطعة: ${imageUrl}`,
    `🔗 رابط القطعة: ${pageUrl}`
  ].join("\n");
}

if (els.form){
  els.form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const p = state.activeProduct;
    if (!p) return;

    if (p.status === "sold"){
      if (els.formStatus) els.formStatus.textContent = "❌ هذه القطعة مباعة ولا يمكن طلبها.";
      return;
    }

    const name = (els.custName?.value || "").trim();
    const phone = (els.custPhone?.value || "").trim();
    const gov = (els.custGov?.value || "").trim();
    const area = (els.custArea?.value || "").trim();
    const landmark = (els.custLandmark?.value || "").trim();
    const note = (els.custNote?.value || "").trim();

    if (!name || !phone || !gov || !area){
      if (els.formStatus) els.formStatus.textContent = "رجاءً ادخل معلومات الاسم، الهاتف، المحافظة، والمنطقة.";
      return;
    }

    const productUrl = getProductUrl(p.id);
    const imgAbs = toAbsoluteUrl((p.images && p.images[0]) ? p.images[0] : p.image);

    const orderText = buildOrderText({
      product: p,
      customer: { name, phone, gov, area, landmark, note },
      pageUrl: productUrl,
      imageUrl: imgAbs
    });

    try {
      if (els.formStatus) els.formStatus.textContent = "جاري إرسال الإيميل...";
      await sendOrderEmail({
        product: p,
        customer: { name, phone, gov, area, landmark, note },
        productUrl,
        imageUrl: imgAbs
      });
      if (els.formStatus) els.formStatus.textContent = "تم إرسال الإيميل ✅ جارِ فتح واتساب...";
    } catch (err) {
      console.warn("EmailJS Error:", err);
      if (els.formStatus) els.formStatus.textContent = "تعذر إرسال الإيميل… جارِ فتح واتساب ✅";
    }

    window.location.href = getWhatsappUrl(orderText);
  });
}

if (els.copyBtn){
  els.copyBtn.addEventListener("click", async () => {
    const p = state.activeProduct; if (!p) return;

    const productUrl = getProductUrl(p.id);
    const imgAbs = toAbsoluteUrl((p.images && p.images[0]) ? p.images[0] : p.image);

    const orderText = buildOrderText({
      product: p,
      customer: {
        name: (els.custName?.value || "-").trim() || "-",
        phone: (els.custPhone?.value || "-").trim() || "-",
        gov: (els.custGov?.value || "-").trim() || "-",
        area: (els.custArea?.value || "-").trim() || "-",
        landmark: (els.custLandmark?.value || "-").trim() || "-",
        note: (els.custNote?.value || "").trim()
      },
      pageUrl: productUrl,
      imageUrl: imgAbs
    });

    try {
      await navigator.clipboard.writeText(orderText);
      if (els.formStatus) els.formStatus.textContent = "تم نسخ تفاصيل الطلب ✅";
    } catch {
      if (els.formStatus) els.formStatus.textContent = "تعذر النسخ تلقائياً. انسخ النص يدوياً.";
    }
  });
}

/* =========================
   16) Search + Sort + View
========================= */
if (els.search){
  els.search.addEventListener("input", () => {
    state.q = els.search.value;
    render();
  });
}
if (els.sort){
  els.sort.addEventListener("change", () => {
    state.sort = els.sort.value;
    render();
  });
}
if (els.view){
  els.view.addEventListener("change", () => {
    state.view = els.view.value;
    render();
  });
}

/* =========================
   17) Theme + Quick WhatsApp
========================= */
function setTheme(theme){
  if (theme === "light"){
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("hoa_theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("hoa_theme", "dark");
  }
}
if (els.themeBtn){
  els.themeBtn.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    setTheme(isLight ? "dark" : "light");
  });
}
(function initTheme(){
  const saved = localStorage.getItem("hoa_theme");
  if (saved === "light") setTheme("light");
})();

function openQuickWhatsApp(){
  const msg = "مرحبا بيت التحفيات، أود الاستفسار عن القطع المتاحة.";
  window.open(getWhatsappUrl(msg), "_blank");
}
if (els.quickWA) els.quickWA.addEventListener("click", (e) => { e.preventDefault(); openQuickWhatsApp(); });
if (els.footerWA) els.footerWA.addEventListener("click", (e) => { e.preventDefault(); openQuickWhatsApp(); });

/* =========================
   18) Mobile fixed button
========================= */
if (els.mobileOrderBtn){
  els.mobileOrderBtn.addEventListener("click", () => {
    const p = state.activeProduct;
    if (p){
      openProduct(p.id, { mode: p.status === "sold" ? "details" : "order" });
      return;
    }
    if (els.grid) els.grid.scrollIntoView({ behavior: "smooth", block: "start" });
    alert("اختار القطعة أولا ");
  });
}

/* =========================
   19) Open from URL ?p=
========================= */
function openFromLink(){
  const u = new URL(window.location.href);
  const pid = u.searchParams.get("p");
  if (pid){
    // نخلي الحالة من البداية modal state حتى يصير back منطقي
    history.replaceState({ modal: true, pid }, "", u.toString());
    openProduct(pid, { mode: "details", fromHistory: true });
  }
}

/* =========================
   20) Init
========================= */
document.addEventListener("DOMContentLoaded", () => {
  initEmailJS();
  if (els.year) els.year.textContent = String(new Date().getFullYear());
  renderChips();
  render();
  setTimeout(openFromLink, 120);
});
