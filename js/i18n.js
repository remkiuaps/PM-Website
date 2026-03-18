/* ========================================
   PACKING MASTER - Internationalization (i18n)
   Supports PL and EN
   ======================================== */

const translations = {
  pl: {
    // Nav
    "nav.home": "Strona Główna",
    "nav.about": "O Nas",
    "nav.products": "Produkty",
    "nav.blog": "Blog",
    "nav.contact": "Kontakt",

    // Hero
    "hero.title": "Profesjonalne <span>materiały pakujące</span> dla Twojego biznesu",
    "hero.subtitle": "Produkujemy i dostarczamy najwyższej jakości materiały pakujące. Bezpieczne opakowania, terminowe dostawy, konkurencyjne ceny.",
    "hero.cta1": "Sprawdź ofertę",
    "hero.cta2": "Skontaktuj się",

    // Benefits
    "benefits.label": "Dlaczego my",
    "benefits.title": "Kompleksowe rozwiązania pakujące",
    "benefits.subtitle": "Od 10 lat dostarczamy sprawdzone rozwiązania logistyczne i pakujące dla firm z całej Polski.",
    "benefits.1.title": "Najwyższa jakość",
    "benefits.1.desc": "Nasze produkty spełniają najwyższe standardy jakości i posiadają niezbędne certyfikaty.",
    "benefits.2.title": "Szybka dostawa",
    "benefits.2.desc": "Realizujemy zamówienia w ciągu 24-48h. Dostarczamy na terenie całego kraju.",
    "benefits.3.title": "Konkurencyjne ceny",
    "benefits.3.desc": "Jako producent oferujemy najlepsze ceny bez pośredników. Rabaty przy większych zamówieniach.",
    "benefits.4.title": "Ekologiczne materiały",
    "benefits.4.desc": "Oferujemy szeroką gamę materiałów ekologicznych, nadających się do recyklingu.",

    // Products
    "products.label": "Nasza oferta",
    "products.title": "Materiały pakujące",
    "products.subtitle": "Szeroka gama produktów do pakowania, zabezpieczania i transportu towarów.",
    "products.1.title": "Kartony i pudła",
    "products.1.desc": "Kartony klapowe, fasonowe i specjalistyczne w każdym rozmiarze. Produkcja na zamówienie.",
    "products.2.title": "Folie i taśmy",
    "products.2.desc": "Folie stretch, bąbelkowe, taśmy pakowe i zabezpieczające. Materiały o wysokiej wytrzymałości.",
    "products.3.title": "Wypełniacze",
    "products.3.desc": "Papier pakowy, wypełniacze styropianowe, poduszki powietrzne. Ochrona produktów w transporcie.",
    "products.4.title": "Materiały ekologiczne",
    "products.4.desc": "Papier kraft, tektura falista, materiały biodegradowalne. Pakowanie przyjazne środowisku.",
    "products.5.title": "Palety i zabezpieczenia",
    "products.5.desc": "Palety drewniane, narożniki, folie kapturowe. Kompleksowe zabezpieczenie ładunku.",
    "products.6.title": "Rozwiązania na zamówienie",
    "products.6.desc": "Projektujemy i produkujemy opakowania dopasowane do indywidualnych potrzeb klienta.",
    "products.more": "Sprawdź szczegóły",

    // Testimonials
    "testimonials.label": "Opinie klientów",
    "testimonials.title": "Zaufali nam",
    "testimonials.subtitle": "Sprawdź, co mówią o nas nasi klienci i partnerzy biznesowi.",
    "testimonials.1.text": "Współpraca z Packing Master to czysta przyjemność. Materiały zawsze najwyższej jakości, a dostawy terminowe. Polecam każdej firmie e-commerce.",
    "testimonials.1.name": "Anna Kowalska",
    "testimonials.1.role": "Właścicielka, Sklep Online AK",
    "testimonials.2.text": "Od kiedy korzystamy z materiałów Packing Master, liczba uszkodzeń w transporcie spadła o 80%. Doskonałe kartony i wypełniacze.",
    "testimonials.2.name": "Marcin Nowak",
    "testimonials.2.role": "Kierownik logistyki, TechParts Sp. z o.o.",
    "testimonials.3.text": "Profesjonalne podejście, szybki czas realizacji i świetna obsługa klienta. Zamówienia zawsze kompletne i dobrze zabezpieczone.",
    "testimonials.3.name": "Katarzyna Wiśniewska",
    "testimonials.3.role": "Manager, FreshBox",

    // Partners
    "partners.label": "Partnerzy",
    "partners.title": "Zaufali nam",

    // Blog
    "blog.label": "Blog",
    "blog.title": "Aktualności i porady",
    "blog.subtitle": "Dzielimy się wiedzą o pakowaniu, logistyce i trendach branżowych.",
    "blog.read": "Czytaj więcej",
    "blog.1.date": "15 marca 2026",
    "blog.1.title": "Jak wybrać odpowiednie opakowania dla e-commerce?",
    "blog.1.desc": "Poradnik doboru materiałów pakujących dla sklepów internetowych. Od kartonów po wypełniacze.",
    "blog.2.date": "10 marca 2026",
    "blog.2.title": "Ekologiczne pakowanie - trendy 2026",
    "blog.2.desc": "Poznaj najnowsze rozwiązania w dziedzinie ekologicznego pakowania i zrównoważonego rozwoju.",
    "blog.3.date": "5 marca 2026",
    "blog.3.title": "5 sposobów na obniżenie kosztów pakowania",
    "blog.3.desc": "Praktyczne porady, jak zoptymalizować koszty pakowania w firmie bez utraty jakości.",

    // CTA
    "cta.title": "Gotowy na współpracę?",
    "cta.subtitle": "Skontaktuj się z nami i otrzymaj bezpłatną wycenę dopasowaną do potrzeb Twojej firmy.",
    "cta.button": "Skontaktuj się z nami",

    // FAQ
    "faq.label": "FAQ",
    "faq.title": "Często zadawane pytania",
    "faq.1.q": "Jaki jest minimalny rozmiar zamówienia?",
    "faq.1.a": "Minimalne zamówienie to 100 sztuk kartonów lub 1 paleta materiałów pakujących. Dla stałych klientów oferujemy elastyczne warunki.",
    "faq.2.q": "Jak szybko realizujecie zamówienia?",
    "faq.2.a": "Standardowe zamówienia realizujemy w ciągu 24-48 godzin roboczych. Zamówienia niestandardowe i produkcja na zamówienie - od 5 do 10 dni roboczych.",
    "faq.3.q": "Czy oferujecie darmową dostawę?",
    "faq.3.a": "Tak, oferujemy darmową dostawę dla zamówień powyżej 2000 zł netto na terenie całej Polski.",
    "faq.4.q": "Czy możecie wyprodukować opakowania z naszym logo?",
    "faq.4.a": "Oczywiście! Oferujemy pełen zakres personalizacji opakowań - nadruki, logotypy, niestandardowe wymiary. Skontaktuj się z nami po indywidualną wycenę.",
    "faq.5.q": "Jakie certyfikaty posiadają Wasze produkty?",
    "faq.5.a": "Nasze produkty posiadają certyfikaty FSC, PEFC oraz spełniają normy ISO 9001. Materiały ekologiczne posiadają certyfikaty biodegradowalności.",

    // Contact
    "contact.label": "Kontakt",
    "contact.title": "Skontaktuj się z nami",
    "contact.subtitle": "Masz pytania? Chętnie pomożemy. Wypełnij formularz lub skorzystaj z danych kontaktowych.",
    "contact.form.name": "Imię i nazwisko",
    "contact.form.email": "Adres e-mail",
    "contact.form.phone": "Numer telefonu",
    "contact.form.company": "Nazwa firmy",
    "contact.form.subject": "Temat",
    "contact.form.message": "Wiadomość",
    "contact.form.send": "Wyślij wiadomość",
    "contact.form.placeholder.name": "Jan Kowalski",
    "contact.form.placeholder.email": "jan@firma.pl",
    "contact.form.placeholder.phone": "+48 123 456 789",
    "contact.form.placeholder.company": "Nazwa Twojej firmy",
    "contact.form.placeholder.subject": "Zapytanie ofertowe",
    "contact.form.placeholder.message": "Twoja wiadomość...",
    "contact.info.phone": "+48 123 456 789",
    "contact.info.email": "kontakt@packingmaster.com",
    "contact.info.address": "ul. Przemysłowa 15\n00-000 Warszawa, Polska",
    "contact.info.hours": "Poniedziałek - Piątek\n8:00 - 16:00",
    "contact.info.phone.label": "Telefon",
    "contact.info.email.label": "E-mail",
    "contact.info.address.label": "Adres",
    "contact.info.hours.label": "Godziny otwarcia",

    // About
    "about.label": "O nas",
    "about.title": "Poznaj Packing Master",
    "about.subtitle": "Jesteśmy polskim producentem materiałów pakujących z ponad 10-letnim doświadczeniem na rynku.",
    "about.story.title": "Nasza historia",
    "about.story.p1": "Packing Master to firma z wieloletnim doświadczeniem w branży materiałów pakujących. Od początku naszej działalności stawiamy na jakość, innowacyjność i satysfakcję klienta.",
    "about.story.p2": "Nasza nowoczesna linia produkcyjna pozwala na realizację zamówień o różnej skali - od małych firm po duże korporacje. Stale inwestujemy w nowe technologie, aby oferować najlepsze rozwiązania pakujące na rynku.",
    "about.mission.title": "Nasza misja",
    "about.mission.desc": "Dostarczamy rozwiązania pakujące, które chronią produkty naszych klientów i środowisko naturalne. Wierzymy, że wysokiej jakości opakowania to podstawa udanego biznesu.",
    "about.values.title": "Nasze wartości",
    "about.values.1": "Jakość bez kompromisów",
    "about.values.2": "Innowacyjność i rozwój",
    "about.values.3": "Odpowiedzialność ekologiczna",
    "about.values.4": "Partnerskie relacje z klientami",
    "about.gallery.title": "Nasza firma",
    "about.gallery.subtitle": "Zobacz, jak pracujemy i jakie mamy zaplecze produkcyjne.",

    // Pricing
    "pricing.label": "Cennik",
    "pricing.title": "Plany współpracy",
    "pricing.subtitle": "Dopasuj ofertę do potrzeb swojej firmy. Każdy plan obejmuje pełne wsparcie.",
    "pricing.1.name": "Starter",
    "pricing.1.price": "Indywidualny",
    "pricing.1.desc": "Dla małych firm",
    "pricing.1.f1": "Kartony standardowe",
    "pricing.1.f2": "Folie i taśmy",
    "pricing.1.f3": "Dostawa od 2000 zł",
    "pricing.1.f4": "Wsparcie telefoniczne",
    "pricing.2.name": "Business",
    "pricing.2.price": "Indywidualny",
    "pricing.2.desc": "Dla średnich firm",
    "pricing.2.f1": "Pełna gama produktów",
    "pricing.2.f2": "Darmowa dostawa",
    "pricing.2.f3": "Dedykowany opiekun",
    "pricing.2.f4": "Rabaty ilościowe",
    "pricing.3.name": "Enterprise",
    "pricing.3.price": "Indywidualny",
    "pricing.3.desc": "Dla dużych firm",
    "pricing.3.f1": "Produkcja na zamówienie",
    "pricing.3.f2": "Priorytetowa dostawa",
    "pricing.3.f3": "Dedykowany zespół",
    "pricing.3.f4": "Nadruki i branding",
    "pricing.cta": "Zapytaj o wycenę",

    // Footer
    "footer.desc": "Packing Master - producent i dostawca profesjonalnych materiałów pakujących. Działamy na rynku od ponad 10 lat, oferując kompleksowe rozwiązania logistyczne.",
    "footer.menu": "Menu",
    "footer.products": "Produkty",
    "footer.contact": "Kontakt",
    "footer.social": "Social Media",
    "footer.copyright": "© 2026 Packing Master. Wszelkie prawa zastrzeżone.",

    // Blog page
    "blogpage.label": "Blog",
    "blogpage.title": "Aktualności i porady",
    "blogpage.subtitle": "Dzielimy się wiedzą na temat pakowania, logistyki i nowych trendów w branży."
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Professional <span>packaging materials</span> for your business",
    "hero.subtitle": "We produce and deliver the highest quality packaging materials. Secure packaging, timely deliveries, competitive prices.",
    "hero.cta1": "View offer",
    "hero.cta2": "Contact us",

    // Benefits
    "benefits.label": "Why us",
    "benefits.title": "Comprehensive packaging solutions",
    "benefits.subtitle": "For over 10 years, we have been providing proven logistics and packaging solutions for companies across Poland.",
    "benefits.1.title": "Highest quality",
    "benefits.1.desc": "Our products meet the highest quality standards and hold all necessary certifications.",
    "benefits.2.title": "Fast delivery",
    "benefits.2.desc": "We fulfill orders within 24-48 hours. We deliver nationwide across Poland.",
    "benefits.3.title": "Competitive prices",
    "benefits.3.desc": "As a manufacturer, we offer the best prices without intermediaries. Discounts on larger orders.",
    "benefits.4.title": "Eco-friendly materials",
    "benefits.4.desc": "We offer a wide range of eco-friendly, recyclable packaging materials.",

    // Products
    "products.label": "Our offer",
    "products.title": "Packaging materials",
    "products.subtitle": "A wide range of products for packing, securing, and transporting goods.",
    "products.1.title": "Boxes & cartons",
    "products.1.desc": "Standard, custom-shaped, and specialist cartons in every size. Custom production available.",
    "products.2.title": "Films & tapes",
    "products.2.desc": "Stretch films, bubble wrap, packing and security tapes. High-durability materials.",
    "products.3.title": "Fillers",
    "products.3.desc": "Packing paper, Styrofoam fillers, air cushions. Product protection in transit.",
    "products.4.title": "Eco materials",
    "products.4.desc": "Kraft paper, corrugated cardboard, biodegradable materials. Environmentally friendly packaging.",
    "products.5.title": "Pallets & protection",
    "products.5.desc": "Wooden pallets, corner protectors, shrink films. Comprehensive cargo protection.",
    "products.6.title": "Custom solutions",
    "products.6.desc": "We design and produce packaging tailored to individual customer needs.",
    "products.more": "View details",

    // Testimonials
    "testimonials.label": "Testimonials",
    "testimonials.title": "Trusted by many",
    "testimonials.subtitle": "See what our clients and business partners say about us.",
    "testimonials.1.text": "Working with Packing Master is a pleasure. Materials are always top quality and deliveries are on time. Highly recommend for any e-commerce business.",
    "testimonials.1.name": "Anna Kowalska",
    "testimonials.1.role": "Owner, AK Online Store",
    "testimonials.2.text": "Since we started using Packing Master materials, transit damage has dropped by 80%. Excellent cartons and fillers.",
    "testimonials.2.name": "Marcin Nowak",
    "testimonials.2.role": "Logistics Manager, TechParts Ltd.",
    "testimonials.3.text": "Professional approach, quick turnaround, and great customer service. Orders are always complete and well-secured.",
    "testimonials.3.name": "Katarzyna Wiśniewska",
    "testimonials.3.role": "Manager, FreshBox",

    // Partners
    "partners.label": "Partners",
    "partners.title": "Trusted by",

    // Blog
    "blog.label": "Blog",
    "blog.title": "News & tips",
    "blog.subtitle": "We share knowledge about packaging, logistics, and industry trends.",
    "blog.read": "Read more",
    "blog.1.date": "March 15, 2026",
    "blog.1.title": "How to choose the right packaging for e-commerce?",
    "blog.1.desc": "A guide to selecting packaging materials for online stores. From cartons to fillers.",
    "blog.2.date": "March 10, 2026",
    "blog.2.title": "Eco-friendly packaging - 2026 trends",
    "blog.2.desc": "Discover the latest solutions in eco-friendly packaging and sustainable development.",
    "blog.3.date": "March 5, 2026",
    "blog.3.title": "5 ways to reduce packaging costs",
    "blog.3.desc": "Practical tips on optimizing packaging costs in your business without sacrificing quality.",

    // CTA
    "cta.title": "Ready to cooperate?",
    "cta.subtitle": "Contact us and receive a free quote tailored to your company's needs.",
    "cta.button": "Contact us",

    // FAQ
    "faq.label": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.1.q": "What is the minimum order size?",
    "faq.1.a": "The minimum order is 100 cartons or 1 pallet of packaging materials. We offer flexible terms for regular customers.",
    "faq.2.q": "How quickly do you fulfill orders?",
    "faq.2.a": "Standard orders are fulfilled within 24-48 business hours. Custom orders and made-to-order production - 5 to 10 business days.",
    "faq.3.q": "Do you offer free delivery?",
    "faq.3.a": "Yes, we offer free delivery for orders over PLN 2,000 net across all of Poland.",
    "faq.4.q": "Can you produce packaging with our logo?",
    "faq.4.a": "Of course! We offer a full range of packaging customization - prints, logos, non-standard sizes. Contact us for an individual quote.",
    "faq.5.q": "What certifications do your products have?",
    "faq.5.a": "Our products hold FSC, PEFC certifications and meet ISO 9001 standards. Our eco-friendly materials hold biodegradability certificates.",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Get in touch",
    "contact.subtitle": "Have questions? We're happy to help. Fill out the form or use our contact details.",
    "contact.form.name": "Full name",
    "contact.form.email": "Email address",
    "contact.form.phone": "Phone number",
    "contact.form.company": "Company name",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send message",
    "contact.form.placeholder.name": "John Smith",
    "contact.form.placeholder.email": "john@company.com",
    "contact.form.placeholder.phone": "+48 123 456 789",
    "contact.form.placeholder.company": "Your company name",
    "contact.form.placeholder.subject": "Quote request",
    "contact.form.placeholder.message": "Your message...",
    "contact.info.phone": "+48 123 456 789",
    "contact.info.email": "contact@packingmaster.com",
    "contact.info.address": "15 Przemyslowa St.\n00-000 Warsaw, Poland",
    "contact.info.hours": "Monday - Friday\n8:00 AM - 4:00 PM",
    "contact.info.phone.label": "Phone",
    "contact.info.email.label": "Email",
    "contact.info.address.label": "Address",
    "contact.info.hours.label": "Business hours",

    // About
    "about.label": "About us",
    "about.title": "Meet Packing Master",
    "about.subtitle": "We are a Polish manufacturer of packaging materials with over 10 years of experience in the market.",
    "about.story.title": "Our story",
    "about.story.p1": "Packing Master is a company with years of experience in the packaging materials industry. From the very beginning, we have focused on quality, innovation, and customer satisfaction.",
    "about.story.p2": "Our modern production line allows us to fulfill orders of various scales - from small businesses to large corporations. We continuously invest in new technologies to offer the best packaging solutions on the market.",
    "about.mission.title": "Our mission",
    "about.mission.desc": "We deliver packaging solutions that protect our customers' products and the natural environment. We believe that high-quality packaging is the foundation of a successful business.",
    "about.values.title": "Our values",
    "about.values.1": "Uncompromising quality",
    "about.values.2": "Innovation and growth",
    "about.values.3": "Environmental responsibility",
    "about.values.4": "Partnership relations with clients",
    "about.gallery.title": "Our company",
    "about.gallery.subtitle": "See how we work and our production facilities.",

    // Pricing
    "pricing.label": "Pricing",
    "pricing.title": "Cooperation plans",
    "pricing.subtitle": "Tailor the offer to your company's needs. Every plan includes full support.",
    "pricing.1.name": "Starter",
    "pricing.1.price": "Individual",
    "pricing.1.desc": "For small businesses",
    "pricing.1.f1": "Standard cartons",
    "pricing.1.f2": "Films and tapes",
    "pricing.1.f3": "Delivery from PLN 2,000",
    "pricing.1.f4": "Phone support",
    "pricing.2.name": "Business",
    "pricing.2.price": "Individual",
    "pricing.2.desc": "For medium businesses",
    "pricing.2.f1": "Full product range",
    "pricing.2.f2": "Free delivery",
    "pricing.2.f3": "Dedicated account manager",
    "pricing.2.f4": "Volume discounts",
    "pricing.3.name": "Enterprise",
    "pricing.3.price": "Individual",
    "pricing.3.desc": "For large businesses",
    "pricing.3.f1": "Custom production",
    "pricing.3.f2": "Priority delivery",
    "pricing.3.f3": "Dedicated team",
    "pricing.3.f4": "Prints and branding",
    "pricing.cta": "Request a quote",

    // Footer
    "footer.desc": "Packing Master - manufacturer and supplier of professional packaging materials. We have been operating in the market for over 10 years, offering comprehensive logistics solutions.",
    "footer.menu": "Menu",
    "footer.products": "Products",
    "footer.contact": "Contact",
    "footer.social": "Social Media",
    "footer.copyright": "© 2026 Packing Master. All rights reserved.",

    // Blog page
    "blogpage.label": "Blog",
    "blogpage.title": "News & tips",
    "blogpage.subtitle": "We share our knowledge about packaging, logistics, and new industry trends."
  }
};

let currentLang = localStorage.getItem('pm-lang') || 'pl';

function t(key) {
  return translations[currentLang]?.[key] || translations['pl']?.[key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('pm-lang', lang);
  translatePage();
  updateLangButtons();
}

function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = value;
    } else {
      el.innerHTML = value;
    }
  });
  document.documentElement.lang = currentLang;
}

function updateLangButtons() {
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  translatePage();
  updateLangButtons();

  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});
