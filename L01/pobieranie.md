<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* { font-family: "Montserrat", monospace;
}

</style>
# Link z materiałami do JavaScript:
- https://kursjs.pl
### DOM (Document Object Model)
- https://kursjs.pl/kurs/dom/dom
- https://pl.wikipedia.org/wiki/Obiektowy_model_dokumentu#
 
**Sposoby pobierania danych z drzewa DOM, których będziemy używali na zajęciach (ang. Document Object Model - pl. Obiektowy Modelu Dokumentu).**

**Te pogrubione są dla naszych zadań i rozwiązań najczęściej używane i jak na razie na egzamin wystarczające.**

- **.getElementById()** - zwraca konkretny element dla określonego id
- .getElementsByTagName() - zwraca kolekcję elementów HTML dla określonego tagu znacznika
- .getElementsByClassName() - zwraca kolekcję elementów HTML dla określonej klasy CSS
- .getElementsByName() - zwraca listę węzłów (kolekcje obiektów) na podstawie atrybutu name
- **.querySelector()** - zwraca pierwszy pasujący element dla określonego selektora CSS
- .querySelectorAll() - zwraca listę węzłów (kolekcje obiektów) wszystkich pasujących elementów dla określonego selektora CSS
- 
## Uwaga - przykłady zwracanych wyników są zaprezentowane jak w przeglądarce Firefox, w innych przeglądarkach wyniki w konsoli mogą być prezentowane nieco inaczej

# HTML - przykładowy kod, na którym bazujem

```html

<!DOCTYPE html>
<html lang="pl">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width , initial-scale=1.0">
   <title>Document</title>

</head>

<body>
   <h1 class="abc">Witaj w świecie JS</h1>
   <p class="abc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate delectus atque sit, earum sequi
      nihil. Corporis soluta quasi, dolores autem voluptas dolor? Id repudiandae rem vero quos delectus amet impedit.
   </p>
   <h1 id="lubie"><a href="#">Co lubię</a></h1>
   <ul>
      <li>Jak nie ma lekcji</li>
      <li>Jak mam wolne</li>
      <li>Opcja A</li>
      <li>Opcja B</li>
      <li>Opcja C</li>
   </ul>
   <hr>
   Imię: <input type="text" name="imie" id="imie"><br>
   Nazwisko: <input type="text" name="nazwisko" id="nazwisko"><br>
   Płeć:<br>
   K <input type="radio" name="plec" value="Kobieta">
   M <input type="radio" name="plec" value="Mężczyzna">
   <br>
   <input type="button" value="OK"><br>
   <p id="wynik"></p>
   <script src="script01.js"></script>
</body>

</html>
```
<br>

# Opis metod oraz niektórych właściwości potrzebnych do pobrania konkretnej wartości z elementu. 
**UWAGA!**
Przeglądarki w różny sposób zaprezentują wynik w konsoli. Często sprawdzaj za pomocą ```console.log(zmienna)``` jakie otrzymasz wyniki np. w Chrome, Firefox, Edge
To pomoże Ci zrozumieć odwołania do elementów HTML

# .getElementById() - metoda

```js
zmienna = document.getElementById("lubie");
```
Odwołanie do znacznika HTML w drzewie DOM (węzła, *ang. node*) o **id="lubie"**
W naszym przykładzie zwrócone zostanie pierwsze wystąpienie znacznika o id="lubie", czyli **zmienna** będzie przechowywała wartość:  
> Widok konsoli:
> ```html
> <h1 id="lubie"><a href="#">Co lubię</a></h1>
> ```
> *Firefox*

Gdyby takiego znacznika nie było to **zmienna** będzie miała wartość:
> Widok konsoli:
> ```js
> null
> ```
> *Firefox*

<br>

# .innerText oraz .innerHTML - właściwości

Powyżej za pomocą metody .getElementById() pobraliśmy konkretny element HTML.
Jeśli jednak nie interesuje nas cały element tylko wartość znajdujaca się w nim, to możemy użyć np. właściwości **.innerText** lub **.innerHTML**

Dla przykładu: 
```js
zmienna = document.getElementById("lubie").innerText;
```
nasza **zmienna** będzie przechowywała wartość: **Co lubię** - po prostu zwykły tekst. Wszystkie znaczniki HTML są pomijane, a zwracany jest tylko tekst.

W przypadku użycia:
```js
zmienna = document.getElementById("lubie").innerTHTML;
```
**zmienna** będzie przechowywała wartość: **```<a href="#">Co lubię</a>```**

Będziemy tych właściwości używali, aby odwołać się do wartości w elementach HTML lub też aby wysłać tekst lub HTML-a do danego elementu.
Przykład wysłania treści do elementu:
```js
document.getElementById("wynik").innerText = "HELLO";
```
spowoduje, wysłanie do znacznika ```<p id="wynik"></p>``` tekstu o treści **HELLO**
Zatem w akapicie o ```id="wynik"``` wyświetlony zostanie tekst **HELLO**

