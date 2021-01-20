import '../scss/main.scss';

import moment from 'moment'; // importujemy moduł z node moment

//PODSTAWY

const name = 'Bartek'; // to jest komentarz jednoliniowy - to jest string czyli tekst w ''
const age = 32; // to jest zmienna stała - zmienna liczbowa
const truth = false; // to jest zmienna boolean, czyli prawda lub fałsz
const nothing = null // wartość celowo niedefiniowana >> wszystkie powyzsze zmienne mozesz wywołać w consoli słowem "typeof" 
let newName = 'Sabina' // to jest zmienna, którą mozna przepinać - podpinać pod inne wartości

alert('To wyskoczy w okienku po załadowaniu strony');

console.log('A to będzie komunikat w konsoli i znajdziesz go w devtoolsach');

console.log(`Tutaj podstawimy zmienne ${name} i ${age}`);

console.log(`Tutaj wyskoczy zmienna, którą mogę przepiąć ${newName}`);

const selektor = document.querySelector('.selektor--js') // mozesz w ten sposob wybrac klasa i wyswietlic w konsoli dana czesc kodu (węzeł - node)

console.log(selektor);

// kolejne ćwiczenie z wpinaniem sie w DOM
const header = document.querySelector('.change--js');
console.log(header);
header.innerHTML = `Moja miłość to ${newName} ❤️`; // zmieniamy treść 

//FUNKCJE

// 1. Funkcja, która coś liczy

function policz(numerek) { // funkcje mozesz nazwac sobie jak chcesz
    console.log(`Moja liczba w funkcji to ${numerek}`);
    return numerek*7; // funkcja musi miec return, bo inaczej jest undefined, tutaj tez mozesz wrzuc string nie koniecznie liczby tylko
}

const wynik = policz(3); // określamy tutaj wartość z jaką ma się połączyć "numerek"

console.log(`Wynik działania w funkcji to ${wynik}`);

// 2. Funkcja, która coś pokazuje

function powitanie (imie) {
    console.log(`Tu się teraz podstawi moje imię ${imie}`);
    return imie;
}
const witaj = powitanie(name);

console.log(`Siema ${witaj}`);

powitanie(newName);
powitanie(newName);
powitanie(newName);
powitanie(newName);
powitanie(newName); // funkcje sa m.in. po to, zeby nie pisac tyle kodu, a mozna bylo ciagle ja wywyoływac 

// 3. Funkcja, która coś podmienia

function podmianka (zmienianyObiekt, podmienionaTresc) {
    const element = document.querySelector(zmienianyObiekt);
    element.innerHTML = podmienionaTresc;
}
 podmianka('.trick--js', 'A to jest podmieniona treść. Haker 😎'); 

// OBIEKTY

const subaruImpreza = { // zmienna obiekt
    brand: 'Subaru', // wlasnosc - property
    type: 'Impreza',
    power: 235,  
    engine: 2500,
    fuel: true,
    drive: (cel) => { // metody - czyli funkcje w obiekcie
        console.log(`Jezdze szybko do ${cel}`)
    },
    driver: {
        name: 'Bartosz',
        driverLicense: true,
    }
 }

 console.log(subaruImpreza);

 console.log(`Nazywam się ${subaruImpreza.driver.name}, a mój samochód to ${subaruImpreza.brand} model ${subaruImpreza.type}`);

 subaruImpreza.drive('Sukowic'); // wywołnie metody (funkcji z obiektu)

 console.log(typeof subaruImpreza.fuel); // typeof pokazuje czy to jest obiekt czy wlasnosc i jaka

 // Bracket notation 

 console.log(subaruImpreza['brand']); // Przykład 1. Tak tez mozna sie "dobić" do własności

 const mojaMarka = 'brand';
 
 console.log(subaruImpreza[mojaMarka]); // Przykład 2. A tak inaczej tez mozna 

 const pokazMojaWlasnosc = (mojaWlasnosc) => { // Przykład 3. Jak to wykorzystać w praktyce
     console.log(`Mój ${mojaWlasnosc} to ${subaruImpreza[mojaWlasnosc]}`)
 };

 pokazMojaWlasnosc('brand'); 
 pokazMojaWlasnosc('type'); 
 pokazMojaWlasnosc('power'); 

  // FAT ARROW FUNCTION

const fatArrow = (sukces) => {
    console.log(`${sukces} jest genialny!`);
}

fatArrow(`${name}`); // inny sposób zapisu funkcji, moze troche bardziej czytelny, w przykladzie odniosles sie do zmiennej stalej z wiersza numer 1

// Podstawy pod hamburger menu

const button = document.querySelector('.guzik--js');

console.log(button);

const klikanie = () => {
    const zmiana = document.querySelector(".podmiana--js");
    zmiana.innerHTML = `Szok! 🤯`
}

button.addEventListener('click', klikanie);

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.hamburger--close');
    nav.classList.toggle('hamburger--open'); // obie klasy są w css 
});

