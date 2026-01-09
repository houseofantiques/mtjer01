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
const CATEGORIES = ["الكل", "سجاد", "خشب", "نحاس", "فضة", "كريستال", "اعمال فنية", "اكسسوارات", "فازات", "خطوط عربية","لوحات"];

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
    category: "فضة",
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
},
{
  id: "HOA-CAR-053",
  name: "سجادة تراثية يدوية كبيرة",
  category: "سجاد",
  price: "2,500,000 د.ع",
  priceNumber: 2500000,
  desc: "سجادة تراثية يدوية الصنع تتميّز بزخارف تقليدية متكرّرة وإطار غني بالتفاصيل، بألوان متوازنة تعكس الطابع الكلاسيكي للسجاد الشرقي. مناسبة للصالات الواسعة أو المساحات التراثية، وتُعد قطعة فاخرة للعرض أو الاستخدام الراقي.",
  dimensions: {
    length_cm: 294,
    width_cm: 206
  },
  images: [cld("hoa-car-053_pfpqrv")],
  image: cld("hoa-car-053_pfpqrv"),
  featured: true,
  createdAt: "1970-01-01",
  status: "available",
  auction: false

},
{
  id: "HOA-CAR-046",
  name: "سجادة تراثية مصوّرة بزخارف رمزية",
  category: "سجاد",
  price: "—",
  priceNumber: 0,
  desc: "سجادة تراثية نادرة تتميّز بزخارف تصويرية غنية تتضمن مشاهد رمزية وحيوانية وهندسية، منسوجة بأسلوب تقليدي يعكس عمق الثقافة الشرقية. تتوسطها وحدة صليبية الشكل محاطة بعناصر سردية دقيقة، مع إطار مزخرف بنقوش نباتية متناسقة. قطعة فنية ذات طابع متحفي تصلح للعرض أو الاقتناء الخاص.",
  dimensions: {
    length_cm: null,
    width_cm: null
  },
  images: [cld("hoa-car-046_glbwc4")],
  image: cld("hoa-car-046_glbwc4"),
  featured: true,
  createdAt: "1960-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-CAR-053",
  name: "سجادة تراثية بزخارف هندسية مركزية",
  category: "سجاد",
  price: "—",
  priceNumber: 0,
  desc: "سجادة تراثية أصيلة بزخارف هندسية متقنة وألوان دافئة تعكس الطابع الشرقي التقليدي. تتوسطها وحدة هندسية بارزة محاطة بإطار زخرفي غني، مناسبة للعرض المتحفي أو للاقتناء الخاص.",
  dimensions: {
    length_cm: null,      // يرجى التأكيد
    width_cm: 124
  },
  images: [cld("hoa-car053.jpd_slzdsj")],
  image: cld("hoa-car053.jpd_slzdsj"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "HOA-CAR-050",
  name: "سجادة تراثية بزخارف مربعة متكررة",
  category: "سجاد",
  price: "—",
  priceNumber: 0,
  desc: "سجادة تراثية أصيلة بزخارف هندسية مربعة متكررة وألوان ترابية هادئة تعكس الطابع الشرقي الكلاسيكي. تصميم متوازن وإطار زخرفي غني يجعلها مناسبة للعرض المتحفي أو للمساحات التراثية الراقية.",
  dimensions: {
    length_cm: 225,
    width_cm: 130
  },
  images: [cld("hoa-car-050_rkpr4z")],
  image: cld("hoa-car-050_rkpr4z"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "HOA-CAR-047",
  name: "سجادة تراثية حمراء بزخارف هندسية ملونة",
  category: "سجاد",
  price: "—",
  priceNumber: 0,
  desc: "سجادة تراثية مميزة بأرضية حمراء غنية تتزين بزخارف هندسية ملونة متكررة، محاطة بإطار زخرفي متعدد الألوان يعكس الحرفية التقليدية العالية. قطعة لافتة تناسب المساحات الراقية أو العرض المتحفي.",
  dimensions: {
    length_cm: 285,
    width_cm: 158
  },
  images: [cld("hoa-car-047_hyxhqh")],
  image: cld("hoa-car-047_hyxhqh"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "HOA-CAR-048",
  name: "سجادة تراثية بزخارف هندسية متناظرة متعددة الألوان",
  category: "سجاد",
  price: "—",
  priceNumber: 0,
  desc: "سجادة تراثية مميزة بزخارف هندسية متناظرة وألوان دافئة تجمع بين الأحمر، الأزرق، والبرتقالي، مع إطار غني بالنقوش التقليدية. قطعة قوية الحضور تناسب المساحات الواسعة أو العرض المتحفي وتعكس الحرفية اليدوية الأصيلة.",
  dimensions: {
    length_cm: 270,
    width_cm: 146
  },
  images: [cld("hoa-car-048_nie9u9")],
  image: cld("hoa-car-048_nie9u9"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "HOA-CAR-052",
  name: "سجادة تراثية بزخارف هندسية سداسية",
  category: "سجاد",
  price: "—",
  priceNumber: 0,
  desc: "سجادة تراثية أصيلة بزخارف هندسية سداسية متكررة وألوان ترابية داكنة تميل إلى الأحمر والبني، مع إطار زخرفي تقليدي متقن. قطعة ذات طابع كلاسيكي قوي، مناسبة للمساحات التراثية أو للعرض المتحفي.",
  dimensions: {
    length_cm: 190,
    width_cm: 120
  },
  images: [cld("hoa-car-052_bvssjp")],
  image: cld("hoa-car-052_bvssjp"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "HOA-CAR-049",
  name: "سجادة تراثية بزخرفة صليبية مركزية",
  category: "سجاد",
  price: "—",
  priceNumber: 0,
  desc: "سجادة تراثية أصيلة بزخرفة صليبية مركزية باللون الأزرق الداكن، محاطة بنقوش هندسية وزخارف نباتية دقيقة بألوان ترابية هادئة. قطعة ذات طابع تاريخي قوي، مناسبة للعرض المتحفي أو للمساحات الكلاسيكية الراقية.",
  dimensions: {
    length_cm: 188,
    width_cm: 143
  },
  images: [cld("hoa-car-049_cxk26b")],
  image: cld("hoa-car-049_cxk26b"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "HOA-CAR-059",
  name: "سجادة تراثية بزخارف هندسية مركزية",
  category: "سجاد",
  price: "—",
  priceNumber: 0,
  desc: "سجادة تراثية أصيلة بزخارف هندسية متناسقة ومركزية، بألوان ترابية هادئة مع إطار زخرفي داكن يبرز عمق النقوش. قطعة ذات طابع متحفي، مناسبة للعرض الراقي أو للمساحات الكلاسيكية الفاخرة.",
  dimensions: {
    length_cm: 250,
    width_cm: 148
  },
  images: [cld("hoa-car-059_qcrmpr")],
  image: cld("hoa-car-059_qcrmpr"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "HOA-CAR-058",
  name: "سجادة يدوية قديمة بزخارف نباتية كلاسيكية",
  category: "سجاد",
  price: "—",
  priceNumber: 0,
  desc: "سجادة يدوية قديمة بزخارف نباتية متداخلة بأسلوب كلاسيكي راقٍ، تتوسطها وحدة زخرفية متناظرة مع إطار غني بالتفاصيل. ألوانها المتناغمة بين الوردي والأزرق تعكس طابعًا متحفيًا أنيقًا، مناسبة للعرض أو للمساحات التراثية الراقية.",
  dimensions: {
    length_cm: 210,
    width_cm: 130
  },
  images: [cld("hoa-car-058_gac3qt")],
  image: cld("hoa-car-058_gac3qt"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-car-057_jecql8",
  name: "بساط طولي يدوي بزخارف هندسية تراثية",
  category: "سجاد",
  price: "—",
  priceNumber: 0,
  desc: "بساط طولي يدوي بنقوش هندسية متناظرة وألوان تراثية دافئة، يتوسطه تكرار وحدات ماسية وزخارف تقليدية مستوحاة من الفنون الشعبية. قطعة مميزة للعرض الجداري أو الممرات الطويلة، بطابع متحفي أنيق.",
  dimensions: {
    length_cm: 279,
    width_cm: 146
  },
  images: [cld("hoa-car-057_jecql8")],
  image: cld("hoa-car-057_jecql8"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-car-056_bnzzxu",
  name: "سجادة يدوية تراثية بزخارف هندسية",
  category: "سجاد",
  price: "—",
  priceNumber: 0,
  desc: "سجادة يدوية قديمة بزخارف هندسية متكررة على أرضية حمراء غنية، محاطة بإطار زخرفي تقليدي متعدد الألوان. قطعة قوية الحضور بطابع تراثي واضح، مناسبة للعرض المتحفي أو المساحات الواسعة.",
  dimensions: {
    length_cm: 284,
    width_cm: 194
  },
  images: [cld("hoa-car-056_bnzzxu")],
  image: cld("hoa-car-056_bnzzxu"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-car-054_enaxgc",
  name: "بساط تراثي طولي بزخارف هندسية",
  category: "سجاد",
  price: "—",
  priceNumber: 0,
  desc: "بساط تراثي طولي منسوج يدوياً بزخارف هندسية متكررة وألوان دافئة تتدرج بين الأحمر والأسود والعاجي. يتميز بتكوين عمودي قوي يجعله مثالياً للممرات، الجدران، أو العرض المتحفي بأسلوب كلاسيكي أنيق.",
  dimensions: {
    length_cm: 279,
    width_cm: 146
  },
  images: [cld("hoa-car-054_enaxgc")],
  image: cld("hoa-car-054_enaxgc"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-car-055_e8jlpz",
  name: "بساط تراثي طولي بزخارف معمارية",
  category: "سجاد",
  price: "—",
  priceNumber: 0,
  desc: "بساط تراثي طولي منسوج يدوياً يتميز بزخارف معمارية متكررة تشبه الأقواس والنوافذ التقليدية، بتدرجات الأحمر والأزرق والعاجي. قطعة ذات طابع شرقي واضح، مثالية للعرض الجداري أو المساحات الطولية بأسلوب متحفي فاخر.",
  dimensions: {
    length_cm: 280,
    width_cm: 150
  },
  images: [cld("hoa-car-055_e8jlpz")],
  image: cld("hoa-car-055_e8jlpz"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-cop-061_cthzws",
  name: "ميدالية برونزية عسكرية داخل علبة أصلية",
  category: "ميداليات ونياشين",
  price: "—",
  priceNumber: 0,
  desc: "ميدالية برونزية أصلية تحمل رمز النسر، محفوظة داخل علبتها الأصلية ذات البطانة المخملية. قطعة تاريخية ذات طابع رسمي، تعكس حقبة عسكرية أو تكريمية، مناسبة للعرض المتحفي أو لهواة اقتناء النياشين والقطع التوثيقية.",
  material: "برونز",
  condition: "حالة جيدة جداً",
  images: [cld("hoa-cop-061_cthzws")],
  image: cld("hoa-cop-061_cthzws"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-cop-062",
  name: "زوج مدقّات باب نحاسية تراثية",
  category: "إكسسوارات معمارية",
  price: "—",
  priceNumber: 0,
  desc: "زوج مدقّات باب نحاسية أصلية يزيد عمرها عن 120 عاماً، تتميز بزخارف كلاسيكية مصبوبة بعناية مع حلقة دائرية وقاعدة زخرفية أنيقة. كانت تُستخدم في الأبواب الخشبية الكبيرة للمنازل التراثية، وتُعد اليوم قطعة نادرة ذات قيمة تاريخية وجمالية عالية، مثالية للعرض المتحفي أو لإعادة توظيفها في أبواب تراثية فاخرة.",
  material: "نحاس",
  age: "أكثر من 120 سنة",
  condition: "حالة جيدة جداً مع آثار تقادم طبيعية",
  images: [cld("hoa-cop-061_knrhua")],
  image: cld("hoa-cop-061_knrhua"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-trl-062_dmaepm",
  name: "زجاجة عصر نسائية مزخرفة",
  category: "زجاجيات",
  price: "—",
  priceNumber: 0,
  desc: "زجاجة نسائية من عصر قديم مصنوعة من الزجاج، كانت تُستخدم لحفظ العطور أو مستحضرات الزينة. تتميز بشكلها الأنيق وطابعها الكلاسيكي الذي يعكس ذوق المرأة في تلك الحقبة. قطعة نادرة تضيف بعداً أنثوياً وتاريخياً لأي مجموعة متحفية أو عرض تراثي.",
  material: "زجاج",
  condition: "حالة جيدة جداً مع آثار تقادم طبيعية",
  images: [cld("hoa-trl-062_dmaepm")],
  image: cld("hoa-trl-062_dmaepm"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-vas-065_zmxkpy",
  name: "فازا",
  category: "فازات",
  price: "85,000",
  priceNumber: 85000,
  desc: "إبريق زجاجي فني مصنوع يدوياً بتقنية النفخ، يتميز بتدرجات لونية متناغمة من الأبيض والأخضر والعنابي مع خطوط انسيابية تعكس الذوق الفني الكلاسيكي. قطعة أنيقة كانت تُستخدم للعرض أو للتقديم، وتُعد مثالاً على جماليات الزجاج الفني في الحقبة القديمة.",
  material: "زجاج منفـوخ يدوياً",
  condition: "حالة ممتازة مع آثار تقادم طفيفة طبيعية",
  images: [cld("hoa-vas-065_zmxkpy")],
  image: cld("hoa-vas-065_zmxkpy"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-fine-071_cwg5oh",
  name: "تمثال بوهيمي طقسي – ارتفاع 95 سم",
  category: "اعمال فنية",
  price: "5,000,000 د.ع",
  priceNumber: 5000000,
  desc: "تمثال بوهيمي طقسي نادر، منحوت بأسلوب تعبيري يجمع بين الرمزية والتجريد. يتميز بتفاصيل دقيقة في الرأس والزخارف الصدرية الملوّنة، مع عقد زخرفي يعكس البعد الروحي والطقوسي للقطعة. يُرجّح استخدامه في طقوس احتفالية أو كرمز للحماية والهوية الثقافية. قطعة قوية الحضور تُعرض عادةً في المتاحف والمجموعات الفنية الخاصة.",
  material: "خشب منحوت يدوياً مع إضافات زخرفية",
  heightCm: 95,
  condition: "حالة جيدة جداً مع آثار تقادم طبيعية تعزز قيمته الفنية",
  images: [cld("hoa-fine-071_cwg5oh")],
  image: cld("hoa-fine-071_cwg5oh"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-fine-066_bq7jpq",
  name: "عمل فني موقّع – قطعة أصلية",
  category: "أعمال فنية",
  price: "3,500,000",
  priceNumber: 3500000,
  currency: "IQD",
  desc: "عمل فني أصلي موقّع من الفنان، يتميز بأسلوب تعبيري واضح وتوازن بصري مدروس في التكوين والخطوط. التوقيع الأصلي يمنح القطعة قيمة فنية وجامعية عالية، ما يجعلها مناسبة للعرض في المساحات الفنية الخاصة أو ضمن مجموعات جامعي الأعمال الفنية.",
  artistSignature: true,
  authenticity: "أصلي – توقيع يدوي",
  condition: "حالة ممتازة",
  images: [cld("hoa-fine-066_bq7jpq")],
  image: cld("hoa-fine-066_bq7jpq"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-fine-063_bpmkgv",
  name: "اعمال فنية",
  category: "اعمال فنية",
  price: "5,500,000",
  priceNumber: 5500000,
  desc: "عمل فني نحتي حجري بأسلوب تعبيري تجريدي، يجسّد الكتلة الإنسانية من خلال تكوين عضوي وانحناءات قوية تعكس الحركة والثقل الرمزي. القطعة تركز على الإحساس بالشكل والملمس أكثر من التفاصيل، ما يمنحها حضوراً بصرياً عميقاً يليق بالعرض المتحفي أو المجموعات الفنية الخاصة.",
  material: "حجر طبيعي منحوت يدوياً",
  period: "منتصف القرن العشرين (تقديري)",
  condition: "جيدة جداً مع آثار تقادم طبيعية",
  signed: false,
  images: [cld("hoa-fine-063_bpmkgv")],
  image: cld("hoa-fine-063_bpmkgv"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-cop-067",
  name: "سلة فضية مشغولة بمقبض زخرفي",
  category: "فضة",
  price: "3,200,000",
  priceNumber: 3200000,
  desc: "قطعة فضية مشغولة يدوياً بتفريغات زخرفية أنيقة ومقبض علوي ملتف تتوسطه زخرفة حيوانية دقيقة. تعود لأكثر من 60 سنة، وتتميّز بتوازن جميل بين الوظيفة والزخرفة، ما يجعلها مناسبة للعرض المتحفي أو للاستخدام الزخرفي الراقي ضمن الديكورات الكلاسيكية.",
  material: "نحاس مشغول يدوياً",
  period: "منتصف القرن العشرين (تقديري)",
  condition: "جيدة جداً مع آثار تقادم طبيعية",
  signed: false,
  images: [cld("hoa-slv-067_rhaw7f")],
  image: cld("hoa-slv-067_rhaw7f"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-slv-068",
  name: "وعاء فضي بزخارف محفورة وحافة متموجة",
  category: " فضة",
  price: "4,800,000",
  priceNumber: 4800000,
  desc: "وعاء فضي أنيق بحافة متموجة مصنوعة يدوياً، يتميز بزخارف نباتية محفورة بدقة على السطح الخارجي مع آثار تقادم نبيلة تعكس عمر القطعة وأصالتها. قطعة راقية تناسب العرض المتحفي أو تزيين المساحات الكلاسيكية الفاخرة.",
  material: "فضة مشغولة يدوياً",
  period: "النصف الأول من القرن العشرين (تقديري)",
  condition: "جيدة جداً مع آثار استخدام وتقادم طبيعية",
  signed: false,
  images: [cld("hoa-slv-068_ck7oao")],
  image: cld("hoa-slv-068_ck7oao"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-slv-073_prlfdp",
  name: "مجموعة سراج زيت فضية تقليدية",
  category: " فضة",
  price: "6,200,000",
  priceNumber: 6200000,
  desc: "مجموعة من ثلاثة سرج زيت فضية تقليدية، مشغولة يدوياً بأسلوب بسيط وانسيابي يعكس الاستخدام اليومي في البيوت القديمة. تتميز القطع بتقادم طبيعي على السطح يمنحها طابعاً تاريخياً أصيلاً، وتُعد مثالاً نادراً على الأدوات المنزلية الفضية ذات الوظيفة العملية والجمالية معاً.",
  material: "فضة مشغولة يدوياً",
  period: "أواخر القرن التاسع عشر – بدايات القرن العشرين (تقديري)",
  condition: "جيدة جداً مع آثار تقادم واستخدام طبيعية",
  signed: false,
  images: [cld("hoa-slv-073_prlfdp")],
  image: cld("hoa-slv-073_prlfdp"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-slv-075_x1czay",
  name: "سيت أواني فضية مزدوجة بغطاء",
  category: "فضة",
  price: "4,800,000",
  priceNumber: 4800000,
  desc: "سيت أنيق مكوّن من وعاءين فضيين بغطاء، متصلين بذراع مركزية ومقبض علوي زخرفي. القطعة مشغولة يدوياً بزخارف نباتية دقيقة، وتعود إلى أكثر من 70 عاماً. تصميمها المتوازن وتفاصيلها الكلاسيكية يمنحانها حضوراً فاخراً مناسباً للعرض المتحفي أو المجموعات الخاصة.",
  material: "فضة مشغولة يدوياً",
  period: "منتصف القرن العشرين (تقديري)",
  condition: "جيدة جداً مع آثار تقادم طبيعية",
  signed: false,
  images: [cld("hoa-slv-075_x1czay")],
  image: cld("hoa-slv-075_x1czay"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-slv-070_badhom",
  name: "زجاجة فضية سداسية مزخرفة",
  category: "فضة",
  price: "6,200,000",
  priceNumber: 6200000,
  desc: "زجاجة فضية فاخرة ذات تصميم سداسي، مزخرفة بنقوش نباتية محفورة يدوياً بدقة عالية على جميع الجوانب. تتميز بتوازن أنيق بين الشكل الهندسي والزخرفة الكلاسيكية، ما يجعلها قطعة مميزة للعرض المتحفي أو ضمن مجموعات التحف الراقية. تعكس أسلوب صناعة تقليدي متقن وحضوراً بصرياً لافتاً.",
  material: "فضة مشغولة يدوياً",
  period: "النصف الأول من القرن العشرين (تقديري)",
  condition: "جيدة جداً مع آثار تقادم طبيعية",
  signed: false,
  images: [cld("hoa-slv-070_badhom")],
  image: cld("hoa-slv-070_badhom"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-wood-064_q9e80m",
  name: "عمل فني خشبي تجريدي",
  category: "أعمال فنية",
  price: "3,800,000",
  priceNumber: 3800000,
  desc: "عمل فني خشبي تجريدي قائم بذاته، مصنوع من قطعة خشب طبيعية واحدة، يستثمر الشكل العضوي والانحناءات العفوية للمادة ليجسّد حضوراً نحتياً معاصراً. القطعة تعبّر عن توازن بين القوة والبساطة، وتُبرز آثار الزمن والملمس الطبيعي للخشب، ما يمنحها طابعاً فنياً فريداً مناسباً للعرض المتحفي أو المساحات الفنية الخاصة.",
  material: "خشب طبيعي منحوت يدوياً",
  period: "أواخر القرن العشرين (أكثر من 30 سنة)",
  condition: "جيدة جداً مع آثار تقادم طبيعية",
  dimensions: {
    height_cm: 90
  },
  signed: false,
  images: [cld("hoa-wood-064_q9e80m")],
  image: cld("hoa-wood-064_q9e80m"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-wood-069_qo8skc",
  name: "مطرقة مزاد خشبية مزخرفة",
  category: "اعمال فنية",
  price: "3,800,000",
  priceNumber: 3800000,
  desc: "مطرقة مزاد خشبية أصلية ذات طابع فني، مصنوعة من خشب طبيعي معتّق ومزينة برسوم يدوية أنيقة على المقبض. تجمع القطعة بين الوظيفة الرمزية والقيمة الجمالية، وتُعد مثالاً نادراً على أدوات المزاد التقليدية التي تحولت إلى قطع عرض متحفي مميزة.",
  material: "خشب طبيعي مع زخارف يدوية",
  period: "النصف الثاني من القرن العشرين (تقديري)",
  condition: "جيدة جداً مع آثار استخدام وتقادم أصيلة",
  signed: false,
  images: [
    cld("hoa-wood-069_qo8skc"),
    cld("hoa-wood-6069-1_wyypg2")
  ],
  image: cld("hoa-wood-069_qo8skc"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-slv-074_qismti",
  name: "صندوق فضي منقوش",
  category: "فضة",
  price: "4,200,000",
  priceNumber: 4200000,
  desc: "صندوق فضي قديم مشغول بدقة عالية، مزخرف بنقوش بارزة تمثل مشاهد طبيعية وحيوانية محاطة بإطارات زخرفية كلاسيكية. تتميز القطعة بتفاصيلها الغنية وتوازنها الفني، ما يجعلها مثالية للعرض المتحفي أو ضمن مجموعات الفضيات الراقية.",
  material: "فضة مشغولة يدوياً",
  period: "منتصف القرن العشرين (تقديري)",
  condition: "جيدة جداً مع آثار تقادم طبيعية تضيف إلى أصالتها",
  signed: false,
  images: [
    cld("hoa-slv-074_qismti")
  ],
  image: cld("hoa-slv-074_qismti"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-slv-072_ot8n0m",
  name: "حامل شموع فضي مخروطي",
  category: "فضة",
  price: "3,800,000 د.ع ",
  priceNumber: 3800000,
  desc: "حامل شموع فضي قديم بتكوين مخروطي أنيق، مزخرف بنقوش هندسية ونباتية دقيقة محفورة يدوياً على كامل السطح. تتميز القطعة بتوازنها الشكلي وحضورها القوي، ما يجعلها مناسبة للعرض المتحفي أو كقطعة محورية ضمن مجموعات الفضيات الكلاسيكية.",
  material: "فضة مشغولة يدوياً",
  period: "النصف الأول من القرن العشرين (تقديري)",
  condition: "جيدة جداً مع آثار تقادم طبيعية",
  signed: false,
  images: [
    cld("hoa-slv-072_ot8n0m")
  ],
  image: cld("hoa-slv-072_ot8n0m"),
  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-acc-084_we4rkr",
  name: "سوار فضة بحجرين ملونين",
  category: "اكسسوارات",
  price: "1,250,000 د.ع",
  priceNumber: 1250000,
  desc: "سوار فضة أنتيك بتصميم أنيق ومفتوح، يتوسطه حجران ملونان أحدهما فيروزي والآخر كهرماني، محاطان بتفاصيل فضية دقيقة. قطعة عمرها التقريبي أكثر من 40 سنة، تعكس أسلوباً كلاسيكياً راقياً وتناسب العرض المتحفي أو المجموعات الخاصة.",
  images: [
     cld("hoa-acc-084_we4rkr") 
    ],
  image: cld("hoa-acc-084_we4rkr"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-089_d27bqn",
  name: "سوار فضة بحجر أبيض طبيعي",
  category: "اكسسوارات",
  price: "1,100,000 د.ع",
  priceNumber: 1100000,
  desc: "سوار فضة أنتيك بتصميم مفتوح وأنيق، يتوسطه حجر أبيض طبيعي مصقول بشكل حر داخل إطار فضي مزخرف بدقة. القطعة تعكس ذوقاً كلاسيكياً هادئاً وتناسب العرض المتحفي أو المجموعات الخاصة، مع عمر تقريبي يتجاوز 35 سنة.",
  images: [
    cld("hoa-acc-089_d27bqn")
        ],
  image: cld("hoa-acc-089_d27bqn"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-082_bmkogm",
  name: "سوار فضة بحجر أبيض طبيعي",
  category: "اكسسوارات",
  price: "1,100,000 د.ع",
  priceNumber: 1100000,
  desc: "سوار فضة أنتيك بتصميم مفتوح وأنيق، يتوسطه حجر أبيض طبيعي مصقول بشكل حر داخل إطار فضي مزخرف بدقة. القطعة تعكس ذوقاً كلاسيكياً هادئاً وتناسب العرض المتحفي أو المجموعات الخاصة، مع عمر تقريبي يتجاوز 35 سنة.",
  images: [
    cld("hoa-acc-082_bmkogm")
  ],
  image: cld("hoa-acc-082_bmkogm"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-090_qtj2as",
  name: "سوار فضة بتصميم فراشة وأحجار ملونة",
  category: "اكسسوارات",
  price: "1,250,000 د.ع",
  priceNumber: 1250000,
  desc: "سوار فضة أنتيك بتصميم مفتوح يتوسطه شكل فراشة مزخرفة، مرصعة بأحجار ملونة طبيعية باللونين الأزرق والبرتقالي داخل إطار فضي دقيق. القطعة تجمع بين الرمزية الجمالية والدقة الحرفية، وتناسب العرض المتحفي أو المجموعات الخاصة، مع عمر تقريبي يتجاوز 30 سنة.",
  images: [
    cld("hoa-acc-090_qtj2as")
  ],
  image: cld("hoa-acc-090_qtj2as"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-086_qwedam",
  name: "قلادة فضة بحجر أزرق دمعة",
  category: "اكسسوارات",
  price: "1,450,000 د.ع",
  priceNumber: 1450000,
  desc: "قلادة فضة أنتيك بتصميم كلاسيكي أنيق، تتدلى منها قطعة على شكل دمعة مرصعة بحجر أزرق داكن مصقول، محاطة بإطار فضي مزخرف بدقة يبرز جمال الحجر وتوازنه. القطعة تعكس ذوقاً راقياً وتناسب العرض المتحفي أو المجموعات الخاصة، مع عمر تقريبي يتجاوز 40 سنة.",
  images: [
    cld("hoa-acc-086_qwedam")
  ],
  image: cld("hoa-acc-086_qwedam"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-slv-083-jpg_upjqky",
  name: "قطعة فضة أنتيك",
  category: "فضة",
  price: "1,900,000 د.ع",
  priceNumber: 1900000,
  desc: "قطعة فضة أنتيك مصنوعة بعناية وبأسلوب كلاسيكي، تتميز بتفاصيل دقيقة ولمسة تقادم طبيعية تعكس أصالتها. مناسبة للعرض المتحفي أو لإثراء المجموعات الخاصة، مع عمر تقريبي يتجاوز 40 سنة.",
  images: [
    cld("hoa-slv-083-jpg_upjqky")
  ],
  image: cld("hoa-slv-083-jpg_upjqky"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-slv-081.jog_jpxfqe",
  name: "فازا فضة أنتيك بقاعدة مزخرفة",
  category: "فضة",
  price: "2,300,000 د.ع",
  priceNumber: 2300000,
  desc: "فازا فضة أنتيك بتصميم كلاسيكي قائم على قاعدة مزخرفة، يتميز بجسم متعدد الأوجه ونقوش نباتية دقيقة مع آثار تقادم طبيعية تعكس عمر القطعة وأصالتها. مناسب للعرض المتحفي أو كمقتنى فاخر ضمن المجموعات الخاصة، مع عمر تقريبي يتجاوز 50 سنة.",
  images: [
    cld("hoa-slv-081.jog_jpxfqe")
  ],
  image: cld("hoa-slv-081.jog_jpxfqe"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-slv-085_dyzem1",
  name: "زوج أجراس متصلة فضة أنتيك بمقابض ملتوية",
  category: "فضة",
  price: "1,600,000 د.ع",
  priceNumber: 1600000,
  desc: "زوج أجراس فضة أنتيك بتصميم كلاسيكي نادر، يتميز كل جرس بجسم مخروطي مصقول ومقبض ملتوي ينتهي بكرة فضية. تظهر على السطح آثار تقادم طبيعية تعكس أصالة القطعة واستخدامها التاريخي. مناسبة للعرض المتحفي أو كمقتنى فني ضمن المجموعات الخاصة، مع عمر تقريبي يتجاوز 45 سنة.",
  images: [
    cld("hoa-slv-085_dyzem1")
  ],
  image: cld("hoa-slv-085_dyzem1"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-slv-088_zc0uv1",
  name: "كأس فضة قديم مع صحن مزخرف",
  category: "فضة",
  price: "1,850,000 د.ع",
  priceNumber: 1850000,
  desc: "كأس فضة أنتيك مرفق مع صحن فضي مزخرف يدوياً، يتميز الكأس بشكل مخروطي أنيق مع نقوش نباتية دقيقة تحيط بالجسم والحافة، بينما يحمل الصحن زخارف متناغمة تعكس الحرفية الكلاسيكية. تظهر على القطعة آثار تقادم طبيعية تضيف إلى أصالتها وقيمتها التاريخية. مناسبة للعرض المتحفي أو للاقتناء ضمن المجموعات الخاصة، مع عمر تقريبي يتجاوز 50 سنة.",
  images: [
    cld("hoa-slv-088_zc0uv1")
  ],
  image: cld("hoa-slv-088_zc0uv1"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-095",
  name: "قبعة عثمانية تاريخية من اللباد",
  category: "اكسسوارات",
  price: "3,500,000 د.ع",
  priceNumber: 3500000,
  desc: "قبعة عثمانية أصلية مصنوعة من اللباد الطبيعي، تعود إلى أواخر العهد العثماني بعمر يتجاوز 140 سنة. تتميز بشكلها المخروطي التقليدي وزخارفها الخطية اليدوية التي تحمل عبارات وزخارف رمزية، منفذة بحبر داكن فوق نسيج اللباد. القطعة نادرة وتعكس هوية ثقافية وتاريخية عميقة، وكانت تُستخدم كجزء من الزي الرسمي أو الديني في تلك الحقبة. مناسبة للعرض المتحفي أو للاقتناء ضمن المجموعات التاريخية الخاصة.",
  images: [
    cld("hoa-acc-095_kcip7y")
  ],
  image: cld("hoa-acc-095_kcip7y"),
  featured: true,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-098",
  name: "تراجي فضة أنيقة بحجر أسود",
  category: "اكسسوارات",
  price: "950,000 د.ع",
  priceNumber: 950000,
  desc: "زوج تراجي فضة أنتيك بتصميم فني أنيق، يتوسط كل قطعة حجر أسود مصقول داخل إطار فضي مزخرف بنقوش دقيقة مستوحاة من الطراز الكلاسيكي. القطعة تعكس توازناً مثالياً بين الجرأة والرقي، وتعود إلى فترة تقارب 40 سنة، مما يجعلها مناسبة للعرض المتحفي أو للاقتناء ضمن مجموعات الإكسسوارات التراثية المميزة.",
  images: [
    cld("hoa-acc-098_agd3ry")
  ],
  image: cld("hoa-acc-098_agd3ry"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-104_to6lvl",
  name: "محبس فضة أنيق بتصميم كلاسيكي",
  category: "اكسسوارات",
  price: "650,000 د.ع",
  priceNumber: 650000,
  desc: "محبس فضة أنتيك بتصميم بسيط وأنيق، يتميز بتفصيلة هندسية ناعمة تتوسطها وردة فضية صغيرة تضفي لمسة رقي هادئة. القطعة تعكس ذوقاً كلاسيكياً راقياً ومناسبة للاستخدام اليومي أو للعرض ضمن مجموعات الإكسسوارات التراثية، مع عمر تقريبي يتجاوز 30 سنة.",
  images: [
    cld("hoa-acc104_to6lvl")
  ],
  image: cld("hoa-acc104_to6lvl"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-103_tldgr2",
  name: "سوار فضة أنتيك مجدول بتصميم تراثي",
  category: "اكسسوارات",
  price: "1,250,000 د.ع",
  priceNumber: 1250000,
  desc: "سوار فضة أنتيك بتصميم مجدول متقن، يتكوّن من أسلاك فضية متعددة متشابكة بانسيابية تعكس حرفية عالية وذوقاً تراثياً راقياً. القطعة تجمع بين القوة الجمالية والبساطة الكلاسيكية، وتناسب العرض المتحفي أو الاقتناء ضمن مجموعات الإكسسوارات النادرة، مع عمر تقريبي يتجاوز 40 سنة.",
  images: [
    cld("hoa-acc-103_tldgr2")
  ],
  image: cld("hoa-acc-103_tldgr2"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-102_m8p1e0",
  name: "سوار فضة أنتيك متعدد الأسلاك بتفصيل مركزي",
  category: "اكسسوارات",
  price: "1,350,000 د.ع",
  priceNumber: 1350000,
  desc: "سوار فضة أنتيك عريض بتصميم يعتمد على أسلاك فضية متوازية ومتعددة، تتجمع في المنتصف بتفصيل زخرفي دقيق يمنح القطعة حضوراً قوياً ومتوازناً. يتميز بطابع تراثي واضح مع لمسة هندسية أنيقة، ويعد قطعة مثالية للاقتناء أو العرض المتحفي ضمن مجموعات الإكسسوارات النادرة، مع عمر تقريبي يتجاوز 45 سنة.",
  images: [
    cld("hoa-acc-102_m8p1e0")
  ],
  image: cld("hoa-acc-102_m8p1e0"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-100_itf2qj",
  name: "محبس فضة بتصميم هندسي بحجر أسود",
  category: "اكسسوارات",
  price: "920,000 د.ع",
  priceNumber: 920000,
  desc: "محبس فضة أنتيك بتصميم هندسي مميز، يتوسطه حجر أسود مصقول بخط انسيابي منحني، محاط بتفاصيل نقطية فضية دقيقة تضيف تبايناً جمالياً واضحاً. القطعة تحمل طابعاً فنياً معاصراً بروح تراثية، وتناسب عشاق الإكسسوارات النادرة ذات الهوية القوية، مع عمر تقريبي يزيد عن 30 سنة.",
  images: [
    cld("hoa-acc-100_itf2qj")
  ],
  image: cld("hoa-acc-100_itf2qj"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-099_e2iwbw",
  name: "تراجي فضة بتصميم قطرة مزدوجة",
  category: "اكسسوارات",
  price: "780,000 د.ع",
  priceNumber: 780000,
  desc: "زوج تراجي فضة أنتيك بتصميم أنيق يعتمد على خطوط انسيابية مفتوحة تنتهي بقطرة فضية متحركة، ما يمنح القطعة خفة بصرية وحركة ناعمة عند الارتداء. التصميم يجمع بين البساطة والرقي مع طابع فني هادئ، مناسب للمجموعات الكلاسيكية أو العرض المتحفي، مع عمر تقريبي يتجاوز 30 سنة.",
  images: [
    cld("hoa-acc-099_e2iwbw")
  ],
  image: cld("hoa-acc-099_e2iwbw"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-afont-097_apwvuu",
  name: "لوحة خط عربي مؤطرة بإطار خشبي",
  category: "خطوط عربية",
  price: "2,300,000 د.ع",
  priceNumber: 2300000,
  desc: "لوحة خط عربي أصيلة مكتوبة بأسلوب كلاسيكي متوازن، منفذة على ورق تقليدي ومؤطرة بإطار خشبي أنيق. تحمل العمل روحاً روحانية وجمالية عالية، مع انسجام دقيق بين التكوين الخطي والمساحات، ما يجعلها قطعة مميزة للعرض الجداري أو للمجموعات الفنية الخاصة. أبعاد اللوحة 60 × 30 سم، مع عمر تقريبي يتجاوز 60 سنة.",
  images: [
    cld("hoa-afont-097_apwvuu")
  ],
  image: cld("hoa-afont-097_apwvuu"),
  featured: false,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-sam-095_p3hux2",
  name: "سماور نحاس عثماني قديم",
  category: "نحاس",
  price: "3,500,000 د.ع",
  priceNumber: 3500000,
  desc: "سماور نحاسي أنتيك يعود إلى الحقبة العثمانية، مصنوع يدوياً بدقة عالية ويتميز بجسم أسطواني متوازن، مقابض جانبية مزخرفة وصنبور أصلي بحالة ممتازة. تظهر على السطح آثار الزمن الطبيعية التي تضيف قيمة تاريخية وجمالية للقطعة. يُعد هذا السماور قطعة متحفية نادرة ومناسبة للعرض في المجالس التراثية أو ضمن المجموعات الخاصة الراقية، مع عمر تقريبي يتجاوز 100 عام.",
  images: [
    cld("hoa-sam-095_p3hux2"),
    cld("hoa-sam-096_vnfdwl")
  ],
  image: cld("hoa-sam-095_p3hux2"),
  featured: true,
  createdAt: "2026-01-08",
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
