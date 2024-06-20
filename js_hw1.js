//Типи даних, числа та порожні типи
//Number: age
var age = prompt('Скільки тобі років?');
alert(`Ти народився в  ${(2024 - age)} році`);

//Number: temperature
var temperature = prompt('Яка зараз температура за віктом по Цельсію?');
alert(`То зараз ${((temperature * 1.8) + 32)} по фаренгейту`);

//Number: divide
var number = prompt('введіть число');
var number1 = prompt('введіть число');
summa = number / number1;
alert(Math.floor(summa));

//Number: currency
const rate = 41;
var number = prompt('Введіть кількість валюти');
let currency = prompt('Яку валюту бажаєте?');
if (currency === 'us') {(alert((number / rate).toFixed(2)));}
else if (currency === 'ua') {(alert((rate * number).toFixed(2)));}

//Number
let red = +prompt();
let green = +prompt();
let blue = +prompt();
alert(['#', red.toString(16), green.toString(16), blue.toString(16)].join(""))

//Number: flats
var floors = prompt("Введіть кількість поверхів");
var apartmentsOnTheFloors = prompt("Введіть кількість кватрит на поверсі");
var apartment = prompt("Введіть квартиру яку ви шукаєте");
numbersOfFoyer = 4;
numbersOfApartments = floors * apartmentsOnTheFloors * numbersOfFoyer;
foyer = Math.ceil(apartment / (floors * apartmentsOnTheFloors));
if(foyer > 1){
    floor = Math.ceil((apartment - floors * apartmentsOnTheFloors * (foyer - 1)) / apartmentsOnTheFloors);}
else {
    floor = Math.ceil(apartment / apartmentsOnTheFloors);}
alert(`Парадне №${(foyer)}, поверх ${(floor)}`);

