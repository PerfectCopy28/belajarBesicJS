const angka = [1,-2,4,6,3,9,7,-5,5,8];
// filter 
// const newAngka = angka.filter(item => {
// 	return item >= 6;
// });

// map
// const newAngka = angka.map(item => {
// 	return item * 3;
// })

// reduce
// const newAngka = angka.reduce((nAwal,nTamnbah) => nAwal + nTamnbah)

// method chaining
const newAngka = angka.filter(item => item >= 5)
	.map(item => item * 3)
	.reduce((acc,cur) => acc + cur);
console.log(newAngka);