// script.js
const langData = {
  "uz": {
    "home": "Bosh sahifa",
    "about": "Biz haqimizda",
    "servises": "Xizmatlar",
    "projects": "Loyihalar",
    "articles": "Maqolalar",
    "contact": "Bog'lanish",
    "about-text": "Kompaniyamiz ta'mirlash va pardozlash ishlarini sifatli bajarish bilan shug'ullanadi. Biz kvartiralarni, ofis xonalarini ta'mirlash, shuningdek, fasadlarni bezash va tiklash bo'yicha kompleks xizmatlarni taqdim etamiz. Xodimlar tarkibiga professional dizaynerlar, qurilish mutaxassisliklari xodimlari, tajribali elektrchilar, chilangarlar, ustalar kiradi. Kompaniyamiz ta'mirlash va pardozlash ishlarini sifatli bajarish bilan shug'ullanadi. Biz kvartiralarni, ofis xonalarini ta'mirlash, shuningdek, fasadlarni bezash va tiklash bo'yicha kompleks xizmatlarni taqdim etamiz.",
    "project1": "Yotoq xonasi. Loyiha №7",
    "project2": "Yotoq xonasi. Loyiha №7",
    "project3": "Yotoq xonasi. Loyiha №7",
    "project4": "Yotoq xonasi. Loyiha №7",
  },
  "ru": {
    "home": "ГЛАВНАЯ",
    "about": "О НАС",
    "servises": "УСЛУГИ",
    "projects": "ПРОЕКТЫ",
    "articles": "СТАТЬИ",
    "contact": "КОНТАКТЫ",
    "about-text": "Наша компания занимается качественным выполнением ремонтных и отделочных работ. Мы предоставляем комплексные услуги по ремонту квартир, офисных помещений, а также по отделке и восстановлению фасадов. В штате работают профессиональные дизайнеры, сотрудники строительных специальностей, опытные электрики, сантехники, разнорабочие. Наша компания занимается качественным выполнением ремонтных и отделочных работ. Мы предоставляем комплексные услуги по ремонту квартир, офисных помещений, а также по отделке и восстановлению фасадов.",
    "project1": "Спальня комната. Проект №7",
    "project2": "Спальня комната. Проект №7",
    "project3": "Спальня комната. Проект №7",
    "project4": "Спальня комната. Проект №7",

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
