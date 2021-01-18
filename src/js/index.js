import '../scss/main.scss';

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

