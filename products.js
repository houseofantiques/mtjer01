"use strict";
/* products.js - AUTO-REBUILT
   Cloudinary helper + PRODUCTS array.
   NOTE: Some Arabic descriptions in the source were truncated with '...'.
*/

const CLOUD_NAME = "dyqdfbaln";
function cld(id, width = 1200) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${id}`;
}

const PRODUCTS = [
  {
    id: "HOA-FINE-001",

    name: {
      ar: "عمل فني حجري للفنان الراحل منعم فرات — 20 سم",
      en: "Stone Artwork by the late Iraqi artist Mun'em Furat — 20 cm",
      ku: "کاری هونەری بەردی لەلایەن هونەرمەندی عێراقی (مۆنعم فُرات) — 20 سم"
    },

    desc: {
      ar: "منحوتة حجرية (كولة) بارتفاع 50 سم، عمرها أكثر من 75 سنة. لفنان عراقي. قطعة نادرة للعرض في المكتبات أو الواجهات. مكسور من الرأس.",
      en: "A stone sculpture (kola) with a height of 50 cm, over 75 years old. By an Iraqi artist. A rare piece suitable for display in libraries or showcases. The head is damaged/broken.",
      ku: "پەیکەری بەردی (کۆلە) بە بەرزی 50 سم، زیاتر لە 75 ساڵ کۆنە. کاری هونەرییە لە هونەرمەندێکی عێراقیە. دانەیەکی دەگمەنە بۆ پیشاندانی لە کتێبخانەکان یان شووکەکان. سەری شکاوە."
    },

    category: {
      ar: "أعمال فنية",
      en: "Artworks",
      ku: "کارە هونەرییەکان"
    },

    priceNumber: 7500000,
    price: "7,500,000 د.ع",
    status: "available",
    featured: true,
    auction: true,
    image: cld("hoa-01-stone_suqyho"),
    images: [cld("hoa-01-stone_suqyho")]
  },

  {
    id: "HOA-WOOD-002",

    name: {
      ar: "كرسي خشب قابل للطي — ارتفاع 80 سم",
      en: "Foldable Wooden Chair — Height 80 cm",
      ku: "کورسی دارەوەی هەڵکێشراو — بەرزی 80 سم"
    },

    desc: {
      ar: "كرسي خشبي ينطوي (Foldable) بارتفاع 80 سم. عملي ومناسب للديكور التراثي أو الاستخدام الخفيف.",
      en: "A foldable wooden chair with a height of 80 cm. Practical and suitable for heritage-style décor or light use.",
      ku: "کورسی دارەوەی هەڵکێشراو بە بەرزی 80 سم. گونجاوە بۆ دیکۆری میراثی یان بەکارهێنانی سووک."
    },

    category: {
      ar: "خشب",
      en: "Wood",
      ku: "دار"
    },

    priceNumber: 280000,
    price: "280,000 د.ع",
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-02-chair_iuorog"),
    images: [cld("hoa-02-chair_iuorog")]
  },

  {
    id: "HOA-slv-003",

    name: {
      ar: "سيت فرج + مرايا أنتيكة نسائية (3 قطع)",
      en: "Antique Women's Vanity Set (3 Pieces)",
      ku: "سێتی فرەج + مێرایەی ژنانەی ئانتیک (3 دانە)"
    },

    desc: {
      ar: "سيت نسائي أنتيك (3 قطع): فرج + مرايا + قطعة مرافقة. مناسب لغرفة نوم فخمة أو ركن تصوير.",
      en: "An antique women's set (3 pieces): vanity tray + mirror + accompanying piece. Ideal for a luxury bedroom or a styling/photo corner.",
      ku: "سێتێکی ژنانەی ئانتیک (3 دانە): فرەج + مێرایە + پارچەی هاوڕێ. گونجاوە بۆ ژووری نوستنێکی لوکس یان شوێنی وێنەگرتن."
    },

    category: {
      ar: "فضة",
      en: "Silver",
      ku: "زیو"
    },

    priceNumber: 400000,
    price: "400,000د.ع",
    status: "reserved",
    featured: false,
    auction: false,
    image: cld("hoa-03-vanity-set_udalhc"),
    images: [cld("hoa-03-vanity-set_udalhc")]
  },

  {
    id: "HOA-WOOD-004",

    name: {
      ar: "باب خشبي مع مدكة نحاس — عمر 120 سنة",
      en: "Wooden Door with Copper Knocker — 120 Years Old",
      ku: "دەرگای دارەوە لەگەڵ دەمکەی مس — تەمەنی 120 ساڵ"
    },

    desc: {
      ar: "باب خشبي تاريخي مع مدكة/مطرقة نحاس. العمر قرابة 120 سنة. الأبعاد: ارتفاع 2 متر، عرض 120 سم.",
      en: "A historic wooden door with a copper knocker. Approximately 120 years old. Dimensions: 2 meters in height, 120 cm in width.",
      ku: "دەرگایەکی دارەوەی مێژوویی لەگەڵ دەمکەی مس. نزیکەی 120 ساڵ تەمەنەکەیە. قەبارەکان: بەرزی 2 مەتر، پانی 120 سم."
    },

    category: {
      ar: "خشب",
      en: "Wood",
      ku: "دار"
    },

    priceNumber: 3800000,
    price: "3,800,000 د.ع",
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-04-door_qyvgut"),
    images: [cld("hoa-04-door_qyvgut")]
  },

  {
    id: "HOA-FINE-005",

    name: {
      ar: "سيت فازات فخارية مرسومة يدوياً (3 قطع) — عمر 60 سنة",
      en: "Hand-Painted Pottery Vase Set (3 Pieces) — 60 Years Old",
      ku: "سێتی فازەی خەزفی دەست‌نێوەرانە وێنەکراو (3 دانە) — تەمەنی 60 ساڵ"
    },

    desc: {
      ar: "3 فازات فخارية برسوم يدوية أصلية، عمرها تقريباً 60 سنة. مناسبة لطاولة استقبال أو رف عرض.",
      en: "Three pottery vases with original hand-painted designs, approximately 60 years old. Ideal for a reception table or display shelf.",
      ku: "سێ فازەی خەزفی بە وێنەکاری دەستی ڕەسەن، نزیکەی 60 ساڵ تەمەنەکەیانە. گونجاو بۆ مێزی پێشوازی یان ڕەفی پیشاندان."
    },

    category: {
      ar: "أعمال فنية",
      en: "Artworks",
      ku: "کارە هونەرییەکان"
    },

    priceNumber: 620000,
    price: "620,000 د.ع",
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-05-pottery-set_nsyybt"),
    images: [cld("hoa-05-pottery-set_nsyybt")]
  },

  {
    id: "HOA-FINE-006",

    name: {
      ar: "عمل أفريقي من المعجون — ارتفاع 30 سم",
      en: "African Paste Artwork — Height 30 cm",
      ku: "کاری ئەفریقی لە معجون — بەرزی 30 سم"
    },

    desc: {
      ar: "مجسّم/عمل أفريقي مصنوع من المعجون بدقة عالية، ارتفاع 30 سم، عمره أكثر من 25 سنة.",
      en: "An African figurine/artwork made from paste with high precision, 30 cm in height, over 25 years old.",
      ku: "پەیکەرێک/کاری هونەری ئەفریقی لە معجون دروستکراو بە وردەکاری بەرز، بەرزی 30 سم، زیاتر لە 25 ساڵ تەمەنەکەیە."
    },

    category: {
      ar: "أعمال فنية",
      en: "Artworks",
      ku: "کارە هونەرییەکان"
    },

    priceNumber: 390000,
    price: "390,000 د.ع",
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-06-african-art_yalmqs"),
    images: [cld("hoa-06-african-art_yalmqs")]
  },

  {
    id: "HOA-COP-007",
    name: {
      ar: "شيشة نحاس تراثية – عمر 120 سنة",
      en: "Heritage Copper Hookah — 120 Years Old",
      ku: "نەرجیلەی مسی میراثی — تەمەنی 120 ساڵ"
    },
    desc: {
      ar: "شيشة نحاس قديمة جداً (عمر تقريبي 120 سنة)، قطعة مميزة للعرض التراثي أكثر من الاستخدام.",
      en: "A very old copper hookah (approximately 120 years old), intended mainly for heritage display rather than use.",
      ku: "نەرجیلەیەکی زۆر کۆنی مسی (نزیکەی 120 ساڵ)، گونجاوە بۆ پیشاندانی میراثی زیاتر لە بەکارهێنان."
    },
    category: { ar: "نحاس", en: "Copper", ku: "مس" },
    priceNumber: 500000,
    price: "500,000د.ع",
    status: "sold",
    featured: false,
    auction: false,
    image: cld("hoa-07-hookah_qilfmy"),
    images: [cld("hoa-07-hookah_qilfmy")]
  },

  {
    id: "HOA-CRY-008",
    name: {
      ar: "قطعة كريستال مرسوم عليها ملك عثماني — عمر 150 سنة",
      en: "Crystal Piece Featuring an Ottoman King — 150 Years Old",
      ku: "پارچەی کریستال بە وێنەی پاشای عوسمانی — تەمەنی 150 ساڵ"
    },
    desc: {
      ar: "قطعة كريستال نادرة برسمة ملك عثماني، تعود للعهد العثماني بعمر تقريبي 150 سنة.",
      en: "A rare crystal piece featuring an Ottoman king illustration, dating back around 150 years to the Ottoman era.",
      ku: "پارچەیەکی دەگمەنەی کریستال بە وێنەی پاشای عوسمانی، نزیکەی 150 ساڵ تەمەنەکەیە."
    },
    category: { ar: "كريستال", en: "Crystal", ku: "کریستال" },
    priceNumber: 200000,
    price: "200,000 د.ع",
    status: "available",
    featured: false,
    auction: true,
    image: cld("hoa-08-ottoman-crystal_cb6h1c"),
    images: [cld("hoa-08-ottoman-crystal_cb6h1c")]
  },

  {
    id: "HOA-COP-009",
    name: {
      ar: "مدكة هاون أعشاب من عمل يهود العراق — نحاس ثقيل (قطعتين)",
      en: "Heavy Copper Herbal Mortar Set — Iraqi Jewish Craft (2 Pieces)",
      ku: "هاوەنی گیای دارویی مسی قورس — کاری جولەکانی عێراق (2 دانە)"
    },
    desc: {
      ar: "مدكة/مدقات نحاس عدد 2، وزن القطعة الواحدة يقارب 900 غرام، عمرها قرابة 70 سنة.",
      en: "A set of two copper mortars, each weighing approximately 900 grams, around 70 years old.",
      ku: "دوو هاوەنی مسی، هەر یەک نزیکەی 900 گرام، تەمەنیان نزیکەی 70 ساڵە."
    },
    category: { ar: "نحاس", en: "Copper", ku: "مس" },
    priceNumber: 450000,
    price: "450,000 د.ع",
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-09-brass-knockers_ysriwj"),
    images: [cld("hoa-09-brass-knockers_ysriwj")]
  },

  {
    id: "HOA-CRY-010",
    name: {
      ar: "شيشة نركيلة إيرانية — عمل قديم (طول 30 سم)",
      en: "Iranian Crystal Hookah — Antique Work (30 cm)",
      ku: "نەرجیلەی کریستالی ئێرانی — کاری کۆن (درێژی 30 سم)"
    },
    desc: {
      ar: "طقم كريستال عدد 2، طول القطعة 30 سم، عمر تقريبي 40 سنة. مناسب للديكور أو طاولة الضيافة.",
      en: "A two-piece crystal set, 30 cm in length, approximately 40 years old. Suitable for décor or hospitality tables.",
      ku: "سێتی دوو پارچەی کریستال، درێژی 30 سم، تەمەنی نزیکەی 40 ساڵ."
    },
    category: { ar: "كريستال", en: "Crystal", ku: "کریستال" },
    priceNumber: 480000,
    price: "480,000 د.ع",
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-10-crystal-set_axjhxm"),
    images: [cld("hoa-10-crystal-set_axjhxm")]
  },

  {
    id: "HOA-ART-011",
    name: {
      ar: "بورتريه تعبيري — علي نعمة (2014)",
      en: "Expressive Portrait — Ali Naama (2014)",
      ku: "پۆرتریەی دەربڕینی — عەلی نەعمة (2014)"
    },
    desc: {
      ar: "لوحة فنية أصلية من أعمال الفنان العراقي علي نعمة، منفذة عام 2014. الحالة: ممتازة.",
      en: "An original artwork by Iraqi artist Ali Naama, created in 2014. Condition: excellent.",
      ku: "تابلۆیەکی ڕەسەن لە هونەرمەندی عێراقی عەلی نەعمة، ساڵی 2014. دۆخ: زۆر باش."
    },
    category: { ar: "لوحات", en: "Paintings", ku: "تابلۆکان" },
    priceNumber: 900000,
    price: "900,000 د.ع",
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-art-011_ueojpb"),
    images: [cld("hoa-art-011_ueojpb")]
  },

  {
  id: "HOA-CRY-034",

  name: {
    ar: "فازا كريستال روسية موقّعة – رسم يدوي",
    en: "Signed Russian Hand-Painted Crystal Vase",
    ku: "فازەی کریستالی ڕووسی – وێنەی دەستی و واژۆکراو"
  },

  desc: {
    ar: "فازا كريستال روسية أصلية، عمل فني مرسوم يدويًا وموقّع من الفنان. تتميّز بزخارف فنية دقيقة منفّذة بعناية عالية، وتعكس المدرسة الفنية الروسية الكلاسيكية. قطعة نادرة ذات قيمة فنية وجمالية عالية، مناسبة للعرض المتحفي أو لمجموعات التحف الراقية.",
    en: "An original Russian crystal vase, hand-painted and signed by the artist. It features finely executed artistic motifs that reflect the classical Russian art school. A rare piece with high artistic and aesthetic value, ideal for museum display or prestigious antique collections.",
    ku: "فازەیەکی ڕەسەنی کریستالی ڕووسی، بە دەست وێنەکراو و لەلایەن هونەرمەندەکەوە واژۆکراو. نەخشەی هونەری ورد و جوانی هەیە کە قوتابی هونەری کلاسیکی ڕووس دەردەخات. پارچەیەکی دەگمەن و بەرز بەهای هونەری و جوانی، گونجاو بۆ مۆزەخانە یان کۆمەڵەی تحفە لوکس."
  },

  category: {
    ar: "كريستال",
    en: "Crystal",
    ku: "کریستال"
  },

  priceNumber: 1200000,
  price: "1,200,000 د.ع",

  status: "available",
  featured: false,
  auction: false,

  image: cld("hoa-vas-034_bhofoq"),
  images: [
    cld("hoa-vas-034_bhofoq")
  ]
},


  {
    id: "HOA-WPN-033",
    name: {
      ar: "خنجر عثماني تراثي",
      en: "Ottoman Heritage Dagger",
      ku: "خەنجەری میراثی عوسمانی"
    },
    desc: {
      ar: "قطعة تراثية من الحقبة العثمانية، بطول 40 سم، تتميّز بنصل فولاذي ومقبض مزخرف بتفاصيل تقليدية تعكس الحرفية العثمانية. تُعرض هذه القطعة لأغراض توثيقية/متحفية ضمن المجموعات التراثية.",
      en: "A heritage piece from the Ottoman era, 40 cm in length, featuring a steel blade and an ornamented handle that reflects Ottoman craftsmanship. Presented for documentary/museum display purposes within heritage collections.",
      ku: "پارچەیەکی میراثی لە قۆناغی عوسمانی، بە درێژی 40 سم، نصلێکی فولادی و دەستگرتنێکی ڕازاو هەیە کە پیشەسازی عوسمانی دەردەخات. ئەم پارچەیە بۆ مەبەستی بەڵگەنامەیی/پیشاندانی مۆزەیی لە ناو کۆمەڵە پارچە میراثییەکاندا پیشان دەدرێت."
    },
    category: { ar: "أسلحة تراثية", en: "Heritage Weapons", ku: "چەکە میراثییەکان" },
    price: "1,450,000 د.ع",
    priceNumber:1450000,
    status: "available",
    featured: true,
    auction: false,
    image: cld("hoa-trl-033_hom0i1"),
    images: [cld("hoa-trl-033_hom0i1")]
  },

  {
    id: "HOA-CER-035",
    name: {
      ar: "بيضات خزفية مزخرفة مع قواعد خشبية (عدد 3)",
      en: "Decorated Ceramic Eggs with Wooden Bases (Set of 3)",
      ku: "هێلکە خزفییە ڕازاوەکان لەگەڵ بنەمای دار (سێ دانە)"
    },
    desc: {
      ar: "مجموعة من ثلاث بيضات خزفية تراثية، مزخرفة برسومات يدوية دقيقة لطيور ونباتات، مثبتة على قواعد خشبية أصلية. يبلغ ارتفاع كل قطعة 3 سم، ويعود عمر المجموعة لأكثر من 60 عامًا. قطع صغيرة الحجم لكنها غنية بالتفاصيل، مناسبة للعرض المتحفي أو لهواة جمع التحف الدقيقة.",
      en: "A set of three heritage ceramic eggs, decorated with precise hand-painted birds and botanical motifs, mounted on original wooden bases. Each piece is 3 cm tall, and the set is over 60 years old. Small in size yet rich in detail—ideal for museum display or collectors of fine mini antiques.",
      ku: "کۆمەڵەیەک لە سێ هێلکەی خزفی میراثی، بە وێنەکاری دەستی وردی باڵندە و ڕووەک ڕازاوە و لەسەر بنەمای دارە ڕەسەنەکان جێگیرکراون. بەرزی هەر دانەیەک 3 سم ـە و تەمەنی کۆمەڵەکە زیاتر لە 60 ساڵە. بچووکە بەڵام پڕ لە وردەکاریە؛ گونجاو بۆ پیشاندانی مۆزەیی یان کۆکردنەوەی پارچەی بچووک."
    },
    category: { ar: "اعمال فنية", en: "Artworks", ku: "کارە هونەرییەکان" },
    price: "100,000 د.ع",
    priceNumber:100000,
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-trl-035_nkh634"),
    images: [cld("hoa-trl-035_nkh634")]
  },

  {
    id: "HOA-ART-027",
    name: {
      ar: "لوحة زيتية أوروبية من القرن الثامن عشر بإطار ذهبي",
      en: "18th-Century European Oil Painting with Gold Frame",
      ku: "تابلۆی نەوتی ئورووپی لە سەدەی 18 ـەوە بە چوارچێوەی زێڕین"
    },
    desc: {
      ar: "لوحة فنية نادرة تعود إلى القرن الثامن عشر، منفّذة بتقنية الزيت على الخشب، تُجسّد مشهدًا كلاسيكيًا غنيًا بالتفاصيل والحركة. مؤطّرة بإطار ذهبي فاخر يعكس أسلوب تلك الحقبة، واللوحة غير موقّعة كما هو شائع في العديد من أعمال تلك الفترة. قطعة متحفية استثنائية ذات قيمة فنية وتاريخية عالية، مناسبة للمجموعات الخاصة أو العرض المتحفي الراقي.",
      en: "A rare 18th-century artwork executed in oil on wood, depicting a classic scene rich in detail and movement. Framed in a luxurious gold frame that reflects the era’s style. The painting is unsigned, as was common for many works of that period. An exceptional museum-grade piece with high artistic and historical value.",
      ku: "تابلۆیەکی دەگمەن لە سەدەی 18 ـەوە، بە تەکنیکی نەوت لەسەر دار درووستکراوە، دیمەنێکی کلاسیکی پڕ لە وردەکاری و جوڵان پیشان دەدات. بە چوارچێوەی زێڕینی لوکس چوارچێوەکراوە کە شێوازی ئەو قۆناغە دەردەخات. تابلۆکە واژۆ نەکراوە وەک زۆر کارەکانی ئەو دەمە. پارچەیەکی مۆزەیی تایبەت بە بەهای هونەری و مێژوویی بەرز."
    },
    category: { ar: "لوحات", en: "Paintings", ku: "تابلۆکان" },
    price: "45,000,000 د.ع",
    priceNumber:45000000,
    status: "available",
    featured: true,
    auction: false,
    image: cld("hoa-art-027_nsjyh5"),
    images: [cld("hoa-art-027_nsjyh5")]
  },

  {
    id: "HOA-ELC-028",
    name: {
      ar: "مروحة كهربائية حديدية تراثية",
      en: "Heritage Iron Electric Fan",
      ku: "پەنکەی کارەبایی ئاسنی میراثی"
    },
    desc: {
      ar: "مروحة كهربائية تراثية صغيرة مصنوعة من الحديد، بارتفاع 60 سم، تعود إلى منتصف القرن العشرين، وما زالت تعمل بكفاءة. تتميّز بتصميم صناعي كلاسيكي وشفرات معدنية مع قفص حماية أصلي، وتحمل آثار الزمن التي تضيف إليها طابعًا تاريخيًا أصيلًا. قطعة نادرة تجمع بين الوظيفة والقيمة التراثية، مناسبة للعرض المتحفي أو لهواة جمع الأجهزة القديمة.",
      en: "A small heritage electric fan made of iron, 60 cm tall, dating to the mid-20th century and still working efficiently. It features a classic industrial design, metal blades, and an original protective cage, with authentic age marks that add historical character. A rare piece combining function and heritage value—ideal for museum display or collectors of vintage devices.",
      ku: "پەنکەیەکی کارەبایی میراثی بچووک لە ئاسن درووستکراوە، بە بەرزی 60 سم، لە ناوەڕاستی سەدەی 20 ـەوە و هێشتا بە باشی کار دەکات. دیزاینێکی پیشەسازی کلاسیکی، پەڕە ئاسنی و قەفەسی پاراستنی ڕەسەن هەیە، بە نیشانەکانی کات کە ڕەنگی مێژوویی دەدەات. پارچەیەکی دەگمەن بۆ پیشاندانی مۆزەیی یان کۆکردنەوەی ئامێرە کۆنەکان."
    },
    category: { ar: "أثاث  تراثي", en: "Heritage Furniture", ku: "کەلوپەلی میراثی" },
    price: "600,000 د.ع",
    priceNumber:600000,
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-trl-028_p2js0f"),
    images: [cld("hoa-trl-028_p2js0f")]
  },

  {
    id: "HOA-GRM-026",
    name: {
      ar: "كراموفون وراديو خشبي فاخر مع خزائن أسطوانات",
      en: "Luxury Wooden Gramophone & Radio with Record Cabinets",
      ku: "گرامافۆن و ڕادیۆی داری لوکس لەگەڵ دۆلابی ئاسطوانەکان"
    },
    desc: {
      ar: "كراموفون وراديو تراثي نادر مصنوع من الخشب الفاخر، يجمع بين جهاز تشغيل الأسطوانات والراديو ضمن تصميم كلاسيكي أنيق. القطعة شغّالة بالكامل، وتضم دولابين جانبيين مخصّصين لخزن الأسطوانات. يبلغ ارتفاعها 130 سم وعرضها 120 سم، وتُعد من القطع الكبيرة والفاخرة التي تعكس ذروة الحرفية والتقنيات الصوتية. قطعة استثنائية مناسبة للعرض المتحفي أو للمجموعات الخاصة الراقية.",
      en: "A rare heritage gramophone and radio crafted from luxury wood, combining record playback and radio in an elegant classic design. Fully functional, with two side cabinets for storing records. Measures 130 cm in height and 120 cm in width. A large, refined piece reflecting peak craftsmanship and audio-era design—ideal for museum display or premium private collections.",
      ku: "گرامافۆن و ڕادیۆیەکی میراثی دەگمەن لە دارێکی لوکس درووستکراوە، لە دیزاینێکی کلاسیکی جواندا یەکگرتووەی کارکردی ئاسطوانە و ڕادیۆیە. تەواو کاردەکات و دوو دۆلابی لاوەکی هەیە بۆ خەزنکردنی ئاسطوانەکان. بەرزی 130 سم و پانی 120 سم. پارچەیەکی گەورە و فاخر کە پێشەسازی بەرز و دیزاینی دەمەنگار پیشان دەدات؛ گونجاو بۆ مۆزە یان کۆمەڵە تایبەتی بەرز."
    },
    category: { ar: "كراموفون", en: "Gramophone", ku: "گرامافۆن" },
    price: "500,000 د.ع",
    priceNumber:500000,
    status: "available",
    featured: true,
    auction: false,
    image: cld("hoa-grm-026_xbttfp"),
    images: [cld("hoa-grm-026_xbttfp")]
  },

  {
    id: "HOA-FINE-029",
    name: {
      ar: "منحوتة حجرية تعبيرية مع قاعدة",
      en: "Expressive Stone Sculpture with Base",
      ku: "پەیکەرەی بەردینی دەربڕینی لەگەڵ بنەما"
    },
    desc: {
      ar: "عمل فني نحتي منفّذ من الحجر بأسلوب تعبيري، يجسّد ملامح إنسانية مجرّدة تحمل طابعًا دراميًا واضحًا. المنحوتة مثبتة على قاعدة، ويبلغ الارتفاع الكلي 30 سم. قطعة فنية قوية بصريًا تعكس حسًّا معاصرًا وتصلح للعرض المتحفي أو ضمن مجموعات الفن التشكيلي الراقية.",
      en: "A stone sculpture executed in an expressive style, presenting abstract human features with a clear dramatic character. Mounted on a base with a total height of 30 cm. A visually powerful piece with a contemporary feel, suitable for museum display or refined art collections.",
      ku: "کارێکی هونەری پەیکەرسازی لە بەرد بە شێوازی دەربڕینی، ملامحی مرۆیی بە شێوەیەکی تەجریدی و درامایی پیشان دەدات. لەسەر بنەمایەک جێگیرکراوە و بەرزی گشتی 30 سم ـە. پارچەیەکی بەهێز بە دیداری، بە هەستی هاوچەرخ و گونجاو بۆ مۆزە یان کۆمەڵە هونەری بەرز."
    },
    category: { ar: "أعمال فنية", en: "Artworks", ku: "کارە هونەرییەکان" },
    priceNumber: 1200000,
    price: "1,200,000 د.ع",
    status: "available",
    featured: true,
    auction: false,
    image: cld("hoa-fine-029_whj1lj"),
    images: [cld("hoa-fine-029_whj1lj")]
  },

  {
    id: "HOA-TRL-032",
    name: {
      ar: "تمثال رأس هيرميس كلاسيكي مع قاعدة",
      en: "Classic Hermes Bust with Base",
      ku: "سەری هێرمێس بە شێوازی کلاسیکی لەگەڵ بنەما"
    },
    desc: {
      ar: "تمثال رأس كلاسيكي مستوحى من الإله الإغريقي هيرميس، منفّذ بأسلوب نحت دقيق يبرز تفاصيل الوجه والشَعر بشكل متقن. مثبت على قاعدة رخامية تحمل اسم HERMES، ويبلغ الارتفاع الكلي 20 سم. قطعة فنية أنيقة تجمع بين الطابع التاريخي والجمالي، مناسبة للعرض المتحفي أو كعنصر ديكور فني راقٍ.",
      en: "A classic bust inspired by the Greek god Hermes, sculpted with fine craftsmanship highlighting facial and hair details. Mounted on a marble base bearing the name “HERMES,” with a total height of 20 cm. An elegant piece combining historical character and aesthetic appeal, ideal for museum display or refined artistic décor.",
      ku: "پەیکەرەی سەری کلاسیکی وەرگرتوو لە هێرمێسی یۆنانی، بە نەخشکاری ورد درووستکراوە کە وردەکاری ڕوو و قژ بە باشی دەردەخات. لەسەر بنەمای مرمەر جێگیرە و ناوی “HERMES” لەسەر بنەما نووسراوە، بەرزی گشتی 20 سم ـە. پارچەیەکی جوان کە تایبەتمەندی مێژوویی و جوانکاری تێکدەگەیەنێت، گونجاو بۆ مۆزە یان دیکۆری هونەری بەرز."
    },
    category: { ar: "اعمال فنية", en: "Artworks", ku: "کارە هونەرییەکان" },
    priceNumber: 750000,
    price: "750,000 د.ع",
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-trl-032_eitprd"),
    images: [cld("hoa-trl-032_eitprd")]
  },

  {
    id: "HOA-CRY-036",
    name: {
      ar: "طقم كريستال مرسوم يدويًا بزخارف شرقية (4 قطع)",
      en: "Hand-Painted Crystal Set with Oriental Motifs (4 Pieces)",
      ku: "سێتی کریستالی بە دەست وێنەکراو بە نەخشەی ڕۆژهەڵاتی (4 پارچە)"
    },
    desc: {
      ar: "طقم فاخر من الكريستال/الزجاج الفني يتكوّن من أربع قطع، يشمل قارورتين مزخرفتين وعلبتين بغطاء، جميعها مرسومة يدويًا بزخارف نباتية وشرقية غنية بالألوان. يتميّز الطقم بتناسق التصميم ودقة التنفيذ، ما يجعله قطعة عرض أنيقة ذات قيمة فنية عالية، مناسبة للعرض المتحفي أو للمجموعات الخاصة الراقية.",
      en: "A luxurious artistic crystal/glass set of four pieces: two decorated bottles and two lidded containers. All pieces are hand-painted with colorful floral and oriental motifs. Distinguished by design harmony and precise execution, making it an elegant display set with high artistic value—ideal for museum display or premium private collections.",
      ku: "سێتێکی لوکس لە کریستال/زجاجی هونەری پێکهاتوو لە 4 پارچە: دوو قارورەی ڕازاو و دوو قوطی بە گەپ. هەموویان بە دەست وێنەکراون بە نەخشەی ڕووەکی و ڕۆژهەڵاتی بە ڕەنگی دەوڵەمەند. بە یەکگرتوویی دیزاین و وردی جێبەجێکردن ناسراوە؛ گونجاو بۆ مۆزە یان کۆمەڵە تایبەتی بەرز."
    },
    category: { ar: "كريستال", en: "Crystal", ku: "کریستال" },
    priceNumber: 650000,
    price: "650,000 د.ع",
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-vas-036_am75wo"),
    images: [cld("hoa-vas-036_am75wo")]
  },

  {
    id: "HOA-CRY-037",
    name: {
      ar: "ثريا كريستال فاخرة بـ 8 مصابيح",
      en: "Luxury Crystal Chandelier — 8 Lights",
      ku: "چەندەلیەری کریستالی لوکس — 8 چراغ"
    },
    desc: {
      ar: "ثريا كريستال فاخرة تتكوّن من ثمانية مصابيح، تتميّز بتفاصيل زجاجية وكريستالية دقيقة وتصميم كلاسيكي راقٍ. تعكس القطعة طابع الفخامة والذوق الرفيع، وتُعد عنصرًا معماريًا بارزًا يليق بالصالات التراثية أو القاعات ذات الطابع المتحفي.",
      en: "A luxury crystal chandelier with eight lights, featuring fine glass and crystal details in a refined classic design. It reflects elegance and high taste, serving as a striking architectural piece suitable for heritage halls or museum-style interiors.",
      ku: "چەندەلیەریەکی لوکسی کریستال بە 8 چراغ، بە وردەکاری شفاف و کریستالی و دیزاینێکی کلاسیکی بەرز. پارچەکە فخامة و سەلیقەی بەرز پیشان دەدات و وەک توخمێکی ئەرکیتێکتووری دیار لە هۆڵە میراثییەکان یان شوێنە مۆزەییەکاندا گونجاوە."
    },
    category: { ar: "كريستال", en: "Crystal", ku: "کریستال" },
    price: "3,000,000 د.ع",
    priceNumber: 3000000,
    status: "available",
    featured: true,
    auction: false,
    image: cld("hoa-cry-037_izuykb"),
    images: [cld("hoa-cry-037_izuykb"), cld("hoa-cry-037-1_tgglcx")]
  },

  {
    id: "HOA-COP-037",
    name: {
      ar: "إبريق نحاسي تراثي مزخرف يدويًا",
      en: "Hand-Decorated Heritage Copper Pitcher",
      ku: "ئیبریگی مسی میراثی ـ بە دەست ڕازاو"
    },
    desc: {
      ar: "إبريق نحاسي تراثي منفّذ بنقوش يدوية دقيقة تغطي البدن بالكامل، يتميّز بعنق طويل ومصبّ منحني ومقبض جانبي أنيق. يعكس أسلوب الصناعة التقليدية وثراء الزخرفة الشرقية، ما يجعله قطعة عرض متحفية مميّزة أو عنصر ديكور فاخر لهواة التحف النحاسية.",
      en: "A heritage copper pitcher covered with fine hand-made engravings across the body. It features a long neck, curved spout, and an elegant side handle. Reflecting traditional craftsmanship and rich oriental ornamentation, it makes a distinctive museum display piece or a luxury décor element for copper antique collectors.",
      ku: "ئیبریگێکی میراثی مسی بە نەخشکاری دەستی ورد کە تەواوی جەستەکە دەگرێتەوە. گردنی درێژ، دەریچەی خوار و دەستگرتنی لاوەکی جوان هەیە. پیشەسازی نەریتیدا و دەوڵەمەندی ڕازاوکاری ڕۆژهەڵاتی پیشان دەدات؛ پارچەیەکی مۆزەیی تایبەت یان دیکۆری لوکس بۆ هەواڵگری پارچەی مسی."
    },
    category: { ar: "نحاسيات", en: "Copperware", ku: "پارچەی مسی" },
    price: "150,000 د.ع",
    priceNumber:150000,
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-cop-037_ohqzfa"),
    images: [cld("hoa-cop-037_ohqzfa")]
  },

  {
    id: "HOA-BOX-043",
    name: {
      ar: "صندوق هندي خشبي مطعّم بالنحاس اليدوي",
      en: "Indian Wooden Chest Inlaid with Handworked Copper",
      ku: "سندوقی هندی لە دار ـ بە مسی دەستی ڕەنگاو"
    },
    desc: {
      ar: "صندوق تراثي هندي مصنوع من الخشب ومطعّم بالنحاس اليدوي بزخارف هندسية ونباتية دقيقة. يتميّز بواجهة غنية بالتفاصيل مع مقابض وأقفال نحاسية، ومثبت على أرجل خشبية تمنحه حضورًا أنيقًا. يبلغ ارتفاعه 50 سم وعرضه 120 سم، ويصلح للاستخدام كقطعة تخزين تراثية أو كعنصر ديكور فاخر في المساحات الكلاسيكية.",
      en: "A heritage Indian wooden chest inlaid with handworked copper featuring fine geometric and floral motifs. It has a richly detailed front, copper handles and locks, and stands on wooden legs for an elegant presence. Measures 50 cm in height and 120 cm in width—ideal as a heritage storage piece or a luxury décor element in classic interiors.",
      ku: "سندوقێکی میراثی هندی لە دار درووستکراوە و بە مسی دەستی ڕەنگاوە بە نەخشەی هندەسی و ڕووەکی ورد. پێشەوەیەکی پڕ لە وردەکاری هەیە لەگەڵ دەستگرتن و قوفلی مسی، و لەسەر پێی داری جێگیرە بۆ دەرکەوتنی جوان. بەرزی 50 سم و پانی 120 سم ـە؛ گونجاو وەک پارچەی خەزنکردن یان دیکۆری لوکس لە شوێنە کلاسیکییەکان."
    },
    category: { ar: "صندوق", en: "Box / Chest", ku: "سندوق" },
    priceNumber: 1700000,
    price: "1,700,000د.ع",
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-box-043_qiws3e"),
    images: [cld("hoa-box-043_qiws3e")]
  },

  {
    id: "HOA-ART-044",
    name: {
      ar: "لوحة أهوار العراق مؤطرة بإطار برونزي",
      en: "Iraq Marshlands Painting with Bronze Frame",
      ku: "تابلۆی هۆورەکانی عێراق بە چوارچێوەی برۆنز"
    },
    desc: {
      ar: "لوحة فنية تجسّد مشهدًا من أهوار العراق، تعكس الطابع الهادئ والطبيعة المائية المميّزة للمنطقة مع تفاصيل بصرية شاعرية. اللوحة مؤطّرة بإطار برونزي أنيق يضيف لها حضورًا كلاسيكيًا راقيًا. يبلغ ارتفاعها 100 سم وعرضها 150 سم، ويعود عمرها إلى نحو 30 عامًا، ما يجعلها قطعة فنية وثائقية وثقافية مناسبة للعرض المتحفي أو للمساحات التراثية الراقية.",
      en: "An artwork portraying a scene from Iraq’s Marshlands, capturing the calm atmosphere and the region’s distinctive watery nature with poetic visual details. Framed in an elegant bronze frame that adds a refined classic presence. Size: 100 cm (H) × 150 cm (W), approximately 30 years old—making it a documentary and cultural piece suitable for museum display or refined heritage spaces.",
      ku: "تابلۆیەکی هونەری کە دیمەنێک لە هۆورەکانی عێراق پیشان دەدات، ئارامی و سروشتی ئاویەتی تایبەتی ناوچەکە لەگەڵ وردەکاری شاعیرانە دەگرێتەوە. بە چوارچێوەی برۆنزی جوان چوارچێوەکراوە کە دەرکەوتنی کلاسیکی بەرز دەدات. قەبارە: 100 سم بەرزی × 150 سم پانی، تەمەنی نزیکەی 30 ساڵ؛ پارچەیەکی بەڵگەنامەیی و کەلتووری گونجاو بۆ مۆزە یان شوێنە میراثییەکان."
    },
    category: { ar: "لوحات", en: "Paintings", ku: "تابلۆکان" },
    price: "3,000,000 د.ع",
    priceNumber:3000000,
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoa-art-044_twyquf"),
    images: [cld("hoa-art-044_twyquf")]
  },

  {
    id: "HOA-WOD-045",
    name: {
      ar: "طقم طاولات خشبية (3 قطع)",
      en: "Wooden Table Set (3 Pieces)",
      ku: "سێتی مێزی دار (٣ پارچە)"
    },
    desc: {
      ar: "طقم عملي مكوّن من ثلاث طاولات...",
      en: "A practical wooden table set consisting of three pieces...",
      ku: "سێتێکی کارامە..."
    },
category: { ar: "أثاث", en: "Furniture", ku: "کەلوپەلی ناوماڵ" },
    priceNumber: 300000,
    price: "300,000 د.ع",
    status: "available",
    featured: false,
    auction: false,
    image: cld("hoh-wood-045_czwfhh"),
    images: [cld("hoh-wood-045_czwfhh")]
  },
{
  id: "HOA-slv-012",

  name: {
    ar: "سِيت نحاس تراثي (3 قطع) — نقش يدوي",
    en: "Heritage Copper Set (3 Pieces) — Hand Engraved",
    ku: "کۆمەڵەی نەحاسی میراثی (٣ پارچە) — دەست‌نەخشکراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price: "200,000 د.ع",
  priceNumber: 200000,

  desc: {
    ar: "سِيت نحاس تراثي مكوّن من ثلاث قطع أصلية، يعود عمرها لأكثر من 60 عامًا، منفّذة بالكامل بنقش يدوي تقليدي يعكس الحرفية المحلية والطابع التراثي للقطع النحاسية المستخدمة في البيوت العراقية القديمة. تصلح للعرض المتحفي أو كقطعة ديكور تراثية مميزة.",
    
    en: "A heritage copper set consisting of three original pieces, dating back more than 60 years. Entirely hand-engraved using traditional techniques that reflect local craftsmanship and the authentic character of copperware once used in old Iraqi homes. Ideal for museum display or as a distinctive heritage décor piece.",
    
    ku: "کۆمەڵەیەکی نەحاسی میراثی پێکهاتوو لە سێ پارچەی ڕەسەن، زیاتر لە ٦٠ ساڵ تەمەن هەیە. بە تەواوی بە شێوازی دەست‌نەخشکردنی کۆن دروستکراوە کە پیشەسازی ناوخۆیی و ڕەنگی میراثی پارچە نەحاسییەکانی ماڵە کۆنە عێراقییەکان پیشان دەدات. گونجاوە بۆ پیشاندانی مۆزەیی یان وەک پارچەیەکی دیکۆری میراثی تایبەت."
  },

  images: [
    cld("hoa-slv-012_xgwe2n")
  ],
  image: cld("hoa-slv-012_xgwe2n"),

  featured: false,
  createdAt: "1960-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-ART-013",

  name: {
    ar: "تكوين إنساني — برونز",
    en: "Human Composition — Bronze",
    ku: "پێکهاتەی مرۆیی — برۆنز"
  },

  category: {
    ar: "أعمال فنية",
    en: "Artworks",
    ku: "کاری هونەری"
  },

  price:"1,650,000 د.ع",
  priceNumber:1650000,

  desc: {
    ar: "عمل نحتي تجريدي منفّذ من البرونز، يجسّد تكوينًا إنسانيًا بأسلوب فني حديث يعكس التعبير الرمزي والبُعد الإنساني في النحت المعاصر. قطعة مميزة للعرض الفني أو المجموعات الخاصة.",
    en: "An abstract bronze sculpture representing a human composition, executed in a modern artistic style that reflects symbolic expression and the human dimension in contemporary sculpture. A distinctive piece suitable for art display or private collections.",
    ku: "کاری پەیکەرتەیەکی ئەبستراکت دروستکراو لە برۆنز، کە پێکهاتەیەکی مرۆیی بە شێوازی هونەری نوێ پیشان دەدات و دەربڕینی ڕەمزی و دووری مرۆیی لە پەیکەرتەسازی هاوچەرخ نیشان دەدات. پارچەیەکی تایبەت بۆ پیشاندانی هونەری یان کۆمەڵگە تایبەتییەکان."
  },

  images: [cld("hoa-art-013_tb2uby")],
  image: cld("hoa-art-013_tb2uby"),
  featured: true,
  createdAt: "1985-01-01",
  status: "available",
  auction: true
},
{
  id: "HOA-VAS-014",

  name: {
    ar: "فازة فخار منقوشة يدويًا — تراثية",
    en: "Hand-Engraved Pottery Vase — Heritage",
    ku: "فازەی فەخار دەست‌نەخشکراو — میراثی"
  },

  category: {
    ar: "فازات",
    en: "Vases",
    ku: "فازەکان"
  },

  price: "150.000 د.ع",
  priceNumber:150000,

  desc: {
    ar: "فازة فخارية تراثية مصنوعة يدويًا، مزخرفة بنقوش تقليدية تعكس الحِرف الشعبية القديمة. الطول: 60 سم. الحالة: جيدة جدًا.",
    en: "A handmade heritage pottery vase decorated with traditional engravings that reflect old folk craftsmanship. Height: 60 cm. Condition: very good.",
    ku: "فازەیەکی فەخاری میراثی بە دەست دروستکراو، بە نەخشەی نەریتی ڕازێنراو کە پیشەسازی گەلەکانی کۆن پیشان دەدات. بەرزی: ٦٠ سم. دۆخ: زۆر باش."
  },

  images: [cld("hoa-vas-014_gus7bf")],
  image: cld("hoa-vas-014_gus7bf"),
  featured: true,
  createdAt: "1975-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-TRL-015",

  name: {
    ar: "مكِنة خياطة «الفراشة» — خمسينات القرن الماضي",
    en: "“Butterfly” Sewing Machine — 1950s",
    ku: "ئامێری دوورینی «فڕۆکە» — ساڵانی ١٩٥٠"
  },

  category: { ar: "أثاث", en: "Furniture", ku: "کەلوپەلی ناوماڵ" },

  price: "300,000 د.ع",
  priceNumber: 300000,

  desc: {
    ar: "مكِنة خياطة تراثية معروفة باسم «الفراشة»، تعود إلى خمسينات القرن الماضي، كانت مستخدمة على نطاق واسع في البيوت العراقية. الحالة: جيدة جدًا.",
    en: "A heritage sewing machine known as the “Butterfly,” dating back to the 1950s. Widely used in Iraqi households at the time. Condition: very good.",
    ku: "ئامێری دوورینی میراثی ناسراو بە ناوی «فڕۆکە»، کە بۆ ساڵانی ١٩٥٠ دەگەڕێتەوە و بە شێوەیەکی فراوان لە ماڵە عێراقییەکان بەکاردەهاتوو. دۆخ: زۆر باش."
  },

  images: [cld("hoa-trl-015_jdsh0y")],
  image: cld("hoa-trl-015_jdsh0y"),
  featured: false,
  createdAt: "1955-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-ART-016",

  name: {
    ar: "من التراث الريفي",
    en: "From Rural Heritage",
    ku: "لە میراثی گوندی"
  },

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  price: "9,999,000 د.ع",
  priceNumber: 9999000,

  desc: {
    ar: "لوحة فنية تجسّد مشهد البايطار في بيئة ريفية، تعكس تفاصيل الحياة اليومية والتراث الشعبي بأسلوب واقعي تعبيري. الحالة: جيدة جدًا.",
    en: "An artistic painting depicting a farrier scene in a rural setting, reflecting daily life and folk heritage through a realistic expressive style. Condition: very good.",
    ku: "تابلۆیەکی هونەری کە دیمەنێکی بايتار لە ژینگەیەکی گوندی پیشان دەدات، ژیانی ڕۆژانە و میراثی گەلەکی بە شێوازی ڕاستەقینە و دەربڕینەوە نیشان دەدات. دۆخ: زۆر باش."
  },

  images: [cld("hoa-art-016_eoes2k")],
  image: cld("hoa-art-016_eoes2k"),
  featured: false,
  createdAt: "2005-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-ART-017",

  name: {
    ar: "لوحة أوروبية مؤطرة مع شمعدانات برونزية فكتورية",
    en: "Framed European Painting with Victorian Bronze Candelabras",
    ku: "تابلۆی ئەوروپی چوارچێوەکراو لەگەڵ شەمعدانە برۆنزییە فکتۆرییەکان"
  },

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  price: "4,500,000 د.ع",
  priceNumber: 4500000,

  desc: {
    ar: "لوحة أوروبية قديمة تجسّد مشهدًا بحريًا تاريخيًا، رسم يدوي لفنان إيطالي، مؤطرة بإطار سيراميك كلاسيكي فاخر ومرفقة بشمعدانات برونزية فكتورية. العمر: أكثر من 80 سنة. الحالة: جيدة جدًا نسبةً لعمر القطعة.",
    en: "An old European painting depicting a historical maritime scene, hand-painted by an Italian artist, framed in a luxurious classical ceramic frame and accompanied by Victorian bronze candelabras. Age: over 80 years. Condition: very good considering its age.",
    ku: "تابلۆیەکی کۆنی ئەوروپی کە دیمەنێکی دەریایی مێژوویی پیشان دەدات، بە دەست هونەرمەندێکی ئیتاڵیایی ڕەسراوە، لە چوارچێوەیەکی سێرامیکی کلاسیکی فاخر و لەگەڵ شەمعدانە برۆنزییە فکتۆرییەکان. تەمەن: زیاتر لە ٨٠ ساڵ. دۆخ: زۆر باش بە پێی تەمەنی پارچەکە."
  },

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
    name: {
      ar: "لوحة زينة على كانفاس",
      en: "Decorative Canvas Painting",
      ku: "تابلۆی ڕازاندن لە کانڤاس"
    },
    category: {
      ar: "لوحات",
      en: "Paintings",
      ku: "تابلۆکان"
    },
    price: "750,000 د.ع",
    priceNumber: 750000,
    desc: {
      ar: "لوحة أنتيكة قديمة منفذة على قماش كانفاس، تعود لأكثر من 60 سنة، تعكس الطابع الكلاسيكي والذوق الفني الهادئ، مناسبة للعرض في المساحات التراثية أو الفنية.",
      en: "An old antique painting executed on canvas, dating back over 60 years. It reflects a classical character and calm artistic taste, suitable for heritage or artistic spaces.",
      ku: "تابلۆیەکی کۆن و ئەنتیک لەسەر کانڤاس دروستکراو، زیاتر لە ٦٠ ساڵ تەمەن هەیە و ڕەنگی کلاسیکی و هەستی هونەری ئارام پیشان دەدات، گونجاوە بۆ شوێنە میراثییەکان."
    },
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
    name: {
      ar: "فازة فضة منقوشة يدويًا",
      en: "Hand-Engraved Silver Vase",
      ku: "فازەی زیوی دەست‌نەخشکراو"
    },
    category: {
      ar: "فازات",
      en: "Vases",
      ku: "فازەکان"
    },
    price: "250,000 د.ع",
    priceNumber: 250000,
    desc: {
      ar: "فازة فضة أنتيكة منقوشة بنقوش يدوية دقيقة، يتجاوز عمرها 100 سنة، تعكس الحِرفية العالية والذوق الكلاسيكي الراقي.",
      en: "An antique silver vase engraved with fine hand-made details, over 100 years old, reflecting high craftsmanship and refined classical taste.",
      ku: "فازەیەکی زیوی ئەنتیک بە نەخشەی وردی دەستی ڕازێنراو، زیاتر لە ١٠٠ ساڵ تەمەن هەیە و پیشەسازی بەرز و ذوقی کلاسیکی پیشان دەدات."
    },
    images: [cld("hoa-slv-019_edqkvu")],
    image: cld("hoa-slv-019_edqkvu"),
    featured: true,
    createdAt: "1920-01-01",
    status: "available",
    auction: false
  },
  {
  id: "HOA-BRZ-022",
  name: {
    ar: "سيت هندي مرسوم يدويًا",
    en: "Hand-Painted Indian Decorative Set",
    ku: "سێتی هەندی بە دەست ڕەسراو"
  },
  category: {
    ar: "عمل فني",
    en: "Fine Art",
    ku: "هونەری باڵا"
  },
  price: "1,200,000 د.ع",
  priceNumber: 1200000,
  desc: {
    ar: "سيت هندي أنتيك مرسوم يدويًا، يتميز بزخارف دقيقة مستوحاة من الفن التقليدي الهندي، قطعة ذات طابع فني وتراثي راقٍ، مناسبة للعرض المتحفي أو كعنصر ديكور فاخر.",
    en: "An antique Indian decorative set, hand-painted with fine details inspired by traditional Indian art. A refined heritage art piece suitable for museum display or luxury décor.",
    ku: "سێتی هەندی کۆن بە دەست ڕەسراو، بە وردەکاری هونەری هەندییە نەریتییەکان ڕازێنراوە، پارچەیەکی هونەری فاخر بۆ مۆزە یان دیكۆری تایبەتی."
  },
  images: [cld("hoa-brz-022_pyju1k")],
  image: cld("hoa-brz-022_pyju1k"),
  featured: false,
  createdAt: "1950-01-01",
  status: "available",
  auction: false
},

  {
    id: "HOA-WOOD-020",
    name: {
      ar: "قطعة خشبية عراقية جدارية",
      en: "Iraqi Wooden Wall Piece",
      ku: "پارچەی دارێکی دیواری عێراقی"
    },
    category: {
      ar: "خشب",
      en: "Wood",
      ku: "دار"
    },
    price: "-",
    desc: {
      ar: "عمل خشبي عراقي أنتيكة منفذ يدويًا، يحمل طابعًا تراثيًا واضحًا. الارتفاع: حوالي 150 سم. الحالة: جيدة جدًا نسبةً لعمر القطعة.",
      en: "An antique Iraqi wooden wall piece handcrafted with a strong heritage character. Height: approx. 150 cm. Condition: very good for its age.",
      ku: "پارچەیەکی دارێکی عێراقی ئەنتیک بە دەست دروستکراو، ڕەنگی میراثی ڕوون هەیە. بەرزی: نزیکەی ١٥٠ سم. دۆخ: زۆر باش."
    },
    images: [cld("hoa-wod-024-1_jksqwn")],
    image: cld("hoa-wod-024-1_jksqwn"),
    featured: false,
    createdAt: "1940-01-01",
    status: "available",
    auction: false
  },
   {
    id: "HOA-SAM-021",
    name: {
      ar: "سماور روسي أنتيكة",
      en: "Antique Russian Samovar",
      ku: "ساماوەری ڕووسی ئەنتیک"
    },
    category: {
      ar: "سماور",
      en: "Samovar",
      ku: "ساماوەر"
    },
    price: "1,700,000د.ع",
    priceNumber: 1700000,
    desc: {
      ar: "سماور روسي أنتيكة مصنوع من المعدن المصقول، يعود لبدايات القرن العشرين. الحالة: جيدة جدًا نسبةً لعمرها.",
      en: "An antique Russian samovar made of polished metal, dating back to the early 20th century. Condition: very good for its age.",
      ku: "ساماوەری ڕووسی ئەنتیک لە کانزای پۆڵیشکراو دروستکراو، بۆ سەرەتای سەدەی بیستەم دەگەڕێتەوە. دۆخ: زۆر باش."
    },
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
    name: {
      ar: "صندوق نحاس أنتيكة مزخرف",
      en: "Ornate Antique Copper Box",
      ku: "سندوقی نەحاسی ئەنتیک ڕازێنراو"
    },
    category: {
      ar: "صناديق",
      en: "Boxes",
      ku: "سندوقەکان"
    },
    price: "750,000د.ع",
    priceNumber: 750000,
    desc: {
      ar: "صندوق نحاس أنتيكة مزخرف بنقوش معدنية تقليدية، قطعة تراثية مميزة. الحالة: جيدة جدًا نسبةً لعمر القطعة.",
      en: "An antique copper box decorated with traditional metal engravings, a distinctive heritage piece. Condition: very good for its age.",
      ku: "سندوقێکی نەحاسی ئەنتیک بە نەخشەی کانزایی نەریتی ڕازێنراو، پارچەیەکی میراثی تایبەت."
    },
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
    name: {
      ar: "مصباح كريستال أنتيكة متعدد الأضواء",
      en: "Multi-Light Antique Crystal Lamp",
      ku: "چرای کریستاڵی ئەنتیک بە چەند ڕووناکی"
    },
    category: {
      ar: "كريستال",
      en: "Crystal",
      ku: "کریستاڵ"
    },
    price: "1,400,000د.ع",
    priceNumber:1400000,
    desc: {
      ar: "مصباح كريستال أنتيكة مزود بعدة أضواء كهربائية، يعكس الفخامة والطابع الكلاسيكي. الحالة: جيدة جدًا نسبةً لعمر القطعة.",
      en: "An antique crystal lamp equipped with multiple electric lights, reflecting luxury and classical elegance. Condition: very good for its age.",
      ku: "چرایەکی کریستاڵی ئەنتیک بە چەند ڕووناکی کارەبایی، ڕەنگی فەخامەت و شێوازی کلاسیکی پیشان دەدات."
    },
    images: [
      cld("hoa-cry-023_cj8fcl"),
      cld("hoa-cry-023_cj8fcl")
    ],
    image: cld("hoa-cry-023_cj8fcl"),
    featured: true,
    createdAt: "1940-01-01",
    status: "token",
    auction: false
  },

  {
    id: "HOA-SLV-025",
    name: {
      ar: "حمالة ورود فضة — سيت من 3 قطع",
      en: "Silver Flower Holders — Set of 3",
      ku: "هەڵگری گوڵی زیو — سێ پارچە"
    },
    category: {
      ar: "فضة",
      en: "Silver",
      ku: "زیو"
    },
    price: "2,000,000",
    priceNumber: 2000000,
    desc: {
      ar: "سيت أنيق من ثلاث حمالات ورود مصنوعة من الفضة، قطعة مثالية للديكور الكلاسيكي أو الطاولات الجانبية.",
      en: "An elegant set of three silver flower holders, ideal for classic décor or side tables.",
      ku: "سێتێکی جوان لە سێ هەڵگری گوڵی زیوی، گونجاوە بۆ دیکۆری کلاسیکی یان مێزە لاوەکییەکان."
    },
    images: [cld("hoa-slv-24_srmswp")],
    image: cld("hoa-slv-24_srmswp"),
    featured: false,
    createdAt: "1985-01-01",
    status: "available",
    auction: false
  },
  {
  id: "HOA-SLV-031",

  name: {
    ar: "فازة فضة بنقوش يدوية تاريخية",
    en: "Silver Vase with Historical Hand Engravings",
    ku: "فازەی زیو بە نەخشە دەستییە مێژووییەکان"
  },

  category: {
    ar: "فازات",
    en: "Vases",
    ku: "فازەکان"
  },

  price: "350,000د.ع",
  priceNumber:350000,

  desc: {
    ar: "فازة مصنوعة من الفضة، مزخرفة بنقوش يدوية دقيقة تحاكي مشاهد تاريخية وشخصيات محفورة بعناية عالية. تتميز بتفاصيل بارزة وأسلوب كلاسيكي يعكس الحرفية التقليدية، ما يجعلها قطعة فنية نادرة تصلح للعرض المتحفي أو كقطعة ديكور فاخرة ذات قيمة تراثية.",
    en: "A silver vase decorated with fine hand engravings depicting historical scenes and carefully carved figures. It features pronounced details and a classical style that reflects traditional craftsmanship, making it a rare artistic piece suitable for museum display or luxurious heritage décor.",
    ku: "فازەیەکی زیو بە نەخشە دەستییە وردەکان ڕازێنراو کە دیمەنە مێژووییەکان و کەسایەتییە تاقیکراوەکان پیشان دەدات. بە وردەکارییە دەربڕاوەکان و شێوازی کلاسیکی ناسراوە کە پیشەسازی نەریتی پیشان دەدات، بۆیە گونجاوە بۆ پیشاندانی مۆزەیی یان دیکۆری فەخمی میراثی."
  },

  images: [
    cld("hoa-slv-031_bbocnr")
  ],
  image: cld("hoa-slv-031_bbocnr"),

  featured: true,
  createdAt: "1970-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-TRL-037",

  name: {
    ar: "مدخل كونسول خشبي — مع كرسيين",
    en: "Wooden Console Entrance Set — with Two Chairs",
    ku: "کۆنسوڵی دارێکی دەرچوون — لەگەڵ دوو کورسی"
  },

  category: {
    ar: "أثاث تراثي",
    en: "Heritage Furniture",
    ku: "کەلوپەلی میراثی"
  },

  price: "1,500,000 د.ع",
  priceNumber: 1500000,

  desc: {
    ar: "جلسة تراثية فاخرة تتكوّن من طاولة خشبية منحوتة يدويًا وكرسيين بتفاصيل زخرفية دقيقة، تتكامل مع سجادة جدارية مزخرفة بنقوش مستوحاة من التراث الشرقي. تعكس القطعة روح الفخامة والحرفية التقليدية، وتُعد مثالية للعرض المتحفي أو لإضفاء طابع تاريخي راقٍ على المساحات الداخلية.",
    en: "A luxurious heritage seating set consisting of a hand-carved wooden table and two chairs with fine ornamental details, complemented by a decorative wall tapestry inspired by Eastern heritage motifs. The piece reflects elegance and traditional craftsmanship, making it ideal for museum display or for adding a refined historical character to interior spaces.",
    ku: "دانیشتنێکی میراثی فەخمی پێکهاتوو لە مێزێکی دارێکی دەست‌نەخشکراو و دوو کورسی بە وردەکارییە ڕازێنراوەکان، لەگەڵ فرشی دیواری ڕازێنراو بە نەخشەی وەرگرتوو لە میراثی ڕۆژهەڵات. ئەم پارچەیە ڕووحی فەخامەت و پیشەسازی نەریتی پیشان دەدات و گونجاوە بۆ پیشاندانی مۆزەیی یان بۆ دروستکردنی هەستی مێژوویی بەرز لە شوێنە ناوخۆییەکان."
  },

  images: [
    cld("hoa-trl-037_lqn2es")
  ],
  image: cld("hoa-trl-037_lqn2es"),

  featured: true,
  createdAt: "1960-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-030",

  name: {
    ar: "وعاء نحاسي بنقوش يدوية تراثية",
    en: "Heritage Copper Bowl with Hand Engravings",
    ku: "قاپی نەحاسی میراثی بە نەخشە دەستییەکان"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price: "1,200,000 د.ع",
  priceNumber: 1200000,

  desc: {
    ar: "وعاء نحاسي تراثي مزخرف بنقوش يدوية دقيقة، يعود تاريخه لأكثر من 80 عامًا. يتميّز بتفاصيل نباتية محفورة بعناية عالية ومقبضين جانبيين، ما يعكس الحرفية التقليدية في صناعة النحاس. قطعة أصيلة تحمل طابعًا تاريخيًا واضحًا، مناسبة للعرض المتحفي أو للاستخدام كفازة ديكورية فاخرة.",
    en: "A heritage copper bowl decorated with fine hand engravings, dating back over 80 years. It features carefully carved botanical details and two side handles, reflecting traditional copper craftsmanship. An authentic piece with a strong historical character, suitable for museum display or as a luxurious decorative vase.",
    ku: "قاپێکی نەحاسی میراثی بە نەخشەی دەستی ورد ڕازێنراو، زیاتر لە ٨٠ ساڵ تەمەن هەیە. بە وردەکارییە گیایینەکان و دوو دەستەواژەی لاوەکی ناسراوە کە پیشەسازی نەریتی لە دروستکردنی نەحاس پیشان دەدات. پارچەیەکی ڕەسەن بە تایبەتمەندییەکی مێژوویی ڕوون، گونجاوە بۆ پیشاندانی مۆزەیی یان بەکارهێنانی وەک فازەیەکی دیکۆری فەخمی."
  },

  images: [
    cld("hoa-slv-030_mdcjln")
  ],
  image: cld("hoa-slv-030_mdcjln"),

  featured: false,
  createdAt: "1940-01-01",
  status: "available",
  auction: false
},
{
  id: "hoa-cop-061_cthzws",

  name: {
    ar: "ميدالية برونزية عسكرية داخل علبة أصلية",
    en: "Military Bronze Medal in Original Case",
    ku: "میداڵیای سەربازی برۆنزی لە ناو قاپی ڕەسەن"
  },

  category: {
    ar: "ميداليات ونياشين",
    en: "Medals & Insignia",
    ku: "میداڵیا و نیشانەکان"
  },

  price: "75,000",
  priceNumber: 75000,

  desc: {
    ar: "ميدالية برونزية أصلية تحمل رمز النسر، محفوظة داخل علبتها الأصلية ذات البطانة المخملية. قطعة تاريخية ذات طابع رسمي، تعكس حقبة عسكرية أو تكريمية، مناسبة للعرض المتحفي أو لهواة اقتناء النياشين والقطع التوثيقية.",
    en: "An original bronze medal bearing an eagle emblem, preserved inside its original velvet-lined case. A historical piece with a formal character, reflecting a military or honorary period, suitable for museum display or for collectors of medals and commemorative artifacts.",
    ku: "میداڵیایەکی برۆنزی ڕەسەن بە هێمای هەڵقەوتی هەڵۆ، پارێزراوە لە ناو قاپی ڕەسەنی خۆی بە ئاسترێکی مەخمەلی. پارچەیەکی مێژوویی بە تایبەتمەندی فەرمی کە سەردەمی سەربازی یان پێزانینی پیشان دەدات، گونجاوە بۆ پیشاندانی مۆزەیی یان بۆ کۆمەڵکارانی میداڵیا و پارچە تووثیقییەکان."
  },

  material: {
    ar: "برونز",
    en: "Bronze",
    ku: "برۆنز"
  },

  condition: {
    ar: "حالة جيدة جداً",
    en: "Very Good Condition",
    ku: "دۆخی زۆر باش"
  },

  images: [
    cld("hoa-cop-061_cthzws")
  ],
  image: cld("hoa-cop-061_cthzws"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-cop-062",

  name: {
    ar: "زوج مدقّات باب نحاسية تراثية",
    en: "Pair of Heritage Copper Door Knockers",
    ku: "دوو مدقەی دەرگای نەحاسی میراثی"
  },

  category: {
    ar: "نحاس ",
    en: "copper",
    ku: "مس"
  },

  price: "150,000 د.ع",
  priceNumber: 150000,

  desc: {
    ar: "زوج مدقّات باب نحاسية أصلية يزيد عمرها عن 120 عاماً، تتميز بزخارف كلاسيكية مصبوبة بعناية مع حلقة دائرية وقاعدة زخرفية أنيقة. كانت تُستخدم في الأبواب الخشبية الكبيرة للمنازل التراثية، وتُعد اليوم قطعة نادرة ذات قيمة تاريخية وجمالية عالية، مثالية للعرض المتحفي أو لإعادة توظيفها في أبواب تراثية فاخرة.",
    en: "An original pair of copper door knockers over 120 years old, featuring carefully cast classical ornamentation with circular rings and elegant decorative bases. Traditionally used on large wooden doors of heritage homes, they are now rare pieces of high historical and aesthetic value, ideal for museum display or for reuse on luxurious heritage doors.",
    ku: "دوو مدقەی دەرگایەکی نەحاسی ڕەسەن کە زیاتر لە ١٢٠ ساڵ تەمەن هەیە، بە نەخشە کلاسیکییەکان و هەڵقەی بازنەیی و بنکەی ڕازێنراو دروستکراون. لە دەرگاکانی دارە گەورەکانی ماڵە میراثییەکان بەکاردەهاتن، و ئەمڕۆ پارچەیەکی دەگمەن بە نرخ و جوانی مێژوویی بەرزن، گونجاوە بۆ پیشاندانی مۆزەیی یان بەکارهێنانی دوبارە لە دەرگای میراثی فەخمی."
  },

  material: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  age: {
    ar: "أكثر من 120 سنة",
    en: "Over 120 years old",
    ku: "زیاتر لە ١٢٠ ساڵ"
  },

  condition: {
    ar: "حالة جيدة جداً مع آثار تقادم طبيعية",
    en: "Very good condition with natural signs of aging",
    ku: "دۆخی زۆر باش لەگەڵ نیشانەی تەمەنەی سرووشتی"
  },

  images: [
    cld("hoa-cop-061_knrhua")
  ],
  image: cld("hoa-cop-061_knrhua"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-trl-062_dmaepm",

  name: {
    ar: "زجاجة عصر نسائية مزخرفة",
    en: "Decorative Women's Antique Glass Bottle",
    ku: "قوڵکەی شیشەی ژنانی کۆن ڕازێنراو"
  },

  category: {
    ar: "زجاجيات",
    en: "Glassware",
    ku: "شیشەکان"
  },

  price: "65,000",
  priceNumber: 65000,

  desc: {
    ar: "زجاجة نسائية من عصر قديم مصنوعة من الزجاج، كانت تُستخدم لحفظ العطور أو مستحضرات الزينة. تتميز بشكلها الأنيق وطابعها الكلاسيكي الذي يعكس ذوق المرأة في تلك الحقبة. قطعة نادرة تضيف بعداً أنثوياً وتاريخياً لأي مجموعة متحفية أو عرض تراثي.",
    en: "A women's glass bottle from an earlier era, traditionally used to store perfumes or cosmetic items. It features an elegant form and a classical character that reflects feminine taste of the period. A rare piece that adds a feminine and historical dimension to museum collections or heritage displays.",
    ku: "قوڵکەیەکی شیشەی ژنانی لە سەردەمێکی کۆن، کە بۆ هەڵگرتنی عەطر یان ئامرازەکانی جوانکاری بەکاردەهات. شێوەی جوان و شێوازی کلاسیکی هەیە کە ذوقی ژنانی ئەو سەردەمە پیشان دەدات. پارچەیەکی دەگمەنە کە دووری ژنانی و مێژوویی بۆ هەر کۆمەڵەیەکی مۆزەیی یان پیشاندانی میراثی زیاد دەکات."
  },

  material: {
    ar: "زجاج",
    en: "Glass",
    ku: "شیشە"
  },

  condition: {
    ar: "حالة جيدة جداً مع آثار تقادم طبيعية",
    en: "Very good condition with natural signs of aging",
    ku: "دۆخی زۆر باش لەگەڵ نیشانەی تەمەنەی سرووشتی"
  },

  images: [
    cld("hoa-trl-062_dmaepm")
  ],
  image: cld("hoa-trl-062_dmaepm"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-vas-065_zmxkpy",

  name: {
    ar: "فازة زجاجية فنية منفـوخة يدوياً",
    en: "Hand-Blown Artistic Glass Vase",
    ku: "فازەی شیشەی هونەری بە دەست فڕێدراو"
  },

  category: {
    ar: "فازات",
    en: "Vases",
    ku: "فازەکان"
  },

  price: "85,000",
  priceNumber: 85000,

  desc: {
    ar: "إبريق زجاجي فني مصنوع يدوياً بتقنية النفخ، يتميز بتدرجات لونية متناغمة من الأبيض والأخضر والعنابي مع خطوط انسيابية تعكس الذوق الفني الكلاسيكي. قطعة أنيقة كانت تُستخدم للعرض أو للتقديم، وتُعد مثالاً على جماليات الزجاج الفني في الحقبة القديمة.",
    en: "An artistic glass jug handcrafted using the blowing technique, featuring harmonious color gradients of white, green, and burgundy with flowing lines that reflect classical artistic taste. An elegant piece once used for display or serving, exemplifying the aesthetics of artistic glass in earlier periods.",
    ku: "فازەیەکی شیشەی هونەری بە دەست فڕێدراو بە تەکنیکی نەفخ، بە تێکەڵە ڕەنگی سپی، سەوز و عەنابی لەگەڵ هێڵە نرمییەکان کە ذوقی هونەری کلاسیکی پیشان دەدات. پارچەیەکی جوان کە بۆ پیشاندان یان پێشکەشکردن بەکاردەهات."
  },

  material: {
    ar: "زجاج منفـوخ يدوياً",
    en: "Hand-Blown Glass",
    ku: "شیشەی بە دەست فڕێدراو"
  },

  condition: {
    ar: "حالة ممتازة مع آثار تقادم طفيفة طبيعية",
    en: "Excellent condition with slight natural aging marks",
    ku: "دۆخی نایاب لەگەڵ نیشانەی تەمەنەی کەم"
  },

  images: [
    cld("hoa-vas-065_zmxkpy")
  ],
  image: cld("hoa-vas-065_zmxkpy"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-fine-071_cwg5oh",

  name: {
    ar: "تمثال بوهيمي طقسي — ارتفاع 95 سم",
    en: "Bohemian Ritual Figurine — 95 cm Height",
    ku: "پەیکەرتەی بوهیمی ئایینی — بەرزی ٩٥ سم"
  },

  category: {
    ar: "أعمال فنية",
    en: "Artworks",
    ku: "کاری هونەری"
  },

  price: "3,500,000 د.ع",
  priceNumber: 3500000,

  desc: {
    ar: "تمثال بوهيمي طقسي نادر، منحوت بأسلوب تعبيري يجمع بين الرمزية والتجريد. يتميز بتفاصيل دقيقة في الرأس والزخارف الصدرية الملوّنة، مع عقد زخرفي يعكس البعد الروحي والطقوسي للقطعة. يُرجّح استخدامه في طقوس احتفالية أو كرمز للحماية والهوية الثقافية. قطعة قوية الحضور تُعرض عادةً في المتاحف والمجموعات الفنية الخاصة.",
    en: "A rare Bohemian ritual figurine carved in an expressive style combining symbolism and abstraction. It features finely detailed head carvings, colorful chest ornaments, and a decorative necklace reflecting the spiritual and ritualistic dimension of the piece. It was likely used in ceremonial rituals or as a symbol of protection and cultural identity. A powerful presence typically displayed in museums and private art collections.",
    ku: "پەیکەرتەیەکی بوهیمی ئایینی دەگمەن، بە شێوازی دەربڕینی تێکەڵ لە ڕەمز و ئەبستراکت نەخشکراو. بە وردەکارییەکانی سەر، ڕازاندنی سەرووکی ڕەنگین و قڵادەیەکی ڕازێنراو ناسراوە کە دووری ڕووحی و ئایینی پارچەکە پیشان دەدات. پێدەچێت لە ئاهەنگ و ڕێکخستنە ئایینییەکان بەکارهاتبێت یان وەک هێمای پاراستن و ناسنامەی کەلتووری. پارچەیەکی بەهێز کە زۆرجار لە مۆزەکان و کۆمەڵگە هونەرییە تایبەتییەکان پیشان دەدرێت."
  },

  material: {
    ar: "خشب منحوت يدوياً مع إضافات زخرفية",
    en: "Hand-Carved Wood with Decorative Additions",
    ku: "دارێکی دەست‌نەخشکراو لەگەڵ زیادەی ڕازێنراو"
  },

  heightCm: 95,

  condition: {
    ar: "حالة جيدة جداً مع آثار تقادم طبيعية تعزز قيمته الفنية",
    en: "Very good condition with natural aging that enhances its artistic value",
    ku: "دۆخی زۆر باش لەگەڵ نیشانەی تەمەنەی سرووشتی کە نرخ و بەهای هونەری بەرز دەکات"
  },

  images: [
    cld("hoa-fine-071_cwg5oh")
  ],
  image: cld("hoa-fine-071_cwg5oh"),

  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-fine-066_bq7jpq",

  name: {
    ar: "عمل فني موقّع — قطعة أصلية",
    en: "Signed Artwork — Original Piece",
    ku: "کاری هونەری واژۆکراو — پارچەی ڕەسەن"
  },

  category: {
    ar: "أعمال فنية",
    en: "Artworks",
    ku: "کاری هونەری"
  },

  price: "600,000",
  priceNumber: 600000,
  currency: "IQD",

  desc: {
    ar: "عمل فني أصلي موقّع من الفنان، يتميز بأسلوب تعبيري واضح وتوازن بصري مدروس في التكوين والخطوط. التوقيع الأصلي يمنح القطعة قيمة فنية وجامعية عالية، ما يجعلها مناسبة للعرض في المساحات الفنية الخاصة أو ضمن مجموعات جامعي الأعمال الفنية.",
    en: "An original artwork signed by the artist, distinguished by a clear expressive style and a well-considered visual balance in composition and lines. The authentic signature adds high artistic and collectible value, making it suitable for private art spaces or collectors’ collections.",
    ku: "کاری هونەرییەکی ڕەسەن کە لەلایەن هونەرمەندەکە واژۆ کراوە، بە شێوازی دەربڕینی ڕوون و هاوسەنگی بینراوی ورد لە پێکهاتە و هێڵەکان ناسراوە. واژۆی ڕەسەن نرخ و گرنگی هونەری و کۆکردنەوەی پارچەکە بەرز دەکات، بۆیە گونجاوە بۆ شوێنە هونەرییە تایبەتییەکان یان کۆمەڵگەی کۆکردنەوەی هونەری."
  },

  artistSignature: true,

  authenticity: {
    ar: "أصلي — توقيع يدوي",
    en: "Original — Hand Signed",
    ku: "ڕەسەن — واژۆی دەستی"
  },

  condition: {
    ar: "حالة ممتازة",
    en: "Excellent Condition",
    ku: "دۆخی نایاب"
  },

  images: [
    cld("hoa-fine-066_bq7jpq")
  ],
  image: cld("hoa-fine-066_bq7jpq"),

  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-fine-063_bpmkgv",

  name: {
    ar: "عمل نحتي حجري تجريدي",
    en: "Abstract Stone Sculpture",
    ku: "پەیکەرتەی بەردی ئەبستراکت"
  },

  category: {
    ar: "أعمال فنية",
    en: "Artworks",
    ku: "کاری هونەری"
  },

  price: "5,500,000",
  priceNumber: 5500000,

  desc: {
    ar: "عمل فني نحتي حجري بأسلوب تعبيري تجريدي، يجسّد الكتلة الإنسانية من خلال تكوين عضوي وانحناءات قوية تعكس الحركة والثقل الرمزي. القطعة تركز على الإحساس بالشكل والملمس أكثر من التفاصيل، ما يمنحها حضوراً بصرياً عميقاً يليق بالعرض المتحفي أو المجموعات الفنية الخاصة.",
    en: "An abstract expressive stone sculpture representing the human mass through an organic composition and powerful curves that convey movement and symbolic weight. The piece emphasizes form and texture over detail, giving it a profound visual presence suitable for museum display or private art collections.",
    ku: "پەیکەرتەیەکی هونەری بەردی بە شێوازی ئەبستراکت و دەربڕینی، کە قەبارەی مرۆیی بە پێکهاتەیەکی ئۆرگانیکی و خەم‌وچڕی بەهێز پیشان دەدات و جوڵە و قەبارەی ڕەمزی دەربڕێت. پارچەکە زیاتر گرنگی بە شێوە و تەکسچر دەدات نەک وردەکاری، بۆیە ئامادەییەکی بینراوی قووڵ هەیە بۆ پیشاندانی مۆزەیی یان کۆمەڵگە هونەرییە تایبەتییەکان."
  },

  material: {
    ar: "حجر طبيعي منحوت يدوياً",
    en: "Hand-Carved Natural Stone",
    ku: "بەردی سرووشتی دەست‌نەخشکراو"
  },

  period: {
    ar: "منتصف القرن العشرين (تقديري)",
    en: "Mid-20th Century (Approximate)",
    ku: "ناوەندی سەدەی بیستەم (تخمینی)"
  },

  condition: {
    ar: "حالة جيدة جداً مع آثار تقادم طبيعية",
    en: "Very good condition with natural signs of aging",
    ku: "دۆخی زۆر باش لەگەڵ نیشانەی تەمەنەی سرووشتی"
  },

  signed: false,

  images: [
    cld("hoa-fine-063_bpmkgv")
  ],
  image: cld("hoa-fine-063_bpmkgv"),

  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-cop-067",

  name: {
    ar: "سلة فضية مشغولة بمقبض زخرفي",
    en: "Ornate Silver Basket with Decorative Handle",
    ku: "سەبەتەی زیوی کارکراو بە دەستگێری ڕازێنراو"
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  price: "1,499,000",
  priceNumber: 1499000,

  desc: {
    ar: "قطعة فضية مشغولة يدوياً بتفريغات زخرفية أنيقة ومقبض علوي ملتف تتوسطه زخرفة حيوانية دقيقة. تعود لأكثر من 60 سنة، وتتميّز بتوازن جميل بين الوظيفة والزخرفة، ما يجعلها مناسبة للعرض المتحفي أو للاستخدام الزخرفي الراقي ضمن الديكورات الكلاسيكية.",
    en: "A handcrafted silver basket featuring elegant openwork ornamentation and a twisted upper handle adorned with a finely detailed animal motif. Dating back over 60 years, it presents a refined balance between function and decoration, making it suitable for museum display or sophisticated decorative use in classical interiors.",
    ku: "سەبەتێکی زیوی بە دەست کارکراو کە بە تفریغە ڕازێنراوە جوانەکان و دەستگێری سەرەوەی خەمراو ناسراوە، لە ناوەڕاستیدا نەخشەیەکی ئاژەڵی ورد هەیە. زیاتر لە ٦٠ ساڵ تەمەن هەیە و هاوسەنگیەکی جوان نێوان کارایی و ڕازاندن پیشان دەدات، بۆیە گونجاوە بۆ پیشاندانی مۆزەیی یان بەکارهێنانی دیکۆری کلاسیکی."
  },

  material: {
    ar: "نحاس مشغول يدوياً",
    en: "Handcrafted Copper",
    ku: "نەحاسی دەست‌کارکراو"
  },

  period: {
    ar: "منتصف القرن العشرين (تقديري)",
    en: "Mid-20th Century (Approximate)",
    ku: "ناوەندی سەدەی بیستەم (تخمینی)"
  },

  condition: {
    ar: "حالة جيدة جداً مع آثار تقادم طبيعية",
    en: "Very good condition with natural signs of aging",
    ku: "دۆخی زۆر باش لەگەڵ نیشانەی تەمەنەی سرووشتی"
  },

  signed: false,

  images: [
    cld("hoa-slv-067_rhaw7f")
  ],
  image: cld("hoa-slv-067_rhaw7f"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-slv-068",

  name: {
    ar: "وعاء فضي بزخارف محفورة وحافة متموجة",
    en: "Silver Bowl with Engraved Motifs and Wavy Rim",
    ku: "قاپی زیوی بە نەخشەی کەندراو و لێوەی شەپۆلی"
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  price: "4,800,000",
  priceNumber: 4800000,

  desc: {
    ar: "وعاء فضي أنيق بحافة متموجة مصنوعة يدوياً، يتميز بزخارف نباتية محفورة بدقة على السطح الخارجي مع آثار تقادم نبيلة تعكس عمر القطعة وأصالتها. قطعة راقية تناسب العرض المتحفي أو تزيين المساحات الكلاسيكية الفاخرة.",
    en: "An elegant silver bowl with a hand-crafted wavy rim, featuring finely engraved botanical motifs on the exterior surface and noble patina marks that reflect its age and authenticity. A refined piece suitable for museum display or enhancing luxurious classical interiors.",
    ku: "قاپێکی زیوی جوان بە لێوەی شەپۆلی کە بە دەست دروستکراوە، بە نەخشە گیایینەکان بە وردی کەندراون لە سەرجەمی دەرەوە، لەگەڵ نیشانەی تەمەنەی نایاب کە تەمەنی و ڕەسەنی پارچەکە پیشان دەدات. پارچەیەکی بەرز بۆ پیشاندانی مۆزەیی یان ڕازاندنی شوێنە کلاسیکی فەخمی."
  },

  material: {
    ar: "فضة مشغولة يدوياً",
    en: "Handcrafted Silver",
    ku: "زیوی دەست‌کارکراو"
  },

  period: {
    ar: "النصف الأول من القرن العشرين (تقديري)",
    en: "First Half of the 20th Century (Approximate)",
    ku: "نیوەی یەکەمی سەدەی بیستەم (تخمینی)"
  },

  condition: {
    ar: "حالة جيدة جداً مع آثار استخدام وتقادم طبيعية",
    en: "Very good condition with natural signs of use and aging",
    ku: "دۆخی زۆر باش لەگەڵ نیشانەی بەکارهێنان و تەمەنەی سرووشتی"
  },

  signed: false,

  images: [
    cld("hoa-slv-068_ck7oao")
  ],
  image: cld("hoa-slv-068_ck7oao"),

  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-slv-073_prlfdp",

  name: {
    ar: "مجموعة سراج زيت فضية تقليدية",
    en: "Traditional Silver Oil Lamp Set",
    ku: "کۆمەڵەی چرای نەوتی زیوی نەریتی"
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  price: "3,200,000",
  priceNumber: 3200000,

  desc: {
    ar: "مجموعة من ثلاثة سرج زيت فضية تقليدية، مشغولة يدوياً بأسلوب بسيط وانسيابي يعكس الاستخدام اليومي في البيوت القديمة. تتميز القطع بتقادم طبيعي على السطح يمنحها طابعاً تاريخياً أصيلاً، وتُعد مثالاً نادراً على الأدوات المنزلية الفضية ذات الوظيفة العملية والجمالية معاً.",
    en: "A set of three traditional silver oil lamps, handcrafted in a simple and fluid style that reflects everyday use in old homes. The pieces feature natural surface patina that gives them an authentic historical character, making them a rare example of silver household items combining both functional and aesthetic value.",
    ku: "کۆمەڵەیەک لە سێ چرای نەوتی زیوی نەریتی، بە دەست کارکراو بە شێوازێکی سادە و نرمی کە بەکارهێنانی ڕۆژانە لە ماڵە کۆنەکان پیشان دەدات. پارچەکان نیشانەی تەمەنەی سرووشتی لە سەرەوەیان هەیە کە ڕەنگی مێژوویی ڕەسەن پێدەدات، و نموونەیەکی دەگمەنن لە ئامرازە ماڵییە زیوییەکان کە کارایی و جوانی تێکەڵ دەکەن."
  },

  material: {
    ar: "فضة مشغولة يدوياً",
    en: "Handcrafted Silver",
    ku: "زیوی دەست‌کارکراو"
  },

  period: {
    ar: "أواخر القرن التاسع عشر – بدايات القرن العشرين (تقديري)",
    en: "Late 19th – Early 20th Century (Approximate)",
    ku: "کۆتایی سەدەی نۆزدەهەم – سەرەتای سەدەی بیستەم (تخمینی)"
  },

  condition: {
    ar: "حالة جيدة جداً مع آثار تقادم واستخدام طبيعية",
    en: "Very good condition with natural signs of aging and use",
    ku: "دۆخی زۆر باش لەگەڵ نیشانەی تەمەن و بەکارهێنانی سرووشتی"
  },

  signed: false,

  images: [
    cld("hoa-slv-073_prlfdp")
  ],
  image: cld("hoa-slv-073_prlfdp"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-slv-075_x1czay",
  name: "سيت أواني فضية مزدوجة بغطاء",
  category: "فضة",
  price: "1,800,000",
  priceNumber: 1800000,
  desc: "سيت أنيق مكوّن من وعاءين فضيين بغطاء، متصلين بذراع مركزية ومقبض علوي زخرفي. القطعة مشغولة يدوياً بزخارف نباتية دقيقة، وتعود إلى أكثر من 70 عاماً. تصميمها المتوازن وتفاصيلها الكلاسيكية يمنحانها حضوراً فاخراً مناسباً للعرض المتحفي أو المجموعات الخاصة.",
  material: "فضة مشغولة يدوياً",
  period: "منتصف القرن العشرين (تقديري)",
  condition: "جيدة جداً مع آثار تقادم طبيعية",
  signed: false,
  images: [cld("hoa-slv-075_x1czay")],
  image: cld("hoa-slv-075_x1czay"),
  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-slv-070_badhom",

  name: {
    ar: "زجاجة فضية سداسية مزخرفة",
    en: "Ornate Hexagonal Silver Bottle",
    ku: "قوڵکەی زیوی شەش‌گۆشە ڕازێنراو"
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  price: "2,200,000",
  priceNumber: 2200000,

  desc: {
    ar: "زجاجة فضية فاخرة ذات تصميم سداسي، مزخرفة بنقوش نباتية محفورة يدوياً بدقة عالية على جميع الجوانب. تتميز بتوازن أنيق بين الشكل الهندسي والزخرفة الكلاسيكية، ما يجعلها قطعة مميزة للعرض المتحفي أو ضمن مجموعات التحف الراقية. تعكس أسلوب صناعة تقليدي متقن وحضوراً بصرياً لافتاً.",
    en: "A luxurious silver bottle with a hexagonal design, adorned with finely hand-engraved botanical motifs on all sides. It presents an elegant balance between geometric form and classical ornamentation, making it a distinguished piece for museum display or refined antique collections. It reflects meticulous traditional craftsmanship and a striking visual presence.",
    ku: "قوڵکەیەکی زیوی فەخمی بە دیزاینی شەش‌گۆشە، بە نەخشە گیایینەکان بە وردی بە دەست کەندراون لە هەموو لاکان. هاوسەنگیەکی جوان نێوان شێوەی هندەسی و ڕازاندنی کلاسیکی پیشان دەدات، بۆیە پارچەیەکی تایبەتە بۆ پیشاندانی مۆزەیی یان کۆمەڵگەی کۆکردنەوەی تحفە نایابەکان. شێوازی پیشەسازی نەریتی ورد و ئامادەییەکی بینراوی سەرنجڕاکێش پیشان دەدات."
  },

  material: {
    ar: "فضة مشغولة يدوياً",
    en: "Handcrafted Silver",
    ku: "زیوی دەست‌کارکراو"
  },

  period: {
    ar: "النصف الأول من القرن العشرين (تقديري)",
    en: "First Half of the 20th Century (Approximate)",
    ku: "نیوەی یەکەمی سەدەی بیستەم (تخمینی)"
  },

  condition: {
    ar: "حالة جيدة جداً مع آثار تقادم طبيعية",
    en: "Very good condition with natural signs of aging",
    ku: "دۆخی زۆر باش لەگەڵ نیشانەی تەمەنەی سرووشتی"
  },

  signed: false,

  images: [
    cld("hoa-slv-070_badhom")
  ],
  image: cld("hoa-slv-070_badhom"),

  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-wood-064_q9e80m",

  name: {
    ar: "عمل فني خشبي تجريدي",
    en: "Abstract Wooden Artwork",
    ku: "کاری هونەری دارێکی ئەبستراکت"
  },

  category: {
    ar: "أعمال فنية",
    en: "Artworks",
    ku: "کاری هونەری"
  },

  price: "1,300,000",
  priceNumber: 1300000,

  desc: {
    ar: "عمل فني خشبي تجريدي قائم بذاته، مصنوع من قطعة خشب طبيعية واحدة، يستثمر الشكل العضوي والانحناءات العفوية للمادة ليجسّد حضوراً نحتياً معاصراً. القطعة تعبّر عن توازن بين القوة والبساطة، وتُبرز آثار الزمن والملمس الطبيعي للخشب، ما يمنحها طابعاً فنياً فريداً مناسباً للعرض المتحفي أو المساحات الفنية الخاصة.",
    en: "A standalone abstract wooden artwork crafted from a single piece of natural wood, utilizing the organic form and spontaneous curves of the material to express a contemporary sculptural presence. The piece embodies a balance between strength and simplicity, highlighting the passage of time and the natural texture of the wood, making it ideal for museum display or private art spaces.",
    ku: "کاری هونەرییەکی دارێکی ئەبستراکت کە بە تەنها لە یەک پارچە دارێکی سرووشتی دروستکراوە، شێوەی ئۆرگانیکی و خەم‌وچڕی سرووشتی ماددەکە بەکاردێنرێت بۆ پیشاندانی ئامادەییەکی پەیکەرتەی هاوچەرخ. پارچەکە هاوسەنگی نێوان بەهێزی و سادەیی پیشان دەدات و نیشانەکانی تەمەن و تەکسچەری سرووشتی دار ڕوون دەکات، بۆیە گونجاوە بۆ پیشاندانی مۆزەیی یان شوێنە هونەرییە تایبەتییەکان."
  },

  material: {
    ar: "خشب طبيعي منحوت يدوياً",
    en: "Hand-Carved Natural Wood",
    ku: "دارێکی سرووشتی دەست‌نەخشکراو"
  },

  period: {
    ar: "أواخر القرن العشرين (أكثر من 30 سنة)",
    en: "Late 20th Century (Over 30 Years Old)",
    ku: "کۆتایی سەدەی بیستەم (زیاتر لە ٣٠ ساڵ)"
  },

  condition: {
    ar: "حالة جيدة جداً مع آثار تقادم طبيعية",
    en: "Very good condition with natural signs of aging",
    ku: "دۆخی زۆر باش لەگەڵ نیشانەی تەمەنەی سرووشتی"
  },

  dimensions: {
    height_cm: 90
  },

  signed: false,

  images: [
    cld("hoa-wood-064_q9e80m")
  ],
  image: cld("hoa-wood-064_q9e80m"),

  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-wood-069_qo8skc",

  name: {
    ar: "مطرقة مزاد خشبية مزخرفة",
    en: "Ornate Wooden Auction Gavel",
    ku: "چکۆڵەی مزادێکی دارێکی ڕازێنراو"
  },

  category: {
    ar: "أعمال فنية",
    en: "Artworks",
    ku: "کاری هونەری"
  },

  price: "150,000",
  priceNumber: 150000,

  desc: {
    ar: "مطرقة مزاد خشبية أصلية ذات طابع فني، مصنوعة من خشب طبيعي معتّق ومزينة برسوم يدوية أنيقة على المقبض. تجمع القطعة بين الوظيفة الرمزية والقيمة الجمالية، وتُعد مثالاً نادراً على أدوات المزاد التقليدية التي تحولت إلى قطع عرض متحفي مميزة.",
    en: "An original wooden auction gavel with an artistic character, crafted from aged natural wood and adorned with elegant hand-painted decorations on the handle. The piece combines symbolic function with aesthetic value, representing a rare example of traditional auction tools transformed into distinctive museum display objects.",
    ku: "چکۆڵەیەکی مزادێکی دارێکی ڕەسەن بە تایبەتمەندی هونەری، لە دارێکی سرووشتی کۆن‌بوو دروستکراو و بە وێنەی دەستی جوان لە سەر دەستگێر ڕازێنراوە. ئەم پارچەیە کارایی ڕەمزی و جوانی تێکەڵ دەکات و نموونەیەکی دەگمەنە لە ئامرازە مزادییە نەریتییەکان کە بوونە پارچەی پیشاندانی مۆزەیی."
  },

  material: {
    ar: "خشب طبيعي مع زخارف يدوية",
    en: "Natural Wood with Hand Decorations",
    ku: "دارێکی سرووشتی لەگەڵ ڕازاندنی دەستی"
  },

  period: {
    ar: "النصف الثاني من القرن العشرين (تقديري)",
    en: "Second Half of the 20th Century (Approximate)",
    ku: "نیوەی دووەمی سەدەی بیستەم (تخمینی)"
  },

  condition: {
    ar: "حالة جيدة جداً مع آثار استخدام وتقادم أصيلة",
    en: "Very good condition with authentic signs of use and aging",
    ku: "دۆخی زۆر باش لەگەڵ نیشانەی بەکارهێنان و تەمەنەی ڕەسەن"
  },

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

  name: {
    ar: "صندوق فضي منقوش",
    en: "Engraved Silver Box",
    ku: "سندوقی زیوی کەندراو"
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  price: "3,200,000",
  priceNumber: 3200000,

  desc: {
    ar: "صندوق فضي قديم مشغول بدقة عالية، مزخرف بنقوش بارزة تمثل مشاهد طبيعية وحيوانية محاطة بإطارات زخرفية كلاسيكية. تتميز القطعة بتفاصيلها الغنية وتوازنها الفني، ما يجعلها مثالية للعرض المتحفي أو ضمن مجموعات الفضيات الراقية.",
    en: "An antique silver box crafted with high precision, decorated with raised engravings depicting natural and animal scenes framed by classical ornamental borders. The piece is distinguished by its rich details and artistic balance, making it ideal for museum display or refined silver collections.",
    ku: "سندوقێکی زیوی کۆن بە وردی کارکراو، بە نەخشەی بەرز ڕازێنراو کە دیمەنە سرووشتی و ئاژەڵی پیشان دەدات و بە چوارچێوەی کلاسیکی ڕازێنراون. پارچەکە بە وردەکارییە قووڵەکان و هاوسەنگی هونەری ناسراوە، بۆیە گونجاوە بۆ پیشاندانی مۆزەیی یان کۆمەڵگەی زیویی نایاب."
  },

  material: {
    ar: "فضة مشغولة يدوياً",
    en: "Handcrafted Silver",
    ku: "زیوی دەست‌کارکراو"
  },

  period: {
    ar: "منتصف القرن العشرين (تقديري)",
    en: "Mid-20th Century (Approximate)",
    ku: "ناوەندی سەدەی بیستەم (تخمینی)"
  },

  condition: {
    ar: "حالة جيدة جداً مع آثار تقادم طبيعية تضيف إلى أصالتها",
    en: "Very good condition with natural aging marks that enhance its authenticity",
    ku: "دۆخی زۆر باش لەگەڵ نیشانەی تەمەنەی سرووشتی کە ڕەسەنی پارچەکە بەرز دەکات"
  },

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

  name: {
    ar: "حامل شموع فضي مخروطي",
    en: "Conical Silver Candle Holder",
    ku: "هەڵگری شەمعی زیوی کۆنیکی"
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  price: "3,800,000 د.ع",
  priceNumber: 3800000,

  desc: {
    ar: "حامل شموع فضي قديم بتكوين مخروطي أنيق، مزخرف بنقوش هندسية ونباتية دقيقة محفورة يدوياً على كامل السطح. تتميز القطعة بتوازنها الشكلي وحضورها القوي، ما يجعلها مناسبة للعرض المتحفي أو كقطعة محورية ضمن مجموعات الفضيات الكلاسيكية.",
    en: "An antique silver candle holder with an elegant conical form, decorated with finely hand-engraved geometric and botanical motifs covering the entire surface. The piece is distinguished by its balanced form and strong presence, making it suitable for museum display or as a focal piece within classical silver collections.",
    ku: "هەڵگرێکی شەمعی زیوی کۆن بە شێوەی کۆنیکی جوان، بە نەخشە هندەسی و گیایینی ورد بە دەست کەندراو لەسەر هەموو سەرجەمەکە. پارچەکە بە هاوسەنگی شێوەیی و ئامادەییەکی بەهێز ناسراوە، بۆیە گونجاوە بۆ پیشاندانی مۆزەیی یان وەک پارچەیەکی سەرەکی لە کۆمەڵگەی زیویی کلاسیکی."
  },

  material: {
    ar: "فضة مشغولة يدوياً",
    en: "Handcrafted Silver",
    ku: "زیوی دەست‌کارکراو"
  },

  period: {
    ar: "النصف الأول من القرن العشرين (تقديري)",
    en: "First Half of the 20th Century (Approximate)",
    ku: "نیوەی یەکەمی سەدەی بیستەم (تخمینی)"
  },

  condition: {
    ar: "حالة جيدة جداً مع آثار تقادم طبيعية",
    en: "Very good condition with natural signs of aging",
    ku: "دۆخی زۆر باش لەگەڵ نیشانەی تەمەنەی سرووشتی"
  },

  signed: false,

  images: [
    cld("hoa-slv-072_ot8n0m")
  ],
  image: cld("hoa-slv-072_ot8n0m"),

  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-acc-084_we4rkr",

  name: {
    ar: "سوار فضة بحجرين ملونين",
    en: "Silver Bracelet with Two Colored Stones",
    ku: "دەستبەندێکی زیوی بە دوو بەردی ڕەنگاوڕەنگ"
  },

  category: {
    ar: "إكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price: "250,000 د.ع",
  priceNumber: 250000,

  desc: {
    ar: "سوار فضة أنتيك بتصميم أنيق ومفتوح، يتوسطه حجران ملونان أحدهما فيروزي والآخر كهرماني، محاطان بتفاصيل فضية دقيقة. قطعة عمرها التقريبي أكثر من 40 سنة، تعكس أسلوباً كلاسيكياً راقياً وتناسب العرض المتحفي أو المجموعات الخاصة.",
    en: "An antique silver bracelet with an elegant open design, centered with two colored stones—one turquoise and the other amber—surrounded by fine silver details. Approximately over 40 years old, it reflects a refined classical style and is suitable for museum display or private collections.",
    ku: "دەستبەندێکی زیوی ئەنتیک بە دیزاینێکی کراو و جوان، لە ناوەڕاستیدا دوو بەردی ڕەنگاوڕەنگ هەیە—یەکێکی فیرووزی و یەکێکی کەهرەمانی—بە وردەکارییە زیوییەکان دەوروبەریان. تەمەنەکەی نزیکەی زیاتر لە ٤٠ ساڵە و شێوازی کلاسیکی بەرز پیشان دەدات، گونجاوە بۆ پیشاندانی مۆزەیی یان کۆمەڵگە تایبەتی."
  },

  images: [
    cld("hoa-acc-084_we4rkr")
  ],
  image: cld("hoa-acc-084_we4rkr"),

  featured: true,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-089_d27bqn",

  name: {
    ar: "سوار فضة بحجر أبيض طبيعي",
    en: "Silver Bracelet with Natural White Stone",
    ku: "دەستبەندێکی زیوی بە بەردی سپی سرووشتی"
  },

  category: {
    ar: "إكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price: "175,000د.ع",
  priceNumber: 175000,

  desc: {
    ar: "سوار فضة أنتيك بتصميم مفتوح وأنيق، يتوسطه حجر أبيض طبيعي مصقول بشكل حر داخل إطار فضي مزخرف بدقة. القطعة تعكس ذوقاً كلاسيكياً هادئاً وتناسب العرض المتحفي أو المجموعات الخاصة، مع عمر تقريبي يتجاوز 35 سنة.",
    en: "An antique silver bracelet with an elegant open design, centered with a freely polished natural white stone set within a finely decorated silver frame. The piece reflects a calm classical taste and is suitable for museum display or private collections, with an approximate age of over 35 years.",
    ku: "دەستبەندێکی زیوی ئەنتیک بە دیزاینێکی کراو و جوان، لە ناوەڕاستیدا بەردێکی سپی سرووشتی بە شێوەی ئازاد پۆڵیشکراو دانراوە لە ناو چوارچێوەیەکی زیویی ورد ڕازێنراو. پارچەکە ذوقێکی کلاسیکی ئارام پیشان دەدات و گونجاوە بۆ پیشاندانی مۆزەیی یان کۆمەڵگە تایبەتی، بە تەمەنێکی نزیکەی زیاتر لە ٣٥ ساڵ."
  },

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

  name: {
    ar: "سوار فضة بحجر أبيض طبيعي",
    en: "Silver Bracelet with Natural White Stone",
    ku: "دەستبەندێکی زیوی بە بەردی سپی سرووشتی"
  },

  category: {
    ar: "إكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price: "180,000 د.ع",
  priceNumber: 180000,

  desc: {
    ar: "سوار فضة أنتيك بتصميم مفتوح وأنيق، يتوسطه حجر أبيض طبيعي مصقول بشكل حر داخل إطار فضي مزخرف بدقة. القطعة تعكس ذوقاً كلاسيكياً هادئاً وتناسب العرض المتحفي أو المجموعات الخاصة، مع عمر تقريبي يتجاوز 35 سنة.",
    en: "An antique silver bracelet with an elegant open design, centered with a freely polished natural white stone set within a finely decorated silver frame. The piece reflects a calm classical taste and is suitable for museum display or private collections, with an approximate age of over 35 years.",
    ku: "دەستبەندێکی زیوی ئەنتیک بە دیزاینێکی کراو و جوان، لە ناوەڕاستیدا بەردێکی سپی سرووشتی بە شێوەی ئازاد پۆڵیشکراو دانراوە لە ناو چوارچێوەیەکی زیویی ورد ڕازێنراو. پارچەکە ذوقێکی کلاسیکی ئارام پیشان دەدات و گونجاوە بۆ پیشاندانی مۆزەیی یان کۆمەڵگە تایبەتی، بە تەمەنێکی نزیکەی زیاتر لە ٣٥ ساڵ."
  },

  images: [
    cld("hoa-acc-082_bmkogm")
  ],
  image: cld("hoa-acc-082_bmkogm"),

  featured: true,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-090_qtj2as",

  name: {
    ar: "سوار فضة بتصميم فراشة وأحجار ملونة",
    en: "Silver Bracelet with Butterfly Design and Colored Stones",
    ku: "دەستبەندێکی زیوی بە دیزاینی فڕۆکە و بەردە ڕەنگاوڕەنگەکان"
  },

  category: {
    ar: "إكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price:"260,000 د.ع",
  priceNumber:260000,

  desc: {
    ar: "سوار فضة أنتيك بتصميم مفتوح يتوسطه شكل فراشة مزخرفة، مرصعة بأحجار ملونة طبيعية باللونين الأزرق والبرتقالي داخل إطار فضي دقيق. القطعة تجمع بين الرمزية الجمالية والدقة الحرفية، وتناسب العرض المتحفي أو المجموعات الخاصة، مع عمر تقريبي يتجاوز 30 سنة.",
    en: "An antique silver bracelet with an open design centered around an ornate butterfly motif, set with natural colored stones in blue and orange within a delicate silver frame. The piece combines aesthetic symbolism with fine craftsmanship, making it suitable for museum display or private collections, with an approximate age of over 30 years.",
    ku: "دەستبەندێکی زیوی ئەنتیک بە دیزاینێکی کراو، لە ناوەڕاستیدا شێوەی فڕۆکەیەکی ڕازێنراو هەیە کە بەردە ڕەنگاوڕەنگە سرووشتییەکان بە ڕەنگی شین و پڕتەقاڵی لە ناو چوارچێوەیەکی زیویی ورد دانراون. پارچەکە ڕەمزە جوانی و وردکاری پیشەسازی تێکەڵ دەکات و گونجاوە بۆ پیشاندانی مۆزەیی یان کۆمەڵگە تایبەتی، بە تەمەنێکی نزیکەی زیاتر لە ٣٠ ساڵ."
  },

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

  name: {
    ar: "قلادة فضة بحجر أزرق على شكل دمعة",
    en: "Silver Necklace with Teardrop Blue Stone",
    ku: "قڵادەی زیوی بە بەردی شین بە شێوەی فرمێسک"
  },

  category: {
    ar: "إكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price:"450,000 د.ع",
  priceNumber:450000,

  desc: {
    ar: "قلادة فضة أنتيك بتصميم كلاسيكي أنيق، تتدلى منها قطعة على شكل دمعة مرصعة بحجر أزرق داكن مصقول، محاطة بإطار فضي مزخرف بدقة يبرز جمال الحجر وتوازنه. القطعة تعكس ذوقاً راقياً وتناسب العرض المتحفي أو المجموعات الخاصة، مع عمر تقريبي يتجاوز 40 سنة.",
    en: "An antique silver necklace with an elegant classical design, featuring a teardrop-shaped pendant set with a polished deep-blue stone, framed by finely decorated silver that enhances the stone’s beauty and balance. The piece reflects refined taste and is suitable for museum display or private collections, with an approximate age of over 40 years.",
    ku: "قڵادەیەکی زیوی ئەنتیک بە دیزاینێکی کلاسیکی جوان، کە پارچەیەکی بە شێوەی فرمێسک لەخۆ دەگرێت و بەردێکی شینی تۆخ بە شێوەی پۆڵیشکراو تێدا دانراوە، دەوروبەریش بە چوارچێوەیەکی زیویی ورد ڕازێنراوە کە جوانی و هاوسەنگی بەردەکە دەردەخات. پارچەکە ذوقێکی بەرز پیشان دەدات و گونجاوە بۆ پیشاندانی مۆزەیی یان کۆمەڵگە تایبەتی، بە تەمەنێکی نزیکەی زیاتر لە ٤٠ ساڵ."
  },

  images: [
    cld("hoa-acc-086_qwedam")
  ],
  image: cld("hoa-acc-086_qwedam"),

  featured: true,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-slv-083-jpg_upjqky",

  name: {
    ar: "قطعة فضة أنتيك",
    en: "Antique Silver Piece",
    ku: "پارچەی زیوی ئەنتیک"
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  price:"1,900,000 د.ع",
  priceNumber:1900000,

  desc: {
    ar: "قطعة فضة أنتيك مصنوعة بعناية وبأسلوب كلاسيكي، تتميز بتفاصيل دقيقة ولمسة تقادم طبيعية تعكس أصالتها. مناسبة للعرض المتحفي أو لإثراء المجموعات الخاصة، مع عمر تقريبي يتجاوز 40 سنة.",
    en: "An antique silver piece crafted with care in a classical style, distinguished by fine details and a natural patina that reflects its authenticity. Suitable for museum display or enriching private collections, with an approximate age of over 40 years.",
    ku: "پارچەیەکی زیوی ئەنتیک بە وردی و بە شێوازی کلاسیکی دروستکراو، بە وردەکارییە نرمان و نیشانەی تەمەنەی سرووشتی ناسراوە کە ڕەسەنی پارچەکە پیشان دەدات. گونجاوە بۆ پیشاندانی مۆزەیی یان بۆ زیادکردنی کۆمەڵگە تایبەتی، بە تەمەنێکی نزیکەی زیاتر لە ٤٠ ساڵ."
  },

  images: [
    cld("hoa-slv-083-jpg_upjqky")
  ],
  image: cld("hoa-slv-083-jpg_upjqky"),

  featured: true,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-slv-081.jog_jpxfqe",

  name: {
    ar: "فازة فضة أنتيك بقاعدة مزخرفة",
    en: "Antique Silver Vase with Ornate Base",
    ku: "فازەی زیوی ئەنتیک بە بنکەی ڕازێنراو"
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  price:"2,300,000 د.ع",
  priceNumber:2300000,

  desc: {
    ar: "فازة فضة أنتيك بتصميم كلاسيكي قائم على قاعدة مزخرفة، يتميز بجسم متعدد الأوجه ونقوش نباتية دقيقة مع آثار تقادم طبيعية تعكس عمر القطعة وأصالتها. مناسب للعرض المتحفي أو كمقتنى فاخر ضمن المجموعات الخاصة، مع عمر تقريبي يتجاوز 50 سنة.",
    en: "An antique silver vase with a classical design resting on an ornate base, featuring a multi-faceted body and finely engraved botanical motifs with natural patina that reflects its age and authenticity. Suitable for museum display or as a luxurious collectible within private collections, with an approximate age of over 50 years.",
    ku: "فازەیەکی زیوی ئەنتیک بە دیزاینێکی کلاسیکی لەسەر بنکەیەکی ڕازێنراو، بە جەستەی فرەلا و نەخشە گیایینی ورد ناسراوە لەگەڵ نیشانەی تەمەنەی سرووشتی کە تەمەنی و ڕەسەنی پارچەکە پیشان دەدات. گونجاوە بۆ پیشاندانی مۆزەیی یان وەک پارچەیەکی فەخمی لە کۆمەڵگە تایبەتییەکان، بە تەمەنێکی نزیکەی زیاتر لە ٥٠ ساڵ."
  },

  images: [
    cld("hoa-slv-081.jog_jpxfqe")
  ],
  image: cld("hoa-slv-081.jog_jpxfqe"),

  featured: true,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-slv-085_dyzem1",

  name: {
    ar: "زوج أجراس فضة أنتيك بمقابض ملتوية",
    en: "Pair of Antique Silver Bells with Twisted Handles",
    ku: "دوو زەنگی زیوی ئەنتیک بە دەستگێری پێچراو"
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  price:"600,000 د.ع",
  priceNumber:600000,

  desc: {
    ar: "زوج أجراس فضة أنتيك بتصميم كلاسيكي نادر، يتميز كل جرس بجسم مخروطي مصقول ومقبض ملتوي ينتهي بكرة فضية. تظهر على السطح آثار تقادم طبيعية تعكس أصالة القطعة واستخدامها التاريخي. مناسبة للعرض المتحفي أو كمقتنى فني ضمن المجموعات الخاصة، مع عمر تقريبي يتجاوز 45 سنة.",
    en: "A rare pair of antique silver bells in a classical design, each featuring a polished conical body and a twisted handle ending with a silver sphere. Natural patina marks on the surface reflect the piece’s authenticity and historical use. Suitable for museum display or as an artistic collectible within private collections, with an approximate age of over 45 years.",
    ku: "دوو زەنگێکی زیوی ئەنتیک بە دیزاینێکی کلاسیکی دەگمەن، هەر یەکێک جەستەیەکی کۆنیکی پۆڵیشکراو و دەستگێرێکی پێچراوی هەیە کە بە گۆڵەیەکی زیویی کۆتایی دێت. نیشانەی تەمەنەی سرووشتی لەسەر ڕووکارەکە ڕەسەنی و بەکارهێنانی مێژوویی پارچەکە پیشان دەدات. گونجاوە بۆ پیشاندانی مۆزەیی یان وەک پارچەیەکی هونەری لە کۆمەڵگە تایبەتییەکان، بە تەمەنێکی نزیکەی زیاتر لە ٤٥ ساڵ."
  },

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

  name: {
    ar: "كأس فضة قديم مع صحن مزخرف",
    en: "Antique Silver Cup with Decorated Saucer",
    ku: "کوپەی زیوی کۆن لەگەڵ صحنێکی ڕازێنراو"
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  price:"1,850,000 د.ع",
  priceNumber:1850000,

  desc: {
    ar: "كأس فضة أنتيك مرفق مع صحن فضي مزخرف يدوياً، يتميز الكأس بشكل مخروطي أنيق مع نقوش نباتية دقيقة تحيط بالجسم والحافة، بينما يحمل الصحن زخارف متناغمة تعكس الحرفية الكلاسيكية. تظهر على القطعة آثار تقادم طبيعية تضيف إلى أصالتها وقيمتها التاريخية. مناسبة للعرض المتحفي أو للاقتناء ضمن المجموعات الخاصة، مع عمر تقريبي يتجاوز 50 سنة.",
    en: "An antique silver cup accompanied by a hand-decorated silver saucer. The cup features an elegant conical form adorned with fine botanical engravings around the body and rim, while the saucer carries harmonious decorative motifs reflecting classical craftsmanship. Natural aging marks enhance its authenticity and historical value. Suitable for museum display or private collections, with an approximate age of over 50 years.",
    ku: "کوپەیەکی زیوی ئەنتیک لەگەڵ صحنێکی زیوی بە دەست ڕازێنراو، کوپەکە بە شێوەی کۆنیکی جوان و نەخشە گیایینی ورد لەسەر جەستە و لێوەکان ناسراوە، هەروەها صحنەکە نەخشەی هاوسەنگی هەیە کە پیشەسازی کلاسیکی پیشان دەدات. نیشانەی تەمەنەی سرووشتی ڕەسەنی و بەهای مێژوویی پارچەکە زیاد دەکات. گونجاوە بۆ پیشاندانی مۆزەیی یان کۆمەڵگە تایبەتی، بە تەمەنێکی نزیکەی زیاتر لە ٥٠ ساڵ."
  },

  images: [
    cld("hoa-slv-088_zc0uv1")
  ],
  image: cld("hoa-slv-088_zc0uv1"),

  featured: true,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-095",

  name: {
    ar: "قبعة عثمانية تاريخية من اللباد",
    en: "Historical Ottoman Felt Hat",
    ku: "کڵاوێکی عوسمانی مێژوویی لە لێباد"
  },

  category: {
    ar: "إكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price:"1,500,000 د.ع",
  priceNumber:1500000,

  desc: {
    ar: "قبعة عثمانية أصلية مصنوعة من اللباد الطبيعي، تعود إلى أواخر العهد العثماني بعمر يتجاوز 140 سنة. تتميز بشكلها المخروطي التقليدي وزخارفها الخطية اليدوية التي تحمل عبارات وزخارف رمزية، منفذة بحبر داكن فوق نسيج اللباد. القطعة نادرة وتعكس هوية ثقافية وتاريخية عميقة، وكانت تُستخدم كجزء من الزي الرسمي أو الديني في تلك الحقبة. مناسبة للعرض المتحفي أو للاقتناء ضمن المجموعات التاريخية الخاصة.",
    en: "An original Ottoman felt hat made of natural felt, dating back to the late Ottoman period with an age exceeding 140 years. It features a traditional conical form and hand-drawn calligraphic decorations carrying symbolic inscriptions, executed in dark ink on felt fabric. A rare piece reflecting deep cultural and historical identity, historically used as part of official or religious attire. Suitable for museum display or private historical collections.",
    ku: "کڵاوێکی عوسمانی ڕەسەن لە لێبادی سرووشتی دروستکراو، کە بۆ کۆتایی سەردەمی عوسمانی دەگەڕێتەوە و زیاتر لە ١٤٠ ساڵ تەمەن هەیە. بە شێوەی کۆنیکی نەریتی و ڕازاندنی هێڵی دەستی ناسراوە کە نووسین و ڕەمزە مێژووییەکان لەخۆ دەگرن، بە مەرەکی ڕەش لەسەر نسیجی لێباد جێبەجێکراون. پارچەیەکی دەگمەنە کە ناسنامەی کەلتووری و مێژوویی قووڵ پیشان دەدات، و لەو سەردەمەدا وەک بەشێک لە جلی فەرمی یان ئایینی بەکاردەهات. گونجاوە بۆ پیشاندانی مۆزەیی یان کۆمەڵگەی مێژوویی تایبەتی."
  },

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

  name: {
    ar: "تراجي فضة أنيقة بحجر أسود",
    en: "Elegant Silver Earrings with Black Stone",
    ku: "گوڵاوێژی زیوی جوان بە بەردی ڕەش"
  },

  category: {
    ar: "إكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price: "150,000 د.ع",
  priceNumber:150000,

  desc: {
    ar: "زوج تراجي فضة أنتيك بتصميم فني أنيق، يتوسط كل قطعة حجر أسود مصقول داخل إطار فضي مزخرف بنقوش دقيقة مستوحاة من الطراز الكلاسيكي. القطعة تعكس توازناً مثالياً بين الجرأة والرقي، وتعود إلى فترة تقارب 40 سنة، مما يجعلها مناسبة للعرض المتحفي أو للاقتناء ضمن مجموعات الإكسسوارات التراثية المميزة.",
    en: "A pair of antique silver earrings with an elegant artistic design, each centered with a polished black stone set within a finely decorated silver frame inspired by classical style. The piece reflects an ideal balance between boldness and sophistication, dating back approximately 40 years, making it suitable for museum display or distinguished heritage accessory collections.",
    ku: "دوو گوڵاوێژی زیوی ئەنتیک بە دیزاینێکی هونەری جوان، هەر یەکێک لە بەردێکی ڕەشی پۆڵیشکراو پێکهاتووە کە لە ناو چوارچێوەیەکی زیویی ورد بە شێوازی کلاسیکی ڕازێنراو دانراوە. پارچەکە هاوسەنگی نێوان بوێری و شێوەدارێتی پیشان دەدات و تەمەنەکەی نزیکەی ٤٠ ساڵە، بۆیە گونجاوە بۆ پیشاندانی مۆزەیی یان کۆمەڵگەی ئێکسسسواراتی میراثی تایبەتی."
  },

  images: [
    cld("hoa-acc-098_agd3ry")
  ],
  image: cld("hoa-acc-098_agd3ry"),

  featured: true,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-104_to6lvl",

  name: {
    ar: "محبس فضة أنيق بتصميم كلاسيكي",
    en: "Elegant Silver Ring with Classical Design",
    ku: "ئەنگوستەوانەی زیوی جوان بە دیزاینی کلاسیکی"
  },

  category: {
    ar: "إكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price:"250,000 د.ع",
  priceNumber:250000,

  desc: {
    ar: "محبس فضة أنتيك بتصميم بسيط وأنيق، يتميز بتفصيلة هندسية ناعمة تتوسطها وردة فضية صغيرة تضفي لمسة رقي هادئة. القطعة تعكس ذوقاً كلاسيكياً راقياً ومناسبة للاستخدام اليومي أو للعرض ضمن مجموعات الإكسسوارات التراثية، مع عمر تقريبي يتجاوز 30 سنة.",
    en: "An antique silver ring with a simple and elegant design, featuring a subtle geometric detail centered with a small silver floral motif that adds a refined and calm touch. The piece reflects a refined classical taste and is suitable for daily wear or display within heritage accessory collections, with an approximate age of over 30 years.",
    ku: "ئەنگوستەوانەیەکی زیوی ئەنتیک بە دیزاینێکی سادە و جوان، تایبەتمەندییەکی هندەسی نرمی هەیە کە لە ناوەڕاستیدا گوڵێکی زیویی بچووک دانراوە و دەستەوەردێکی ئارام و فەخمی پێدەدات. پارچەکە ذوقێکی کلاسیکی بەرز پیشان دەدات و گونجاوە بۆ بەکارهێنانی ڕۆژانە یان پیشاندانی لە کۆمەڵگەی ئێکسسسواراتی میراثی، بە تەمەنێکی نزیکەی زیاتر لە ٣٠ ساڵ."
  },

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

  name: {
    ar: "خاتم فضة أنتيك مجدول بتصميم تراثي",
    en: "Antique ring Silver Bracelet with Heritage Design",
    ku: "دەستبەندێکی زیوی ئەنتیک بە شێوەی پێچراو و دیزاینی میراثی"
  },

  category: {
    ar: "إكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price:"180,000 د.ع",
  priceNumber:180000,

  desc: {
    ar: "سوار فضة أنتيك بتصميم مجدول متقن، يتكوّن من أسلاك فضية متعددة متشابكة بانسيابية تعكس حرفية عالية وذوقاً تراثياً راقياً. القطعة تجمع بين القوة الجمالية والبساطة الكلاسيكية، وتناسب العرض المتحفي أو الاقتناء ضمن مجموعات الإكسسوارات النادرة، مع عمر تقريبي يتجاوز 40 سنة.",
    en: "An antique silver bracelet with an intricate braided design, composed of multiple interwoven silver wires flowing harmoniously to reflect high craftsmanship and refined heritage taste. The piece combines aesthetic strength with classical simplicity, making it suitable for museum display or inclusion in rare accessory collections, with an approximate age of over 40 years.",
    ku: "دەستبەندێکی زیوی ئەنتیک بە دیزاینێکی پێچراوی ورد، پێکهاتوو لە چەندین تارە زیویی تێکەڵبوو کە بە نرمی پێکەوە پێچراون و پیشەسازی بەرز و ذوقی میراثی بەرز پیشان دەدات. پارچەکە بەهێزی جوانی و سادەیی کلاسیکی تێکەڵ دەکات و گونجاوە بۆ پیشاندانی مۆزەیی یان کۆمەڵگەی ئێکسسسواراتی دەگمەن، بە تەمەنێکی نزیکەی زیاتر لە ٤٠ ساڵ."
  },

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

  name: {
    ar: "خاتم فضة أنتيك متعدد الأسلاك بتفصيل مركزي",
    en: "Antique Multi-Wire Silver Ring with Central Detail",
    ku: "خاتمی زیوی ئەنتیک بە چەندین تار و وردەکاری ناوەندی"
  },

  category: {
    ar: "إكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price:"299,000د.ع",
  priceNumber:299000,

  desc: {
    ar: "خاتم فضة أنتيك بتصميم يعتمد على أسلاك فضية متعددة ومتوازية، تتجمع في المنتصف بتفصيل زخرفي دقيق يمنح القطعة حضوراً قوياً ومتوازناً. يتميز بطابع تراثي واضح مع لمسة هندسية أنيقة، ويعد قطعة مثالية للاقتناء أو العرض المتحفي ضمن مجموعات الإكسسوارات النادرة، مع عمر تقريبي يتجاوز 45 سنة.",
    en: "An antique silver ring featuring a design based on multiple parallel silver wires, gathered at the center with a finely crafted decorative detail that gives the piece a strong and balanced presence. It carries a clear heritage character with an elegant geometric touch, making it ideal for collection or museum display within rare accessory collections, with an approximate age of over 45 years.",
    ku: "خاتمێکی زیوی ئەنتیک پێکهاتوو لە چەندین تاری زیویی هاوتا و فرە کە لە ناوەڕاستدا بە وردەکارییەکی ڕازێنراوی ورد کۆدەبنەوە و ئامادەییەکی بەهێز و هاوسەنگ دروست دەکەن. تایبەتمەندییەکی میراثی ڕوون و تێکەڵ بە دەستەوەردێکی هندەسی جوان هەیە، و پارچەیەکی گونجاوە بۆ کۆکردنەوە یان پیشاندانی مۆزەیی لە کۆمەڵگەی ئێکسسسواراتی دەگمەن، بە تەمەنێکی نزیکەی زیاتر لە ٤٥ ساڵ."
  },

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

  name: {
    ar: "محبس فضة بتصميم هندسي بحجر أسود",
    en: "Geometric Silver Ring with Black Stone",
    ku: "ئەنگوستەوانەی زیوی بە دیزاینی هندەسی و بەردی ڕەش"
  },

  category: {
    ar: "إكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price:"120,000 د.ع",
  priceNumber:120000,

  desc: {
    ar: "محبس فضة أنتيك بتصميم هندسي مميز، يتوسطه حجر أسود مصقول بخط انسيابي منحني، محاط بتفاصيل نقطية فضية دقيقة تضيف تبايناً جمالياً واضحاً. القطعة تحمل طابعاً فنياً معاصراً بروح تراثية، وتناسب عشاق الإكسسوارات النادرة ذات الهوية القوية، مع عمر تقريبي يزيد عن 30 سنة.",
    en: "An antique silver ring with a distinctive geometric design, centered with a polished black stone set along a smooth curved line, surrounded by fine dotted silver details that create a striking visual contrast. The piece carries a contemporary artistic character with a heritage spirit, making it ideal for collectors of rare accessories with strong identity, with an approximate age of over 30 years.",
    ku: "ئەنگوستەوانەیەکی زیوی ئەنتیک بە دیزاینێکی هندەسی تایبەت، لە ناوەڕاستیدا بەردێکی ڕەشی پۆڵیشکراو دانراوە بە هێڵێکی نرمی خەمراو، دەوروبەریش بە وردەکارییە خاڵی زیویی ڕازێنراوە کە جیاوازییەکی بینراوی بەهێز دروست دەکات. پارچەکە تایبەتمەندی هونەری هاوچەرخ بە ڕووحێکی میراثی هەیە و گونجاوە بۆ ئەوانەی حەزیان بە ئێکسسسواراتی دەگمەن و ناسنامەی بەهێز هەیە، بە تەمەنێکی نزیکەی زیاتر لە ٣٠ ساڵ."
  },

  images: [
    cld("hoa-acc-100_itf2qj")
  ],
  image: cld("hoa-acc-100_itf2qj"),

  featured: true,
  createdAt: "2026-01-03",
  status: "available",
  auction: false
},
{
  id: "hoa-acc-099_e2iwbw",

  name: {
    ar: "تراجي فضة بتصميم قطرة مزدوجة",
    en: "Silver Earrings with Double Teardrop Design",
    ku: "گوڵاوێژی زیوی بە دیزاینی دوو فرمێسک"
  },

  category: {
    ar: "إكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price:"180,000 د.ع",
  priceNumber:180000,

  desc: {
    ar: "زوج تراجي فضة أنتيك بتصميم أنيق يعتمد على خطوط انسيابية مفتوحة تنتهي بقطرة فضية متحركة، ما يمنح القطعة خفة بصرية وحركة ناعمة عند الارتداء. التصميم يجمع بين البساطة والرقي مع طابع فني هادئ، مناسب للمجموعات الكلاسيكية أو العرض المتحفي، مع عمر تقريبي يتجاوز 30 سنة.",
    en: "A pair of antique silver earrings featuring an elegant design based on open flowing lines that end with a movable silver teardrop, giving the piece a light visual feel and gentle movement when worn. The design blends simplicity and sophistication with a calm artistic character, suitable for classical collections or museum display, with an approximate age of over 30 years.",
    ku: "دوو گوڵاوێژی زیوی ئەنتیک بە دیزاینێکی جوان کە لە هێڵە نرمییە کراوەکان پێکهاتووە و بە فرمێسکێکی زیویی جوڵاو کۆتایی دێت، کە سوکی بینراوی و جوڵەیەکی ئارام لە کاتی پۆشین دروست دەکات. دیزاینەکە سادەیی و شێوەدارێتی لەگەڵ تایبەتمەندی هونەری ئارام تێکەڵ دەکات، گونجاوە بۆ کۆمەڵگە کلاسیکی یان پیشاندانی مۆزەیی، بە تەمەنێکی نزیکەی زیاتر لە ٣٠ ساڵ."
  },

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

  name: {
    ar: "لوحة خط عربي مؤطرة بإطار خشبي",
    en: "Framed Arabic Calligraphy Artwork in Wooden Frame",
    ku: "تابلۆی خەتّی عەرەبی لە ناو چوارچێوەی دارێکی ڕازێنراو"
  },

  category: {
    ar: "خطوط عربية",
    en: "Arabic Calligraphy",
    ku: "خەتە عەرەبییەکان"
  },

  price:"300,000 د.ع",
  priceNumber:300000,

  desc: {
    ar: "لوحة خط عربي أصيلة مكتوبة بأسلوب كلاسيكي متوازن، منفذة على ورق تقليدي ومؤطرة بإطار خشبي أنيق. تحمل العمل روحاً روحانية وجمالية عالية، مع انسجام دقيق بين التكوين الخطي والمساحات، ما يجعلها قطعة مميزة للعرض الجداري أو للمجموعات الفنية الخاصة. أبعاد اللوحة 60 × 30 سم، مع عمر تقريبي يتجاوز 60 سنة.",
    en: "An authentic Arabic calligraphy artwork written in a balanced classical style, executed on traditional paper and framed in an elegant wooden frame. The piece conveys a strong spiritual and aesthetic presence, with refined harmony between calligraphic composition and spatial balance. Ideal for wall display or private art collections. Dimensions: 60 × 30 cm, with an approximate age exceeding 60 years.",
    ku: "تابلۆیەکی ڕەسەنی خەتّی عەرەبی بە شێوازی کلاسیکی هاوسەنگ نووسراو، لەسەر پەڕەی نەریتی جێبەجێکراو و لە ناو چوارچێوەیەکی دارێکی جوان دانراوە. پارچەکە ڕووحێکی ڕووحانی و جوانی بەرز لەخۆ دەگرێت، بە هاوسەنگی ورد لە نێوان پێکهاتەی خەت و بۆشاییەکان. گونجاوە بۆ پیشاندانی سەردیواری یان کۆمەڵگەی هونەری تایبەتی. قەبارە: ٦٠ × ٣٠ سم، بە تەمەنێکی نزیکەی زیاتر لە ٦٠ ساڵ."
  },

  dimensions: {
    width_cm: 60,
    height_cm: 30
  },

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

  name: {
    ar: "سماور نحاس عثماني قديم",
    en: "Antique Ottoman Copper Samovar",
    ku: "سەماوەری نەحاسی عوسمانی کۆن"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price:"300,000 د.ع",
  priceNumber:300000,

  desc: {
    ar: "سماور نحاسي أنتيك يعود إلى الحقبة العثمانية، مصنوع يدوياً بدقة عالية ويتميز بجسم أسطواني متوازن، مقابض جانبية مزخرفة وصنبور أصلي بحالة ممتازة. تظهر على السطح آثار الزمن الطبيعية التي تضيف قيمة تاريخية وجمالية للقطعة. يُعد هذا السماور قطعة متحفية نادرة ومناسبة للعرض في المجالس التراثية أو ضمن المجموعات الخاصة الراقية، مع عمر تقريبي يتجاوز 100 عام.",
    en: "An antique copper samovar dating back to the Ottoman period, handcrafted with high precision and featuring a well-balanced cylindrical body, ornate side handles, and an original spout in excellent condition. Natural signs of age on the surface enhance its historical and aesthetic value. This samovar is considered a rare museum piece, suitable for display in heritage settings or refined private collections, with an approximate age exceeding 100 years.",
    ku: "سەماوەریەکی نەحاسی ئەنتیک کە بۆ سەردەمی عوسمانی دەگەڕێتەوە، بە دەست دروستکراو بە وردی زۆر و جەستەیەکی ئاستوانەی هاوسەنگی هەیە، دەستگێرە ڕازێنراوەکان و فاووسێکی ڕەسەن لە دۆخی زۆر باش. نیشانەکانی تەمەن لەسەر ڕووکارەکە نرخ و جوانی مێژوویی پارچەکە بەرز دەکات. ئەم سەماوەرە پارچەیەکی دەگمەنەی مۆزەییە و گونجاوە بۆ پیشاندانی لە شوێنە میراثییەکان یان کۆمەڵگە تایبەتییە فەخمییەکان، بە تەمەنێکی نزیکەی زیاتر لە ١٠٠ ساڵ."
  },

  images: [
    cld("hoa-sam-095_p3hux2"),
    cld("hoa-sam-096_vnfdwl")
  ],
  image: cld("hoa-sam-095_p3hux2"),

  featured: false,
  createdAt: "2026-01-08",
  status: "available",
  auction: false
},
{
  id: "hoa-box-114_dvesnf",

  name: {
    ar: "صندوق خشبي هندي أثري",
    en: "Antique Indian Wooden Chest",
    ku: "سندوقی دارەکی هندی کۆن"
  },

  category: {
    ar: "خشب",
    en: "Wood",
    ku: "دار"
  },

  price:"1,750,000 د.ع",
  priceNumber:1750000,

  desc: {
    ar: "صندوق خشبي هندي أنتيك مصنوع يدوياً من الخشب الصلب، يتميز بزوايا مدعّمة بصفائح معدنية مزخرفة وقفـل أمامي أصلي يعكس الحرفية التقليدية للهند في القرن التاسع عشر. تظهر على الخشب آثار الزمن الطبيعية التي تضيف عمقاً تاريخياً وقيمة جمالية عالية للقطعة. يُستخدم الصندوق تقليدياً لحفظ المقتنيات الثمينة أو الأقمشة، ويُعد اليوم قطعة متحفية فريدة مناسبة للعرض أو للاقتناء ضمن المجموعات الخاصة، مع عمر تقريبي يتجاوز 120 عاماً.",
    en: "An antique Indian wooden chest handcrafted from solid wood, distinguished by metal-reinforced corners adorned with decorative plates and an original front lock reflecting traditional Indian craftsmanship of the 19th century. Natural signs of aging on the wood add historical depth and high aesthetic value. Traditionally used for storing valuable belongings or textiles, this chest is now a unique museum-worthy piece suitable for display or private collections, with an approximate age exceeding 120 years.",
    ku: "سندوقێکی دارەکی هندی ئەنتیک کە بە دەست لە دارێکی بەهێز دروستکراوە، تایبەتمەندییەکانی بریتین لە گوشە پشتیوانکراوەکان بە پڵەی ئاسنە ڕازێنراو و قفڵێکی پێشەوەی ڕەسەن کە پیشەسازی نەریتی هندی لە سەدەی نۆزدەهەم پیشان دەدات. نیشانەکانی تەمەن لەسەر دارەکە قووڵییەکی مێژوویی و نرخێکی جوانی بەرز پێدەدات. بە شێوەی نەریتی بۆ پاراستنی شتە بەنرخەکان یان پارچە جل بەکارهاتووە، و ئێستا پارچەیەکی دەگمەنەی مۆزەییە گونجاو بۆ پیشاندانی یان کۆمەڵگە تایبەتی، بە تەمەنێکی نزیکەی زیاتر لە ١٢٠ ساڵ."
  },

  images: [
    cld("hoa-box-114_dvesnf")
  ],
  image: cld("hoa-box-114_dvesnf"),

  featured: true,
  createdAt: "2026-01-08",
  status: "available",
  auction: false
},
{
  id: "hoa-art-116_b8ytar",

  name: {
    ar: "لوحة فنية بإطار خشبي",
    en: "Fine Art Painting with Wooden Frame",
    ku: "تابلۆی هونەری لە ناو چوارچێوەی دارێکی ڕازێنراو"
  },

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  price:"9,000,000 د.ع",
  priceNumber:9000000,

  desc: {
    ar: "لوحة فنية أصلية مرسومة بأسلوب واقعي تعبيري، تجسّد مشهداً اجتماعياً تقليدياً بملابس شعبية وألوان هادئة تعكس الحياة اليومية والروح الشرقية. مؤطرة بإطار خشبي بايطار يدوي الصنع، مزخرف بنقوش دقيقة تضيف عمقاً وفخامة للعمل. الإطار واللوحة يشكّلان وحدة فنية متكاملة، مناسبة للعرض المتحفي أو لاقتناء جامعي الأعمال الفنية، مع أبعاد مربعة 90 × 90 سم تمنحها حضوراً بصرياً قوياً.",
    en: "An original fine art painting executed in a realistic expressive style, depicting a traditional social scene with folk attire and calm colors that reflect daily life and an Eastern spirit. Framed in a handcrafted wooden frame adorned with delicate carvings that add depth and elegance to the artwork. The painting and frame form a cohesive artistic unit, suitable for museum display or fine art collectors. Square dimensions of 90 × 90 cm give it a strong visual presence.",
    ku: "تابلۆیەکی هونەری ڕەسەن بە شێوازی ڕاستەقینە–دەربڕینی وێنەکراو، کە دیمەنێکی کۆمەڵایەتی نەریتی بە جل‌وبەرگی گەلی و ڕەنگە ئارامەکان پیشان دەدات و ژیانی ڕۆژانە و ڕووحی ڕۆژهەڵات دەگوازێتەوە. لە ناو چوارچێوەیەکی دارێکی بە دەست دروستکراو و ڕازێنراو دانراوە کە بە نەخشە وردەکان قووڵی و فەخمی بۆ کارەکە زیاد دەکات. تابلۆ و چوارچێوەکە یەکەیەکی هونەری تەواو پێکدەهێنن، گونجاو بۆ پیشاندانی مۆزەیی یان کۆکردنەوەی کۆلێکتۆرە هونەرییەکان. قەبارەی چوارگۆشە ٩٠ × ٩٠ سم ئامادەییەکی بینراوی بەهێز پێدەدات."
  },

  dimensions: {
    width_cm: 90,
    height_cm: 90
  },

  images: [
    cld("hoa-art-116_yjc4gu")
  ],
  image: cld("hoa-art-116_yjc4gu"),

  featured: true,
  createdAt: "2026-01-08",
  status: "available",
  auction: false
},
{
  id: "hoa-art-116_yjc4gu",

  name: {
    ar: "لوحة فرنسية لفارس على صهوة جواد",
    en: "French Painting of a Cavalry Rider on Horseback",
    ku: "تابلۆی فەرەنسی بۆ فاریسێک لەسەر ئەسپ"
  },

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  price:"170,000 د.ع",
  priceNumber:170000,

  desc: {
    ar: "لوحة فرنسية أصلية بأسلوب كلاسيكي تمثل فارساً بزي عسكري تقليدي على صهوة جواد، مرسومة بدقة عالية وتفاصيل لونية متوازنة تعكس روح الفروسية الأوروبية في القرن التاسع عشر. مؤطرة بإطار خشبي أنيق مع بطانة داخلية باللون العنابي تضيف عمقاً وفخامة للعمل. قطعة مميزة تناسب العرض المتحفي أو مقتنيات جامعي الأعمال الفنية، بأبعاد 45 × 30 سم.",
    en: "An original French painting in a classical style depicting a cavalry rider in traditional military attire on horseback. Executed with high precision and balanced color details, it reflects the spirit of European chivalry in the 19th century. Framed in an elegant wooden frame with an inner burgundy lining that adds depth and sophistication. A distinguished piece suitable for museum display or fine art collectors, with dimensions of 45 × 30 cm.",
    ku: "تابلۆیەکی فەرەنسی ڕەسەن بە شێوازی کلاسیکی کە فاریسێک بە جل‌وبەرگی سەربازی نەریتی لەسەر ئەسپ پیشان دەدات. بە وردی بەرز و ڕەنگدانێکی هاوسەنگ وێنەکراوە و ڕووحی فروسەتی ئەورووپی لە سەدەی نۆزدەهەم دەگوازێتەوە. لە ناو چوارچێوەیەکی دارێکی جوان دانراوە بە پێچەوانەی ناوەوەیی بە ڕەنگی عەننابی کە قووڵی و فەخمی بۆ کارەکە زیاد دەکات. پارچەیەکی دیاریکراو بۆ پیشاندانی مۆزەیی یان کۆکردنەوەی کۆلێکتۆرە هونەرییەکان، بە قەبارەی ٤٥ × ٣٠ سم."
  },

  dimensions: {
    width_cm: 45,
    height_cm: 30
  },

  images: [
    cld("hoa-art-117_su77oh")
  ],
  image: cld("hoa-art-117_su77oh"),

  featured: false,
  createdAt: "2026-01-08",
  status: "available",
  auction: false
},
{
  id: "hoa-cop-094_wbhcun",

  name: {
    ar: "شمعدانات نحاس زوج طويل",
    en: "Pair of Tall Antique Copper Candlesticks",
    ku: "دوو شمعدانێکی نەحاسی درێژ و کۆن"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price:"500,000 د.ع",
  priceNumber:500000,

  desc: {
    ar: "زوج شمعدانات نحاسية أنتيك بتصميم كلاسيكي رشيق، يتميز بارتفاعه اللافت وشكله المخروطي المتدرج الذي يعكس أناقة القطع الأوروبية القديمة. النحاس محتفظ بلمعانه الطبيعي مع طبقة باتينا خفيفة تضيف عمقاً تاريخياً وجمالاً بصرياً. قطعة مثالية للعرض المتحفي، الصالات الفاخرة أو الطاولات الجانبية، بطول تقريبي 60 سم لكل شمعدان.",
    en: "A pair of antique copper candlesticks with a refined classical design, distinguished by their tall height and graduated conical form that reflects the elegance of old European pieces. The copper retains its natural luster with a light patina layer that adds historical depth and visual richness. An ideal piece for museum display, luxurious halls, or side tables, with an approximate height of 60 cm for each candlestick.",
    ku: "دوو شمعدانێکی نەحاسی ئەنتیک بە دیزاینێکی کلاسیکی نرمی، کە بە بەرزییەکی دیار و شێوەی کۆنیکی هەنگاوەنگاو ناسراون و جوانی پارچە ئەورووپییە کۆنەکان پیشان دەدەن. نەحاسەکە بریقەی سرووشتی خۆی پاراستووە لەگەڵ چینێکی سووکی پاتینا کە قووڵی مێژوویی و جوانی بینراوی زیاد دەکات. پارچەیەکی گونجاو بۆ پیشاندانی مۆزەیی، هۆڵە فەخمییەکان یان مێزی لاوەکی، بە بەرزی نزیکەی ٦٠ سم بۆ هەر شمعدانێک."
  },

  dimensions: {
    height_cm: 60
  },

  images: [
    cld("hoa-cop-094_wbhcun")
  ],
  image: cld("hoa-cop-094_wbhcun"),

  featured: true,
  createdAt: "2026-01-08",
  status: "available",
  auction: false
},
{
  id: "hoa-cop-109_x3vwxq",

  name: {
    ar: "إبريق نحاس أنتيك بمقبض جانبي",
    en: "Antique Copper Pitcher with Side Handle",
    ku: "ئیبریقی نەحاسی ئەنتیک بە دەستگێری لاوەکی"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price:"800,000 د.ع",
  priceNumber:800000,

  desc: {
    ar: "إبريق نحاسي أنتيك بتصميم كلاسيكي متوازن، يتميز بجسم منتفخ مزخرف بخطوط طولية ناعمة تعكس مهارة الطرق اليدوي، مع عنق متدرج وفوهة واسعة ذات حافة متموجة. المقبض الجانبي المنحني يضيف لمسة أناقة ووظيفة عملية في آنٍ واحد. يحتفظ النحاس بباتينا طبيعية دافئة تدل على عمر القطعة وأصالتها، مما يجعلها مثالية للعرض المتحفي أو لإضفاء طابع تراثي فاخر على أي مساحة داخلية.",
    en: "An antique copper pitcher with a well-balanced classical design, featuring a rounded body decorated with soft vertical lines that reflect skilled hand-hammering, along with a tapered neck and a wide spout with a gently waved rim. The curved side handle adds both elegance and practical function. The copper retains a warm natural patina that indicates the piece’s age and authenticity, making it ideal for museum display or to add a refined heritage character to any interior space.",
    ku: "ئیبریقێکی نەحاسی ئەنتیک بە دیزاینێکی کلاسیکی هاوسەنگ، کە جەستەیەکی قۆڵەوانی هەیە بە هێڵە درێژە نرمی ڕازێنراو کە پیشەسازی لێدانە دەستییەکان پیشان دەدات، لەگەڵ گەردنێکی پلەپلە و دەمی فراوان بە قەداغەی موجدار. دەستگێری لاوەکی خەمراو جوانی و سوودمەندییەک لە یەک کاتدا زیاد دەکات. نەحاسەکە پاتینایەکی سرووشتی گەرم هەیە کە تەمەن و ڕەسەنی پارچەکە دەردەخات، بۆیە گونجاوە بۆ پیشاندانی مۆزەیی یان زیادکردنی تایبەتمەندی میراثی فەخمی بۆ هەر شوێنێکی ناوەوە."
  },

  images: [
    cld("hoa-cop-109_x3vwxq")
  ],
  image: cld("hoa-cop-109_x3vwxq"),

  featured: true,
  createdAt: "2026-01-08",
  status: "available",
  auction: false
},
{
  id: "hoa-cop-111_mytxio",

  name: {
    ar: "موقد نحاس أثري قائم مع إبريق",
    en: "Antique Standing Copper Burner with Pitcher",
    ku: "موقدێکی نەحاسی ئەثەری ڕاوەستاو لەگەڵ ئیبریق"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price:"1,560,000 د.ع",
  priceNumber:1560000,

  desc: {
    ar: "قطعة نحاسية أثرية نادرة تتكون من موقد قائم على قاعدة ثلاثية مع وعاء علوي مثقّب وإبريق مزخرف منفصل، مصنوعة يدوياً بزخارف نباتية دقيقة تعكس مهارة الحرفيين في القرن التاسع عشر. كانت تُستخدم لتسخين المشروبات أو الماء في البيوت الراقية، وتُعد اليوم قطعة متحفية استثنائية للعرض أو الاقتناء الخاص. الارتفاع الكلي يقارب متراً واحداً، ما يمنحها حضوراً مهيباً في أي مساحة.",
    en: "A rare antique copper piece consisting of a standing burner on a tripod base, featuring a perforated upper vessel and a separate decorated pitcher. Handcrafted with fine botanical engravings that reflect the skill of 19th-century artisans. Traditionally used for heating beverages or water in refined households, it is now an exceptional museum-worthy piece for display or private collection. The total height is approximately one meter, giving it a commanding presence in any space.",
    ku: "پارچەیەکی نەحاسی ئەثەری دەگمەن کە پێکهاتووە لە موقدێکی ڕاوەستاو لەسەر بنەمای سێ‌پێیی، لەگەڵ قاپێکی سەروویی کوندار و ئیبریقێکی ڕازێنراوی جیاواز. بە دەست دروستکراوە بە نەخشە گیایینی ورد کە پیشەسازی هونەرمەندانی سەدەی نۆزدەهەم پیشان دەدات. لە کاتی خۆیدا بۆ گەرمکردنەوەی خواردنەوەکان یان ئاوی گەرم لە ماڵە فەخمییەکان بەکارهاتووە، و ئێستا پارچەیەکی مۆزەیی نایابە بۆ پیشاندانی یان کۆکردنەوەی تایبەتی. بەرزی گشتی نزیکەی یەک مەترە، کە ئامادەییەکی مەزن بۆ هەر شوێنێک دروست دەکات."
  },

  dimensions: {
    height_cm: 100
  },

  images: [
    cld("hoa-cop-111_mytxio"),
    cld("hoa-cop-111-1_rpbskz")
  ],
  image: cld("hoa-cop-111_mytxio"),

  featured: true,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-cop-122_fkkhcj",

  name: {
    ar: "إبريق قهوة نحاسي عثماني",
    en: "Ottoman Copper Coffee Pot",
    ku: "ئیبریقی قاوەی نەحاسی عوسمانی"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price:"265,000 د.ع",
  priceNumber:265000,

  desc: {
    ar: "إبريق قهوة نحاسي أثري يعود إلى الحقبة العثمانية، مصنوع يدوياً بزخارف بارزة دقيقة عند العنق مع بدن مخدد يعكس أسلوباً عملياً وجمالياً في آنٍ واحد. يتميز بفوهة طويلة ومقبض منحني متوازن مع غطاء محكم، وكان يُستخدم لتقديم القهوة العربية أو التركية في المجالس الراقية. قطعة ذات طابع تاريخي أصيل، مناسبة للعرض المتحفي أو للاقتناء ضمن مجموعات النحاس النادرة.",
    en: "An antique copper coffee pot dating back to the Ottoman period, handcrafted with fine raised decorations around the neck and a fluted body that combines practicality with refined aesthetics. It features a long spout, a balanced curved handle, and a fitted lid, and was traditionally used for serving Arabic or Turkish coffee in elegant gatherings. A piece of authentic historical character, suitable for museum display or inclusion in rare copper collections.",
    ku: "ئیبریقێکی قاوەی نەحاسی ئەثەری کە بۆ سەردەمی عوسمانی دەگەڕێتەوە، بە دەست دروستکراو بە نەخشە بەرزە وردەکان لە دەوروبەری گەردن و جەستەیەکی خۆڵەکانە کە سوودمەندی و جوانی لە یەک کاتدا تێکەڵ دەکات. فاووسێکی درێژ، دەستگێری خەمراوی هاوسەنگ و قاپێکی بەهێز هەیە، و لە کاتی خۆیدا بۆ پێشکەشکردنی قاوەی عەرەبی یان تورکی لە مەجلیسە فەخمییەکان بەکارهاتووە. پارچەیەکی ڕەسەنی مێژووییە کە گونجاوە بۆ پیشاندانی مۆزەیی یان کۆکردنەوەی کۆمەڵگەی نەحاسی دەگمەن."
  },

  images: [
    cld("hoa-cop-122_fkkhcj")
  ],
  image: cld("hoa-cop-122_fkkhcj"),

  featured: false,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-cop-115_m0sgch",

  name: {
    ar: "سِت دلال قهوة نحاس عثماني (4 قطع)",
    en: "Ottoman Copper Coffee Pot Set (4 Pieces)",
    ku: "سێتی دەلەی قاوەی نەحاسی عوسمانی (٤ پارچە)"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price:"750,000 د.ع",
  priceNumber:750000,

  desc: {
    ar: "سِت نادر من دلال القهوة النحاسية يضم أربع قطع متناسقة، تعود إلى الطراز العثماني الكلاسيكي. تتميز الدلال بأجسام منفوخة وقواعد ثابتة مع فوهات طويلة مصممة بدقة لتقديم القهوة، إضافة إلى أغطية مخروطية بقمم زخرفية أنيقة. تظهر على السطح آثار الزمن والباتينا الطبيعية التي تضيف قيمة تاريخية وجمالية عالية. مجموعة مثالية للعرض المتحفي أو للاقتناء ضمن مجموعات النحاس العثماني الفاخر.",
    en: "A rare set of four matching copper coffee pots in the classical Ottoman style. The pots feature bulbous bodies, stable bases, and long precision-crafted spouts designed for serving coffee, along with conical lids topped with elegant decorative finials. Natural signs of age and patina appear on the surface, adding significant historical and aesthetic value. An ideal set for museum display or inclusion in refined Ottoman copper collections.",
    ku: "سێتێکی دەگمەن لە دەلەی قاوەی نەحاسی کە لە چوار پارچەی هاوتا پێکهاتووە و بۆ شێوازی کلاسیکی عوسمانی دەگەڕێتەوە. دەلەکان جەستەی قۆڵەوان، بنەمای جێگیر و فاووسە درێژەکان هەیە کە بە وردی بۆ پێشکەشکردنی قاوە دروستکراون، هەروەها قاپە کۆنیکییەکان بە سەرەوەی ڕازێنراو. نیشانەکانی تەمەن و پاتینای سرووشتی لەسەر ڕووکارەکە دیارە، کە نرخێکی مێژوویی و جوانی بەرز بۆ کۆمەڵەکە زیاد دەکات. کۆمەڵەیەکی گونجاو بۆ پیشاندانی مۆزەیی یان کۆکردنەوەی کۆمەڵگەی نەحاسی عوسمانی فەخمی."
  },

  images: [
    cld("hoa-cop-115_m0sgch")
  ],
  image: cld("hoa-cop-115_m0sgch"),

  featured: false,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-cop-098_ypovbx",

  name: {
    ar: "قطعة نحاس بغطاء متحرك مزخرف",
    en: "Antique Copper Piece with Hinged Decorative Lid",
    ku: "پارچەیەکی نەحاسی ئەنتیک بە قاپێکی جوڵاو و ڕازێنراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price: "225,000د.ع",
  priceNumber: 225000,

  desc: {
    ar: "قطعة نحاسية أنتيك بغطاء متحرك، تتميز بشكل دائري متوازن وقاعدة منخفضة، مع زخارف نباتية محفورة بدقة على محيط الجسم الخارجي. يظهر على السطح أثر الباتينا الطبيعية الناتجة عن التقادم، ما يمنح القطعة طابعًا تاريخيًا أصيلًا وقيمة جمالية عالية. تصلح للعرض المتحفي أو للاقتناء ضمن مجموعات النحاس الكلاسيكي الفاخر.",
    en: "An antique copper piece with a hinged lid, distinguished by its balanced circular form and low base, featuring finely engraved botanical motifs around the outer body. The surface displays natural patina from aging, giving the piece an authentic historical character and high aesthetic value. Suitable for museum display or inclusion in refined classical copper collections.",
    ku: "پارچەیەکی نەحاسی ئەنتیک بە قاپێکی جوڵاو، کە بە شێوەیەکی بازنەیی هاوسەنگ و بنەمایەکی نزم ناسراوە، لەگەڵ نەخشە گیایینی ورد کە بە وردی لەسەر دەوری جەستەی دەرەوە کەندراون. نیشانەکانی پاتینای سرووشتی کە لە ئەنجامی تەمەن دروستبوون لەسەر ڕووکارەکە دیارن، کە ڕەسەنی مێژوویی و نرخێکی جوانی بەرز بۆ پارچەکە زیاد دەکات. گونجاوە بۆ پیشاندانی مۆزەیی یان کۆکردنەوەی کۆمەڵگەی نەحاسی کلاسیکی فەخمی."
  },

  images: [
    cld("hoa-cop-098_ypovbx")
  ],
  image: cld("hoa-cop-098_ypovbx"),

  featured: false,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-cop-097_dxlx35",

  name: {
    ar: "وعاء نحاس بغطاء مزخرف دائري",
    en: "Antique Copper Bowl with Circular Decorated Lid",
    ku: "قابێکی نەحاسی بە قاپی بازنەیی ڕازێنراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price:"225,000",
  priceNumber:225000,

  desc: {
    ar: "وعاء نحاسي أنتيك بغطاء دائري مزخرف بالكامل بنقوش هندسية دائرية دقيقة تتوسط السطح العلوي، مع زخارف متكررة على الجوانب الخارجية. يتميز العمل بتناسق عالي في الشكل وانحناءات ناعمة، إضافة إلى طبقة باتينا طبيعية واضحة تعكس قدم القطعة وأصالتها. قطعة ذات طابع شرقي تقليدي، مناسبة للعرض المتحفي أو للاقتناء ضمن مجموعات النحاس النادر.",
    en: "An antique copper bowl with a circular lid fully decorated with fine circular geometric engravings centered on the top surface, complemented by repeated ornamental motifs along the outer sides. The piece is distinguished by its harmonious proportions and smooth curves, along with a clear natural patina that reflects its age and authenticity. A traditional Eastern-style piece, suitable for museum display or inclusion in rare copper collections.",
    ku: "قابێکی نەحاسی ئەنتیک بە قاپێکی بازنەیی کە بە تەواوی بە نەخشە هندەسییە بازنەیی ورد ڕازێنراوە و لە ناوەڕاستی سەروەوەکە دیارن، لەگەڵ نەخشە دووبارەبووەکان لەسەر لاکانە دەرەوەکان. پارچەکە بە هاوسەنگی بەرز لە شێوە و خەم‌وخواربوونە نرمییەکان ناسراوە، هەروەها پاتینایەکی سرووشتی ڕوون هەیە کە تەمەن و ڕەسەنی پارچەکە پیشان دەدات. پارچەیەکی شێوازی ڕۆژهەڵاتی نەریتییە کە گونجاوە بۆ پیشاندانی مۆزەیی یان کۆکردنەوەی کۆمەڵگەی نەحاسی دەگمەن."
  },

  images: [
    cld("hoa-cop-097_dxlx35")
  ],
  image: cld("hoa-cop-097_dxlx35"),

  featured: false,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-sam-110_ww2mxh",

  name: {
    ar: "سماور مغولي ضخم مطعّم بكهرمان",
    en: "Large Mughal Copper Samovar Inlaid with Amber",
    ku: "سەماوەری مەغۆلی گەورە بە کەهرەبای تێکخراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price:"15,000,000 د.ع",
  priceNumber:15000000,

  desc: {
    ar: "سماور مغولي ضخم بارتفاع 95 سم، مصنوع من النحاس ومزيّن بنقوش يدوية دقيقة تغطي البدن بالكامل. يتميز بتطعيمات من الكهرمان الأحمر موزعة بتناغم داخل زخارف بارزة تمنح القطعة حضورًا ملكيًا لافتًا. يحتوي على مقبضين جانبيين وصنبور أمامي وقاعدة ثابتة بلمسات زخرفية، مع باتينا طبيعية تعكس قدمه وأصالته. قطعة نادرة مناسبة لواجهات العرض المتحفي أو لمجموعات الاقتناء الفاخر.",
    en: "A large Mughal copper samovar standing 95 cm tall, crafted from copper and adorned with finely hand-engraved patterns covering the entire body. It features harmoniously placed red amber inlays within raised decorative motifs, giving the piece a striking royal presence. Equipped with two side handles, a front spout, and a stable base with ornamental details, along with a natural patina that reflects its age and authenticity. A rare piece ideal for museum showcases or prestigious private collections.",
    ku: "سەماوەریەکی مەغۆلی زۆر گەورە بە بەرزی ٩٥ سم، لە نەحاس دروستکراو و بە نەخشە دەستییە وردەکان ڕازێنراو کە هەموو جەستەکە دەگرن. کەهرەبای سوور بە شێوەیەکی هاوسەنگ لە ناو نەخشە بەرزەکاندا تێکخراوە و ئامادەییەکی شاهانە و دیار دروست دەکات. دوو دەستگێری لاوەکی، فاووسێکی پێشەوە و بنەمایەکی جێگیر بە وردەکاری ڕازێنراو هەیە، لەگەڵ پاتینایەکی سرووشتی کە تەمەن و ڕەسەنی پارچەکە پیشان دەدات. پارچەیەکی دەگمەنە کە گونجاوە بۆ پیشاندانی مۆزەیی یان کۆمەڵگەی کۆکردنەوەی فەخمی."
  },

  dimensions: {
    height_cm: 95
  },

  images: [
    cld("hoa-sam-110_ww2mxh"),
        cld("hoa-sam-110-2_bnlqrx"),
                cld("hoa-sam-110-1_bc8k6d")
  ],
  image: cld("hoa-sam-110_ww2mxh"),

  featured: true,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-sam-092_mbpia3",

  name: {
    ar: "سماور نحاسي دائري",
    en: "Round Copper Samovar",
    ku: "سەماوەری نەحاسی بازنەیی"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price:"150,000 د.ع",
  priceNumber:150000,

  desc: {
    ar: "سماور نحاسي دائري بتصميم كلاسيكي متوازن، يتميز ببدن كروي مصقول مع صنبور أمامي تقليدي ومقبضين جانبيين وحافة علوية مزخرفة بتفاصيل دقيقة. يستند على قاعدة نحاسية ثابتة بأقدام قصيرة، مع باتينا طبيعية تعكس عمر القطعة واستخدامها التاريخي. قطعة أنيقة تناسب العرض المتحفي أو الديكور التراثي الراقي.",
    en: "A round copper samovar with a balanced classical design, featuring a polished spherical body with a traditional front spout, two side handles, and a finely decorated upper rim. It rests on a stable copper base with short feet and displays a natural patina that reflects the piece’s age and historical use. An elegant item suitable for museum display or refined heritage décor.",
    ku: "سەماوەریەکی نەحاسی بازنەیی بە دیزاینێکی کلاسیکی هاوسەنگ، جەستەیەکی گۆڵاو پۆڵیشکراوی هەیە لەگەڵ فاووسێکی پێشەوەی نەریتی، دوو دەستگێری لاوەکی و قەداغەیەکی سەروویی ڕازێنراو بە وردەکاری نرمی. لەسەر بنەمایەکی نەحاسی جێگیر بە پێی کورت ڕاوەستاوە و پاتینایەکی سرووشتی پیشان دەدات کە تەمەن و بەکارهێنانی مێژوویی پارچەکە دەردەخات. پارچەیەکی جوان گونجاو بۆ پیشاندانی مۆزەیی یان دیکۆری میراثی فەخمی."
  },

  images: [
    cld("hoa-sam-092_mbpia3")
  ],
  image: cld("hoa-sam-092_mbpia3"),

  featured: false,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-sam-91_zhykcb",

  name: {
    ar: "سماور نحاسي كلاسيكي مزخرف",
    en: "Decorated Classical Copper Samovar",
    ku: "سەماوەری نەحاسی کلاسیکی ڕازێنراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price:"450,000 د.ع",
  priceNumber:450000,

  desc: {
    ar: "سماور نحاسي بتصميم كلاسيكي أنيق، يتميز ببدن مخروطي مضلع مع زخارف بارزة ومقبضين جانبيين منحوتين وصنبور أمامي تقليدي. يستند على قاعدة مزخرفة بأقدام منحنية، مع باتينا طبيعية تعكس عمر القطعة واستخدامها التراثي. قطعة مناسبة للعرض المتحفي أو للاستخدام الزخرفي في المساحات الكلاسيكية.",
    en: "A copper samovar with an elegant classical design, featuring a faceted conical body adorned with raised decorative motifs, carved side handles, and a traditional front spout. It rests on a decorated base with curved feet and shows a natural patina that reflects the piece’s age and heritage use. Suitable for museum display or decorative use in classical interiors.",
    ku: "سەماوەریەکی نەحاسی بە دیزاینێکی کلاسیکی جوان، کە جەستەیەکی کۆنیکی پڵەدار هەیە بە نەخشە بەرزەکان، دوو دەستگێری دەست‌کەندراو و فاووسێکی پێشەوەی نەریتی. لەسەر بنەمایەکی ڕازێنراو بە پێی خەمراو ڕاوەستاوە و پاتینایەکی سرووشتی پیشان دەدات کە تەمەن و بەکارهێنانی میراثی پارچەکە دەردەخات. پارچەیەکی گونجاو بۆ پیشاندانی مۆزەیی یان بەکارهێنانی ڕازێنەری لە شوێنە کلاسیکییەکان."
  },

  images: [
    cld("hoa-sam-91_zhykcb")
  ],
  image: cld("hoa-sam-91_zhykcb"),

  featured: false,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-slv-093_ij3m9i",

  name: {
    ar: "كأس فضة مع صحن مزخرف",
    en: "Silver Cup with Decorated Saucer",
    ku: "کاسەی زیو لەگەڵ سحنێکی ڕازێنراو"
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  price:"730,000 د.ع",
  priceNumber:750000,

  desc: {
    ar: "طقم فضة أنتيك يتكوّن من كأس مخروطي الشكل مع صحن دائري بحواف متموجة، مزخرف بنقوش نباتية وهندسية محفورة يدوياً. يتميز بباتينا طبيعية تدل على قدم القطعة وأصالتها، ويعكس أسلوباً تقليدياً راقياً مناسباً للعرض المتحفي أو المجموعات الخاصة.",
    en: "An antique silver set consisting of a conical-shaped cup paired with a circular saucer featuring gently waved edges, decorated with hand-engraved botanical and geometric motifs. The piece displays a natural patina that reflects its age and authenticity, embodying a refined traditional style suitable for museum display or private collections.",
    ku: "سێتێکی زیوی ئەنتیک پێکهاتووە لە کاسەیەکی کۆنیکی و سحنێکی بازنەیی بە حافە موجدار، بە نەخشە گیایینی و هندەسی دەست‌کەندراو ڕازێنراوە. پاتینای سرووشتی پیشان دەدات کە پارچەکە تەمەن‌دار و ڕەسەنە، و شێوازێکی نەریتی فەخمی پیشان دەدات کە گونجاوە بۆ پیشاندانی مۆزەیی یان کۆمەڵگە تایبەتی."
  },

  images: [
    cld("hoa-slv-093_ij3m9i")
  ],
  image: cld("hoa-slv-093_ij3m9i"),

  featured: false,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-slv-110_piv4wt",

  name: {
    ar: "حافظة فضة مزخرفة",
    en: "Decorated Silver Case",
    ku: "قوتی زیوی ڕازێنراو"
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  price:"350,000 دينار عراقي",
  priceNumber:350000,

  desc: {
    ar: "حافظة فضة أنتيكة بتصميم مستطيل، مزخرفة بنقوش نباتية دقيقة محفورة يدوياً داخل إطار دائري، مع زخرفة شبكية منتظمة تغطي السطح الخارجي. تتميز بباتينا طبيعية تدل على قدم القطعة وأصالتها، وكانت تُستخدم لحفظ السجائر أو المقتنيات الصغيرة، وتعد قطعة نادرة مناسبة لهواة جمع الفضة والقطع الكلاسيكية.",
    en: "An antique silver case with a rectangular design, decorated with finely hand-engraved botanical motifs set within a circular frame, complemented by a regular lattice pattern covering the exterior surface. It features a natural patina that reflects the piece’s age and authenticity. Traditionally used to store cigarettes or small personal items, it is a rare piece ideal for silver collectors and lovers of classical artifacts.",
    ku: "قوتیەکی زیوی ئەنتیک بە شێوەیەکی مستطیل، ڕازێنراو بە نەخشە گیایینی وردی دەست‌کەندراو لە ناو چوارچێوەیەکی بازنەیی، لەگەڵ ڕازاندنێکی تۆڕی هاوسەنگ کە ڕووکارە دەرەوەکە دەگرێت. پاتینای سرووشتی پیشان دەدات کە پارچەکە تەمەن‌دار و ڕەسەنە. لە کاتی خۆیدا بۆ پاراستنی جگەرە یان شتە بچووکە تایبەتییەکان بەکارهاتووە، و پارچەیەکی دەگمەنە گونجاو بۆ کۆلێکتۆرەکانی زیو و شتە کلاسیکییەکان."
  },

  images: [
    cld("hoa-slv-110_piv4wt")
  ],
  image: cld("hoa-slv-110_piv4wt"),

  featured: false,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-trl-105_oswyzv",

  name: {
    ar: "طابعة عراقية قديمة – النجار",
    en: "Vintage Iraqi Typewriter – Al-Najjar",
    ku: "ماشینی نووسینی عێراقی کۆن – نەجّار"
  },

  category: {
    ar: "أثاث",
    en: "furniture",
    ku: "کەلوپەل"
  },

  price:"3,600,000 دينار عراقي",
  priceNumber:3600000,

  desc: {
    ar: "آلة طباعة عراقية أصلية من ماركة «النجار» المعروفة تاريخياً، تتميز بهيكل معدني أسود أنيق مع تفاصيل زخرفية ذهبية وشعار المصنع الأصلي في الواجهة. لوحة مفاتيح كلاسيكية بحالة جيدة تعكس جودة الصناعة العراقية القديمة. قطعة نادرة ومرغوبة لهواة جمع المقتنيات التراثية والمكاتب الكلاسيكية، وتصلح للعرض المتحفي أو الديكور الفاخر.",
    en: "An original Iraqi typewriter by the historically renowned Al-Najjar brand, featuring an elegant black metal body with golden decorative details and the original manufacturer’s logo on the front. The classic keyboard remains in good condition, reflecting the quality of traditional Iraqi craftsmanship. A rare and highly desirable piece for collectors of heritage items and classical office décor, suitable for museum display or luxurious interiors.",
    ku: "ماشینی نووسینی عێراقی ڕەسەن لە مارکەی «نەجّار»ی ناسراوی مێژوویی، بە هێکلێکی ئاسنی ڕەش و وردەکارییە زێڕینە ڕازێنراوەکان و نیشانی کارگەی ڕەسەن لە پێشەوە. تەختەکلیلێکی کلاسیکی لە دۆخی باشدا هەیە کە کوالێتی پیشەسازی عێراقی کۆن پیشان دەدات. پارچەیەکی دەگمەن و خوازراوە بۆ کۆلێکتۆرەکانی میراث و دیکۆری ئۆفیسی کلاسیکی، گونجاو بۆ پیشاندانی مۆزەیی یان شوێنە فەخمییەکان."
  },

  images: [
    cld("hoa-trl-105-jpg_oswyzv"),
    cld("DSC_8743_swizz6"),
    cld("DSC_8744_zefhzy")
  ],
  image: cld("hoa-trl-105-jpg_oswyzv"),

  featured: true,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-vas-113_iczvbj",

  name: {
    ar: "زوج فازات من التراث الصيني",
    en: "Pair of Chinese Heritage Porcelain Vases",
    ku: "دوو فازە لە میراثی چینی"
  },

  category: {
    ar: "خزف وبورسلان تراثي",
    en: "Heritage Ceramics & Porcelain",
    ku: "خەزف و پۆرسلان میراثی"
  },

  price:"3,500,000د.ع",
  priceNumber:3500000,

  desc: {
    ar: "زوج فازات صينية تراثية أصلية من الخزف المزخرف، تتميز بمشاهد فنية تقليدية مرسومة يدويًا تعكس الحياة والطقوس في الصين القديمة، مع زخارف نباتية دقيقة وألوان غنية ومتوازنة. القطعتان متماثلتان بالحجم والتصميم، وتُعدان من القطع النادرة المناسبة للعرض المتحفي أو للديكور الكلاسيكي الفاخر، كما تمثلان قيمة فنية وتاريخية عالية لهواة الاقتناء.",
    en: "An authentic pair of Chinese heritage porcelain vases, richly decorated with hand-painted traditional scenes reflecting daily life and rituals of ancient China. The vases feature delicate botanical motifs and balanced, vibrant colors. Identical in size and design, they are considered rare pieces ideal for museum display or luxurious classical décor, holding significant artistic and historical value for collectors.",
    ku: "دوو فازەیەکی ڕەسەنی چینی لە خەزفی ڕازێنراو، بە وێنە هونەرییە نەریتییە دەست‌نووسراوەکان کە ژیان و ڕێوڕەسمەکانی چینی کۆن پیشان دەدەن. فازەکان بە نەخشە گیایینی ورد و ڕەنگە دەوڵەمەند و هاوسەنگ ڕازێنراون. هەردوو پارچەکە یەکسانن لە قەبارە و دیزاین، و پارچەیەکی دەگمەنن کە گونجاون بۆ پیشاندانی مۆزەیی یان دیکۆری کلاسیکی فەخمی، و نرخێکی هونەری و مێژوویی بەرز هەیە بۆ کۆلێکتۆرەکان."
  },

  images: [
    cld("hoa-vas-113_iczvbj")
  ],
  image: cld("hoa-vas-113_iczvbj"),

  featured: true,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-wood-119_asf2kz",

  name: {
    ar: "ساعة جدارية إنكليزية خشبية كلاسيكية",
    en: "Classic English Wooden Wall Clock",
    ku: "کاتژمێری دیواری دارەکی ئینگلیزی کلاسیکی"
  },

  category: {
    ar: "ساعات وأثاث خشبي",
    en: "Wooden Clocks & Furniture",
    ku: "کاتژمێر و کەلوپەلی دارەکی"
  },

  price: "1,250,000 دينار عراقي",
  priceNumber: 1250000,

  desc: {
    ar: "ساعة جدارية إنكليزية أصلية مصنوعة من الخشب الصلب، بتصميم كلاسيكي أنيق يعتمد على الأعمدة الخشبية المنحوتة يدويًا وواجهة زجاجية شفافة تُظهر البندول النحاسي. تتميز بالأرقام العربية الواضحة وآلية ميكانيكية تقليدية تعكس دقة الصناعة الأوروبية في أواخر القرن التاسع عشر وبدايات القرن العشرين. قطعة مثالية لهواة الساعات الأنتيكة وللعرض المتحفي أو الديكور التراثي الراقي.",
    en: "An original English wall clock crafted from solid wood, featuring an elegant classical design with hand-carved wooden columns and a clear glass front revealing a brass pendulum. It displays clear Arabic numerals and a traditional mechanical movement that reflects the precision of European craftsmanship from the late 19th to early 20th century. An ideal piece for antique clock collectors, museum display, or refined heritage décor.",
    ku: "کاتژمێرێکی دیواری ئینگلیزی ڕەسەن لە دارێکی بەهێز دروستکراوە، بە دیزاینێکی کلاسیکی جوان کە ستوونە دارەکییە دەست‌کەندراوەکان و ڕووپەڕێکی شووشەیی ڕوون تێدایە کە پێندۆڵی برۆنز پیشان دەدات. ژمارە عەرەبییە ڕوونەکان و میکانیزمی کلاسیکی هەیە کە وردبینی پیشەسازی ئەورووپی لە کۆتایی سەدەی نۆزدەهەم و سەرەتای سەدەی بیستەم پیشان دەدات. پارچەیەکی گونجاو بۆ کۆلێکتۆرەکانی کاتژمێری کۆن، پیشاندانی مۆزەیی یان دیکۆری میراثی فەخمی."
  },

  images: [
    cld("hoa-wood-119_asf2kz")
  ],
  image: cld("hoa-wood-119_asf2kz"),

  featured: true,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-wood-118_uayr2i",

  name: {
    ar: "ساعة جدارية خشبية كلاسيكية بواجهة دائرية",
    en: "Classic Wooden Wall Clock with Circular Dial",
    ku: "کاتژمێری دیواری دارەکی کلاسیکی بە ڕووپەڕی بازنەیی"
  },

 category: { ar: "أثاث", en: "Furniture", ku: "کەلوپەلی ناوماڵ" },


  price:"1,700,000دينار عراقي",
  priceNumber:1700000,

  desc: {
    ar: "ساعة جدارية خشبية أنتيكة بتصميم كلاسيكي يجمع بين الإطار الدائري العلوي والصندوق السفلي المزجج، مع أرقام رومانية واضحة على المينا ورسمة شخصية تراثية في المنتصف. مزودة ببندول داخلي وآلية ميكانيكية تقليدية، تعكس طابع الساعات الأوروبية في أواخر القرن التاسع عشر. قطعة مميزة للعرض المتحفي أو لإضافة لمسة تاريخية راقية للمكان.",
    en: "An antique wooden wall clock with a classical design combining an upper circular frame and a glazed lower case, featuring clear Roman numerals on the dial and a heritage character illustration at the center. Equipped with an internal pendulum and a traditional mechanical movement, it reflects the style of European clocks from the late 19th century. A distinctive piece suitable for museum display or to add a refined historical touch to any space.",
    ku: "کاتژمێرێکی دیواری دارەکی ئەنتیک بە دیزاینێکی کلاسیکی کە ڕووپەڕێکی بازنەیی سەروویی و قاپی خوارەوەی شووشەیی تێکەڵ دەکات، لەگەڵ ژمارە ڕۆمانییە ڕوونەکان لەسەر مینا و وێنەیەکی کەسایەتی میراثی لە ناوەڕاست. پێندۆڵی ناوەوەیی و میکانیزمی نەریتی هەیە و شێوازی کاتژمێرە ئەورووپییەکان لە کۆتایی سەدەی نۆزدەهەم پیشان دەدات. پارچەیەکی دیاریکراو بۆ پیشاندانی مۆزەیی یان زیادکردنی دەستەوەردێکی مێژوویی فەخمی بۆ شوێنەکان."
  },

  images: [
    cld("hoa-wood-118_uayr2i")
  ],
  image: cld("hoa-wood-118_uayr2i"),

  featured: false,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-wood-120_svjtuw",

  name: {
    ar: "ساعة جدارية خشبية أوروبية مزخرفة",
    en: "Decorated European Wooden Wall Clock",
    ku: "کاتژمێری دیواری دارەکی ئەورووپی ڕازێنراو"
  },

  category: { ar: "أثاث", en: "Furniture", ku: "کەلوپەلی ناوماڵ" },

  price: "450,000 دينار عراقي",
  priceNumber: 450000,

  desc: {
    ar: "ساعة جدارية أنتيكة مصنوعة من الخشب المنحوت يدوياً، تتميز بتفاصيل زخرفية كلاسيكية في الإطار العلوي والجانبي، مع واجهة زجاجية تكشف عن بندول داخلي مزخرف بمدالية معدنية تحمل طابعاً تاريخياً. المينا مزودة بأرقام رومانية وآلية ميكانيكية تقليدية تعود لبدايات القرن العشرين، ما يجعلها قطعة فريدة للعرض المتحفي أو للمساحات الكلاسيكية الراقية.",
    en: "An antique wooden wall clock handcrafted from carved wood, featuring classical decorative details on the upper and side frames, with a glass front revealing an ornate internal pendulum adorned with a historical metal medallion. The dial bears Roman numerals and a traditional mechanical movement dating back to the early 20th century, making it a unique piece for museum display or refined classical interiors.",
    ku: "کاتژمێرێکی دیواری دارەکی ئەنتیک بە دەست لە دارێکی دەست‌کەندراو دروستکراوە، بە وردەکاری کلاسیکی لە چوارچێوەی سەروو و لاکانەکاندا ڕازێنراوە، لەگەڵ ڕووپەڕێکی شووشەیی کە پێندۆڵێکی ناوەوەیی ڕازێنراو بە مەدالیایەکی ئاسنی مێژوویی پیشان دەدات. میناکە ژمارە ڕۆمانییەکان و میکانیزمێکی نەریتی هەیە کە بۆ سەرەتای سەدەی بیستەم دەگەڕێتەوە، و پارچەیەکی تایبەتە بۆ پیشاندانی مۆزەیی یان شوێنە کلاسیکی فەخمی."
  },

  images: [
    cld("hoa-wood-120_svjtuw")
  ],
  image: cld("hoa-wood-120_svjtuw"),

  featured: false,
  createdAt: "2026-01-09",
  status: "available",
  auction: false
},
{
  id: "hoa-car-055_e8jlpz",

  name: {
    ar: "سجادة تركية تراثية مزخرفة",
    en: "Decorated Turkish Heritage Carpet",
    ku: "فرشی تورکی کۆن بە نەخشە"
  },

  category: {
    ar: "سجاد",
    en: "Carpets",
    ku: "فرش"
  },

  price: "195,000د.ع",
  priceNumber: 195000,

  desc: {
    ar: "سجادة تركية تراثية أصلية منسوجة يدوياً، تتميز بتكوين معماري متكرر يحاكي النوافذ والمحراب بأسلوب هندسي متناظر، مع ألوان غنية من الأحمر النيلي والبيج تعكس الطابع الأناضولي الكلاسيكي. الإطار الخارجي مزخرف بنقوش نباتية دقيقة تمنح القطعة توازناً بصرياً وحضوراً متحفياً واضحاً. قطعة نادرة مناسبة للعرض الجداري المتحفي أو للاقتناء ضمن مجموعات السجاد التراثي الرفيع.",
    en: "An original handwoven Turkish heritage carpet distinguished by a repeating architectural composition reminiscent of windows and mihrab forms, executed in a symmetrical geometric style. Rich tones of deep red, indigo, and beige reflect the classical Anatolian character, while the outer border is adorned with delicate floral motifs that enhance its visual balance and museum-worthy presence. A rare piece suitable for wall-mounted display or refined heritage carpet collections.",
    ku: "فرشێکی تورکی کۆن و ڕەسەن بە دەست تێکچراو، ناسراو بە پێکهاتەیەکی ئەندازیاری دووبارەبوو کە وێنەی پەنجەرە و میحراب دەهێنێت، بە شێوازێکی هاوسەنگی هندەسی. ڕەنگە قووڵەکانی سوور، نیلی و بێژ تایبەتمەندی کلاسیکی ئانەتۆلی پیشان دەدەن، هەروەها چوارچێوەی دەرەوە بە نەخشەی گیایینی ورد ڕازێنراوە کە پارچەکە بۆ پیشاندانی مۆزەیی گونجاو دەکات. پارچەیەکی دەگمەنە بۆ پیشاندانی دیواری یان کۆمەڵگەی فرشی میراثی."
  },

  images: [
    cld("hoa-car-055_e8jlpz")
  ],
  image: cld("hoa-car-055_e8jlpz"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-car-059_qcrmpr",

  name: {
    ar: "سجادة إيرانية تراثية مزخرفة",
    en: "Decorated Iranian Heritage Carpet",
    ku: "فرشی ئێرانی کۆن بە نەخشە"
  },

  category: {
    ar: "سجاد",
    en: "Carpets",
    ku: "فرش"
  },

  price:"450,000د.ع",
  priceNumber:450000,

  desc: {
    ar: "سجادة إيرانية تراثية أصلية منسوجة يدوياً، تتميز بتكوين مركزي هندسي قائم على ميدالية متعددة الأضلاع تحيط بها وحدات نباتية متناظرة، مع أرضية هادئة بألوان البيج والنيلي والبني تعكس الذوق الفارسي الكلاسيكي. الإطار الخارجي مزخرف بنقوش متكررة دقيقة تضيف توازناً بصرياً وأناقة راقية. قطعة ذات طابع متحفي واضح، مناسبة للعرض الأرضي أو الجداري وللاقتناء ضمن مجموعات السجاد الإيراني الأصيل.",
    en: "An original handwoven Iranian heritage carpet featuring a geometric central composition built around a multi-sided medallion, surrounded by symmetrical floral motifs. The soft beige, indigo, and brown palette reflects classical Persian aesthetics, while the finely patterned border adds visual harmony and refined elegance. A museum-quality piece suitable for floor or wall display and for distinguished Persian carpet collections.",
    ku: "فرشێکی ئێرانی کۆن و ڕەسەن بە دەست تێکچراو، کە پێکهاتەیەکی ناوەندی هندەسی هەیە لەسەر بنەمای مێدالیایەکی فرەگۆشە، دەوروبەری بە نەخشە گیایینی هاوسەنگ ڕازێنراوە. ڕەنگە ئارامەکانی بێژ، نیلی و قاوی ڕەنگی کلاسیکی فارسی پیشان دەدەن، هەروەها چوارچێوەی دەرەوە بە نەخشەی ورد توازن و جوانی زیاد دەکات. پارچەیەکی شایەنی مۆزەیی بۆ پیشاندانی سەردەمی یان دیواری."
  },

  dimensions: {
    length_cm: 250,
    width_cm: 148
  },

  images: [
    cld("hoa-car-059_qcrmpr")
  ],
  image: cld("hoa-car-059_qcrmpr"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-car-057_jecql8",

  name: {
    ar: "سجادة تراثية هندسية طويلة (جدارية)",
    en: "Long Geometric Heritage Carpet (Wall Rug)",
    ku: "فرشی میراثی درێژ بە نەخشەی هندەسی (دیواری)"
  },

  category: {
    ar: "سجاد",
    en: "Carpets",
    ku: "فرش"
  },

  price:"245,000د.ع",
  priceNumber:245000,

  desc: {
    ar: "سجادة تراثية أصلية منسوجة يدوياً، تتميز بتكوين هندسي طولي غني بالرموز والزخارف الشعبية المتكررة، مع ميداليات ماسية الشكل مصطفّة على المحور العمودي. الألوان القوية من الأحمر، البرتقالي، الأسود والعاجي تعكس طابع السجاد القبَلي والأناضولي، بينما الإطار الجانبي مزخرف بوحدات رمزية صغيرة تضيف عمقاً بصرياً وهوية ثقافية واضحة. قطعة لافتة مناسبة للعرض الجداري المتحفي أو للمساحات التراثية ذات الأسقف العالية.",
    en: "An original handwoven heritage carpet distinguished by a vertical geometric composition rich in symbolic and folk motifs, featuring diamond-shaped medallions aligned along the central axis. Bold tones of red, orange, black, and ivory reflect a tribal and Anatolian character, while the side borders are adorned with small symbolic units that add visual depth and cultural identity. A striking piece suitable for wall-mounted museum display or high-ceiling heritage interiors.",
    ku: "فرشێکی میراثی ڕەسەن بە دەست تێکچراو، بە پێکهاتەیەکی درێژی هندەسی کە پڕە لە هێما و نەخشە گەلییە دووبارەبووەکان، لەگەڵ مێدالیای شێوەی ماسی کە لە ناوەنددا ڕێکخراون. ڕەنگە بەهێزەکانی سوور، پرتەقاڵی، ڕەش و عاجی تایبەتمەندی قبەیڵەیی و ئانەتۆلی پیشان دەدەن، هەروەها چوارچێوەی لاوەکی بە یەکە هێمایی بچووک ڕازێنراوە کە قووڵایی بینینی و ناسنامەی کولتووری زیاد دەکات. پارچەیەکی دیاری بۆ پیشاندانی دیواری مۆزەیی یان شوێنە میراثییەکان."
  },

  dimensions: {
    length_cm: 270,
    width_cm: 146
  },

  images: [
    cld("hoa-car-057_jecql8")
  ],
  image: cld("hoa-car-057_jecql8"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-car-056_bnzzxu",

  name: {
    ar: "سجادة تراثية حمراء بحواف بيضاء",
    en: "Red Heritage Carpet with White Borders",
    ku: "فرشی میراثی سوور بە حەوافی سپی"
  },

  category: {
    ar: "سجاد",
    en: "Carpets",
    ku: "فرش"
  },

  price:"176,000د.ع",
  priceNumber:176000,

  desc: {
    ar: "سجادة تراثية أصلية منسوجة يدوياً، تتميز بأرضية حمراء غنية تتوسطها زخارف تقليدية متناغمة، محاطة بحواف بيضاء مزخرفة تضيف تبايناً بصرياً أنيقاً وتبرز جمال التكوين العام. التصميم يعكس طابع السجاد الشرقي الكلاسيكي ويمنح القطعة حضوراً دافئاً ومهيباً، ما يجعلها مناسبة للعرض الأرضي في الصالات الواسعة أو للاقتناء ضمن مجموعات السجاد التراثي الرفيع.",
    en: "An original handwoven heritage carpet featuring a rich red field adorned with harmonious traditional motifs, framed by decorative white borders that create an elegant visual contrast and highlight the overall composition. The design reflects a classic Oriental carpet character, giving the piece a warm and distinguished presence suitable for floor display in spacious interiors or refined heritage carpet collections.",
    ku: "فرشێکی میراثی ڕەسەن بە دەست تێکچراو، بە زەویەکی سووری قووڵ کە بە نەخشە کلاسیکی هاوسەنگ ڕازێنراوە، دەوروبەری بە حەوافی سپیی ڕازێنراو کە جیاوازی بینینی جوان دروست دەکات و جوانی پێکهاتەکە بەرز دەکات. دیزاینەکە تایبەتمەندی فرشی ڕۆژهەڵاتی کلاسیکی پیشان دەدات و پارچەکە بۆ پیشاندانی سەردەمی لە شوێنە فراوانەکان یان کۆمەڵگەی فرشی میراثی گونجاو دەکات."
  },

  dimensions: {
    length_cm: 284,
    width_cm: 194
  },

  images: [
    cld("hoa-car-056_bnzzxu")
  ],
  image: cld("hoa-car-056_bnzzxu"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-car-054_enaxgc",

  name: {
    ar: "سجادة تراثية جدارية بزخارف مركزية",
    en: "Heritage Wall Carpet with Central Medallion",
    ku: "فرشی میراثی دیواری بە مێدالیای ناوەندی"
  },

  category: {
    ar: "سجاد",
    en: "Carpets",
    ku: "فرش"
  },

  price:"560,000د.ع",
  priceNumber:560000,

  desc: {
    ar: "سجادة تراثية أصلية منسوجة يدوياً، تتميز بتكوين طولي أنيق تتوسطه ميداليا هندسية كبيرة باللون الأزرق الداكن محاطة بزخارف نباتية متناظرة، مع أرضية حمراء وحواف بلون عاجي مزخرف تضيف تبايناً بصرياً راقياً. التصميم يعكس طابع السجاد الشرقي الكلاسيكي ويجعل القطعة مثالية للعرض الجداري المتحفي أو للمساحات التراثية الضيقة، مع حضور بصري متوازن رغم أبعادها الطولية.",
    en: "An original handwoven heritage carpet featuring an elegant vertical composition centered around a large dark-blue geometric medallion, surrounded by symmetrical floral motifs. The red field contrasts beautifully with the ivory-decorated borders, reflecting a classic Oriental carpet aesthetic. Its proportions make it ideal for wall-mounted museum display or narrow heritage spaces with strong visual impact.",
    ku: "فرشێکی میراثی ڕەسەن بە دەست تێکچراو، بە پێکهاتەیەکی درێژی جوان کە مێدالیایەکی گەورەی هندەسی بە ڕەنگی شینی قووڵ لە ناوەنددا هەیە و بە نەخشە گیایینی هاوسەنگ دەوروبەری گرتووە. زەویە سوورەکە لەگەڵ چوارچێوەی عاجیی ڕازێنراو جیاوازی بینینی جوان دروست دەکات و تایبەتمەندی فرشی ڕۆژهەڵاتی کلاسیکی پیشان دەدات. قەبارە و ڕێژەکانی گونجاوە بۆ پیشاندانی دیواری مۆزەیی یان شوێنە میراثییە باریکەکان."
  },

  dimensions: {
    length_cm: 180,
    width_cm: 80
  },

  images: [
    cld("hoa-car-054_enaxgc")
  ],
  image: cld("hoa-car-054_enaxgc"),

  featured: true,
  status: "available",
  auction: false
},
{
  id: "hoa-car-058_gac3qt",

  name: {
    ar: "سجادة تراثية فارسية بزخارف نباتية دقيقة",
    en: "Persian Heritage Carpet with Floral Motifs",
    ku: "فرشی میراثی فارسی بە نەخشەی گیایینی ورد"
  },

  category: {
    ar: "سجاد",
    en: "Carpets",
    ku: "فرش"
  },

  price:"320,000د.ع",
  priceNumber:320000,

  desc: {
    ar: "سجادة تراثية أصلية منسوجة يدوياً، تتميز بتكوين أفقي غني بزخارف نباتية دقيقة ومتشابكة، مع أرضية وردية مائلة للأحمر تتوسطها وحدة زخرفية متناظرة باللونين الأزرق والعاجي. الإطار الخارجي مزخرف بنقوش نباتية كثيفة على أرضية زرقاء داكنة تضيف توازناً بصرياً وأناقة كلاسيكية راقية. قطعة ذات طابع متحفي واضح، مناسبة للعرض الأرضي في الصالات أو للاقتناء ضمن مجموعات السجاد الفارسي الأصيل.",
    en: "An original handwoven heritage carpet distinguished by a horizontal composition rich in intricate floral motifs, featuring a soft pinkish-red field centered with a symmetrical decorative element in blue and ivory tones. The outer border is densely adorned with floral patterns set against a deep blue ground, creating refined classical elegance and visual balance. A museum-quality piece suitable for floor display or distinguished Persian carpet collections.",
    ku: "فرشێکی میراثی ڕەسەن بە دەست تێکچراو، بە پێکهاتەیەکی ئاسۆیی پڕ لە نەخشە گیایینی ورد و تێکچوو، بە زەویەکی سووری نرمی خاوێنی کە یەکەیەکی ڕازێنراوی هاوسەنگ بە ڕەنگی شین و عاجی لە ناوەنددا هەیە. چوارچێوەی دەرەوە بە نەخشە گیایینی قووڵ لەسەر بنەمای شینی تۆخ ڕازێنراوە، کە جوانی کلاسیکی و هاوسەنگی بینینی دروست دەکات. پارچەیەکی شایەنی مۆزەیی بۆ پیشاندانی سەردەمی یان کۆمەڵگەی فرشی فارسی."
  },

  dimensions: {
    length_cm: 130,
    width_cm: 210
  },

  images: [
    cld("hoa-car-058_gac3qt")
  ],
  image: cld("hoa-car-058_gac3qt"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-car-053_pfpqrv",

  name: {
    ar: "سجادة تراثية فارسية بزخارف متكررة",
    en: "Persian Heritage Carpet with Repeating Motifs",
    ku: "فرشی میراثی فارسی بە نەخشەی دووبارەبوو"
  },

  category: {
    ar: "سجاد",
    en: "Carpets",
    ku: "فرش"
  },

  price:"240,000د.ع",
  priceNumber:240000,

  desc: {
    ar: "سجادة تراثية أصلية منسوجة يدوياً، تتميز بأرضية فاتحة مزدانة بزخارف هندسية ونباتية صغيرة متكررة تشكّل إيقاعاً بصرياً متناغماً، محاطة بإطار عريض باللون الأزرق الداكن مزخرف بوحدات نباتية غنية. التصميم يعكس الذوق الفارسي الكلاسيكي ويمنح القطعة حضوراً هادئاً وأنيقاً، ما يجعلها مناسبة للعرض الأرضي في الصالات الواسعة أو للاقتناء ضمن مجموعات السجاد التراثي الرفيع.",
    en: "An original handwoven heritage carpet featuring a light-toned field adorned with small repeating geometric and floral motifs that create a harmonious visual rhythm. The composition is framed by a wide deep-blue border richly decorated with floral elements, reflecting classical Persian taste and giving the piece a calm yet elegant presence. Ideal for floor display in spacious interiors or refined heritage carpet collections.",
    ku: "فرشێکی میراثی ڕەسەن بە دەست تێکچراو، بە زەویەکی ڕوون کە بە نەخشەی هندەسی و گیایینی بچووک و دووبارەبوو ڕازێنراوە و هاوسەنگی بینینی دروست دەکات. چوارچێوەی فراوانی شینی تۆخ بە نەخشەی گیایینی قووڵ ڕازێنراوە کە تایبەتمەندی فرشی فارسی کلاسیکی پیشان دەدات. پارچەیەکی ئارام و فەخمی بۆ پیشاندانی سەردەمی لە شوێنە فراوانەکان یان کۆمەڵگەی فرشی میراثی."
  },

  dimensions: {
    length_cm: 206,
    width_cm: 294
  },

  images: [
    cld("hoa-car-053_pfpqrv")
  ],
  image: cld("hoa-car-053_pfpqrv"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-car-047_hyxhqh",

  name: {
    ar: "سجادة تراثية حمراء بزخارف هندسية ملونة",
    en: "Red Heritage Carpet with Colorful Geometric Motifs",
    ku: "فرشی میراثی سوور بە نەخشەی هندەسی ڕەنگاوڕەنگ"
  },

  category: {
    ar: "سجاد",
    en: "Carpets",
    ku: "فرش"
  },

  price:"475,000د.ع",
  priceNumber:475000,

  desc: {
    ar: "سجادة تراثية أصلية منسوجة يدوياً، تتميز بأرضية حمراء غنية تغطيها وحدات هندسية ماسية صغيرة ومتكررة بألوان متعددة، ما يمنحها إيقاعاً بصرياً نابضاً بالحياة. تحيط بها أطر زخرفية متعددة الطبقات بألوان متناسقة تضيف عمقاً وتفصيلاً فنياً واضحاً. التصميم يعكس الطابع القبلي والشرقي الكلاسيكي، ويجعل القطعة مناسبة للعرض الأرضي في الصالات الواسعة أو للاقتناء ضمن مجموعات السجاد التراثي ذات الطابع الحيوي.",
    en: "An original handwoven heritage carpet featuring a rich red field covered with small, repeating diamond-shaped geometric motifs in multiple colors, creating a lively visual rhythm. The composition is framed by multiple decorative borders in harmonious tones, adding depth and refined artistic detail. The design reflects a classic tribal and Oriental character, making it ideal for floor display in spacious interiors or vibrant heritage carpet collections.",
    ku: "فرشێکی میراثی ڕەسەن بە دەست تێکچراو، بە زەویەکی سووری قووڵ کە بە یەکە هندەسی ماسی بچووک و دووبارەبوو بە ڕەنگە جیاوازەکان ڕازێنراوە، کە جوڵەیەکی بینینی زیندوو دروست دەکات. چوارچێوەی فرەچەند بە ڕەنگە هاوسەنگەکان قووڵایی و وردەکاری هونەری بەرچاو زیاد دەکات. دیزاینەکە تایبەتمەندی قبەیڵەیی و ڕۆژهەڵاتی کلاسیکی پیشان دەدات و پارچەکە بۆ پیشاندانی سەردەمی لە شوێنە فراوانەکان یان کۆمەڵگەی فرشی میراثی گونجاو دەکات."
  },

  dimensions: {
    length_cm: 158,
    width_cm: 285
  },

  images: [
    cld("hoa-car-047_hyxhqh")
  ],
  image: cld("hoa-car-047_hyxhqh"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-car-048_nie9u9",

  name: {
    ar: "سجادة تراثية هندسية بزخارف قبلية",
    en: "Geometric Tribal Heritage Carpet",
    ku: "فرشی میراثی هندەسی بە نەخشەی قبەیلی"
  },

  category: {
    ar: "سجاد",
    en: "Carpets",
    ku: "فرش"
  },

  price:"580,000د.ع",
  priceNumber:580000,

  desc: {
    ar: "سجادة تراثية أصلية منسوجة يدوياً، تتميز بتكوين هندسي متناظر يعتمد على وحدات ماسية كبيرة تتوسط المساحة، محاطة بزخارف قبلية متكررة على أرضية داكنة. الألوان القوية من الأحمر، البرتقالي، الأسود والعاجي تعكس طابع السجاد القبلي التقليدي، بينما الإطار الخارجي مزخرف بوحدات رمزية صغيرة تضيف عمقاً بصرياً وهوية ثقافية واضحة. قطعة لافتة مناسبة للعرض الأرضي أو الجداري ضمن المساحات التراثية أو المجموعات المتحفية.",
    en: "An original handwoven heritage carpet distinguished by a symmetrical geometric composition centered around large diamond-shaped motifs, surrounded by repeating tribal patterns set against a dark ground. Bold tones of red, orange, black, and ivory reflect a traditional tribal carpet character, while the outer border is adorned with small symbolic motifs that add visual depth and strong cultural identity. A striking piece suitable for floor or wall display in heritage interiors or museum collections.",
    ku: "فرشێکی میراثی ڕەسەن بە دەست تێکچراو، بە پێکهاتەیەکی هندەسی هاوسەنگ کە یەکە گەورەکانی شێوەی ماسی لە ناوەنددا هەن، دەوروبەری بە نەخشە قبەیلی دووبارەبوو لەسەر بنەمایەکی تۆخ. ڕەنگە بەهێزەکانی سوور، پرتەقاڵی، ڕەش و عاجی تایبەتمەندی فرشی قبەیلی کلاسیکی پیشان دەدەن، هەروەها چوارچێوەی دەرەوە بە یەکە هێمایی بچووک قووڵایی بینینی و ناسنامەی کولتووری زیاد دەکات. پارچەیەکی دیاری بۆ پیشاندانی سەردەمی یان دیواری لە شوێنە میراثییەکان یان کۆمەڵگە مۆزەییەکان."
  },

  dimensions: {
    length_cm: 270,
    width_cm: 146
  },

  images: [
    cld("hoa-car-048_nie9u9")
  ],
  image: cld("hoa-car-048_nie9u9"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "hoa-car-046_glbwc4",

  name: {
    ar: "سجادة تراثية مصوّرة بزخارف رمزية",
    en: "Antique Pictorial Carpet with Symbolic Motifs",
    ku: "قالیەکی کۆن بە نەخشە و هێمای وێنەیی"
  },

  category: {
    ar: "سجاد",
    en: "Carpets",
    ku: "قالی"
  },

  dimensions: {
    ar: "158 × 120 سم",
    en: "158 × 120 cm",
    ku: "١٥٨ × ١٢٠ سم"
  },

  lengthCm: 158,
  widthCm: 120,

  price: "375,000د.ع",
  priceNumber: 375000,

  desc: {
    ar: "سجادة تراثية أنتيك غنية بالزخارف التصويرية والرموز الشعبية، تتوسطها وحدة هندسية كبيرة تحيط بها مشاهد رمزية لحيوانات وأشكال طبيعية بأسلوب سردي نادر. الألوان الدافئة والنقوش اليدوية الدقيقة تعكس هوية فنية قديمة وحرفية عالية. قطعة مميزة للعرض المتحفي أو لهواة اقتناء السجاد القصصي ذي القيمة التاريخية.",
    en: "An antique pictorial carpet richly decorated with symbolic and narrative motifs, featuring a large central geometric medallion surrounded by figurative scenes of animals and natural elements. Warm tones and finely handwoven details reflect a distinctive historical identity and high craftsmanship. An exceptional piece suitable for museum display or collectors of narrative carpets.",
    ku: "قالیەکی ئەنتیک بە نەخشە و هێمای چیرۆکی و وێنەیی، ناوەڕاستی قالیەکە پێکهاتووە لە فۆرمێکی هندەسی گەورە و دەورووبەری پڕە لە وێنەی ئاژەڵ و هێمای سرووشتی. ڕەنگە گەرمەکان و کاری دەستی ورد نیشانەی هونەری کۆن و کارامەیی بەرزە. گونجاوە بۆ پیشاندانی مۆزەیی یان کۆمەڵگە تایبەتییەکان."
  },

  images: [
    cld("hoa-car-046_glbwc4")
  ],
  image: cld("hoa-car-046_glbwc4"),

  featured: true,
  createdAt: "2026-01-10",
  status: "available",
  auction: false
},
{
  id: "hoa-car-050_rkpr4z",

  name: {
    ar: "سجادة تراثية بزخرفة شبكية هندسية",
    en: "Antique Geometric Grid Pattern Carpet",
    ku: "قالیەکی کۆن بە نەخشەی هندەسی تۆڕی"
  },

  category: {
    ar: "سجاد",
    en: "Carpets",
    ku: "قالی"
  },

  dimensions: {
    ar: "225 × 130 سم",
    en: "225 × 130 cm",
    ku: "٢٢٥ × ١٣٠ سم"
  },

  lengthCm: 225,
  widthCm: 130,

  price:"650,000د.ع",
  priceNumber:650000,

  desc: {
    ar: "سجادة أنتيك بتصميم شبكي هندسي منتظم، تتكوّن من وحدات مربعة متكررة تتوسطها رموز زخرفية دقيقة، محاطة بإطار مزخرف بنقوش تقليدية متناغمة. الألوان الترابية الهادئة تعكس طابعاً كلاسيكياً رصيناً وتبرز جمال النسج اليدوي القديم. قطعة مناسبة للعرض المتحفي أو للاقتناء ضمن مجموعات السجاد التراثي الأصيل.",
    en: "An antique carpet featuring a structured geometric grid design composed of repeated square panels adorned with delicate symbolic motifs, framed by a richly patterned traditional border. The earthy, muted tones highlight the beauty of old handwoven craftsmanship, making it ideal for museum display or refined private collections.",
    ku: "قالیەکی ئەنتیک بە دیزاینێکی هندەسی ڕێکخراو، پێکهاتووە لە خانە چوارگۆشە دووبارەبووەکان کە هێما و نەخشەی وردیان تێدایە، دەورووبەریش بە چوارچێوەیەکی نەخشراو ڕازێنراوە. ڕەنگە خاکییە هێمنەکان جوانی کاری دەستی کۆن دەردەخەن و قالیەکە گونجاوە بۆ مۆزەیەکان یان کۆمەڵگە تایبەتییە فەخمییەکان."
  },

  images: [
    cld("hoa-car-050_rkpr4z")
  ],
  image: cld("hoa-car-050_rkpr4z"),

  featured: false,
  createdAt: "2026-01-10",
  status: "available",
  auction: false
},
{
  id: "hoa-car053.jpd_slzdsj",

  name: {
    ar: "سجادة تراثية بزخرفة هندسية مركزية",
    en: "Antique Carpet with Central Geometric Medallion",
    ku: "قالیەکی کۆن بە نەخشەی هندەسی ناوەندی"
  },

  category: {
    ar: "سجاد",
    en: "Carpets",
    ku: "قالی"
  },

  dimensions: {
    ar: "210 × 134 سم",
    en: "210 × 134 cm",
    ku: "٢١٠ × ١٣٤ سم"
  },

  lengthCm: 210,
  widthCm: 134,

  price:"350,000د.ع",
  priceNumber:350000,

  desc: {
    ar: "سجادة أنتيك ذات تصميم هندسي غني يتمحور حول وحدة مركزية سداسية، محاطة بزخارف قبلية ورموز تقليدية متناغمة تمتد ضمن إطار مزخرف متعدد الطبقات. الألوان الدافئة والترابية مع لمسات الأحمر والأصفر تعكس طابعاً تراثياً أصيلاً وتبرز جمال النسج اليدوي القديم. قطعة مناسبة للعرض المتحفي أو للاقتناء ضمن مجموعات السجاد النادر.",
    en: "An antique carpet featuring a rich geometric composition centered around a hexagonal medallion, surrounded by tribal motifs and traditional symbols framed within layered decorative borders. Warm earthy tones with accents of red and yellow highlight the beauty of old handwoven craftsmanship, making it ideal for museum display or refined private collections.",
    ku: "قالیەکی ئەنتیک بە دیزاینێکی هندەسی دەوڵەمەند کە لە ناوەنددا مەدالیۆنێکی شەش‌گۆشەی هەیە، دەورووبەریش پڕە لە هێما و نەخشەی قبیلەیی و کلاسیکی لە چوارچێوەیەکی چەند چینیدا. ڕەنگە خاکییە گەرمەکان لەگەڵ ڕەنگی سوور و زەرد جوانی کاری دەستی کۆن پیشان دەدەن و قالیەکە گونجاوە بۆ مۆزەیەکان یان کۆمەڵگە تایبەتییە فەخمییەکان."
  },

  images: [
    cld("hoa-car053.jpd_slzdsj")
  ],
  image: cld("hoa-car053.jpd_slzdsj"),

  featured: false,
  createdAt: "2026-01-10",
  status: "available",
  auction: false
},
{
  id: "HOA-ART-122",

  name: {
    ar: "لوحة فنية إنسانية لفتاة جالسة — أسلوب تعبيري",
    en: "Expressive Figurative Painting of a Seated Girl",
    ku: "تابلۆی هونەری مرۆڤایەتی ـ کچێکی دانیشتوو"
  },

  category: {
    ar: "لوحات",
    en: "art",
    ku: "تابلۆکان"
  },

  dimensions: {
    ar: "120 × 80 سم (تقريبًا)",
    en: "120 × 80 cm (approx.)",
    ku: "١٢٠ × ٨٠ سم (نزیكەیی)"
  },

  heightCm: 120,
  widthCm: 80,

  price:"350,000د.ع",
  priceNumber:350000,

  desc: {
    ar: "لوحة فنية ذات طابع إنساني تعبيري تُجسّد فتاة جالسة في وضع تأملي، ترتدي عباءة زرقاء داكنة، وتعكس ملامحها حالة من الصمت الداخلي والحنين. الخلفية الغامضة الممزوجة بضربات لونية حرة وتباينات ضوئية مدروسة تضيف عمقًا نفسيًا وبُعدًا رمزيًا للعمل. التكوين العام متوازن ويعتمد على الإحساس أكثر من السرد، ما يجعل اللوحة مناسبة للعرض المتحفي أو للاقتناء ضمن مجموعات الفن التشكيلي ذات الطابع الإنساني.",
    
    en: "An expressive figurative painting depicting a seated girl in a contemplative pose, dressed in a deep blue garment. Her facial expression conveys inner silence and emotional depth. The dark, abstract background with free brushstrokes and subtle lighting contrasts adds psychological and symbolic layers to the composition. A well-balanced artwork driven by emotion rather than narrative, suitable for museum display or refined private art collections.",
    
    ku: "تابلۆیەکی هونەرییە بە شێوازی دەربڕینی مرۆڤایەتی، کچێک پیشان دەدات کە لە دۆخی بیرکردنەوەدا دانیشتووە و جلی شین لەبەرکردووە. دەربڕینی ڕووخسارەکە هەستی ئارامی ناوخۆ و دڵنیاکردنەوە پیشان دەدات. پاشبنەمای تاریک و فریاکەوتوو بە شێوەی نەخشەی ئازاد قووڵایی دەروونی و مانای هێمایی بۆ کارەکە زیاد دەکات. کارێکی گونجاو بۆ پێشانگای مۆزەیی یان کۆمەڵگە تایبەتییە فەخمییەکان."
  },

  images: [
    cld("hoa-art-122_yjakfx")
  ],
  image: cld("hoa-art-122_yjakfx"),

  featured: true,
  createdAt: "2026-01-10",
  status: "available",
  auction: false
},
{
  id: "HOA-ART-123",

  name: {
    ar: "لوحة معركة المعمورية — موقعة من الفنان هاني محي الدين (1981)",
    en: "The Battle of Amorium Painting — Signed by Hani Mohi Al-Din (1981)",
    ku: "تابلۆی شەڕی مەعموریە — واژۆکراوی هونەرمەند هانی محی‌الدین (1981)"
  },

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  dimensions: {
    ar: "العرض 200 سم × الارتفاع 120 سم",
    en: "200 cm (W) × 120 cm (H)",
    ku: "٢٠٠ سم پانی × ١٢٠ سم بەرزی"
  },

  widthCm: 200,
  heightCm: 120,

  material: {
    ar: "ألوان زيتية على كانفس",
    en: "Oil on Canvas",
    ku: "ڕەنگی نەوت لەسەر کانڤاس"
  },

  artist: {
    ar: "هاني محي الدين",
    en: "Hani Mohi Al-Din",
    ku: "هانی محی‌الدین"
  },

  year: 1981,

  price:"13,000,000 دينار عراقي",
  priceNumber:13000000,

  desc: {
    ar: "لوحة تاريخية ملحمية تُجسّد معركة المعمورية، نفّذها ووقّعها الفنان هاني محي الدين عام 1981. يعكس العمل مشهدًا دراميًا غنيًا بالحركة والصراع، مع حضور قوي للعناصر العسكرية والإنسانية ضمن تكوين بصري متوازن. استخدام الألوان الداكنة والتباينات الضوئية يعزز الإحساس بالزخم التاريخي والبطولة، ما يجعل اللوحة قطعة فنية نادرة مناسبة للعرض المتحفي أو للاقتناء ضمن مجموعات الفن التاريخي.",
    
    en: "A monumental historical painting depicting the Battle of Amorium, executed and signed by artist Hani Mohi Al-Din in 1981. The artwork captures a dramatic, action-filled scene with strong military and human elements arranged in a balanced composition. The use of dark tones and dynamic lighting enhances the epic and heroic atmosphere, making it a rare piece ideal for museum display or distinguished historical art collections.",
    
    ku: "تابلۆیەکی مێژوویی مەزن کە شەڕی مەعموریە پیشان دەدات، لەلایەن هونەرمەند هانی محی‌الدین لە ساڵی 1981 درووست و واژۆ کراوە. کارەکە پڕە لە جوڵە و شێوەی شەڕ، بە هەستێکی بەهێز لە ئەنسانی و سەربازی. بەکارهێنانی ڕەنگە تاریکەکان و ڕووناکییە جیاوازەکان هەستی مێژوویی و پاڵەوانی بەرز دەکاتەوە، بۆیە تابلۆیەکی گونجاوە بۆ مۆزەیەکان یان کۆمەڵگە تایبەتییە فەخمییەکان."
  },

  images: [
    cld("hoa-art-123_v93px9")
  ],
  image: cld("hoa-art-123_v93px9"),

  featured: true,
  featuredRank: 5,
  createdAt: "1981-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-BOX-147",

  name: {
    ar: "صندوق هندي خشبي مزخرف يدويًا",
    en: "Indian Hand-Painted Wooden Chest",
    ku: "سندووقی دارستانی هندی بە دەست ڕازێنراو"
  },

  category: {
    ar: "خشب",
    en: "Wood",
    ku: "دارستان"
  },

  price:"1,000,000 دينار عراقي",
  priceNumber:1000000,

  material: {
    ar: "خشب مطلي ومزخرف يدويًا",
    en: "Painted and Hand-Decorated Wood",
    ku: "دارستانی ڕەنگ‌کراو و بە دەست ڕازێنراو"
  },

  desc: {
    ar: "صندوق خشبي هندي تقليدي منفذ ومزخرف يدويًا بزخارف نباتية ورسوم عنب، يتميز بلونه الداكن ولمساته اللونية الهادئة مع أقفال معدنية أصلية. قطعة تراثية أنيقة تصلح للعرض المتحفي أو للاستخدام كقطعة ديكور فاخرة ضمن المساحات الكلاسيكية.",
    
    en: "A traditional Indian wooden chest, hand-painted with floral and grape motifs. Featuring a dark base tone with subtle decorative accents and original metal fittings, this heritage piece is ideal for museum display or refined classic interiors.",
    
    ku: "سندووقێکی دارستانی هندی کە بە شێوەی کەلەپووری بە دەست ڕازێنراوە، بە نەخشەی ڕووەک و ترێ. ڕەنگی تاریک و وردەکارییە هێمنەکان لەگەڵ ئامێری ئەسڵی، ئەم پارچەیە گونجاوە بۆ پێشانگای مۆزەیی یان دیکۆری کلاسیکی."
  },

  images: [
    cld("hoa-box-147_yntpmj"),
    cld("hoa-box-147-1_oqeego")
  ],

  image: cld("hoa-box-147_yntpmj"),

  keywords: {
    ar: ["خشب", "صندوق خشبي", "صندوق هندي", "قطع تراثية", "ديكور كلاسيك"],
    en: ["wood", "wooden chest", "indian chest", "heritage decor"],
    ku: ["دارستان", "سندووقی دارستانی", "کەلەپووری"]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-BOX-134",

  name: {
    ar: "صندوق هندي خشبي مطعّم بالنحاس",
    en: "Indian Wooden Chest Inlaid with Brass",
    ku: "سندووقی دارستانی هندی بە مس ڕازێنراو"
  },

  category: {
    ar: "خشب",
    en: "Wood",
    ku: "دارستان"
  },

  price:"1,800,000 دينار عراقي",
  priceNumber:1800000,

  material: {
    ar: "خشب مطعّم بالنحاس",
    en: "Wood with Brass Inlay",
    ku: "دارستان بە تێکەڵی مس"
  },

  desc: {
    ar: "صندوق هندي تراثي مصنوع من الخشب ومطعّم بالنحاس، يتميز بزخارف هندسية ونباتية منفذة بتقنية الطرق اليدوي التقليدي. يعكس الصندوق الحرفية الهندية الكلاسيكية ويُعد قطعة مميزة للعرض المتحفي أو للاستخدام كعنصر ديكور تراثي فاخر داخل المساحات الكلاسيكية.",
    
    en: "A traditional Indian wooden chest inlaid with brass, decorated with geometric and floral motifs crafted using classic hand-hammered techniques. This piece reflects authentic Indian craftsmanship and is ideal for museum display or as a refined heritage décor element.",
    
    ku: "سندووقێکی کەلەپووری هندی لە دارستان درووستکراوە و بە مس ڕازێنراوە، بە نەخشەی هندەسی و ڕووەکی کۆن. ئەم پارچەیە پیشەسازیی هونەری هندی پیشان دەدات و گونجاوە بۆ پێشانگای مۆزەیی یان وەک دیکۆری کەلەپووری فەخمی."
  },

  images: [
    cld("hoa-box-134_yakhdf")
  ],

  image: cld("hoa-box-134_yakhdf"),

  keywords: {
    ar: [
      "صندوق هندي",
      "صندوق خشبي",
      "مطعم بالنحاس",
      "قطع تراثية",
      "ديكور تراثي"
    ],
    en: [
      "Indian chest",
      "wooden chest",
      "brass inlaid box",
      "heritage decor"
    ],
    ku: [
      "سندووقی هندی",
      "سندووقی دارستانی",
      "ڕازێنراو بە مس",
      "کەلەپووری"
    ]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-BOX-142",

  name: {
    ar: "صندوق هندي كبير مطعّم بالنحاس مع ثلاث مجرّات",
    en: "Large Indian Wooden Chest with Brass Inlay and Three Lower Drawers",
    ku: "سندووقی دارستانی هندی گەورە بە مس ڕازێنراو، لەخوارەوە سێ مەجرەتی هەیە"
  },

  category: {
    ar: "خشب",
    en: "Wood",
    ku: "دارستان"
  },

  price: "3,700,000 دينار عراقي",
  priceNumber: 3700000,

  material: {
    ar: "خشب مطعّم بالنحاس",
    en: "Wood with Brass Inlay",
    ku: "دارستان بە تێکەڵی مس"
  },

  desc: {
    ar: "صندوق هندي كبير مصنوع من الخشب ومطعّم بالنحاس، يتميز بزخارف هندسية تقليدية وتفاصيل معدنية منفذة يدويًا بدقة عالية. يحتوي الصندوق على ثلاث مجرّات سفلية مدمجة، ما يجمع بين الوظيفة العملية والقيمة الجمالية التراثية. قطعة فاخرة تصلح للعرض المتحفي أو للاستخدام كعنصر تخزين وديكور تراثي مميز.",
    
    en: "A large Indian wooden chest inlaid with brass, featuring traditional geometric decorations and finely hand-crafted metal details. The chest includes three integrated lower drawers, combining functional storage with strong heritage aesthetics. An elegant piece suitable for museum display or refined classic interiors.",
    
    ku: "سندووقێکی دارستانی هندی گەورە کە بە مس ڕازێنراوە، بە نەخشەی هندەسی و وردەکارییە دەستییەکان. لە خوارەوە سێ مەجرەتی تێدایە، کە سوود و جوانی کەلەپووری لە یەکدا کۆدەکاتەوە. پارچەیەکی تایبەتی بۆ پێشانگای مۆزەیی یان دیکۆری کلاسیکی."
  },

  images: [
    cld("hoa-box-142_qefjas")
  ],

  image: cld("hoa-box-142_qefjas"),

  keywords: {
    ar: [
      "صندوق هندي",
      "صندوق خشبي",
      "مطعّم بالنحاس",
      "صندوق كبير",
      "صندوق مع مجرات",
      "قطع تراثية"
    ],
    en: [
      "Indian wooden chest",
      "brass inlaid chest",
      "large wooden chest",
      "heritage storage box"
    ],
    ku: [
      "سندووقی هندی",
      "سندووقی دارستانی",
      "ڕازێنراو بە مس",
      "سندووقی گەورە"
    ]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-138",

  name: {
    ar: "قطعة نحاس تراثية",
    en: "Traditional Copper Vessel",
    ku: "پارچەی مسی کەلەپووری"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  price: "220,000 دينار عراقي",
  priceNumber: 220000,

  material: {
    ar: "نحاس مصقول يدويًا",
    en: "Hand-Finished Copper",
    ku: "مسی بە دەست پاککراو"
  },

  desc: {
    ar: "قطعة نحاسية تراثية مصنوعة بأسلوب تقليدي، تتميز بشكلها الكروي المتوازن وغطائها المعدني ذي المقبض العلوي. تعكس القطعة استخدامات الحياة اليومية القديمة والحرفية اليدوية في تشكيل النحاس، ما يجعلها مناسبة للعرض المتحفي أو للاقتناء كقطعة ديكور تراثي أصيل.",
    
    en: "A traditional copper vessel crafted in a classic form, featuring a rounded body and a metal lid with an upper handle. The piece reflects historical daily-use objects and skilled handcraftsmanship, making it suitable for museum display or as an authentic heritage décor item.",
    
    ku: "پارچەیەکی مسی کەلەپووری بە شێوەیەکی کۆن درووستکراوە، بە جەستەیەکی گۆڵی و قاپێکی ئاسنی بە دەستکەوتی سەرەوە. ئەم پارچەیە پیشەسازیی دەستی و بەکارهێنانی ژیانی ڕۆژانەی کۆن پیشان دەدات و گونجاوە بۆ پێشانگای مۆزەیی یان دیکۆری مێژوویی."
  },

  images: [
    cld("hoa-cop-138_tuzxt4")
  ],

  image: cld("hoa-cop-138_tuzxt4"),

  keywords: {
    ar: ["نحاس", "قطعة نحاسية", "تحف نحاس", "تراث", "أواني قديمة"],
    en: ["copper", "copper vessel", "antique copper", "heritage object"],
    ku: ["مس", "پارچەی مسی", "کەلەپووری"]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-144",

  name: {
    ar: "شمعدان نحاس تراثي",
    en: "Traditional Copper Candelabrum",
    ku: "شمعدانی مسی کەلەپووری"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  dimensions: {
    ar: "الارتفاع 60 سم",
    en: "Height: 60 cm",
    ku: "بەرزی: ٦٠ سم"
  },

  heightCm: 60,

  price: "150,000 دينار عراقي",
  priceNumber: 150000,

  material: {
    ar: "نحاس مصبوب ومزخرف يدويًا",
    en: "Cast and Decorated Copper",
    ku: "مسی داڕێژراو و بە دەست ڕازێنراو"
  },

  desc: {
    ar: "شمعدان نحاسي تراثي بارتفاع 60 سم، يتميز بتصميم كلاسيكي متوازن وثلاثة أذرع جانبية مع حامل علوي، مزخرف بتفاصيل نباتية دقيقة. يعكس الشمعدان الحرفية اليدوية القديمة ويُعد قطعة مثالية للعرض المتحفي أو كعنصر ديكور تراثي أنيق داخل المساحات الكلاسيكية.",
    
    en: "A traditional copper candelabrum standing 60 cm tall, featuring a balanced classic design with three side arms and an upper holder, adorned with fine floral engravings. This piece reflects historical craftsmanship and is ideal for museum display or refined heritage décor.",
    
    ku: "شمعدانێکی مسی کەلەپووری بە بەرزی ٦٠ سم، بە دیزاینێکی هاوسەنگ و سێ بازووی لاوەکی و هەڵگری سەرەوە، بە وردەکاریی ڕووەکی جوان. ئەم پارچەیە پیشەسازیی دەستی کۆن پیشان دەدات و گونجاوە بۆ پێشانگای مۆزەیی یان دیکۆری کلاسیکی."
  },

  images: [
    cld("hoa-cop-144_sjkgij")
  ],

  image: cld("hoa-cop-144_sjkgij"),

  keywords: {
    ar: [
      "شمعدان نحاس",
      "شمعدان تراثي",
      "تحف نحاسية",
      "ديكور كلاسيك",
      "شمعدان قديم"
    ],
    en: [
      "copper candelabrum",
      "antique candelabrum",
      "heritage copper",
      "classic decor"
    ],
    ku: [
      "شمعدانی مسی",
      "کەلەپووری",
      "دیکۆری کلاسیکی"
    ]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-139",

  name: {
    ar: "قطعة نحاس مزخرفة تراثية",
    en: "Decorative Antique Copper Piece",
    ku: "پارچەی مسی ڕازێنراوی کەلەپووری"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  price: "150,000 دينار عراقي",
  priceNumber: 150000,

  material: {
    ar: "نحاس مصبوب ومزخرف يدويًا",
    en: "Cast and Hand-Decorated Copper",
    ku: "مسی داڕێژراو و بە دەست ڕازێنراو"
  },

  desc: {
    ar: "قطعة نحاسية تراثية ذات تصميم أنيق ومزخارف نباتية بارزة، تتميز بجسم متوازن وقاعدة ثابتة مع مقبض علوي منحوت بأسلوب زخرفي كلاسيكي. تعكس القطعة مستوىً عاليًا من الحرفية اليدوية، وتُعد مناسبة للعرض المتحفي أو للاقتناء كقطعة ديكور تراثي راقٍ.",
    
    en: "An elegant antique copper piece featuring raised floral decorations, a balanced body, and an ornately sculpted upper handle. This item reflects fine traditional craftsmanship and is suitable for museum display or as a refined heritage décor object.",
    
    ku: "پارچەیەکی مسی کەلەپووری بە دیزاینێکی جوان و نەخشەی ڕووەکی بەرز، بە جەستەیەکی هاوسەنگ و بنکەیەکی جێگیر لەگەڵ دەستکەوتێکی هونەری لە سەرەوە. ئەم پارچەیە پیشەسازیی دەستی بەرز پیشان دەدات و گونجاوە بۆ پێشانگای مۆزەیی یان دیکۆری مێژوویی."
  },

  images: [
    cld("hoa-cop-139_nq2ome")
  ],

  image: cld("hoa-cop-139_nq2ome"),

  keywords: {
    ar: [
      "نحاس",
      "قطعة نحاسية",
      "تحف نحاس",
      "تراث",
      "ديكور كلاسيك"
    ],
    en: [
      "copper",
      "antique copper",
      "decorative copper",
      "heritage object"
    ],
    ku: [
      "مس",
      "پارچەی مسی",
      "کەلەپووری"
    ]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-125",

  name: {
    ar: "قِكّة نحاس منقوشة تراثية",
    en: "Engraved Traditional Copper Ewer",
    ku: "قکەی مسی کەلەپووری نەقشکراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  dimensions: {
    ar: "الارتفاع 60 سم",
    en: "Height: 60 cm",
    ku: "بەرزی: ٦٠ سم"
  },

  heightCm: 60,

  price: "750,000 دينار عراقي",
  priceNumber: 750000,

  material: {
    ar: "نحاس منقوش يدويًا",
    en: "Hand-Engraved Copper",
    ku: "مسی بە دەست نەقشکراو"
  },

  desc: {
    ar: "قِكّة نحاسية تراثية بارتفاع 60 سم، منفذة بنقوش نباتية وهندسية دقيقة تغطي كامل الجسم، مع تناسق واضح في الشكل والانحناءات. تعكس القطعة مستوىً عاليًا من الحرفية اليدوية التقليدية، وتُعد قطعة فاخرة مناسبة للعرض المتحفي أو للاقتناء كعنصر ديكور تراثي راقٍ.",
    
    en: "A traditional copper ewer standing 60 cm tall, fully adorned with intricate floral and geometric engravings. The piece features harmonious proportions and elegant curves, reflecting high-level traditional craftsmanship, making it ideal for museum display or refined heritage décor.",
    
    ku: "قکەیەکی مسی کەلەپووری بە بەرزی ٦٠ سم، بە نەخشەی وردی ڕووەکی و هندەسی کە تەواوی جەستەکەیان داپۆشراوە. هاوسەنگی شێوە و قەوسەکان پیشەسازیی دەستی بەرز پیشان دەدات و پارچەیەکی گونجاوە بۆ پێشانگای مۆزەیی یان دیکۆری کەلەپووری."
  },

  images: [
    cld("hoa-cop-125_zufybx")
  ],

  image: cld("hoa-cop-125_zufybx"),

  keywords: {
    ar: [
      "قكة نحاس",
      "قكة منقوشة",
      "نحاس تراثي",
      "تحف نحاسية",
      "ديكور كلاسيك"
    ],
    en: [
      "copper ewer",
      "engraved copper",
      "antique copper vessel",
      "heritage decor"
    ],
    ku: [
      "قکەی مسی",
      "مسی نەقشکراو",
      "کەلەپووری"
    ]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-126",

  name: {
    ar: "إبريق نحاس منقوش تراثي",
    en: "Engraved Traditional Copper Ewer",
    ku: "ئیبریقی مسی کەلەپووری نەقشکراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  price: "350,000 دينار عراقي",
  priceNumber: 350000,

  material: {
    ar: "نحاس منقوش يدويًا",
    en: "Hand-Engraved Copper",
    ku: "مسی بە دەست نەقشکراو"
  },

  desc: {
    ar: "إبريق نحاسي تراثي منفذ بنقوش نباتية وهندسية دقيقة تغطي كامل الجسم، يتميز بعنق طويل وفوهة منحنية ومقبض متوازن يعكس الذوق الكلاسيكي للحرف المعدنية القديمة. قطعة مميزة تصلح للعرض المتحفي أو للاقتناء كعنصر ديكور تراثي فاخر.",
    
    en: "A traditional copper ewer fully adorned with fine floral and geometric engravings. Featuring a long neck, curved spout, and balanced handle, this piece reflects classic metal craftsmanship and is suitable for museum display or refined heritage décor.",
    
    ku: "ئیبریقێکی مسی کەلەپووری بە نەخشەی وردی ڕووەکی و هندەسی، بە ملێکی درێژ و دەمێکی قەوساو و دەستکەوتێکی هاوسەنگ. ئەم پارچەیە پیشەسازیی دەستی کۆن پیشان دەدات و گونجاوە بۆ پێشانگای مۆزەیی یان دیکۆری کەلەپووری."
  },

  images: [
    cld("hoa-cop-126_iywquf")
  ],

  image: cld("hoa-cop-126_iywquf"),

  keywords: {
    ar: [
      "إبريق نحاس",
      "إبريق منقوش",
      "نحاس تراثي",
      "تحف نحاسية",
      "ديكور كلاسيك"
    ],
    en: [
      "copper ewer",
      "engraved copper",
      "antique copper vessel",
      "heritage decor"
    ],
    ku: [
      "ئیبریقی مسی",
      "مسی نەقشکراو",
      "کەلەپووری"
    ]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-137",

  name: {
    ar: "قطعة نحاس منقوشة تراثية",
    en: "Engraved Traditional Copper Bowl",
    ku: "پارچەی مسی کەلەپووری نەقشکراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  dimensions: {
    ar: "المحيط 80 سم",
    en: "Circumference: 80 cm",
    ku: "دەوروبەری: ٨٠ سم"
  },

  circumferenceCm: 80,

  price: "550,000 دينار عراقي",
  priceNumber: 550000,

  material: {
    ar: "نحاس منقوش يدويًا",
    en: "Hand-Engraved Copper",
    ku: "مسی بە دەست نەقشکراو"
  },

  desc: {
    ar: "قطعة نحاسية تراثية منقوشة بدقة عالية، تتميز بزخارف نباتية وهندسية متكررة تمتد حول محيط القطعة بالكامل. يعكس العمل حرفية تقليدية رفيعة ويُعد قطعة مميزة للعرض المتحفي أو للاقتناء كعنصر ديكور تراثي أنيق.",
    
    en: "A traditional copper piece finely engraved with repeating floral and geometric motifs encircling the entire body. This item reflects refined traditional craftsmanship and is suitable for museum display or as an elegant heritage décor object.",
    
    ku: "پارچەیەکی مسی کەلەپووری بە وردەکارییەکی بەرز نەقشکراوە، بە نەخشەی ڕووەکی و هندەسی کە بە تەواوی دەوروبەری پارچەکە داپۆشراوە. ئەم کارە پیشەسازیی دەستی بەرز پیشان دەدات و گونجاوە بۆ پێشانگای مۆزەیی یان دیکۆری مێژوویی."
  },

  images: [
    cld("hoa-cop-137_tpwkm6")
  ],

  image: cld("hoa-cop-137_tpwkm6"),

  keywords: {
    ar: [
      "نحاس",
      "قطعة نحاسية",
      "نحاس منقوش",
      "تحف نحاسية",
      "ديكور تراثي"
    ],
    en: [
      "engraved copper",
      "copper bowl",
      "antique copper",
      "heritage decor"
    ],
    ku: [
      "مس",
      "مسی نەقشکراو",
      "کەلەپووری"
    ]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-136-1",

  name: {
    ar: "مصباح منضدي بقاعدة نحاسية وزجاج ملوّن",
    en: "Table Lamp with Brass Base and Stained Glass Shade",
    ku: "چرای سەربانی بە بنەمای مسی و شیشەی ڕەنگاوڕەنگ"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  dimensions: {
    ar: "الارتفاع 40 سم",
    en: "Height: 40 cm",
    ku: "بەرزی: ٤٠ سم"
  },

  heightCm: 40,

  price: "90,000 دينار عراقي",
  priceNumber: 90000,

  material: {
    ar: "قاعدة نحاسية مع غطاء زجاج ملوّن",
    en: "Brass Base with Stained Glass Shade",
    ku: "بنەمای مسی لەگەڵ شیشەی ڕەنگاوڕەنگ"
  },

  desc: {
    ar: "مصباح منضدي كلاسيكي بقاعدة نحاسية مزخرفة وغطاء زجاج ملوّن بأسلوب زخرفي ناعم، يمنح إضاءة دافئة وأجواء أنيقة. قطعة تجمع بين الوظيفة والجمال، مناسبة للاستخدام اليومي أو كعنصر ديكور تراثي داخل المساحات الكلاسيكية.",
    
    en: "A classic table lamp featuring an ornate brass base and a softly patterned stained glass shade, providing warm ambient lighting. A functional yet decorative piece suitable for everyday use or as a refined heritage décor element.",
    
    ku: "چرایەکی سەربانی کلاسیکی بە بنەمای مسی ڕازێنراو و قاپێکی شیشەی ڕەنگاوڕەنگ، ڕووناکییەکی گەرم و هەوایەکی جوان دروست دەکات. پارچەیەکی گونجاو بۆ بەکارهێنانی ڕۆژانە یان وەک دیکۆری کەلەپووری."
  },

  images: [
    cld("hoa-cop-136-1_kr56wl")
  ],

  image: cld("hoa-cop-136-1_kr56wl"),

  keywords: {
    ar: [
      "مصباح منضدي",
      "مصباح نحاس",
      "إضاءة تراثية",
      "ديكور كلاسيك",
      "مصباح زجاج ملون"
    ],
    en: [
      "table lamp",
      "brass lamp",
      "stained glass lamp",
      "classic lighting"
    ],
    ku: [
      "چرای سەربانی",
      "چرای مسی",
      "ڕووناکی کلاسیکی"
    ]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-132",

  name: {
    ar: "شمعدان نحاسي مزخرف",
    en: "Decorative Brass Candlestick",
    ku: "شمعدانی مسی ڕازێنراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  dimensions: {
    ar: "الارتفاع 20 سم",
    en: "Height: 20 cm",
    ku: "بەرزی: ٢٠ سم"
  },

  heightCm: 20,

  price: "75,000 دينار عراقي",
  priceNumber: 75000,

  material: {
    ar: "نحاس مصبوب ومزخرف يدويًا",
    en: "Cast and Decorated Copper",
    ku: "مسی داڕێژراو و بە دەست ڕازێنراو"
  },

  desc: {
    ar: "شمعدان نحاسي صغير الحجم بارتفاع 20 سم، يتميز بتصميم كلاسيكي مزخرف وقاعدة ثابتة مع ذراعين لحمل الشموع. يعكس الذوق الفني الأوروبي التقليدي والحرفية اليدوية الدقيقة، ويُعد قطعة مناسبة للعرض المتحفي أو للاستخدام كعنصر ديكور تراثي أنيق.",
    
    en: "A small decorative copper candlestick standing 20 cm tall, featuring a classic ornate design with a stable base and two candle holders. The piece reflects traditional European aesthetics and fine handcraftsmanship, making it suitable for museum display or refined heritage décor.",
    
    ku: "شمعدانێکی مسی بچووک بە بەرزی ٢٠ سم، بە دیزاینێکی کلاسیکی ڕازێنراو و بنکەیەکی جێگیر لەگەڵ دوو شوێنی شەم. ئەم پارچەیە هەستی هونەری کۆن و پیشەسازیی دەستی ورد پیشان دەدات و گونجاوە بۆ پێشانگای مۆزەیی یان دیکۆری کەلەپووری."
  },

  images: [
    cld("hoa-cop-132_pnx1di")
  ],

  image: cld("hoa-cop-132_pnx1di"),

  keywords: {
    ar: [
      "شمعدان نحاس",
      "شمعدان صغير",
      "تحف نحاسية",
      "ديكور تراثي",
      "شمعدان قديم"
    ],
    en: [
      "copper candlestick",
      "antique candlestick",
      "decorative brass",
      "heritage decor"
    ],
    ku: [
      "شمعدانی مسی",
      "کەلەپووری",
      "دیکۆری مێژوویی"
    ]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-131",

  name: {
    ar: "زوج شمعدانات نحاس مزخرفة",
    en: "Pair of Decorative Copper Candlesticks",
    ku: "دوو شمعدانی مسی ڕازێنراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  quantity: {
    ar: "زوج",
    en: "Pair",
    ku: "دوو دانە"
  },

  price: "150,000 دينار عراقي",
  priceNumber: 150000,

  material: {
    ar: "نحاس مصبوب ومزخرف يدويًا",
    en: "Cast and Decorated Copper",
    ku: "مسی داڕێژراو و بە دەست ڕازێنراو"
  },

  desc: {
    ar: "زوج شمعدانات نحاسية متطابقة بتصميم كلاسيكي أنيق، مزخرفة بنقوش نباتية بارزة وقواعد ثابتة منحوتة بعناية. القطعتان تعكسان الحرفية اليدوية التقليدية وتُعدان مثاليتين للعرض المتحفي أو للاستخدام كعنصر ديكور تراثي فاخر يضفي طابعًا دافئًا وأنيقًا على المكان.",
    
    en: "A matching pair of copper candlesticks featuring an elegant classic design, adorned with raised floral motifs and carefully sculpted bases. These pieces reflect traditional handcraftsmanship and are ideal for museum display or as refined heritage décor elements.",
    
    ku: "دوو شمعدانێکی مسی هاوشێوە بە دیزاینێکی کلاسیکی جوان، بە نەخشەی ڕووەکی بەرز و بنکەیەکی جێگیر. ئەم دوو پارچەیە پیشەسازیی دەستی کۆن پیشان دەدەن و گونجاون بۆ پێشانگای مۆزەیی یان دیکۆری کەلەپووری فەخمی."
  },

  images: [
    cld("hoa-cop-131_xewxae")
  ],

  image: cld("hoa-cop-131_xewxae"),

  keywords: {
    ar: [
      "زوج شمعدانات",
      "شمعدان نحاس",
      "تحف نحاسية",
      "ديكور تراثي",
      "شمعدانات قديمة"
    ],
    en: [
      "pair of candlesticks",
      "copper candlesticks",
      "antique copper",
      "heritage decor"
    ],
    ku: [
      "دوو شمعدان",
      "شمعدانی مسی",
      "کەلەپووری"
    ]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-128",

  name: {
    ar: "وعاء نحاسي قائم على أرجل مزخرفة",
    en: "Copper Bowl on Decorative Legs",
    ku: "قابێکی مسی لەسەر پێی ڕازێنراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  saleType: {
    ar: "تباع قطعة واحدة أو زوج",
    en: "Sold as single piece or pair",
    ku: "دەتوانرێت تاک یان دوو دانە بفرۆشرێت"
  },

  pricingOptions: {
    single: {
      label: {
        ar: "قطعة واحدة",
        en: "Single piece",
        ku: "یەک دانە"
      },
      price: "250,000 دينار عراقي",
      priceNumber: 250000
    },
    pair: {
      label: {
        ar: "زوج",
        en: "Pair",
        ku: "دوو دانە"
      },
      price: "500,000 دينار عراقي",
      priceNumber: 500000
    }
  },

  material: {
    ar: "نحاس مشغول ومزخرف يدويًا",
    en: "Hand-worked and Decorated Copper",
    ku: "مسی کاری دەستی و ڕازێنراو"
  },

  desc: {
    ar: "وعاء نحاسي مزخرف قائم على أرجل معدنية منحنية، يتميز بتصميم كلاسيكي أنيق ونقوش دقيقة على البدن. يمكن اقتناؤه كقطعة منفردة أو كزوج متطابق، ما يجعله مناسبًا للعرض المتحفي أو للاستخدام كعنصر ديكور تراثي فاخر.",
    
    en: "A decorative copper bowl standing on curved metal legs, featuring an elegant classical form and fine engraved details. The piece can be purchased individually or as a matching pair, making it suitable for museum display or refined heritage décor.",
    
    ku: "قابێکی مسی ڕازێنراو لەسەر پێی کەوانە، بە شێوەیەکی کلاسیکی جوان و نەخشەی ورد. دەتوانرێت وەک پارچەی تاک یان وەک دوو پارچەی هاوشێوە بکرێت، گونجاو بۆ مۆزەیەکان یان دیکۆری کەلەپووری."
  },

  images: [
    cld("hoa-cop-128_d6fjfc")
  ],

  image: cld("hoa-cop-128_d6fjfc"),

  keywords: {
    ar: [
      "وعاء نحاس",
      "قطعة نحاسية",
      "نحاس مزخرف",
      "تحف نحاسية",
      "ديكور تراثي"
    ],
    en: [
      "copper bowl",
      "decorative copper",
      "antique copper",
      "heritage decor"
    ],
    ku: [
      "قاب مسی",
      "کەلەپووری",
      "دیکۆری مێژوویی"
    ]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-CRY-141",

  name: {
    ar: "فازا كريستال روسي زرقاء محفورة يدويًا",
    en: "Hand-Engraved Russian Blue Crystal Vase",
    ku: "فازەی کریستالی شین ـ بە دەست هەڵکێشراو"
  },

  categories: {
    ar: ["فازات", "كريستال"],
    en: ["Vases", "Crystal"],
    ku: ["فازەکان", "کریستال"]
  },

  material: {
    ar: "كريستال ملون محفور يدويًا",
    en: "Hand-engraved colored crystal",
    ku: "کریستالی ڕەنگاوڕەنگ ـ هەڵکێشراوی دەستی"
  },

  price: "3,000,000د.ع",
  priceNumber:3000000,

  desc: {
    ar: "فازا كريستال زرقاء فاخرة ذات حافة متموجة وقاعدة دائرية، مزخرفة بنقش يدوي دقيق يصور مشهدًا معماريًا ريفيًا. تمتاز بصفاء الكريستال وعمق اللون الأزرق، ما يجعلها قطعة مميزة للعرض المتحفي أو للاقتناء ضمن مجموعات الفازات الكريستالية النادرة.",
    
    en: "A luxurious blue crystal vase with a wavy rim and circular base, delicately hand-engraved with a rural architectural scene. Its clear crystal and deep blue tone make it an exceptional piece for museum display or refined crystal vase collections.",
    
    ku: "فازەیەکی کریستالی شینی فەخمی بە لێواری موج‌دار و بنکەیەکی بازنەیی، بە هەڵکێشانی دەستی ورد کە دیمەنێکی شوێنی گوندی پیشان دەدات. پاکی کریستال و قووڵی ڕەنگی شین ئەم پارچەیە دەکات بە دانەیەکی دەگمە بۆ پێشانگای مۆزەیی یان کۆمەڵە فازە کریستالییەکان."
  },

  images: [
    cld("hoa-cry-141_pfp5zd")
  ],

  image: cld("hoa-cry-141_pfp5zd"),

  keywords: {
    ar: [
      "فازا كريستال",
      "فازات",
      "كريستال ملون",
      "تحف كريستال",
      "فازا زرقاء"
    ],
    en: [
      "crystal vase",
      "blue crystal",
      "engraved crystal",
      "decorative vase"
    ],
    ku: [
      "فازە کریستالی",
      "کریستال شین",
      "کەلەپووری"
    ]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-WOOD-120",

  name: {
    ar: "مراية أرضية بإطار خشبي مزخرف",
    en: "Floor Mirror with Ornate Wooden Frame",
    ku: "ئاوێنەی ئەساسی بە چوارچێوەی دارەوەی ڕازێنراو"
  },

  category: {
    ar: "أثاث",
    en: "Furniture",
    ku: "کەلوپەلی ناوماڵ"
  },

  material: {
    ar: "خشب طبيعي مزخرف يدويًا",
    en: "Hand-carved natural wood",
    ku: "دارەوەی سرووشتی هەڵکێشراوی دەستی"
  },

  dimensions: {
    ar: "الارتفاع 163 سم",
    en: "Height: 163 cm",
    ku: "بەرزی: ١٦٣ سم"
  },

  heightCm: 163,

  price: "760,000 دينار عراقي",
  priceNumber: 760000,

  desc: {
    ar: "مراية أرضية تراثية بإطار خشبي مزخرف بنقوش كلاسيكية أنيقة، تتميز بارتفاعها اللافت وحضورها القوي ضمن المساحات الداخلية. قطعة أثاث فنية تجمع بين الوظيفة والجمال، مناسبة للعرض المتحفي أو للاستخدام في القاعات والمجالس التراثية.",
    
    en: "A heritage floor mirror with an ornate wooden frame featuring elegant classical carvings. Its impressive height and strong presence make it both a functional and artistic furniture piece, ideal for museum display or refined interior spaces.",
    
    ku: "ئاوێنەیەکی ئەساسی بە چوارچێوەی دارەوەی ڕازێنراو، بە نەخشە کلاسیکییە جوانەکان و بەرزییەکی دیار. پارچەیەکی کەلەپوورییە کە نێوان سوود و جوانی کۆدەکات، گونجاو بۆ مۆزەیەکان یان شوێنە فەخمییەکان."
  },

  images: [
    cld("hoa-cry-120_vp0d9n")
  ],

  image: cld("hoa-cry-120_vp0d9n"),

  keywords: {
    ar: [
      "مراية",
      "أثاث تراثي",
      "مراية خشبية",
      "أثاث كلاسيكي",
      "تحف أثاث"
    ],
    en: [
      "floor mirror",
      "wooden furniture",
      "heritage furniture",
      "ornate mirror"
    ],
    ku: [
      "ئاوێنە",
      "کەلوپەلی ناوماڵ",
      "کەلەپووری"
    ]
  },

  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id:"HOA-WOOD-140",
  name:{ar:"مقعد خشبي أنتيك مزدوج الطراز الكلاسيكي",en:"Antique Double Wooden Bench – Classic Style",ku:"کورسی دارەکی کۆن دووشوێن بە شێوازی کلاسیکی"},
  desc:{
    ar:"مقعد خشبي أنتيك مزدوج يعود إلى بدايات القرن العشرين، مصنوع من خشب صلب متين بتفاصيل يدوية أنيقة، يتميز بمساند جانبية منحنية وظهر بقضبان عمودية كلاسيكية مع وسادتين أصليتين مكسوتين بنسيج مزخرف محفوظ بحالته، قطعة راقية مناسبة للعرض المتحفي أو كعنصر ديكور فاخر.",
    en:"An early-20th-century antique double wooden bench crafted from solid hardwood, featuring curved armrests, vertical spindle back, and two original upholstered cushions. A refined heritage piece ideal for museum display or classic interiors.",
    ku:"کورسییەکی دارەکی کۆن دووشوێن لە سەدەی ٢٠، درووستکراو لە دارەی قەڵەو، پشتە ستوونی کلاسیکی و دوو بالینێکی ڕەسەن هەیە، پارچەیەکی فاخر بۆ مۆزە یان دیكۆری میراثی."
  },
  category:{ar:"أثاث خشبي",en:"Wooden Furniture",ku:"کەلوپەلی دارەکی"},
  price:"355000د.ع",
  priceNumber:355000,
  status:"available",
  featured:true,
  featuredRank: 3,
  auction:false,
  image:cld("hoa-wood-140-1_to2ktw"),
  images:[cld("hoa-wood-140-1_to2ktw"),cld("hoa-wood-140_vfrqk6"),cld("hoa-wood-140-2_yjcgbx")]
},
{
  id:"HOA-WOOD-142",
  name:{ar:"طاولة خشبية عالية أنتيك",en:"Antique High Wooden Table",ku:"مێزی دارەکی بەرز کۆن"},
  desc:{
    ar:"طاولة خشبية عالية أنتيك بارتفاع 110 سم، مصنوعة من خشب صلب مع أرجل ملتوية يدوية وقاعدة سفلية داعمة، تصميم كلاسيكي أنيق مناسب لعرض القطع الفنية أو كطاولة جانبية في المساحات التراثية.",
    en:"An antique high wooden table, 110 cm tall, crafted from solid wood with hand-turned legs and a supportive lower base. A classic elegant design ideal for displaying artworks or as a heritage side table.",
    ku:"مێزی دارەکی بەرز کۆن بە بەرزی 110 سم، لە دارەی قەڵەو درووستکراوە، بە قچ و پێچەوانە دەستی و بنکەی خوارەوەی بەهێز، گونجاو بۆ پیشاندانی هونەر یان وەک مێزی لاوەکی میراثی."
  },
  category:{ar:"أثاث",en:"Furniture",ku:"کەلوپەلی ناوماڵ"},
  keywords:["طاولة","طاولة خشبية","طاولة عالية","أثاث أنتيك","طاولة عرض","طاولة تراثية","wooden table","antique table","display table"],
  price:"300,000 د.ع",
  priceNumber:300000,
  status:"available",
  featured:true,
  auction:false,
  image:cld("hoa-wood-142_lodnt0"),
  images:[cld("hoa-wood-142_lodnt0")]
},
{
  id:"HOA-WOOD-129",
  name:{ar:"مقعد خشبي منحوت على شكل فيل",en:"Hand-Carved Wooden Elephant Stool",ku:"کورسی دارەکی دەست‌تاشراو بە شێوەی فیل"},
  desc:{
    ar:"مقعد خشبي أنتيك منحوت يدويًا على شكل فيل، بارتفاع 35 سم، يتميز بتفاصيل نحت دقيقة ولمسة فنية تراثية، مع وسادة علوية مزخرفة تضيف طابعًا فخمًا. قطعة مميزة تصلح للعرض المتحفي أو كعنصر ديكور فاخر في المساحات التراثية.",
    en:"A hand-carved antique wooden stool shaped like an elephant, 35 cm high, featuring fine carving details and a decorative upholstered top. A distinctive piece suitable for museum display or as a luxury heritage décor element.",
    ku:"کورسییەکی دارەکی کۆن بە شێوەی فیل، دەست‌تاشراو بە وردەکاری جوان و بەرزی 35 سم، لەگەڵ بالینێکی سەرەوەی نەخشدار، پارچەیەکی نایاب بۆ مۆزە یان دیكۆری میراثی."
  },
  category:{ar:"أثاث",en:"Furniture",ku:"کەلوپەلی ناوماڵ"},
  keywords:["مقعد","مقعد خشبي","فيل","فيل خشبي","أثاث أنتيك","مقعد منحوت","تحفة خشبية","wooden elephant","antique stool","carved wood"],
  price:"450,000 د.ع",
  priceNumber:450000,
  status:"available",
  featured:false,
  auction:false,
  image:cld("hoa-wood-129_ir4wft"),
  images:[cld("hoa-wood-129_ir4wft"),cld("hoa-wood-129-1_fz1mgn")]
},
{
  id:"HOA-WOOD-135",
  name:{ar:"منفضة سكائر خشبية أنتيك",en:"Antique Wooden Standing Ashtray",ku:"خۆڵدانەی جگەرە دارەکی کۆن"},
  desc:{
    ar:"منفضة سكائر خشبية أنتيك قائمة بارتفاع 55 سم، مصنوعة من الخشب المنحوت يدويًا بزخارف دقيقة وقاعدة دائرية ثابتة. تصميم تراثي أنيق يضفي طابعًا كلاسيكيًا راقيًا، مناسبة للعرض المتحفي أو للاستخدام كقطعة ديكور مميزة.",
    en:"An antique standing wooden ashtray, 55 cm high, hand-carved with intricate decorative patterns and a stable round base. A refined heritage piece suitable for museum display or as a distinctive decorative element.",
    ku:"خۆڵدانەی جگەرە دارەکی کۆن بە بەرزی 55 سم، دەست‌تاشراو بە نەخشە وردەکاری و بنکەی بازنەی بەهێز، پارچەیەکی میراثی جوان بۆ مۆزە یان دیكۆری تایبەتی."
  },
  category:{ar:"أثاث",en:"Furniture",ku:"کەلوپەلی ناوماڵ"},
  keywords:["منفضة","منفضة سكائر","منفضة خشبية","أثاث أنتيك","تحفة خشبية","منفضة قائمة","ashtray","wooden ashtray","antique ashtray"],
  price:"75,000 د.ع",
  priceNumber:75000,
  status:"available",
  featured:false,
  auction:false,
  image:cld("hoa-wood-135_xzmsty"),
  images:[cld("hoa-wood-135_xzmsty")]
},
{
  id:"HOA-CRY-133",
  name:{ar:"زوج فازات آسيوية أنتيك",en:"Pair of Antique Asian Floor Vases",ku:"دوو فازەی ئاسیایی کۆن"},
  desc:{
    ar:"زوج فازات آسيوية أنتيك كبيرتين بارتفاع 165 سم، مصنوعتين من الخزف المزخرف باللونين الأزرق والأبيض بزخارف تقليدية دقيقة، مع قواعد خشبية مرافقة. قطع فاخرة ذات حضور بصري قوي، مناسبة للعرض المتحفي أو لتزيين القاعات والمساحات الواسعة الراقية.",
    en:"A pair of large antique Asian floor vases, 165 cm high, crafted from blue-and-white decorated ceramic with intricate traditional motifs, accompanied by wooden bases. Prestigious statement pieces ideal for museum display or grand interior spaces.",
    ku:"دوو فازەی گەورەی ئاسیایی کۆن بە بەرزی 165 سم، لە خزەفی شین و سپی بە نەخشەی کلاسیکی ورد، لەگەڵ بنکەی داری. پارچەیەکی فاخر و دیار بۆ مۆزە یان شوێنە گەورە و ڕەنگینەکان."
  },
  category:{ar:"فازات",en:"Vases",ku:"فازەکان"},
  keywords:["فازة","فازات","زوج فازات","فازات آسيوية","فازة صينية","تحف آسيوية","فازات أرضية","antique vases","asian vases","blue white vase"],
  price:"17,000,000 د.ع",
  priceNumber:17000000,
  status:"available",
  featured:true,
  featuredRank: 2,
  auction:false,
  image:cld("hoa-cry-133_trgqiy"),
  images:[cld("hoa-cry-133_trgqiy")]
},
{
  id:"HOA-CRY-137",
  name:{ar:"فازا فكتورية أنتيك كبيرة",en:"Large Victorian Antique Vase",ku:"فازەی فکتۆریایی گەورەی کۆن"},
  desc:{
    ar:"فازا فكتورية أنتيك بارتفاع 150 سم، مزخرفة برسومات كلاسيكية تصور مشاهد فنية تاريخية، مع مقابض جانبية وتفاصيل لونية غنية تعكس الذوق الأوروبي الفاخر. قطعة ذات حضور قوي ومكانة عالية، مناسبة للعرض المتحفي أو لتزيين القاعات والمساحات الراقية.",
    en:"A large Victorian antique vase, 150 cm tall, richly decorated with classical painted scenes and elegant side handles. A prestigious European piece with strong visual presence, ideal for museum display or grand interior spaces.",
    ku:"فازەیەکی فکتۆریایی کۆن بە بەرزی 150 سم، بە نەخشە و وێنەی کلاسیکی مێژوویی و دەستگرتە جوانەکان، پارچەیەکی فاخر و دیار بۆ مۆزە یان شوێنە گەورە و ڕەنگینەکان."
  },
  category:{ar:"فازات",en:"Vases",ku:"فازەکان"},
  keywords:["فازة","فازا فكتورية","فازة أنتيك","فازة كبيرة","تحف أوروبية","فازة أرضية","victorian vase","antique vase","floor vase","european antique"],
  price:"900,000د.ع",
  priceNumber:900000,
  status:"available",
  featured:true,
  featuredRank: 1,
  auction:false,
  image:cld("hoa-cry-137_zunifk"),
  images:[
    cld("hoa-cry-137_zunifk"),
    cld("hoa-cry-137-1_b4mfo3"),
    cld("hoa-cry-137-2_gvn4c3"),
    cld("hoa-cry-137-3_kpsnxq"),
    cld("hoa-cry-137-4_qbcsfp")
  ]
},
{
  id:"HOA-FINE-146",
  name:{ar:"ساعة أرضية منحوتة فنية",en:"Carved Artistic Floor Clock",ku:"کاتژمێری سەربەخۆی دەست‌تاشراو"},
  desc:{
    ar:"ساعة أرضية منحوتة بارتفاع 180 سم، منفذة بأسلوب فني كلاسيكي غني بالتفاصيل، تتضمن عناصر نحتية لشخصيات زخرفية تحيط بواجهة الساعة ذات الأرقام الرومانية. قطعة لافتة ذات طابع متحفي، تجمع بين الوظيفة والجمال الفني، مناسبة للعرض أو كعنصر ديكور مركزي فاخر.",
    en:"A carved artistic floor clock, 180 cm tall, executed in a richly detailed classical style with sculptural figures surrounding a Roman numeral clock face. A striking museum-style piece combining function and artistic elegance.",
    ku:"کاتژمێری سەربەخۆی دەست‌تاشراو بە بەرزی 180 سم، بە شێوازی کلاسیکی پڕ وردەکاری، لەگەڵ تێکەڵی پەیکەرە هونەرییەکان لە دەوری کاتژمێرەکە. پارچەیەکی نایاب و فاخر."
  },
  category:{ar:"أثاث",en:"Furniture",ku:"کەلوپەلی ناوماڵ"},
  keywords:["ساعة","ساعة أرضية","ساعة منحوتة","أثاث أنتيك","تحفة فنية","ساعة كلاسيكية","floor clock","carved clock","antique clock","art furniture"],
  price:"4,500,000 د.ع",
  priceNumber:4500000,
  status:"available",
  featured:true,
  featuredRank: 4,
  auction:false,
  image:cld("hoa-fine-146_buidkf"),
  images:[
    cld("hoa-fine-146_buidkf"),
    cld("hoa-fine-146-1_do6jyk"),
    cld("hoa-fine-146-2_lyfo8p"),
    cld("hoa-fine-146-3_mdptwl")
  ]
},
{
  id:"HOA-FINE-124",
  name:{ar:"عمل فني من العاج منحوت يدويًا",en:"Hand-Carved Ivory Artwork",ku:"کاری هونەری لە عاج دەست‌تاشراو"},
  desc:{
    ar:"عمل فني نادر من العاج منحوت يدويًا، بارتفاع 75 سم ووزن يقارب 80 كغم، يتميز بتكوين عضوي غني بالتفاصيل النباتية والنحت المتداخل، مثبت على قاعدة خشبية منحوتة. قطعة ذات قيمة فنية عالية وحضور متحفي قوي، مناسبة للعرض أو للمجموعات الخاصة الراقية.",
    en:"A rare hand-carved ivory artwork, 75 cm tall and weighing approximately 80 kg, featuring an intricate organic composition with rich botanical carving, mounted on a carved wooden base. A museum-quality statement piece for refined collections.",
    ku:"کاری هونەرییەکی دەگمەن لە عاج، دەست‌تاشراو بە بەرزی 75 سم و کێشی نزیکەی 80 کغم، پڕ لە وردەکاری سرووشتی و نەباتی، لەسەر بنکەی داری تاشراو دانراو. پارچەیەکی متحەفی و فاخر."
  },
  category:{ar:"أعمال فنية",en:"Fine Art",ku:"هونەری باڵا"},
  keywords:["عاج","عمل فني","نحت","تحفة نادرة","فن أنتيك","منحوتة","ivory art","carved ivory","antique sculpture","fine art"],
  price:"4,999,000 د.ع",
  priceNumber:4999000,
  status:"available",
  featured:true,
  featuredRank: 5,
  auction:false,
  image:cld("hoa-fine-124_o91phy"),
  images:[cld("hoa-fine-124_o91phy"),cld("hoa-fine-124-1_fn29tz")]
},
{
  id:"HOA-FINE-130",
  name:{ar:"قطعة فنية نحتية كلاسيكية",en:"Classical Sculptural Art Piece",ku:"پارچەیەکی هونەری تاشراوی کلاسیکی"},
  desc:{
    ar:"قطعة فنية نحتية بأسلوب كلاسيكي تجسيدي، تُبرز تفاعلًا إنسانيًا عاطفيًا بتكوين متوازن ولمسات نحتية دقيقة. عمل ذو طابع متحفي يصلح للعرض الفني أو لإثراء المجموعات الخاصة.",
    en:"A classical figurative sculptural artwork highlighting an emotional human interaction with balanced composition and refined carving. A museum-style piece suitable for art display or private collections.",
    ku:"پارچەیەکی هونەری تاشراوی کلاسیکی کە پەیوەندی مرۆیییەکی هەستیار پیشان دەدات، بە پێکهاتەی هاوسەنگ و وردەکارییەکی جوان. گونجاو بۆ مۆزە یان کۆمەڵە تایبەتی."
  },
  category:{ar:"أعمال فنية",en:"Fine Art",ku:"هونەری باڵا"},
  keywords:["نحت","قطعة فنية","منحوتة","فن كلاسيكي","تحفة فنية","sculpture","art piece","classical sculpture","fine art"],
  price:"699,000 د.ع",
  priceNumber:699000,
  status:"available",
  featured:false,
  auction:false,
  image:cld("hoa-fine-130_ldqerk"),
  images:[cld("hoa-fine-130_ldqerk")]
},
{
  id:"HOA-FINE-152",
  name:{ar:"عمل فني خشبي منحوت",en:"Carved Wooden Art Piece",ku:"کاری هونەری دارەکی دەست‌تاشراو"},
  desc:{
    ar:"عمل فني خشبي منحوت بأسلوب تجريدي معاصر، يتميز بتكوين عمودي قوي وملمس طبيعي يعكس روح المادة والخطوط الحرة. قطعة فنية ذات طابع تعبيري، مناسبة للعرض المتحفي أو كعنصر فني مميز في المساحات الراقية.",
    en:"A carved wooden art piece in a contemporary abstract style, featuring a strong vertical form and natural texture that highlights the character of the material. An expressive artwork suitable for gallery or refined interior display.",
    ku:"کاری هونەری دارەکی دەست‌تاشراو بە شێوازی ئەبستراکتی هاوچەرخ، بە شێوەی ستوونی بەهێز و پەیوەندی ڕاستەوخۆ لەگەڵ سرووشتی دار. پارچەیەکی هونەری تایبەتی بۆ پیشاندانی هونەری."
  },
  category:{ar:"أعمال فنية",en:"Fine Art",ku:"هونەری باڵا"},
  keywords:["عمل فني","نحت خشبي","فن تجريدي","تحفة خشبية","wood art","wood sculpture","abstract art","fine art"],
  price:"200,000 د.ع",
   priceNumber:200000,
  status:"available",
  featured:false,
  auction:false,
  image:cld("hoa-fine-152_ivcqad"),
  images:[cld("hoa-fine-152_ivcqad"),cld("hoa-fine-152-1_fzxx1k")]
},
{
  id:"HOA-FINE-156",
  name:{ar:"عمل فني نَحتي تجريدي",en:"Abstract Sculptural Art Piece",ku:"کاری هونەری تاشراوی ئەبستراکت"},
  desc:{
    ar:"عمل فني نَحتي بأسلوب تجريدي، يتميز بتكوين عضوي حر وملمس خام يعكس طابع المادة والتشكيل اليدوي. قطعة فنية معاصرة مناسبة للعرض الفني أو للمجموعات الخاصة.",
    en:"An abstract sculptural art piece featuring an organic free-form composition and raw texture that reflects hand-shaped craftsmanship. A contemporary artwork suitable for gallery display or private collections.",
    ku:"کاری هونەری تاشراوی ئەبستراکت بە پێکهاتەیەکی سرووشتی و پەیوەندی ڕاستەوخۆ لەگەڵ مادە، پارچەیەکی هونەری هاوچەرخ بۆ مۆزە یان کۆمەڵە تایبەتی."
  },
  category:{ar:"أعمال فنية",en:"Fine Art",ku:"هونەری باڵا"},
  keywords:["عمل فني","نحت","فن تجريدي","تحفة فنية","منحوتة","abstract art","sculpture","fine art"],
  price:"300,000 د.ع",
  priceNumber:300000,
  status:"available",
  featured:false,
  auction:false,
  image:cld("hoa-fine-156_qgvjur"),
  images:[cld("hoa-fine-156_qgvjur"),cld("hoa-fine-156-1_dvyhfc")]
},
{
  id:"HOA-FINE-185",
  name:{
    ar:"جامعة كتب خشبية منحوتة",
    en:"Carved Wooden Bookends",
    ku:"پشتێنەی کتێبی داری نەخشکراو"
  },
  desc:{
    ar:"جامعة كتب خشبية منحوتة يدويًا، تتميز بتصميم فني مستوحى من الوجوه الكلاسيكية، تجمع بين الوظيفة العملية والقيمة الجمالية. قطعة مناسبة للمكتبات الخاصة أو للعرض الفني.",
    en:"Hand-carved wooden bookends featuring an artistic design inspired by classical faces, combining practical function with aesthetic value. Suitable for private libraries or artistic display.",
    ku:"پشتێنەی کتێبی داری بە دەست نەخشکراو، دیزاینێکی هونەری هەیە کە لە ڕووی کلاسیکی وەرگیراوە و نێوان کارامەیی و جوانی کۆکردووەتەوە."
  },
  category:{ar:"أعمال فنية",en:"Fine Art",ku:"هونەری باڵا"},
  keywords:["جامعة كتب","خشب","نحت","عمل فني","تحفة","bookends","wood carving","art object"],
  price:"200,000 د.ع",
  priceNumber:200000,
  status:"available",
  featured:false,
  auction:false,
  image:cld("hoa-fine-185_qek7gg"),
  images:[cld("hoa-fine-185_qek7gg")]
},
{
  id:"HOA-FINE-177",
  name:{
    ar:"عمل فني نحاسي مجسّم",
    en:"Copper Sculptural Art Piece",
    ku:"کاری هونەری تاشراوی لە مس"
  },
  desc:{
    ar:"عمل فني مجسّم مصنوع من النحاس، بتكوين تجريدي مستوحى من القوارب والأشكال البحرية، يعكس أسلوبًا فنيًا معاصرًا مع ملمس صناعي خام. قطعة مناسبة للعرض الفني أو للمجموعات الخاصة.",
    en:"A sculptural artwork made of copper, featuring an abstract composition inspired by boats and maritime forms, reflecting a contemporary artistic style with a raw industrial texture. Suitable for art display or private collections.",
    ku:"کاری هونەری تاشراوی لە مس درووستکراو، پێکهاتەیەکی ئەبستراکت هەیە کە لە قایق و شێوە دەریاییەکان وەرگیراوە، گونجاو بۆ پیشاندانی هونەری یان کۆمەڵە تایبەتی."
  },
  category:{ar:"أعمال فنية",en:"Fine Art",ku:"هونەری باڵا"},
  keywords:["عمل فني","نحاس","نحت","فن تجريدي","تحفة","copper art","sculpture","fine art"],
  price:"100,000 د.ع",
  priceNumber:100000,
  status:"available",
  featured:false,
  auction:false,
  image:cld("hoa-fine-177_nmyqjj"),
  images:[cld("hoa-fine-177_nmyqjj")]
},
{
  id: "HOA-SAM-175",
  name: {
    ar: "سماور نحاسي تقليدي",
    en: "Traditional Copper Samovar",
    ku: "سەماوەری نەریتی لە مس"
  },
  category: {
    ar: "أدوات تراثية",
    en: "Heritage Items",
    ku: "ئامرازە مێژووییەکان"
  },
  desc: {
    ar: "سماور نحاسي كلاسيكي بتصميم تراثي أنيق، مزود بصنبور نحاسي وقاعدة ثابتة، كان يُستخدم لتحضير الشاي ويُعد اليوم قطعة مثالية للعرض التراثي أو الديكور الكلاسيكي.",
    en: "A classic copper samovar with an elegant traditional design, featuring a brass tap and a stable base. Originally used for tea preparation and now ideal as a heritage display or classic décor piece.",
    ku: "سەماوەریەکی کلاسیکی لە مس بە دیزاینی نەریتی جوان، خاوەن لولەی برۆنزی و بنەمایەکی جێگیر. گونجاوە بۆ پیشاندانی مێژوویی یان دیکۆری کلاسیکی."
  },
  keywords: [
    "سماور",
    "نحاس",
    "تراث",
    "شاي",
    "تحفة",
    "samovar",
    "copper",
    "heritage"
  ],
  price: "250,000 د.ع",
  priceNumber: 250000,
  status: "available",
  featured: false,
  auction: false,
  image: cld("hoa-sam-175_hclgt3"),
  images: [cld("hoa-sam-175_hclgt3")]
},
{
  id: "HOA-COP-154",
  name: {
    ar: "شمعدان نحاسي مزدوج",
    en: "Double-Arm Copper Candelabra",
    ku: "شمعدانی مسی دوو قۆڵ"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },
  desc: {
    ar: "شمعدان نحاسي تقليدي بذراعين، تصميم كلاسيكي بسيط كان يُستخدم للإضاءة بالشموع، ويصلح اليوم كقطعة ديكور تراثية أو للعرض ضمن المجموعات الكلاسيكية.",
    en: "A traditional copper candelabra with two arms, featuring a simple classic design originally used for candle lighting and now suitable as a heritage decorative piece or for classic collections.",
    ku: "شمعدانێکی نەریتی لە مس بە دوو قۆڵ، دیزاینێکی کلاسیکی سادە هەیە، گونجاوە بۆ دیکۆری مێژوویی یان کۆمەڵە کلاسیکی."
  },
  keywords: [
    "شمعدان",
    "نحاس",
    "شموع",
    "تحفة",
    "ديكور تراثي",
    "copper candelabra",
    "candlestick"
  ],
  price: "40,000 د.ع",
  priceNumber: 40000,
  status: "available",
  featured: false,
  auction: false,
  image: cld("hoa-cop-154_wppqtm"),
  images: [
    cld("hoa-cop-154_wppqtm"),
    cld("hoa-cop-154-1_a15sde")
  ]
},
{
  id: "HOA-FUR-121",

  name: {
    ar: "مراية عرضية بإطار فكتوري مزخرف",
    en: "Victorian Horizontal Mirror with Ornate Frame",
    ku: "ئاوێنەی ئاسۆیی بە چوارچێوەی فیکتۆری ڕازێنراو"
  },

  category: {
    ar: "أثاث",
    en: "Furniture",
    ku: "کەلوپەلی ناوماڵ"
  },

  style: {
    ar: "فكتوري",
    en: "Victorian",
    ku: "فیکتۆری"
  },

  material: {
    ar: "إطار مزخرف بأسلوب فكتوري كلاسيكي",
    en: "Ornate frame in classic Victorian style",
    ku: "چوارچێوەی ڕازێنراو بە شێوازی فیکتۆری"
  },

  dimensions: {
    ar: "العرض 100 سم",
    en: "Width: 100 cm",
    ku: "پانی: ١٠٠ سم"
  },

  widthCm: 100,

  price: "1,400,000 دينار عراقي",
  priceNumber: 1400000,

  desc: {
    ar: "مراية عرضية فاخرة بإطار فكتوري مزخرف بزخارف غنية وتفاصيل نحتية دقيقة، تعكس الذوق الأوروبي الكلاسيكي في القرن التاسع عشر. قطعة أثاث مميزة ذات حضور بصري قوي، مناسبة للعرض المتحفي أو لتزيين القاعات والمجالس الراقية.",
    
    en: "A luxurious horizontal mirror with an ornate Victorian frame featuring rich decorative motifs and fine carved details. Reflecting 19th-century European elegance, this piece serves as a striking furniture element for museum display or refined interior spaces.",
    
    ku: "ئاوێنەیەکی ئاسۆیی فەخمی بە چوارچێوەی فیکتۆری ڕازێنراو، بە نەخشە دەوڵەمەند و وردەکارییە هەڵکێشراوەکان. ئەم پارچەیە هەستی جوانی ئەورووپیی سەدەی نۆزدەهەم پیشان دەدات و گونجاوە بۆ مۆزەیەکان یان شوێنە فەخمییەکان."
  },

  images: [
    cld("hoa-cry-121_u3dbvj")
  ],

  image: cld("hoa-cry-121_u3dbvj"),

  keywords: {
    ar: [
      "مراية فكتورية",
      "مراية عرضية",
      "أثاث تراثي",
      "مراية كلاسيكية", 
      "إطار مزخرف"
    ],
    en: [
      "victorian mirror",
      "horizontal mirror",
      "heritage furniture",
      "ornate mirror"
    ],
    ku: [
      "ئاوێنە فیکتۆری",
      "کەلوپەلی ناوماڵ",
      "کەلەپووری"
    ]

  },
  featured: false,
  createdAt: "2026-01-12",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-172",
  name: { ar: "إبريق نحاس تراثي", en: "Vintage Copper Ewer", ku: "ئێوری نەحاسی کۆن" },
  category: { ar: "نحاس", en: "Copper", ku: "نەحاس" },
  price: "85,000 د.ع",
  priceNumber: 85000,
  keywords: {
    ar: ["نحاس","ابريق","إبريق","تراثي","قديم","تحف","بيت التحفيات","ديكور","ضيافة"],
    en: ["copper","ewer","pitcher","vintage","antique","decor","heritage"],
    ku: ["نەحاس","ئێور","کۆن","ئەنەتیک","دیكۆر","میراث"]
  },
  desc: {
    ar: "إبريق نحاس تراثي بتصميم كلاسيكي أنيق ومقبض مرتفع، قطعة مميزة للديكور والضيافة وتناسب العرض المتحفي أو المجموعات الخاصة.",
    en: "A vintage copper ewer with an elegant classic silhouette and high handle—ideal for decor, hospitality styling, and premium collections.",
    ku: "ئێوری نەحاسی کۆن بە دیزاینێکی کلاسیکی جوان و دەستگێرێکی بەرز؛ گونجاو بۆ دیكۆر و کۆمەڵە تایبەتی."
  },
  image: cld("hoa-cop-172_ki4jrg"),
  images: [cld("hoa-cop-172_ki4jrg")],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-173",

  name: {
    ar: "شكردان نحاس تراثي",
    en: "Vintage Copper Sugar Bowl",
    ku: "شەکردانی نەحاسی میراثی"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price: "36,000 د.ع",
  priceNumber: 36000,

  desc: {
    ar: "شكردان نحاسي تراثي بتصميم كلاسيكي وأقدام زخرفية، مصنوع يدويًا ويعكس طابع الضيافة القديمة. قطعة صغيرة أنيقة مناسبة للعرض أو الاستخدام الزخرفي.",
    en: "A vintage copper sugar bowl with a classic design and decorative legs, handcrafted and reflecting traditional hospitality. An elegant small piece suitable for display or decorative use.",
    ku: "شەکردانێکی نەحاسی میراثی بە دیزاینێکی کلاسیکی و پێی ڕازاو، بە دەست دروستکراو و ڕەنگی میوانداریی کۆن پیشان دەدات."
  },

  images: [
    cld("hoa-cop-173_hubuf5")
  ],
  image: cld("hoa-cop-173_hubuf5"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "HOA-COP-174",

  name: {
    ar: "إبريق نحاس تقليدي ارتفاع 50 سم",
    en: "Traditional Copper Pitcher – 50 cm",
    ku: "ئەبریقێکی نەحاسی نەریتی – بەرزی ٥٠ سم"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price: "99,000 د.ع",
  priceNumber: 99000,

  desc: {
    ar: "إبريق نحاسي تقليدي بارتفاع 50 سم، مصنوع يدويًا بتصميم بسيط وأنيق يعكس الطابع التراثي. قطعة عملية وزخرفية مناسبة للعرض ضمن الديكورات الكلاسيكية أو التراثية.",
    en: "A traditional copper pitcher standing 50 cm tall, handcrafted with a simple and elegant design that reflects a heritage character. Suitable for decorative display in classic or traditional interiors.",
    ku: "ئەبریقێکی نەحاسی نەریتی بە بەرزی ٥٠ سم، بە دەست دروستکراو و دیزاینێکی سادە و جوان هەیە کە ڕەنگی میراثی پیشان دەدات. گونجاوە بۆ ڕازاندنەوە."
  },

  images: [
    cld("hoa-cop-174_kzeryu")
  ],
  image: cld("hoa-cop-174_kzeryu"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "HOA-COP-176",

  name: {
    ar: "جرس نحاس كلاسيكي مع قاعدة خشبية",
    en: "Classic Copper Bell with Wooden Base",
    ku: "زەنگی نەحاسی کلاسیکی لەگەڵ بنکەی دار"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price: "65,000 د.ع",
  priceNumber: 65000,

  desc: {
    ar: "جرس مصنوع من النحاس بتصميم كلاسيكي أنيق، مثبت على قاعدة خشبية مزخرفة. قطعة تراثية جميلة تصلح للعرض أو للاستخدام الزخرفي داخل المساحات الكلاسيكية.",
    en: "A copper bell in an elegant classic design, mounted on a decorated wooden base. A charming heritage piece suitable for display or decorative use in classic interiors.",
    ku: "زەنگێکی نەحاسی بە دیزاینی کلاسیکی جوان، لەسەر بنکەیەکی دارە ڕازێنراو دانراوە. پارچەیەکی میراثی گونجاو بۆ ڕازاندنەوە."
  },

  images: [
    cld("hoa-cop-176_naqrxi")
  ],
  image: cld("hoa-cop-176_naqrxi"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "HOA-COP-178",

  name: {
    ar: "زوج شمعدان نحاس مزخرف",
    en: "Pair of Decorative Copper Candlesticks",
    ku: "دوو شەمعدانی نەحاسی ڕازێنراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price: "100,000 د.ع",
  priceNumber: 100000,

  desc: {
    ar: "زوج شمعدان من النحاس، منفذان بأسلوب تقليدي مع زخارف ناعمة ولمسة عتيقة جميلة. مناسبان للعرض على الطاولات أو داخل الديكورات الكلاسيكية.",
    en: "A pair of copper candlesticks crafted in a traditional style with subtle decorative details and an antique finish, ideal for table display or classic interiors.",
    ku: "دوو شەمعدانی نەحاسی بە شێوازی نەریتی درووستکراون، لەگەڵ وردەکارییە ڕازێنراوەکان و ڕووکاری کۆن، گونجاون بۆ ڕازاندنەوەی ناوماڵ."
  },

  images: [
    cld("hoa-cop-178_nn9pbm")
  ],
  image: cld("hoa-cop-178_nn9pbm"),

  featured: false,
  status: "available",
  auction: false
},
{
  id: "HOA-COP-179",

  name: {
    ar: "شمعدان نحاس مزخرف",
    en: "Decorated Copper Candlestick",
    ku: "شەمعدانی مسی نەخشکراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مسی"
  },

  price: "50,000 د.ع",
  priceNumber: 50000,

  desc: {
    ar: "شمعدان نحاس أنتيك بارتفاع 15 سم، يتميز بتصميم كلاسيكي ونقوش يدوية دقيقة، مناسب للعرض الزخرفي أو ضمن المجموعات التراثية.",
    en: "An antique copper candlestick, 15 cm in height, featuring a classic design with fine hand engravings, suitable for decorative display or heritage collections.",
    ku: "شەمعدانێکی مسی کۆن بە بەرزی ١٥ سم، دیزاینێکی کلاسیکی و نەخشی دەستی وردی هەیە، گونجاو بۆ نیشاندان یان کۆمەڵە میراثییەکان."
  },

  image: cld("hoa-cop-179_zlv0lg"),
  images: [
    cld("hoa-cop-179_zlv0lg")
  ],

  featured: false,
  status: "available",
  auction: false
},
{
  id: "HOA-COP-180",

  name: {
    ar: "كاسة نحاس مزخرفة ومحفورة",
    en: "Engraved Decorative Copper Bowl",
    ku: "کاسەی نەحاسی نەخشکراو و هەڵکەندراو"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price: "145,000 د.ع",
  priceNumber: 145000,

  desc: {
    ar: "كاسة نحاس مزخرفة ومحفورة يدويًا بزخارف تقليدية دقيقة، تتميز بتفريغات زخرفية على الجوانب، تصلح للعرض التراثي أو للاستخدام الزخرفي.",
    en: "A decorative copper bowl, hand-engraved with fine traditional motifs and ornamental cutouts on the sides, suitable for heritage display or decorative use.",
    ku: "کاسەیەکی نەحاسی دەست‌نەخشکراو بە نەخشە نەریتییە وردەکان و قەطعی زینەتی لە لاکانەوە، گونجاو بۆ پیشاندانی میراتی یان ڕازاندنەوە."
  },

  images: [
    cld("hoa-cop-180_t82xrs")
  ],
  image: cld("hoa-cop-180_t82xrs"),

  featured: false,
  createdAt: "1960-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-181",

  name: {
    ar: "هاون أعشاب نحاسي",
    en: "Copper Herbal Mortar",
    ku: "هاونێکی گیای دارویی لە نەحاس"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },

  price: "200,000 د.ع",
  priceNumber: 200000,

  desc: {
    ar: "هاون أعشاب نحاسي قطعة واحدة، يتميز بتصميم تقليدي وسطح داخلي مناسب لطحن الأعشاب والتوابل، يصلح للاستخدام أو للعرض الزخرفي.",
    en: "A single-piece copper herbal mortar featuring a traditional design with an interior suitable for grinding herbs and spices, ideal for use or decorative display.",
    ku: "هاونێکی گیای دارویی لە نەحاس، پارچەیەکی تاک، گونجاو بۆ هاوردنی گیای دارویی و سووتەمەنییەکان، دەتوانرێت بۆ بەکارهێنان یان ڕازاندنەوە بەکاربهێنرێت."
  },

  images: [
    cld("hoa-cop-181_xzx2hd")
  ],
  image: cld("hoa-cop-181_xzx2hd"),

  featured: false,
  createdAt: "1960-01-01",
  status: "available",
  auction: false
},
{
  id: "HOA-COP-186",
  name: {
    ar: "إبريق نحاسي تراثي",
    en: "Heritage Copper Pitcher",
    ku: "کوزەی مسی مێژوویی"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },
  desc: {
    ar: "إبريق نحاسي تراثي مصنوع يدويًا بأسلوب تقليدي، يتميز بشكل كروي وفوهة طويلة ومقبض جانبي. قطعة كانت تُستخدم لحفظ أو سكب السوائل، وتُعرض اليوم كتحفة تراثية تعكس جمال الحرف القديمة.",
    en: "A handcrafted heritage copper pitcher with a spherical body, long spout, and side handle. Originally used for storing or pouring liquids, now displayed as a decorative antique reflecting traditional craftsmanship.",
    ku: "کوزەیەکی مسی بە دەست دروستکراو بە شێوازی نەریتی، جەستەیەکی گۆڵاوی هەیە لەگەڵ فمێکی درێژ و دەسکی لاوەکی. گونجاوە بۆ دیکۆری مێژوویی و پیشاندانی پێشەسازی کۆن."
  },
  keywords: [
    "إبريق",
    "نحاس",
    "تحفة تراثية",
    "أواني قديمة",
    "ديكور شرقي",
    "copper pitcher",
    "antique copper"
  ],
  price: "100,000 د.ع",
  priceNumber: 100000,
  status: "available",
  featured: false,
  auction: false,
  image: cld("hoa-cop-186_meitft"),
  images: [
    cld("hoa-cop-186_meitft")
  ]
},
{
  id: "HOA-COP-169",
  name: {
    ar: "إبريق نحاس تراثي",
    en: "Vintage Copper Pitcher",
    ku: "ئێوری نەحاسی کۆن"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price: "95,000 د.ع",
  priceNumber: 95000,
  keywords: {
    ar: ["نحاس","ابريق","إبريق","تراثي","قديم","تحف","ديكور","ضيافة"],
    en: ["copper","pitcher","ewer","vintage","antique","decor"],
    ku: ["نەحاس","ئێور","کۆن","ئەنەتیک","دیكۆر"]
  },
  desc: {
    ar: "إبريق نحاس تراثي بتصميم كلاسيكي أنيق، يتميز بانحناءات ناعمة ومقبض مرتفع، مناسب للعرض المتحفي أو كقطعة ديكور فاخرة.",
    en: "A vintage copper pitcher with a classic elegant form, smooth curves, and a raised handle—ideal for display or refined decor.",
    ku: "ئێوری نەحاسی کۆن بە شێوەیەکی کلاسیکی جوان، گونجاو بۆ نیشاندان یان دیكۆری تایبەت."
  },
  image: cld("hoa-cop-169_bsh2j6"),
  images: [
    cld("hoa-cop-169_bsh2j6")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-170",
  name: {
    ar: "إبريق نحاس تراثي قديم",
    en: "Antique Copper Pitcher",
    ku: "ئێوری نەحاسی کۆن"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price: "300,000 د.ع",
  priceNumber: 300000,
  desc: {
    ar: "إبريق نحاس تراثي قديم مصنوع يدويًا، يتميز بجسم منتفخ وفوهة طويلة منحنية مع عنق مرتفع، يعكس الاستخدامات المنزلية التقليدية ويصلح للعرض أو الديكور.",
    en: "A handmade antique copper pitcher with a bulbous body and long curved spout, reflecting traditional household use and ideal for display or décor.",
    ku: "ئێوری نەحاسی کۆن بە دەست دروستکراو، جەستەی قڵقڵەدار و فوه‌تەی درێژی خوارەوە هەیە، گونجاو بۆ نیشاندان یان دیكۆر."
  },
  image: cld("hoa-cop-170_f9pbwa"),
  images: [
    cld("hoa-cop-170_f9pbwa")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-168",
  name: {
    ar: "إبريق نحاس تراثي قديم",
    en: "Antique Copper Pitcher",
    ku: "ئێوری نەحاسی کۆن"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price: "95,000 د.ع",
  priceNumber: 95000,
  desc: {
    ar: "إبريق نحاس تراثي قديم مصنوع يدويًا، يتميز بشكل أسطواني وفوهة طويلة مائلة مع مقبض جانبي، ويعكس الطابع العملي للأواني التقليدية القديمة، مناسب للعرض والديكور.",
    en: "A handmade antique copper pitcher with a cylindrical body, long angled spout, and side handle, reflecting the functional design of traditional vessels and ideal for display or décor.",
    ku: "ئێوری نەحاسی کۆن بە دەست دروستکراو، جەستەی ئەستووانەیی و فوه‌تەی درێژی لادان و دەستگرتنی لایەنی هەیە، گونجاو بۆ نیشاندان و دیكۆر."
  },
  image: cld("hoa-cop-168_ghkhoo"),
  images: [
    cld("hoa-cop-168_ghkhoo")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-167",
  name: {
    ar: "شمعدان نحاس مزخرف بتصميم نباتي",
    en: "Decorative Copper Candle Holder with Floral Design",
    ku: "شمعدانی نەحاسی بە دیزاینی ڕووەکی"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price: "55,000 د.ع",
  priceNumber: 55000,
  desc: {
    ar: "شمعدان نحاس مصنوع يدويًا بتصميم نباتي أنيق يتضمن أوراقًا بارزة وقاعدة مزخرفة، قطعة زخرفية جميلة تناسب العرض على الطاولات أو في الزوايا التراثية.",
    en: "A handcrafted copper candle holder featuring an elegant floral design with raised leaves and a decorated base, ideal as a decorative accent for tables or heritage interiors.",
    ku: "شمعدانێکی نەحاسی بە دەست دروستکراو بە دیزاینێکی ڕووەکی جوان، پێکهاتوو لە گەڵاوی دەرکەوتوو و بنەمایێکی نەخشراو، گونجاو بۆ دیكۆری شوێنە کلاسیکییەکان."
  },
  image: cld("hoa-cop-167_ijozjs"),
  images: [
    cld("hoa-cop-167_ijozjs")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-165",
  name: {
    ar: "دلة قهوة نحاس تقليدية",
    en: "Traditional Copper Coffee Dallah",
    ku: "دڵەی قاوەی نەحاسی کلاسیکی"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price: "130,000 د.ع",
  priceNumber: 130000,
  desc: {
    ar: "دلة قهوة نحاسية تقليدية بتصميم كلاسيكي أنيق، تتميز بجسم منحنٍ ومصب طويل وغطاء علوي مزخرف. قطعة تراثية أصيلة تعكس ثقافة الضيافة العربية وتناسب العرض أو الاقتناء.",
    en: "A traditional copper coffee dallah with an elegant classic form, featuring a curved body, long spout, and decorative lid. An authentic heritage piece reflecting Arabic hospitality, ideal for display or collection.",
    ku: "دڵەیەکی قاوەی نەحاسی بە شێوەیەکی کلاسیکی جوان، خاوەن جەستەیەکی خواراو، قوڵپێچی درێژ و سەرووشێکی ڕازاوە. پارچەیەکی میراتی ڕەسەن گونجاو بۆ پیشاندان یان کۆکردنەوە."
  },
  image: cld("hoa-cop-165_rzhsfa"),
  images: [
    cld("hoa-cop-165_rzhsfa")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-164",
  name: {
    ar: "إبريق نحاس مطروق يدويًا",
    en: "Hand-Hammered Copper Pitcher",
    ku: "ئبریقێکی نەحاسی دەست‌لێدراو"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price: "98,000 د.ع",
  priceNumber: 98000,
  desc: {
    ar: "إبريق نحاس مطروق يدويًا يتميز بملمس تقليدي واضح وشكل متوازن مع مصب طويل ومقبض جانبي أنيق. قطعة تراثية مناسبة للعرض الزخرفي أو للاقتناء.",
    en: "A hand-hammered copper pitcher featuring a distinctive traditional texture, balanced form, long spout, and elegant side handle. A heritage piece ideal for decorative display or collection.",
    ku: "ئبریقێکی نەحاسی دەست‌لێدراو کە تێکستەری نەریتیی ڕوون و شێوەیەکی هاوسەنگی هەیە، لەگەڵ قوڵپێچی درێژ و دەسکەیەکی جوان. پارچەیەکی میراتی گونجاو بۆ پیشاندان یان کۆکردنەوە."
  },
  image: cld("hoa-cop-164_pehcvf"),
  images: [
    cld("hoa-cop-164_pehcvf")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-163",
  name: {
    ar: "ساقية ماء نحاس تراثية",
    en: "Vintage Copper Water Vessel",
    ku: "ساقیەی ئاوی نەحاسی کۆن"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price: "170,000 د.ع",
  priceNumber: 170000,
  desc: {
    ar: "ساقية ماء مصنوعة من النحاس، يتجاوز عمرها 50 عامًا، تتميز بشكل مخروطي تقليدي وسطح مطروق يدويًا مع مقبض جانبي أصلي. قطعة تراثية تعكس الاستخدام اليومي في البيوت القديمة، ومناسبة للعرض المتحفي أو للاقتناء.",
    en: "A copper water vessel over 50 years old, featuring a traditional conical form, hand-hammered surface, and original side handle. A heritage piece reflecting daily life in old homes, ideal for museum-style display or collection.",
    ku: "ساقیەی ئاوی نەحاسی کە تەمەنی زیاتر لە 50 ساڵە، بە شێوەیەکی کۆن و ڕووخساری دەست‌لێدراو و دەسکەیەکی ڕەسەن. پارچەیەکی میراتی کە ژیانی ڕۆژانەی ماڵە کۆنەکان پیشان دەدات، گونجاو بۆ پیشاندان یان کۆکردنەوە."
  },
  image: cld("hoa-cop-163_h7zmv9"),
  images: [
    cld("hoa-cop-163_h7zmv9")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-161",
  name: {
    ar: "إبريق نحاس صغير تراثي",
    en: "Small Vintage Copper Teapot",
    ku: "ئابریقێکی بچوکی نەحاسی کۆن"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price: "170,000 د.ع",
  priceNumber: 170000,
  desc: {
    ar: "إبريق نحاس صغير تراثي يتجاوز عمره 45 سنة، يتميز بشكل دائري متوازن مع غطاء أصلي ومقبض جانبي وفم صب رشيق. قطعة تعكس الاستخدام اليومي في البيوت القديمة، ومناسبة للعرض المتحفي أو للاقتناء الشخصي.",
    en: "A small vintage copper teapot over 45 years old, featuring a balanced rounded form with its original lid, side handle, and elegant spout. A heritage piece reflecting everyday use in old homes, ideal for display or private collection.",
    ku: "ئابریقێکی بچوکی نەحاسی کە تەمەنی زیاتر لە 45 ساڵە، بە شێوەیەکی گەرد و هاوسەنگ، لەگەڵ قاپی ڕەسەن و دەسکە و دەمەیەکی جوان. پارچەیەکی میراتی گونجاو بۆ پیشاندان یان کۆکردنەوە."
  },
  image: cld("hoa-cop-161_mt4boe"),
  images: [
    cld("hoa-cop-161_mt4boe")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-159",
  name: {
    ar: "إبريق نحاس تراثي بغطاء",
    en: "Vintage Copper Ewer with Lid",
    ku: "ئابریقێکی نەحاسی کۆن لەگەڵ قاپ"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price:"100,000 د.ع",
  priceNumber:100000,
  desc: {
    ar: "إبريق نحاس تراثي مصنوع يدويًا، يتميز بجسم كروي مطروق يدويًا مع غطاء أصلي وفم صب طويل ومقبض جانبي نحيف. تعكس آثار الزمن على السطح قيمة تاريخية وجمالية، ويُعد مناسبًا للعرض المتحفي أو للاقتناء.",
    en: "A handcrafted vintage copper ewer featuring a hammered spherical body, original lid, long spout, and slender side handle. The aged patina adds historical and aesthetic value, making it ideal for museum display or collection.",
    ku: "ئابریقێکی نەحاسی دەستکرد کۆن، بە جەستەیەکی گەردی دەست‌کوتاو، قاپی ڕەسەن، دەمێکی درێژ و دەسکەیەکی باریک. شوێنەواری کۆنبوونەوەی سەرەکی جوانی و نرخێکی مێژوویی پێی دەبەخشێت."
  },
  image: cld("hoa-cop-159_dpwjey"),
  images: [
    cld("hoa-cop-159_dpwjey")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-158",
  name: {
    ar: "قدر نحاس تراثي",
    en: "Vintage Copper Pot",
    ku: "قازانی نەحاسی کۆن"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price:"110,000 د.ع",
  priceNumber:110000,
  desc: {
    ar: "قدر نحاس تراثي مطروق يدويًا، يتميز بجسم مخروطي عريض وحافة علوية مزخرفة بخطوط متموجة، مع مقابض جانبية معدنية. تظهر عليه آثار الاستخدام والزمن، ما يمنحه طابعًا أصيلًا وقيمة تراثية مناسبة للعرض أو الاقتناء.",
    en: "A handcrafted vintage copper pot with a wide conical body and a wavy decorative rim, featuring side metal handles. The visible patina and signs of age give it an authentic character and heritage value, ideal for display or collection.",
    ku: "قازانێکی نەحاسی دەست‌کوتاو بە شێوەیەکی فراوان و شێوەی کون، بە حافەیەکی خاوەن نەخشەی موجی و دەسکەیەکی لاوەکی. شوێنەواری بەکارهێنان و کۆنبوونەوەی پێدا دیارە، کە بەهایەکی مێژوویی و ڕەسەن پێی دەبەخشێت."
  },
  image: cld("hoa-cop-158_vhiceh"),
  images: [
    cld("hoa-cop-158_vhiceh")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-155",
  name: {
    ar: "رِكّية نحاس تراثية (حافظة صابون وليفة)",
    en: "Vintage Copper Hammam Soap Box (Rikkiya)",
    ku: "قوتی نەحاسی کۆنی حمام (رکّیە)"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price:"98,000 د.ع",
  priceNumber:98000,
  desc: {
    ar: "رِكّية نحاس تراثية، وهي حافظة كانت تُستخدم لوضع الصابون والليفة عند الذهاب إلى حمّام السوق. تتميز بزخارف نباتية محفورة يدويًا على الغطاء والجسم، مع مفصل علوي ومقبض جانبي. تظهر عليها آثار الزمن والاستخدام، ما يمنحها قيمة تراثية وشعبية عالية.",
    en: "A traditional copper ‘Rikkiya’, a box historically used to carry soap and loofah when visiting public baths (hammams). Hand-engraved with floral motifs on the lid and body, featuring a hinged top and side handle. The aged patina adds strong cultural and heritage value.",
    ku: "رکّیەیەکی نەحاسی کۆن کە بە شێوەی گشتی بۆ هێنانی سابون و لیفە لە کاتی چوون بۆ حمامی گشتی بەکاردێت. بە نەخشەی دارستانی دەست‌کۆراو ڕازاوە، بە قاپی هێلکەدار و دەسکەی لاوەکی. شوێنەواری کۆنبوونەوە بەهای مێژوویی و کەلتووری بەرزی پێدا دەدات."
  },
  image: cld("hoa-cop-155_qbycso"),
  images: [
    cld("hoa-cop-155_qbycso")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-183",
  name: {
    ar: "شمعدان نحاس تراثي",
    en: "Vintage Copper Candlestick",
    ku: "شەمعدانی نەحاسی کۆن"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price: "52,000 د.ع",
  priceNumber: 52000,
  desc: {
    ar: "شمعدان نحاس تراثي بتصميم كلاسيكي قائم على قاعدة دائرية متدرجة وساق مخددة. يتميز بلمسة زمنية واضحة وباتينا طبيعية ناتجة عن مرور السنين، ويصلح للعرض الزخرفي في المساحات التراثية أو الكلاسيكية.",
    en: "A vintage copper candlestick with a classic design, featuring a stepped circular base and fluted stem. Shows natural aged patina from years of use, ideal for decorative display in heritage or classic interiors.",
    ku: "شەمعدانێکی نەحاسی کۆن بە دیزاینی کلاسیکی، بنکەی بازنەیی هەنگاو‌هەنگاو و ستوونی شیارکراو. پاتینای سروشتیی کۆنبوونەوەی هەیە و گونجاوە بۆ پیشاندانی دیکۆری مێژوویی یان کلاسیکی."
  },
  image: cld("hoa-cop-183_y2mpqo"),
  images: [
    cld("hoa-cop-183_y2mpqo")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-182",
  name: {
    ar: "وعاء ماء نحاس كبير",
    en: "Large Copper Water Vessel",
    ku: "قابێکی گەورەی ئاو لە نەحاس"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  heightCm: 60,
  price:"150,000 د.ع",
  priceNumber:150000,
  desc: {
    ar: "وعاء ماء نحاس كبير كان يُستخدم تقليديًا لجلب الماء من النهر. يتميز بشكل قببي متوازن ومقبض علوي معدني، مع آثار طرق يدوية وباتينا طبيعية تعكس استخدامه عبر السنين. قطعة تراثية لافتة للعرض المتحفي أو الديكور التراثي.",
    en: "A large copper water vessel traditionally used to carry water from the river. Features a domed balanced form with a metal handle, hand-hammered marks, and natural aged patina, making it ideal for museum-style or heritage decor display.",
    ku: "قابێکی گەورەی ئاو لە نەحاس کە بە شێوەی نەریتـی بۆ هێنانی ئاو لە ڕووبار بەکاردەهاتووە. شێوەی گومبەدی هاوسەنگ و دەستگرتنی فلزی هەیە، لەگەڵ نیشانەکانی چەقی دەستی و پاتینای سروشتی."
  },
  image: cld("hoa-cop-182_p5biym"),
  images: [
    cld("hoa-cop-182_p5biym")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-153",
  name: {
    ar: "شمعدان نحاس متعدد الأذرع",
    en: "Multi-Arm Copper Candelabrum",
    ku: "شمعدانی نەحاسی چەند لقەیی"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price:"65,000 د.ع",
  priceNumber:65000,
  desc: {
    ar: "شمعدان نحاس تقليدي متعدد الأذرع، مصنوع بأسلوب زخرفي كلاسيكي مع تفاصيل بارزة وأذرع متوازنة لحمل الشموع. تظهر عليه باتينا طبيعية تدل على قدمه واستعماله، ما يجعله قطعة مثالية للعرض التراثي أو الديكور الكلاسيكي.",
    en: "A traditional multi-arm copper candelabrum crafted in a classic ornamental style. Features balanced arms for candles and a natural aged patina that reflects its historical character, ideal for heritage or classic decor display.",
    ku: "شمعدانێکی نەحاسی چەند لقەیی بە شێوازی نەریتـی دروستکراوە، خاوەن وردەکارییە ڕازاندنەوەی کلاسیکی و باڵانسێکی جوان بۆ گرتنی مۆم. پاتینای سروشتی نیشانەی تەمەن و بەکارهێنانی پێشووە."
  },
  images: [
    cld("hoa-cop-153_veyv6e"),
    cld("hoa-cop-153-1_ghq7ao")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-152",
  name: {
    ar: "إبريق نحاس تراثي",
    en: "Traditional Copper Pitcher",
    ku: "ئیبریقێکی نەحاسی نەریتـی"
  },
  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "نەحاس"
  },
  price: "115,000 د.ع",
  priceNumber: 115000,
  desc: {
    ar: "إبريق نحاس تقليدي مصنوع يدويًا، يتميز بشكل انسيابي ومقبض منحني أنيق، مع سطح يحمل آثار باتينا طبيعية تدل على قدم القطعة واستعمالها عبر الزمن. قطعة مناسبة للعرض التراثي أو للاستخدام الزخرفي في المساحات الكلاسيكية.",
    en: "A handmade traditional copper pitcher with an elegant curved handle and smooth flowing form. The surface shows a natural aged patina, reflecting its historical character, making it ideal for heritage display or classic decorative use.",
    ku: "ئیبریقێکی نەحاسی دەستکردی بە شێوەیەکی نەریتـی، خاوەن قەبارەیەکی نەرم و دەستەیەکی قوساو. پاتینای سروشتی لەسەری نیشانەی تەمەن و بەکارهێنانی کۆنە، گونجاو بۆ پیشاندانی مێژوویی یان ڕازاندنەوەی کلاسیکی."
  },
  images: [
    cld("hoa-cop-152_imv8sl"),
    cld("hoa-cop-152-1_dh2gm6")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-VAS-150",
  name: {
    ar: "فازة فخار مزخرفة بخط عربي – آية قرآنية",
    en: "Pottery Vase with Arabic Calligraphy – Quranic Verse",
    ku: "فازەی فەخار بە نووسینی عەرەبی – ئایەی قورئانی"
  },
  category: {
    ar: "فازات",
    en: "Vases",
    ku: "فازەکان"
  },
  price:"180,000 د.ع",
  priceNumber:180000,
  desc: {
    ar: "فازة فخار تراثية مزخرفة بخط عربي يدوي، كُتبت عليها آية من سورة الرحمن: «ولمن خاف مقام ربه جنتان». تتميز بلونها الترابي الدافئ وتناسق الزخارف النباتية والخطية، ما يجعلها قطعة فنية ذات طابع روحي وثقافي راقٍ، مناسبة للعرض في المجالس والمكتبات والمساحات التراثية.",
    en: "A traditional pottery vase decorated with hand-drawn Arabic calligraphy featuring a verse from Surah Ar-Rahman: “And for the one who feared standing before his Lord are two gardens.” The warm earthy tone and balanced ornamental motifs give the piece a refined spiritual and cultural character, ideal for display in classic interiors.",
    ku: "فازەیەکی فەخاری نەریتـی بە نووسینی عەرەبی دەستنووس، ئایەیەک لە سورەتی ڕەحمان لەسەری نووسراوە: «وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ». ڕەنگی خاکیی گەرم و ڕازاندنەوەی هونەری وایکردووە ببێت پارچەیەکی ڕۆحانی و کەلتووری گونجاو بۆ پیشاندان."
  },
  images: [
    cld("hoa-vas-150_yob3zi"),
    cld("hoa-vas-150-1_incmaq")
  ],
  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-VAS-151",
  name: {
    ar: "فازة فخار مزخرفة بعبارة دينية",
    en: "Pottery Vase with Religious Arabic Inscription",
    ku: "فازەی فەخار بە نووسینی ئاینی عەرەبی"
  },
  category: {
    ar: "فازات",
    en: "Vases",
    ku: "فازەکان"
  },
  price:"75,000 د.ع",
  priceNumber:75000,
  desc: {
    ar: "فازة فخار تراثية مزخرفة بخط عربي يدوي، كُتبت عليها عبارة «بسم الله الرحمن الرحيم». تتميز بلونها الترابي الفاتح وطابعها الروحي الهادئ، ما يجعلها قطعة مناسبة للعرض في المجالس، الزوايا التراثية، أو ضمن مجموعات الفخار القديمة.",
    en: "A traditional pottery vase decorated with hand-drawn Arabic calligraphy featuring the phrase “Bismillah Al-Rahman Al-Raheem”.",
    ku: "فازەیەکی فەخاری نەریتی بە نووسینی دەستی عەرەبی، نووسراوی «بسم الله الرحمن الرحيم»."
  },
  images: [
    cld("hoa-vas-151_zqu1dy"),
    cld("hoa-vas-151-1_cts7rg")
  ],
  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-VAS-160",
  category: "فازات",

  name: {
    ar: "إبريق كريستال مزخرف",
    en: "Decorative Crystal Pitcher"
  },

  price:170000,
  currency: "IQD",
  priceNumber:170000,

  material: "كريستال",

  description: {
    ar: "إبريق كريستال أنتيك بتصميم أنيق وزخارف دقيقة، قطعة فنية راقية تصلح للعرض ضمن مجموعات الكريستال أو كنقطة جمالية مميزة في المساحات الكلاسيكية.",
    en: "An antique decorative crystal pitcher with elegant form and fine detailing, ideal as a refined display piece."
  },

  images: [
    cld("hoa-vas-160_gvjucv")
  ],

  condition: "جيدة جدًا",
  availability: "متوفر"
},
{
  id: "HOA-COP-157",

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  name: {
    ar: "شمعدان نحاس للشموع الكبيرة",
    en: "Large Copper Candle Holder",
    ku: "شمعدانێکی مس بۆ شمعە گەورەکان"
  },

  price: "34,000 د.ع",
  priceNumber: 34000,

  material: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  desc: {
    ar: "شمعدان مصنوع من النحاس مخصص للشموع الكبيرة، يتميز بتصميم كلاسيكي متوازن وقاعدة ثابتة، مناسب للعرض التراثي أو الاستخدام الزخرفي.",
    en: "A copper candle holder designed for large candles, featuring a balanced classic design and a stable base. Suitable for heritage display or decorative use.",
    ku: "شمعدانێکی دروستکراو لە مس، تایبەت بە شمعە گەورەکان، بە دیزاینێکی کلاسیکی هاوسەنگ و بنکەیەکی جێگیر، گونجاو بۆ پیشاندانی کلتووری یان زینەتی."
  },

  images: [
    cld("hoa-cop-157_cyoucw")
  ],

  status: "available",
  auction: false
},
{
  id: "HOA-ACC-190",

  name: {
    ar: "صندوق أنتيك معدني مع قفل من طبقتين",
    en: "Two-Tier Antique Metal Box with Lock",
    ku: "سندوقی ئەنتیکی مێتال بە دوو ئاست و قفڵ"
  },

  category: {
    ar: "اكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price: "680,000 د.ع",
  priceNumber: 680000,

  desc: {
    ar: "صندوق أنتيك معدني فاخر مزخرف بنقوش يدوية دقيقة، يتميز بتصميمه المثمّن واحتوائه على طبقتين داخليتين مبطنتين بالمخمل، مع قفل علوي أصلي. كان يُستخدم لحفظ المجوهرات أو المقتنيات الثمينة، ويُعد قطعة نادرة مناسبة للعرض المتحفي أو لهواة التحف الكلاسيكية.",
    en: "An elegant antique metal box with finely hand-engraved details, featuring an octagonal shape and a two-tier velvet-lined interior with an original top lock. Traditionally used to store jewelry or precious items, making it a rare and collectible display piece.",
    ku: "سندوقێکی ئەنتیکەی مێتال بە نەخشەی دەستی ورد، بە شێوەی هەشت‌گۆشە و ناوەوەی دوو ئاستی بە مەخمەل، لەگەڵ قفڵی سەرەوەی ڕەسەن. گونجاو بۆ هەڵگرتنی شتە گرنگەکان و نمایشی مۆزەیی."
  },

  images: [
    cld("hoa-acc-190_qcucvf"),
    cld("hoa-acc-190-1_htcfqt"),
    cld("hoa-acc-190-2_ejegnm")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-ACC-199",

  name: {
    ar: "ولاعة أنتيك من قطعتين",
    en: "Two-Piece Antique Lighter",
    ku: "ولاعة ئەنتیکی لە دوو پارچە"
  },

  category: {
    ar: "اكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price: "99,000 د.ع",
  priceNumber: 99000,

  desc: {
    ar: "ولاعة أنتيك معدنية صغيرة من قطعتين، تتميز بتصميمها الأسطواني البسيط ولونها النحاسي المعتّق. يبلغ ارتفاعها 7 سم، وكانت تُستخدم قديماً كولاعة مكتبية أو شخصية. قطعة أنيقة ومناسبة لهواة التحف الصغيرة أو للعرض ضمن مجموعات الإكسسوارات الكلاسيكية.",
    en: "A small two-piece antique metal lighter with a cylindrical design and aged brass finish. Measuring 7 cm in height, it was traditionally used as a desk or personal lighter and is ideal for collectors of classic accessories.",
    ku: "ولاعة ئەنتیکی مێتال بە دوو پارچە، بە دیزاینی ئەستوانەیی سادە و ڕەنگی برۆنزەی کۆن. بەرزی 7 سم هەیە و گونجاوە بۆ کۆکراوەکان و نمایشی کلاسیکی."
  },

  images: [
    cld("hoa-acc-199_u2ncgc"),
    cld("hoa-acc-199-1_eedfje")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-ACC-203",

  name: {
    ar: "علبة تخزين أنتيك سوداء مطعّمة بالذهبي",
    en: "Black Antique Storage Box with Gold Inlay",
    ku: "سندوقی هەڵگرتنی ئەنتیکی ڕەشی بە زێڕ تێکچوو"
  },

  category: {
    ar: "اكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price: "450,000",
  priceNumber: 450000,

  desc: {
    ar: "علبة تخزين أنتيك دائرية الشكل، مطلية باللون الأسود ومطعّمة بزخارف ذهبية بارزة ذات طابع زخرفي أنيق. يعود عمرها إلى أكثر من 50 سنة، وتتميز بحرفية عالية وتفاصيل دقيقة، ما يجعلها قطعة مثالية للعرض المتحفي أو لحفظ المقتنيات الثمينة ضمن ديكور كلاسيكي فاخر.",
    en: "A circular antique storage box finished in black with raised gold decorative inlays. Over 50 years old, it showcases fine craftsmanship and elegant ornamental details, making it ideal for museum display or storing precious items in a classic interior.",
    ku: "سندوقێکی هەڵگرتنی ئەنتیکی بە شێوەی بازنەیی، ڕەشی ڕەنگ و بە نەخشەی زێڕی بەرچاو. تەمەنی زیاتر لە 50 ساڵ هەیە و گونجاوە بۆ نمایشی مۆزەیی یان هەڵگرتنی شتە گرنگەکان."
  },

  images: [
    cld("hoa-acc-203_hylone")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-CO-194",

  name: {
    ar: "قفل أنتيك مع مفتاح أصلي",
    en: "Antique Lock with Original Key",
    ku: "قوفڵی ئەنتیکی لەگەڵ کلیلە ڕەسەن"
  },

  category: {
    ar: "اكسسوارات",
    en: "Accessories",
    ku: "ئێکسسسوارات"
  },

  price: "120,000 د.ع",
  priceNumber: 120000,

  desc: {
    ar: "قفل أنتيك معدني ثقيل مع مفتاحه الأصلي، يتميز بزخارف يدوية بارزة وتصميم دائري كلاسيكي. يعود عمره إلى أكثر من 70 سنة، وكان يُستخدم لحماية الصناديق أو الأبواب القديمة. قطعة نادرة تعكس الحرفية التقليدية وتناسب العرض المتحفي أو مجموعات التحف النادرة.",
    en: "A heavy antique metal lock with its original key, featuring raised hand-crafted decorations and a classic circular design. Over 70 years old, it was traditionally used for securing chests or doors and is a rare collectible piece.",
    ku: "قوفڵێکی ئەنتیکی مێتال بە کلیلە ڕەسەن، بە نەخشەی دەستی بەرچاو و دیزاینی بازنەیی. تەمەنی زیاتر لە 70 ساڵ هەیە و گونجاوە بۆ نمایشی مۆزەیی یان کۆکراوەی ئەنتیک."
  },

  images: [
    cld("hoa-co-194_jsv1zr")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-191",

  name: {
    ar: "سماور أنتيك معدني مزخرف",
    en: "Decorative Antique Metal Samovar",
    ku: "سامۆڤاری ئەنتیکی مێتال بە نەخش"
  },

  category: {
    ar: "نحاس",
    en: "Copperware",
    ku: "مسیات"
  },

  price: "300,000 د.ع",
  priceNumber: 300000,

  desc: {
    ar: "سماور أنتيك معدني بتصميم كلاسيكي مزخرف، يتميز بجسم أسطواني مع مقبضين جانبيين وصنبور أمامي مزخرف. كان يُستخدم قديماً لتحضير الشاي أو الماء الساخن، ويُعد قطعة تراثية أنيقة مناسبة للعرض في المجالس، المقاهي التراثية، أو ضمن مجموعات النحاس القديمة.",
    en: "An antique metal samovar with a classic decorative design, featuring a cylindrical body, side handles, and an ornate front spout. Traditionally used for preparing tea or hot water, it is a fine heritage piece ideal for display.",
    ku: "سامۆڤارێکی ئەنتیکی مێتال بە دیزاینی کلاسیکی، بە دەستگرتەکان لە لا و قاپوڕێکی نەخشکراو لە پێشەوە. گونجاو بۆ نمایشی نەریتی یان کۆکراوەی مسیات."
  },

  images: [
    cld("hoa-cop-191_ywmbie")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-222",

  name: {
    ar: "قطعة تقديم نحاس مزخرفة أنيقة",
    en: "Elegant Decorative Copper Serving Stand",
    ku: "پارچەی پێشکەشکردنی مسی نەخشکراو"
  },

  category: {
    ar: "نحاس",
    en: "Copperware",
    ku: "مسیات"
  },

  price: "80,000 د.ع",
  priceNumber: 80000,

  desc: {
    ar: "قطعة تقديم نحاس أنيقة مزخرفة بنقوش يدوية دقيقة، تتميز بقاعدة ثابتة وسطح دائري مزخرف بزخارف تقليدية ملونة. كانت تُستخدم لتقديم الحلويات أو الفاكهة في المجالس التراثية، وتُعد قطعة جميلة للعرض أو للاستخدام الزخرفي ضمن الديكورات الكلاسيكية.",
    en: "An elegant copper serving stand decorated with fine hand-engraved patterns and traditional colored motifs. Featuring a stable base and circular top, it was traditionally used to serve sweets or fruits and makes a refined decorative piece.",
    ku: "پارچەیەکی پێشکەشکردنی مسی بە نەخشەی دەستی ورد و ڕەنگاڵەی نەریتی، بە بنکەیەکی جێگیر و سەرەوەی بازنەیی. گونجاوە بۆ نمایشی نەریتی یان بەکارهێنانی ڕازاندن."
  },

  images: [
    cld("hoa-cop-222_yah7jp")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-198",

  name: {
    ar: "حافظة سكائر نحاسية قديمة – الشركة العراقية للصناعات النفطية",
    en: "Vintage Copper Cigarette Case – Iraqi Oil Industries Company",
    ku: "قاپی جگەرەی مسی کۆن – کۆمپانیای پیشەسازی نەوتی عێراق"
  },

  category: {
    ar: "فضة",
    en: "silver",
    ku: "زیو"
  },

  price: "1,750,000 د.ع",
  priceNumber: 1750000,

  desc: {
    ar: "حافظة سكائر قديمة مصنوعة من النحاس، منقوش عليها اسم «الشركة العراقية للصناعات النفطية». تعكس طابعاً تاريخياً ومؤسسياً يعود لحقبة مهمة من تاريخ العراق الصناعي، وتُعد قطعة مميزة لهواة المقتنيات النادرة أو للعرض ضمن مجموعات التحف المرتبطة بتاريخ الشركات الوطنية.",
    en: "A vintage copper cigarette case engraved with the name “Iraqi Oil Industries Company”. It reflects an important era of Iraq’s industrial history and is a distinctive collectible piece ideal for display or historical collections.",
    ku: "قاپێکی جگەرەی مسی کۆن، ناوی «کۆمپانیای پیشەسازی نەوتی عێراق» لەسەر نەخش کراوە. پارچەیەکی گرنگە بۆ کۆکراوە مێژوویی و نمایشی."
  },

  images: [
    cld("hoa-cop-198_kn4sqg")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-200",

  name: {
    ar: "دلّة قهوة نحاسية أنتيك",
    en: "Antique Copper Coffee Dallah",
    ku: "دڵەی قاوەی مسی ئەنتیکی"
  },

  category: {
    ar: "نحاس",
    en: "Copperware",
    ku: "مسیات"
  },

  price: "100,000 د.ع",
  priceNumber: 100000,

  desc: {
    ar: "دلّة قهوة نحاسية أنتيك مصنوعة يدوياً، تتميز بجسم مزخرف بنقوش مطروقة ولمسة معتّقة تعكس الطابع التراثي الأصيل. كانت تُستخدم لتحضير وتقديم القهوة العربية، وتُعد قطعة جميلة للعرض في المجالس التراثية أو ضمن مجموعات النحاس القديمة.",
    en: "A handcrafted antique copper coffee dallah featuring hammered decorative patterns and an aged finish. Traditionally used for preparing and serving Arabic coffee, it is a refined heritage piece ideal for display.",
    ku: "دڵەیەکی قاوەی مسی ئەنتیکی بە دەست دروستکراو، بە نەخشەی لێدانراو و ڕووخساری کۆن. گونجاوە بۆ نمایشی نەریتی یان کۆکراوەی مسیات."
  },

  images: [
    cld("hoa-cop-200_wmoiof")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-201",

  name: {
    ar: "قطعة تقديم نحاسية أنتيك",
    en: "Antique Copper Serving Bowl",
    ku: "پارچەی پێشکەشکردنی مسی ئەنتیکی"
  },

  category: {
    ar: "نحاس",
    en: "Copperware",
    ku: "مسیات"
  },

  price: "66,000 د.ع",
  priceNumber: 66000,

  desc: {
    ar: "قطعة تقديم نحاسية أنتيك بتصميم كلاسيكي مرتفع على قاعدة، تتميز بحافة متموجة ولمسة معتّقة تعكس قدمها وطابعها التراثي. كانت تُستخدم لتقديم الفاكهة أو الحلويات في المجالس القديمة، وتُعد قطعة أنيقة للعرض أو للاستخدام الزخرفي ضمن الديكورات الكلاسيكية.",
    en: "An antique copper serving bowl raised on a base, featuring a scalloped rim and aged patina that reflects its classic heritage. Traditionally used for serving fruits or sweets, it is an elegant decorative piece.",
    ku: "پارچەیەکی پێشکەشکردنی مسی ئەنتیکی بە بنکەی بەرز، بە لێواری شەپۆلدار و ڕووخساری کۆن. گونجاوە بۆ نمایشی نەریتی یان ڕازاندنی کلاسیکی."
  },

  images: [
    cld("hoa-cop-201_zixbcq")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-204",

  name: {
    ar: "إبريق نحاسي أنتيك",
    en: "Antique Copper Ewer",
    ku: "ئابریقێکی مسی ئەنتیکی"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  price: "75,000 د.ع",
  priceNumber: 75000,

  desc: {
    ar: "إبريق نحاسي أنتيك بتصميم تقليدي وجسم كروي مع فوهة جانبية منحنية. يتميز بلمسة معتّقة تعكس قدمه واستخدامه اليومي في البيوت القديمة لحفظ أو سكب الماء. قطعة تراثية جميلة للعرض أو لإكمال مجموعات النحاس الكلاسيكية.",
    en: "An antique copper ewer with a traditional rounded body and curved side spout, featuring an aged patina that reflects its historical daily use for storing or pouring water. A fine heritage display piece.",
    ku: "ئابریقێکی مسی ئەنتیکی بە دیزاینی نەریتی، بە جەستەی بازنەیی و دەمچەی لاچەوانە. ڕووخساری کۆنی هەیە و گونجاوە بۆ نمایشی نەریتی."
  },

  images: [
    cld("hoa-cop-204_aqcwcw")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-209",

  name: {
    ar: "قطعة نحاس أنتيك فريدة بنقوش يدوية",
    en: "Unique Engraved Antique Copper Piece",
    ku: "پارچەی مسی ئەنتیکی تایبەت بە نەخشەی دەستی"
  },

  category: {
    ar: "نحاس",
    en: "Copperware",
    ku: "مسیات"
  },

  price: "199,000 د.ع",
  priceNumber: 199000,

  desc: {
    ar: "قطعة نحاس أنتيك فريدة من نوعها، مزخرفة بنقوش يدوية دقيقة تغطي كامل الجسم، مع تصميم أنيق وفوهة طويلة ومقبض جانبي متوازن. تعكس مستوى عالٍ من الحرفية التقليدية، وتُعد قطعة مميزة لهواة التحف النادرة أو للعرض المتحفي والديكورات الكلاسيكية الفاخرة.",
    en: "A unique antique copper piece adorned with intricate hand-engraved patterns covering the entire body. Featuring an elegant form with a long spout and balanced handle, it reflects high traditional craftsmanship and is ideal for collectors or museum-style display.",
    ku: "پارچەیەکی مسی ئەنتیکی تایبەت، بە نەخشەی دەستی ورد کە تەواوی جەستەکەی داپۆشراوە. دیزاینێکی جوانی هەیە بە دەمچەی درێژ و دەستگرتی هاوسەنگ، گونجاو بۆ کۆکراوە نایاب یان نمایشی مۆزەیی."
  },

  images: [
    cld("hoa-cop-209_art1u1")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-COP-213",

  name: {
    ar: "وعاء نحاسي فريد بنقوش فخمة",
    en: "Unique Ornate Copper Bowl",
    ku: "کاسەی مسی تایبەت بە نەخشەی فەخم"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مسیات"
  },

  price: "250,000 د.ع",
  priceNumber: 250000,

  desc: {
    ar: "وعاء نحاسي أنتيك فريد مزخرف بنقوش فخمة بارزة تحيط بكامل الجسم، مع تفاصيل زخرفية دقيقة تعكس مستوى عالٍ من الحرفية اليدوية. قطعة نادرة وملفتة، مناسبة للعرض المتحفي أو كقطعة مركزية ضمن الديكورات الكلاسيكية الفاخرة.",
    en: "A unique antique copper bowl adorned with rich, raised ornamental engravings covering the entire body. Showcasing exceptional craftsmanship, it is a rare statement piece ideal for museum-style display or luxurious classic interiors.",
    ku: "کاسەیەکی مسی ئەنتیکی تایبەت، بە نەخشەی بەرچاو و فەخمی دەستی کە تەواوی جەستەکە داپۆشراوە. پارچەیەکی نایاب و گونجاو بۆ نمایشی مۆزەیی یان ڕازاندنی کلاسیکی."
  },

  images: [
    cld("hoa-cop-213_d1z8b9")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-COP-215",

  name: {
    ar: "رَكِيّة حمّام نحاسية تراثية",
    en: "Traditional Copper Hammam Container (Rakiya)",
    ku: "ڕاکیەی گەرمابەری مسی نەریتی"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مسیات"
  },

  price: "122,000 د.ع",
  priceNumber: 122000,

  desc: {
    ar: "رَكِيّة نحاسية تراثية تُعرف باللهجة العراقية، كانت تُستخدم قديماً لحفظ أدوات الحمّام مثل الصابون والليفة وغيرها عند الذهاب إلى حمّام السوق. تتميز بنقوش يدوية على كامل الجسم مع غطاء ومشبك معدني، وتعكس جانباً مهماً من العادات الاجتماعية والحمّامية القديمة. قطعة نادرة وذات طابع متحفي.",
    en: "A traditional copper hammam container known locally as “Rakiya,” historically used to carry bath essentials such as soap and loofah when visiting public bathhouses. Featuring hand-engraved patterns, a lid, and a metal clasp, it represents an important aspect of social and bathing heritage.",
    ku: "ڕاکیەیەکی مسی نەریتی کە لە کلتووری خەڵکدا بەکارهاتووە بۆ هەڵگرتنی شتی گەرمابەر وەک سابون و لیفە. بە نەخشەی دەستی و قاپ و قفڵی مێتال، پارچەیەکی نایاب و مێژووییە."
  },

  images: [
    cld("hoa-cop-215_qchty0")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-COP-216",

  name: {
    ar: "رَكِيّة حمّام نحاسية تراثية",
    en: "Traditional Copper Hammam Container (Rakiya)",
    ku: "ڕاکیەی گەرمابەری مسی نەریتی"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مسیات"
  },

  price: "300,000 د.ع",
  priceNumber: 300000,

  desc: {
    ar: "رَكِيّة حمّام نحاسية تراثية، كانت تُستخدم قديماً لحفظ أدوات الحمّام مثل الصابون والليفة عند الذهاب إلى حمّام السوق. تتميز بشكلها الكروي المحزّز، مع غطاء ومشبك معدني متين، وتعكس طابع الحياة اليومية والعادات الاجتماعية القديمة. قطعة تراثية جميلة وذات قيمة تاريخية.",
    en: "A traditional copper hammam container known as “Rakiya,” historically used to carry bath essentials such as soap and loofah when visiting public bathhouses. Featuring a ribbed spherical form with a lid and metal clasp, it reflects everyday social heritage.",
    ku: "ڕاکیەیەکی مسی نەریتی بە شێوەی گۆڵاوی شیارکراو، بەکارهاتووە بۆ هەڵگرتنی شتی گەرمابەر وەک سابون و لیفە. بە قاپ و قفڵی مێتال، پارچەیەکی مێژوویی و نەریتیە."
  },

  images: [
    cld("hoa-cop-216_v4xmt4")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-COP-225",

  name: {
    ar: "قطعة نحاسية فريدة أنتيك",
    en: "Unique Antique Copper Piece",
    ku: "پارچەی مسی تایبەت ئەنتیکی"
  },

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مسیات"
  },

  price: "—",
  priceNumber: null,

  desc: {
    ar: "قطعة نحاسية أنتيك فريدة بتصميم كلاسيكي مرتفع على قاعدة، تتميز بحافة عريضة وشكل متوازن مع لمسة معتّقة واضحة تدل على قدمها. كانت تُستخدم قديماً لأغراض التقديم أو العرض، وتُعد قطعة أنيقة ومناسبة للديكورات التراثية أو للعرض المتحفي.",
    en: "A unique antique copper piece raised on a base, featuring a wide rim and balanced form with a distinctive aged patina that reflects its historical use. Suitable for serving, display, or museum-style presentation.",
    ku: "پارچەیەکی مسی ئەنتیکی تایبەت بە بنکەی بەرز و لێواری فراوان، بە ڕووخساری کۆن کە نیشانی تەمەنی و بەکارهێنانی کۆنە. گونجاوە بۆ نمایشی نەریتی یان مۆزەیی."
  },

  images: [
    cld("hoa-cop-225_z6asaj")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-CRY-196",

  name: {
    ar: "قطعة كريستال أنيقة بغطاء",
    en: "Elegant Crystal Decanter with Stopper",
    ku: "پارچەی کریستالێکی جوان بە قاپ"
  },

  category: {
    ar: "كريستال",
    en: "Crystal",
    ku: "کریستال"
  },

  price: "260,000 د.ع",
  priceNumber: 260000,

  desc: {
    ar: "قطعة كريستال أنيقة مصقولة بعناية، تتميز بنقوش هندسية كلاسيكية وجسم كروي مع غطاء كريستالي أنيق. كانت تُستخدم لحفظ العطور أو المشروبات الفاخرة، وتُعد قطعة راقية مناسبة للعرض المتحفي أو للديكورات الكلاسيكية الفخمة.",
    en: "An elegant crystal piece finely cut with classic geometric patterns, featuring a rounded body and an ornate crystal stopper. Traditionally used for storing perfumes or fine beverages, making it a refined display or collectible item.",
    ku: "پارچەیەکی کریستالی جوان بە نەخشەی هندسی کلاسیکی، بە جەستەی گۆڵاوی و قاپێکی کریستالی جوان. گونجاوە بۆ نمایشی فەخم یان کۆکراوەی تایبەت."
  },

  images: [
    cld("hoa-cry-196_wqf2yp")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-CRY-207",

  name: {
    ar: "شكردان كريستال أسود مزخرف",
    en: "Black Crystal Sugar Bowl with Silver Inlay",
    ku: "شکردانێکی کریستالی ڕەش بە نەخشەی زیوی"
  },

  category: {
    ar: "كريستال",
    en: "Crystal",
    ku: "کریستال"
  },

  price: "520,000 د.ع",
  priceNumber: 520000,

  desc: {
    ar: "شكردان كريستال أنيق مصنوع من كريستال داكن اللون، مزخرف بزخارف تنين مطعّمة بلون فضي، مع غطاء وأرجل قصيرة. هذا النوع من القطع انتشر في أوروبا خلال أواخر القرن التاسع عشر وبدايات القرن العشرين، خصوصًا في بوهيميا ووسط أوروبا، وكان يُستخدم لتقديم السكر أو الحلويات الفاخرة على موائد الضيافة الراقية. الزخارف المستوحاة من الشرق، مثل التنين، تعكس التأثيرات الشرقية التي كانت رائجة في الفن الأوروبي آنذاك، ما يمنح القطعة طابعًا زخرفيًا مميزًا وجامعًا بين الذوق الأوروبي والرمزية الشرقية.",
    en: "An elegant sugar bowl made of dark crystal, decorated with silver-toned dragon motifs, featuring a lid and short legs. This type of piece became popular in late 19th to early 20th century Europe, particularly in Bohemia and Central Europe, where it was used to serve sugar or fine sweets on formal tables. The dragon motifs reflect Oriental influences that were fashionable in European decorative arts of the period.",
    ku: "شکردانێکی کریستالی جوان بە ڕەنگی تاریک، بە نەخشەی تەنینەکان کە بە شێوەی زیوی دەستکاری کراون، لەگەڵ قاپ و پێیە بچووکەکان. ئەم جۆرە پارچانە لە ئەورووپا لە کۆتایی سەدەی 19 و سەرەتای سەدەی 20 باو بوون، بەتایبەتی لە بوهیمیا و ناوەندی ئەورووپا، و بۆ پێشکەشکردنی شەکر یان شیرینی تایبەت بەکاردێنران."
  },

  images: [
    cld("hoa-cry-207_gas87a")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-CRY-211",

  name: {
    ar: "لالة (مصباح نفطي) كريستال بقاعدة معدنية",
    en: "Crystal Oil Lamp with Metal Stand",
    ku: "چرای نەوتی کریستال بە بنکەی مێتال"
  },

  category: {
    ar: "كريستال",
    en: "Crystal",
    ku: "کریستال"
  },

  price: "300,000 د.ع",
  priceNumber: 300000,

  desc: {
    ar: "لالة أو مصباح نفطي أنيق بطول 65 سم، يتكوّن من قاعدة معدنية عمودية تحمل وعائين من الكريستال الملوّن، مع كأس علوي مخصص للفتيل. هذا النوع من المصابيح انتشر في أوروبا والشرق الأوسط خلال أواخر القرن التاسع عشر وبدايات القرن العشرين، وكان يُستخدم للإنارة المنزلية قبل شيوع الكهرباء، خاصة في البيوت الراقية والمجالس. يجمع التصميم بين الطابع الوظيفي والزخرفي، ما يجعله قطعة تراثية جميلة للعرض.",
    en: "An elegant oil lamp standing 65 cm tall, featuring a vertical metal base with colored crystal reservoirs and an upper glass chimney for the wick. Such lamps were widely used in Europe and the Middle East in the late 19th and early 20th centuries for household lighting before electricity, especially in refined interiors.",
    ku: "چرایەکی نەوتی کریستالی بە بەرزی 65 سم، بە بنکەیەکی مێتال و دوو پارچەی کریستالی ڕەنگاڵە. لە کۆتایی سەدەی 19 و سەرەتای 20دا بۆ ڕووناککردنەوەی ماڵەکان بەکارهاتوو، پێش باوبوونی کارەبا."
  },

  images: [
    cld("hoa-cry-211_bhzkbp")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-CRY-212",

  name: {
    ar: "لالة (مصباح نفطي) بقاعدة خزفية وكأس كريستال",
    en: "Oil Lamp with Ceramic Base and Crystal Glass",
    ku: "چرای نەوتی بە بنکەی خەزەفی و کاپی کریستال"
  },

  category: {
    ar: "كريستال",
    en: "Crystal",
    ku: "کریستال"
  },

  price: "65,000 د.ع",
  priceNumber: 65000,

  desc: {
    ar: "لالة أو مصباح نفطي تقليدي يتكوّن من قاعدة خزفية بيضاء مع عمود معدني وكأس علوي من الكريستال المزخرف بحزام ذهبي. كان هذا النوع من المصابيح شائع الاستخدام في البيوت خلال أواخر القرن التاسع عشر وبدايات القرن العشرين للإنارة قبل دخول الكهرباء، ويُعد مثالاً أنيقًا على الجمع بين الوظيفة والزخرفة في الأدوات المنزلية القديمة.",
    en: "A traditional oil lamp featuring a white ceramic base, metal stem, and an upper crystal glass decorated with a gold band. Such lamps were commonly used in households in the late 19th and early 20th centuries for lighting before electricity, combining function with decorative elegance.",
    ku: "چرایەکی نەوتی نەریتی بە بنکەیەکی خەزەفی سپی، ستوونی مێتال و کاپێکی کریستالی بە زنجیرەی زێڕین. لە کۆتایی سەدەی 19 و سەرەتای 20دا بۆ ڕووناککردنەوەی ماڵەکان بەکارهاتوو."
  },

  images: [
    cld("hoa-cry-212_ihefgg")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-CRY-214",

  name: {
    ar: "فازة خزفية قديمة بطلاء أخضر مزخرف",
    en: "Vintage Glazed Ceramic Vase with Green Finish",
    ku: "فازەی خەزەفی کۆن بە ڕەنگی سەوزی مزخرف"
  },

  category: {
    ar: "كريستال",
    en: "Crystal",
    ku: "کریستال"
  },

  price: "55,000 د.ع",
  priceNumber: 55000,

  condition: {
    ar: "فيها كسر بسيط غير مؤثر على الشكل العام",
    en: "Minor crack, does not affect the overall appearance",
    ku: "شکاندنێکی بچووک هەیە کە کاریگەری لە دیمەنە گشتییەکە ناکات"
  },

  desc: {
    ar: "فازة خزفية قديمة مطلية باللون الأخضر المزخرف بنقوش بارزة يدوية، تتميز بمقبضين جانبيين وطابع زخرفي مستوحى من الأساليب الشرقية والآسيوية التقليدية. تحتوي على كسر بسيط موضّح في الصور، وهو شائع في القطع القديمة ولا ينتقص من قيمتها الجمالية، مما يجعلها مناسبة للعرض والديكور.",
    en: "A vintage ceramic vase with a green glazed finish and raised hand-crafted patterns, featuring two side handles. The decorative style is inspired by traditional Eastern and Asian designs. It has a minor visible crack, common in antique pieces, which does not diminish its decorative appeal.",
    ku: "فازەیەکی خەزەفی کۆن بە ڕەنگی سەوزی و نەقشی دەستی بەرز، دوو دەستکەوتی لاوەکی هەیە. ستایلی ڕازاندنەوەکە وەک شێوازی ڕۆژهەڵاتی و ئاسیاوی کۆنە. شکاندنێکی بچووک هەیە کە لە وێنەکاندا دیارە."
  },

  images: [
    cld("hoa-cry-214_fmmb6h")
  ],

  status: "available",
  featured: false,
  auction: false
},
{
  id: "HOA-CRY-220",

  name: {
    ar: "فازة خزفية أنيقة بزخارف يدوية",
    en: "Elegant Hand-Decorated Ceramic Vase",
    ku: "فازەی خەزەفی جوان بە نەقشی دەستی"
  },

  category: {
    ar: "كريستال",
    en: "Crystal",
    ku: "کریستال"
  },

  price: "250,000 د.ع",
  priceNumber: 250000,

  desc: {
    ar: "فازة خزفية أنيقة ذات طلاء فاتح مع زخارف وخطوط يدوية بأسلوب فني بسيط يميل إلى الطابع المعاصر مع لمسة تقليدية. تتميز بتدرجات لونية طبيعية تعكس العمل اليدوي والحرق التقليدي، ما يجعل كل قطعة فريدة بذاتها. مناسبة للعرض كقطعة ديكور راقية أو ضمن مجموعة فنية.",
    en: "An elegant ceramic vase with a light glaze and hand-painted linear motifs, blending contemporary simplicity with traditional craftsmanship. The natural color variations reflect artisanal firing techniques, making each piece truly unique and ideal for refined interior display.",
    ku: "فازەیەکی خەزەفی جوان بە ڕەنگی نەرمی سپی و نەقشی دەستی، تێکەڵی شێوازی هاوچەرخ و هونەری نەریتی. گۆڕانی ڕەنگ و تاوەکانی سووتاندن نیشانەی کاری دەستییە و هەر پارچەیەک جیاواز دەکات."
  },

  images: [
    cld("hoa-cry-220_qgngpv")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-CRY-223",

  name: {
    ar: "قطعة كريستال مزخرفة برسم طاووس يدوي",
    en: "Hand-Painted Crystal Jar with Peacock Motif",
    ku: "پارچەی کریستال بە وێنەی تاووس، کاری دەستی"
  },

  category: {
    ar: "كريستال",
    en: "Crystal",
    ku: "کریستال"
  },

  price: "— د.ع",
  priceNumber: null,

  desc: {
    ar: "قطعة كريستال أنيقة بغطاء، مزينة برسوم يدوية لطاووس محاط بزخارف نباتية ملونة. الطاووس يرمز تاريخيًا للجمال والترف والخلود، وكان شائعًا في القطع الزخرفية الأوروبية الراقية خلال القرن العشرين. العمل اليدوي الدقيق واستخدام الألوان الهادئة يجعل القطعة مناسبة للعرض كتحفة ديكورية أو ضمن مجموعة كريستال فنية.",
    en: "An elegant crystal jar with a lid, featuring a hand-painted peacock surrounded by floral motifs. The peacock has long symbolized beauty, luxury, and immortality, often appearing in refined European decorative objects of the 20th century. The delicate hand-painted details make this piece ideal as a decorative collectible.",
    ku: "پارچەیەکی جوانی کریستال بە گرتنەوە، کە وێنەی تاووس بە شێوەی دەستی و نەقشی دارستانی تێدایە. تاووس لە مێژوودا نیشانەی جوانی و شکۆیە و زۆر بەکارهاتووە لە هونەری ڕازاندنەوەی ئەوروپی. وردکارییە دەستییەکان ئەم پارچەیە دەکەن بە دانەیەکی دیكۆری تایبەت."
  },

  images: [
    cld("hoa-cry-223_mz6bfp")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-CRY-226",

  name: {
    ar: "فازة حجرية بقاعدة مربعة منحوتة",
    en: "Stone Vase with Carved Square Base",
    ku: "فازەی بەردی بە بنەمای چوارگۆشەی نەقش‌کراو"
  },

  category: {
    ar: "حجر",
    en: "Stone",
    ku: "بەرد"
  },

  price: "677,000 د.ع",
  priceNumber: 677000,

  desc: {
    ar: "فازة حجرية فخمة منحوتة يدويًا، تتميز بقاعدة مربعة ثابتة وجسم دائري بأخاديد ناعمة تعكس الحِرَفية العالية. هذا النوع من القطع كان شائعًا في البيوت الأوروبية الكلاسيكية والحدائق الداخلية كعنصر ديكور ثقيل ودائم. مناسبة للعرض كنقطة محورية أو لاحتواء نباتات وزهور جافة.",
    en: "A luxurious hand-carved stone vase featuring a stable square base and a softly grooved rounded body, reflecting fine craftsmanship. Such pieces were commonly used in classic European interiors and indoor gardens as durable decorative elements. Ideal as a focal display or for dried floral arrangements.",
    ku: "فازەیەکی بەردی گرانبەها کە بە دەست هێنراوە، بنەمایەکی چوارگۆشەی جێگیر و جەستەیەکی خولگەدار هەیە کە پیشاندەری هونەری بەرزە. ئەم جۆرە پارچانە زۆر بەکارهاتوون لە ماڵە ئەوروپییە کۆنەکان و باخچە ناوخۆکان وەک پارچەی دیكۆری سەربار."
  },

  images: [
    cld("hoa-cry-226_ufa6b9"),
    cld("hoa-cry-226-1_klacvr")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-FURN-190",

  name: {
    ar: "فاترينا عرض خشبية بواجهة زجاجية",
    en: "Wooden Display Vitrine with Glass Front",
    ku: "فاترینای پیشاندانی دارین بە ڕووکارێکی شووشەیی"
  },

  category: {
    ar: "أثاث",
    en: "Furniture",
    ku: "کەلوپەلی ماڵ"
  },

  material: {
    ar: "خشب طبيعي وزجاج",
    en: "Natural Wood & Glass",
    ku: "دار سروشتی و شووشە"
  },

  dimensions: {
    height_cm: 200
  },

  price: "550,000 د.ع",
  priceNumber: 550000,

  desc: {
    ar: "فاترينا خشبية أنيقة بارتفاع مترين، مخصصة لعرض التحف والمقتنيات الثمينة. تتميز بتصميم كلاسيكي وواجهة زجاجية تحافظ على القطع وتبرزها بأسلوب متحفي راقٍ. كانت هذه الفاترينا تُستخدم تقليديًا في البيوت الراقية والمتاحف الصغيرة لعرض القطع النادرة.",
    en: "An elegant wooden vitrine standing 2 meters tall, designed for displaying antiques and valuable collectibles. Featuring a classic design with a glass front, it protects and highlights items in a refined museum-style presentation. Traditionally used in elegant homes and small museums.",
    ku: "فاترینایەکی دارینی جوان بە بەرزی ٢ مەتر، دیزاین کراوە بۆ پیشاندانی شتومەک و پارچە گرانبەهاکان. بە شێوەیەکی کلاسیکی و ڕووکارێکی شووشەیی، پارچەکان دەپارێزێت و بە شێوەیەکی مۆزەخانەیی نیشانیان دەدات."
  },

  images: [
    cld("hoa-furn-190_luimhh")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-FURN-210",

  name: {
    ar: "مراية منضدية بإطار معدني مزخرف",
    en: "Tabletop Mirror with Ornate Metal Frame",
    ku: "ئاوێنەی سەر مێز بە چوارچێوەی ئاسنینی نەقش‌کراو"
  },

  category: {
    ar: "أثاث",
    en: "Furniture",
    ku: "کەلوپەلی ماڵ"
  },

  material: {
    ar: "إطار معدني وزجاج",
    en: "Metal Frame & Glass",
    ku: "چوارچێوەی ئاسنینی و شووشە"
  },

  age: {
    ar: "أكثر من 60 سنة",
    en: "Over 60 years old",
    ku: "زیاتر لە ٦٠ ساڵ"
  },

  price: "200,000 د.ع",
  priceNumber: 200000,

  desc: {
    ar: "مراية منضدية أنتيك بإطار معدني مزخرف بزخارف كلاسيكية ناعمة، تعكس أسلوب البيوت الأوروبية الراقية في منتصف القرن العشرين. كانت تُستخدم على طاولات الزينة وغرف النوم، وتُعد اليوم قطعة ديكور فاخرة تضيف طابعًا تراثيًا أنيقًا.",
    en: "An antique tabletop mirror with an ornate metal frame featuring soft classical motifs, reflecting the elegant European interior style of the mid-20th century. Traditionally used on vanity tables and bedrooms, it now serves as a refined decorative heritage piece.",
    ku: "ئاوێنەیەکی سەر مێزی کۆن بە چوارچێوەی ئاسنینی نەقش‌کراو، کە شێوازی ماڵە ئەوروپییە نازدارەکانی نیوەی سەدەی ٢٠ پیشان دەدات. لە ڕابردوودا لەسەر مێزی جوانکاری بەکارهاتووە و ئەمڕۆش پارچەیەکی دیكۆری تراثییە."
  },

  images: [
    cld("hoa-furn-210_fytpwh")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-FURN-195",

  name: {
    ar: "ساعة كلاسيكية خشبية منضدية",
    en: "Classic Wooden Table Clock",
    ku: "کاتژمێری سەر مێزی دارین بە شێوازی کلاسیک"
  },

  category: {
    ar: "أثاث",
    en: "Furniture",
    ku: "کەلوپەلی ماڵ"
  },

  material: {
    ar: "خشب طبيعي وآلية ميكانيكية",
    en: "Natural Wood & Mechanical Movement",
    ku: "دار سروشتی و سیستەمی میکانیکی"
  },

  era: {
    ar: "منتصف القرن العشرين",
    en: "Mid-20th Century",
    ku: "نیوەی سەدەی ٢٠"
  },

  price: "85,000د.ع",       // ← ضيفي السعر هنا
  priceNumber: 85000,    // ← الرقم بدون فواصل

  desc: {
    ar: "ساعة منضدية خشبية كلاسيكية بتصميم متناظر مستوحى من طراز الآرت ديكو، بقرص أرقام واضح وآلية تقليدية. كانت توضع على المكاتب أو الرفوف في البيوت الراقية، وتُعد اليوم قطعة أنتيك تضيف حضورًا هادئًا وأناقة زمنية للمكان.",
    en: "A classic wooden tabletop clock with a symmetrical Art Deco–inspired design, featuring a clear numeral dial and traditional movement. Originally placed on desks or shelves in refined interiors, it now serves as a timeless antique accent.",
    ku: "کاتژمێرێکی سەر مێزی دارین بە دیزاینی هاوسەنگ و وەرگرتوو لە شێوازی Art Deco، بە دایلێکی ڕوون و جوڵەی کلاسیک. لە ڕابردوودا لەسەر مێز و ڕەفەکان دادەنرا و ئەمڕۆ پارچەیەکی تراثییە."
  },

  images: [
    cld("hoa-furn-195_cwjcn2")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-FURN-205",

  name: {
    ar: "كونسول مدخل أنتيك خشبي بنحت يدوي",
    en: "Hand-Carved Antique Wooden Entry Console",
    ku: "کۆنسۆڵی دەروازەی دارین ـ ئەنتیک، دەست‌کاریکراو"
  },

  category: {
    ar: "أثاث",
    en: "Furniture",
    ku: "کەلوپەلی ماڵ"
  },

  material: {
    ar: "خشب طبيعي منحوت يدويًا",
    en: "Solid Natural Wood, Hand-Carved",
    ku: "دار سروشتی، دەست‌کاریکراو"
  },

  era: {
    ar: "أواخر القرن التاسع عشر – بدايات القرن العشرين",
    en: "Late 19th – Early 20th Century",
    ku: "کۆتایی سەدەی ١٩ – سەرەتای سەدەی ٢٠"
  },

  price: "1,800,000 د.ع",
  priceNumber: 1800000,

  desc: {
    ar: "كونسول أنتيك فاخر مصنوع من الخشب الطبيعي بنحت يدوي دقيق يعكس أسلوب الأرستقراطية الأوروبية. يتميز بأرجل منحنية وزخارف نباتية بارزة، وكان يُستخدم في مداخل القصور والمنازل الراقية لوضع المرايا أو القطع الزخرفية.",
    en: "A luxurious antique wooden console featuring intricate hand-carved details inspired by European aristocratic design. With curved legs and rich floral motifs, it was traditionally placed in grand entrances to hold mirrors or decorative objects.",
    ku: "کۆنسۆڵێکی ئەنتیکی فاخر لە دار سروشتی دروستکراو، بە نحتی دەستی وردەکاری‌دار و شێوازی ئەوروپیی ئەرستقراطی. گونجاوە بۆ دەروازە و شوێنە فەخمەکان."
  },

  images: [
    cld("hoa-furn-205_mf6qlp")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-FINE-221",

  name: {
    ar: "عمل فني معدني مكوّن من قطعتين",
    en: "Metal Art Sculpture – Two-Piece Set",
    ku: "کاری هونەری ئاسنینی ـ دوو پارچە"
  },

  category: {
    ar: "أعمال فنية",
    en: "Fine Art",
    ku: "هونەری جوان"
  },

  material: {
    ar: "معدن مصبوب بتشطيب داكن",
    en: "Cast Metal with Dark Patina Finish",
    ku: "ئاسن بە ڕەنگی تاریک"
  },

  dimensions: {
    ar: "الارتفاع: 37 سم لكل قطعة",
    en: "Height: 37 cm each piece",
    ku: "بەرزی: 37 سم بۆ هەر پارچەیەک"
  },

  style: {
    ar: "فن تجريدي حديث مستوحى من التماثيل الإفريقية",
    en: "Modern Abstract Style Inspired by African Sculpture",
    ku: "شێوازی نوێی تجریدی، هەڵگرتوو لە هونەری ئەفریقی"
  },

  price: "140,000 د.ع",
  priceNumber: 140000,

  desc: {
    ar: "عمل فني معدني مكوّن من قطعتين يجسّد أسلوبًا تجريديًا يعكس البساطة والقوة التعبيرية. يتميز بالأجسام النحيلة والوقفة الهادئة، وهو مستوحى من الفن الإفريقي المعاصر، مناسب للعرض على الكونسولات أو الرفوف كقطعة فنية لافتة.",
    en: "A two-piece metal art sculpture featuring a minimalist abstract form with elongated figures. Inspired by contemporary African art, it conveys quiet strength and elegance, ideal for console tables or display shelves.",
    ku: "کاری هونەرییەکی ئاسنینی دوو پارچە، بە شێوازی تجریدی و قەبارەی درێژ، هەڵگرتوو لە هونەری ئەفریقی. گونجاوە بۆ نمایشی ناوخۆ یان شوێنە فەخمانەکان."
  },

  images: [
    cld("hoa-fine-221_ujgugi")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-FINE-195",

  name: {
    ar: "عمل فني تجريدي – شخصية متأملة",
    en: "Abstract Art Sculpture – Contemplative Figure",
    ku: "کاری هونەری تجریدی – کەسایەتی بیرکەرەوە"
  },

  category: {
    ar: "أعمال فنية",
    en: "Fine Art",
    ku: "هونەری جوان"
  },

  material: {
    ar: "معدن مصبوب بتشطيب قديم",
    en: "Cast Metal with Aged Patina Finish",
    ku: "ئاسن بە شێوەی کۆن"
  },

  style: {
    ar: "فن تجريدي تعبيري",
    en: "Expressive Abstract Art",
    ku: "هونەری تجریدی هەستیار"
  },

  period: {
    ar: "أسلوب فني حديث",
    en: "Modern Artistic Style",
    ku: "شێوازی نوێی هونەری"
  },

  price: "360,000 د.ع",
  priceNumber: 360000,

  desc: {
    ar: "منحوتة فنية تجريدية تعبّر عن حالة إنسانية من التأمل والهدوء الداخلي. تميّزت بتكوين بسيط وخالٍ من التفاصيل الحادة، ما يمنحها حضورًا عاطفيًا قويًا يجعلها قطعة لافتة في أي مساحة عرض.",
    en: "An abstract sculpture portraying a contemplative human form. With minimal detailing and a calm posture, the piece conveys introspection and emotional depth, ideal as a statement art piece.",
    ku: "کاری هونەرییەکی تجریدی کە دۆخی بیرکردنەوە و ئارامی ناوخۆ پیشان دەدات، بە شێوەیەکی سادە و کاریگەری هەستیار."
  },

  images: [
    cld("hoa-fine-195_bbkn6o")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-FINE-208",

  name: {
    ar: "عمل فني جداري على شكل ملعقة بالخط العربي",
    en: "Wall Art Wooden Spoon with Arabic Calligraphy",
    ku: "کاری هونەری دیواری لە شێوەی قاشق بە خەتی عەرەبی"
  },

  category: {
    ar: "أعمال فنية",
    en: "Fine Art",
    ku: "هونەری جوان"
  },

  material: {
    ar: "خشب محفور يدويًا",
    en: "Hand-Carved Wood",
    ku: "دارەی دەست‌کەر"
  },

  style: {
    ar: "فن إسلامي زخرفي",
    en: "Islamic Decorative Art",
    ku: "هونەری ئیسلامی"
  },

  origin: {
    ar: "أسلوب مشرقي / عثماني",
    en: "Middle Eastern / Ottoman Style",
    ku: "شێوازی ڕۆژهەڵاتی / عوسمانی"
  },

  usage: {
    ar: "قطعة فنية للعرض الجداري",
    en: "Decorative Wall Art",
    ku: "کاری هونەری بۆ دیوار"
  },

  price: "2,000,000 د.ع",
  priceNumber: 2000000,

  desc: {
    ar: "قطعة فنية نادرة منفذة على شكل ملعقة خشبية مزخرفة، منقوشة بالخط العربي الإسلامي. لم تُستخدم كأداة، بل كعنصر رمزي وزخرفي يحمل دلالات روحانية وثقافية، وتعد من القطع المميزة في الفن الإسلامي الجداري.",
    en: "A rare wall-mounted art piece crafted in the form of a wooden spoon, engraved with Islamic Arabic calligraphy. Designed as a symbolic and decorative artwork rather than a functional object, reflecting spiritual and cultural heritage.",
    ku: "کاری هونەری نادر لە شێوەی قاشق دارەیی، بە خەتی عەرەبی ئیسلامی. بۆ نمایشی دیواری و بە واتای ڕۆحانی و کەلتووری."
  },

  images: [
    cld("hoa-fine-208_z0jrrp")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-FINE-206",

  name: {
    ar: "طبل مزدوج تقليدي بنقوش يدوية",
    en: "Double Traditional Drum with Hand-Painted Patterns",
    ku: "دەفێکی دووانەی کەلتووری بە نەخشەی دەست‌کرد"
  },

  category: {
    ar: "أعمال فنية",
    en: "Fine Art",
    ku: "هونەری جوان"
  },

  material: {
    ar: "خشب، جلد طبيعي، حبال تقليدية",
    en: "Wood, Natural Leather, Traditional Rope",
    ku: "دار، پوست، پێوانەی کەلتووری"
  },

  style: {
    ar: "فن شعبي تراثي",
    en: "Folk & Tribal Art",
    ku: "هونەری فۆلکلۆری"
  },

  usage: {
    ar: "آلة إيقاعية / قطعة عرض فنية",
    en: "Percussion Instrument / Decorative Art Piece",
    ku: "ئامێری گۆرانی / کاری نمایشی"
  },

  price: "550,000 د.ع",
  priceNumber: 550000,

  desc: {
    ar: "طبل مزدوج مصنوع يدويًا بزخارف هندسية تقليدية، كان يُستخدم في الطقوس والاحتفالات الشعبية، ويُعرض اليوم كقطعة فنية تعكس روح الموسيقى والتراث.",
    en: "A handcrafted double drum featuring traditional geometric patterns, historically used in folk rituals and celebrations, now presented as a cultural decorative artwork.",
    ku: "دەفێکی دووانەی دەست‌کرد بە نەخشەی کەلتووری، بەکارهاتوو لە بۆنە و ئاهەنگە فۆلکلۆرییەکان و ئێستا وەک کاری هونەری پیشان دەدرێت."
  },

  images: [
    cld("hoa-fine-206_qv2zbl")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-FINE-224",

  name: {
    ar: "عمل فني نحتي بتكوين عضوي",
    en: "Sculptural Artwork with Organic Form",
    ku: "کاری هونەری نحتی بە شێوەی ئۆرگانیک"
  },

  category: {
    ar: "أعمال فنية",
    en: "Fine Art",
    ku: "هونەری جوان"
  },

  material: {
    ar: "مادة نحتية طبيعية",
    en: "Natural Sculptural Material",
    ku: "مادەی سروشتی بۆ نحت"
  },

  style: {
    ar: "فن معاصر تجريدي",
    en: "Contemporary Abstract Art",
    ku: "هونەری هاوچەرخەی ئەبستراکت"
  },

  concept: {
    ar: "تعبير عن الزمن والتكوين الطبيعي",
    en: "An expression of time and natural formation",
    ku: "دەربڕینی کات و دروستبوونی سروشتی"
  },

  price: "670,000 د.ع",
  priceNumber: 670000,

  desc: {
    ar: "قطعة نحتية ذات ملمس خام وشكل عضوي غير منتظم، تعبّر عن العلاقة بين المادة والزمن، وتُعرض كعمل فني تأملي مستقل.",
    en: "A sculptural piece with a raw texture and organic irregular form, expressing the relationship between material and time, presented as a standalone contemplative artwork.",
    ku: "کاری نحتی بە دەستەوەردەی خاو و شێوەی نائاسایی، کە پەیوەندی نێوان مادە و کات پیشان دەدات و وەک کاری هونەری سەربەخۆ پیشان دەدرێت."
  },

  images: [
    cld("hoa-fine-224_yje74t")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-FINE-227",

  name: {
    ar: "عمل فني نحتي موقّع",
    en: "Signed Figurative Sculpture",
    ku: "کاری نحتی مۆرکراو"
  },

  category: {
    ar: "أعمال فنية",
    en: "Fine Art",
    ku: "هونەری جوان"
  },

  material: {
    ar: "معدن مع قاعدة خشبية",
    en: "Metal with Wooden Base",
    ku: "کانزا + بنەمای دار"
  },

  style: {
    ar: "نحت إنساني معاصر",
    en: "Contemporary Figurative Sculpture",
    ku: "نحتی مرۆڤایەتی هاوچەرخ"
  },

  signed: true,

  price: "320,000 د.ع",
  priceNumber: 320000,

  desc: {
    ar: "قطعة فنية نحتية موقّعة تجسّد شخصية إنسانية بوضعية هادئة، منفذة بأسلوب متوازن وبسيط، ومثبتة على قاعدة تحمل اسم العمل وتوقيع الفنان.",
    en: "A signed sculptural artwork depicting a calm human figure, executed in a balanced and minimalist style, mounted on a base bearing the artwork’s name and the artist’s signature.",
    ku: "کاری نحتی مۆرکراو کە شێوەی مرۆڤێکی ئارام پیشان دەدات، بە شێوازی سادە و هاوسەنگ، لەسەر بنەمایەک کە ناوی کار و مۆری هونەرمەند لەسەرە."
  },

  images: [
    cld("hoa-fine-227_r94lmj")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-SLV-202",

  name: {
    ar: "مبخرة فضية أنيق2",
    en: "Elegant Silver Incense Burner",
    ku: "بخورەدانێکی زیوی نازدار"
  },

  category: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  material: {
    ar: "فضة",
    en: "Silver",
    ku: "زیو"
  },

  style: {
    ar: "تصميم كلاسيكي مزخرف",
    en: "Ornate Classic Design",
    ku: "دیزاینی کلاسیکی نەقشکراو"
  },

  usage: {
    ar: "مبخرة – للعرض أو الاستخدام",
    en: "Incense Burner – Display or Use",
    ku: "بخورەدان – بۆ پیشاندان یان بەکارهێنان"
  },

  price: "2,670,000 د.ع",
  priceNumber: 2670000,

  desc: {
    ar: "مبخرة فضية فاخرة بزخارف مفرّغة دقيقة، ترتكز على قواعد أنيقة وتجمع بين الجمال والوظيفة، مناسبة للمجالس الراقية وهواة التحف الفضية.",
    en: "A luxurious silver incense burner with finely pierced ornamentation, resting on elegant feet and combining beauty with functionality.",
    ku: "بخورەدانێکی زیوی گرانبەها بە نەقشی ورد و کراوە، لەسەر بنەمای نازدار دانراو و گونجاو بۆ شوێنە نایابەکان."
  },

  images: [
    cld("hoa-slv-202_qozp25")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-VAS-188",

  name: {
    ar: "فازا صخرية فنية",
    en: "Artistic Stone Vase",
    ku: "فازایەکی هۆنەری لە بەرد"
  },

  category: {
    ar: "فازات",
    en: "Vases",
    ku: "فازا"
  },

  material: {
    ar: "حجر / صخر طبيعي",
    en: "Natural Stone",
    ku: "بەردی سروشتی"
  },

  style: {
    ar: "طابع فني عضوي",
    en: "Organic Artistic Style",
    ku: "ستایلی هونەری سروشتی"
  },

  usage: {
    ar: "قطعة عرض فنية",
    en: "Decorative Art Display",
    ku: "پارچەی پیشاندانی هونەری"
  },

  price: "560,000 د.ع",
  priceNumber: 560000,

  desc: {
    ar: "فازا صخرية منحوتة يدويًا بتفاصيل بارزة وملمس طبيعي قوي، قطعة فنية مميزة تضيف عمقًا وجمالية للمكان.",
    en: "A hand-carved stone vase with bold texture and natural presence, a distinctive artistic piece for refined interiors.",
    ku: "فازایەکی بەردی دەستکاریکراو بە وردەکاریی دیار و شێوەیەکی سروشتی، گونجاو بۆ شوێنە نایابەکان."
  },

  images: [
    cld("hoa-vas-188_iwdl1y")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "HOA-WOOD-197",

  name: {
    ar: "زوج فازات خشبية منحوتة يدويًا",
    en: "Pair of Hand-Carved Wooden Vases",
    ku: "دوو فازای دارین دەستکاریکراو"
  },

  category: {
    ar: "فازات",
    en: "Vases",
    ku: "فازا"
  },

  material: {
    ar: "خشب طبيعي",
    en: "Natural Wood",
    ku: "دار سروشتی"
  },

  style: {
    ar: "طابع كلاسيكي فني",
    en: "Classic Artistic Style",
    ku: "ستایلی کلاسیکی هونەری"
  },

  set: {
    ar: "زوج",
    en: "Pair",
    ku: "دووانە"
  },

  usage: {
    ar: "قطعة عرض فنية",
    en: "Decorative Art Display",
    ku: "پارچەی پیشاندانی هونەری"
  },

  price: "670,000 د.ع",
  priceNumber: 670000,

  desc: {
    ar: "زوج فازات خشبية منحوتة يدويًا بنقوش نباتية بارزة، قطعة فنية متكاملة تضيف فخامة وأناقة للمكان.",
    en: "A pair of hand-carved wooden vases with detailed floral reliefs, a refined artistic set for elegant interiors.",
    ku: "دوو فازای دارین بە وردەکاریی دەستکاریکراو و نەقشی گیاهی، گونجاو بۆ شوێنە نایابەکان."
  },

  images: [
    cld("hoa-wood-197_o2qtfh")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "hoa-art-228",

  category: {
    ar: "لوحات",
    en: "Art",
    ku: "تابلۆ"
  },

  images: [
    cld("hoa-art-228_dnmcnk"),
    cld("hoa-art-228-1_cncawe")
  ],

  title: {
    ar: "لوحة خيول أصلية موقعة",
    en: "Original Signed Horse Painting",
    ku: "تابلۆی ئەسپی ڕەسەن واژۆکراو"
  },

  artist: {
    ar: "يحيى الدراجي",
    en: "Yahya Al-Darraji",
    ku: "یحیی الدراجی"
  },

  description: {
    ar: "لوحة فنية أصلية تجسد حركة الخيول بأسلوب تعبيري كلاسيكي، موقعة بخط يد الفنان العراقي يحيى الدراجي.",
    en: "An original artwork depicting horses in dynamic motion, executed in a classical expressive style and hand-signed by Iraqi artist Yahya Al-Darraji.",
    ku: "تابلۆیەکی هونەری ڕەسەن کە جوڵەی ئەسپ پیشان دەدات، بە شێوازی کلاسیکی و واژۆی دەستی هونەرمەند."
  },
price: "2,250,000 د.ع",
  priceNumber: 2250000,
  

  tags: {
    ar: [
      "لوحات",
      "فن",
      "لوحة فنية",
      "خيول",
      "عمل موقّع",
      "فن عراقي"
    ],
    en: [
      "art",
      "painting",
      "horse",
      "signed artwork",
      "iraqi art",
      "fine art"
    ],
    ku: [
      "تابلۆ",
      "هونەر",
      "ئەسپ",
      "کارێکی واژۆکراو",
      "هونەری عێراقی"
    ]
  },

  keywords: [
    "لوحات",
    "Art",
    "تابلۆ",
    "horse painting",
    "signed art",
    "iraqi artist",
    "fine art gallery",
    "original artwork"
  ],

  status: "available",
  featured: true
},

{
  id: "HOA-WOOD-189",

  name: {
    ar: "سِت صناديق خشبية أنتيكة",
    en: "Antique Wooden Boxes Set",
    ku: "کۆمەڵە سندوقی دارین ئەنتیک"
  },

  category: {
    ar: "خشب",
    en: "Wood",
    ku: "دار"
  },

  material: {
    ar: "خشب مع تطعيم زخرفي",
    en: "Wood with Decorative Inlay",
    ku: "دار بە نەقشی جوانکاری"
  },

  set: {
    ar: "3 قطع",
    en: "3 Pieces Set",
    ku: "سێ پارچە"
  },

  style: {
    ar: "طابع كلاسيكي أنتيك",
    en: "Classic Antique Style",
    ku: "ستایلی کلاسیکی ئەنتیک"
  },

  usage: {
    ar: "حفظ وعرض فني",
    en: "Decorative Storage & Display",
    ku: "پاراستن و پیشاندانی هونەری"
  },

  price: "790,000 د.ع",
  priceNumber: 790000,

  desc: {
    ar: "سِت صناديق خشبية أنتيكة بثلاثة أحجام متدرجة، تجمع بين الجمالية الكلاسيكية والاستخدام العملي، مناسبة للعرض الراقي أو الحفظ.",
    en: "A three-piece antique wooden boxes set with graduated sizes, combining classic elegance and functional use.",
    ku: "کۆمەڵەی سێ سندوقی دارین بە قەبارەی جیاواز، گونجاو بۆ پیشاندان یان پاراستن."
  },

  images: [
    cld("hoa-wood-189_ahny4k")
  ],

  status: "available",
  featured: true,
  auction: false
},
{
  id: "hoa-acc-263",

  

  category: {
    ar: "اكسسوارات",
    en: "Accessories",
    ku: "ئاکسسوارات"
  },

  name: {
  ar: "قلادة أنتيكة من مرجان وفضة",
  en: "Antique Coral and Silver Necklace",
  ku: "گەردەنەوەی ئەنتیک لە مرجان و زیو"
},

  images: [
    cld("hoa-acc-263_o0egyl")
  ],

  title: {
    ar: "قلادة مرجان وفضة",
    en: "Coral and Silver Necklace",
    ku: "گەردەنەوەی مرجان و زیو"
  },

  description: {
    ar: "قلادة أنتيك مصنوعة من أحجار المرجان الطبيعي مع عناصر من الفضة، تتميز بتناسق لوني دافئ وطابع تراثي أصيل، تعكس ذوقًا كلاسيكيًا في صناعة المجوهرات التقليدية.",
    en: "An antique necklace crafted from natural coral stones combined with silver elements. It features a warm, harmonious color palette and an authentic heritage character, reflecting classic traditional jewelry craftsmanship.",
    ku: "گەردەنەوەیەکی کۆن دروستکراو لە مرجانی سروشتی لەگەڵ پارچەکانی زیو، بە ڕەنگاڵەیەکی گەرم و هاوبەش و هەستێکی میراثی ڕەسەن کە هونەری کۆنی دروستکردنی زیوەر پیشان دەدات."
  },

  material: {
    ar: "أحجار كريمة طبيعية",
    en: "Natural Gemstones",
    ku: "بەردی بەهادار سروشتی"
  },

  age: {
    ar: "40 سنة تقريبًا",
    en: "Approximately 40 years old",
    ku: "نزیکەی ٤٠ ساڵ"
  },

  price: "790,000 د.ع",
  priceNumber: 790000,

  tags: {
    ar: [
      "اكسسوارات",
      "قلادة",
      "مرجان",
      "فضة",
      "أنتيك",
      "مجوهرات تراثية"
    ],
    en: [
      "accessories",
      "necklace",
      "coral",
      "silver",
      "antique jewelry",
      "heritage jewelry"
    ],
    ku: [
      "ئاکسسوارات",
      "گەردەنەوە",
      "مرجان",
      "زیو",
      "کۆن",
      "میرات"
    ]
  },

  keywords: [
    "قلادة مرجان",
    "فضة",
    "مجوهرات تراثية",
    "antique coral necklace",
    "coral and silver jewelry",
    "vintage accessories",
    "heritage jewelry",
    "old coral necklace"
  ],

  status: "available",
  featured: false
},

{
  id: "HOA-ACC-260",

  category: {
    ar: "اكسسوارات",
    en: "Accessories",
    ku: "ئاکسسوار"
  },

  name: {
    ar: "حافظة أنتيك مطعّمة بصدف طبيعي",
    en: "Antique Mother-of-Pearl Inlaid Box",
    ku: "حافەیەکی کۆن ڕازاو بە صدفی سروشتی"
  },

  desc: {
    ar: "حافظة أنتيك فاخرة مطعّمة بقطع من الصدف الطبيعي، بتشطيب يدوي أنيق من الداخل، تعود إلى منتصف القرن العشرين، وتُستخدم لحفظ المجوهرات أو القطع الثمينة.",
    en: "Elegant antique box inlaid with natural mother-of-pearl, featuring refined inner finishing. Dates back to the mid-20th century, ideal for storing jewelry or precious items.",
    ku: "حافەیەکی دەستکاری‌کراوی کۆن، ڕازاو بە پارچەکانی صدفی سروشتی، ناوەوەی بە نرمی کارکراو، گونجاو بۆ پاراستنی زیوەر و شتی نرخدار."
  },

price: "999,000 د.ع",
  priceNumber: 999000,
  images: [
    cld("hoa-acc-260-1_2_ddirr5"),
    cld("hoa-acc-260-1_nbtdaj")
  ],

  keywords: {
    ar: [
      "حافظة انتيك",
      "صندوق مجوهرات",
      "صدف طبيعي",
      "تحف نادرة",
      "بيت التحفيات",
      "قطع قديمة",
      "اكسسوارات انتيك"
    ],
    en: [
      "antique box",
      "mother of pearl box",
      "vintage jewelry box",
      "antique accessories",
      "rare antiques",
      "house of antiques"
    ],
    ku: [
      "حافەی کۆن",
      "صندوق زیوەر",
      "صدفی سروشتی",
      "پارچە کۆن",
      "ئاکسسوار"
    ]
  }
},
{
  id: "HOA-COP-253",

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  name: {
    ar: "كأس نحاسي أنتيك بمقبضين جانبيين",
    en: "Antique Copper Cup with Side Handles",
    ku: "کاسێکی مسی کۆن بە دوو دەستەوە"
  },

  desc: {
    ar: "كأس نحاسي أنتيك مصنوع يدويًا، يتميز بشكل كلاسيكي أنيق مع مقبضين جانبيين وقاعدة ثابتة، يُستخدم كقطعة عرض زخرفية تعكس الحرفية التقليدية.",
    en: "Handcrafted antique copper cup featuring a classic elegant form with two side handles and a stable base, ideal as a decorative display piece.",
    ku: "کاسێکی دەست‌ساز کراوی مسی کۆن، بە شێوەیەکی کلاسیکی جوان، دوو دەستە و بنکەیەکی جێگیر، گونجاو بۆ نیشاندانی دیکۆری."
  },

price: "450,000 د.ع",
  priceNumber: 450000,
  images: [
    cld("hoa-cop-253_iwte2v")
  ],

  keywords: {
    ar: [
      "كأس نحاسي",
      "نحاس انتيك",
      "تحف نحاسية",
      "قطع تراثية",
      "نحاس قديم",
      "بيت التحفيات"
    ],
    en: [
      "antique copper cup",
      "vintage copper",
      "copper antiques",
      "decorative copper",
      "house of antiques"
    ],
    ku: [
      "کاس مسی",
      "مس کۆن",
      "پارچەی تراثی",
      "ئاشتی دیکۆر",
      "تحفە"
    ]
  }
},
{
  id: "HOA-COP-264",

  category: {
    ar: "نحاس",
    en: "Copper",
    ku: "مس"
  },

  name: {
    ar: "قطعة نحاس مخرّمة بارتفاع طويل",
    en: "Tall Pierced Copper Decorative Piece",
    ku: "پارچەی مسی مخرەم بە بەرزی درێژ"
  },

  desc: {
    ar: "قطعة نحاس مخرّمة مصنوعة يدويًا، تتميز بزخارف هندسية دقيقة تسمح بمرور الضوء، تُستخدم كقطعة عرض زخرفية أو فانوس تقليدي يعكس الحرفية التراثية.",
    en: "Handcrafted pierced copper piece featuring intricate geometric patterns that allow light to pass through, suitable as a decorative display or traditional lantern.",
    ku: "پارچەیەکی دەست‌ساز کراوی مسی مخرەم، بە نەخشەی هندسی ورد، ڕێگا بە ڕووناکی دەدات و وەک فانوس یان پارچەی دیکۆری بەکاردێت."
  },

price: "560,000 د.ع",
  priceNumber: 560000,
  images: [
    cld("hoa-cop-264_uirgjs")
  ],

  keywords: {
    ar: [
      "نحاس مخرم",
      "قطعة نحاس",
      "فانوس نحاسي",
      "تحف نحاسية",
      "نحاس تراثي",
      "بيت التحفيات"
    ],
    en: [
      "pierced copper",
      "copper lantern",
      "antique copper decor",
      "handcrafted copper",
      "house of antiques"
    ],
    ku: [
      "مس مخرەم",
      "فانوس مسی",
      "پارچەی دیکۆری",
      "تحفە",
      "پارچەی کۆن"
    ]
  }
},

{
  id: "HOA-CRY-230",

  category: {
    ar: "كريستال",
    en: "Crystal",
    ku: "کریستال"
  },

  name: {
    ar: "فازا كريستال أنيقة بحواف متموجة وزخرفة ذهبية",
    en: "Elegant Crystal Vase with Wavy Rim and Gold Decoration",
    ku: "فازای کریستالی جوان بە لێواری موجدار و ڕازاندنەوەی زێڕین"
  },

  desc: {
    ar: "فازا كريستال فنية ذات حواف متموجة ناعمة، مزخرفة برسوم ذهبية دقيقة مع تأثير فقاعات داخل الزجاج، تعكس أسلوباً أوروبياً أنيقاً من قطع الديكور الراقية.",
    en: "Artistic crystal vase featuring soft wavy edges, delicate gold motifs, and embedded bubble effects within the glass, reflecting refined European decorative style.",
    ku: "فازایەکی هونەری کریستال بە لێواری نەرم و موجدار، ڕازاندنەوەی زێڕین ورد و کاریگەری بلۆرە ناوخۆی شیشە، پیشاندەری ستایلی ئەورووپی نازدار."
  },

price: "125,000 د.ع",
  priceNumber: 125000,
  images: [
    cld("hoa-cry-230_yrtfva")
  ],

  keywords: {
    ar: [
      "فازا كريستال",
      "كريستال مزخرف",
      "تحف كريستال",
      "فازا اوروبية",
      "ديكور فاخر",
      "بيت التحفيات"
    ],
    en: [
      "crystal vase",
      "decorative crystal",
      "european crystal",
      "luxury glass decor",
      "house of antiques"
    ],
    ku: [
      "فازای کریستال",
      "کریستالی ڕازاو",
      "پارچەی دیکۆری",
      "کریستالی ئەورووپی",
      "تحفە"
    ]
  }
},
{
  id: "HOA-CRY-240",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: "فازا كريستال وردي بحواف متموجة",
    en: "Pink Crystal Vase with Wavy Rim",
    ku: "فازای کریستالی پەمەیی بە لێواری موجدار"
  },

  desc: {
    ar: "فازا كريستال أنيقة بلون وردي شفاف، تتميز بتموجات طولية ناعمة وحافة علوية متموجة تضيف إحساسًا بالحركة والرقي. قطعة ديكور فاخرة تناسب الطاولات الجانبية أو المساحات الراقية وتُعد مثالًا على جمال صناعة الكريستال اليدوية.",
    en: "An elegant pink crystal vase featuring soft vertical ripples and a wavy top rim that adds a sense of movement and refinement. A luxurious decorative piece ideal for side tables or refined interiors, showcasing the beauty of handcrafted crystal.",
    ku: "فازایەکی کریستالی پەمەیی بە موجی درێژی نەرمو لێواری سەرەوەی موجدار، هەستێکی جوانی و جوانکاری دەبەخشێت. پارچەیەکی دیکۆری فاخر گونجاو بۆ شوێنە نازدارەکان و پیشاندەری جوانی کارکردنی دەستی کریستال."
  },

price: "450,000 د.ع",
  priceNumber: 450000,
  images: [
    cld("hoa-cry-240_kupu98")
  ],

  keywords: "فازا كريستال, كريستال وردي, فازا ديكور, تحف كريستال, crystal vase, pink crystal, luxury decor, decorative glass, فازای کریستال, کریستالی پەمەیی, دیکۆری فاخر"
},
{
  id: "HOA-CRY-234",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: "طبق كريستال أزرق مزخرف بزخارف هندسية",
    en: "Blue Crystal Decorative Plate with Geometric Motifs",
    ku: "سحنێکی کریستالی شینی بە نەخشەی هندسی"
  },

  desc: {
    ar: "طبق كريستال فاخر بلون أزرق عميق، مزخرف بزخارف هندسية متناظرة مستوحاة من الفن الكلاسيكي، مع حافة مزينة بتفاصيل دقيقة. قطعة عرض راقية تناسب الطاولات، الخزائن الزجاجية، أو الجدران كعنصر فني يعكس الذوق الرفيع.",
    en: "A luxurious deep-blue crystal plate decorated with symmetrical geometric motifs inspired by classical art, featuring a finely detailed rim. An elegant display piece suitable for tables, glass cabinets, or wall presentation as a refined artistic accent.",
    ku: "سحنێکی کریستالی شینی قووڵ بە نەخشەی هندسی هاوشێوە، هەڵگرتوو لە هونەری کلاسیکی، بە لێواری وردکاری کراو. پارچەیەکی جوان بۆ پیشاندان لەسەر مێز، کابینەی شیشەیی یان وەک هونەری دیواری."
  },
  price: "300,000د.ع",
  priceNumber: 300000,

  images: [
    cld("hoa-cry-234_gnsn1z")
  ],

  keywords: "طبق كريستال, كريستال ازرق, صحون كريستال, تحف كريستال, decorative plate, blue crystal plate, luxury crystal, glass art, سحن کریستال, کریستالی شین, هونەری شیشە"
},
{
  id: "HOA-CRY-241",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: "فازة كريستال وردية مضلعة برباط زخرفي",
    en: "Pink Ribbed Crystal Vase with Decorative Cord",
    ku: "فازەی کریستالی پەمەیی بە شیارە هەڵکێشراو و گێرەی ڕازاو"
  },

  desc: {
    ar: "فازة كريستال فنية بلون وردي شفاف، مصممة بخطوط طولية ناعمة تمنحها إحساسًا بالحركة والعمق البصري، مع حافة علوية متموجة تضيف لمسة أنيقة. يحيط بعنق الفازة رباط زخرفي يزيد من طابعها الفني، ما يجعلها قطعة عرض مثالية للطاولات أو الخزائن الكلاسيكية والعصرية.",
    en: "An artistic pink crystal vase featuring soft vertical ribbing that creates a sense of movement and visual depth, complemented by a delicately wavy rim. A decorative cord wraps around the neck, enhancing its artistic character, making it a refined display piece for both classic and contemporary interiors.",
    ku: "فازەیەکی کریستالی پەمەیی هونەری، بە هێڵە شیارە درێژەکان کە هەست بە جوڵان و قووڵی بینراوی دروست دەکەن، لەگەڵ لێواری سەرەوەی شەپۆلی. گێرەیەکی ڕازاو دەوری گردنەکەی داوە کە جوانی هونەری پارچەکە زیاتر دەکات و بۆ پیشاندان گونجاوە."
  },

price: "240,000 د.ع",
  priceNumber: 240000,
  images: [
    cld("hoa-cry-241_mssdy2")
  ],

  keywords: "فازة كريستال, كريستال وردي, فازات كريستال, تحف كريستال, pink crystal vase, decorative glass vase, luxury crystal, glass art, فازە کریستال, کریستالی پەمەیی, هونەری شیشە"
},
{
  id: "HOA-CRY-231",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: "طقم كريستال أبيض (إبريق مع صحن)",
    en: "White Crystal Pitcher with Bowl Set",
    ku: "سێتی کریستالی سپی (ئبریق لەگەڵ سحن)"
  },

  desc: {
    ar: "طقم كريستال أبيض أنيق يتكون من إبريق وصحن متناسق، يتميز بتصميم ناعم وانسيابي يعكس الطابع الكلاسيكي الراقي. اللون الأبيض الصافي يمنح القطعة حضورًا هادئًا وفخمًا، ما يجعلها مناسبة للعرض في المجالس، غرف الطعام، أو ضمن مجموعات التحف الكريستالية الراقية.",
    en: "An elegant white crystal set consisting of a pitcher and a matching bowl, featuring a smooth and flowing design that reflects refined classic aesthetics. The pure white color gives the piece a calm yet luxurious presence, ideal for display in dining rooms, majlis settings, or curated crystal collections.",
    ku: "سێتێکی کریستالی سپی لە ئبریق و سحنێکی هاوشێوە پێکدێت، بە دیزاینێکی نەرم و ئارام کە ڕەنگی کلاسیکی ناسراو دەردەخات. ڕەنگی سپی پاک هەستێکی ئارام و فەخم دروست دەکات و بۆ پیشاندان لە شوێنە فەرهەنگییەکان و کۆمەڵە تحف گونجاوە."
  },

price: "300,000 د.ع",
  priceNumber: 300000,
  images: [
    cld("hoa-cry-231_js8zoa")
  ],

  keywords: "طقم كريستال, إبريق كريستال, كريستال أبيض, تحف كريستالية, crystal pitcher set, white crystal bowl, classic crystal, luxury glassware, سێتی کریستال, کریستالی سپی, تحفی کریستالی"
},
{
  id: "HOA-CRY-232",

  category: {
    ar: "كريستال",
    en: "Crystal",
    ku: "کریستال"
  },

  artist: {
    ar: "رياض",
    en: "Riyadh",
    ku: "ریاض"
  },

  name: {
    ar: "طبق كريستالي مزخرف يدويًا – عمل الفنان رياض",
    en: "Hand-Decorated Crystal Plate – Artwork by Riyadh",
    ku: "سحنێکی کریستالی نەخش‌دار – کاری هونەری ریاض"
  },

  desc: {
    ar: "طبق كريستالي مزخرف يدويًا من تنفيذ الفنان رياض، يحمل زخارف نباتية وهندسية ناعمة تعكس ذوقًا كلاسيكيًا مستوحى من الفنون الأوروبية القديمة. يتميز بتدرجات لونية هادئة وتفاصيل مرسومة بعناية، ما يجعله قطعة فنية مناسبة للعرض أو الاقتناء ضمن مجموعات الكريستال النادرة.",
    en: "A hand-decorated crystal plate created by the artist Riyadh, featuring delicate floral and geometric motifs inspired by classic European art. Soft color gradations and carefully hand-painted details give this piece an elegant artistic presence, suitable for display or inclusion in a rare crystal collection.",
    ku: "سحنێکی کریستالی بە دەستی هونەرمەند ریاض دروستکراوە، بە نەخشە ڕووەکی و هندەسییە نرمانەکان کە هەستێکی کلاسیکی وەردەگرن لە هونەری ئەورووپی کۆن. ڕەنگە ئارامەکان و وردەکارییە دەستییەکان ئەم پارچەیە دەکەن بە کاری هونەری گونجاو بۆ پیشاندان یان کۆکردنەوە لە نێو کریستالە نادرەکان."
  },

  price: "1,700,000 د.ع",
  priceNumber: 1700000,

  images: [
    cld("hoa-cry-232_rvxvgp")
  ],

  keywords: "طبق كريستال, كريستال مزخرف, عمل فني رياض, تحف كريستالية, crystal plate, hand decorated crystal, artwork by Riyadh, vintage crystal, decorative glass plate, سحن کریستال, کریستالی نەخش‌دار, کاری هونەری ریاض"
},

{
  id: "HOA-CRY-243",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: "إبريق كريستالي مزخرف برسم فني",
    en: "Decorated Crystal Pitcher with Figurative Art",
    ku: "ئیبریقی کریستالی نەخش‌دار بە وێنەی هونەری"
  },

  desc: {
    ar: "إبريق كريستالي فني مزخرف يدويًا بزخارف نباتية متكررة تتخللها رسمة إنسانية أنيقة بأسلوب كلاسيكي. يجمع بين الحرفية العالية والتصميم الفني الجريء، ويعكس تأثيرات الفن الأوروبي الزخرفي في أواني العرض. قطعة نادرة تصلح للعرض المتحفي أو كمحور بصري في المساحات الكلاسيكية.",
    en: "An artistic crystal pitcher hand-decorated with repeating floral motifs and a central figurative illustration in a classical style. The piece reflects refined craftsmanship and bold decorative European influence, making it ideal for museum-style display or as a focal decorative object.",
    ku: "ئیبریقێکی کریستالی هونەری بە دەست نەخش‌کراوە، پێکهاتوو لە نەخشە ڕووەکییە دووبارەبووەکان و وێنەی مرۆییەکی جوان بە شێوازی کلاسیکی. ئەم پارچەیە تێکەڵی هونەرمەندی بەرز و دیزاینی جەسورە، گونجاوە بۆ پیشاندانی متحفی یان وەک ناوەندی ڕوانینی دیکۆر."
  },

price: "650,000 د.ع",
  priceNumber: 650000,
  images: [
    cld("hoa-cry-243_uomioi")
  ],

  keywords: "إبريق كريستال, كريستال مزخرف, إبريق فني, تحف كريستالية, crystal pitcher, decorated crystal, figurative glass art, vintage crystal, ئیبریق کریستال, کریستالی نەخش‌دار, تحفی کریستالی"
},
{
  id: "HOA-CRY-247",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: "فازة كريستالية مزدوجة بزخارف زهرية",
    en: "Double-Bulb Floral Crystal Vase",
    ku: "فازەی کریستالی دوو بەشی بە نەخشەی گوڵ"
  },

  desc: {
    ar: "فازة كريستالية فاخرة بتصميم مزدوج الطبقات، مزخرفة يدويًا بزخارف زهرية دقيقة وألوان ناعمة تنبض بالأناقة الكلاسيكية. يجمع هذا العمل بين التوازن الشكلي واللمسة الفنية الراقية، ما يجعلها قطعة مثالية للعرض المتحفي أو كعنصر محوري في الديكورات الراقية.",
    en: "An elegant double-bulb crystal vase, hand-decorated with delicate floral motifs and soft pastel colors. The piece reflects refined classical aesthetics and balanced form, making it ideal for museum-style display or as a sophisticated decorative centerpiece.",
    ku: "فازەیەکی کریستالی دوو بەشی بە دیزاینێکی ناسک و گوڵ‌نەخش‌کراوی دەستی، پڕ لە ڕەنگە نەرم و جوانەکان. ئەم پارچەیە هاوسەنگی نێوان شێوە و هونەر پیشان دەدات و گونجاوە بۆ پیشاندانی متحفی یان دیکۆری کلاسیکی."
  },

  price: "1,790,000 د.ع",
  priceNumber: 1790000,

  images: [
    cld("hoa-cry-247_qsfvsz"),
    cld("hoa-cry-247-1_fjwvvl")
  ],

  keywords: "فازة كريستال, فازة مزخرفة, كريستال زهور, تحف كريستالية, crystal vase, floral crystal, vintage crystal vase, decorative glass, فازەی کریستال, کریستالی نەخش‌دار, تحفی کریستالی"
},
{
  id: "HOA-CRY-245",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: "إبريق كريستالي مزخرف",
    en: "Decorated Crystal Teapot",
    ku: "ئیبریقێکی کریستالی نەخش‌دار"
  },

  desc: {
    ar: "إبريق كريستالي أنيق بزخارف يدوية ناعمة وألوان دافئة تعكس الطابع الكلاسيكي الأوروبي. يتميز بتوازن جميل بين الشكل والوظيفة، ويُعد قطعة مثالية للعرض أو للاستخدام الخفيف ضمن مجموعات الضيافة الراقية.",
    en: "An elegant crystal teapot decorated with delicate hand-applied motifs and warm tones, reflecting classic European aesthetics. A refined piece suitable for display or light use within sophisticated tea collections.",
    ku: "ئیبریقێکی کریستالی جوان بە نەخشە دەستی و ڕەنگە گەرمەکان، ڕوونکەرەوەی ستایلی کلاسیکی ئەورووپی. پارچەیەکی گونجاو بۆ پیشاندان یان بەکارهێنانی سووک لە کۆمەڵەی چای."
  },

  price: "60,000 د.ع",
  priceNumber: 60000,

  images: [
    cld("hoa-cry-245_u7bhtf")
  ],

  keywords: "إبريق كريستال, إبريق مزخرف, تحف كريستالية, أواني تقديم, crystal teapot, decorated teapot, vintage crystal, tea ware, ئیبریق کریستال, کریستالی نەخش‌دار, تحفی کریستالی"
},
{
  id: "HOA-CRY-248",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: "إبريق كريستالي مزخرف بالزهور",
    en: "Floral Decorated Crystal Teapot",
    ku: "ئیبریقێکی کریستالی بە نەخشی گوڵ"
  },

  desc: {
    ar: "إبريق كريستالي أنتيك بتصميم دائري مميز وزخرفة زهرية يدوية على خلفية داكنة أنيقة. القطعة تجمع بين الطابع الكلاسيكي واللمسة الفنية الناعمة، وتُعد خيارًا مثاليًا للعرض ضمن مجموعات التحف أو لاستخدام محدود في جلسات الضيافة الراقية.",
    en: "An antique crystal teapot featuring a distinctive rounded form with hand-painted floral decoration on a deep, elegant background. A refined piece that blends classic character with artistic charm, ideal for display or limited use in sophisticated tea settings.",
    ku: "ئیبریقێکی کریستالی ئەنیتیک بە شێوەیەکی بازنەیی و نەخشی گوڵی دەست‌کرد لەسەر پاشبنەمایەکی تاریک و جوان. پارچەیەکی گونجاو بۆ پیشاندان یان بەکارهێنانی سووک لە دانیشتنی میوانداری."
  },

  price: "120,000 د.ع",
  priceNumber: 120000,

  images: [
    cld("hoa-cry-248_rkpldu")
  ],

  keywords: "إبريق كريستال, إبريق مزخرف, تحف كريستالية, أواني شاي, crystal teapot, floral teapot, vintage crystal, antique tea ware, ئیبریق کریستال, کریستالی نەخش‌دار, تحفی کریستالی"
},
{
  id: "HOA-CRY-249",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: "طبق كريستالي أخضر بغطاء وقاعدة",
    en: "Green Crystal Compote with Lid",
    ku: "تابقێکی کریستالی سەوز بە قاپ و بنکە"
  },

  desc: {
    ar: "قطعة كريستال أنيقة بلون أخضر مميز، مزخرفة بنقوش بارزة دقيقة مع غطاء وقاعدة مرتفعة. تعكس الطابع الكلاسيكي الفاخر وتُعد مثالية للعرض في الصالات أو ضمن مجموعات الكريستال النادرة.",
    en: "An elegant green crystal piece featuring detailed raised patterns, complete with a lid and elevated base. A classic luxurious design, perfect for display in refined interiors or as part of a rare crystal collection.",
    ku: "پارچەیەکی کریستالی سەوزی جوان بە نەخشی بەرز و ورد، هەروەها قاپ و بنکەی بەرز هەیە. گونجاوە بۆ پیشاندان لە شوێنە فاخەرەکان یان کۆمەڵەی کریستالی دەگمەن."
  },

  price: "270,000 د.ع",
  priceNumber: 270000,

  images: [
    cld("hoa-cry-249_r2fvg9")
  ],

  keywords: "طبق كريستال, كريستال أخضر, تحف كريستالية, قطعة عرض, crystal compote, green crystal, vintage crystal, decorative bowl, تابەق کریستال, کریستالی سەوز, تحفی کریستالی"
},
{
  id: "HOA-CRY-246",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: "إبريق خزفي أزرق وأبيض بزخارف معمارية",
    en: "Blue and White Ceramic Teapot with Architectural Motifs",
    ku: "ئبریقێکی خەزەفی شین و سپی بە نەخشی تەلار و دارستان"
  },

  desc: {
    ar: "إبريق خزفي أنتيك بتصميم أزرق وأبيض مستوحى من المناظر المعمارية والحدائق الكلاسيكية، يتميز بزخارف دقيقة ولمسة فنية شرقية تعكس الحرفية العالية. قطعة مثالية للعرض ضمن مجموعات الخزف أو الديكور الكلاسيكي.",
    en: "An antique ceramic teapot in classic blue and white, inspired by architectural landscapes and garden scenes. Finely detailed and artistically crafted, making it a refined display piece for ceramic collections or classic interiors.",
    ku: "ئەم ئبریقە خەزەفییە بە شێوازی شین و سپی، وێنەی بیناسازی و باخچە کلاسیکی پیشان دەدات. کاری دەستی ورد و جوانی هەیە و گونجاوە بۆ پیشاندان یان کۆمەڵەی خەزەفی."
  },

  price: "100,000د.ع",
  priceNumber: 100000,

  images: [
    cld("hoa-cry-246_i375m0")
  ],

  keywords: "ابريق خزف, خزف أزرق أبيض, ابريق انتيك, تحف خزفية, ceramic teapot, blue white ceramic, antique pottery, decorative teapot, ئبریق خەزەف, خەزەفی شین و سپی, تحفی خەزەفی"
},
{
  id: "HOA-CRY-258",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: " قطة كريستال خضراء بغطاء",
    en: "Green Crystal Decorative 1 peace with Stoppers",
    ku: "کۆمەڵەی پارچە کریستالی سەوز بە سەرپۆش"
  },

  desc: {
    ar: "مجموعة أنتيك من قطع الكريستال الأخضر الشفاف، تتكون من عدة قطع متناسقة بغطاء كروي أنيق. تتميز بتصميم كلاسيكي متدرج ولمعان زجاجي جميل، وتعد قطعة نادرة مثالية للعرض داخل خزائن التحف أو ضمن مجموعات الكريستال القديمة.",
    en: "An antique set of translucent green crystal pieces, featuring multiple matching items with elegant spherical stoppers. The stepped classic design and refined glass finish make it a rare and sophisticated display set for antique cabinets or crystal collections.",
    ku: "ئەم کۆمەڵەیە لە کریستالی سەوزی شفاف پێکهاتووە لە چەند پارچەی هاوشێوە بە سەرپۆشی گۆڵاوی. دیزاینێکی کلاسیکی هەیە و جوانی زۆری بۆ پیشاندان لە ناو دۆڵابی تحف یان کۆمەڵە کریستال."
  },

  price: "25,000 د.ع",
  priceNumber: 25000,

  images: [
    cld("hoa-cry-258_pqe871")
  ],

  keywords: "كريستال اخضر, مجموعة كريستال, تحف زجاجية, قطع كريستال انتيك, green crystal set, antique crystal, decorative glass, crystal collection, کریستال سەوز, کۆمەڵە کریستال, تحفی زجاجی"
},
{
  id: "HOA-CRY-257",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: "مصباح كريستال أنتيك بقاعدة معدنية",
    en: "Antique Crystal Lamp with Metal Base",
    ku: "چرای کریستالی کۆن بە بنچینەی کانزایی"
  },

  desc: {
    ar: "مصباح أنتيك فاخر يتكون من جسم كريستالي بلون عنبري مع كأس زجاجي شفاف علوي وقاعدة معدنية مزخرفة بزخارف كلاسيكية دقيقة. يعكس الطابع الأوروبي القديم ويعد قطعة مميزة للعرض أو للاستخدام الزخرفي في المساحات التراثية والفخمة.",
    en: "A luxurious antique lamp featuring an amber-toned crystal body, a clear glass upper shade, and an ornate metal base with classic decorative details. A refined European-style piece ideal for display or decorative use in elegant interiors.",
    ku: "چرایەکی کۆنی جوان لە کریستالی ڕەنگی عەنبەری پێکهاتووە، بە جامی سەرەوەی شفاف و بنچینەی کانزایی نەخشکراو. گونجاوە بۆ پیشاندان یان ڕازاندنەوەی شوێنە کلاسیکیەکان."
  },

  price: "180,000 د.ع",
  priceNumber: 180000,

  images: [
    cld("hoa-cry-257_yrdj0l")
  ],

  keywords: "مصباح كريستال, لمبة انتيك, تحف اضاءة, كريستال عنبري, antique crystal lamp, vintage lighting, decorative lamp, amber crystal, چرای کریستال, چرای کۆن, تحفی ڕووناکی"
},
{
  id: "HOA-CRY-250",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: "طبق رخامي أنتيك بقاعدة منحوتة",
    en: "Antique Marble Bowl with Carved Pedestal",
    ku: "قابەی مەرەمەری کۆن بە بنچینەی دەست‌هێلکاری"
  },

  desc: {
    ar: "طبق أنتيك مصنوع من الرخام الطبيعي، يتميز بحافة مزخرفة بأوراق نباتية منحوتة بدقة وقاعدة مركزية ملتفة بأسلوب كلاسيكي. قطعة فاخرة تعكس الذوق الأوروبي القديم، مناسبة للعرض كعنصر زخرفي أو كقطعة مركزية في المساحات التراثية الراقية.",
    en: "An antique bowl crafted from natural marble, featuring a finely carved rim with botanical leaf motifs and a twisted classical pedestal base. A refined European-style piece ideal as a decorative centerpiece or display object.",
    ku: "قابەیەکی کۆنی دروستکراو لە مەرەمەری سروشتی، بە لێواری نەخشکراوی گەڵاوێژە گیایی و بنچینەی کلاسیکی سوڕاو. گونجاوە وەک پارچەی پیشاندانی فاخەر یان ناوەندی ڕازاندنەوە."
  },

  price: "260,000 د.ع",
  priceNumber: 260000,

  images: [
    cld("hoa-cry-250_cdnjck")
  ],

  keywords: "طبق رخامي, تحف حجرية, انتيك رخامي, طبق ديكور, antique marble bowl, carved marble, decorative centerpiece, marble antique, قابەی مەرەمەری, تحفی بەردی"
},
{
  id: "HOA-CRY-252",

  category: { ar:"كريستال", en:"Crystal", ku:"کریستال" },

  name: {
    ar: "فازة أنتيك مزخرفة بزخارف نباتية ملونة",
    en: "Antique Floral Decorated Vase",
    ku: "ڤازەی کۆن بە نەخشەی گیایی ڕەنگاوڕەنگ"
  },

  desc: {
    ar: "فازة أنتيك مزخرفة بزخارف نباتية متشابكة مرسومة يدويًا، تتميز بتناسق الألوان بين الأزرق والأخضر والأحمر على أرضية فاتحة، مع حافة علوية متموجة تضيف طابعًا كلاسيكيًا راقيًا. قطعة فنية تعكس أسلوبًا زخرفيًا شرقيًا–أوروبيًا، مناسبة للعرض كعنصر ديكوري فاخر في المساحات التراثية.",
    en: "An antique vase richly decorated with hand-painted intertwined floral motifs. The harmonious palette of blue, green, and red on a light background is complemented by a softly scalloped rim, giving the piece a refined classical character. Ideal as a luxurious decorative display.",
    ku: "ڤازەیەکی کۆنی هونەری بە نەخشە گیایی دەست‌نوسراو، ڕەنگەکان بە شێوەیەکی هاوسەنگ لە شین و سەوز و سور لەسەر بنەمایەکی ڕوون دانراون، لەگەڵ لێواری سەرەوەی پەپوولەدار کە ڕووحێکی کلاسیکی پێی دەبەخشێت. گونجاو بۆ پیشاندان و ڕازاندنەوەی شوێنە فەرهەنگییەکان."
  },

  price: "590,000 د.ع",
  priceNumber: 590000,

  images: [
    cld("hoa-cry-252_ctefgl")
  ],

  keywords: "فازة انتيك, فازة مزخرفة, تحف خزفية, فازة ديكور, antique vase, floral vase, decorative pottery, hand painted vase, ڤازەی کۆن, تحفی هونەری"
},
{
  id: "HOA-FINE-237",

  category: { ar:"أعمال فنية", en:"Fine Art", ku:"کارە هونەرییەکان" },

  name: {
    ar: "عمل فني صخري تجريدي",
    en: "Abstract Stone Artwork",
    ku: "کاری هونەری بەردی ئەبستراکت"
  },

  desc: {
    ar: "عمل فني صخري تجريدي منحوت من حجر طبيعي، يتميز بتكوين عضوي متوازن وسطح محبب يعكس خامة المادة الأصلية. الشكل الانسيابي مع الانحناءة العلوية يمنح القطعة حضورًا نحاتيًا معاصرًا، ما يجعلها مناسبة للعرض المتحفي أو المساحات الفنية الراقية.",
    en: "An abstract stone artwork carved from natural stone, featuring an organic balanced form and a textured surface that highlights the raw material. The flowing silhouette and subtle upper curve give the piece a contemporary sculptural presence, ideal for museum or refined art spaces.",
    ku: "کاری هونەرییەکی بەردی ئەبستراکت لە بەردی سروشتی دروستکراوە، بە شێوەیەکی هاوسەنگ و ڕووکارێکی دانەدانە کە خاسیەتی ماددەی سەرەکی پیشان دەدات. شێوەی خولانی و هێلکەی سەرەوە ڕەنگدانێکی مۆدێرن و نەتەوەیی پێدەدات، گونجاو بۆ پیشاندانی مۆزەیی."
  },

  price: "1,500,000 د.ع",
  priceNumber: 1500000,

  images: [
    cld("hoa-fine-237_cdxdwn")
  ],

  keywords: "عمل فني صخري, نحت حجري, فن تجريدي, قطعة متحفية, abstract stone art, stone sculpture, fine art sculpture, contemporary art, کاری هونەری بەردی, نەتەوەیی هونەری"
},
{
  id: "HOA-FINE-229",

  category: { ar:"أعمال فنية", en:"Fine Art", ku:"کارە هونەرییەکان" },

  name: {
    ar: "عمل فني جداري من معدن",
    en: "Metal Wall Art",
    ku: "کاری هونەری دیواری لە کانزا"
  },

  desc: {
    ar: "عمل فني جداري مصنوع من المعدن، يتميز بتكوين زخرفي يعكس قوة الخامة ودقة التنفيذ. القطعة مصممة للعرض الجداري وتضفي طابعًا فنيًا معاصرًا يناسب المساحات الداخلية الراقية أو القاعات الفنية.",
    en: "A metal wall artwork featuring a decorative composition that reflects the strength of the material and precision of craftsmanship. Designed for wall display, it adds a contemporary artistic touch suitable for refined interiors or art spaces.",
    ku: "کاری هونەرییەکی دیواری لە کانزا دروستکراوە، بە پێکهاتەیەکی ڕازاندنەوەیی کە هێزی ماددە و وردی کاری پیشان دەدات. بۆ پیشاندانی دیواری گونجاوە و ڕەنگدانێکی هونەری مۆدێرن بۆ شوێنە ناوەوەکان زیاد دەکات."
  },

  price: "220,000 د.ع",
  priceNumber: 220000,

  images: [
    cld("hoa-fine-229_bfnusq")
  ],

  keywords: "عمل فني جداري معدني, فن معدني, قطعة فنية جدارية, metal wall art, metal artwork, fine art wall piece, contemporary metal art, کاری هونەری دیواری کانزا"
},
{
  id: "HOA-FINE-238",

  category: { ar:"أعمال فنية", en:"Fine Art", ku:"کارە هونەرییەکان" },

  name: {
    ar: "عمل فني لمجموعة Pins من حول العالم",
    en: "World Pins Art Collection",
    ku: "کۆمەڵەی پینە هونەرییەکان لە جیهان"
  },

  desc: {
    ar: "عمل فني جداري يضم مجموعة كبيرة من دبابيس (Pins) أصلية من مختلف دول العالم، تم تنسيقها بعناية داخل عارضة فنية سوداء بأسلوب متحفي. تعكس القطعة تنوع الثقافات والرموز العالمية، وتُعد عملاً توثيقيًا بصريًا نادرًا يجمع بين الفن، السفر، والذاكرة الجماعية. مناسبة للعرض في الصالات الفنية، المجموعات الخاصة، أو المساحات الثقافية الراقية.",
    en: "A wall-mounted art piece featuring an extensive collection of original pins from around the world, meticulously arranged inside a museum-style black display. The artwork reflects cultural diversity and global symbolism, making it a rare visual documentation that blends art, travel, and collective memory. Ideal for art galleries, private collections, or refined cultural spaces.",
    ku: "کاری هونەرییەکی دیواری کە کۆمەڵەیەکی گەورە لە پینە ڕەسەنەکان لە وڵاتە جیاوازەکانی جیهان تێدایە، بە وردی ڕیزکراون لە ناو عارضەیەکی هونەری بە شێوازی مۆزەخانە. ئەم کارە جیاوازی کەلتوور و هێما جیهانییەکان پیشان دەدات و وەک بەڵگەیەکی بینینی دەگمەن نێوان هونەر، گەشت و بیرەوەری کۆمەڵایەتی دادەنرێت."
  },

  dimensions: {
    ar: "الطول 100 سم × العرض 80 سم",
    en: "100 cm height × 80 cm width",
    ku: "درێژی 100 سم × پانی 80 سم"
  },

  price: "1,750,000 د.ع",
  priceNumber: 1750000,

  images: [
    cld("hoa-fine-238.jppg_ihokye")
  ],

  keywords: "مجموعة pins, عمل فني جداري, تحف عالمية, عرض متحفي, world pins collection, pin art display, fine art wall piece, museum display art, کۆمەڵە پینە جیهانییەکان"
},
{
  id: "HOA-FINE-257",

  category: { ar:"أعمال فنية", en:"Fine Art", ku:"کارە هونەرییەکان" },

  name: {
    ar: "مجسّم أنتيك لعربة ملكية أوروبية مع شخصيات خزفية",
    en: "Antique European Royal Carriage Porcelain Figurine",
    ku: "مجسەمەی ئانتیک بۆ عەرەبەی شاهانەی ئەورووپی لە خەزەف"
  },

  desc: {
    ar: "قطعة أنتيك فاخرة تمثل عربة ملكية أوروبية تعود إلى الطراز الكلاسيكي، منفذة من الخزف المزخرف بدقة عالية، وتضم عدة شخصيات بملابس أرستقراطية تعكس أجواء البلاط الملكي في القرن التاسع عشر. تتميز القطعة بتفاصيلها الدقيقة، الزخارف الذهبية، والعربة المجرورة بحصان، ما يجعلها عملاً فنياً متكاملاً يجمع بين النحت والسرد التاريخي. قطعة نادرة مناسبة للعرض المتحفي، المجموعات الخاصة الراقية، أو كعنصر مركزي في الديكور الكلاسيكي.",
    en: "A luxurious antique piece depicting a European royal carriage in a classical style, crafted from finely detailed porcelain and featuring multiple aristocratic figures in period attire. The figurine reflects the atmosphere of 19th-century royal courts, enriched with intricate sculpting, elegant poses, and subtle gilded accents. A rare collectible that merges sculpture and historical narrative, ideal for museum display, refined private collections, or as a statement centerpiece in classic interiors.",
    ku: "پارچەیەکی ئانتیکی فاخەر کە عەرەبەیەکی شاهانەی ئەورووپی پیشان دەدات بە شێوازی کلاسیکی، لە خەزەفی وردکاری کراو دروست کراوە و چەند کاراکتەرێکی ئارستۆکراتی تێدایە بە جل و بەرگی سەردەمی خۆیان. ئەم کارە هەوای دەرباری شاهانەی سەدەی نۆزدەهەم پیشان دەدات و بە وردکاری، هێما زێڕین و چیرۆکی مێژوویی تێکەڵ بووە. پارچەیەکی دەگمەن و گرانبەها بۆ مۆزەخانە، کۆمەڵگا تایبەتەکان یان وەک ناوەندی دیکۆری کلاسیکی."
  },

  dimensions: {
    ar: "الطول 45 سم × العرض 25 سم × الارتفاع 30 سم",
    en: "45 cm length × 25 cm width × 30 cm height",
    ku: "درێژی 45 سم × پانی 25 سم × بەرزی 30 سم"
  },

  price: "350,000د.ع",
  priceNumber: 350000,

  images: [
    cld("hoa-fine-257_i4aoka")
  ],

  keywords: "عربة ملكية انتيك, مجسم خزف, تحف اوروبية, اعمال فنية كلاسيكية, antique royal carriage, porcelain figurine, european antique art, museum collectible, مجسەمەی خەزەفی ئانتیک"
},
{
  id: "HOA-FINE-251",

  category: { ar:"أعمال فنية", en:"Fine Art", ku:"کارە هونەرییەکان" },

  name: {
    ar: "تمثال نصفي أنتيك بطراز كلاسيكي",
    en: "Antique Classical Style Bust Sculpture",
    ku: "پەیکەری سەر و شانەی ئانتیک بە شێوازی کلاسیکی"
  },

  desc: {
    ar: "تمثال نصفي أنتيك منفذ بأسلوب كلاسيكي، يُجسد ملامح إنسانية هادئة بتفاصيل دقيقة تعكس الطابع الفني للنحت الأوروبي القديم. يتميز التمثال بتوازن واضح في النسب، تعبير واقعي للوجه، ومعالجة ناعمة لملامس السطح، ما يمنحه حضورًا متحفيًا رصينًا. قطعة فنية مناسبة للعرض في المجموعات الخاصة، المكتبات الفاخرة، أو كعنصر جمالي في المساحات الثقافية الراقية.",
    en: "An antique bust sculpture executed in a classical style, featuring calm human expressions and finely balanced proportions inspired by traditional European sculptural art. The piece showcases realistic facial details and subtle surface treatment, giving it a refined museum-like presence. Ideal for private collections, elegant libraries, or as a sophisticated decorative accent in cultural interiors.",
    ku: "پەیکەری سەر و شانەیەکی ئانتیک بە شێوازی کلاسیکی، کە دەربڕینی ڕووخسارێکی ئارام و ڕێژەی هاوسەنگی هونەری پیشان دەدات. وردکارییەکان و شێوازی کارکردنی سەرەکە هەستێکی مۆزەخانەیی پێ دەدات. گونجاوە بۆ کۆمەڵگا تایبەتەکان، کتێبخانە فاخەرەکان یان شوێنە کەلتوورییە نازدارەکان."
  },

  dimensions: {
    ar: "الارتفاع 35 سم × العرض 20 سم × العمق 18 سم",
    en: "35 cm height × 20 cm width × 18 cm depth",
    ku: "بەرزی 35 سم × پانی 20 سم × قووڵی 18 سم"
  },

  price: "160,000 د.ع",
  priceNumber: 160000,

  images: [
    cld("hoa-fine-251_vpsb5s")
  ],

  keywords: "تمثال نصفي انتيك, نحت كلاسيكي, تحف فنية, اعمال فنية حجرية, antique bust sculpture, classical art bust, fine art statue, museum style sculpture, پەیکەری کلاسیکی"
},
{
  id: "HOA-FINE-254",

  category: { ar:"أعمال فنية", en:"Fine Art", ku:"کارە هونەرییەکان" },

  name: {
    ar: "سيف أنتيك مزخرف بطراز كلاسيكي",
    en: "Antique Decorated Classical Sword",
    ku: "شمشێری ئانتیک بە شێوازی کلاسیکی و نەقش‌دار"
  },

  desc: {
    ar: "سيف أنتيك منفذ بأسلوب كلاسيكي، يتميز بنصل طويل منحني مزخرف بنقوش دقيقة تمتد على طول الشفرة، مع مقبض معدني مزين بتفاصيل زخرفية تعكس مهارة صناعية عالية. تعطي القطعة انطباعًا تاريخيًا واضحًا وتجمع بين الجمالية الفنية والرمزية المرتبطة بالفروسية والسلطة. قطعة نادرة مناسبة للعرض المتحفي، المجموعات الخاصة الراقية، أو كعنصر بصري قوي في المساحات الكلاسيكية.",
    en: "An antique sword crafted in a classical style, featuring a long curved blade adorned with fine engraved motifs along its length, paired with an ornately decorated metal hilt. The piece conveys a strong historical presence, blending artistic craftsmanship with symbolic associations of chivalry and authority. A rare collectible ideal for museum display, refined private collections, or as a striking visual centerpiece in classical interiors.",
    ku: "شمشێرێکی ئانتیک بە شێوازی کلاسیکی، تیغێکی درێژ و کەوانەدار هەیە کە بە نەقش و هێمای ورد لەسەر درێژی تیغەکە ڕازاوە، لەگەڵ دەستکەڵێکی ئاسنی نەقش‌دار. ئەم پارچەیە هەستی مێژوویی بەھێز دروست دەکات و نێوان جوانی هونەری و هێمای فروسێتی و دەسەڵاتدا تێکەڵ دەبێت. گونجاوە بۆ مۆزەخانە، کۆمەڵگا تایبەتە نازدارەکان یان وەک ناوەندی بینراوی بەھێز لە شوێنە کلاسیکییەکان."
  },

  dimensions: {
    ar: "الطول 95 سم × العرض 6 سم × الارتفاع 10 سم (مع الحامل)",
    en: "95 cm length × 6 cm width × 10 cm height (with stand)",
    ku: "درێژی 95 سم × پانی 6 سم × بەرزی 10 سم (لەگەڵ پێوانە)"
  },

  price: "1500,000 د.ع",
  priceNumber: 150000,

  images: [
    cld("hoa-fine-254_npbj5c")
  ],

  keywords: "سيف انتيك, سيف مزخرف, تحف تاريخية, اعمال فنية كلاسيكية, antique sword, decorated blade, classical weapon art, museum weapon display, شمشێری ئانتیک"
},
{
  id: "HOA-FINE-255",

  category: { ar:"أعمال فنية", en:"Fine Art", ku:"کارە هونەرییەکان" },

  name: {
    ar: "خنجر أنتيك بطراز تقليدي",
    en: "Antique Traditional Dagger",
    ku: "خەنجەری ئانتیک بە شێوازی نەریتی"
  },

  desc: {
    ar: "خنجر أنتيك يتميز بنصل منحني قصير ذي سماكة واضحة، مع سطح يحمل آثار الزمن ويعكس طابعًا تاريخيًا أصيلًا. المقبض مصنوع من الخشب ومثبت بعناية مع النصل، ما يدل على استخدام تقليدي وحرفية يدوية عالية. تجمع القطعة بين الوظيفة القتالية القديمة والقيمة الفنية، وتُعد مثالًا نادرًا على الأسلحة البيضاء التقليدية التي كانت تُصنع للاستخدام والهيبة معًا. قطعة مناسبة للعرض المتحفي، المجموعات الخاصة المتخصصة، أو كعنصر تراثي قوي في المساحات الكلاسيكية.",
    en: "An antique dagger featuring a short, thick curved blade with a surface marked by time, reflecting an authentic historical character. The wooden handle is carefully fitted to the blade, indicating traditional use and skilled craftsmanship. The piece combines historical combat function with artistic value, making it a rare example of traditional edged weapons crafted for both use and prestige. Ideal for museum display, specialized private collections, or as a strong heritage accent in classical interiors.",
    ku: "خەنجەرێکی ئانتیک بە تیغێکی کورت و قەڵەوەی کەوانەدار، کە نیشانەکانی کات لەسەر ڕووی دیارە و هەستی ڕەسەنی مێژوویی دەگوازێتەوە. دەستکەڵەکە لە دار دروست کراوە و بە وردی لەگەڵ تیغەکە پێکەوە گرێدراوە، کە ئاماژەیە بۆ کاری دەستی و بەکارهێنانی نەریتی. ئەم پارچەیە نێوان کارکردی شەڕی کۆن و بەهای هونەریدا تێکەڵ دەبێت. گونجاوە بۆ مۆزەخانە، کۆمەڵگا تایبەتییە پسپۆڕەکان یان وەک هێمایەکی بەهێز لە شوێنە کلاسیکییەکان."
  },

  dimensions: {
    ar: "الطول 55 سم × العرض 8 سم × الارتفاع 12 سم (مع الحامل)",
    en: "55 cm length × 8 cm width × 12 cm height (with stand)",
    ku: "درێژی 55 سم × پانی 8 سم × بەرزی 12 سم (لەگەڵ پێوانە)"
  },

  price: "3,460,000 د.ع",
  priceNumber: 3460000,

  images: [
    cld("hoa-fine-255_rpgomf")
  ],

  keywords: "خنجر انتيك, خنجر تقليدي, اسلحة بيضاء, تحف تاريخية, antique dagger, traditional dagger, edged weapon art, museum weapon display, خەنجەری ئانتیک"
},
{
  id: "HOA-FINE-267",

  category: { ar:"أعمال فنية", en:"Fine Art", ku:"کارە هونەرییەکان" },

  name: {
    ar: "تمثال خشبي أنتيك بطابع شرقي",
    en: "Antique Wooden Figure in Eastern Style",
    ku: "پەیکەری دارەکی ئانتیک بە شێوازی ڕۆژهەڵاتی"
  },

  desc: {
    ar: "تمثال أنتيك منفذ من الخشب ومطلي يدويًا، يصوّر شخصية جالسة بملامح هادئة وزخارف لونية تقليدية تعكس الطابع الشرقي الكلاسيكي. تظهر على القطعة آثار الزمن بشكل متوازن يضيف لها قيمة تاريخية وجمالية، مع تفاصيل دقيقة في الوجه، الأزياء، ووضعية الجلوس. قطعة مناسبة للعرض المتحفي، المجموعات الخاصة، أو كعنصر فني مميز في المساحات الثقافية والديكورات الراقية.",
    en: "An antique wooden figure, hand-painted and depicting a seated character with calm facial features and traditional decorative colors reflecting a classical Eastern aesthetic. The piece shows natural signs of age that enhance its historical and artistic value, with fine detailing in the face, attire, and posture. Ideal for museum-style display, private collections, or as a distinctive artistic element in refined cultural interiors.",
    ku: "پەیکەرێکی دارەکی ئانتیک کە بە دەست ڕەنگ کراوە و کاراکتەرێکی دانیشتوو پیشان دەدات بە ڕووخساری ئارام و نەقش و ڕەنگی نەریتی ڕۆژهەڵاتی. نیشانەکانی کات بە شێوەیەکی هاوسەنگ لەسەر دیارن و بەهای مێژوویی و هونەریی پارچەکە زیاد دەکەن. گونجاوە بۆ پیشاندانی مۆزەخانەیی، کۆمەڵگا تایبەتەکان یان وەک پارچەیەکی هونەری جیاواز لە شوێنە کەلتوورییە نازدارەکان."
  },

  dimensions: {
    ar: "الارتفاع 32 سم × العرض 20 سم × العمق 18 سم",
    en: "32 cm height × 20 cm width × 18 cm depth",
    ku: "بەرزی 32 سم × پانی 20 سم × قووڵی 18 سم"
  },

  price: "240,000 د.ع",
  priceNumber: 240000,

  images: [
    cld("hoa-fine-267_adpogh")
  ],

  keywords: "تمثال خشبي انتيك, فن شرقي, تحف خشبية, اعمال فنية تقليدية, antique wooden figure, eastern art sculpture, museum display art, پەیکەری دارەکی ئانتیک"
},
{
  id: "HOA-FURN-239",

  category: { ar:"أثاث وديكور", en:"Furniture & Decor", ku:"کەلوپەلی ماڵ و دیکۆر" },

  name: {
    ar: "هاتف خشبي أنتيك بواجهة أزرار",
    en: "Antique Wooden Telephone with Keypad",
    ku: "تەلەفۆنی دارەکی ئانتیک بە دوگمەکان"
  },

  desc: {
    ar: "هاتف أنتيك مصنوع من الخشب المزخرف يدويًا، يتميز بقاعدة منحوتة بدقة وسماعة خشبية متناغمة مع التصميم العام، إضافة إلى واجهة أزرار تمنحه طابعًا بصريًا مميزًا يجمع بين الوظيفة القديمة والجمالية الفنية. تظهر على القطعة آثار الزمن بشكل متوازن يضيف لها قيمة تاريخية وديكورية. مناسبة للعرض المتحفي، المجموعات الخاصة، أو كقطعة ديكور فريدة في المساحات الكلاسيكية.",
    en: "An antique wooden telephone featuring hand-carved decorative patterns, a sculpted base, and a matching wooden handset, complemented by a keypad that adds a distinctive visual character. The piece shows balanced signs of age that enhance its historical and decorative value. Ideal for museum-style display, private collections, or as a unique decorative accent in classic interiors.",
    ku: "تەلەفۆنێکی دارەکی ئانتیک کە بە دەست نەقش کراوە، بنکەیەکی وردکاری کراو و دەستگێڕێکی هاوتا هەیە، لەگەڵ ڕووکاری دوگمەکان کە شێوەیەکی بینراوی جیاواز پێ دەدات. نیشانەکانی کات بە شێوەیەکی هاوسەنگ دیارن و بەهای مێژوویی و دیکۆری زیاد دەکەن. گونجاوە بۆ پیشاندانی مۆزەخانەیی، کۆمەڵگا تایبەتەکان یان وەک پارچەیەکی دیکۆری جیاواز لە شوێنە کلاسیکییەکان."
  },

  dimensions: {
    ar: "الطول 28 سم × العرض 22 سم × الارتفاع 18 سم",
    en: "28 cm length × 22 cm width × 18 cm height",
    ku: "درێژی 28 سم × پانی 22 سم × بەرزی 18 سم"
  },

  price: "360,000 د.ع",
  priceNumber: 360000,

  images: [
    cld("hoa-furn-239_rkmqhf")
  ],

  keywords: "هاتف انتيك خشبي, ديكور كلاسيكي, تحف تقنية قديمة, اثاث انتيك, antique wooden telephone, vintage phone decor, museum display decor, تەلەفۆنی دارەکی ئانتیک"
},
{
  id: "HOA-FURN-236",

  category: { ar:"أثاث وديكور", en:"Furniture & Decor", ku:"کەلوپەلی ماڵ و دیکۆر" },

  name: {
    ar: "طاولة كونسول أنتيك أصلية بخشب محفور يدويًا وسطح رخام",
    en: "Authentic Antique Console Table with Hand-Carved Wood and Marble Top",
    ku: "مێزی کۆنسۆڵی ئانتیکی ڕەسەن بە داری دەست‌نەقش‌کراو و سەطحی مەرمەری"
  },

  desc: {
    ar: "طاولة كونسول أنتيك أصلية تعود إلى الطراز الأوروبي الكلاسيكي، مصنوعة من خشب طبيعي صلب ومحفورة يدويًا بالكامل، مع سطح علوي من الرخام الطبيعي المصقول. يتميز الخشب بزخارف نباتية متقنة وأرجل منحنية بأسلوب يعكس مدارس الأثاث الفاخر في أواخر القرن التاسع عشر وبدايات القرن العشرين. تظهر على القطعة آثار الزمن الأصيلة التي تؤكد قدمها، مثل التآكل الطبيعي في الزوايا وعمق لون الخشب الناتج عن التعتيق الحقيقي، وليس المعالجة الحديثة. هذه القطعة لم تُصنع للزينة فقط، بل كانت جزءًا من أثاث بيوت راقية، وتُعد اليوم قطعة نادرة تجمع بين الحرفية العالية، المواد الثمينة، والقيمة التاريخية. مناسبة للمقتنين الجادين، عشاق الأنتيك، أو كقطعة مركزية فاخرة في المساحات الكلاسيكية الراقية.",
    en: "An authentic antique console table crafted in a classical European style, made from solid natural wood and entirely hand-carved, featuring a polished natural marble top. The table displays intricate floral carvings and elegantly curved legs, characteristic of fine furniture craftsmanship from the late 19th to early 20th century. Genuine signs of age are visible throughout the piece, including natural wear on edges and the deep patina of aged wood, confirming its authenticity rather than modern reproduction. Originally created as functional luxury furniture, it now stands as a rare collectible combining masterful craftsmanship, noble materials, and historical value. Ideal for serious collectors, antique enthusiasts, or as a refined statement piece in classic interiors.",
    ku: "مێزێکی کۆنسۆڵی ئانتیکی ڕەسەن بە شێوازی ئەورووپی کلاسیکی، لە داری سروشتی قەڵەو دروست کراو و بە تەواوی بە دەست نەقش کراوە، لەگەڵ سەطحێکی مەرمەری سروشتی. وردکارییە گیاهییەکان و قەدەغەی پێکان شێوازی ئەو مێزە نیشان دەدەن کە لە کۆتایی سەدەی نۆزدەهەم و سەرەتای سەدەی بیستەم دروست کراون. نیشانە ڕەسەنەکانی کات لەسەر پارچەکە دیارن، وەک قووڵبوونی ڕەنگی دار و فرسێکی سروشتی، کە ڕەسەنبوونی پێکەهاتەکە پشتڕاست دەکات. پارچەیەکی دەگمەنە کە هونەری دەستی، ماددەی گرانبەها و بەهای مێژوویی تێکەڵ دەکات."
  },

  dimensions: {
    ar: "الطول 160 سم × العرض 45 سم × الارتفاع 85 سم",
    en: "160 cm length × 45 cm width × 85 cm height",
    ku: "درێژی 160 سم × پانی 45 سم × بەرزی 85 سم"
  },

  price: "2,000,000 د.ع",
  priceNumber: 2000000,

  images: [
    cld("hoa-furn-236_qchajy")
  ],

  keywords: "طاولة كونسول انتيك, اثاث اوروبي قديم, طاولة رخام انتيك, خشب محفور يدوي, antique console table, marble top antique furniture, european antique table, مێزی ئانتیکی فاخەر"
},
{
  id: "HOA-FURN-242",

  category: { ar:"أثاث وديكور", en:"Furniture & Decor", ku:"کەلوپەلی ماڵ و دیکۆر" },

  name: {
    ar: "مصباح طاولة أنتيك بقاعدة خزفية مزخرفة",
    en: "Antique Table Lamp with Decorated Ceramic Base",
    ku: "چرای مێزی ئانتیک بە بنەمای خەزەفی نەقش‌دار"
  },

  desc: {
    ar: "مصباح طاولة أنتيك يتميز بقاعدة خزفية مزخرفة بزخارف نباتية ناعمة، منفذة بأسلوب يدوي يعكس الذوق الكلاسيكي في قطع الإضاءة القديمة. القاعدة مستقرة ومتناسبة مع غطاء قماشي تقليدي يمنح إضاءة دافئة ومريحة للعين. تظهر على القطعة آثار استخدام خفيفة وطبيعية تدل على قدمها وأصالتها دون أن تؤثر على جمالها أو وظيفتها. قطعة مناسبة للاستخدام اليومي أو كعنصر ديكوري أنيق في غرف الجلوس، المكاتب، أو زوايا القراءة ذات الطابع الكلاسيكي.",
    en: "An antique table lamp featuring a decorated ceramic base with soft floral motifs, crafted in a classic hand-finished style characteristic of vintage lighting pieces. The stable base is paired with a traditional fabric shade that provides warm, ambient lighting. Subtle signs of age and use are visible, confirming its authenticity while preserving both beauty and functionality. Suitable for daily use or as an elegant decorative accent in living rooms, offices, or classic reading corners.",
    ku: "چرای مێزی ئانتیک بە بنەمای خەزەفی نەقش‌دار و هێمای گیاهی نرمی، بە شێوازی دەستی کلاسیکی دروست کراوە. بنەماکە لەگەڵ سەرپۆشی قەماشی نەریتی گونجاوە کە ڕووناکییەکی گەرم و ئارام دابین دەکات. نیشانەی بەکارهێنانی سروشتی لەسەر پارچەکە دیارن و ڕەسەنبوونی پشتڕاست دەکەن، بەبێ ئەوەی لە جوانی یان کارکردی کەم بکەن. گونجاوە بۆ بەکارهێنانی ڕۆژانە یان وەک پارچەیەکی دیکۆری نازدار لە شوێنە کلاسیکییەکان."
  },

  dimensions: {
    ar: "الارتفاع 45 سم × قطر القاعدة 15 سم",
    en: "45 cm height × 15 cm base diameter",
    ku: "بەرزی 45 سم × قەطرى بنەما 15 سم"
  },

  price: "120,000 د.ع",
  priceNumber: 120000,

  images: [
    cld("hoa-furn-242_mqjps4")
  ],

  keywords: "مصباح انتيك, اباجورة قديمة, اضاءة كلاسيكية, ديكور انتيك, antique table lamp, vintage ceramic lamp, classic lighting decor, چرای مێزی ئانتیک"
},
{
  id: "HOA-FURN-245",

  category: { ar:"أثاث وديكور", en:"Furniture & Decor", ku:"کەلوپەلی ماڵ و دیکۆر" },

  name: {
    ar: "فاترينة عرض خشبية أنتيك محفورة يدويًا",
    en: "Antique Hand-Carved Wooden Display Cabinet",
    ku: "فاترینەی پیشاندانی دارەکی ئانتیکی دەست‌نەقش‌کراو"
  },

  desc: {
    ar: "فاترينة خشبية أنتيك أصلية صُممت لعرض القطع الثمينة والتحف، مصنوعة من خشب طبيعي صلب ومزخرفة بنقوش يدوية دقيقة تظهر بوضوح في التاج العلوي والأجزاء السفلية. تتميز الأبواب الزجاجية بإطارات خشبية متقنة تتيح رؤية واضحة للمحتويات مع الحفاظ عليها، ما يعكس وظيفتها الأصلية في بيوت النخبة والمجموعات الراقية. تظهر على الخشب طبقة تعتيق طبيعية وملمس زمني صادق يؤكد قدم القطعة وأصالتها، دون أي آثار تصنيع حديث. هذه الفاترينة ليست مجرد قطعة تخزين، بل عنصر متحفي بحد ذاته، مثالية لعرض التحف، الكريستال، الخزف أو المقتنيات النادرة، وتُعد اختيارًا مميزًا للمقتنين الجادين ومحبي الأنتيك الحقيقي.",
    en: "An authentic antique wooden display cabinet crafted to showcase valuable collectibles and fine objects. Made from solid natural wood and adorned with intricate hand-carved details, particularly visible in the ornate top crown and lower panels. The glass-fronted doors are framed with finely worked wood, allowing clear visibility while protecting the contents—reflecting its original use in refined homes and distinguished collections. The wood displays genuine age patina and natural wear, confirming its authenticity and historical character. More than a storage piece, this cabinet functions as a museum-quality display, ideal for antiques, crystal, porcelain, or rare collectibles.",
    ku: "فاترینەیەکی دارەکی ئانتیکی ڕەسەن کە بۆ پیشاندانی پارچە گرانبەها و کۆلێکشنە تایبەتەکان دروست کراوە. لە داری سروشتی قەڵەو ساز کراوە و بە وردکارییە دەستییەکان ڕازاوە، بە تایبەتی لە سەری سەرەوە و بەشەکانی خوارەوە. دەرگاکانی شیشەیی ڕووناکی تەواو بۆ ناوەوە دەدەن و هێشتا پاراستنی پارچەکان دڵنیا دەکەن، ئەمەش پیشانەی بەکارهێنانی لە ماڵە نازدارەکان و کۆمەڵگا تایبەتەکانە. نیشانە ڕەسەنەکانی کات لەسەر دارەکە دیارن و ڕەسەنبوونی پارچەکە پشتڕاست دەکەن. ئەم فاترینەیە پارچەیەکی مۆزەخانەییە و گونجاوە بۆ پیشاندانی تحف، کریستال، خەزەف یان کۆلێکشنە دەگمەنەکان."
  },

  dimensions: {
    ar: "الارتفاع 185 سم × العرض 95 سم × العمق 45 سم",
    en: "185 cm height × 95 cm width × 45 cm depth",
    ku: "بەرزی 185 سم × پانی 95 سم × قووڵی 45 سم"
  },

  price: "2,200,000 د.ع",
  priceNumber: 2200000,

  images: [
    cld("hoa-furn-245_qhnsy6")
  ],

  keywords: "فاترينة انتيك, خزانة عرض خشبية, اثاث اوروبي قديم, فاترينة تحف, antique display cabinet, wooden antique vitrine, museum display furniture, فاتەرینەی ئانتیک"
},
{
  id: "HOA-FURN-256",

  category: { ar:"أثاث وديكور", en:"Furniture & Decor", ku:"کەلوپەلی ماڵ و دیکۆر" },

  name: {
    ar: "هاتف أنتيك دوّار أسود",
    en: "Antique Black Rotary Telephone",
    ku: "تەلەفۆنی ئانتیک بە گەردی ڕەش"
  },

  desc: {
    ar: "هاتف أنتيك أصلي بتصميم دوّار كلاسيكي، يعكس مرحلة مهمة من تاريخ الاتصالات في القرن العشرين. يتميز بجسم متين بلون أسود عميق وسماعة متوازنة، مع قرص أرقام دوّار يعبّر عن الأسلوب العملي والبسيط لتلك الحقبة. تظهر على القطعة آثار استخدام طبيعية وخفيفة تضيف لها صدقًا تاريخيًا دون أن تنتقص من حضورها الجمالي. قطعة مثالية لهواة جمع التحف التقنية، أو كعنصر ديكور قوي يضفي طابعًا نوستالجيًا راقيًا على المكاتب والمساحات الكلاسيكية.",
    en: "An authentic antique rotary telephone with a classic black design, representing a significant era in the history of telecommunications during the 20th century. The solid black body, balanced handset, and rotary dial reflect the functional and minimalist design language of its time. Subtle signs of age and use are present, enhancing its historical authenticity without diminishing its visual appeal. Ideal for collectors of vintage technology or as a striking nostalgic accent in offices and classic interiors.",
    ku: "تەلەفۆنێکی ئانتیکی ڕەسەن بە شێوازی گەردی کلاسیکی، کە قۆناغێکی گرنگ لە مێژووی پەیوەندییەکان لە سەدەی بیستەم پیشان دەدات. جەستەی ڕەشی قەڵەو، دەستگێڕی هاوسەنگ و قرصی ژمارەی گەردی شێوازی سادە و کارامەی ئەو سەردەمە نیشان دەدەن. نیشانەی بەکارهێنانی سروشتی لەسەر دیارن و ڕەسەنبوونی پارچەکە زیاد دەکەن. گونجاوە بۆ کۆمەڵگا تایبەتەکانی تحفی تەکنەلۆژیا یان وەک پارچەیەکی نوستالژی نازدار لە شوێنە کلاسیکییەکان."
  },

  dimensions: {
    ar: "الطول 22 سم × العرض 20 سم × الارتفاع 18 سم",
    en: "22 cm length × 20 cm width × 18 cm height",
    ku: "درێژی 22 سم × پانی 20 سم × بەرزی 18 سم"
  },

  price: "199,000 د.ع",
  priceNumber: 199000,

  images: [
    cld("hoa-furn-256_r7yht3")
  ],

  keywords: "هاتف انتيك, هاتف دوار قديم, تحف تقنية, ديكور نوستالجي, antique rotary telephone, vintage phone decor, classic communication device, تەلەفۆنی ئانتیک"
},
{
  id: "HOA-FURN-252",

  category: { ar:"أثاث وديكور", en:"Furniture & Decor", ku:"کەلوپەلی ماڵ و دیکۆر" },

  name: {
    ar: "زوج كراسي أنتيك بطراز أوروبي كلاسيكي",
    en: "Pair of Antique Chairs in Classical European Style",
    ku: "دوو کورسی ئانتیک بە شێوازی ئەورووپی کلاسیکی"
  },

  desc: {
    ar: "زوج كراسي أنتيك أصلية تعكس الطراز الأوروبي الكلاسيكي في الأثاث المنزلي الراقي. صُنعت الهياكل من الخشب الصلب مع انحناءات ناعمة في الأرجل ومسند الظهر، ما يدل على حرفية يدوية عالية تعود لفترة كان فيها الأثاث يُصنع ليجمع بين الراحة والفخامة. القماش المستخدم ذو طابع كلاسيكي متناغم مع لون الخشب، ويظهر عليه أثر الزمن الطبيعي الذي يضيف قيمة وأصالة دون أن ينتقص من جمال القطعة. هذه الكراسي لم تكن قطع استخدام يومي عابر، بل جزءًا من غرف استقبال رسمية في بيوت راقية، وتُعد اليوم خيارًا مثاليًا للمقتنين ومحبي الأثاث الأنتيك الحقيقي، سواء للعرض أو للاستخدام الخفيف.",
    en: "A pair of authentic antique chairs reflecting the elegance of classical European furniture design. Crafted from solid wood with graceful curves in the legs and backrest, showcasing fine hand craftsmanship from a time when furniture was created to balance comfort and refinement. The upholstered fabric carries a classic character that harmonizes with the wood tone, displaying natural signs of age that enhance authenticity without detracting from visual appeal. Originally intended for formal sitting rooms, these chairs are now ideal for collectors and enthusiasts of genuine antique furniture, whether for display or light use.",
    ku: "دوو کورسییەکی ئانتیکی ڕەسەن کە شێوازی کلاسیکی ئەورووپی لە فەرشی ماڵە نازدارەکان پیشان دەدەن. هێکلەکان لە داری قەڵەو دروست کراون و هێڵ و قەدەغەی نرمی لە پێکان و پشتەوەیان هەیە، کە هونەری دەستی بەرز نیشان دەدات. قەماشەکە گونجاوە بە ڕەنگی دار و نیشانەی کات بە شێوەیەکی سروشتی لەسەر دیارە، کە ڕەسەنبوونی پارچەکان زیاد دەکات. ئەم کورسیانە لە بنەڕەتدا بۆ ژووری پێشوازی فەرمی دروست کراون و ئەمڕۆ گونجاون بۆ کۆمەڵگا تایبەتەکان و خۆشەویستانی فەرشی ئانتیکی ڕاستەقینە."
  },

  dimensions: {
    ar: "الارتفاع 95 سم × العرض 65 سم × العمق 70 سم (للكرسي الواحد)",
    en: "95 cm height × 65 cm width × 70 cm depth (per chair)",
    ku: "بەرزی 95 سم × پانی 65 سم × قووڵی 70 سم (بۆ هەر کورسییەک)"
  },

  price: "750,000 د.ع",
  priceNumber: 750000,

  images: [
    cld("hoa-furn-252_coggct")
  ],

  keywords: "زوج كراسي انتيك, كراسي اوروبية قديمة, اثاث كلاسيكي, فurniture antique chairs, antique european chairs, classic seating furniture, کورسی ئانتیک"
},
{
  id: "HOA-FURN-266",

  category: { ar:"أثاث وديكور", en:"Furniture & Decor", ku:"کەلوپەلی ماڵ و دیکۆر" },

  name: {
    ar: "قاطع خشبي أنتيك محفور يدويًا بطابع شرقي",
    en: "Antique Hand-Carved Wooden Room Divider in Eastern Style",
    ku: "پارتیشنی دارەکی ئانتیکی دەست‌نەقش‌کراو بە شێوازی ڕۆژهەڵاتی"
  },

  desc: {
    ar: "قاطع خشبي أنتيك أصلي مصنوع من خشب طبيعي صلب ومحفور يدويًا بزخارف هندسية ونباتية دقيقة تعكس الطابع الشرقي الكلاسيكي. يتكوّن من عدة ألواح متصلة تتيح استخدامه كفاصل للمساحات أو كعنصر ديكوري مستقل، مع تفاصيل حفر متقنة تمتد من الأعلى إلى الأسفل وتُظهر مهارة حرفية عالية. تظهر على الخشب طبقة تعتيق طبيعية وملمس زمني صادق يؤكد قدم القطعة وأصالتها دون أي تدخل حديث. هذا القاطع لم يُصنع كقطعة تجميلية فقط، بل كان جزءًا من فضاءات معيشة راقية، ويُعد اليوم قطعة نادرة ذات قيمة فنية ووظيفية، مناسبة للمقتنين الجادين، البيوت التراثية، أو المساحات التي تبحث عن حضور بصري قوي وهوية ثقافية واضحة.",
    en: "An authentic antique wooden room divider crafted from solid natural wood and entirely hand-carved with intricate geometric and floral motifs reflecting a classical Eastern aesthetic. Composed of multiple connected panels, it can function as a space divider or as a standalone decorative statement. The finely executed carvings run throughout the structure, showcasing exceptional craftsmanship. The wood bears a genuine aged patina and natural wear that confirm its authenticity and historical character. Originally designed for refined living spaces, this divider is now a rare collectible combining artistic value, functionality, and strong cultural presence.",
    ku: "پارتیشنێکی دارەکی ئانتیکی ڕەسەن لە داری سروشتی قەڵەو دروست کراوە و بە تەواوی بە دەست نەقش کراوە، بە هێما هندسی و گیاهییە وردەکان کە شێوازی ڕۆژهەڵاتی کلاسیکی پیشان دەدەن. لە چەند پانێڵێکی پێکەوە گرێدراو پێکهاتووە و دەتوانرێت وەک قاطع بۆ دابەشکردنی شوێن یان وەک پارچەیەکی دیکۆری سەربەخۆ بەکاربهێنرێت. نیشانە ڕەسەنەکانی کات و ڕەنگی قووڵی دار ڕەسەنبوونی پارچەکە پشتڕاست دەکەن. ئەم پارتیشنە لە بنەڕەتدا بۆ شوێنە نازدارەکانی ژیان دروست کراوە و ئەمڕۆ پارچەیەکی دەگمەنە کە هونەری، کارایی و ناسنامەی کەلتووری تێکەڵ دەکات."
  },

  dimensions: {
    ar: "الارتفاع 180 سم × العرض الكلي 220 سم × العمق 4 سم",
    en: "180 cm height × 220 cm total width × 4 cm depth",
    ku: "بەرزی 180 سم × پانی گشتی 220 سم × قووڵی 4 سم"
  },

  price: "1,100,000 د.ع",
  priceNumber: 1100000,

  images: [
    cld("hoa-furn-266_zxupsl")
  ],

  keywords: "قاطع خشبي انتيك, بارتيشن خشب محفور, ديكور شرقي, فاصل غرف تراثي, antique wooden divider, hand carved room screen, eastern wood screen, پارتیشنی دارەکی ئانتیک"
},
{
  id: "HOA-SLV-259",

  category: { ar:"فضة", en:"Silver", ku:"زیوەر و پارچەی زیوی" },

  name: {
    ar: "حافظة سجائر فضية أنتيك",
    en: "Antique Silver Cigarette Case",
    ku: "قابێکی جگەرەی زیوی ئانتیک"
  },

  desc: {
    ar: "حافظة سجائر أنتيك مصنوعة من الفضة، تعود إلى أوائل القرن العشرين، وتتميز بتصميم هندسي بسيط يعكس الذوق الأوروبي الكلاسيكي في تلك الفترة. يظهر على سطح القطعة أثر التقادم الطبيعي (Patina) الذي يمنحها طابعًا أصيلًا ويؤكد قدمها دون أي مبالغة أو ترميم مفرط. الغطاء المفصلي محكم الصنع، والداخل مبطن بحوامل أصلية لحفظ السجائر بشكل منظم، وهو تفصيل يدل على جودة الصناعة ودقتها. كانت مثل هذه الحافظات تُستخدم كقطعة شخصية يومية لدى النخب والطبقات الراقية، وتُعد اليوم قطعة نادرة لهواة جمع الفضة والتحف الشخصية، سواء للعرض المتحفي أو الاقتناء الخاص.",
    en: "An antique silver cigarette case dating back to the early 20th century, featuring a minimalist geometric design characteristic of classic European taste of the era. The surface shows an authentic aged patina that confirms its originality without excessive restoration. The hinged lid is well-crafted, and the interior retains its original cigarette holders, reflecting fine craftsmanship and attention to detail. Such cases were once personal accessories among the upper classes and are now highly collectible silver antiques, ideal for museum display or refined private collections.",
    ku: "قابێکی جگەرەی زیوی ئانتیک کە دەگەڕێتەوە بۆ سەرەتای سەدەی بیستەمی زایینی، بە دیزاینێکی سادە و ئەندازیارانە کە گونجاوە لەگەڵ سلیقەی ئەورووپی ئەو سەردەمە. نیشانەکانی کۆنبوونەوەی سروشتی (Patina) لەسەری دیارن و ڕەسەنبوونی پارچەکە پشتڕاست دەکەن. ناوەوەکە هێشتا پارچەکانی ڕەسەنی بۆ گرتنی جگەرەکان هەیە، کە نیشانەی کوالێتی و وردکاریی پیشەسازییە. ئەم جۆر پارچانە ئێستا دەبن بە تحفێکی دەگمەن بۆ کۆکراوەی زیو و دەتوانرێن بۆ پیشاندانی مۆزەخانەیی یان کۆکراوە تایبەتی بەکاربهێنرێن."
  },

  dimensions: {
    ar: "الطول 12 سم × العرض 8 سم × الارتفاع 2 سم",
    en: "12 cm length × 8 cm width × 2 cm height",
    ku: "درێژی 12 سم × پانی 8 سم × بەرزی 2 سم"
  },

  price: "800,000 د.ع",
  priceNumber: 800000,

  images: [
    cld("hoa-slv-259_n98yyo"),
    cld("hoa-slv-259-1_un22ut")
  ],

  keywords: "حافظة سجائر فضة, انتيك فضي, تحف شخصية, مقتنيات قديمة, antique silver cigarette case, vintage silver accessories, زیوی ئانتیک"
},
{
  id: "HOA-VAS-234",

  category: { ar:"فازات", en:"Vases", ku:"ڤازەکان" },

  name: {
    ar: "فازة فخارية أنتيك بزخارف هندسية",
    en: "Antique Terracotta Vase with Geometric Motifs",
    ku: "ڤازەیەکی فەخاری ئانتیک بە نەخشە ئەندازیارەکان"
  },

  desc: {
    ar: "فازة فخارية أنتيك مصنوعة يدويًا من الطين الطبيعي، تتميز بشكلها التقليدي المتوازن ومقبضين جانبيين يضفيان عليها طابعًا تراثيًا واضحًا. الزخارف الهندسية المحفورة يدويًا، مع الفتحات الزخرفية الموزعة حول الجسم، تعكس أسلوب الصناعات الفخارية القديمة التي كانت تجمع بين الجمال والوظيفة، خصوصًا في مناطق الشرق الأدنى وحوض البحر المتوسط. يظهر على القطعة أثر الزمن الطبيعي الذي يؤكد قدمها وأصالتها دون أي تدخل حديث. تُعد هذه الفازة قطعة مثالية للعرض المتحفي أو كعنصر ديكوري راقٍ يضيف روح التاريخ والحِرفة اليدوية إلى أي مساحة.",
    en: "A hand-crafted antique terracotta vase made from natural clay, featuring a balanced traditional form with two side handles that enhance its heritage character. The hand-carved geometric motifs and decorative perforations around the body reflect ancient ceramic traditions that combined beauty and function, particularly in the Near East and Mediterranean regions. Natural signs of aging are visible, confirming its authenticity without modern intervention. An ideal piece for museum-style display or as a refined decorative element that brings historical depth and craftsmanship to any interior.",
    ku: "ڤازەیەکی فەخاری ئانتیک کە بە دەست دروستکراوە لە خاکی سروشتی، بە شێوەیەکی هاوسەنگ و دوو دەستەی لاوەکی کە تایبەتمەندییەکی تراثی بەرچاو پێ دەدات. نەخشە ئەندازیارەکان و کردنەوەی ڕازاوەکان لەسەر جەستەکە نیشانەی هونەری فەخارییە کۆنەکانن کە جوانی و سوودبەخشیان پێکەوە کۆکردووە، تایبەتمەند لە ناوچەکانی ڕۆژهەڵاتی ناوەڕاست و دەریای ناوەڕاست. نیشانەکانی کات ڕەسەنبوونی پارچەکە پشتڕاست دەکەن و بۆ پیشاندانی مۆزەخانەیی یان دیکۆری کلاسیکی گونجاوە."
  },

  dimensions: {
    ar: "الارتفاع 45 سم × العرض 28 سم",
    en: "45 cm height × 28 cm width",
    ku: "بەرزی 45 سم × پانی 28 سم"
  },

  price: "360,000 د.ع",
  priceNumber: 360000,

  images: [
    cld("hoa-vas-234_pq4tyi")
  ],

  keywords: "فازة فخارية انتيك, فخار قديم, زخارف هندسية, تحف تراثية, antique terracotta vase, geometric pottery, فەخار ئانتیک"
},
{
  id: "HOA-WOOD-265",

  category: { ar:"خشب", en:"Wood", ku:"دار" },

  name: {
    ar: "ستاند قرآن خشبي أنتيك مطعّم يدويًا",
    en: "Antique Wooden Quran Stand with Hand Inlay",
    ku: "ستاندی قورئانی دارەیی ئانتیک بە تێکچوونی دەستی"
  },

  desc: {
    ar: "ستاند قرآن خشبي أنتيك مصنوع يدويًا بعناية فائقة من خشب طبيعي، ومطعّم بزخارف هندسية دقيقة بأسلوب تقليدي يعكس فنون الصناعات الخشبية الإسلامية. التصميم القابل للطي يوازن بين الوظيفة العملية والجمال الفني، بينما يظهر التطعيم اليدوي والحفر المتقن على السطحين العلوي والسفلي مستوى عالٍ من الحِرفة. آثار الزمن الطبيعية تؤكد قدم القطعة وأصالتها دون أي ترميم حديث أو تدخل معاصر. تُعد هذه القطعة مخصصة لعرض المصحف الشريف باحترام، كما تصلح للعرض المتحفي أو للاقتناء ضمن مجموعات التحف الإسلامية النادرة.",
    en: "An antique wooden Quran stand, meticulously hand-crafted from natural wood and inlaid with fine geometric patterns reflecting traditional Islamic woodworking arts. The foldable design combines functional use with refined aesthetics, while the detailed hand inlay and carving on both upper and lower surfaces demonstrate a high level of craftsmanship. Natural signs of aging confirm the piece’s authenticity without modern restoration. Ideal for respectfully holding the Holy Quran, as well as for museum display or inclusion in a distinguished Islamic antique collection.",
    ku: "ستاندی قورئانی دارەیی ئانتیک کە بە وردی بە دەست دروستکراوە لە دارە سروشتییەکان و بە نەخشە ئەندازیارەکان تێکچووە کە هونەری دارکاری ئیسلامی پیشان دەدات. دیزاینی تێکچوونەوەیی نێوان سوودبەخشی و جوانی هاوسەنگ دەکات، و وردەکارییەکانی تێکچوون و حەفرکردن ئاستی بەرزی حِرفە پیشان دەدەن. نیشانە سروشتییەکانی کات ڕەسەنبوونی پارچەکە پشتڕاست دەکەن. گونجاوە بۆ دانانی قورئانی پیرۆز بە ڕێز و بۆ پیشاندانی مۆزەخانەیی یان کۆمەڵەی تحفە ئیسلامییە دەگمەنەکان."
  },
   status: "available",
  dimensions: {
    ar: "الطول 55 سم × العرض 30 سم",
    en: "55 cm length × 30 cm width",
    ku: "درێژی 55 سم × پانی 30 سم"
  },
  price: "1,200,000 د.ع",
  priceNumber: 1200000,

  images: [
    cld("hoa-wood-265_ns1wr1")
  ],

  keywords: "ستاند قرآن خشبي, رحل قرآن انتيك, تحف اسلامية, خشب مطعّم, antique quran stand, islamic wooden stand, ڕەحڵی قورئان"
},
{
  id: "HOA-WOOD-267",

  category: { ar:"خشب", en:"Wood", ku:"دار" },

  name: {
    ar: "طاولة خشبية أنتيك بتصميم بسيط",
    en: "Antique Wooden Side Table with Minimal Design",
    ku: "مێزێکی دارەیی ئانتیک بە دیزاینی سادە"
  },

  desc: {
    ar: "طاولة خشبية أنتيك مصنوعة يدويًا من قطعة خشب صلبة واحدة تقريبًا، تتميز بتصميمها البسيط والمتوازن الذي يركز على الشكل والوظيفة دون زخرفة مفرطة. يظهر على سطحها وجوانبها أثر الاستخدام والزمن الطبيعي، ما يعكس قدمها وأصالتها ويمنحها حضورًا هادئًا وأنيقًا. هذا النوع من الطاولات كان يُستخدم تقليديًا كطاولة جانبية أو قاعدة لعرض القطع الفنية والتحف، وهي اليوم قطعة مثالية للعرض المتحفي أو للاستخدام ضمن ديكور كلاسيكي أو معاصر يقدّر المواد الطبيعية والحِرفة اليدوية.",
    en: "An antique wooden side table, hand-crafted from solid wood with a restrained and balanced design that emphasizes form and function over ornamentation. Natural signs of age and use are visible on the surface and sides, reflecting its authenticity and historical character. Traditionally used as a side table or a base for displaying art and objects, this piece is ideal for museum-style presentation or for use in both classic and contemporary interiors that value natural materials and craftsmanship.",
    ku: "مێزێکی دارەیی ئانتیک کە بە دەست دروستکراوە لە دارەیەکی قەڵەو، بە دیزاینێکی هاوسەنگ و سادە کە گرنگی بە شێوە و سوودبەخشی دەدات. نیشانەکانی کات و بەکارهێنانی سروشتی لەسەر ڕوو و لاکان دیارن و ڕەسەنبوونی پارچەکە پیشان دەدەن. ئەم جۆرە مێزانە بە شێوەیەکی باو بەکاردەهاتوون وەک مێزی لاوەکی یان بنەمای پیشاندانی هونەر، و ئێستا گونجاون بۆ دیکۆری کلاسیکی یان هاوچەرخ."
  },

  dimensions: {
    ar: "الارتفاع 70 سم × العرض 40 سم",
    en: "70 cm height × 40 cm width",
    ku: "بەرزی 70 سم × پانی 40 سم"
  },

  price: "300,000 د.ع",
  priceNumber: 300000,

  images: [
    cld("hoa-wood-267_t7e00b")
  ],

  keywords: "طاولة خشبية انتيك, مائدة جانبية قديمة, تحف خشبية, wooden antique table, side table, مێزی دارەیی ئانتیک"
},
];

window.PRODUCTS = PRODUCTS;
console.log("✅ products.js loaded:", PRODUCTS.length);
