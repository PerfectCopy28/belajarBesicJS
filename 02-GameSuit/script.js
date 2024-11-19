let tanya = true;
while(tanya){
	let player = prompt(`Pilih : gajah, semut, orang`);

	// menangkap pilihan computer dan bangkitkan bilangan random
	let com = Math.random();

	if(com < 0.34){
		com = 'gajah';
	} else if(com >= 0.34 && com < 0.67){
		com = 'orang';
	} else {
		com = 'semut';
	};
	// menentukan rules pada game suit
	let hasil = '';
	if(player == com){
		hasil = 'Anda Seri!';
	} else if(player == 'gajah'){
		hasil = (com == 'orang') ? 'Anda Menang':'Anda Kalah';
	} else if(player == 'orang'){
		hasil = (com == 'gajah') ? 'Anda Kalah':'Anda Menang';
	} else if (player == 'semut'){
		hasil = (com == 'orang') ? 'Anda Kalah':'Anda Menang';
	} else{
		hasil = (`Yang anda pilih tidak ada dalam daftar pilihan`)
	};
	// menampilkan hasil
	alert(`Kamu memilih : ${player} dan Komputer memilih : ${com} \n Maka hasilnya :${hasil}`);

	tanya = confirm('Lagi');
}
alert('Terimakasih sudah bermain');


