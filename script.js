"use strict";

/* =========================
   0) Cloudinary helper
========================= */
const CLOUD_NAME = "dyqdfbaln";

function cld(id, width = 1200) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${id}`;
}

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
const CATEGORIES = ["الكل", "سجاد", "خشب", "نحاس", "فضة", "كريستال", "أعمال فنية", "فازات", "لوحات"];

/**
 * ✅ مزاد:
 * - أضفنا الحقل auction
 * - اخترنا 10 قطع كمثال (auction:true)
 * - بدون تغيير باقي البيانات
 */
const PRODUCTS = [
  {
    id: "HOA-FINE-001",
    name: "عمل فني حجري (كولة) — 50 سم",
    category: "أعمال فنية",
    price: "1,450,000 د.ع",
    priceNumber: 1450000,
    desc: "منحوتة حجرية (كولة) بارتفاع 50 سم، عمرها أكثر من 75 سنة. لفنان عراقي غير معروف. قطعة نادرة للعرض في المكتبات أو الواجهات.",
    images: [cld("hoa-01-stone_suqyho")],
    image: cld("hoa-01-stone_suqyho"),
    featured: true,
    createdAt: "2026-01-03",
    status: "available",
    auction: true
  },

  {
    id: "HOA-WOOD-002",
    name: "كرسي خشب قابل للطي — ارتفاع 80 سم",
    category: "خشب",
    price: "280,000 د.ع",
    priceNumber: 280000,
    desc: "كرسي خشبي ينطوي (Foldable) بارتفاع 80 سم. عملي ومناسب للديكور التراثي أو الاستخدام الخفيف.",
    images: [cld("hoa-02-chair_iuorog")],
    image: cld("hoa-02-chair_iuorog"),
    featured: false,
    createdAt: "2026-01-03",
    status: "available",
    auction: false
  },

  {
    id: "HOA-slv-003",
    name: "سيت فرج + مرايا أنتيكة نسائية (3 قطع)",
    category: "فضة",
    price: "1,250,000 د.ع",
    priceNumber: 1250000,
    desc: "سيت نسائي أنتيك (3 قطع): فرج + مرايا + قطعة مرافقة. مناسب لغرفة نوم فخمة أو ركن تصوير.",
    images: [cld("hoa-03-vanity-set_udalhc")],
    image: cld("hoa-03-vanity-set_udalhc"),
    featured: true,
    createdAt: "2026-01-03",
    status: "reserved",
    auction: true
  },

  {
    id: "HOA-WOOD-004",
    name: "باب خشبي مع مدكة نحاس — عمر 120 سنة",
    category: "خشب",
    price: "3,800,000 د.ع",
    priceNumber: 3800000,
    desc: "باب خشبي تاريخي مع مدكة/مطرقة نحاس. العمر قرابة 120 سنة. الأبعاد: ارتفاع 2 متر، عرض 120 سم.",
    images: [cld("hoa-04-door_qyvgut")],
    image: cld("hoa-04-door_qyvgut"),
    featured: true,
    createdAt: "2026-01-03",
    status: "available",
    auction: true
  },

  {
    id: "HOA-FINE-005",
    name: "سيت فازات فخارية مرسومة يدوياً (3 قطع) — عمر 60 سنة",
    category: "أعمال فنية",
    price: "620,000 د.ع",
    priceNumber: 620000,
    desc: "3 فازات فخارية برسوم يدوية أصلية، عمرها تقريباً 60 سنة. مناسبة لطاولة استقبال أو رف عرض.",
    images: [cld("hoa-05-pottery-set_nsyybt")],
    image: cld("hoa-05-pottery-set_nsyybt"),
    featured: false,
    createdAt: "2026-01-03",
    status: "available",
    auction: false
  },

  {
    id: "HOA-FINE-006",
    name: "عمل أفريقي من المعجون — ارتفاع 30 سم",
    category: "أعمال فنية",
    price: "390,000 د.ع",
    priceNumber: 390000,
    desc: "مجسّم/عمل أفريقي مصنوع من المعجون بدقة عالية، ارتفاع 30 سم، عمره أكثر من 25 سنة.",
    images: [cld("hoa-06-african-art_yalmqs")],
    image: cld("hoa-06-african-art_yalmqs"),
    featured: false,
    createdAt: "2026-01-03",
    status: "available",
    auction: false
  },

  {
    id: "HOA-COP-007",
    name: "شيشة نحاس تراثية – عمر 120 سنة",
    category: "نحاس",
    price: "1,900,000 د.ع",
    priceNumber: 1900000,
    desc: "شيشة نحاس قديمة جداً (عمر تقريبي 120 سنة)، قطعة مميزة للعرض التراثي أكثر من الاستخدام.",
    images: [cld("hoa-07-hookah_qilfmy")],
    image: cld("hoa-07-hookah_qilfmy"),
    featured: true,
    createdAt: "2026-01-03",
    status: "sold",
    auction: false
  },

  {
    id: "HOA-CRY-008",
    name: "قطعة كريستال مرسوم عليها ملك عثماني — عمر 150 سنة",
    category: "كريستال",
    price: "2,750,000 د.ع",
    priceNumber: 2750000,
    desc: "قطعة كريستال نادرة برسمة ملك عثماني، تعود للعهد العثماني بعمر تقريبي 150 سنة.",
    images: [cld("hoa-08-ottoman-crystal_cb6h1c")],
    image: cld("hoa-08-ottoman-crystal_cb6h1c"),
    featured: true,
    createdAt: "2026-01-03",
    status: "available",
    auction: true
  },

  {
    id: "HOA-COP-009",
    name: "مدكة نحاس ثقيلة (قطعتين) — وزن 900 غرام",
    category: "نحاس",
    price: "520,000 د.ع",
    priceNumber: 520000,
    desc: "مدكة/مدقات نحاس عدد 2، وزن القطعة 900 غرام تقريباً، عمرها قرابة 70 سنة.",
    images: [cld("hoa-09-brass-knockers_ysriwj")],
    image: cld("hoa-09-brass-knockers_ysriwj"),
    featured: false,
    createdAt: "2026-01-03",
    status: "available",
    auction: false
  },

  {
    id: "HOA-CRY-010",
    name: "سيت كريستال (قطعتين) — طول 30 سم",
    category: "كريستال",
    price: "480,000 د.ع",
    priceNumber: 480000,
    desc: "طقم كريستال عدد 2، طول القطعة 30 سم، عمر تقريبي 40 سنة. مناسب للديكور أو طاولة الضيافة.",
    images: [cld("hoa-10-crystal-set_axjhxm")],
    image: cld("hoa-10-crystal-set_axjhxm"),
    featured: false,
    createdAt: "2026-01-03",
    status: "available",
    auction: false
  },

  {
    id: "HOA-ART-011",
    name: "بورتريه تعبيري — علي نعمة (2014)",
    category: "لوحات",
    price: "2,100,000 د.ع",
    priceNumber: 2100000,
    desc: "لوحة فنية أصلية من أعمال الفنان العراقي علي نعمة، منفذة عام 2014... الأبعاد: 40 × 120 سم. الحالة: ممتازة.",
    images: [cld("hoa-art-011_ueojpb")],
    image: cld("hoa-art-011_ueojpb"),
    featured: true,
    createdAt: "2014-01-01",
    status: "available",
    auction: false
  },

  {
    id: "HOA-slv-012",
    name: "سِيت فضة تراثي (3 قطع) — نقش يدوي",
    category: "فضة",
    price: "1,650,000 د.ع",
    priceNumber: 1650000,
    desc: "سِيت فضة تراثي مكوّن من ثلاث قطع أصلية، يعود عمرها لأكثر من 60 عامًا...",
    images: [cld("hoa-slv-012_xgwe2n")],
    image: cld("hoa-slv-012_xgwe2n"),
    featured: true,
    createdAt: "1960-01-01",
    status: "available",
    auction: false
  },

  {
    id: "HOA-ART-013",
    name: "تكوين إنساني — جواد سليم",
    category: "أعمال فنية",
    price: "11,500,000 د.ع",
    priceNumber: 7500000,
    desc: "عمل نحتي تجريدي منفذ من النحاس، منسوب إلى الفنان العراقي الرائد جواد سليم...",
    images: [cld("hoa-art-013_tb2uby")],
    image: cld("hoa-art-013_tb2uby"),
    featured: true,
    createdAt: "1985-01-01",
    status: "available",
    auction: true
  },

  {
    id: "HOA-VAS-014",
    name: "فازة فخار منقوشة يدويًا — تراثية",
    category: "فازات",
    price: "720,000 د.ع",
    priceNumber: 720000,
    desc: "فازة فخارية تراثية مصنوعة يدويًا... الطول: 60 سم. الحالة: جيدة جدًا.",
    images: [cld("hoa-vas-014_gus7bf")],
    image: cld("hoa-vas-014_gus7bf"),
    featured: false,
    createdAt: "1975-01-01",
    status: "available",
    auction: false
  },

  {
    id: "HOA-TRL-015",
    name: "مكِنة خياطة “الفراشة” — خمسينات القرن الماضي",
    category: "أدوات تراثية",
    price: "1,450,000 د.ع",
    priceNumber: 1450000,
    desc: "مكِنة خياطة تراثية معروفة باسم “الفراشة”... الحالة: جيدة جدًا.",
    images: [cld("hoa-trl-015_jdsh0y")],
    image: cld("hoa-trl-015_jdsh0y"),
    featured: true,
    createdAt: "1955-01-01",
    status: "available",
    auction: false
  },

  {
    id: "HOA-ART-016",
    name: "من التراث الريفي",
    category: "لوحات",
    price: "1,450,000 د.ع",
    priceNumber: 1450000,
    desc: "لوحة فنية تجسّد مشهد البايطار في بيئة ريفية... الحالة: جيدة جدًا.",
    images: [cld("hoa-art-016_eoes2k")],
    image: cld("hoa-art-016_eoes2k"),
    featured: false,
    createdAt: "2005-01-01",
    status: "available",
    auction: false
  },

  {
    id: "HOA-ART-017",
    name: "لوحة أوروبية مؤطرة مع شمعدانات برونزية فكتورية",
    category: "لوحات",
    price: "4,500,000 د.ع",
    priceNumber: 4500000,
    desc: "لوحة أوروبية قديمة تجسّد مشهدًا بحريًا تاريخيًا... العمر: أكثر من 80 سنة. الحالة: جيدة جدًا نسبةً لعمر القطعة.",
    images: [
      cld("hoa-art-017_gvnbmj"),
      cld("hoa-art-017-2_jl8go6"),
      cld("hoa-art-017-3_q61ony"),
      cld("hoa-art-017-1_bcuugb")
    ],
    image: cld("hoa-art-017_gvnbmj"),
    featured: true,
    createdAt: "1940-01-01",
    status: "available",
    auction: false
  },

  {
    id: "HOA-ART-018",
    name: "لوحة زينة على كانفاس",
    category: "لوحات",
    price: "750,000 د.ع",
    priceNumber: 750000,
    desc: "لوحة أنتيكة قديمة منفذة على قماش كانفاس، تعود لأكثر من 60 سنة...",
    images: [
      cld("hoa-art-018_pnfldi"),
      cld("hoa-art-018-2_vhb3wt"),
      cld("hoa-art-018-1_q8ntn4")
    ],
    image: cld("hoa-art-018_pnfldi"),
    featured: false,
    createdAt: "2024-01-01",
    status: "available",
    auction: false
  },

  {
    id: "HOA-SLV-019",
    name: "فازة فضة منقوشة يدويًا",
    category: "فازات",
    price: "2,200,000 د.ع",
    priceNumber: 2200000,
    desc: "فازة فضة أنتيكة منقوشة بنقوش يدوية دقيقة، يتجاوز عمرها 100 سنة...",
    images: [cld("hoa-slv-019_edqkvu")],
    image: cld("hoa-slv-019_edqkvu"),
    featured: true,
    createdAt: "1920-01-01",
    status: "available",
    auction: false
  },

  {
    id: "HOA-BRZ-022",
    name: "سيت تقديم برونز مزخرف يدويًا",
    category: "برونز",
    price: "1,500,000 د.ع",
    priceNumber: 1500000,
    desc: "سيت تقديم برونز أنتيكة منفذ يدويًا، يتجاوز عمره 70 سنة...",
    images: [cld("hoa-brz-022_pyju1k")],
    image: cld("hoa-brz-022_pyju1k"),
    featured: true,
    createdAt: "1950-01-01",
    status: "available",
    auction: false
  },

  {
    id: "HOA-WOOD-020",
    name: "قطعة خشبية عراقية جدارية",
    category: "خشب",
    price: "1,900,000 د.ع",
    priceNumber: 1900000,
    desc: "عمل خشبي عراقي أنتيكة منفذ يدويًا... الارتفاع: حوالي 150 سم. الحالة: جيدة جدًا نسبةً لعمر القطعة.",
    images: [cld("hoa-wod-024-1_jksqwn")],
    image: cld("hoa-wod-024-1_jksqwn"),
    featured: true,
    createdAt: "1940-01-01",
    status: "available",
    auction: false
  },

  {
    id: "HOA-SAM-021",
    name: "سماور روسي أنتيكة",
    category: "سماور",
    price: "2,600,000 د.ع",
    priceNumber: 2600000,
    desc: "سماور روسي أنتيكة مصنوع من المعدن المصقول... الحالة: جيدة جدًا نسبةً لعمرها.",
    images: [
      cld("hoa-sam-021_jqy8fq"),
      cld("hoa-sam-021-1_sutm3d")
    ],
    image: cld("hoa-sam-021_jqy8fq"),
    featured: true,
    createdAt: "1930-01-01",
    status: "available",
    auction: false
  },

  {
    id: "HOA-SLV-024",
    name: "صندوق نحاس أنتيكة مزخرف",
    category: "صناديق",
    price: "1,400,000 د.ع",
    priceNumber: 1400000,
    desc: "صندوق نحاس أنتيكة مزخرف بنقوش معدنية تقليدية... الحالة: جيدة جدًا نسبةً لعمر القطعة.",
    images: [
      cld("hoa-slv-024_e2tji9"),
      cld("hoa-slv-024_e2tji9")
    ],
    image: cld("hoa-slv-024_e2tji9"),
    featured: false,
    createdAt: "1940-01-01",
    status: "available",
    auction: false
  },

  {
    id: "HOA-CRY-023",
    name: "مصباح كريستال أنتيكة متعدد الأضواء",
    category: "كريستال",
    price: "3,200,000 د.ع",
    priceNumber: 3200000,
    desc: "مصباح كريستال أنتيكة مزوّد بعدة أضواء كهربائية... الحالة: جيدة جدًا نسبةً لعمر القطعة.",
    images: [
      cld("hoa-cry-023_cj8fcl"),
      cld("hoa-cry-023_cj8fcl")
    ],
    image: cld("hoa-cry-023_cj8fcl"),
    featured: true,
    createdAt: "1940-01-01",
    status: "available",
    auction: false
  },

  {
    id: "HOA-SLV-025",
    name: "حمالة ورود فضة — سيت من 3 قطع",
    category: "فازات",
    price: "2,000,000",
    priceNumber: 0,
    desc: "سيت أنيق من ثلاث حمالات ورود مصنوعة من الفضة... قطعة مثالية للديكور الكلاسيكي أو الطاولات الجانبية.",
    images: [cld("hoa-slv-24_srmswp")],
    image: cld("hoa-slv-24_srmswp"),
    featured: false,
    createdAt: "1985-01-01",
    status: "available",
    auction: false
  },
  {
  id: "HOA-SLV-031",
  name: "فازا فضة بنقوش يدوية تاريخية",
  category: "فازات",
  price: "1,500,000 د.ع",
  priceNumber: 0,
  desc: "فازا مصنوعة من الفضة، مزخرفة بنقوش يدوية دقيقة تحاكي مشاهد تاريخية وشخصيات محفورة بعناية عالية. تتميز بتفاصيل بارزة وأسلوب كلاسيكي يعكس الحرفية التقليدية، ما يجعلها قطعة فنية نادرة تصلح للعرض المتحفي أو كقطعة ديكور فاخرة ذات قيمة تراثية.",
  images: [cld("hoa-slv-031_bbocnr")],
  image: cld("hoa-slv-031_bbocnr"),
  featured: true,
  createdAt: "1970-01-01",
  status: "available",
  auction: false
},
{
  
  id: "HOA-TRL-037",
  name: "مدخل كونسول خشبي- مع كراسي 2",
  category: "أثاث تراثي",
  price: "1,500,000 د.ع",
  priceNumber: 1500000,
  desc: "جلسة تراثية فاخرة تتكوّن من طاولة خشبية منحوتة يدويًا وكرسيين بتفاصيل زخرفية دقيقة، تتكامل مع سجادة جدارية مزخرفة بنقوش مستوحاة من التراث الشرقي. تعكس القطعة روح الفخامة والحرفية التقليدية، وتُعد مثالية للعرض المتحفي أو لإضفاء طابع تاريخي راقٍ على المساحات الداخلية.",
  images: [cld("hoa-trl-037_lqn2es")],
  image: cld("hoa-trl-037_lqn2es"),
  featured: true,
  createdAt: "1960-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-SAM-026",
  name: "سماور نحاسي تراثي بمقبضين وصنبور",
  category: "سماور",
  price: "1,800,000 د.ع",
  priceNumber: 1800000,
  desc: "سماور تراثي مصنوع من النحاس، يتميّز بتصميم كلاسيكي بمقبضين جانبيين وصنبور أمامي، مع قاعدة ثابتة وتفاصيل صناعية تعكس الطابع التقليدي لقطع الضيافة القديمة. قطعة أصيلة تحمل أثر الزمن، مناسبة للعرض المتحفي أو كعنصر ديكور تراثي فاخر.",
  images: [cld("hoa-sam-026_bdndxi")],
  image: cld("hoa-sam-026_bdndxi"),
  featured: true,
  createdAt: "1950-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-030",
  name: "وعاء نحاسي بنقوش يدوية تراثية",
  category: "نحاس",
  price: "1,200,000 د.ع",
  priceNumber: 1200000,
  desc: "وعاء نحاسي تراثي مزخرف بنقوش يدوية دقيقة، يعود تاريخه لأكثر من 80 عامًا. يتميّز بتفاصيل نباتية محفورة بعناية عالية ومقبضين جانبيين، ما يعكس الحرفية التقليدية في صناعة النحاس. قطعة أصيلة تحمل طابعًا تاريخيًا واضحًا، مناسبة للعرض المتحفي أو للاستخدام كفازا ديكورية فاخرة.",
  images: [cld("hoa-slv-030_mdcjln")],
  image: cld("hoa-slv-030_mdcjln"),
  featured: true,
  createdAt: "1940-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-CRY-034",
  name: "فازا كريستال زرقاء مرسومة يدويًا",
  category: "كريستال",
  price: "2,200,000 د.ع",
  priceNumber: 2200000,
  desc: "فازا كريستال أنيقة بارتفاع 40 سم، تعود لأكثر من 50 عامًا، تتميّز بلون أزرق ناعم وزخارف نباتية مرسومة يدويًا بدقة عالية. قاعدة ثابتة وتصميم كلاسيكي راقٍ يعكس الذوق الفني لتلك الحقبة، ما يجعلها قطعة نادرة مناسبة للعرض المتحفي أو كقطعة ديكور فاخرة ذات قيمة تاريخية.",
  images: [cld("hoa-vas-034_bhofoq")],
  image: cld("hoa-vas-034_bhofoq"),
  featured: true,
  createdAt: "1970-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-WPN-033",
  name: "خنجر عثماني تراثي",
  category: "أسلحة تراثية",
  price: "800,000 د.ع",
  priceNumber: 0,
  desc: "خنجر عثماني تراثي يعود تاريخه إلى ما يقارب 100 عام، بطول 40 سم. يتميّز بنصل فولاذي عريض يحمل آثار الزمن، ومقبض مزخرف بتفاصيل تقليدية تعكس الحرفية العثمانية في صناعة الأسلحة البيضاء. قطعة نادرة ذات قيمة تاريخية عالية، مناسبة للعرض المتحفي أو ضمن المجموعات الخاصة.",
  images: [cld("hoa-trl-033_hom0i1")],
  image: cld("hoa-trl-033_hom0i1"),
  featured: true,
  createdAt: "1925-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-CER-035",
  name: "بيضات خزفية مزخرفة مع قواعد خشبية (عدد 3)",
  category: "اعمال فنية",
  price: "100,000 د.ع",
  priceNumber: 0,
  desc: "مجموعة من ثلاث بيضات خزفية تراثية، مزخرفة برسومات يدوية دقيقة لطيور ونباتات، مثبتة على قواعد خشبية أصلية. يبلغ ارتفاع كل قطعة 3 سم، ويعود عمر المجموعة لأكثر من 60 عامًا. قطع صغيرة الحجم لكنها غنية بالتفاصيل، مناسبة للعرض المتحفي أو لهواة جمع التحف الدقيقة.",
  images: [cld("hoa-trl-035_nkh634")],
  image: cld("hoa-trl-035_nkh634"),
  featured: true,
  createdAt: "1960-01-01",
  status: "available",
  auction: false

},
{
  id: "HOA-ART-027",
  name: "لوحة زيتية أوروبية من القرن الثامن عشر بإطار ذهبي",
  category: "لوحات ",
  price: "45,000,000 د.ع",
  priceNumber: 0,
  desc: "لوحة فنية نادرة تعود إلى القرن الثامن عشر، منفّذة بتقنية الزيت على الخشب، تُجسّد مشهدًا كلاسيكيًا غنيًا بالتفاصيل والحركة. مؤطّرة بإطار ذهبي فاخر يعكس أسلوب تلك الحقبة، واللوحة غير موقّعة كما هو شائع في العديد من أعمال تلك الفترة. قطعة متحفية استثنائية ذات قيمة فنية وتاريخية عالية، مناسبة للمجموعات الخاصة أو العرض المتحفي الراقي.",
  images: [cld("hoa-art-027_nsjyh5")],
  image: cld("hoa-art-027_nsjyh5"),
  featured: true,
  createdAt: "1750-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-ELC-028",
  name: "مروحة كهربائية حديدية تراثية",
  category: "أثاث  تراثي",
  price: "50,000 د.ع",
  priceNumber: 0,
  desc: "مروحة كهربائية تراثية صغيرة مصنوعة من الحديد، بارتفاع 60 سم، تعود إلى منتصف القرن العشرين، وما زالت تعمل بكفاءة. تتميّز بتصميم صناعي كلاسيكي وشفرات معدنية مع قفص حماية أصلي، وتحمل آثار الزمن التي تضيف إليها طابعًا تاريخيًا أصيلًا. قطعة نادرة تجمع بين الوظيفة والقيمة التراثية، مناسبة للعرض المتحفي أو لهواة جمع الأجهزة القديمة.",
  images: [cld("hoa-trl-028_p2js0f")],
  image: cld("hoa-trl-028_p2js0f"),
  featured: true,
  createdAt: "1945-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-GRM-026",
  name: "كراموفون وراديو خشبي فاخر مع خزائن أسطوانات",
  category: "كراموفون",
  price: "500,000 د.ع",
  priceNumber: 0,
  desc: "كراموفون وراديو تراثي نادر مصنوع من الخشب الفاخر، يجمع بين جهاز تشغيل الأسطوانات والراديو ضمن تصميم كلاسيكي أنيق. القطعة شغّالة بالكامل، وتضم دولابين جانبيين مخصّصين لخزن الأسطوانات. يبلغ ارتفاعها 130 سم وعرضها 120 سم، وتُعد من القطع الكبيرة والفاخرة التي تعكس ذروة الحرفية والتقنيات الصوتية في منتصف القرن التاسع عشر . قطعة استثنائية مناسبة للعرض المتحفي أو للمجموعات الخاصة الراقية.",
  images: [cld("hoa-grm-026_xbttfp")],
  image: cld("hoa-grm-026_xbttfp"),
  featured: true,
  createdAt: "1940-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-FINE-029",
  name: "منحوتة حجرية تعبيرية مع قاعدة",
  category: "أعمال فنية",
  price: "3,200,000 د.ع",
  priceNumber: 3200000,
  desc: "عمل فني نحتي منفّذ من الحجر بأسلوب تعبيري، يجسّد ملامح إنسانية مجرّدة تحمل طابعًا دراميًا واضحًا. المنحوتة مثبتة على قاعدة، ويبلغ الارتفاع الكلي 30 سم. قطعة فنية قوية بصريًا تعكس حسًّا معاصرًا وتصلح للعرض المتحفي أو ضمن مجموعات الفن التشكيلي الراقية.",
  images: [cld("hoa-fine-029_whj1lj")],
  image: cld("hoa-fine-029_whj1lj"),
  featured: true,
  createdAt: "1950-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-TRL-032",
  name: "تمثال رأس هيرميس كلاسيكي مع قاعدة",
  category: "اعمال فنية",
  price: "2,300,000 د.ع",
  priceNumber: 2300000,
  desc: "تمثال رأس كلاسيكي مستوحى من الإله الإغريقي هيرميس، منفّذ بأسلوب نحت دقيق يبرز تفاصيل الوجه والشَعر بشكل متقن. مثبت على قاعدة رخامية تحمل اسم HERMES، ويبلغ الارتفاع الكلي 20 سم. قطعة فنية أنيقة تجمع بين الطابع التاريخي والجمالي، مناسبة للعرض المتحفي أو كعنصر ديكور فني راقٍ.",
  images: [cld("hoa-trl-032_eitprd")],
  image: cld("hoa-trl-032_eitprd"),
  featured: true,
  createdAt: "1960-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-CRY-036",
  name: "طقم كريستال مرسوم يدويًا بزخارف شرقية (4 قطع)",
  category: "كريستال",
  price: "4,200,000 د.ع",
  priceNumber: 4200000,
  desc: "طقم فاخر من الكريستال/الزجاج الفني يتكوّن من أربع قطع، يشمل قارورتين مزخرفتين وعلبتين بغطاء، جميعها مرسومة يدويًا بزخارف نباتية وشرقية غنية بالألوان. يتميّز الطقم بتناسق التصميم ودقة التنفيذ، ما يجعله قطعة عرض أنيقة ذات قيمة فنية عالية، مناسبة للعرض المتحفي أو للمجموعات الخاصة الراقية.",
  images: [cld("hoa-vas-036_am75wo")],
  image: cld("hoa-vas-036_am75wo"),
  featured: true,
  createdAt: "1955-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-CRY-037",
  name: "ثريا كريستال فاخرة بـ 8 مصابيح",
  category: "كريستال",
  price: "700,000 د.ع",
  priceNumber: 0,
  desc: "ثريا كريستال فاخرة تتكوّن من ثمانية مصابيح، تتميّز بتفاصيل زجاجية وكريستالية دقيقة وتصميم كلاسيكي راقٍ. تعكس القطعة طابع الفخامة والذوق الرفيع، وتُعد عنصرًا معماريًا بارزًا يليق بالصالات التراثية أو القاعات ذات الطابع المتحفي.",
  images: [
    cld("hoa-cry-037_izuykb"),
    cld("hoa-cry-037-1_tgglcx")
  ],
  image: cld("hoa-cry-037_izuykb"),
  featured: true,
  createdAt: "1950-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-037",
  name: "إبريق نحاسي تراثي مزخرف يدويًا",
  category: "نحاسيات",
  price: "150,000 د.ع",
  priceNumber: 0,
  desc: "إبريق نحاسي تراثي منفّذ بنقوش يدوية دقيقة تغطي البدن بالكامل، يتميّز بعنق طويل ومصبّ منحني ومقبض جانبي أنيق. يعكس أسلوب الصناعة التقليدية وثراء الزخرفة الشرقية، ما يجعله قطعة عرض متحفية مميّزة أو عنصر ديكور فاخر لهواة التحف النحاسية.",
  images: [cld("hoa-cop-037_ohqzfa")],
  image: cld("hoa-cop-037_ohqzfa"),
  featured: true,
  createdAt: "1900-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-BOX-043",
  name: "صندوق هندي خشبي مطعّم بالنحاس اليدوي",
  category: "صندوق",
  price: "500,000 د.ع",
  priceNumber: 500000,
  desc: "صندوق تراثي هندي مصنوع من الخشب ومطعّم بالنحاس اليدوي بزخارف هندسية ونباتية دقيقة. يتميّز بواجهة غنية بالتفاصيل مع مقابض وأقفال نحاسية، ومثبت على أرجل خشبية تمنحه حضورًا أنيقًا. يبلغ ارتفاعه 50 سم وعرضه 120 سم، ويصلح للاستخدام كقطعة تخزين تراثية أو كعنصر ديكور فاخر في المساحات الكلاسيكية.",
  images: [cld("hoa-box-043_qiws3e")],
  image: cld("hoa-box-043_qiws3e"),
  featured: true,
  createdAt: "1950-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-ART-044",
  name: "لوحة أهوار العراق مؤطرة بإطار برونزي",
  category: "لوحات ",
  price: "—",
  priceNumber: 0,
  desc: "لوحة فنية تجسّد مشهدًا من أهوار العراق، تعكس الطابع الهادئ والطبيعة المائية المميّزة للمنطقة مع تفاصيل بصرية شاعرية. اللوحة مؤطّرة بإطار برونزي أنيق يضيف لها حضورًا كلاسيكيًا راقيًا. يبلغ ارتفاعها 100 سم وعرضها 150 سم، ويعود عمرها إلى نحو 30 عامًا، ما يجعلها قطعة فنية وثائقية وثقافية مناسبة للعرض المتحفي أو للمساحات التراثية الراقية.",
  images: [cld("hoa-art-044_twyquf")],
  image: cld("hoa-art-044_twyquf"),
  featured: true,
  createdAt: "1995-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-WOD-045",
  name: "طقم طاولات خشبية (3 قطع)",
  category: "خشب",
  price: "200,000 د.ع",
  priceNumber: 200000,
  desc: "طقم طاولات خشبية يتكوّن من ثلاث قطع، يشمل طاولة واحدة كبيرة وطاولتين صغيرتين متناسقتين في التصميم. يتميّز الطقم ببساطة الشكل وقوة الخشب مع طابع عملي يصلح للاستخدام اليومي أو كقطع جانبية في المساحات التراثية والكلاسيكية. خيار اقتصادي وعملي مع حضور جمالي واضح.",
  images: [cld("hoh-wood-045_czwfhh")],
  image: cld("hoh-wood-045_czwfhh"),
  featured: false,
  createdAt: "1970-01-01",
  status: "available",
  auction: false
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
  mobileOrderBtn: document.getElementById("mobileOrderBtn"),

  // ✅ مزاد
  storeCount: document.getElementById("storeCount"),
  auctionCount: document.getElementById("auctionCount"),
  goAuction: document.getElementById("goAuction")
};

let state = {
  category: "الكل",
  q: "",
  sort: "featured",
  view: "all", // all | favorites (auction view صار صفحة منفصلة)
  activeProduct: null,
  activeImgIndex: 0
};
/* =========================
   PAGE MODE (store | auction)
========================= */

const PAGE_MODE = (window.HOA_PAGE_MODE || "store").toLowerCase();

if (PAGE_MODE === "auction") {
  state.view = "auction";
}


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
  u.hash = "";
  return u.href;
}
function isAuction(p) { return p && p.auction === true; }

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
   7) مزاد: تحديث العدّادات + زر المزاد
========================= */
function updateAuctionUI() {
  const storeCount = PRODUCTS.filter(p => p.status !== "sold").length;
  const auctionCount = PRODUCTS.filter(p => p.status !== "sold" && isAuction(p)).length;

  if (els.storeCount) els.storeCount.textContent = String(storeCount);
  if (els.auctionCount) els.auctionCount.textContent = String(auctionCount);
}

// ✅ PAGE MODE: زر المزاد صار رابط للصفحة (ما نغيّر View داخل نفس الصفحة)
function bindAuctionButton() {
  if (!els.goAuction) return;

  // إذا بالـ HTML خليتيه <a href="auction.html"> فهاي الفنكشن ما راح تأثر
  // وإذا بعده button، نخليه ينقل للصفحة
  els.goAuction.addEventListener("click", (e) => {
    // لو كان الرابط موجود خلّيه يشتغل طبيعي
    const tag = (els.goAuction.tagName || "").toLowerCase();
    if (tag === "a") return;

    e.preventDefault();
    window.location.href = "auction.html";
  });
}

/* =========================
   8) Render Chips / Filter / Sort
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

  return PRODUCTS
    // ✅ PAGE MODE: فلترة أساسية حسب الصفحة
    .filter((p) => {
      if (PAGE_MODE === "auction") return isAuction(p) && p.status !== "sold";
      // store mode
      return !isAuction(p) && p.status !== "sold";
    })
    .filter((p) => {
      const catOK = state.category === "الكل" ? true : p.category === state.category;

      const qOK = !q ? true :
        (p.name || "").toLowerCase().includes(q) ||
        (p.id || "").toLowerCase().includes(q) ||
        (p.category || "").toLowerCase().includes(q);

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
   9) Render Grid
========================= */
function renderGrid() {
  if (!els.grid) return;

  const filtered = getFilteredProducts();
  const sorted = sortProducts(filtered);

  // ✅ countItems صار يعكس المعروض في هذه الصفحة
  if (els.countItems) {
  if (PAGE_MODE === "auction") {
    const auctionCount = PRODUCTS.filter(
      p => p.status !== "sold" && p.auction === true
    ).length;
    els.countItems.textContent = String(auctionCount);
  } else {
    els.countItems.textContent = String(PRODUCTS.length);
  }
}


  if (els.resultsHint) {
    const viewLabel =
      state.view === "favorites" ? " (المفضلة)" : "";

    const pageLabel = (PAGE_MODE === "auction") ? " (قطع المزاد)" : " (قطع المتجر)";

    els.resultsHint.textContent =
      `${sorted.length} نتيجة` +
      (state.category !== "الكل" ? ` ضمن "${state.category}"` : "") +
      pageLabel +
      viewLabel;
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
  const auctionBadge = isAuction(p) ? `<span class="badge is-auction">مزاد</span>` : "";

  return `
    <article class="card" tabindex="0" role="button" data-id="${escapeHtml(p.id)}" aria-label="عرض التفاصيل ${escapeHtml(p.name)}">
      <div class="card__img">
        <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy">
      </div>

      <div class="card__body">
        <div class="card__top">
          <div class="card__name">${escapeHtml(p.name)}</div>
          <div class="badgesRow">
            <span class="badge">${escapeHtml(p.category)}</span>
            ${auctionBadge}
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
      btn.textContent = on ? "❤️ في المفضلة" : "♡ إضافة للمفضلة";
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

