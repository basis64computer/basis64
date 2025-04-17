const khodam = [
	{name: "Agya Ricer", photo: "agya-ricer.jpg"},
	{name: "Sigma Male", photo: "sigma-male.jpg"},
	{name: "Alpha Male", photo: "alpha-male.jpg"},
	{name: "Beta Male", photo: "beta-male.jpg"},
	{name: "Delta Male", photo: "delta-male.jpg"},
	{name: "Gamma Male", photo: "gamma-male.jpg"},
	{name: "Omega Male", photo: "omega-male.jpg"},
	{name: "Ayam Jepang Ber-SDM Tinggi", photo: "ayam-ber-sdm-tinggi.jpg"},
	{name: "BAA!!", photo: "baa.jpg"},
	{name: "Bandul Tiger", photo: "bandul-tiger.jpg"},
	{name: "Berpendidikan Tinggi", photo: "berpendidikan-tinggi.jpg"},
	{name: "Berpengetahuan Tinggi", photo: "berpengetahuan-tinggi.jpg"},
	{name: "Dingin Tetapi Tidak Kejam", photo: "dingin-tetapi-tidak-kejam.jpg"},
	{name: "Panas Tetapi Tidak Lembut", photo: "panas-tetapi-tidak-lembut.jpg"},
	{name: "Gedagedigedagedago", photo: "gedagedigedagedago.jpg"},
	{name: "Gigachad", photo: "gigachad.jpg"},
	{name: "Gopnik", photo: "gopnik.jpg"},
	{name: "Hacker", photo: "hacker.jpg"},
	{name: "Icikiwir", photo: "icikiwir.jpg"},
	{name: "Karburator CB", photo: "karburator-cb.jpg"},
	{name: "Tangki CB", photo: "tangki-cb.jpg"},
	{name: "CB Teyeng", photo: "motor-cb.jpg"},
	{name: "Satu Paket Sembako", photo: "satu-paket-sembako.jpg"},
	{name: "Satu Sak Semen", photo: "satu-sak-semen.jpg"},
	{name: "Slamet Kopling", photo: "slamet-kopling.jpg"},
	{name: "Stang Mio", photo: "stang-mio.jpg"},
	{name: "Wibu Sigma", photo: "wibu-sigma.jpg"},
];

const congratulations = document.getElementById("congratulations");
const khodamLoading = document.getElementById('khodamLoading');
const cekKhodamDiv = document.getElementById('cekKhodam');
const khodamResult = document.getElementById("khodamResult");
const khodamPhoto = document.getElementById("khodamPhoto");
const khodamName = document.getElementById("khodamName");
const loading = document.getElementById("loading");
const input = document.getElementById('name');

let interval;

function clear() {
	clearInterval(interval);
}

function getKhodam(name) {
	let data = localStorage.getItem(name);
	if (data) {
		return khodam[data];
	} else {
		let num = Math.floor(Math.random() * khodam.length);
		localStorage.setItem(name, num);
		return khodam[num];
	}
}

function sendInfo(name, khodam) {
	if (account) {
		telegramSendMessage(`*${account.name} Melakukan Cek Khodam*\nNama: ${name}\nEmail: ${account.email}\nKhodam: ${khodam.name}`);
	} else {
		telegramSendMessage(`*Pengguna BASIS-64 Tools Melakukan Cek Khodam*\nNama: ${name}\nKhodam: ${khodam.name}`);
	}
}

async function cekKhodam() {
	loading.setAttribute("style", "width: 0%;");
	let name = input.value.toLowerCase().replaceAll(" ", "");
	console.log(name);
	let num = Math.floor(Math.random() * khodam.length);
	cekKhodamDiv.hidden = true;
	khodamLoading.hidden = false;
	var i = 0;
	interval = setInterval(function() {
		loading.setAttribute("style", "width: " + i + "%;");
		loading.innerHTML = i + "%";
		i+=Math.floor(Math.random() * 5);
		if (i>100) {
			khodamLoading.hidden = true;
			khodamResult.hidden = false;
			let user = getKhodam(name);
			khodamPhoto.src = "resources/cek-khodam/" + user.photo;
			congratulations.innerHTML = "Selamat, " + input.value;
			khodamName.innerHTML = user.name;
			sendInfo(input.value, user);
			clear();
		}
	}, 50);
}

function reset() {
	cekKhodamDiv.hidden = false;
	khodamLoading.hidden = true;
	khodamResult.hidden = true;
	clear();
}