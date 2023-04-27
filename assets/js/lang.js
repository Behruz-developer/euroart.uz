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
    
  },
  "ru": {
    "home": "ГЛАВНАЯ",
    "about": "О НАС",
    "servises": "УСЛУГИ",
    "projects": "ПРОЕКТЫ",
    "articles": "СТАТЬИ",
    "contact": "КОНТАКТЫ",
    "about-text": "Наша компания занимается качественным выполнением ремонтных и отделочных работ. Мы предоставляем комплексные услуги по ремонту квартир, офисных помещений, а также по отделке и восстановлению фасадов. В штате работают профессиональные дизайнеры, сотрудники строительных специальностей, опытные электрики, сантехники, разнорабочие. Наша компания занимается качественным выполнением ремонтных и отделочных работ. Мы предоставляем комплексные услуги по ремонту квартир, офисных помещений, а также по отделке и восстановлению фасадов.",
  },
  "eng": {
    "home": "Home",
    "about": "About",
    "servises": "Servises",
    "projects": "Projects",
    "articles": "Articles",
    "contact": "Contact",
    "about-text": "Our company is engaged in high-quality performance of repair and finishing works. We provide comprehensive services for the repair of apartments, office space, as well as finishing and restoration of facades. The staff includes professional designers, construction specialists, experienced electricians, plumbers, craftsmen. Our company is engaged in high-quality performance of repair and finishing works. We provide comprehensive services for the repair of apartments, office space, as well as finishing and restoration of facades.",
  }
};

const langElements = document.querySelectorAll('.lang');

function changeLanguage(language) {
  selectedLanguage = language;
  langElements.forEach(el => {
    el.textContent = langData[selectedLanguage][el.getAttribute('key')];
  });
}

let selectedLanguage = 'uz';
langElements.forEach(el => {
  el.textContent = langData[selectedLanguage][el.getAttribute('key')];
});

const languageButton = document.getElementById('language-button');
const languageDropdown = document.getElementById('language-dropdown');

languageButton.addEventListener('click', () => {
  languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
});

languageDropdown.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const lang = e.target.dataset.lang;
    changeLanguage(lang);
    languageButton.textContent = lang.toUpperCase();
    languageDropdown.style.display = 'none';
  }
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    languageDropdown.style.display = 'inline';
  }
});
