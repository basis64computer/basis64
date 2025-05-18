let indexStatus = false;
let profileStatus = false;
let developerStatus = false;
let priceStatus = false;
let paymentStatus = false;
let feedbackStatus = false;
let aboutStatus = false;

let isAdmin = false;

let lang = {
  "sidenav": {
    "index": "Halaman Awal",
    "profile": "Lihat profil",
    "developer": "Opsi pengembang",
    "price": "Harga produk",
    "payment": "Aktivasi & pembayaran",
    "feedback": "Feedback",
    "faq": "FAQ",
    "about": "Tentang kami"
  },
  "pages": {
    "index": {
      "contentTitle": "Terjemahkan Bahasa Dayak Kenyah dengan Mudah!",
      "contentDescription": "BASIS-64 menyediakan berbagai fasilitas lengkap, termasuk penerjemah bahasa Dayak Kenyah berbasis NLP (Natural Language Processing). Beberapa fitur premium memerlukan pembayaran untuk dapat diakses. Login dengan akun Google untuk mendapatkan trial gratis selama 1 hari. Tekan CTRL + SHIFT + R secara bersamaan untuk memuat ulang website ini.",
      "visitorTitle": "Jumlah pengunjung hari ini",
      "dictionaryTitle": "Jumlah kosakata Dayak Kenyah",
      "accuracyTitle": "Akurasi penerjemah",
    }
  },
  "messages": {
    "loginLoading": "Mohon tunggu, sedang login...",
    "LOGIN_FAILED": "Tidak dapat login.",
    "WRONG_PASSWORD": "Username atau password salah.",
    "ACCOUNT_USED": "Akun ini telah digunakan oleh perangkat lain.",
    "INVALID_SESSION_ID": "Sesi telah berakhir, refresh kembali halaman ini.",
    "ACCOUNT_NOT_FOUND": "Akun ini belum terdaftar di BASIS-64.",
    "logoutLoading": "Mohon tunggu, sedang logout..."
  },
  "etc": {
    "login": "Login",
    "register": "Daftar akun",
    "logout": "Log out",
  }
}

let featuresLanguage = {
  "id": {
    "translator-dayak-kenyah": {"title": ""}
  }
}

let searchFeatures = [
  {"id": "index", "name": "Homepage", "alternative_name": "Halaman awal", "description": "", "destination": "index.html"},
  {"id": "profie", "name": "User profie", "alternative_name": "Profil pengguna", "description": "", "destination": "profile.html"},
  {"id": "developer", "name": "Developer zone", "alternative_name": "Opsi pengembang", "description": "", "destination": "developer.html"},
  {"id": "price", "name": "Price", "alternative_name": "Harga produk", "description": "", "destination": "price.html"},
  {"id": "payment", "name": "Activation & Payment", "alternative_name": "Aktivasi & pembayaran", "description": "", "destination": "payment.html"},
  {"id": "feedback", "name": "Feedback", "alternative_name": "Feedback", "description": "", "destination": "feedback.html"},
  {"id": "faq", "name": "FAQ", "alternative_name": "FAQ", "description": "", "destination": "faq.html"},
  {"id": "about", "name": "About us", "alternative_name": "Tentang kami", "description": "", "destination": "about.html"}
];


let mode = "white";
let navPagesNotLogin = [
  {"id": "index", "title": "Halaman awal", "destination": "index.html", "icon": "house-fill"},
  {"id": "developer", "title": "Opsi pengembang", "destination": "developer.html", "icon": "braces"},
  {"id": "price", "title": "Harga produk", "destination": "price.html", "icon": "tags-fill"},
  {"id": "feedback", "title": "Feedback", "destination": "feedback.html", "icon": "chat-left-text-fill"},
  {"id": "faq", "title": "FAQ", "destination": "faq.html", "icon": "question-square-fill"},
  {"id": "about", "title": "Tentang kami", "destination": "about.html", "icon": "info-square-fill"},
]

