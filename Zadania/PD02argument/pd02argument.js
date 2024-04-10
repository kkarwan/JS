
function bmi(waga,wzrost) {
   bmi = waga / (wzrost*wzrost/10000);
   document.getElementById("wynik").innerText = bmi.toFixed(2)
   
}