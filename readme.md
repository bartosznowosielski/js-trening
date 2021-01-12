# Treningowe repozytorium – JavaScript Playground 🚧
## Tytułem wstępu 🚀
To jest jedno z moich treningowych repozytoriów w ramach kursu [WTF](https://cotenfrontend.pl/). Generuje takie repozytorium w oparciu o Webpack Starter Kit przygotowany przez Maćka Korsana. Aby wygenerować nowe repozytorium kliknij [tutaj](https://github.com/maciejkorsan/wtf-webpack-starter/generate). W tym repozytorium prowadzę notatki z nauki JavaScript.

## Obsługa Webpack Starter Kit 🎁
`git clone` + adres repozytorium pozwoli zapisać wygenerowane pliki na dysku  
`npm install` instalujemy raz na projekt  
`npm run start` zawsze kiedy zaczynamy pracę  
`npm run build` tryb deweloperski  
`npm run publish` otwiera nowy branch z „podglądem” strony, a nie tylko plikami źródłowymi  
`ctrl + c` zamyka proces w konsoli (używaj też przy gitk)  
`localhost:8080` live server  

`src` edytujemy pliki tylko w tym folderze  
`dist` to jest efekt naszej pracy, ten katalog publikujemy na serwerze  
`webpack.common.js` w tym pliku dodajemy nowe pliki   

### Dodawanie skryptów tylko na jednej podstronie 💻
W tablicy `chunks` w pliku `webpack.common.js` dopisujemy, które skrypty mają się odpalać na danej stronie. U góry tego pliku definiujemy skrypty. Opis tych miejsc znajdziesz w komentarzach w pliku.

### SCSS 💄
`main.scss` główny plik styli  
`_variables` zmienne    

## Komendy w terminalu 🕹
`cd ~` przejście do katalogu domowego  
`cd .` przejście katalog wyżej  
`ls` zawartość katalogu  
`ls -a` pokaze tez ukryte pliki
`cd nazwa-katalogu` przejście do katalogu nazwa-katalogu  
`pwd` wyświetla aktualną ścieżkę  
`mkdir nazwa-katalogu` stworzenie katalogu nazwa-katalogu  
`code .` otwiera visual studio code w danym katalogu  

## Komendy GIT ⌨️
`git init` zakładanie nowego repozytorium
`git status` sprawdza w których plikach zostały nie dodane zmiany
`git add .` dodaje w danym katalogu zmiany 
`git commit -m „opis zmian”` dodaje commit
`gitk` podgląd commitów
`git push` wrzuca zmiany do GitHub
`git branch` sprawdza na jakim branchu jesteśmy
`git branch nowy-branch` tworzy nowy branch
`git checkout nazwa-brancha` przerzuca na inny branch
`git merge nazwa-brancha` łączy nam branche


