let tinggiBadan = 170 / 100; // 170cm ke meter
let beratBadan = 90;
let bmi = beratBadan / (tinggiBadan * tinggiBadan);

let statusBeratBadan;
if (bmi < 18.5) {
  statusBeratBadan = "Kekurangan berat badan";
} else if (bmi >= 18.5 && bmi <= 24.9) {
      statusBeratBadan = "Normal (ideal)";
  } else if (bmi >= 25 && bmi <= 29.9) {
  statusBeratBadan = "Kelebihan berat badan";
} else  {
    statusBeratBadan = "Kegemukan (Obesitas)";
  }

console.log("BMI: " + bmi.toFixed(2));
console.log("Status Berat Badan: " + statusBeratBadan);