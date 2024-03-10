function oblicz() {
   powierzchnia = document.getElementById("powierzchnia").value;
   iloscPuszek = Math.ceil(powierzchnia / 4);
   document.getElementById("wynik").innerText = "Liczba potrzebnych puszek: " + iloscPuszek;


}