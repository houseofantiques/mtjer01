"use strict";

/* =========================
   1) إعدادات واتساب + EmailJS
========================= */
const WHATSAPP_NUMBER_INTL = "9647737079079"; // رقم واتساب الطلبات

// EmailJS IDs (هذي عندك جاهزة)
const EMAILJS_PUBLIC_KEY = "tivoinl7MHIKAOORE";
const EMAILJS_SERVICE_ID = "service_bm4mbb9";
const EMAILJS_TEMPLATE_ID = "template_yksn5vh";

/* =========================
   2) التصنيفات + المنتجات
========================= */
const CATEGORIES = ["الكل", "سجاد", "خشب", "نحاس", "فضة", "كريستال", "أعمال فنية", "لوحات"];

// status: available | reserved | sold
const PRODUCTS = [
  {
    id: "HOA-FINE-001",
    name: "عمل فني حجري (كولة) — 50 سم",
    category: "أعمال فنية",
    price: "1,450,000 د.ع",
    priceNumber: 1450000,
    desc: "منحوتة حجرية (كولة) بارتفاع 50 سم، عمرها أكثر من 75 سنة. لفنان عراقي غير معروف. قطعة نادرة للعرض في المكتبات أو الواجهات. (الأهمية: تراث محلي + قدم زمني عالي).",
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
    desc: "كرسي خشبي ينطوي (Foldable) بارتفاع 80 سم. عملي ومناسب للديكور التراثي أو الاستخدام الخفيف. (الأهمية: تصميم عملي + حالة جيدة).",
    image: "images/hoa-02-chair.jpg",
    featured: false,
    createdAt: "2026-01-03",
    status: "available"
  },
  {
    id: "HOA-WOOD-003",
    name: "سيت فرج + مرايا أنتيكة نسائية (3 قطع)",
    category: "خشب",
    price: "1,250,000 د.ع",
    priceNumber: 1250000,
    desc: "سيت نسائي أنتيك (3 قطع): فرج + مرايا + قطعة مرافقة. خشب بتفاصيل كلاسيكية. مناسب لغرفة نوم فخمة أو ركن تصوير. (الأهمية: طقم كامل + قيمة ديكور عالية).",
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
    desc: "باب خشبي تاريخي مع مدكة/مطرقة نحاس. العمر قرابة 120 سنة. الأبعاد: ارتفاع 2 متر، عرض 120 سم. (الأهمية: قطعة معمارية نادرة + قيمة تراثية عالية).",
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
    desc: "3 فازات فخارية برسوم يدوية أصلية، عمرها تقريباً 60 سنة. مناسبة لطاولة استقبال أو رف عرض. (الأهمية: رسم يدوي + طقم 3 قطع).",
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
    desc: "مجسّم/عمل أفريقي مصنوع من المعجون بدقة عالية، ارتفاع 30 سم، عمره أكثر من 25 سنة. (الأهمية: طابع عالمي + تفاصيل تنفيذ دقيقة).",
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
    desc: "شيشة نحاس قديمة جداً (عمر تقريبي 120 سنة). قطعة مميزة للعرض التراثي أكثر من الاستخدام. (الأهمية: قدم عالي + مادة نحاس أصلية).",
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
    desc: "قطعة كريستال نادرة برسمة ملك عثماني، تعود للعهد العثماني بعمر تقريبي 150 سنة. (الأهمية: قيمة تاريخية + ندرة عالية).",
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
    desc: "مدكة/مدقات نحاس عدد 2، وزن القطعة 900 غرام تقريباً، عمرها قرابة 70 سنة. (الأهمية: وزن ثقيل + خامة نحاس ممتازة).",
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
    desc: "طقم كريستال عدد 2، طول القطعة 30 سم، عمر تقريبي 40 سنة. مناسب للديكور أو طاولة الضيافة. (الأهمية: طقم مزدوج + حالة عرض ممتازة).",
    image: "images/hoa-10-crystal-set.jpg",
    featured: false,
    createdAt: "2026-01-03",
    status: "available"
  }
];

