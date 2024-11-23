// function data(){
// 	let nilaiSatu = prompt(`Masukan nilai yang anda ingin kalikan :`);
// 	let nilaiDua = prompt(`Masukan nilai yang anda ingin kalikan :`);
// 	let hasil = nilaiSatu * nilaiDua;
// 	function tampilkanHasil(hasil){
// 		console.log(hasil);
// 	}
// 	tampilkanHasil(hasil);
// }
// data();

function sapa(waktu) {
	return function (nama) {
		console.log(`Halo ${nama}, selamat ${waktu} semoga harimu menyenangkan`);
	};
};

let selamatPagi = sapa('pagi');
selamatPagi('Candra');