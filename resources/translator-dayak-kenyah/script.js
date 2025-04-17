let page_id = "translator-dayak-kenyah";
let dictionary = {
"apa": "inu",
"kemana": "kenpi",
"dimana": "kenpi",
"siapa": "ahe",
"kapan": "mi'an",
"bagaimana": "kumpin",
"putih": "putek",
"hitam": "saleng",
"merah": "bala",
"1": "cha",
"2": "dua",
"3": "telu",
"4": "pat",
"5": "lema",
"6": "jam",
"7": "tujo",
"8": "aya",
"9": "pi'en",
"10": "polok",
"satu": "ca",
"dua": "dua",
"tiga": "telu",
"empat": "pat",
"lima": "lema",
"enam": "nem",
"tujuh": "tujuk",
"delapan": "aya",
"sembilan": "pe'en",
"sepuluh": "puluk",
"seratus": "ca ato",
"seribu": "ca ibu",
"sejuta": "ca juta",
"ratus": "ato",
"ribu": "ibu",
"nya": "la",
"aku": "ake",
"ada": "aun",
"anjing": "udut",
"ayam": "yap",
"babi": "babui",
"banteng": "kalasiau",
"bebek": "bidik",
"belalang": "kade",
"beruang": "buang",
"biawak": "kabuk",
"buaya": "baya",
"burung": "sui",
"cicak": "aru",
"gajah": "kesun",
"harimau": "lenjau",
"ikan": "atuk",
"lele": "kati",
"patin": "selareng",
"kambing": "kadeng",
"kancil": "pelanuk",
"kecoa": "lepa",
"kepiting": "yu",
"kijang": "payak",
"kodok": "sui",
"kucing": "sing",
"kupu-kupu": "bamper",
"lalat": "langau",
"cacing": "lati",
"macan": "kule",
"monyet": "kuyata",
"nyamuk": "jamok",
"rusa": "uca",
"siput": "sik/ulung",
"tikus": "belabau",
"ular": "tuduk",
"bagus": "tia",
"baru": "mading",
"besar": "bio",
"cepat": "sangit",
"kelakuan": "puyan",
"kosong": "mpi un",
"malas": "malat",
"nyata": "lan",
"pelit": "ma'em",
"ringan": "nyian",
"sehat": "agat",
"pagi": "tading nempam",
"siang": "naktau",
"malam": "nataup",
"sibuk": "lamak",
"berbagai": "kado",
"atau": "ataw",
"dan": "ngan",
"dari": "cen",
"berasal": "cen",
"diantara": "dalau",
"juga": "pe",
"karena": "uban",
"ke": "koq",
"mending": "lepa ini",
"saat": "sa taup",
"sebelum": "ken'a",
"tapi": "untepu'o",
"tetapi": "untepu'o",
"setelah": "lepa kadi",
"supaya": "apan",
"agar": "apan",
"untuk": "un",
"yang": "yak",
"adalah": "ja ne",
"ialah": "ialah",
"kalau": "awa'",
"badan": "usa",
"baju": "sapai",
"buah": "buaq",
"keledang": "ta'ep",
"cempedak": "nakan",
"lay": "pakit",
"rambutan": "sangit",
"desa": "lepo",
"gula": "gula'k",
"jendela": "sekan",
"kamar": "tilung lundo",
"kursi": "adan",
"lemari": "buan",
"lontong": "kanen lema'k",
"makanan": "penguman",
"memakan": "uman",
"dimakan": "uman",
"meja": "mejak",
"minuman": "nisep ia",
"minyak": "lenya",
"mobil": "oto",
"goreng": "saga",
"pasar": "pasen",
"piring": "kiyat",
"pondok": "lepau",
"rumah": "amin",
"sungai": "alo",
"tas": "bek",
"telur": "telo",
"kandang": "liwang",
"sudah": "lepa",
"sampai": "pa",
"balik": "liwer",
"bangun": "taga",
"belajar": "pekalai",
"berangkat": "tai te",
"bermain": "piat",
"berpikir": "pekimet",
"bikin": "uyan",
"buat": "uyan",
"bilang": "kun",
"sampaikan": "kun",
"bohong": "pala",
"bolos": "tai kelap",
"jalan": "masat",
"jalan-jalan": "masat-masat",
"jangan": "ain",
"keluar": "kawang",
"bekerja": "gayeng",
"kerja": "gayeng",
"kerjakan": "gayeng",
"ketahui": "tisen",
"tau": "tisen",
"makan": "uman",
"mandi": "ndu'",
"masak": "pesak",
"masuk": "ke dalem",
"melihat": "ngeneng",
"melihatnya": "ngeneng ia",
"membeli": "meli",
"mendengar": "ngeninga",
"menyanyi": "ngendau",
"minum": "nisep",
"nyaring": "bia",
"singgah": "ngena'k",
"tinggal": "ngena'k",
"disini": "ki",
"terima": "tiga",
"kasih": "tawai",
"tidur": "lundog",
"pindah": "buaw",
"berteduh": "ngedingan",
"petubo": "pelihara",
"adegan": "kaa",
"banyak": "kado",
"sekali": "ale",
"boleh": "kong",
"dulu": "ading",
"hari": "tau",
"ingatan": "kimet",
"kemarin": "nya'ep rei",
"memang": "adang",
"suka": "uba",
"cinta": "uba",
"sayang": "uba",
"melewati": "lapa",
"sama": "kuwa",
"nama": "ngadan",
"namaku": "ngadan keq",
"ku": "keq",
"oke": "aha",
"iya": "aha",
"pulang": "ula",
"sangat": "ali'",
"semua": "mung",
"seperti": "kuaq",
"suaranya": "isu'a",
"tentu": "ina",
"saja": "na",
"tidak": "nda",
"gayeng": "tugas",
"sekolah": "sekula",
"kabar": "denga",
"berita": "denga",
"hal": "denga",
"kejadian": "denga",
"salah": "bep",
"datang": "nay",
"tersisa": "naung",
"bapak": "amai",
"bersama": "ilu mung",
"hantu": "bali",
"ibu": "uweq",
"kalian": "ikem",
"kami": "ame",
"kamu": "ikoq",
"kau": "ikoq",
"kita": "ilu",
"saya": "ake",
"teman": "tuyang",
"mereka": "ida",
"masing": "tengen",
"masing-masing": "tengen-tengen",
"senin": "keca",
"selasa": "kedua",
"rabu": "ketelu",
"kamis": "tepat",
"jumat": "kelema",
"sabtu": "kenem",
"minggu": "minggu",
"adik": "ari'",
"angin": "bayu",
"air": "sungai",
"rumahmu": "lamin engku",
"ambil": "alak",
"baik": "lemeli",
"berenang": "nyatung",
"bocor": "tudok",
"berak": "lepin",
"berdiri": "ngrejeng",
"bicara": "petirak",
"bintang": "betuen",
"besok": "nembam",
"banjir": "layap",
"berapa": "kudak",
"celana": "seluen",
"cabe": "lia",
"duduk": "adung",
"dingin": "nyeng",
"gelap": "mendem",
"gigi": "jipen",
"gemuk": "lembo",
"gendong": "bak",
"gunung": "mudung",
"gundul": "ulok",
"garam": "usen",
"hidup": "mudip",
  "kehidupan": "mudip",
  "sehari-hari": "tau",
  "teman-teman": "tuyang-tuyang",
"hidung": "ndung",
"hutan": "a'ut",
"haus": "moang laset",
"jernih": "litut",
"mamak": "tinam",
"jatuh": "labok",
"jauh": "cok",
"jelek": "ja'at",
"kencing": "nyengit",
"kenyang": "beso",
"kepala": "ulu",
"keatas": "kempou",
"naik": "kempou",
"kembali": "ulek",
"kemarau": "tagak",
"kakek": "pui",
"nenek": "pui",
"kakak": "seken",
"kaki": "taket",
"kurus": "mae",
"kecil": "ang",
"lihat": "maat",
"lapar": "lau",
"laki": "laki",
"lidah": "uma",
"alkohol": "jakan",
"mabok": "meduk",
"madu": "layuk",
"orang": "lakeng",
"mencari": "mita",
"malu": "sa'e",
"menyelam": "lemeset",
"memanjat": "lemaket",
"menanam": "mula",
"menari": "kanjet",
"mau": "obak",
"mata": "mata",
"mimpi": "ngenupi",
"mencuri": "mengelau",
"menangis": "menange",
"mana": "mpi",
"mati": "matae",
"menyeberang": "pelawat",
"peluk": "nyekapu",
"panen": "maju",
"perut": "batek",
"pahit": "pait",
"pintu": "pamen",
"pakaian": "sapai",
"perahu": "alut",
"parang": "mandau",
"panjang": "dadok",
"pendek": "bu'et",
"pedas": "sanit",
"pergi": "tei",
"pandai": "encam",
"pohon": "puun",
"rindu": "menok menawai",
"sayur": "lekey",
"suami mu": "laki koq",
"satu bulan": "ca bulan",
"setuju": "aha",
"selimut": "kelumah",
"benar": "sio",
"di": "ka",
"sini": "ini",
"sana": "ina",
"situ": "ina",
"berlari": "kasa",
"berbaring": "meken",
"bersandar": "nyendei",
"berkebun": "uyam pula",
"nasi": "kenan",
"pedagang": "toke",
"nangis": "nange",
"main": "piat",
"ya": "aha",
"antara": "aang",
"hilir": "aba",
"peraturan": "adet",
"kenapa": "adi",
"mengapa": "adi",
"kesatu": "ading",
"dahulu": "ading",
"terdahulu": "ading",
"lalang": "ai'",
"pasir": "ait",
"tuntun": "ajak",
"baris": "ajat",
"keberanian": "akang",
"memberanikan": "ngakang",
"berani": "makang",
"ide": "aken",
"pikiran": "aken",
"kebijaksanaan": "aken",
"pinggang": "aking",
"rakit": "akit",
"kapal": "akit",
"meraup": "makup",
"cupu": "a'i'",
"jantan": "a'ung",
"belukar": "ma'ut",
"semak": "ma'ut",
"bersemak": "ma'ut",
"berumput": "ma'ut",
"rumput": "ma'ut",
"dapat": "ala'",
"mendapatkan": "ala'",
"bisa": "ala'",
"ranting": "alan",
"setengah": "alang",
"kebiasaan": "alay",
"lazim": "alay",
"jalur": "ale",
"banding": "aliu",
"arus": "alo",
"mengukur": "alut",
"simpan": "mambin",
"menyimpan": "mambin",
"memegang": "mambin",
"pegang": "mambin",
"memelihara": "mambim",
"tersimpan": "pambin",
"rantai": "ambit",
"bodoh": "ameng",
"bisu": "ameng",
"keluarga": "amit",
"mungkin": "amu'",
"kekanakkanakan": "pekanak",
"kembar": "pit",
"saudara": "aung",
"saudari": "aung",
"menatap": "aneng",
"tatap": "aneng",
"kulit": "anit",
"punya": "anun",
"milik": "anun",
"rintangan": "apat",
"aral": "apat",
"halangan": "apat",
"terlintang": "papat",
"tertahan": "papat",
"terhalang": "papat",
"menara": "apaw",
"penara": "apaw",
"bukit": "apaw",
"tali": "apay",
"cacat": "apet",
"kapur": "apo",
"tertarik": "arep",
"berminat": "arep",
"keinginan": "arep",
"cenderung": "arep",
"lahap": "asam",
"rakus": "asam",
"likut": "mundur",
"asal": "asen",
"jurang": "asep",
"lembah": "asep",
"beratus": "ato",
"meletakkan": "maung",
"menempatkan": "maung",
"menaruh": "maung",
"andai": "awa'",
"sore": "taup",
"petang": "taup",
"cerita": "ngadep",
"pendapat": "banu'",
"membangunkan": "naga",
"lelap": "lundu'",
"melelapkan": "pelundu'",
"menidurkan": "pelundu'",
"ranjang": "pagen",
"kasur": "pagen",
"membersihkan": "mada",
"diri": "ada'",
"selesai": "ku'o",
"habis": "ku'o",
"sekali": "cengto",
"sekaligus": "cengto",
"kesudahan": "kelepa",
"penyudahan": "kelepa",
"akhir": "kelepa",
"penghujung": "kelepa",
"kesimpulan": "kelepa",
"menyelesaikan": "pelepa",
"menyiapkan": "pelepa",
"menamatkan": "pelepa",
"mengakhiri": "pelepa",
"selesaikan": "pelepa",
"menyempurnakan": "pelepa",
"segera": "busek",
"mendesak": "busek",
"sensitif": "jika",
"peka": "jika",
"lalu": "pelapa",
"lantas": "pelapa",
"terus": "pelapa",
"langsung": "penjo",
"mengecap": "ngenyam",
"menikmati": "ngenyam",
"ingin": "lila",
"membaca": "baca",
"katanya": "ke dau e",
"nanti": "na'a'",
"awal": "beka'",
"lambat": "du'ay",
"terlambat": "du'ay"
}