/* =========================
   3) ربط عناصر الصفحة
========================= */
const els = {
  grid: document.getElementById("productsGrid"),
  chips: document.getElementById("categoryChips"),
  search: document.getElementById("searchInput"),
  sort: document.getElementById("sortSelect"),
  resultsHint: document.getElementById("resultsHint"),
  countItems: document.getElementById("countItems"),

  modal: document.getElementById("productModal"),
  modalImg: document.getElementById("modalImg"),
  modalTitle: document.getElementById("modalTitle"),
  modalCategory: document.getElementById("modalCategory"),
  modalStatus: document.getElementById("modalStatus"),
  modalCode: document.getElementById("modalCode"),
  modalPrice: document.getElementById("modalPrice"),
  modalDesc: document.getElementById("modalDesc"),

  form: document.getElementById("orderForm"),
  custName: document.getElementById("custName"),
  custPhone: document.getElementById("custPhone"),
  custGov: document.getElementById("custGov"),
  custArea: document.getElementById("custArea"),
  custLandmark: document.getElementById("custLandmark"),
  custNote: document.getElementById("custNote"),
  formStatus: document.getElementById("formStatus"),
  copyBtn: document.getElementById("copyDetailsBtn"),
  orderSubmitBtn: document.getElementById("orderSubmitBtn"), // لازم يكون موجود بالـHTML

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
  activeProduct: null
};

/* =========================
   4) أدوات مساعدة
========================= */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[m]));
}

function parseDate(d) { return new Date(d).getTime(); }

function statusLabel(status) {
  if (status === "reserved") return "محجوزة";
  if (status === "sold") return "مباعة";
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

/* رابط للقطعة — يدعم ?p= و #item= */
function getProductUrl(productId) {
  const u = new URL(window.location.href);
  u.searchParams.set("p", productId);
  u.hash = ""; // نخلي الرابط نظيف
  return u.href;
}

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

/* =========================
   5) EmailJS
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
   6) التصنيفات + فلترة + ترتيب
========================= */
function renderChips() {
  if (!els.chips) return;
  els.chips.innerHTML = "";

  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (state.category === cat ? " is-active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      state.category = cat;
      render();
    });
    els.chips.appendChild(btn);
  });
}

function getFilteredProducts() {
  const q = state.q.trim().toLowerCase();
  return PRODUCTS.filter((p) => {
    const catOK = state.category === "الكل" ? true : p.category === state.category;
    const qOK = !q ? true :
      p.name.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return catOK && qOK;
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
   7) عرض الكروت
========================= */
function renderGrid() {
  if (!els.grid) return;

  const filtered = getFilteredProducts();
  const sorted = sortProducts(filtered);

  if (els.countItems) els.countItems.textContent = String(PRODUCTS.length);
  if (els.resultsHint) {
    els.resultsHint.textContent = `${sorted.length} نتيجة` + (state.category !== "الكل" ? ` ضمن "${state.category}"` : "");
  }

  if (sorted.length === 0) {
    els.grid.innerHTML = `
      <div class="card" style="grid-column: 1 / -1; min-height:auto; padding:16px;">
        <div class="card__body">
          <div class="card__name">ماكو نتائج</div>
          <div class="card__meta">جرّبي تبدّلين التصنيف أو تقللين كلمات البحث.</div>
        </div>
      </div>
    `;
    return;
  }

  els.grid.innerHTML = sorted.map((p) => `
    <article class="card" tabindex="0" role="button" data-id="${escapeHtml(p.id)}" aria-label="عرض تفاصيل ${escapeHtml(p.name)}">
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
          <button class="smallbtn is-primary" type="button" data-order="${escapeHtml(p.id)}" ${p.status === "sold" ? "disabled" : ""}>
            اطلب
          </button>
        </div>
      </div>
    </article>
  `).join("");

  els.grid.querySelectorAll("[data-open]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openProduct(btn.getAttribute("data-open"));
    });
  });

  els.grid.querySelectorAll("[data-order]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openProduct(btn.getAttribute("data-order"), { focusOrder: true });
    });
  });

  els.grid.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => openProduct(card.getAttribute("data-id")));
    card.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        openProduct(card.getAttribute("data-id"));
      }
    });
  });
}

function render() { renderGrid(); }

/* =========================
   8) المودال + حالة القطعة
========================= */
function openModal() {
  if (!els.modal) return;
  els.modal.classList.add("is-open");
  els.modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!els.modal) return;
  els.modal.classList.remove("is-open");
  els.modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  state.activeProduct = null;
  if (els.formStatus) els.formStatus.textContent = "";
  if (els.form) els.form.reset();
}

