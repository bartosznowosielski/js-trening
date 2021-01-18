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
    nav.classList.toggle('hamburger--open');
});