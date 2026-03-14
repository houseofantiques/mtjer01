"use strict";

if (!window.PRODUCTS) {
  window.PRODUCTS = [];
}

const PRODUCTS_EXTRA = [
{
  id: "HOA-ART-351",

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  name: {
    ar: "سعد التميمي — رسم مائي على ورق",
    en: "Saad Al-Tamimi — Watercolor on Paper",
    ku: "Saad Al-Tamimi — Watercolor Drawing"
  },

  artist: "سعد التميمي",

  year: "",

  dimensions: {
    ar: "الارتفاع: 50 سم — العرض: 25 سم",
    en: "Height: 50 cm — Width: 25 cm",
    ku: "بەرزی: 50 سم — پانی: 25 سم"
  },

  desc: {
    ar: "عمل فني أصلي موقّع للفنان سعد التميمي منفذ بالألوان المائية والحبر على الورق. يعتمد التكوين على معالجة تعبيرية للمشهد باستخدام ضربات لونية سريعة وخطوط إنشائية واضحة تعطي إحساساً بالحركة والعمق داخل الفضاء المعماري للوحة. العمل يحمل طابعاً تجريبياً يجمع بين الرسم والخط البنائي، ما يمنحه حضوراً بصرياً قوياً ضمن الأعمال الورقية المعاصرة.",

    en: "An original signed artwork by Saad Al-Tamimi executed in watercolor and ink on paper. The composition uses expressive brushwork and structural lines to create a dynamic spatial scene. The work reflects an experimental approach that merges drawing and painterly gesture, giving the piece a strong visual presence among contemporary works on paper.",

    ku: "ئەم کارە هونەرییە تابلۆیەکی ڕەسەنی واژووکراوی Saad Al-Tamimi ـە کە بە ڕەنگی ئاوی و حەبر لەسەر کاغەز دروستکراوە. شێوازی کارەکە هەستێکی جوڵە و قووڵی لە ناو پێکهاتەی تابلۆکەدا دروست دەکات."
  },

  price: "950,000 د.ع",
  priceNumber: 950000,

  images: [
    cld("hoa-art-351_j960kq")
  ],

  keywords: "سعد التميمي, لوحة فنية, فن عراقي, رسم مائي, watercolor artwork, saad tamimi"
},
{
  id: "HOA-ART-352",

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  name: {
    ar: "سعد — رسم مائي على ورق",
    en: "Saad — Watercolor on Paper",
    ku: "Saad — Watercolor Drawing"
  },

  artist: "سعد",

  year: "",

  dimensions: {
    ar: "الارتفاع: 32 سم — العرض: 26 سم",
    en: "Height: 32 cm — Width: 26 cm",
    ku: "بەرزی: 32 سم — پانی: 26 سم"
  },

  desc: {
    ar: "عمل فني أصلي موقّع للفنان سعد منفذ بالألوان المائية على الورق. يظهر في اللوحة بورتريه لرجل بملابس تقليدية بأسلوب تعبيري يعتمد على ضربات فرشاة سريعة ودرجات لونية دافئة تمنح الشخصية حضوراً هادئاً وإنسانياً. العمل مثال جميل على دراسة الشخصية في الرسم المائي.",

    en: "An original signed artwork by Saad executed in watercolor on paper. The composition presents a portrait of a man in traditional clothing rendered with expressive brushwork and warm earthy tones. The painting reflects a sensitive study of character typical of watercolor portrait sketches.",

    ku: "ئەم تابلۆیە کارێکی هونەری ڕەسەنەیە بە ڕەنگی ئاوی لەسەر کاغەز کە وێنەی پیاوێک بە جلوبەرگی کۆن پیشان دەدات."
  },

  price: "850,000 د.ع",
  priceNumber: 850000,

  images: [
    cld("hoa-art-352_hhqu68")
  ],

  /* الحقول الجديدة لنظام التشابه */

  palette: ["brown","beige","earth","black","warm"],
  tone: "warm",

  medium: "watercolor on paper",

  subject: "portrait",

  keywords: "سعد, لوحة بورتريه, فن عراقي, رسم مائي, portrait watercolor, iraqi art"
},
{
  id: "HOA-ART-353",

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  name: {
    ar: "سعد — رسم مائي على ورق",
    en: "Saad — Watercolor on Paper",
    ku: "Saad — Watercolor Drawing"
  },

  artist: "سعد",

  year: "",

  dimensions: {
    ar: "الارتفاع: 26 سم — العرض: 18 سم",
    en: "Height: 26 cm — Width: 18 cm",
    ku: "بەرزی: 26 سم — پانی: 18 سم"
  },

  desc: {
    ar: "عمل فني أصلي موقّع للفنان سعد منفذ بالألوان المائية على الورق. يظهر في اللوحة بورتريه لرجل بلحية داكنة ضمن فضاء معماري مضاء بضوء دافئ، مع معالجة حرة للون والظل تمنح الوجه عمقاً تعبيرياً واضحاً. العمل مثال على دراسة شخصية بأسلوب الرسم المائي السريع.",

    en: "An original signed watercolor on paper by Saad. The composition presents a portrait of a bearded man set within an architectural interior illuminated by warm light. Expressive brushwork and layered watercolor washes create depth and atmosphere.",

    ku: "تابلۆیەکی ڕەسەنی واژووکراوی Saad کە بە ڕەنگی ئاوی لەسەر کاغەز دروستکراوە و وێنەی پیاوێکی ریشدار لە ناو فەزایەکی بینایی پیشان دەدات."
  },

  price: "770,000 د.ع",
  priceNumber: 770000,

  images: [
    cld("hoa-art-353_fefe5d"),
    cld("hoa-art-353-1_ksuyya")
  ],

  /* metadata لتحسين نظام التشابه */

  palette: ["brown","dark","gold","beige","warm"],
  tone: "warm",

  medium: "watercolor on paper",

  subject: "portrait",

  keywords: "سعد التميمي, لوحة بورتريه, فن عراقي, رسم مائي, watercolor portrait, iraqi art"
},
{
  id: "HOA-ART-354",

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  name: {
    ar: "سعيد — رسم مائي على ورق",
    en: "Saeed — Watercolor on Paper",
    ku: "Saeed — Watercolor Drawing"
  },

  artist: "سعيد",

  year: "",

  dimensions: {
    ar: "الارتفاع: 36 سم — العرض: 28 سم",
    en: "Height: 36 cm — Width: 28 cm",
    ku: "بەرزی: 36 سم — پانی: 28 سم"
  },

  desc: {
    ar: "عمل فني أصلي موقّع للفنان سعيد منفذ بالألوان المائية على الورق. يظهر في اللوحة مشهد لشخص يقف على شاطئ البحر في تكوين هادئ يعتمد على ضربات فرشاة خفيفة ومساحات لونية واسعة تعكس أجواء الطبيعة الساحلية والضوء الطبيعي.",

    en: "An original signed watercolor on paper by Saeed. The painting presents a quiet coastal scene with a solitary figure standing on the beach, rendered with loose brushwork and soft watercolor washes capturing the atmosphere of sea and sky.",

    ku: "تابلۆیەکی ڕەسەنی واژووکراوی Saeed کە بە ڕەنگی ئاوی لەسەر کاغەز دروستکراوە و دیمەنێکی کەناری دەریا پیشان دەدات."
  },

  price: "580,000 د.ع",
  priceNumber: 580000,

  images: [
    cld("hoa-art-354_lfnb0k"),
    cld("hoa-art-354-1_snlu9h")
  ],

  /* metadata لنظام التشابه */

  palette: ["beige","brown","blue","earth","warm"],
  tone: "warm",

  medium: "watercolor on paper",

  subject: "landscape",

  keywords: "سعيد, لوحة طبيعة, رسم مائي, منظر بحري, watercolor landscape, iraqi art"
},
{
  id: "HOA-ART-355",

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  name: {
    ar: "سعيد — رسم مائي على ورق",
    en: "Saeed — Watercolor on Paper",
    ku: "Saeed — Watercolor Drawing"
  },

  artist: "سعيد",

  year: "",

  dimensions: {
    ar: "الارتفاع: 30 سم — العرض: 25 سم",
    en: "Height: 30 cm — Width: 25 cm",
    ku: "بەرزی: 30 سم — پانی: 25 سم"
  },

  desc: {
    ar: "عمل فني أصلي موقّع للفنان سعيد منفذ بالألوان المائية على الورق. تصور اللوحة مجموعة من الخيول في مشهد طبيعي مفتوح بأسلوب حر يعتمد على ضربات فرشاة سريعة ومساحات لونية شفافة تعكس حركة القطيع وأجواء الطبيعة.",

    en: "An original signed watercolor on paper by Saeed. The painting depicts a group of horses moving through an open landscape rendered with loose brushwork and soft watercolor washes that convey motion and atmosphere.",

    ku: "تابلۆیەکی ڕەسەنی واژووکراوی Saeed کە بە ڕەنگی ئاوی لەسەر کاغەز دروستکراوە و دیمەنێکی سروشتی لەگەڵ گروپی ئەسپ پیشان دەدات."
  },

  price: "1,000,000 د.ع",
  priceNumber: 1000000,

  images: [
    cld("hoa-art-355_znm90x")
  ],

  /* metadata لنظام التشابه */

  palette: ["brown","beige","earth","warm"],
  tone: "warm",

  medium: "watercolor on paper",

  subject: "animals",

  keywords: "سعيد, لوحة خيول, رسم مائي, فن عراقي, watercolor horses, iraqi art"
},
{
  id: "HOA-ART-356",

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  name: {
    ar: "سعيد — رسم مائي على ورق",
    en: "Saeed — Watercolor on Paper",
    ku: "Saeed — Watercolor Drawing"
  },

  artist: "سعيد",

  year: "2008",

  dimensions: {
    ar: "الارتفاع: 36 سم — العرض: 25 سم",
    en: "Height: 36 cm — Width: 25 cm",
    ku: "بەرزی: 36 سم — پانی: 25 سم"
  },

  desc: {
    ar: "عمل فني أصلي موقّع للفنان سعيد مؤرخ عام 2008، منفذ بالألوان المائية على الورق. تصور اللوحة امرأة تعزف الكمان في تكوين تعبيري يعتمد على ضربات فرشاة حرة ودرجات لونية دافئة تمنح المشهد إحساساً بالحركة والموسيقى.",

    en: "An original signed watercolor on paper by Saeed dated 2008. The composition depicts a woman playing the violin, rendered with expressive brushwork and warm tonal washes that convey movement and musical atmosphere.",

    ku: "تابلۆیەکی ڕەسەنی واژووکراوی Saeed لە ساڵی 2008 بە ڕەنگی ئاوی لەسەر کاغەز دروستکراوە و ژنێک کە کەمان دەژەنێت پیشان دەدات."
  },

  price: "995,000 د.ع",
  priceNumber: 995000,

  images: [
    cld("hoa-art-356_ygbvry")
  ],

  /* metadata لنظام التشابه */

  palette: ["brown","beige","earth","warm","red"],
  tone: "warm",

  medium: "watercolor on paper",

  subject: "figure",

  keywords: "سعيد, لوحة موسيقى, عازفة كمان, رسم مائي, watercolor figure, iraqi art"
},
{
  id: "HOA-ART-357",

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  name: {
    ar: "سعيد — رسم مائي على ورق",
    en: "Saeed — Watercolor on Paper",
    ku: "Saeed — Watercolor Drawing"
  },

  artist: "سعيد",

  year: "2012",

  dimensions: {
    ar: "الارتفاع: 26 سم — العرض: 18 سم",
    en: "Height: 26 cm — Width: 18 cm",
    ku: "بەرزی: 26 سم — پانی: 18 سم"
  },

  desc: {
    ar: "عمل فني أصلي موقّع للفنان سعيد ومؤرخ عام 2012، منفذ بالألوان المائية على الورق. تصور اللوحة شخصية بدوية تقف في فضاء صحراوي واسع مع عناصر معمارية بعيدة في الأفق، بأسلوب تعبيري يعتمد على ضربات لونية حرة ومساحات ضوئية دافئة.",

    en: "An original signed watercolor on paper by Saeed dated 2012. The composition depicts a solitary figure in a desert landscape with distant architectural forms on the horizon, rendered with loose expressive watercolor washes and warm earthy tones.",

    ku: "تابلۆیەکی ڕەسەنی واژووکراوی Saeed لە ساڵی 2012 بە ڕەنگی ئاوی لەسەر کاغەز دروستکراوە و کەسێک لە ناو دیمەنێکی بیابانی پیشان دەدات."
  },

  price: "800,000 د.ع",
  priceNumber: 800000,

  images: [
    cld("hoa-art-357_asrbvb")
  ],

  /* metadata لنظام التشابه */

  palette: ["brown","beige","earth","warm","green"],
  tone: "warm",

  medium: "watercolor on paper",

  subject: "figure",

  keywords: "سعيد التميمي, لوحة بدوية, رسم مائي, منظر صحراوي, watercolor landscape, iraqi art"
},
{
  id: "HOA-ART-358",

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  name: {
    ar: "سعيد — رسم مائي على ورق",
    en: "Saeed — Watercolor on Paper",
    ku: "Saeed — Watercolor Drawing"
  },

  artist: "سعيد",

  year: "2012",

  dimensions: {
    ar: "الارتفاع: 26 سم — العرض: 18 سم",
    en: "Height: 26 cm — Width: 18 cm",
    ku: "بەرزی: 26 سم — پانی: 18 سم"
  },

  desc: {
    ar: "عمل فني أصلي موقّع للفنان سعيد ومؤرخ عام 2012، منفذ بالألوان المائية على الورق. تصور اللوحة شخصية جالسة وسط مشهد طبيعي أخضر في ضوء دافئ، بأسلوب حر يعتمد على ضربات فرشاة سريعة ومساحات لونية شفافة تعكس أجواء الطبيعة.",

    en: "An original signed watercolor on paper by Saeed dated 2012. The composition depicts a seated figure within a lush natural landscape rendered with loose expressive watercolor washes and warm atmospheric tones.",

    ku: "تابلۆیەکی ڕەسەنی واژووکراوی Saeed لە ساڵی 2012 بە ڕەنگی ئاوی لەسەر کاغەز دروستکراوە و کەسێک لە ناو دیمەنێکی سروشتی پیشان دەدات."
  },

  price: "850,000 د.ع",
  priceNumber: 850000,

  images: [
    cld("hoa-art-358_xdcpit")
  ],

  /* metadata لنظام التشابه */

  palette: ["green","brown","earth","warm","beige"],
  tone: "warm",

  medium: "watercolor on paper",

  subject: "figure",

  keywords: "سعيد التميمي, لوحة طبيعة, رسم مائي, منظر طبيعي, watercolor landscape, iraqi art"
},
{
  id: "HOA-ART-359",

  category: {
    ar: "لوحات",
    en: "Paintings",
    ku: "تابلۆکان"
  },

  name: {
    ar: "سعيد — رسم مائي على ورق",
    en: "Saeed — Watercolor on Paper",
    ku: "Saeed — Watercolor Drawing"
  },

  artist: "سعيد",

  year: "",

  dimensions: {
    ar: "الارتفاع: 32 سم — العرض: 24 سم",
    en: "Height: 32 cm — Width: 24 cm",
    ku: "بەرزی: 32 سم — پانی: 24 سم"
  },

  desc: {
    ar: "عمل فني أصلي موقّع للفنان سعيد منفذ بالألوان المائية على الورق. تصور اللوحة مشهداً تعبيرياً لشخصية إنسانية داخل فضاء معماري مضاء بضوء دافئ، مع معالجة لونية حرة وضربات فرشاة سريعة تعطي إحساساً بالحركة والدراما.",

    en: "An original signed watercolor on paper by Saeed. The painting depicts a dramatic figurative scene set within an architectural environment, rendered with loose expressive brushwork and warm atmospheric tones.",

    ku: "تابلۆیەکی ڕەسەنی واژووکراوی Saeed بە ڕەنگی ئاوی لەسەر کاغەز کە دیمەنێکی مرۆڤی لە ناو فەزایەکی بینایی پیشان دەدات."
  },

  price: "750,000 د.ع",
  priceNumber: 750000,

  images: [
    cld("hoa-art-359_wxhvhi")
  ],

  /* metadata لنظام التشابه */

  palette: ["brown","beige","gold","earth","warm"],
  tone: "warm",

  medium: "watercolor on paper",

  subject: "figure",

  keywords: "سعيد التميمي, لوحة انسانية, رسم مائي, فن عراقي, watercolor figure, iraqi art"
},
];

window.PRODUCTS.push(...PRODUCTS_EXTRA);

console.log("products-extra loaded");
console.log("added items:", PRODUCTS_EXTRA.length);
console.log("total products:", window.PRODUCTS.length);