**Przykład wysłania HTML'a do elementu:**
```js
document.getElementById("wynik").innerHTML = "<a href='#'>HELLO</a>";

```
Powyższy przykład powoduje, wysłanie do znacznika ```<p id="wynik"></p>``` treści ```<a href='#'>HELLO</a>```
Zatem w akapicie o ```id="wynik"``` wyświetlone zostanie hieperłącze: **<a href="#">HELLO</a>**

<br>

# .getElementsByTagName() - metoda

```js
zmienna = document.getElementsByTagName("li");
```

Odwołanie do wszystkich znaczników ```<li></li>``` w dokumencie HTML. W naszym przykładzie zwrócona zostanie kolekcja, wszystkich znaczników ```<li></li>```

> Widok konsoli:
> ```js
> HTMLCollection { 0: li, 1: li, 2: li, 3: li, 4: li, length: 5 }
> 0: <li>
> 1: <li>
> 2: <li>
> 3: <li>
> 4: <li>
>​length: 5
> ​<prototype>: HTMLCollectionPrototype { item: item(), namedItem: namedItem(), length: Getter, … }
>```
> *Firefox*
>

Jeśli chcemy odwołać do konkretnego elementu z kolekcji wystarczy dodać indeks [ ] po metodzie:

```js
document.getElementsByTagName("li")[1];
```

Zostanie zwrócony węzeł ```<li></li>``` 
> Widok konsoli:
> ```html
> <li>Jak mam wolne</li>
> ```
> *Firefox*


*UWAGA! Normalnie do poruszania się po kolekcjach będziemy używali pętli i dodatkowych metod, ale to już temat na inną lekcję*

<br>

# .getElementsByClassName() - metoda


```js
zmienna = document.getElementsByClassName("abc");
```
Odwołanie do wszystkich elementów HTML zawierających klasę **class="abc"**
W naszym przykładzie zwrócona zostanie kolekcja:  
> Widok konsoli:
> ```html
> HTMLCollection { 0: h1.abc, 1: p.abc, length: 2 }
> ​0: <h1 class="abc">​
> 1: <p class="abc">
> ​length: 2
> <prototype>: NodeListPrototype { item: item(), keys: keys(), values: values(), … }
> ```
> *Firefox*

Analogicznie jak w przypadku poprzedniej metody, która zwracała kolekcję możemy odwołać sie do konkretnego elementu podając indeks w nawiasach **[ ]**

```js
document.getElementsByClassName("abc")[0];
```
Zostanie zwrócony węzeł ```<h1></h1>``` czyli **zmienna** przechowywała bedzie wartość:
> Widok konsoli:
> ```html
> <h1 class="abc">Witaj w świecie JS</h1>
> ```
> *Firefox*

<br>

# .getElementsByName() - metoda

```js
zmienna = document.getElementsByName("plec");
```
Odwołuje się do wszystkich elementów HTML posiadających atrybut **name='plec'** zwracając w wyniku listę węzłów (ang. nodes). 
> Widok konsoli:
> ```html
> NodeList [ input, input ]
> ​0: <input type="radio" name="plec" value="Kobieta">
> 1: <input type="radio" name="plec" value="Mężczyzna">
> length: 2
> ```
> *Firefox*



<br>

# .querySelector() - metoda

querySelector() ma podobne działanie jak getElementById, ale odnosi się do pierwszego wystąpienia podanego przez nas selektora, tak ja podajemy nazwę selektora w ```CSS```

Na przykład:
```js
zmienna = document.querySelector("input[name='plec']");
```
odwoła się do pierwszego wystąpienia w dokumencie znacznika ```<input>``` posiadającego atrybut **name='plec'**. W naszym przypadku będzie to:
> Widok konsoli:
> ```html
> <input type="radio" name="plec" value="Kobieta">
> ```
> *Firefox*

<br>

# .querySelectorAll() - metoda

querySelector() ma podobne działanie jak getElementsByName(), czyli zwraca listę węzłów, ale odnosi się do wszystkich elementów HTML dla określonego selektora, tak jak podajemy nazwę selektora w ```CSS```

Na przykład:
```js
zmienna = document.querySelectorAll("input[name='plec']");
```
odwoła się do wszystkich wystąpień w dokumencie znacznika ```<input>``` posiadającego atrybut **name='plec'**. W naszym przypadku będzie to lista węzłów zwrócona w posataci:
> Widok konsoli:
> ```html
> NodeList [ input, input ]
> 0: <input type="radio" name="plec" value="Kobieta">
> 1: <input type="radio" name="plec" value="Mężczyzna">
> ​length: 2
> <prototype>: NodeListPrototype { item: item(), keys: keys(), values: values(), … }
> ```
> *Firefox*