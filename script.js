/* ══════════════════════════════════════════════════════════════
   Adjara Property Finder — script.js
   Vanilla JS · No dependencies
══════════════════════════════════════════════════════════════ */

'use strict';

/* ── i18n strings ──────────────────────────────────────────── */
const TRANSLATIONS = {
  ka: {
    'meta.title':       'Adjara Property Finder — ვიპოვეთ სრულყოფილი ქონება',
    'meta.description': 'პრემიუმ უძრავი ქონების სააგენტო აჭარაში. ბათუმი, ქობულეთი, ჩაქვი, ციხისძირი.',
    'nav.how':       'როგორ ვმუშაობთ',
    'nav.locations': 'ლოკაციები',
    'nav.contact':   'კონტაქტი',
    'nav.cta':       'დაგვიკავშირდით',
    'hero.eyebrow':  'აჭარის პრემიუმ სააგენტო',
    'hero.title':    'გვიამბეთ, რა გჭირდებათ.\nჩვენ შეგირჩევთ სრულყოფილ ობიექტს.',
    'hero.subtitle': 'ბათუმი · ქობულეთი · ჩაქვი · ციხისძირი',
    'hero.cta':      'განაცხადის გაგზავნა',
    'hero.learn':    'გაიგე მეტი',
    'hero.stat1':    'წარმატებული გარიგება',
    'hero.stat2':    'წელი ბაზარზე',
    'hero.stat3':    'ლოკაცია',
    'how.eyebrow':   'პროცესი',
    'how.title':     'მარტივი 3 ნაბიჯი',
    'how.subtitle':  'ჩვენ გაგიმარტივებთ ქონების ძიების პროცესს',
    'how.step1.title': 'შეავსეთ განაცხადი',
    'how.step1.text':  'მოგვიყევით თქვენს მოთხოვნებზე — ლოკაცია, ბიუჯეტი, ტიპი. ეს მხოლოდ 2 წუთს ითხოვს.',
    'how.step2.title': 'ვეძებთ თქვენთვის',
    'how.step2.text':  'ჩვენი გუნდი სკანირებს ბაზარს და ასარჩევად მოამზადებს საუკეთესო ვარიანტებს.',
    'how.step3.title': 'შეგირჩევთ უძრავ ქონებას',
    'how.step3.text':  'დაგიკავშირდებით 24 საათში, გაჩვენებთ ობიექტებს და თქვენთან ვართ გარიგების დასრულებამდე.',
    'form.eyebrow':  'განაცხადი',
    'form.title':    'მოგვიყევი რა გჭირდება',
    'form.subtitle': 'შეავსე ფორმა და ჩვენი სპეციალისტი 24 საათში დაგიკავშირდება',
    'form.name':     'სახელი და გვარი *',
    'form.phone':    'ტელეფონი *',
    'form.whatsapp': 'WhatsApp (სურვილისამებრ)',
    'form.email':    'ელ-ფოსტა (სურვილისამებრ)',
    'form.location': 'სასურველი ლოკაცია *',
    'form.location.ph': 'აირჩიე ლოკაცია',
    'form.type':     'ქონების ტიპი *',
    'form.type.ph':  'აირჩიე ტიპი',
    'form.area':     'ფართი (კვ.მ)',
    'form.area.ph':  'ფართის დიაპაზონი',
    'form.budget':   'ბიუჯეტი (USD) *',
    'form.budget.ph':'ბიუჯეტის დიაპაზონი',
    'form.notes':    'დამატებითი სურვილები',
    'form.consent':  'ვეთანხმები კონფიდენციალურობის პოლიტიკას',
    'form.privacy':  'კონფიდენციალურობის პოლიტიკას',
    'form.submit':   'განაცხადის გაგზავნა',
    'form.thanks.title': 'მადლობა! განაცხადი მიღებულია.',
    'form.thanks.text':  'ჩვენი სპეციალისტი 24 საათში დაგიკავშირდება.',
    'form.thanks.wa':    'WhatsApp-ზეც დაგვიკავშირდით',
    'err.required':  'სავალდებულო ველი',
    'err.phone':     'შეიყვანეთ სწორი ტელეფონის ნომერი',
    'err.email':     'შეიყვანეთ სწორი ელ-ფოსტა',
    'err.consent':   'გთხოვთ, დაეთანხმეთ პოლიტიკას',
    'why.eyebrow':   'უპირატესობები',
    'why.title':     'რატომ ჩვენ?',
    'why.c1.title':  '15 წლის გამოცდილება',
    'why.c1.text':   'ღრმა ცოდნა ადგილობრივ ბაზარზე — ფასები, ტენდენციები, საუკეთესო ლოკაციები.',
    'why.c2.title':  'პერსონალური მიდგომა',
    'why.c2.text':   'ყველა კლიენტს ჰყავს პირადი მენეჯერი. ჩვენ ვართ გვერდით ყველა ეტაპზე.',
    'why.c3.title':  'სრული სამართლებრივი უსაფრთხოება',
    'why.c3.text':   'ყველა ობიექტი გადამოწმებული, ყველა დოკუმენტი სწორი. ნულოვანი რისკი.',
    'why.c4.title':  'სწრაფი პასუხი',
    'why.c4.text':   'გარანტირებულად 24 საათში ვუპასუხებთ ყველა განაცხადს. სამუშაო დღეებში — 2 საათში.',
    'loc.eyebrow':   'ლოკაციები',
    'loc.title':     'სად ვმუშაობთ',
    'loc.subtitle':  'ოთხი მიმართულება — ყველა სახის ქონება',
    'loc.batumi':    'ბათუმი',
    'loc.batumi.desc': 'კოსმოპოლიტური ქალაქი შავი ზღვის სანაპიროზე. ინვესტიციისა და ცხოვრების ოქროს წერტილი.',
    'loc.kobuleti':  'ქობულეთი',
    'loc.kobuleti.desc': 'კურორტული ქალაქი ხელუხლებელი ბუნებით. სახლი ან ვილა სუბტროპიკული სიმშვიდით.',
    'loc.chakvi':    'ჩაქვი',
    'loc.chakvi.desc': 'ჩუმი, ელეგანტური დასახლება. ჩაის პლანტაციები, ტყე და ზღვა — ერთ ადგილზე.',
    'loc.tsikhisdziri': 'ციხისძირი',
    'loc.tsikhisdziri.desc': 'ელიტური კოტეჯები მთის ფერდობებზე. ექსკლუზიური სიმშვიდე ბათუმიდან 20 წუთში.',
    'loc.any':       'ნებისმიერი',
    'type.apartment':'ბინა',
    'type.house':    'კერძო სახლი',
    'type.villa':    'ვილა',
    'type.land':     'მიწის ნაკვეთი',
    'type.commercial':'კომერციული',
    'test.eyebrow':  'შეფასებები',
    'test.title':    'კლიენტები ამბობენ',
    'test.1.quote':  '"3 კვირაში ვიპოვეთ სახლი ჩვენი ოცნების — ბათუმში, ზღვის ხედვით. ყველა დეტალი გადამოწმებული, გარიგება ჩქარი."',
    'test.1.name':   'ნინო ბერიძე',
    'test.1.loc':    'თბილისი → ბათუმი',
    'test.2.quote':  '"Отличная команда, нашли нам апартаменты у моря за разумные деньги."',
    'test.2.name':   'Александр Морозов',
    'test.2.loc':    'Москва → ქობულეთი',
    'test.3.quote':  '"Professional service, fast response, and they found exactly what I was looking for."',
    'test.3.name':   'David Müller',
    'test.3.loc':    'Berlin → ჩაქვი',
    'test.4.quote':  '"ინვესტიციისთვის ვიყიდე 2 ბინა ბათუმში. ყველაფერი სწრაფად, პროფესიონალურად."',
    'test.4.name':   'გიორგი კვარაცხელია',
    'test.4.loc':    'ბათუმი — ინვესტორი',
    'wa.title':      'დაგვიკავშირდით WhatsApp-ზე',
    'wa.subtitle':   'სწრაფი კავშირი, სწრაფი პასუხი. ჩვენ ყოველთვის ხელმისაწვდომი ვართ.',
    'wa.btn':        'WhatsApp-ში დაწერე',
    'contact.eyebrow': 'კავშირი',
    'contact.title': 'დაგვიკავშირდით',
    'contact.phone': 'ტელეფონი',
    'contact.email': 'ელ-ფოსტა',
    'contact.hours': 'სამუშაო საათები',
    'contact.hours.val': 'ყოველდღე 9:00 – 21:00',
    'footer.tagline': 'გვიამბეთ, რა გჭირდებათ.',
    'footer.privacy': 'კონფიდენციალურობა',
    'footer.terms':   'წესები',
    'footer.copy':    '© 2026 Adjara Property Finder. ყველა უფლება დაცულია.',
  },

  en: {
    'meta.title':       'Adjara Property Finder — We Find Your Perfect Property',
    'meta.description': 'Premium real estate agency in Adjara, Georgia. Batumi, Kobuleti, Chakvi, Tsikhisdziri.',
    'nav.how':       'How It Works',
    'nav.locations': 'Locations',
    'nav.contact':   'Contact',
    'nav.cta':       'Get in Touch',
    'hero.eyebrow':  'Adjara\'s Premium Agency',
    'hero.title':    'Tell us what you need.\nWe\'ll find the perfect property for you.',
    'hero.subtitle': 'Batumi · Kobuleti · Chakvi · Tsikhisdziri',
    'hero.cta':      'Send Request',
    'hero.learn':    'Learn More',
    'hero.stat1':    'Successful Deals',
    'hero.stat2':    'Years in Market',
    'hero.stat3':    'Locations',
    'how.eyebrow':   'Process',
    'how.title':     '3 Simple Steps',
    'how.subtitle':  'We make your property search effortless',
    'how.step1.title': 'Fill the Form',
    'how.step1.text':  'Tell us your requirements — location, budget, type. It only takes 2 minutes.',
    'how.step2.title': 'We Search for You',
    'how.step2.text':  'Our team scans the market and prepares the best options for your review.',
    'how.step3.title': 'We Find Your Home',
    'how.step3.text':  'We call within 24 hours, show you the properties, and guide you to the deal.',
    'form.eyebrow':  'Request',
    'form.title':    'Tell Us What You Need',
    'form.subtitle': 'Fill the form and our specialist will contact you within 24 hours',
    'form.name':     'Full Name *',
    'form.phone':    'Phone *',
    'form.whatsapp': 'WhatsApp (optional)',
    'form.email':    'Email (optional)',
    'form.location': 'Preferred Location *',
    'form.location.ph': 'Select location',
    'form.type':     'Property Type *',
    'form.type.ph':  'Select type',
    'form.area':     'Area (sq.m)',
    'form.area.ph':  'Area range',
    'form.budget':   'Budget (USD) *',
    'form.budget.ph':'Budget range',
    'form.notes':    'Additional Preferences',
    'form.consent':  'I agree to the Privacy Policy',
    'form.privacy':  'Privacy Policy',
    'form.submit':   'Submit Request',
    'form.thanks.title': 'Thank you! Your request has been received.',
    'form.thanks.text':  'Our specialist will contact you within 24 hours.',
    'form.thanks.wa':    'Also reach us on WhatsApp',
    'err.required':  'This field is required',
    'err.phone':     'Please enter a valid phone number',
    'err.email':     'Please enter a valid email',
    'err.consent':   'Please agree to the policy',
    'why.eyebrow':   'Advantages',
    'why.title':     'Why Choose Us?',
    'why.c1.title':  '15 Years of Experience',
    'why.c1.text':   'Deep knowledge of the local market — prices, trends, best locations.',
    'why.c2.title':  'Personal Approach',
    'why.c2.text':   'Every client has a dedicated manager. We\'re with you every step of the way.',
    'why.c3.title':  'Full Legal Security',
    'why.c3.text':   'Every property verified, every document correct. Zero risk.',
    'why.c4.title':  'Fast Response',
    'why.c4.text':   'Guaranteed response within 24 hours. On working days — within 2 hours.',
    'loc.eyebrow':   'Locations',
    'loc.title':     'Where We Work',
    'loc.subtitle':  'Four directions — all property types',
    'loc.batumi':    'Batumi',
    'loc.batumi.desc': 'A cosmopolitan city on the Black Sea coast. The golden point for investment and living.',
    'loc.kobuleti':  'Kobuleti',
    'loc.kobuleti.desc': 'A resort town with pristine nature. A house or villa with rural tranquility.',
    'loc.chakvi':    'Chakvi',
    'loc.chakvi.desc': 'A quiet, elegant settlement. Tea plantations, forest and sea — all in one place.',
    'loc.tsikhisdziri': 'Tsikhisdziri',
    'loc.tsikhisdziri.desc': 'Elite cottages on mountain slopes. Exclusive peace, 20 minutes from Batumi.',
    'loc.any':       'Any location',
    'type.apartment':'Apartment',
    'type.house':    'Private House',
    'type.villa':    'Villa',
    'type.land':     'Land Plot',
    'type.commercial':'Commercial',
    'test.eyebrow':  'Reviews',
    'test.title':    'What Clients Say',
    'test.1.quote':  '"We found our dream home in Batumi in 3 weeks — sea view, everything verified, fast deal."',
    'test.1.name':   'Nino Beridze',
    'test.1.loc':    'Tbilisi → Batumi',
    'test.2.quote':  '"Excellent team, found us a sea-view apartment at a fair price. Clean documentation, smooth deal."',
    'test.2.name':   'Alexander Morozov',
    'test.2.loc':    'Moscow → Kobuleti',
    'test.3.quote':  '"Professional service, fast response, and they found exactly what I was looking for in Chakvi."',
    'test.3.name':   'David Müller',
    'test.3.loc':    'Berlin → Chakvi',
    'test.4.quote':  '"Bought 2 apartments in Batumi for investment. Everything was fast and professional."',
    'test.4.name':   'Giorgi Kvaratskhelia',
    'test.4.loc':    'Batumi — Investor',
    'wa.title':      'Connect with Us on WhatsApp',
    'wa.subtitle':   'Fast connection, fast response. We\'re always available.',
    'wa.btn':        'Write on WhatsApp',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Get in Touch',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Working Hours',
    'contact.hours.val': 'Every day 9:00 – 21:00',
    'footer.tagline': 'Tell us what you need.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms':   'Terms',
    'footer.copy':    '© 2026 Adjara Property Finder. All rights reserved.',
  },

  ru: {
    'meta.title':       'Adjara Property Finder — Найдём идеальную недвижимость в Аджарии',
    'meta.description': 'Премиум агентство недвижимости в Аджарии. Батуми, Кобулети, Чакви, Цихисдзири.',
    'nav.how':       'Как мы работаем',
    'nav.locations': 'Локации',
    'nav.contact':   'Контакты',
    'nav.cta':       'Связаться',
    'hero.eyebrow':  'Премиум агентство Аджарии',
    'hero.title':    'Расскажите, что вам нужно.\nМы найдём идеальный объект.',
    'hero.subtitle': 'Батуми · Кобулети · Чакви · Цихисдзири',
    'hero.cta':      'Оставить заявку',
    'hero.learn':    'Узнать больше',
    'hero.stat1':    'успешных сделок',
    'hero.stat2':    'лет на рынке',
    'hero.stat3':    'локации',
    'how.eyebrow':   'Процесс',
    'how.title':     'Всего 3 шага',
    'how.subtitle':  'Мы упростим поиск недвижимости для вас',
    'how.step1.title': 'Заполните заявку',
    'how.step1.text':  'Расскажите о требованиях — локация, бюджет, тип. Это займёт всего 2 минуты.',
    'how.step2.title': 'Мы ищем для вас',
    'how.step2.text':  'Наша команда сканирует рынок и подбирает лучшие варианты.',
    'how.step3.title': 'Находим дом',
    'how.step3.text':  'Позвоним в течение 24 часов, покажем объекты и сопроводим до сделки.',
    'form.eyebrow':  'Заявка',
    'form.title':    'Расскажите, что нужно',
    'form.subtitle': 'Заполните форму, и наш специалист свяжется с вами в течение 24 часов',
    'form.name':     'Имя и фамилия *',
    'form.phone':    'Телефон *',
    'form.whatsapp': 'WhatsApp (по желанию)',
    'form.email':    'Эл. почта (по желанию)',
    'form.location': 'Желаемая локация *',
    'form.location.ph': 'Выберите локацию',
    'form.type':     'Тип недвижимости *',
    'form.type.ph':  'Выберите тип',
    'form.area':     'Площадь (кв.м)',
    'form.area.ph':  'Диапазон площади',
    'form.budget':   'Бюджет (USD) *',
    'form.budget.ph':'Диапазон бюджета',
    'form.notes':    'Дополнительные пожелания',
    'form.consent':  'Соглашаюсь с Политикой конфиденциальности',
    'form.privacy':  'Политикой конфиденциальности',
    'form.submit':   'Отправить заявку',
    'form.thanks.title': 'Спасибо! Ваша заявка принята.',
    'form.thanks.text':  'Наш специалист свяжется с вами в течение 24 часов.',
    'form.thanks.wa':    'Также напишите нам в WhatsApp',
    'err.required':  'Обязательное поле',
    'err.phone':     'Введите корректный номер телефона',
    'err.email':     'Введите корректный email',
    'err.consent':   'Пожалуйста, согласитесь с политикой',
    'why.eyebrow':   'Преимущества',
    'why.title':     'Почему мы?',
    'why.c1.title':  '15 лет опыта',
    'why.c1.text':   'Глубокое знание местного рынка — цены, тенденции, лучшие локации.',
    'why.c2.title':  'Персональный подход',
    'why.c2.text':   'У каждого клиента личный менеджер. Мы сопровождаем вас на каждом этапе.',
    'why.c3.title':  'Полная правовая безопасность',
    'why.c3.text':   'Каждый объект проверен, все документы в порядке. Нулевой риск.',
    'why.c4.title':  'Быстрый ответ',
    'why.c4.text':   'Гарантированно ответим в течение 24 часов. В рабочие дни — в течение 2 часов.',
    'loc.eyebrow':   'Локации',
    'loc.title':     'Где мы работаем',
    'loc.subtitle':  'Четыре направления — все виды недвижимости',
    'loc.batumi':    'Батуми',
    'loc.batumi.desc': 'Космополитичный город на берегу Чёрного моря. Золотая точка для инвестиций и жизни.',
    'loc.kobuleti':  'Кобулети',
    'loc.kobuleti.desc': 'Курортный город с нетронутой природой. Дом или вилла в сельской тишине.',
    'loc.chakvi':    'Чакви',
    'loc.chakvi.desc': 'Тихое, элегантное местечко. Чайные плантации, лес и море — в одном месте.',
    'loc.tsikhisdziri': 'Цихисдзири',
    'loc.tsikhisdziri.desc': 'Элитные коттеджи на горных склонах. Эксклюзивный покой в 20 минутах от Батуми.',
    'loc.any':       'Любая локация',
    'type.apartment':'Квартира',
    'type.house':    'Частный дом',
    'type.villa':    'Вилла',
    'type.land':     'Земельный участок',
    'type.commercial':'Коммерческая',
    'test.eyebrow':  'Отзывы',
    'test.title':    'Что говорят клиенты',
    'test.1.quote':  '"За 3 недели нашли дом мечты в Батуми с видом на море. Всё проверено, сделка быстрая."',
    'test.1.name':   'Нино Беридзе',
    'test.1.loc':    'Тбилиси → Батуми',
    'test.2.quote':  '"Отличная команда, нашли нам апартаменты у моря за разумные деньги. Документация чистая."',
    'test.2.name':   'Александр Морозов',
    'test.2.loc':    'Москва → Кобулети',
    'test.3.quote':  '"Профессиональный сервис, быстрый ответ, нашли именно то, что я искал в Чакви."',
    'test.3.name':   'David Müller',
    'test.3.loc':    'Берлин → Чакви',
    'test.4.quote':  '"Купил 2 квартиры в Батуми для инвестиций. Всё быстро, профессионально."',
    'test.4.name':   'Георгий Кварацхелия',
    'test.4.loc':    'Батуми — Инвестор',
    'wa.title':      'Напишите нам в WhatsApp',
    'wa.subtitle':   'Быстрая связь, быстрый ответ. Мы всегда доступны.',
    'wa.btn':        'Написать в WhatsApp',
    'contact.eyebrow': 'Контакты',
    'contact.title': 'Свяжитесь с нами',
    'contact.phone': 'Телефон',
    'contact.email': 'Эл. почта',
    'contact.hours': 'Рабочие часы',
    'contact.hours.val': 'Ежедневно 9:00 – 21:00',
    'footer.tagline': 'Расскажите, что вам нужно.',
    'footer.privacy': 'Конфиденциальность',
    'footer.terms':   'Условия',
    'footer.copy':    '© 2026 Adjara Property Finder. Все права защищены.',
  }
};

