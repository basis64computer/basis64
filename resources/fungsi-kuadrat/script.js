const input01 = document.getElementById("a");
const input02 = document.getElementById("b");
const input03 = document.getElementById("c");
const soal = document.getElementById("soal");
const diskriminanResult = document.getElementById("diskriminanResult");
const akarPersamaanKuadratResult = document.getElementById("akarPersamaanKuadratResult");
const fungsiKuadratResult = document.getElementById("fungsiKuadratResult");


function onResultView() {
	let a = input01.value;
	let b = input02.value;
	let c = input03.value;

	soal.innerHTML = "Soal: \\( f(x) = " + a + "x^2" + ((b > 0)?"+":"-") + Math.abs(b) + "x" + ((c > 0)?"+":"-") + Math.abs(c) + "\\)";
	let hasilDiskriminan = b*b - 4*a*c;
	diskriminanResult.innerHTML = "\\( D = b^2 - 4ac \\)<br/>&emsp;\\( = " + ((4*a*c<0)?"(":"") + b + ((4*a*c<0)?")":"") + " - 4 \\times " + a + " \\times " + c + " \\)<br/>&emsp;\\( = " + (b*b) + " - " + ((4*a*c<0)?"(":"") + (4*a*c) + ((4*a*c<0)?")":"") + " \\)<br/>&emsp;\\( = " + hasilDiskriminan + " \\)";

	let hasilX1 = (-b + Math.sqrt(hasilDiskriminan)) / (2*a);
	let hasilX2 = (-b - Math.sqrt(hasilDiskriminan)) / (2*a);

	akarPersamaanKuadratResult.innerHTML = "\\( x = \\frac{-b \\pm \\sqrt{D}}{2a} \\)<br/>\\( x1 = \\frac{-b + \\sqrt{D}}{2a} \\)<br/>&emsp;&ensp;\\( = \\frac{- (" + b + ") + \\sqrt{" + hasilDiskriminan + "}}{2 \\times " + a + "}\\)<br/>&emsp;&ensp;\\( = \\frac{" + (-b + Math.sqrt(hasilDiskriminan)) + "}{" + (2*a) + "} \\)<br/>&emsp;&ensp;\\( = " + hasilX1 + "\\)";
	akarPersamaanKuadratResult.innerHTML += "<br/><br/>\\( x2 = \\frac{-b - \\sqrt{D}}{2a} \\)<br/>&emsp;&ensp;\\( = \\frac{- (" + b + ") - \\sqrt{" + hasilDiskriminan + "}}{2 \\times " + a + "}\\)<br/>&emsp;&ensp;\\( = \\frac{" + (-b - Math.sqrt(hasilDiskriminan)) + "}{" + (2*a) + "} \\)<br/>&emsp;&ensp;\\( = " + hasilX2 + "\\)";
	akarPersamaanKuadratResult.innerHTML += "<br/><br/>\\(x1 = " + hasilX1 + "\\) atau \\(x2 = " + hasilX2 + "\\)";

	fungsiKuadratResult.innerHTML = ""

	MathJax.typeset();
}
