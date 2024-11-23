// membuat Object dengana constarctor 
function Mahasiswa(nama,energi) {
	this.nama = nama;
	this.energi = energi;
};
// menghubungkan object mahasisiawa  dengan menthod seninga kita tidak perlu mengelolah keduanya
Mahasiswa.prototype.makan = function(porsi){
	this.energi += porsi;
	console.log(`Halo ${this.nama}, selamat makan`);
};
Mahasiswa.prototype.tidur = function(jam){
	this.energi += jam * 2;
	console.log(`Halo ${this.nama}, selamat isitirahat`);
};
let data = new Mahasiswa('Candra',10);

// menghitung luas lingkaran
function Circle(radius) {
	this.radius = radius;
};
Circle.prototype.getArea = function(){
	return Math.PI * Math.pow(this.radius, 2);
};

const circle1 = new Circle(5);

console.log(circle1.getArea());