/* ── State ─────────────────────────────────────────────────── */
let currentLang = 'ka';
let currentSlide = 0;
let slideTotal   = 0;
let autoSlideTimer = null;

/* ══════════════════════════════════════════════════════════════
   LANGUAGE SWITCHER
══════════════════════════════════════════════════════════════ */
function t(key) {
  return TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS['ka'][key] ?? key;
}

function applyTranslations() {
  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (text) el.textContent = text;
  });

  // Placeholder / other attributes
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const text = t(key);
    if (text) el.placeholder = text;
  });

  // <html lang>
  const langMap = { ka: 'ka', en: 'en', ru: 'ru' };
  document.documentElement.lang = langMap[currentLang] || 'ka';

  // <title>
  document.title = t('meta.title');

  // meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));
}

function switchLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  // Update all lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  applyTranslations();

  // Persist
  try { localStorage.setItem('apf-lang', lang); } catch(_) {}
}

function initLanguage() {
  let lang = 'ka';
  try { lang = localStorage.getItem('apf-lang') || 'ka'; } catch(_) {}
  // Also detect browser lang
  if (!lang) {
    const bl = navigator.language || 'ka';
    if (bl.startsWith('ru')) lang = 'ru';
    else if (bl.startsWith('en')) lang = 'en';
    else lang = 'ka';
  }
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
  });
  applyTranslations();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
  });
}