function applyStatusToModal(p) {
  if (els.modalStatus) {
    els.modalStatus.textContent = statusLabel(p.status);
    els.modalStatus.className = `badge status-badge ${statusClass(p.status)}`;
  }

  // زر ارسال الطلب (داخل الفورم)
  if (els.orderSubmitBtn) {
    const disabled = (p.status === "sold");
    els.orderSubmitBtn.disabled = disabled;
    els.orderSubmitBtn.style.opacity = disabled ? "0.6" : "";
  }

  if (els.formStatus) {
    if (p.status === "sold") els.formStatus.textContent = "❌ هذه القطعة مباعة حالياً.";
    else if (p.status === "reserved") els.formStatus.textContent = "⚠️ هذه القطعة محجوزة — تواصل للتأكد من التوفر.";
    else els.formStatus.textContent = "";
  }
}

function openProduct(id, opts = {}) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  state.activeProduct = p;

  if (els.modalImg) { els.modalImg.src = p.image; els.modalImg.alt = p.name; }
  if (els.modalTitle) els.modalTitle.textContent = p.name;
  if (els.modalCategory) els.modalCategory.textContent = p.category;
  if (els.modalCode) els.modalCode.textContent = p.id;
  if (els.modalPrice) els.modalPrice.textContent = p.price;
  if (els.modalDesc) els.modalDesc.textContent = p.desc;

  applyStatusToModal(p);
  openModal();

  setTimeout(() => {
    if (opts.focusOrder && els.custName) {
      els.custName.scrollIntoView({ behavior: "smooth", block: "center" });
      els.custName.focus();
    }
  }, 200);
}

// إغلاق مودال
if (els.modal) {
  els.modal.addEventListener("click", (e) => {
    if (e.target && e.target.getAttribute("data-close") === "true") closeModal();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && els.modal && els.modal.classList.contains("is-open")) closeModal();
});

/* =========================
   9) مشاركة القطعة
========================= */
function shareTextForProduct(p) {
  const url = getProductUrl(p.id);
  return `✨ ${p.name}\nالكود: ${p.id}\nالسعر: ${p.price}\nالحالة: ${statusLabel(p.status)}\nالرابط: ${url}`;
}

if (els.shareWAItemBtn) {
  els.shareWAItemBtn.addEventListener("click", () => {
    const p = state.activeProduct;
    if (!p) return;
    window.open(getWhatsappUrl(shareTextForProduct(p)), "_blank");
  });
}

if (els.copyLinkBtn) {
  els.copyLinkBtn.addEventListener("click", async () => {
    const p = state.activeProduct;
    if (!p) return;
    const url = getProductUrl(p.id);
    try {
      await navigator.clipboard.writeText(url);
      if (els.formStatus) els.formStatus.textContent = "تم نسخ رابط القطعة ✅";
    } catch {
      if (els.formStatus) els.formStatus.textContent = "تعذر النسخ تلقائياً. انسخي الرابط يدوياً.";
    }
  });
}