let navPagesLoggedIn = [
  {"id": "index", "title": "Halaman awal", "destination": "index.html", "icon": "house-fill"},
  {"id": "profile", "title": "Profil pengguna", "destination": "profile.html", "icon": "person-badge"},
  {"id": "developer", "title": "Opsi pengembang", "destination": "developer.html", "icon": "braces"},
  {"id": "price", "title": "Harga produk", "destination": "price.html", "icon": "tags-fill"},
  {"id": "payment", "title": "Aktivasi & pembayaran", "destination": "payment.html", "icon": "credit-card"},
  {"id": "feedback", "title": "Feedback", "destination": "feedback.html", "icon": "chat-left-text-fill"},
  {"id": "faq", "title": "FAQ", "destination": "faq.html", "icon": "question-square-fill"},
  {"id": "about", "title": "Tentang kami", "destination": "about.html", "icon": "info-square-fill"},
]

function getCurrentPage() {
  const path = window.location.pathname; // "/login/adsf"
  const segments = path.split('/');      // ["", "login", "adsf"]
  const firstSegment = segments[1];      // "login"
}

function createNavComponent(id, caption, icon, destination) {
  return `
    <li class="relative px-6 py-3">
              ${(page_id == id)?'<span class="absolute inset-y-0 left-0 w-1 bg-primary-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>':''}
              <a class="${(page_id == id)?'inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-200':'inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'}" href="${destination}">
                <i class="bi bi-${icon}"></i>
                <span class="ml-4" data-i18n="sidenav.${id}">${caption}</span>
              </a>
            </li>
  `;
}

function initializeNavList() {
  let div = "";
  let navPages = (account)?navPagesLoggedIn:navPagesNotLogin;
  for (var i = 0; i < navPages.length; i++) {
    div += createNavComponent(navPages[i].id, lang.sidenav[navPages[i].id], navPages[i].icon, navPages[i].destination);
  }
  document.getElementById('sidenav-main').innerHTML = `<div class="py-4 text-gray-500 dark:text-gray-400">
          <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center" href="#"><img src="./assets/img/logo.png" width="48px" height="48px" alt="main_logo"> BASIS-64 </a>
          <ul class="mt-6">
            ${div}
          </ul>
          <div class="px-6 my-6">
            ${getSideNavFooter()}
          </div>
        </div>`
}

