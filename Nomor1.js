let Panjang = 20.5
let Lebar = 30;
let HargaPerMeter = 1500000;
let PPN = 0.15

let luasTanah = Panjang *Lebar
let totalHargaTanpaPPN = luasTanah*HargaPerMeter
let jumlahPPN = totalHargaTanpaPPN*PPN
let totalHargaDenganPPN = totalHargaTanpaPPN+jumlahPPN



console.log("Luas Tanah : " + luasTanah + " meter persegi")
console.log("Total Harga Tanpa PPN : " + totalHargaTanpaPPN)
console.log("Jumlah PPN () : " + jumlahPPN)
console.log("Total Harga dengan PPN : " + totalHargaDenganPPN)