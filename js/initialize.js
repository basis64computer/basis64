let indexStatus = false;
let profileStatus = false;
let developerStatus = false;
let priceStatus = false;
let paymentStatus = false;
let feedbackStatus = false;
let aboutStatus = false;

let isAdmin = false;

let mode = "dark";
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


const brand = '<img src="./assets/img/logo.png" width="32px" height="32px" class="navbar-brand-img h-100" alt="main_logo"><span class="ms-1 font-weight-bold">BASIS-64</span>';

function getSideNavList() {
    let sidenav = document.getElementById('sidenav-main');
    let background = (mode != 'white' && mode != 'light')?`bg-${mode}`:'bg-white';
    let text = (mode != 'white' && mode != 'light')?'text-white':'text-dark';
    let textInactive = (mode != 'white' && mode != 'light')?'text-secondary':'';
    if (account) {
        return `<li class="nav-item">
          <a class="nav-link ${indexStatus?"active":""}" href="./index.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-home ${indexStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${indexStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Halaman Awal</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${profileStatus?"active":""}" href="./profile.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-user ${profileStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${profileStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Lihat akun</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${developerStatus?"active":""}" href="./developer.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-code ${developerStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${developerStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Opsi pengembang</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${priceStatus?"active":""}" href="./price.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-tag ${priceStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${priceStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Daftar harga</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${paymentStatus?"active":""}" href="./payment.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-money-check ${paymentStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${paymentStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Pembayaran</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${feedbackStatus?"active":""}" href="./feedback.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-comment ${feedbackStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${feedbackStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Feedback</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${aboutStatus?"active":""}" href="./about.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-circle-info ${aboutStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${aboutStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Tentang kami</span>
          </a>
        </li>`;
    }
    if (account) {
        return `<li class="nav-item">
          <a class="nav-link ${indexStatus?"active":""}" href="./index.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-home ${indexStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${indexStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Halaman Awal</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${profileStatus?"active":""}" href="./profile.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-user ${profileStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${profileStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Lihat akun</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${developerStatus?"active":""}" href="./developer.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-code ${developerStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${developerStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Opsi pengembang</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${priceStatus?"active":""}" href="./price.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-tag ${priceStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${priceStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Daftar harga</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${paymentStatus?"active":""}" href="./payment.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-money-check ${paymentStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${paymentStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Pembayaran</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${feedbackStatus?"active":""}" href="./feedback.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-comment ${feedbackStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${feedbackStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Feedback</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${aboutStatus?"active":""}" href="./about.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-circle-info ${aboutStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${aboutStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Tentang kami</span>
          </a>
        </li>`;
    } else {
      return `<li class="nav-item">
          <a class="nav-link ${indexStatus?"active":""}" href="./index.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-home ${indexStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${indexStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Halaman Awal</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${developerStatus?"active":""}" href="./developer.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-code ${developerStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${developerStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Opsi pengembang</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${priceStatus?"active":""}" href="./price.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-tag ${priceStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${priceStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Daftar harga</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${feedbackStatus?"active":""}" href="./feedback.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-comment ${feedbackStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${feedbackStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Feedback</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${aboutStatus?"active":""}" href="./about.html">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-circle-info ${aboutStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}"></i>
            </div>
            <span class="nav-link-text ms-1 ${aboutStatus?"active " + text:((mode != 'white' && mode != 'light')?textInactive:"")}">Tentang kami</span>
          </a>
        </li>`;
    }
}

function getSideNavFooter() {
    let text = (mode != 'white' && mode != 'light')?'text-white':'text-dark';
  if (account) {
    return `<div class="sidenav-footer mx-3">
      <div class="card card-plain shadow-none" id="sidenavCard">
        <div class="card-body text-center p-3 w-100 pt-0">
          <div class="docs-info">
            <h6 class="mb-0 ${text}">${account.name}</h6>
            <p class="text-xs font-weight-bold mb-0 ${text} opacity-6">Pengguna Google</p>
          </div>
        </div>
      </div>
      <button class="btn btn-danger btn-sm w-100 mb-3" onclick="logout();">Logout</button>
    </div>`;
  } else {
    return `<div class="sidenav-footer mx-3 ">
      <div class="card card-plain shadow-none" id="sidenavCard">
        <div class="card-body text-center p-3 w-100 pt-0">
          <div class="docs-info">
            <h6 class="mb-0 ${text}">Belum login?</h6>
            <p class="text-xs font-weight-bold mb-0">Login untuk mendapatkan trial gratis 1 hari.</p>
          </div>
        </div>
      </div>
      <a href="./login.html" class="btn btn-dark btn-outline-light btn-sm w-100 mb-3">Login</a>
      <a href="./register.html" class="btn btn-primary btn-sm mb-0 w-100" href="Buat akun" type="button">Buat akun</a>
    </div>`;
  }
}

