let sukuPertama = 4;
let rasio = 3;
let jumlahSuku = 10;
let jumlahTotal = 0;

for (let i = 0; i < jumlahSuku; i++) {
    let sukuSekarang = sukuPertama * Math.pow(rasio, i);  // Menghitung suku ke-i
    jumlahTotal += sukuSekarang;  // Menambah suku ke-i ke jumlah total
}

console.log(`Jumlah 10 Suku Pertama Adalah : ${jumlahTotal}`);

// Menampilkan seluruh nomor dari 1 sampai 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}