/* ══════════════════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════════════════ */
function initNav() {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('nav-burger');
  const mobileMenu = document.getElementById('nav-mobile');

  // Scroll → add .scrolled class
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile burger toggle
  burger?.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    mobileMenu?.classList.toggle('open', open);
    mobileMenu?.setAttribute('aria-hidden', String(!open));
  });

  // Close mobile on link click
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger?.classList.remove('open');
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      burger?.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   HERO COUNTER ANIMATION
══════════════════════════════════════════════════════════════ */
function animateCounter(el, target, duration = 1400) {
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const statEls = document.querySelectorAll('.hero__stat-num[data-count]');
  if (!statEls.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      animateCounter(el, parseInt(el.dataset.count, 10));
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  statEls.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════════════
   REVEAL ON SCROLL
══════════════════════════════════════════════════════════════ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════════════
   TESTIMONIALS CAROUSEL
══════════════════════════════════════════════════════════════ */
function initCarousel() {
  const track  = document.getElementById('test-track');
  const dotsEl = document.getElementById('test-dots');
  const prevBtn = document.getElementById('test-prev');
  const nextBtn = document.getElementById('test-next');
  if (!track || !dotsEl) return;

  const cards = track.querySelectorAll('.test-card');
  slideTotal = cards.length;
  if (slideTotal === 0) return;

  // Determine how many cards are visible
  const getVisible = () => window.innerWidth >= 900 ? 2 : 1;

  // Build dots
  const buildDots = () => {
    dotsEl.innerHTML = '';
    const visible = getVisible();
    const pages = Math.ceil(slideTotal / visible);
    for (let i = 0; i < pages; i++) {
      const btn = document.createElement('button');
      btn.className = 'test-dot' + (i === 0 ? ' active' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-label', `Slide ${i + 1}`);
      btn.addEventListener('click', () => goTo(i * visible));
      dotsEl.appendChild(btn);
    }
  };

  const updateDots = () => {
    const visible = getVisible();
    const page = Math.floor(currentSlide / visible);
    dotsEl.querySelectorAll('.test-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === page);
    });
  };

  const goTo = (index) => {
    const visible = getVisible();
    const maxSlide = Math.max(0, slideTotal - visible);
    currentSlide = Math.max(0, Math.min(index, maxSlide));
    const cardWidth = cards[0].getBoundingClientRect().width + 24; // gap
    track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    updateDots();
  };

  prevBtn?.addEventListener('click', () => {
    const visible = getVisible();
    goTo(currentSlide - visible);
    resetAutoSlide();
  });

  nextBtn?.addEventListener('click', () => {
    const visible = getVisible();
    const atEnd = currentSlide + visible >= slideTotal;
    goTo(atEnd ? 0 : currentSlide + visible);
    resetAutoSlide();
  });

  // Touch/swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      const visible = getVisible();
      if (dx < 0) goTo(currentSlide + visible);
      else goTo(currentSlide - visible);
    }
  });

  // Auto-slide
  const startAutoSlide = () => {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(() => {
      const visible = getVisible();
      const atEnd = currentSlide + visible >= slideTotal;
      goTo(atEnd ? 0 : currentSlide + visible);
    }, 5000);
  };

  const resetAutoSlide = () => { startAutoSlide(); };

  // Pause on hover
  track.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
  track.addEventListener('mouseleave', startAutoSlide);

  buildDots();
  startAutoSlide();

  // Rebuild on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      buildDots();
      goTo(0);
    }, 200);
  });
}