function initializeSideNav() {
    let sidenav = document.getElementById('sidenav-main');
    let background = (mode != 'white' && mode != 'light')?`bg-${mode}`:'bg-white';
    let text = (mode != 'white' && mode != 'light')?'text-white':'text-dark';
    let hr = (mode != 'white' && mode != 'light')?'white':'dark';
    sidenav.setAttribute('class', `sidenav navbar navbar-vertical navbar-expand-xs border-dark fixed-start shadow-lg ${background} ${text}`);
    sidenav.innerHTML = `<div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand ${text} m-0" href="index.html">
        ${brand}
      </a>
    </div>
    <hr class="horizontal ${hr} mt-0">
    <div class="collapse navbar-collapse  w-auto h-75 " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        ${getSideNavList()}
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 ${text}">Hubungi kami</h6>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.instagram.com/basis64computer/" target="_blank">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" width="24px" height="24px" />
            </div>
            <span class="nav-link-text ms-1 ${text}">Instagram</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://discord.gg/gywRbyK8VN/" target="_blank">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <img src="https://upload.wikimedia.org/wikipedia/fr/4/4f/Discord_Logo_sans_texte.svg" width="24px" height="24px" />
            </div>
            <span class="nav-link-text ms-1 ${text}">Discord</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/basis64computer/" target="_blank">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" ${(mode == "dark" || mode == "normal")?'style="filter: invert(100%)"':''} width="24px" height="24px" />
            </div>
            <span class="nav-link-text ms-1 ${text}">GitHub</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://wa.me/+6282211509216/" target="_blank">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="24px" height="24px" />
            </div>
            <span class="nav-link-text ms-1 ${text}">WhatsApp</span>
          </a>
        </li>

      </ul>
    </div>
    ${getSideNavFooter()}`;
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

const footer = `<div class="container-fluid">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-lg-6 mb-lg-0 mb-4">
              <div class="copyright text-center text-white text-sm text-muted text-lg-center">
                Copyright © BASIS-64 
                  ${new Date().getFullYear()}
              </div>
            </div>
            <div class="col-lg-6">
              <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                <li class="nav-item">
                  <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Creative Tim</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted" target="_blank">About Us</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/blog" class="nav-link text-muted" target="_blank">Blog</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted" target="_blank">License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>`;
const copyright = "Copyright © BASIS-64 2025";
let account;
let premiumPages = [];
let pagesMenu;
let isAdminPage = false;
let adminData;


function getPageNameFromID(pageName) {
    return "page";
}

function initializeNavbar() {
    let navbar = document.getElementById('navbarBlur');
    let background = `bg-${mode}`;
    let text = (mode != 'white' && mode != 'light')?'text-white':'text-dark';
    let toggler = (mode != 'white' && mode != 'light')?'bg-white':'bg-dark';
    navbar.setAttribute('class', `navbar navbar-main navbar-expand-lg px-0 ${background} ${text}`);
    document.getElementById('iconNavbarSidenav').innerHTML = `<div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line ${toggler}"></i>
                  <i class="sidenav-toggler-line ${toggler}"></i>
                  <i class="sidenav-toggler-line ${toggler}"></i>
                </div>`;
                document.getElementById('breadcrumb').innerHTML = `<ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class="breadcrumb-item text-sm "><a class="opacity-5 ${text}" href="javascript:;">Pages</a></li>
            <li class="breadcrumb-item text-sm ${text} active" aria-current="page">${getPageNameFromID()}</li>
          </ol>
          <h4 class="font-weight-bolder ${text} mb-0">BASIS-64</h4>`;
}


initializePage();
async function initializePage() {
	account = await checkUser();
    handlePageID();

  try {
    //document.getElementById('navbar-brand').innerHTML = brand;
    initializeNavbar();
    footerLayout = document.getElementById('footer');
    footerLayout.setAttribute('class', 'footer bg-dark p-4 mt-3 fixed-bottom');
    footerLayout.innerHTML = footer;
    //document.getElementById('sidebarToggle').setAttribute('class', 'btn btn-outline-secondary btn-sm order-1 order-lg-0 me-4 me-lg-0');
    if (!isAdminPage) {
        initializeSideNav();
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
    console.log("session..........");
        let resultjson = await checkSession();
        console.log(resultjson);

        if (getCookie("session_id") && getCookie("key") && resultjson.ok) {
          let data = JSON.parse(await decryptAES(getCookie("key"), resultjson.ciphertext, stringToUint8Array(resultjson.iv)));
          isAdmin = data.admin;
            pagesMenu = data.pages;
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

    }

console.log(navigator.userAgent);
if (navigator.userAgent == "Mozilla/5.0 (X11; Linux x86_64; rv:135.0) Gecko/20100101 Firefox/135.0") {
    window.location.replace("banned.html");
}