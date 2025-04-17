const input01 = document.getElementById("a");
const input02 = document.getElementById("b");
const input03 = document.getElementById("c");
const input04 = document.getElementById("d");
const input05 = document.getElementById("e");
const soal = document.getElementById("soal");
const result = document.getElementById("result");

function minSymbol(num) {
	return ((num > 0)?"+":"-");
}

function printX(num) {
	return ((num == 1)?"x":Math.abs(num)+"x");
}

function onResultView() {
	let a = input01.value;
	let b = input02.value;
	let c = input03.value;
	let d = input04.value;
	let e = input05.value;

	soal.innerHTML = "Soal: \\( f(x) = " + a + "x^2" + ((b > 0)?"+":"-") + Math.abs(b) + "x" + ((c > 0)?"+":"-") + Math.abs(c) + "\\) dan \\( g(x) = " + d + " " + minSymbol(e) + e + "\\)";
	let hasilDiskriminan = b*b - 4*a*c;
	//diskriminanResult.innerHTML = "\\( D = b^2 - 4ac \\)<br/>&emsp;\\( = " + ((4*a*c<0)?"(":"") + b + ((4*a*c<0)?")":"") + " - 4 \\times " + a + " \\times " + c + " \\)<br/>&emsp;\\( = " + (b*b) + " - " + ((4*a*c<0)?"(":"") + (4*a*c) + ((4*a*c<0)?")":"") + " \\)<br/>&emsp;\\( = " + hasilDiskriminan + " \\)";

	let hasilX1 = (-b + Math.sqrt(hasilDiskriminan)) / (2*a);
	let hasilX2 = (-b - Math.sqrt(hasilDiskriminan)) / (2*a);

	//akarPersamaanKuadratResult.innerHTML = "\\( x = \\frac{-b \\pm \\sqrt{D}}{2a} \\)<br/>\\( x1 = \\frac{-b + \\sqrt{D}}{2a} \\)<br/>&emsp;&ensp;\\( = \\frac{- (" + b + ") + \\sqrt{" + hasilDiskriminan + "}}{2 \\times " + a + "}\\)<br/>&emsp;&ensp;\\( = \\frac{" + (-b + Math.sqrt(hasilDiskriminan)) + "}{" + (2*a) + "} \\)<br/>&emsp;&ensp;\\( = " + hasilX1 + "\\)";

	result.innerHTML = `
	<h4>Diketahui:</h4>
	<ul>
		<li>\\( f(x) = ${minSymbol(a)} ${printX(a)}^2 ${minSymbol(b)} ${printX(b)} ${minSymbol(c)} ${c} \\)</li>
		<li>\\( g(x) = ${minSymbol(d)} ${printX(d)} ${minSymbol(e)} ${Math.abs(e)} \\)</li>
	</ul>
	<h4>Langkah-langkah:</h4>
	<ol>
		<li>
			Substitusi \\( g(x) \\) ke dalam \\( f(x) \\):<br/>
			<div class="text-center fs-4">\\( f(g(x)) = f(${minSymbol(d)} ${printX(d)} ${minSymbol(e)} ${e}) \\)</div>
			Artinya, setiap \\( x \\) pada \\( f(x) \\) diganti dengan \\( ${minSymbol(d)} ${printX(d)} ${minSymbol(e)} ${e} \\)
		</li>
		<li>
			Bentuk \\( f(g(x)) \\):<br/>
			\\( f(g(x)) = (${minSymbol(d)} ${printX(d)} ${minSymbol(e)} ${Math.abs(e)})^2 ${minSymbol(b)} ${Math.abs(b)} (${minSymbol(d)} ${printX(d)}) \\)
		</li>
	</ol>
	`

	MathJax.typeset();
}