function initializeNavbar() {
  document.getElementById('navbar').innerHTML = `
  <div class="container flex items-center justify-between h-full px-6 mx-auto text-gray-600 dark:text-gray-200">
            <!-- Mobile hamburger -->
            <button class="p-1 mr-5 -ml-1 rounded-md focus:outline-none focus:shadow-outline-primary" @click="toggleSideMenu" aria-label="Menu">
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
            </button>
            <!-- Search input -->
            <div class="flex justify-center flex-1 lg:mr-32">
              <div class="relative w-full max-w-xl mr-6 focus-within:text-primary-500">
                <div class="absolute inset-y-0 flex items-center pl-2">
                  <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <input oninput="handleSearch(this.value);" class="w-full pl-8 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" data-i18n-placeholder="navbar.search" placeholder="Cari di BASIS-64" aria-label="Search" />
              </div>
            </div>
            <ul class="flex items-center flex-shrink-0 gap-6">
              <!-- Theme toggler -->
              <li class="relative">
                <button class="rounded-md focus:outline-none focus:shadow-outline-primary" onclick="toogleDarkMode();" aria-label="Toggle color mode">
                  <template x-if="!dark">
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                  </template>
                  <template x-if="dark">
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                    </svg>
                  </template>
                </button>
              </li>
              <!-- Language menu -->
              <li class="relative">
                <button class="relative align-middle rounded-md focus:outline-none focus:shadow-outline-primary" @click="toggleNotificationsMenu" @keydown.escape="closeNotificationsMenu" aria-label="Notifications" aria-haspopup="true">
                  <img src="assets/img/flags/${localStorage.getItem("preferredLang")}.svg" class="border rounded-lg" />
                  <!-- Notification badge -->
                </button>
                <template x-if="isNotificationsMenuOpen">
                  <ul x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" @click.away="closeNotificationsMenu" @keydown.escape="closeNotificationsMenu" class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-neutral-700">
                    <li class="flex">
                      <a class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200" href="?lang=id">
                        <span>Indonesia (ID)</span>
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs leading-none"> <img src="assets/img/flags/id.svg" class="border rounded-lg" /> </span>
                      </a>
                    </li>
                    <li class="flex">
                      <a class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200" href="?lang=en">
                        <span>English (EN)</span>
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs leading-none"> <img src="assets/img/flags/en.svg" class="border rounded-lg" /> </span>
                      </a>
                    </li>
                    <li class="flex">
                      <a class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200" href="?lang=ru">
                        <span>Россия (RU)</span>
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs leading-none"> <img src="assets/img/flags/ru.svg" class="border rounded-lg" /> </span>
                      </a>
                    </li>
                    <li class="flex">
                      <a class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200" href="?lang=de">
                        <span>Deutsch (DE)</span>
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs leading-none"> <img src="assets/img/flags/de.svg" class="border rounded-lg" /> </span>
                      </a>
                    </li>
                    <li class="flex">
                      <a class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200" href="?lang=ja">
                        <span>日本 (JA)</span>
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs leading-none"> <img src="assets/img/flags/ja.svg" class="border rounded-lg" /> </span>
                      </a>
                    </li>
                    <li class="flex">
                      <a class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200" href="?lang=it">
                        <span>Italia (IT)</span>
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs leading-none"> <img src="assets/img/flags/it.svg" class="border rounded-lg" /> </span>
                      </a>
                    </li>
                    <li class="flex">
                      <a class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200" href="?lang=ko">
                        <span>한국 (KO)</span>
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs leading-none"> <img src="assets/img/flags/ko.svg" class="border rounded-lg" /> </span>
                      </a>
                    </li>
                    <li class="flex">
                      <a class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200" href="?lang=zh">
                        <span>中国 (ZH)</span>
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs leading-none"> <img src="assets/img/flags/zh.svg" class="border rounded-lg" /> </span>
                      </a>
                    </li>
                  </ul>
                </template>
              </li>
              <!-- Profile menu -->
              ${(account)?`<li class="relative">
                <button class="align-middle rounded-full focus:shadow-outline-primary focus:outline-none" @click="toggleProfileMenu" @keydown.escape="closeProfileMenu" aria-label="Account" aria-haspopup="true">
                  <img class="object-cover w-8 h-8 rounded-full" src="${account.photo}" alt="" aria-hidden="true" />
                </button>
                <template x-if="isProfileMenuOpen">
                  <ul x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" @click.away="closeProfileMenu" @keydown.escape="closeProfileMenu" class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-neutral-700" aria-label="submenu">
                    <li class="flex">
                      <a class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200" href="profile.html">
                        <svg class="w-4 h-4 mr-3" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <span data-i18n="navbar.profile">${i18next.t("navbar.profile")}</span>
                      </a>
                    </li>
                    <li class="flex">
                      <a class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200" href="#" onclick="logout();">
                        <svg class="w-4 h-4 mr-3" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                        </svg>
                        <span data-i18n="navbar.logout">${i18next.t("navbar.logout")}</span>
                      </a>
                    </li>
                  </ul>
                </template>
              </li>`:`        <a href="login.html" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center" data-i18n="navbar.login">Login</a>
`}
            </ul>
          </div>`;
}

//zyaUw4HS9WH1QD8e
// session: QLARxmtojYSYQZt1

function handlePageID() {
    if (page_id == "index") {
        indexStatus = true;
    } else if (page_id == "profile") {
        profileStatus = true;
    } else if (page_id == "developer") {
        developerStatus = true;
    } else if (page_id == "price") {
        priceStatus = true;
    } else if (page_id == "payment") {
        paymentStatus = true;
    } else if (page_id == "feedback") {
        feedbackStatus = true;
    } else if (page_id == "about") {
        aboutStatus = true;
    }
}

const brand = '<img src="./assets/img/logo.png" width="32px" height="32px" class="navbar-brand-img h-100" alt="main_logo"><span class="ms-1 font-weight-bold">BASIS-64</span><br/>The hub of unique tools';