// TABLICE (ARRAYS)

const tablicaTrening = ['🌶', '🌭', '🍅', '🥑'];
console.log(tablicaTrening);
console.log(tablicaTrening[3]); // liczy pozycje od 0
console.log(tablicaTrening.length); // liczy liczbe elementów w tablicy

const testowyString = 'Bartosz';
console.log(testowyString[3]);
console.log(testowyString.length); // stringi zachowują się podobnie do tablic

tablicaTrening.push(testowyString); // dodaje element do tablicy na koniec
tablicaTrening.unshift('TOP💪'); // dodaje element do tablicy na początek
console.log(tablicaTrening);
tablicaTrening.shift(); // usuwa pierwszy element
tablicaTrening.pop(); // usuwa ostatni element
console.log(tablicaTrening);

console.log(tablicaTrening.indexOf('🍅')); // wyszuka i jeśli znajdzie poda nam pozycje w tablicy

// pamiętaj, ze indexOf zwraca wartość od 0 do anie true false, jak nie znajdzie elementu wypisuje -1 dlatego jest >= 0

if (tablicaTrening.indexOf('🌶') >= 0) {
    console.log('Mam te emoji')
} else {
    console.log('Nie mam tego emoji')
};

if (tablicaTrening.indexOf('🌽') >= 0) {
    console.log('Mam te emoji')
} else {
    console.log('Nie mam tego emoji')
};

tablicaTrening.splice(1,2); // funkcja splice usuwa od wybranej pozycji wybrana ilosc elementow
console.log(tablicaTrening); 

// tutaj mozesz sobie wybrac fragment starej tablicy zaczyna od numeru indeksu włącznie i kończy na podanej wartości, ale ju jej nie dołącza
const nowaTablica = tablicaTrening.slice(1,3);
console.log(nowaTablica); // tu nie działa bo ją poszatkowałeś splicem

// PĘTLE (LOOPS)

//Pętla for
for (let i = 0; i < 4; i++) {
    console.log('Witamy pętle');
    console.log(`Powitanie numer ${i}`)
}

// i++ postinkrementacja 
let exNumber = 4;
console.log(exNumber++);
console.log(exNumber); 

// i-- postdekrementacja
let exNumber2 = 4;
console.log(exNumber2--);
console.log(exNumber2); 

// ++i preinkrementacja
let exNumber3 = 4;
console.log(++exNumber3);
console.log(exNumber3);

// -i predekrementacja
let exNumber4 = 4;
console.log(--exNumber4);
console.log(exNumber4);

const tablicaOwoce = ['🍎','🍌','🍍','🍒','🍉'];

for (let i=1; i < tablicaOwoce.length; i++) {
    console.log(`Owoc pod indeksem ${i} jest ${tablicaOwoce[i]}`)
}

// Petla while
let whileNumber = 0;

while (whileNumber < 10){
    console.log(whileNumber);
    whileNumber++;
}

// Petla do while
let doWhileNumber = 20;

do {
    console.log(doWhileNumber);
    doWhileNumber = doWhileNumber - 5;
} while (doWhileNumber > 0);
console.log(doWhileNumber);

// Pętla for in 
const home = {
    typ: 'apartament',
    pokoje: 5,
    powierzchnia: 150,
    miejsce: 'Teneryfa'
}

for (let newHome in home) {
    console.log(`${newHome}: ${home[newHome]}`);
}
 // Pętla for of
const elements = ['😎','🤓','🤩','🥳'];

for(let element of elements) {
    console.log(element);
}

//PRZECHOWYWANIE DANYCH

//cookies
document.cookie = 'names = Bartek&Sabina;'

//local storage
localStorage.setItem('person', 'Banan 🍌')

console.log(localStorage.getItem('person'));

localStorage.setItem('wpis', JSON.stringify({imie: 'Janek 🤓', nazwisko: 'Kowalski', wiek: 32})); // JSON.stringify zapisuje objekt jako string

const czaryMary = localStorage.getItem('wpis');

console.log(JSON.parse(czaryMary)); //JSON.parse zamieni string na obiekt

// aplikacja zapisujaca do local storage z inputa, której nie rozumiesz...

const enter = localStorage.getItem('enter');
let result = '';

if (enter) {
    console.log(`Wartość podana przez gościa: ${enter}`);
    result = enter;
}

const enterInput = document.querySelector('.enter--js');
enterInput.value = result;

const guzikZapisz = document.querySelector('.save--js');
console.log(guzikZapisz);

guzikZapisz.addEventListener('click', () => {
    localStorage.setItem('enter', enterInput.value);
});

// Biblioteka moment

const data = moment().format('LL');
console.log(data);

const wypiszDate = document.querySelector('.data--js');
wypiszDate.innerHTML = data;

//Biblioteka moment + local storage
localStorage.setItem('Data wejścia', data); //dodałeś wpis do local storage w ktorym jest wpisana data wejscia

const godzina = moment().calendar(); 
localStorage.setItem('Godzina', godzina);