let dictionaryTable = document.getElementById("dictionaryTable");
let dictionaryTableBody = document.getElementById("dictionaryTableBody");

let switchLanguageButton = document.getElementById("switchLanguageButton");
let inputTitle = document.getElementById("inputTitle");
let outputTitle = document.getElementById("outputTitle");
let copy01 = document.getElementById("copy01");
let copy02 = document.getElementById("copy02");
let paste01 = document.getElementById("paste01");
let read01 = document.getElementById("read01");
let read02 = document.getElementById("read02");
let translateInput = document.getElementById("translateInput");
let translateOutput = document.getElementById("translateOutput");

translateInput.value = "";
translateOutput.value = "";
let switchLanguage = false;

copy01.addEventListener("click", function(argument) {
    // Select the text field
    translateInput.select();
    translateInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(translateInput.value);
}, false);

copy02.addEventListener("click", function(argument) {
    // Select the text field
    translateOutput.select();
    translateOutput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(translateOutput.value);
});

paste01.addEventListener("click", async function(argument) {
    // Select the text field
    //translateInput.select();
    //translateInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    translateInput.value = await navigator.clipboard.readText();
});

read01.addEventListener("click", function () {
    var audio = new Audio();
    audio.src ='https://translate.google.com/translate_tts?ie=UTF-8&tl=id-ID&client=tw-ob&q=' + encodeURI(translateInput.value);
    audio.play();
    console.log("TTS");

});