function getSideNavFooter() {
    let text = (mode != 'white' && mode != 'light')?'text-white':'text-dark';
  if (account) {
    return `<div class="sidenav-footer mx-3">
      <div class="card card-plain shadow-none" id="sidenavCard">
        <div class="card-body text-center p-3 w-100 pt-0">
          <div class="docs-info">
            <h6 class="mb-0 ${text}">${account.name}</h6>
            <p class="text-xs font-weight-bold mb-0 ${text} opacity-6" data-i18n="sidenav.googleUser">Pengguna Google</p>
          </div>
        </div>
      </div>
            <div class="flex flex-col w-full space-y-2">

        <button class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 text-center" onclick="logout();" data-i18n="sidenav.logout">Log out</a>
        </div>
    </div>`;
  } else {
    return `<div class="sidenav-footer mx-1 ">
      <div class="card card-plain shadow-none" id="sidenavCard">
        <div class="card-body text-center p-3 w-100 pt-0">
          <div class="docs-info">
            <h6 class="mb-0 ${text}" data-i18n="sidenav.loginTitle">Belum login?</h6>
            <p class="text-xs font-weight-bold mb-0" data-i18n="sidenav.loginDescription">Login untuk mendapatkan trial gratis 1 hari.</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full space-y-2">
        <a href="login.html" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center" data-i18n="sidenav.login">Login</a>
        <a href="register.html" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" data-i18n="sidenav.register">Buat akun</a>

      </div>
    </div>`;
  }
}

function initializeSideNav() {
    let sidenav = document.getElementById('sidenav-main');
    //sidenav.setAttribute('class', `sidenav navbar navbar-vertical navbar-expand-xs border-end fixed-start shadow-none ${background} ${text}`);
    initializeNavList();
}

const sideNav2 = `<div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
        ${brand}
      </a>
    </div>
    <hr class="horizontal dark mt-0">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="./index.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-tv-2 text-dark text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Halaman Awal</span>
          </a>
        </li>

      </ul>
    </div>
    <div class="sidenav-footer mx-3 ">
      <div class="card card-plain shadow-none" id="sidenavCard">
        <img class="w-50 mx-auto" src="./assets/img/illustrations/icon-documentation.svg" alt="sidebar_illustration">
        <div class="card-body text-center p-3 w-100 pt-0">
          <div class="docs-info">
            <h6 class="mb-0">Need help?</h6>
            <p class="text-xs font-weight-bold mb-0">Please check our docs</p>
          </div>
        </div>
      </div>
      <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard" target="_blank" class="btn btn-dark btn-sm w-100 mb-3">Documentation</a>
      <a class="btn btn-primary btn-sm mb-0 w-100" href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=sidebarfree" type="button">Upgrade to pro</a>
    </div>`;

const menu = `<li><a class="dropdown-item" href="account-info.html">Lihat Akun</a></li>
              <li><a class="dropdown-item" href="activation.html">Daftar Harga</a></li>
              <li><a class="dropdown-item" href="payment.html">Pembayaran</a></li>
              <li><a class="dropdown-item" href="admin-login.html">Admin Login</a></li>
              <li><a class="dropdown-item" onclick="logout();">Logout</a></li>`;
const menu2 = `<li><a class="dropdown-item" href="login.html">Login</a></li>
              <li><a class="dropdown-item" href="register.html">Buat akun</a></li>
              <li><a class="dropdown-item" href="payment.html">Pembayaran</a></li>
              <li><a class="dropdown-item" href="admin-login.html">Admin Login</a></li>`;
const accountInfo = `<div class="small">Login Sebagai:</div>
                            <div id="userName2"></div>
                            <button class="btn btn-danger btn-outline-light btn-block w-100 my-2" onclick="logout();">Log out</button>`;
const accountInfo2 = `<div class="small">Kamu belum login:</div>
                            <a class="btn btn-outline-light btn-block w-100 my-2" href="login.html">Login</a>`;

const footer = `<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                  <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="about.html" class="hover:underline" data-i18n="footer.copyright">BASIS-64™</a>
                  </span>
                  <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 space-x-4">
                      <li>
                          <a href="about.html" class="hover:underline" data-i18n="footer.about">Tentang kami</a>
                      </li>
                      <li>
                          <a href="privacy.html" class="hover:underline" data-i18n="footer.privacy">Kebijakan privasi</a>
                      </li>
                      <li>
                          <a href="terms.html" class="hover:underline" data-i18n="footer.terms">Persyaratan & ketentuan</a>
                      </li>
                      <li>
                          <a href="feedback.html" class="hover:underline" data-i18n="footer.contact">Kontak</a>
                      </li>
                  </ul>
              </div>`;