function render() {
  updateAuctionUI();
  renderGrid();
}

/* =========================
   10) Modal + History (Back fix)
========================= */
function lockBodyScroll(locked) {
  document.body.style.overflow = locked ? "hidden" : "";
}
function isModalOpen() {
  return els.modal && els.modal.classList.contains("is-open");
}
function pushModalState(productId) {
  const u = new URL(window.location.href);
  u.searchParams.set("p", productId);
  history.pushState({ modal: true, pid: productId }, "", u.toString());
}
let ignoreNextPop = false;

function openModal() {
  if (!els.modal) return;
  els.modal.classList.add("is-open");
  els.modal.setAttribute("aria-hidden", "false");
  lockBodyScroll(true);
}

function closeModal({ viaHistory = false } = {}) {
  if (!els.modal) return;

  els.modal.classList.remove("is-open");
  els.modal.setAttribute("aria-hidden", "true");
  lockBodyScroll(false);

  state.activeProduct = null;
  state.activeImgIndex = 0;

  if (els.formStatus) els.formStatus.textContent = "";
  if (els.form) els.form.reset();

  if (!viaHistory) {
    if (history.state && history.state.modal) {
      ignoreNextPop = true;
      history.back();
    } else {
      const u = new URL(window.location.href);
      u.searchParams.delete("p");
      history.replaceState(history.state, "", u.toString());
    }
  }
}