read02.addEventListener("click", function () {
    var audio = new Audio();
    audio.src ='https://translate.google.com/translate_tts?ie=UTF-8&tl=id-ID&client=tw-ob&q=' + encodeURI(translateOutput.value);
    audio.play();
    console.log("TTS");

});

/*translateInput.addEventListener("input", function() {
    translateOutput.value = "Sedang menerjemahkan...";
    translateOutput.setAttribute("class", "form-control text-secondary");
    translate();
});*/

async function translateText() {
    if (!activationStatusInitialized) {
        $("#accountNotActivatedDialogModal").modal("show");
        document.getElementById('accountNotActivatedDialogModalMessage').innerHTML = 'Tidak dapat menerjemahkan.<br/>Silakan login menggunakan akun Google dan aktivasi akun kamu untuk mengakses fitur premuim pada website ini, hubungi admin untuk mengaktivasi akun kamu.<br/><br/>kamu dapat melihat daftar harganya <a href="activation.html">di sini</a>';
        $('#accountNotActivatedDialogModal').on('hidden.bs.modal', function () {
          document.location.replace("index.html");
        });
        return;
    }


    let inputText = translateInput.value;

    let response = await fetch("https://dayakkenyahtranslator.basis64computer.workers.dev/", { 
          method: 'POST',
          body: JSON.stringify({action: "translate", session_id: getCookie("session_id"), data: {translate: inputText}})
        });
    let result = await response.json();
    translateOutput.value = result.result;
}


let array = Object.keys(dictionary);
//console.log(array);

for(var i=0; i<array.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    td.innerHTML = i+1;
    td2.innerHTML = array[i];
    td3.innerHTML = dictionary[array[i]];
    //console.log(dictionary[array[i]]);

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    dictionaryTableBody.appendChild(tr);
}

new simpleDatatables.DataTable(dictionaryTable);