const copyright = "Copyright © BASIS-64 2025";
let account = null;
let premiumPages = [];
let pagesMenu;
let isAdminPage = false;
let adminData;
let visitorsCount;

function showModal() {
  $(document).ready(function() {
  const modal = $("#messageModal");

  $("#openModalBtn").click(function() {
    modal.removeClass("hidden").addClass("flex");
  });

  // Menangani penutupan modal menggunakan atribut data-dismiss-modal
  $("[data-dismiss-modal='true']").click(function() {
    modal.removeClass("flex").addClass("hidden");
  });

  // Menutup modal ketika area di luar modal diklik
  modal.click(function(event) {
    if (event.target === this) {
      //modal.removeClass("flex").addClass("hidden");
    }
  });
});
    try { 
      updateContent();
    } catch (error) {

    }
    $("#messageModal").removeClass("hidden").addClass("flex");
}

function hideModal() {
    $("#messageModal").removeClass("flex").addClass("hidden");
}

function messageModal(msg) {
  document.getElementById('messageModal').innerHTML = `<div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow-sm dark:bg-neutral-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white" data-i18n="messages.info">
                    Info
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-dismiss-modal="true">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">${msg}</p>
            </div>
            <!-- Modal footer -->
            <!-- Modal footer -->
<div class="w-full flex justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
  <button data-dismiss-modal="true" type="button" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-neutral-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" data-i18n="messages.close">
    Tutup
  </button>
</div>

        </div>
    </div>`;
    showModal();
}

function photoModal(img) {
  document.getElementById('messageModal').innerHTML = `
  <div class="absolute right-0 top-0 p-4">
    <button type="button" class="text-white bg-transparent hover:bg-gray-200 hover:text-gray-200" data-dismiss-modal="true">
                    <svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close</span>
                </button>
  </div>
    <img src="${img}" class="max-sm:w-full sm:size-[480px]" />
  `;
    showModal();
}

function loadingModal(msg) {
  document.getElementById('messageModal').innerHTML = `<!-- Modal Content -->
  <div class="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-xl">
    <!-- Spinner -->
    
<div role="status">
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="mt-4 sr-only">Loading...</span>
</div>

    <!-- Loading Text -->
    <p class="text-lg font-semibold text-gray-700">${msg}</p>
  </div>`;
    showModal();
}

function filterSearchResult(searchTerm) {
  const results = [];

  for (const obj of searchFeatures) {
    const nameLower = (obj.name || "").toLowerCase();
    const alternativeNameLower = (obj.alternative_name || "").toLowerCase();
    const destinationLower = (obj.destination || "").toLowerCase();

    if (
      nameLower.includes(searchTerm) ||
      alternativeNameLower.includes(searchTerm) ||
      destinationLower.includes(searchTerm)
    ) {
      results.push(obj);
    }
  }

  return results;
}

function handleSearch(value) {
  let searchLayout = document.getElementById('searchLayout');
  let mainLayout = document.getElementById('mainLayout');
  let isValue = (value == "");
  let result = filterSearchResult(value);
  let searchResult = "";
  for (var i = 0; i < result.length; i++) {
    searchResult += `<a href="${result[i].destination}" class="${(i == 0)?"mt-4":""} mb-4 w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-neutral-800 dark:hover:bg-gray-700">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${result[i].alternative_name}</h5>
        <p class="mb-3 font-normal underline text-gray-700 dark:text-gray-400">${result[i].description}</p>
    </div>
</a>`;
  }
  searchLayout.innerHTML = searchResult;
  mainLayout.setAttribute("class", value?"container px-6 mx-auto grid hidden":"container px-6 mx-auto grid");
  searchLayout.setAttribute("class", value?"container px-6 mx-auto grid ":"container px-6 mx-auto grid hidden");
}


function getPageNameFromID(pageName) {
    return "page";
}

function isDarkModePreferred() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}


function toogleDarkMode() {

    // toggle icons inside button
    //themeToggleDarkIcon.classList.toggle('hidden');
    //themeToggleLightIcon.classList.toggle('hidden');

  console.log("Dark Mode");

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
}


