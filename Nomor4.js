let sukuPertama = 4;
let rasio = 3;
let jumlahSuku = 10;

console.log("Deret geometri:");
for (let i = 0; i < jumlahSuku; i++) {
    let sukuSaatIni = sukuPertama * Math.pow(rasio, i);
    console.log(`Suku ke-${i + 1}: ${sukuSaatIni}`);
}
