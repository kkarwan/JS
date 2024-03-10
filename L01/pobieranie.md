
https://kursjs.pl/kurs/dom/dom

https://pl.wikipedia.org/wiki/Obiektowy_model_dokumentu#/media/Plik:JKDOM.SVG

Sposoby pobierania danych z drzewa DOM (Obiektowergo Modelu Dokumentu - ang. Document Object Model

```js
document.getElementById("lubie");
```

odwołanie do (node) węzła id="lubie". 
W naszym przykładzie zwrócone zostanie dokładnie pierwsze wystąpienie znacznika o id="lubie":  
```html
<h1 id="lubie">
```


document.getElementsByTagName("li");
odwołanie do wszystkich znaczników <li></li> w dokumencie
W naszym przykładzie zwrócona zostanie kolekcja HTML, wszystkich znaczników <li></li>

HTMLCollection { 0: li, 1: li, 2: li, 3: li, 4: li, length: 5 }

Aby się odwołać do konkretnego z kolekcji wystarczy wpisać indeks []

document.getElementsByTagName("li")[1]
// zostanie zwrócony węzeł <li></li>, który zawiera treść Jak mam wolne
żęby się dostać do treści dopisujemy .innerText lub. innerHTML

document.getElementsByTagName("li")[1].innerText


podobne działanie ma 
document.getElementsByClassName("abc"), gdzi eodwołujemy sie do węzłów poprze klasę, w naszym przypadku class="abc"


```


Zadanie 1:
Utwórz pola, które pozwolą wprowadzić wymiey pokoju w cm.

przykładowy rozmiar pokoju 452x411

podajemy szerokość i podajemy długość
po naciśnięciu przycisku oblicz skrypt ma obliczyć koszt położenia podłogi jesli za 1m^2 trzeba zapłacić 450zł
wynik wyświetl w akapicie o id="wynik" pod formularzem

4.56m^2 