if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
initializePage();
async function initializePage() {
        //$("#mainLayout").removeClass("flex").addClass("hidden");
	account = await checkUser();
    handlePageID();


  try {
    //document.getElementById('navbar-brand').innerHTML = brand;
    initializeNavbar();
    //footerLayout = document.getElementById('footer');
    //footerLayout.setAttribute('class', 'footer bg-dark p-4 mt-3 fixed-bottom');
    document.getElementById('footer').innerHTML = footer;
    //document.getElementById('sidebarToggle').setAttribute('class', 'btn btn-outline-secondary btn-sm order-1 order-lg-0 me-4 me-lg-0');
    initializeNavList();
    if (!isAdminPage) {
        initializeNavList();
    } else if (account) {
      //document.getElementById('sidenav-main').innerHTML = getSideNav();

      //document.getElementById('accountStatus').innerHTML = accountInfo;
      //document.getElementById('accountStatus').hidden = false;
      //document.getElementById('user-photo').setAttribute("src", account.photo);
      //document.getElementById('userName2').innerHTML = account.name;
      //document.getElementById('dropdown-menu').innerHTML = menu;
    } else {
      //document.getElementById('sidenav-main').innerHTML = getSideNav();

        //document.getElementById('accountStatus').innerHTML = accountInfo2;
        //document.getElementById('accountStatus').hidden = false;
        //document.getElementById('user-photo').src = "assets/img/user.png";
        //document.getElementById('dropdown-menu').innerHTML = menu2;
    }
  } catch(e) {

  }

  if (callback) {
    callback();
  }

  updateContent();
      //$("#mainLayout").removeClass("hidden").addClass("flex");
  //hideModal();



	//document.getElementById('privacy-link').setAttribute("href", "#");
	//document.getElementById('terms-link').setAttribute("href", "#");
	//document.getElementById('contact-link').setAttribute("href", "#");
}

/*
 * Pengecekan sesi pengguna
 */
async function checkSession() {
    return await initialServerRequest("CHECK_SESSION", {});
}

/*
 * Logout akun pengguna
 */
async function logout() {
    loadingModal(i18next.t("messages.logoutLoading"));
    await serverRequest("logout", {});
    window.location.replace("index.html");
}

function isMobile() {
  const userAgent = navigator.userAgent.toLowerCase();
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Basic check for common mobile keywords in user agent
  const isMobileUserAgent = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|rim)|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /android|ipad|playbook|silk/i.test(userAgent);

  // Consider screen width for smaller devices (though less reliable)
  const isSmallScreen = window.innerWidth <= 768; // Adjust breakpoint as needed

  // Combine touch capability and user agent for a more robust check
  return hasTouch || isMobileUserAgent || isSmallScreen;
}

/*
 * Mendapatkan informasi akun pengguna
 */
async function checkUser() {
        if (!getCookie("session_id") || !getCookie("key")) {
          loadingModal("Loading page...");
        }
        let resultjson = await checkSession();
        console.log(resultjson);

        if (getCookie("session_id") && getCookie("key") && resultjson.ok) {
          hideModal();
          let data = JSON.parse(await decryptAES(getCookie("key"), resultjson.ciphertext, stringToUint8Array(resultjson.iv)));
          if (!data) {
            console.log("account not found");
            return null;
            }
          isAdmin = data.admin;
            pagesMenu = data.pages;
            visitorsCount = data.visitors;
            console.log("session account...");
        if (!data.account) {
            console.log("account not found");
            return null;
            }
          if (!data.account.email) {
            console.log("account not found");
            return null;
            }
          let user = data.account;
          console.log(data);
          return user;
        }


        let response = await fetch("https://tools.basis64computer.workers.dev", { 
          method: 'GET',
          headers: {"type": "REQUEST"},
          //body: {"error": false}
        });

        let json = await response.json();
        let key = generateKey();
        setCookieDays("session_id", json.session_id, 1);
        setCookieDays("key", key, 1);
        let cipherText = await encryptRSA2(json.public_key, key);
        if (!localStorage.getItem("device_id")) {
            localStorage.setItem("device_id", `${isMobile()?"MOBILE":"PC"}-${new Date().getTime()}`);
        }

        await initialServerRequest("AES", {cipher: cipherText, device_id: localStorage.getItem("device_id")});
        return await checkUser();

    }

console.log(navigator.userAgent);
if (navigator.userAgent == "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0") {
    window.location.replace("banned.html");
}
