/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

// Nonaktifkan klik kanan
//document.addEventListener('contextmenu', event => event.preventDefault());

// Nonaktifkan tombol shortcut tertentu
document.onkeydown = function(e) {
  if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 'I')) {
    e.preventDefault();
  }
};

function isEmail(email) {
              const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return emailPattern.test(email);
            }

/*
 * Request ke server dengan data yang tidak dienkripsi
 * Dapat digunakan sebelum pertukaran kunci dilakukan ke server
 * Dapat digunakan untuk pengecekan sesi pengguna dan pertukaran kunci dengan server
 */
async function initialServerRequest(type, data){
    let result = await fetch("https://tools.basis64computer.workers.dev/", { 
        method: 'POST',
        headers: {"type": type},
        body: JSON.stringify({session_id: getCookie("session_id"), data: data})
    });
    let resultjson = await result.json();
    return resultjson;
}

/*
 * Request ke server dengan data dienkripsi
 * Dapat digunakan setelah pertukaran kunci dilakukan ke server
 */
async function serverRequest(type, data){
    let iv = generateIV();
    let result = await fetch("https://tools.basis64computer.workers.dev/", { 
        method: 'POST',
        body: JSON.stringify({session_id: getCookie("session_id"), iv: iv, ciphertext: await encryptAES(getCookie("key"), JSON.stringify({actionType: type, data: data, timestamp: new Date().getTime()}), stringToUint8Array(iv))})
    });
    let resultjson = await result.json();
    let plaintext;
    try {
        plaintext = await decryptAES(getCookie("key"), resultjson.ciphertext, stringToUint8Array(resultjson.iv));
    } catch (error) {
        plaintext = JSON.stringify({none: true});
    }
    let json = JSON.parse(plaintext);
                    //console.log(json);

    delete resultjson.iv;
    delete resultjson.ciphertext;
    resultjson.data = json;
    return resultjson;

    //return resultjson;
}

async function serverGet(type, data){
    let result = await fetch("https://tools.basis64computer.workers.dev/" + "get-admin-data", {
        method: 'GET',
        headers: {session_id: getCookie('session_id')}
    });
    let resultjson = await result.json();
    let plaintext;
    try {
        plaintext = await decryptAES(getCookie("key"), resultjson.ciphertext, stringToUint8Array(resultjson.iv));
    } catch (error) {
        plaintext = JSON.stringify({none: true});
    }
    let json = JSON.parse(plaintext);
                    //console.log(json);

    delete resultjson.iv;
    delete resultjson.ciphertext;
    resultjson.data = json;
    return resultjson;

    //return resultjson;
}