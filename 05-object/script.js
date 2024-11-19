// const mhs = {
// 	nama: 'Candra',
// 	energi: 10,

// 	makan: function(porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan`)
// 	},
// 	main: function(jam){
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, selamat bermain`)
// 	}
// };

// dengana mengunkana function declaration
// const Mahasiswa = function(nama,energi){
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	mahasiswa.makan = function(porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan`);
// 	}

// 	return mahasiswa;
// };

// let data = Mahasiswa('Candra',10);


// dengan contructor function
function Mahasiswa(nama,energi){
	this.nama = nama;
	this.energi = energi;

	// membuat method
	this.makan = function(porsi){
		this.energi += porsi;
		console.log(`Halo ${this.nama}, selamat makan`);
	};
	this.tidur = function(jam){
		this.energi += jam * 2;
		console.log(`Halo ${this.nama}, selamat tidur`);
	};
};

let data = new Mahasiswa('Candra',15);