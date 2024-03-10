function przelicz() {
   celsjusz = parseFloat(document.getElementById("stopnie").value);
   kelwin = celsjusz + 273.15;
   fahrenheit = (celsjusz * 1.8) + 32;

   // console.log("Celsjusz: " + celsjusz);
   // console.log("Kelwin: " + kelwin);
   // console.log("Fahrenheit: " + fahrenheit);
   w1 = document.getElementById("wynik1");
   w2 = document.getElementById("wynik2");
   w3 = document.getElementById("wynik3");

   w1.innerText = "Celsjusz: " + celsjusz + "C";
   w2.innerText = "Kelwin: " + kelwin + "K"; 
   w3.innerText = "Fahrenheit: " + fahrenheit + "F";

}
