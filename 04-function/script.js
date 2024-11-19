function penjumlahan(a,b) {
	return a + b;
};
function kaliPenjumlahan(a,b) {
	return 2 * (a + b);
};

function hasil(a,b) {
	const jumlah = penjumlahan(a,b);
	const kaliJumlah = kaliPenjumlahan(a,b);
	console.log(`hasil dari function penjumlahan-${jumlah} dan kaliJumlah-${kaliJumlah}`);
	console.log(`penjumlahan: ${jumlah}`);
	console.log(`kaliJumlah: ${kaliJumlah}`);
};
hasil(4,5);
 