if (els.nativeShareBtn) {
  els.nativeShareBtn.addEventListener("click", async () => {
    const p = state.activeProduct;
    if (!p) return;
    const url = getProductUrl(p.id);

    if (navigator.share) {
      try {
        await navigator.share({ title: p.name, text: shareTextForProduct(p), url });
      } catch { /* تجاهل */ }
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
   10) إرسال الطلب (واتساب + ايميل)
========================= */
if (els.form) {
  els.form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const p = state.activeProduct;
    if (!p) return;

    if (p.status === "sold") {
      if (els.formStatus) els.formStatus.textContent = "❌ هذه القطعة مباعة ولا يمكن طلبها.";
      return;
    }

    const name = (els.custName?.value || "").trim();
    const phone = (els.custPhone?.value || "").trim();
    const gov = (els.custGov?.value || "").trim();
    const area = (els.custArea?.value || "").trim();
    const landmark = (els.custLandmark?.value || "").trim();
    const note = (els.custNote?.value || "").trim();

    if (!name || !phone || !gov || !area) {
      if (els.formStatus) els.formStatus.textContent = "رجاءً اكملي الاسم، الهاتف، المحافظة، والمنطقة.";
      return;
    }

    const productUrl = getProductUrl(p.id);
    const imageUrl = toAbsoluteUrl(p.image);

    const orderText = buildOrderText({
      product: p,
      customer: { name, phone, gov, area, landmark, note },
      pageUrl: productUrl,
      imageUrl
    });

    // 1) افتح واتساب فوراً
    window.open(getWhatsappUrl(orderText), "_blank");

    // 2) ابعث ايميل نسخة داخلية
    try {
      await sendOrderEmail({
        product: p,
        customer: { name, phone, gov, area, landmark },
        productUrl,
        imageUrl
      });

      if (els.formStatus) els.formStatus.textContent = "تم إرسال نسخة للإيميل ✅ وتم فتح واتساب.";
    } catch (err) {
      console.warn("EmailJS Error:", err);
      if (els.formStatus) els.formStatus.textContent = "تم فتح واتساب ✅ (تعذر إرسال الإيميل حالياً).";
    }
  });
}

// نسخ تفاصيل الطلب
if (els.copyBtn) {
  els.copyBtn.addEventListener("click", async () => {
    const p = state.activeProduct;
    if (!p) return;

    const productUrl = getProductUrl(p.id);
    const imageUrl = toAbsoluteUrl(p.image);

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
      imageUrl
    });

    try {
      await navigator.clipboard.writeText(orderText);
      if (els.formStatus) els.formStatus.textContent = "تم نسخ تفاصيل الطلب ✅";
    } catch {
      if (els.formStatus) els.formStatus.textContent = "تعذر النسخ تلقائياً. انسخي النص يدوياً.";
    }
  });
}

/* =========================
   11) بحث + ترتيب
========================= */
if (els.search) {
  els.search.addEventListener("input", () => {
    state.q = els.search.value;
    render();
  });
}
if (els.sort) {
  els.sort.addEventListener("change", () => {
    state.sort = els.sort.value;
    render();
  });
}

/* =========================
   12) ثيم + واتساب سريع
========================= */
function setTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("hoa_theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("hoa_theme", "dark");
  }
}

if (els.themeBtn) {
  els.themeBtn.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    setTheme(isLight ? "dark" : "light");
  });
}

(function initTheme() {
  const saved = localStorage.getItem("hoa_theme");
  if (saved === "light") setTheme("light");
})();

function openQuickWhatsApp() {
  const msg = "مرحبا بيت التحفيات، أود الاستفسار عن القطع المتاحة.";
  window.open(getWhatsappUrl(msg), "_blank");
}

if (els.quickWA) els.quickWA.addEventListener("click", (e) => { e.preventDefault(); openQuickWhatsApp(); });
if (els.footerWA) els.footerWA.addEventListener("click", (e) => { e.preventDefault(); openQuickWhatsApp(); });

/* =========================
   13) زر ثابت للموبايل
========================= */
if (els.mobileOrderBtn) {
  els.mobileOrderBtn.addEventListener("click", () => {
    if (state.activeProduct) {
      openProduct(state.activeProduct.id, { focusOrder: true });
      return;
    }
    if (els.grid) els.grid.scrollIntoView({ behavior: "smooth", block: "start" });
    alert("اختاري قطعة أولاً ثم اضغطي (اطلب الآن) ✨");
  });
}

/* =========================
   14) فتح قطعة من الرابط
   يدعم ?p=ID أو #item=ID
========================= */
function openFromLink() {
  // ?p=
  const u = new URL(window.location.href);
  const pid = u.searchParams.get("p");
  if (pid) { openProduct(pid); return; }

  // #item=
  const hash = (window.location.hash || "").replace("#", "");
  if (hash) {
    const params = new URLSearchParams(hash);
    const item = params.get("item");
    if (item) openProduct(item);
  }
}

window.addEventListener("hashchange", openFromLink);

/* =========================
   15) تهيئة
========================= */
document.addEventListener("DOMContentLoaded", () => {
  initEmailJS();

  if (els.year) els.year.textContent = String(new Date().getFullYear());

  renderChips();
  render();

  // فتح القطعة من الرابط بعد الرندر
  setTimeout(openFromLink, 120);
});
