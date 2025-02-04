/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

const brand = `<img src="assets/img/logo.png" width="48px" height="48px" />BASIS-64`;
const menu = `
                            <div class="sb-sidenav-menu-heading">Halaman Utama</div>
                            <a class="nav-link" href="index.html">
                                <div class="sb-nav-link-icon"><i class="bi bi-house-fill"></i></div>
                                Halaman Utama
                            </a>
                            <a class="nav-link" href="feedback.html">
                                <div class="sb-nav-link-icon"><i class="bi bi-chat-right-fill"></i></div>
                                Feedback
                            </a>
                            
                            

                            <div class="sb-sidenav-menu-heading">Media Sosial</div>
                                <a class="nav-link" href="https://www.instagram.com/basis64computer/" target="_blank">
                                    <div class="sb-nav-link-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" width="24px" height="24px" /></div>
                                    Instagram
                                </a>
                                <a class="nav-link" href="https://discord.gg/gywRbyK8VN" target="_blank">
                                    <div class="sb-nav-link-icon"><img src="https://upload.wikimedia.org/wikipedia/fr/4/4f/Discord_Logo_sans_texte.svg" width="24px" height="24px" /></div>
                                    Discord
                                </a>
                                <a class="nav-link" href="https://github.com/basis64computer/" target="_blank">
                                    <div class="sb-nav-link-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" style="-webkit-filter:invert(100%);" width="24px" height="24px" /></div>
                                    Github
                                </a>
                                <a class="nav-link" href="https://wa.me/+6282211509216" target="_blank">
                                    <div class="sb-nav-link-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="24px" height="24px" /></div>
                                    Hubungi Whatsapp Admin
                                </a>
                            
                        </div>
                    </div>`;

const footer = `<div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; BASIS-64 Computer 2025</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>`;



window.addEventListener('DOMContentLoaded', event => {
    document.getElementById('navbar-brand').innerHTML = brand;
    document.getElementById('nav-menu').innerHTML = menu;
    document.getElementById('footer').innerHTML = footer;

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.setAttribute('class', 'btn btn-outline-secondary btn-sm order-1 order-lg-0 me-4 me-lg-0');
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    callback();

});
