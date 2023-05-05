// script.js
const langData = {
    "ru": {
      "servise_card2_page": "Лечебный массаж",
      "servise_card2_page_text1": "Под лечебным массажем следует понимать немедикаментозное воздействие на мышцы, кожу и рецепторы с целью снятия спазмов, зажимов, лимфодренажа и т.д. Его задача не столько способствовать релаксации, сколько устранить очаги боли, дискомфорта, ограниченности движений и отеков. Выполнять такой массаж должен именно врач-массажист, имеющий среднее или высшее медицинское образование. В нашем Центре телесной терапии эту процедуру проводит именно врач. Он хорошо разбирается в анатомии и физиологии, а также ориентируется в смежных дисциплинах, чтобы правильно воздействовать на организм и соблюдать принцип «Не навреди».",
      "servise_card2_page_text2": "Механизм профессионального массажа",
      "servise_card2_page_text3": "Врач-массажист во время сеанса руками создает воздействие на мышцы, стимулирует болевые точки, тактильные, температурные рецепторы, а также проприорецепторы и рефлексогенные точки. В результате к массируемому участку усиливается приток крови и лимфы, активируются рецепторы в коже и подлежащие ткани. Это оказывает такой эффект:",
      "servise_card2_page_ul1_li1": "Исчезают болевые ощущения и дискомфорт.",
      "servise_card2_page_ul1_li2": "Снимается напряжение.",
      "servise_card2_page_ul1_li3": "Уходит фасциальное натяжение и мышечные спазмы.",
      "servise_card2_page_ul1_li4": "Улучшаются обменные процессы в тканях.",
      "servise_card2_page_ul1_li5": "Усиливается приток кислорода, а также необходимых микро- и макроэлементов.",
      "servise_card2_page_ul1_li6": "Быстрее выводятся токсины.",
      "servise_card2_page_ul1_li7": "Лучше двигается лимфа по телу.",
      "servise_card2_page_ul1_li8": "Повышается эластичность кожи.",
      "servise_card2_page_ul1_li9": "Нормализуется структура мышц и фасций.",
      "servise_card2_page_text4": "Лечебный массаж спины, шейно-воротниковой зоны, живота и других зон оказывает системное влияние на организм, активируя иммунную, эндокринную и мочевыделительную систему, способствуя нормальному кровообращению, а также восстановлению симпатической и парасимпатическое нерной системы.",
      "servise_card2_page_text5": "Разновидности лечебного массажа",
      "servise_card2_page_text6": "Расслабляющий массаж, который предлагают в SPA-центрах, не предусматривает проработку глубоких мышц спины, устранение зажимов и лечебный эффект. В противовес ему лечебная техника направлена на решение конкретной проблемы. Именно поэтому ей предшествует консультация врача и постановка диагноза. На основе этого и будет выбран вид массажа. Он может быть общим, то есть охватывать несколько больших участков, или же зональным, нацеленным только на одну локализацию. При этом для каждого пациента, даже когда выбрана одинаковая разновидность, техника выполнения будет отличаться исходя из диагноза и текущего состояния больного.",
      "servise_card2_page_text7": "В Центре телесной терапии выполняются такие виды медицинского массажа:",
      "servise_card2_page_ul1_li10": "спины;",
      "servise_card2_page_ul1_li11": "шейно-воротниковой зоны;",
      "servise_card2_page_ul1_li12": "верхних и нижних конечностей;",
      "servise_card2_page_ul1_li13": "волосистой части головы;",
      "servise_card2_page_ul1_li14": "бедер и в области тазобедренного сустава;",
      "servise_card2_page_ul1_li15": "стоп и голеней;",
      "servise_card2_page_ul1_li16": "кистей и предплечий;",
      "servise_card2_page_ul1_li17": "поверхности грудной клетки;",
      "servise_card2_page_ul1_li18": "общий массаж.",
      "servise_card2_page_text8": "Показания для лечебного массажа",
      "servise_card2_page_text9": "Массаж предполагает воздействие на акупунктурные точки и рефлексогенные зоны, и это отражается на работе и состоянии разных органов и систем. В связи с этим лечебные техники применяются при довольно обширном перечне заболеваний, а для некоторых — очень часто. К показаниям для такого массажа относятся:",
      "servise_card2_page_ul1_li19": "Заболевания опорно-двигательного аппарата: остеохондроз, грыжи межпозвоночных дисков, протрузии, радикулит, сколиоз, хронические боли в шее и спине.",
      "servise_card2_page_ul1_li20": "Болезни суставов, в т.ч. артриты.",
      "servise_card2_page_ul1_li21": "Миозиты, мышечные спазмы.",
      "servise_card2_page_ul1_li22": "Последствия травм: зажившие переломы, ушибы, растяжения, вывихи.",
      "servise_card2_page_ul1_li23": "Сосудистые заболевания: ВСД, эндартериит, болезнь Рейно.",
      "servise_card2_page_ul1_li24": "Нарушения в работе лимфатической системы: застои лимфы, отеки.",
      "servise_card2_page_ul1_li25": "Заболевания нервной системы: неврозы, невралгии, гипертония, парез, паралич и ДЦП.",
      "servise_card2_page_ul1_li26": "Некоторые проблемы внутренних органов, в частности дыхательной и мочевыделительной систем.",
      "servise_card2_page_text10": "При заболеваниях опорно-двигательного аппарата массаж проводят вне их обострений. Обратиться к врачу-массажисту нужно при таких обстоятельствах:",
      "servise_card2_page_ul1_li27": "Ведете малоподвижный образ жизни.",
      "servise_card2_page_ul1_li28": "Много времени проводите на сидячей работе.",
      "servise_card2_page_ul1_li29": "Единичные или регулярные повышенные физические нагрузки.",
      "servise_card2_page_ul1_li30": "Боль и напряжение в шее, спине, руках или ногах из-за стресса.",
      "servise_card2_page_ul1_li31": "Была травма мышц.",
      "servise_card2_page_ul1_li32": "Хроническая усталость и повышенная утомляемость.",
      "servise_card2_page_text11": "Противопоказания к лечебному массажу",
      "servise_card2_page_text12": "Лечебный массаж в Ташкенте по всем правилам и на основе обследования проводят специалисты нашего Центра телесной терапии. Однако врач учитывает индивидуальные особенности пациента и не назначает такие манипуляции при наличии противопоказаний. Абсолютные ограничения — это состояния или заболевания, которые исключают массаж полностью. К ним относятся онкология, ВИЧ, психические нарушений и т.д. К относительным противопоказаниям относится все то, что имеет временный характер и при условии устранения пациент может пройти лечение массажем. В их числе:",
      "servise_card2_page_ul1_li33": "высокая температура;",
      "servise_card2_page_ul1_li34": "острый воспалительный процесс, в т.ч. при накоплении гноя;",
      "servise_card2_page_ul1_li35": "склонность к кровотечению;",
      "servise_card2_page_ul1_li36": "менструация и беременность;",
      "servise_card2_page_ul1_li37": "гипертонический криз и гипотонический коллапс;",
      "servise_card2_page_ul1_li38": "варикозное расширение вен и пр.",
      "servise_card2_page_text13": "В Центре телесной терапии вы можете пройти нужное количество сеансов лечебного массажа в оптимальном для вас режиме. Наши специалисты имеют все необходимые медицинские знания и навыки для правильного выполнения техник, контроля состояния пациента и поддержания положительной атмосферы во время процедуры.",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",


    },
    "en": {
      "servise_card2_page": "Massotherapy",
      "servise_card2_page_text1": "A therapeutic massage should be understood as a non-drug effect on muscles, skin and receptors in order to relieve spasms, clamps, lymphatic drainage, etc. Its task is not so much to promote relaxation as to eliminate foci of pain, discomfort, limited movement and swelling. It is the massage therapist who has a secondary or higher medical education that should perform such a massage. In our Center for Body Therapy, this procedure is carried out by a doctor. He is well versed in anatomy and physiology, and also navigates related disciplines in order to properly influence the body and observe the principle of «Do no harm.»",
      "servise_card2_page_text2": "The mechanism of professional massage",
      "servise_card2_page_text3": "During the massage session, the massage therapist creates an effect on the muscles, stimulates pain points, tactile, temperature receptors, as well as proprioreceptors and reflexogenic points. As a result, blood and lymph flow to the massaged area increases, receptors in the skin and underlying tissues are activated. This has the following effect:",
      "servise_card2_page_ul1_li1": "Pain and discomfort disappear.",
      "servise_card2_page_ul1_li2": "The tension is relieved.",
      "servise_card2_page_ul1_li3": "Removes fascial tension and muscle spasms.",
      "servise_card2_page_ul1_li4": "Improves metabolic processes in tissues.",
      "servise_card2_page_ul1_li5": "The influx of oxygen, as well as the necessary micro and macro elements, is enhanced.",
      "servise_card2_page_ul1_li6": "Remove toxins faster.",
      "servise_card2_page_ul1_li7": "The lymph moves better throughout the body.",
      "servise_card2_page_ul1_li8": "Increases skin elasticity.",
      "servise_card2_page_ul1_li9": "The structure of muscles and fascia is normalized.",
      "servise_card2_page_text4": "Therapeutic massage of the back, neck and collar area, abdomen and other areas has a systemic effect on the body, activating the immune, endocrine and urinary systems, promoting normal blood circulation, as well as restoring the sympathetic and parasympathetic nervous system.",
      "servise_card2_page_text5": "Types of therapeutic massage",
      "servise_card2_page_text6": "Relaxing massage, which is offered in SPA centers, does not provide for the development of deep back muscles, the elimination of clamps and the therapeutic effect. In contrast, medical technology is aimed at solving a specific problem. That is why it is preceded by a doctor's consultation and diagnosis. Based on this, the type of massage will be selected. It can be general, that is, cover several large areas, or zonal, aimed at only one localization. Moreover, for each patient, even when the same variety is selected, the execution technique will differ based on the diagnosis and the current state of the patient.",
      "servise_card2_page_text7": "The following types of medical massage are performed at the Body Therapy Center:",
      "servise_card2_page_ul1_li10": "back;",
      "servise_card2_page_ul1_li11": "cervical-collar zone;",
      "servise_card2_page_ul1_li12": "upper and lower limbs;",
      "servise_card2_page_ul1_li13": "scalp;",
      "servise_card2_page_ul1_li14": "thighs and in the area of ​​the hip joint;",
      "servise_card2_page_ul1_li15": "feet and legs;",
      "servise_card2_page_ul1_li16": "hands and forearms;",
      "servise_card2_page_ul1_li17": "surface of the chest;",
      "servise_card2_page_ul1_li18": "general massage.",
      "servise_card2_page_text8": "Indications for therapeutic massage",
      "servise_card2_page_text9": "Massage involves the impact on acupuncture points and reflexogenic zones, and this is reflected in the work and condition of various organs and systems. In this regard, medical techniques are used for a fairly extensive list of diseases, and for some - very often. Indications for such a massage include:",
      "servise_card2_page_ul1_li19": "Diseases of the musculoskeletal system: osteochondrosis, herniated discs, protrusions, sciatica, scoliosis, chronic pain in the neck and back.",
      "servise_card2_page_ul1_li20": "Joint diseases, incl. arthritis.",
      "servise_card2_page_ul1_li21": "Myositis, muscle spasms.",
      "servise_card2_page_ul1_li22": "Consequences of injuries: healed fractures, bruises, sprains, dislocations.",
      "servise_card2_page_ul1_li23": "Vascular diseases: VSD, endarteritis, Raynaud's disease.",
      "servise_card2_page_ul1_li24": "Disturbances in the work of the lymphatic system: stagnation of the lymph, edema.",
      "servise_card2_page_ul1_li25": "Diseases of the nervous system: neurosis, neuralgia, hypertension, paresis, paralysis and cerebral palsy.",
      "servise_card2_page_ul1_li26": "Some problems of internal organs, in particular the respiratory and urinary systems.",
      "servise_card2_page_text10": "In diseases of the musculoskeletal system, massage is carried out outside of their exacerbations. You need to contact a massage therapist in such circumstances:",
      "servise_card2_page_ul1_li27": "Lead a sedentary lifestyle.",
      "servise_card2_page_ul1_li28": "Spend a lot of time in a sedentary job.",
      "servise_card2_page_ul1_li29": "Single or regular increased physical activity.",
      "servise_card2_page_ul1_li30": "Pain and tension in the neck, back, arms or legs due to stress.",
      "servise_card2_page_ul1_li31": "There was a muscle injury.",
      "servise_card2_page_ul1_li32": "Chronic fatigue and increased fatigue.",
      "servise_card2_page_text11": "Contraindications to therapeutic massage",
      "servise_card2_page_text12": "Therapeutic massage in Tashkent according to all the rules and on the basis of the examination is carried out by specialists of our Body Therapy Center. However, the doctor takes into account the individual characteristics of the patient and does not prescribe such manipulations if there are contraindications.Absolute restrictions are conditions or diseases that exclude massage completely. These include oncology, HIV, mental disorders, etc. Relative contraindications include everything that is temporary and, if eliminated, the patient can undergo massage treatment. Among them:",
      "servise_card2_page_ul1_li33": "heat;",
      "servise_card2_page_ul1_li34": "acute inflammatory process, incl. with the accumulation of pus;",
      "servise_card2_page_ul1_li35": "tendency to bleed;",
      "servise_card2_page_ul1_li36": "menstruation and pregnancy;",
      "servise_card2_page_ul1_li37": "hypertensive crisis and hypotonic collapse;",
      "servise_card2_page_ul1_li38": "varicose veins, etc.",
      "servise_card2_page_text13": "In the Body Therapy Center you can undergo the required number of therapeutic massage sessions in the optimal mode for you. Our specialists have all the necessary medical knowledge and skills to perform the techniques correctly, monitor the patient's condition and maintain a positive atmosphere during the procedure.",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
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
  let selectedLanguage = 'ru';
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
  