/* ══════════════════════════════════════════════════════════════
   FORM VALIDATION + SUBMISSION
══════════════════════════════════════════════════════════════ */
function initForm() {
  const form       = document.getElementById('prop-form');
  const thankYou   = document.getElementById('form-thank-you');
  const submitBtn  = document.getElementById('form-submit');
  if (!form) return;

  const validators = {
    'f-name':     val => val.trim().length >= 2 ? null : 'err.required',
    'f-phone':    val => /^\+?[\d\s\-()]{7,}$/.test(val.trim()) ? null : 'err.phone',
    'f-email':    val => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? null : 'err.email',
    'f-location': val => val ? null : 'err.required',
    'f-type':     val => val ? null : 'err.required',
    'f-budget':   val => val ? null : 'err.required',
  };

  function showError(inputEl, msgKey) {
    inputEl.classList.add('error');
    const errEl = inputEl.parentElement?.querySelector('.form-error');
    if (errEl) errEl.textContent = t(msgKey);
  }

  function clearError(inputEl) {
    inputEl.classList.remove('error');
    const errEl = inputEl.parentElement?.querySelector('.form-error');
    if (errEl) errEl.textContent = '';
  }

  // Live validation on blur
  Object.keys(validators).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => {
      const err = validators[id](el.value);
      if (err) showError(el, err);
      else clearError(el);
    });
    el.addEventListener('input', () => {
      if (el.classList.contains('error')) {
        const err = validators[id](el.value);
        if (!err) clearError(el);
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    // Validate all fields
    Object.entries(validators).forEach(([id, fn]) => {
      const el = document.getElementById(id);
      if (!el) return;
      const err = fn(el.value);
      if (err) { showError(el, err); valid = false; }
      else clearError(el);
    });

    // Consent
    const consent = document.getElementById('f-consent');
    const consentErr = document.getElementById('consent-error');
    if (consent && !consent.checked) {
      if (consentErr) consentErr.textContent = t('err.consent');
      valid = false;
    } else if (consentErr) {
      consentErr.textContent = '';
    }

    if (!valid) return;

    // Build WhatsApp message from form fields
    const name     = document.getElementById('f-name')?.value.trim()     || '';
    const phone    = document.getElementById('f-phone')?.value.trim()    || '';
    const wa       = document.getElementById('f-whatsapp')?.value.trim() || '';
    const email    = document.getElementById('f-email')?.value.trim()    || '';
    const location = document.getElementById('f-location');
    const locText  = location?.options[location.selectedIndex]?.text     || '';
    const type     = document.getElementById('f-type');
    const typeText = type?.options[type.selectedIndex]?.text             || '';
    const area     = document.getElementById('f-area');
    const areaText = area?.value ? area.options[area.selectedIndex]?.text : '';
    const budget   = document.getElementById('f-budget');
    const budgetText = budget?.options[budget.selectedIndex]?.text        || '';
    const notes    = document.getElementById('f-notes')?.value.trim()    || '';

    const lines = [
      '*Adjara Property Finder — განაცხადი*',
      '',
      `• სახელი: ${name}`,
      `• ტელეფონი: ${phone}`,
      wa    ? `• WhatsApp: ${wa}`    : null,
      email ? `• Email: ${email}`    : null,
      '',
      `• ლოკაცია: ${locText}`,
      `• ტიპი: ${typeText}`,
      areaText   ? `• ფართი: ${areaText}` : null,
      `• ბიუჯეტი: ${budgetText}`,
      notes ? `• სურვილები: ${notes}` : null,
    ].filter(Boolean).join('\n');

    const waMsg = encodeURIComponent(lines);

    // 1) WhatsApp — synchronous, user gesture-ის შიგნით
    window.open(`https://wa.me/995593484888?text=${waMsg}`, '_blank');

    // 2) Email — Web3Forms, ფონში async
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: 'd6fe4fa1-122d-460a-9ef1-9d737c3cbe55',
        subject:    'Adjara Property Finder — ახალი განაცხადი',
        სახელი:     name,
        ტელეფონი:   phone,
        WhatsApp:   wa    || '—',
        Email:      email || '—',
        ლოკაცია:    locText,
        ტიპი:       typeText,
        ფართი:      areaText   || '—',
        ბიუჯეტი:   budgetText,
        სურვილები:  notes || '—',
      })
    }).catch(() => {});

    form.hidden = true;
    if (thankYou) thankYou.hidden = false;
  });
}

