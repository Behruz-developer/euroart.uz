// script.js
const langData = {
  "uz": {
    "home": "Bosh sahifa",
    "about": "Biz haqimizda",
    "servises": "Xizmatlar",
    "projects": "Loyihalar",
    "articles": "Maqolalar",
    "contact": "Bog'lanish",
    "navimage1": "QAYTA REJAJLASH VA INTERIOR DIZAYN XONASI",
    "navimage2": "OFISNI QAYTA REJAJLASH VA DIZAYNLASH",
    "navimage3": "Kvartirani QAYTA REJAJLASH VA INTERYER DIZAYNI",
    "about-text": "Kompaniyamiz ta'mirlash va pardozlash ishlarini sifatli bajarish bilan shug'ullanadi. Biz kvartiralarni, ofis xonalarini ta'mirlash, shuningdek, fasadlarni bezash va tiklash bo'yicha kompleks xizmatlarni taqdim etamiz. Xodimlar tarkibiga professional dizaynerlar, qurilish mutaxassisliklari xodimlari, tajribali elektrchilar, chilangarlar, ustalar kiradi. Kompaniyamiz ta'mirlash va pardozlash ishlarini sifatli bajarish bilan shug'ullanadi. Biz kvartiralarni, ofis xonalarini ta'mirlash, shuningdek, fasadlarni bezash va tiklash bo'yicha kompleks xizmatlarni taqdim etamiz.",
    "servises1": "Fasadni ta'mirlash",
    "servises2": "Hammom, oshxona, hammomni ta'mirlash",
    "servises3": "Kottejni ta'mirlash",
    "servises4": "Tugatish qo'yildi",
    "servises5": "Toshkent shahridagi ofisni ta'mirlash",
    "servises6": "Toshkentda kvartirani ta'mirlash",
    "workin": "BIZ QANDAY ISHLAB CHIQARAMIZ",
    "workin-text1": "BILISH UCHUN",
    "workin-text2": "biz siz bilan tanishish va tafsilotlarni muhokama qilish uchun shaxsiy uchrashuv tashkil qilamiz",
    "workin-text3": "BIZ QAROR QABUL QILAMIZ",
    "workin-text4":"biz sizga batafsil tijorat taklifini yuboramiz, bu haqda o'ylab ko'rishga vaqtingiz bor",
    "workin-text5":"BIZ SHARTNOMA IMZOLAYMIZ",
    "workin-text6":"shartnoma tuzish va unda barcha shartlar, shartlar va majburiyatlarni aniq belgilash",
    "workin-text7":"TARTIBINI TASDIQ QILAMIZ",
    "workin-text8":"biz bir nechta rejalashtirish echimlarini tayyorlaymiz, siz eng yaxshi variantni tanlaysiz",
    "workin-text9":"BIZ kontseptsiyani ishlab chiqamiz",
    "workin-text10":"biz tasdiqlangan texnik topshiriqlar asosida uslub yo'nalishini muvofiqlashtiramiz",
    "workin-text11":"BIZ 3D VIZUALIZATSIYANI BAJAR ETAMIZ",
    "workin-text12":"biz binolarning uch o'lchovli modelining fotorealistik tasvirlarini ishlab chiqaramiz",
    "workin-text13":"ISHCHI HUJJATLARNI TAYYORLASH",
    "workin-text14":"biz me'moriy rejalar va chizmalarning to'liq spektrini ishlab chiqamiz",
    "workin-text15":"BIZ LOYIHANI QO'LLAB QUVVATLASHAMIZ",
    "workin-text16":"Biz qo'shimcha xizmatlarni taqdim etish zarurati va imkoniyatlarini muhokama qilamiz",
    "workin-text17":"NATIJANI OLISH",
    "workin-text18":"tayyor ob'ektni sizga topshirishdan xursandmiz va sizni yaqinlashib kelayotgan uy qurish bilan tabriklaymiz",
    "time-job": "Ish vaqti",
    "job-time": "Har kuni soat 9:00 dan 18:00 gacha",
    "location": "Toshkent, Mirzo Ulug'bek tumani",
    "netvork": "Ijtimoiy tarmoq sahifalarimiz",
    "room-text": "Xonalar Remont",
    "kitchen_text": "Oshxona Remont",
    "cooridor_text": "Karidor Remont",
    "ofis_text": "Ofis Remont",
    "bathroom_text": "Hammom Remont",
    "fasad_text": "Fasad Remont",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    
  },
  "ru": {
    "home": "ГЛАВНАЯ",
    "about": "О НАС",
    "servises": "УСЛУГИ",
    "projects": "ПРОЕКТЫ",
    "articles": "СТАТЬИ",
    "contact": "КОНТАКТЫ",
    "navimage1": "ПЕРЕПЛАНИРОВКА И ДИЗАЙН ИНТЕРЬЕРА КОМНАТА",
    "navimage2": "ПЕРЕПЛАНИРОВКА И ДИЗАЙН ОФИСА",
    "navimage3": "ПЕРЕПЛАНИРОВКА И ДИЗАЙН ИНТЕРЬЕРА КВАРТИРЫ",
    "about-text": "Наша компания занимается качественным выполнением ремонтных и отделочных работ. Мы предоставляем комплексные услуги по ремонту квартир, офисных помещений, а также по отделке и восстановлению фасадов. В штате работают профессиональные дизайнеры, сотрудники строительных специальностей, опытные электрики, сантехники, разнорабочие. Наша компания занимается качественным выполнением ремонтных и отделочных работ. Мы предоставляем комплексные услуги по ремонту квартир, офисных помещений, а также по отделке и восстановлению фасадов.",
    "servises1": "Ремонт фасадов",
    "servises2": "Ремонт ванной, кухни, санузла",
    "servises3": "Ремонт коттеджей",
    "servises4": "Отделка помещеный",
    "servises5": "Ремонт офиса в Ташкенте",
    "servises6": "Ремонт квартиры в Ташкенте",
    "workin": "КАК МЫ РАБОТАЕМ",
    "workin-text1": "ЗНАКОМИМСЯ",
    "workin-text2": "организовываем личную встречу для знакомства с вами и обсуждения деталей",
    "workin-text3": "ПРИНИМАЕМ РЕШЕНИЕ",
    "workin-text4":"высылаем вам подробное коммерческое предложение,  вы имеете время его обдумать",
    "workin-text5":"ЗАКЛЮЧАЕМ ДОГОВОР",
    "workin-text6":"составляем договор и точно прописываем в нем все условия, сроки и обязательства",
    "workin-text7":"УТВЕРЖДАЕМ ПЛАНИРОВКУ",
    "workin-text8":"готовим несколько планировочных решений,  вы выбираете оптимальный вариант",
    "workin-text9":"РАЗРАБАТЫВАЕМ КОНЦЕПЦИЮ",
    "workin-text10":"согласовываем стилевое направление, исходя из утвержденного технического задания",
    "workin-text11":"ВЫПОЛНЯЕМ 3D ВИЗУАЛИЗАЦИЮ",
    "workin-text12":"выполняем фотореалистичные изображения трехмерной модели помещений",
    "workin-text13":"ГОТОВИМ РАБОЧУЮ ДОКУМЕНТАЦИЮ",
    "workin-text14":"разрабатываем полный комплекс архитектурных планов и чертежей",
    "workin-text15":"СОПРОВОЖДАЕМ ПРОЕКТ",
    "workin-text16":"обговариваем необходимость и возможность оказания дополнительных услуг",
    "workin-text17":"ПОЛУЧАЕМ РЕЗУЛЬТАТ",
    "workin-text18":"с радостью сдаем вам готовый объект и поздравляем с предстоящим новосельем",
    "time-job": "Режим работы",
    "job-time": "Каждый день с 9:00 до 18:00",
    "location": "Мирзо-Улугбекский район, Ташкент",
    "netvork": "Наши страницы в социальных сетях",
    "room-text": "Ремонт помещений",
    "kitchen_text": "Ремонт кухни",
    "cooridor_text": "Ремонт коридора",
    "ofis_text": "Офисный ремонт",
    "bathroom_text": "Ремонт ванной комнаты",
    "fasad_text": "Ремонт фасада",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

  },
};

const langElements = document.querySelectorAll('.lang');

function changeLanguage(language) {
  selectedLanguage = language;
  langElements.forEach(el => {
    el.textContent = langData[selectedLanguage][el.getAttribute('key')];
  });
}



// Tilni qayta belgilash
let selectedLanguage = 'uz';
langElements.forEach(el => {
  el.textContent = langData[selectedLanguage][el.getAttribute('key')];
});

const langButtons = document.querySelectorAll('.lang-button');
langButtons.forEach(btn => {
btn.addEventListener('click', () => {
  changeLanguage(btn.dataset.lang);
  langButtons.forEach(btn => {
    btn.classList.remove('active_lang');
  });
  btn.classList.add('active_lang');
});
});