window.addEventListener("popstate", () => {
  if (ignoreNextPop) {
    ignoreNextPop = false;
    return;
  }

  if (isModalOpen()) {
    closeModal({ viaHistory: true });
    return;
  }

  const u = new URL(window.location.href);
  const pid = u.searchParams.get("p");
  if (pid) openProduct(pid, { mode: "details", fromHistory: true });
});

/* =========================
   11) Tabs
========================= */
function setTab(mode, p) {
  const showOrder = (mode === "order");
  const canOrder = p.status !== "sold";

  if (els.tabDetails) els.tabDetails.classList.toggle("is-active", !showOrder);
  if (els.tabOrder) {
    els.tabOrder.classList.toggle("is-active", showOrder);
    els.tabOrder.style.display = canOrder ? "" : "none";
  }

  if (els.detailsSection) {
    els.detailsSection.hidden = showOrder;
    els.detailsSection.style.display = showOrder ? "none" : "";
  }

  if (els.orderSection) {
    const shouldShow = showOrder && canOrder;
    els.orderSection.hidden = !shouldShow;
    els.orderSection.style.display = shouldShow ? "" : "none";
  }

  if (!canOrder && showOrder) {
    if (els.detailsSection) {
      els.detailsSection.hidden = false;
      els.detailsSection.style.display = "";
    }
    if (els.orderSection) {
      els.orderSection.hidden = true;
      els.orderSection.style.display = "none";
    }
    if (els.tabDetails) els.tabDetails.classList.add("is-active");
  }

  if (els.modalContent) els.modalContent.scrollTop = 0;
}

