let activationStatusInitialized = false;

function getMenuById(id) {
    return pagesMenu.find(item => item.id === id);
}

async function callback() {
                let page = getMenuById(page_id);

                if (!page) {
                    return;
                }

                if (!page.premium_level) {
                    return;
                }

                console.log("callback " + account);

                if (account == null) {
                    $("#accountNotActivatedDialogModal").modal("show");
                    document.getElementById('accountNotActivatedDialogModalMessage').innerHTML = 'Silakan login menggunakan akun Google dan aktivasi akun kamu untuk mengakses fitur premuim pada website ini, hubungi admin untuk mengaktivasi akun kamu.<br/><br/>kamu dapat melihat daftar harganya <a href="activation.html">di sini</a>';
                    $('#accountNotActivatedDialogModal').on('hidden.bs.modal', function () {
                      document.location.replace("index.html");
                    });
                    return;
                }

                if (account.activation_level && new Date(account.activation_expired).getTime() < new Date().getTime()) {
                    $("#accountNotActivatedDialogModal").modal("show");
                    document.getElementById('accountNotActivatedDialogModalMessage').innerHTML = 'Akun kamu sudah kadaluarsa, kamu dapat mengaktivasi kembali akun kamu dan hubungi admin untuk mengaktivasi akun kamu.<br/><br/>Kamu dapat melihat daftar harganya <a href="activation.html">di sini</a>';
                    $('#accountNotActivatedDialogModal').on('hidden.bs.modal', function () {
                      document.location.replace("index.html");
                    });
                }

                if (!account.activation_level) {
                    document.getElementById('accountNotActivatedDialogModalMessage').innerHTML = 'Akun kamu belum diaktivasi, kamu dapat melihat daftar harganya <a href="activation.html">di sini</a>';
                    $("#accountNotActivatedDialogModal").modal("show");
                    $('#accountNotActivatedDialogModal').on('hidden.bs.modal', function () {
                      document.location.replace("index.html");
                    });
                }
                activationStatusInitialized = true;
            };
