var name = prompt('Inserisci il tuo nome')
var lastName = prompt('Inserisci il tuo cognome')
var color = prompt('Inserisci il tuo colore preferito')

console.log(name);
console.log(lastName);
console.log(color);

/*Nome visualizzato in html*/
var namePlaceholder = document.getElementById('name')
console.log(namePlaceholder)

namePlaceholder.innerHTML = name;

/*Cognome visualizzato in html*/
var lastNamePlaceholder = document.getElementById('last-name')
console.log(lastNamePlaceholder)

lastNamePlaceholder.innerHTML = lastName;

/*Colore visualizzato in html*/
var colorPlaceholder = document.getElementById('color')
console.log(colorPlaceholder)

colorPlaceholder.innerHTML = color;

/*Password visualizzato in html*/

var currentYear = 21;
var passwordTest = name + lastName + color + currentYear;
var passwordTest = document.getElementById('pass')
console.log(passwordTest)

passwordTest.innerHTML = name + lastName + color + currentYear;