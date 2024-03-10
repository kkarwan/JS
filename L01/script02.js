// function oblicz() {
//    // liczba1 = document.getElementById("liczba1").value;
//    // liczba2 = document.getElementById("liczba2").value;

//    // wynik = parseInt(liczba1) + parseInt(liczba2);



//    liczba1 = parseInt(document.getElementById("liczba1").value);
//    liczba2 = parseInt(document.getElementById("liczba2").value);
//    wynik = liczba1+liczba2;

//    console.log(wynik)
// }

function oblicz1(){
   liczba1 = parseInt(document.getElementById("liczba1").value);
   liczba2 = parseInt(document.getElementById("liczba2").value);
   wynik = liczba1+liczba2;
   console.log(wynik)
}
function oblicz2(){
   liczba1 = parseInt(document.getElementById("liczba1").value);
   liczba2 = parseInt(document.getElementById("liczba2").value);
   wynik = liczba1-liczba2;
   console.log(wynik)
}
function oblicz3(){
   liczba1 = parseInt(document.getElementById("liczba1").value);
   liczba2 = parseInt(document.getElementById("liczba2").value);
   wynik = liczba1*liczba2;
   console.log(wynik)
}
function oblicz4(){
   liczba1 = parseInt(document.getElementById("liczba1").value);
   liczba2 = parseInt(document.getElementById("liczba2").value);
   wynik = liczba1/liczba2;
   console.log(wynik)
}

function oblicz(liczba1,liczba2){
   wynik = parseInt(liczba1.value) + parseInt(liczba2.value);
   console.log(wynik)

}