// jak policzyć BMI
/*

bmi = waga / Math.pow(wzrost,2)
lub
bmi = waga / (wzrost*wzrost);
Opowiedzi pod przyciskiem:

Twój wzrost: ????
Twoja waga: ?????
Twoje BMI: ?????


*/
function bmi() {
   const waga = document.getElementById("waga").value;
   const wzrost = document.getElementById("wzrost").value/100;

   bmi = waga / (wzrost*wzrost);
   document.getElementById("wynik").innerText = bmi.toFixed(2)
}