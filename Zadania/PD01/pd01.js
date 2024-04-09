/* 
Przeliczanie ze złotówek na euro

*/
function euro() {
   zloty = document.getElementById("zloty").value;
   przelicznik = 0.23;
   euro = zloty * przelicznik;
   document.getElementById("wynik").innerHTML = euro.toFixed(2) + " &euro;";
}