/* =========================
   12) Gallery
========================= */
function setMainImage(p, idx) {
  const imgs = (p.images && p.images.length) ? p.images : [p.image].filter(Boolean);
  const safeIdx = Math.max(0, Math.min(idx, imgs.length - 1));
  state.activeImgIndex = safeIdx;

  const src = imgs[safeIdx] || p.image || "";
  if (els.modalMainImg) {
    els.modalMainImg.src = src;
    els.modalMainImg.alt = p.name;
  }

  if (els.modalThumbs) {
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
   13) Suggested
========================= */
function renderSuggested(p) {
  if (!els.suggestedWrap || !els.suggestedGrid) return;

  const similar = PRODUCTS
    // ✅ PAGE MODE: اقتراحات من نفس “نوع الصفحة” حتى ما يجيب مزاد داخل متجر والعكس
    .filter(x => x.id !== p.id)
    .filter(x => (PAGE_MODE === "auction") ? isAuction(x) : !isAuction(x))
    .filter(x => x.category === p.category)
    .slice(0, 4);

  if (similar.length === 0) {
    els.suggestedWrap.style.display = "none";
    return;
  }

  els.suggestedWrap.style.display = "";

  els.suggestedGrid.innerHTML = similar.map(s => `
    <div class="suggestedCard" data-sid="${escapeHtml(s.id)}">
      <div class="card__img">
        <img src="${escapeHtml(s.image)}" alt="${escapeHtml(s.name)}" loading="lazy">
      </div>
      <div class="t">${escapeHtml(s.name)}</div>
      <div class="m">${escapeHtml(s.price)} • ${escapeHtml(statusLabel(s.status))}</div>
    </div>
  `).join("");

  els.suggestedGrid.querySelectorAll("[data-sid]").forEach(card => {
    card.addEventListener("click", () => openProduct(card.getAttribute("data-sid"), { mode: "details" }));
  });
}

/* =========================
   14) Modal content apply
========================= */
function applyStatusToModal(p) {
  if (els.modalStatus) {
    els.modalStatus.textContent = statusLabel(p.status);
    els.modalStatus.className = `badge status-badge ${statusClass(p.status)}`;
  }

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

  if (els.modalTitle) els.modalTitle.textContent = p.name;
  if (els.modalCategory) els.modalCategory.textContent = p.category;
  if (els.modalCode) els.modalCode.textContent = p.id;
  if (els.modalPrice) els.modalPrice.textContent = p.price;
  if (els.modalDesc) els.modalDesc.textContent = p.desc;

  setMainImage(p, 0);

  if (els.favBtn) {
    const on = isFav(p.id);
    els.favBtn.textContent = on ? "♥" : "♡";
    els.favBtn.classList.toggle("is-on", on);
  }

  renderSuggested(p);
  applyStatusToModal(p);

  const mode = (opts.mode === "order") ? "order" : "details";
  setTab(mode, p);

  if (!opts.fromHistory) pushModalState(p.id);

  openModal();

  if (mode === "order" && p.status !== "sold") {
    setTimeout(() => {
      if (els.custName) {
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
if (els.favBtn) {
  els.favBtn.addEventListener("click", () => {
    const p = state.activeProduct; if (!p) return;
    const on = toggleFav(p.id);
    els.favBtn.textContent = on ? "♥" : "♡";
    els.favBtn.classList.toggle("is-on", on);
    renderGrid();
  });
}

/* Close modal by X/backdrop */
if (els.modal) {
  els.modal.addEventListener("click", (e) => {
    if (e.target && e.target.getAttribute("data-close") === "true") closeModal();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isModalOpen()) closeModal();
});

/* =========================
   15) Share
========================= */
function shareTextForProduct(p) {
  const url = getProductUrl(p.id);
  return `✨ ${p.name}\nالكود: ${p.id}\nالسعر: ${p.price}\nالحالة: ${statusLabel(p.status)}\nالرابط: ${url}`;
}

if (els.shareWAItemBtn) {
  els.shareWAItemBtn.addEventListener("click", () => {
    const p = state.activeProduct; if (!p) return;
    window.open(getWhatsappUrl(shareTextForProduct(p)), "_blank");
  });
}

if (els.copyLinkBtn) {
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

if (els.nativeShareBtn) {
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
   16) Order submit (EmailJS then WhatsApp)
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

if (els.copyBtn) {
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
   17) Search + Sort + View
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
if (els.view) {
  els.view.addEventListener("change", () => {
    state.view = els.view.value; // all | favorites
    render();
  });
}

/* =========================
   18) Theme + Quick WhatsApp
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
   19) Mobile fixed button
========================= */
if (els.mobileOrderBtn) {
  els.mobileOrderBtn.addEventListener("click", () => {
    const p = state.activeProduct;
    if (p) {
      openProduct(p.id, { mode: p.status === "sold" ? "details" : "order" });
      return;
    }
    if (els.grid) els.grid.scrollIntoView({ behavior: "smooth", block: "start" });
    alert("اختار القطعة أولا ");
  });
}

/* =========================
   20) Open from URL ?p=
========================= */
function openFromLink() {
  const u = new URL(window.location.href);
  const pid = u.searchParams.get("p");
  if (pid) {
    history.replaceState({ modal: true, pid }, "", u.toString());
    openProduct(pid, { mode: "details", fromHistory: true });
  }
}

/* =========================
   21) Init
========================= */
document.addEventListener("DOMContentLoaded", () => {
  initEmailJS();
  if (els.year) els.year.textContent = String(new Date().getFullYear());

  renderChips();
  bindAuctionButton();   // ✅ زر المزاد ينقل لصفحة المزاد
  updateAuctionUI();     // ✅ عدّادات المتجر/المزاد
  render();

  setTimeout(openFromLink, 120);
});
