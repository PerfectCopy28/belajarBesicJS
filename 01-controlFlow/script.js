let tanya = true;
while (tanya) {
	let umur = prompt(`Masukan angak yang anda ingin bagi :`);
	let hasil = (umur % 2 === 0) ? 'Angka Ganjil' : 'Angka genap'
	alert(`Angka yang anda masukan adalah ${hasil}`);

	tanya = confirm(`Apakan anda ingin melakaukan akses lagi`)
}
alert(`Terimakasih telah berkontribusi`);
