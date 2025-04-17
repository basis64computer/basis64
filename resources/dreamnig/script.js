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
                    document.getElementById('download').href = base64data;
                    document.getElementById('download').download = new Date().getTime() + ".png";
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


