function detectLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');

  if (urlLang) {
    localStorage.setItem('preferredLang', urlLang);
    return urlLang;
  }

  const storedLang = localStorage.getItem('preferredLang');
  if (storedLang) return storedLang;

  // Ambil bahasa dari browser
  const browserLang = navigator.language || navigator.userLanguage;
  const normalizedLang = browserLang.split('-')[0]; // e.g. "en-US" → "en"

  // Kamu bisa tambahkan validasi di sini kalau cuma support bahasa tertentu
  const supportedLangs = ['id', 'en', 'ru', 'de', 'ja', 'it', 'ko', 'zh']; // contoh
  if (supportedLangs.includes(normalizedLang)) {
    localStorage.setItem('preferredLang', normalizedLang);
    return normalizedLang;
  }

  // fallback default
  return 'id';
}

let languageInitialized = false;
function initializeLanguage() {
  if (languageInitialized) {
    return;
  }
  i18next
  .use(i18nextHttpBackend)
  .init({
    lng: detectLanguage(),
    fallbackLng: 'id',
    debug: false,
    backend: {
      loadPath: '../locales/{{lng}}/translation.json'
    }
  }, function(err, t) {
    if (err) return console.error(err);
    updateContent();
    languageInitialized = true;
  });
}

function updateContent() {
  if (!languageInitialized) {
    initializeLanguage();
  }
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = i18next.t(key);
    if (value && value !== key) {
      el.innerHTML = value;
    }
  });

  // Untuk placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = i18next.t(key);
    if (value && value !== key) {
      el.setAttribute('placeholder', value);
    }
  });

  // (opsional) Untuk title atau alt juga bisa begini:
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const value = i18next.t(key);
    if (value && value !== key) {
      el.setAttribute('title', value);
    }
  });
}

// Ganti bahasa secara dinamis
function changeLanguage(lang) {
  i18next.changeLanguage(lang, () => {
    localStorage.setItem('lang', lang);
    updateContent();
  });
}