/* ══════════════════════════════════════════════════════════════
   FLOATING WHATSAPP — show after scroll
══════════════════════════════════════════════════════════════ */
function initFloatingWA() {
  const btn = document.getElementById('wa-float');
  if (!btn) return;

  // Hidden by default via opacity
  btn.style.opacity = '0';
  btn.style.transform = 'scale(0.6)';
  btn.style.transition = 'opacity .4s ease, transform .4s ease, box-shadow .3s ease';
  btn.style.pointerEvents = 'none';

  const show = () => {
    btn.style.opacity  = '1';
    btn.style.transform = 'scale(1)';
    btn.style.pointerEvents = 'auto';
  };
  const hide = () => {
    btn.style.opacity  = '0';
    btn.style.transform = 'scale(0.6)';
    btn.style.pointerEvents = 'none';
  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) show(); else hide();
  }, { passive: true });
}

/* ══════════════════════════════════════════════════════════════
   LAZY IMAGES (background-image divs)
══════════════════════════════════════════════════════════════ */
function initLazyBg() {
  const els = document.querySelectorAll('.loc__card-img, .hero__bg');
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // background-image is already inline — nothing needed
        // (for a real lazy-bg, store URL in data-bg and set it here)
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '200px' });

  els.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════════════
   BOOT
══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNav();
  initReveal();
  initCounters();
  initCarousel();
  initForm();
  initFloatingWA();
  initLazyBg();
});