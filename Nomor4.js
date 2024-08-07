let sukuPertama = 4
let rasio = 3
let jumlahSuku = 10
let jumlahTotal = 0

for (let i = 0; i < jumlahSuku; i++) {
    let sukuSekarang = sukuPertama * Math.pow(rasio,i)  //MENGHITUNG SUKU KE i
    jumlahTotal += sukuSekarang;  //SUKU KE i
}

console.log(`Jumlah 10 Suku Pertama Adalah : ${jumlahTotal}`)