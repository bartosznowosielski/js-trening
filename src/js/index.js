import '../scss/main.scss';

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
header.innerHTML = `Moja miłość to ${newName}`; // zmieniamy treść 


