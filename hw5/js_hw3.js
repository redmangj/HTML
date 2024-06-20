//Boolean
let str = +prompt('Введіть число ',);
    if (str % 2 === 0){
        console.log(str);}
    if (str % 2 !== 0){
        console.log("Виведіть парне число чи ні");}

//Number: odd
let str = prompt('заборона на "небезпека" ',);
    if (str.indexOf("небезпека") > -1){
        console.log("Ви порушили правило");}
    else{
        console.log(str);}

//Boolean/Boolean: if
let text = (confirm("Ти повнолітній?"));        
let text1 = (confirm("Ти палиш?"));
let text2 = (confirm("Ти вживаєшщ алкоголь?"));
let text3;
    if (confirm("Ти чоловік?")){
        text3 ="Ви чоловік";}
    else {text3 = "Ви жінка";}
alert(text +', '+ text1 +', '+ text2 +', '+ text3);

//Comparison: sizes
size = {'XXS': 8, 'XS': 10, 'S': 12, 'M': 14, 'L': 16, 'XL': 18, 'XXL': 20, 'XXXL': 22}
let country = prompt('Введіть назву країни ');
let i_s = prompt('Введіть міжнародний розмір ');
if (country === 'GER'){
    country = 28;}
if (country === 'USA'){
    country = 0;}
if (country === 'FR'){
    country = 30;}
if (country === 'GB'){
    country = 16;}
c_s = size[i_s] + country;
alert("Ваш розмір "+c_s);

//Ternary
let text = confirm("Ти чоловік?") ? "Ви чоловік" : "Ви жінка";
alert(text);

//Prompt: or

//Confirm: or this days
let text = confirm("шопінг?") || alert ("ти - бяка");

//Confirm: if this days
let text;
  if (confirm("шопінг?"));
    else {alert( text ="ти - бяка")};

//Default: or
let surname = prompt("Прізвище ") || "Іванов";
let name = prompt("Імʼя ") || "Іван";
let fatherName = prompt("По батькові ") || "Іванович";
alert(surname+" "+name+" "+fatherName);

//Default: if
let surname
    if (surname = prompt("Прізвище "));
        else {surname = "Іванов";}
let name
    if (name = prompt("Імʼя  "));
        else {name = "Іван";}
let fatherName
    if (fatherName = prompt("По батькові "));
        else {fatherName = "Іванович";}
alert(surname+" "+name+" "+fatherName);

//Login and password
const login = "admin"
const password = "qwerty"
log = prompt('лоігін ');
pass = prompt('пароль ');
if (log === login && pass === password) {alert('Успіх');}
    else {alert('Такого логіну або паролю не існує');}

//Currency exchange

//Scissors
let mark = prompt('Ваш знак ');
     if (mark === "камінь"){
     mark = 0;}
     else if (mark === "ножиці"){
     mark = 1;}
     else if (mark === "папір"){
     mark = 2;}
     else{alert("Навчись грати!");}
let cr = Math.floor(Math.random() * 3)
    if (cr == 0){
    alert("камінь");}
    else if (cr == 1){
    alert("ножниці");}
    else if (cr == 2 ){
    alert("папір");}
let result
    if (mark == cr){
        alert("нічия");}
    else if (mark == 0 && cr == 1){
       alert("Ти виграв!");}
    else if (mark == 0 && cr == 2){
       alert("Ти програв!");}
    else if (mark == 1 && cr == 2){
       alert("Ти виграв!");}
    else if (mark == 1 && cr == 0){
       alert("Ти програв!");}
    else if (mark == 2 && cr == 0){
       alert("Ти виграв!");}
    else if (mark == 2 && cr == 1){
       alert("Ти програв!");}