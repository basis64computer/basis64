let inProgress = false;

            async function generate() {
                document.getElementById('result').hidden = true;
                document.getElementById('progress').hidden = false;
                if (inProgress) {
                    return;
                }
                inProgress = true;
                let prompt = document.getElementById('prompt').value;
                let json_session = JSON.stringify({session_id: getCookie("session_id"), prompt: prompt});
                let result = await fetch("https://imageai.basis64computer.workers.dev/", { 
                  method: 'POST',
                  body: json_session
                });
                let data = await result.blob();
                var reader = new FileReader();

                reader.readAsDataURL(data); 
                reader.onloadend = function() {
                    var base64data = reader.result;
                    document.getElementById('result').hidden = false;
                    document.getElementById('progress').hidden = true;
                    document.getElementById('imageResult').src = base64data;
                    document.getElementById('downlaodImageButton').addEventListener('click', function() {
                        const link = document.createElement('a');
                        link.href = base64data;
                        link.download = `${prompt.trim().replaceAll(' ', '_')}-${new Date().getTime()}.jpg`;
                        document.body.appendChild(link); // Perlu ditambahkan ke DOM agar berfungsi di beberapa browser
                        link.click();
                        document.body.removeChild(link); // Bersihkan setelah selesai
                      });
                    inProgress = false;
                    const bot = new Bot(database_bot.TOKEN, database_bot.ChatID);
                    if (account) {
                        bot.sendPhotoData(base64data, `*${account.name} Membuat Gambar dengan DreamNIG*\nEmail: ${account.email}\nPrompt: ${prompt}`, null, "markdown");
                    } else {
                        bot.sendPhotoData(base64data, `*Pengguna BASIS-64 Tools Membuat Gambar dengan DreamNIG*\nPrompt: ${prompt}`, null, "markdown");
                    }
                    return;
                }
            }

export function init() {
    document.getElementById('mainLayout').innerHTML = `

<div class="block p-6 mb-4 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 max-sm:text-center">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Buat Gambar dengan DreamNIG</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">DreamNIG (Dream New Image Generator) adalah AI dari BASIS-64. Kamu bisa membuat gambar dengan hanya memberikan teks.</p>
</div>

<div class="md:inline-flex gap-4">
    <div class="flex-1 w-auto md:h-full p-6 mb-4 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <textarea id="prompt" class="resize-none h-80 p-4 w-full text-sm text-gray-900 bg-white border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ketik gambar yang ingin diimajinasikan di sini..."></textarea>
                <button class="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-5 py-3 mt-4 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" id="createImageButton">Buat gambar</button>

    </div>

    <div class="block p-6 md:h-full bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700" id="result" hidden>
        <img class="w-80 h-80 border" src="assets/img/user.png" onclick="photoModal(this.src);" id="imageResult" />
                    <button class="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-5 py-3 mt-4 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" id="downlaodImageButton">Unduh gambar</button>

    </div>

    <div class="p-6 w-100 sm:h-full bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 text-center" id="progress" hidden>

<div role="status">
    <svg aria-hidden="true" class="w-64 h-64 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
<p class="mt-4 font-normal text-gray-700 dark:text-gray-400">Membuat gambar...</p>


    </div>
</div>

</div>

`;

document.getElementById('createImageButton').addEventListener('click', function() {
        generate();
    });
}
