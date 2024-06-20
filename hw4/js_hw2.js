//Рядки

//String: greeting
var name = prompt("Як тебе звуть?");
const greeting = `Привіт, ${name}`;
alert(greeting);

//String: gopni4ek
var string = prompt('Введіть речення з комами ');
    let strings = string.split(",");
    let stringj = strings.join(", блін");
alert(stringj);

//String: capitalize
let str = "cANBerRa"
let result = str[0].toUpperCase() + str.toLowerCase().slice(1);
alert(result);

//String: word count
var string = prompt('Введіть речення ');
    let strings = string.split(" ");
alert(`${(strings.length)} рядки`);

//String: credentials
let name0 = prompt("ПІБ ");
let name1 = prompt("ПІБ ");
let name2 = prompt("ПІБ ");
name0 = name0.trim = name0.split(/\s+/);
name0[0] =  name0[0].charAt(0).toUpperCase() + name0[0].toLowerCase(1).slice(1);
name0[1] =  name0[1].charAt(0).toUpperCase() + name0[1].toLowerCase(1).slice(1);
name0[2] =  name0[2].charAt(0).toUpperCase() + name0[2].toLowerCase(1).slice(1);
name0 = name0.join(" ");
name1 = name1.trim = name1.split(/\s+/);
name1[0] =  name1[0].charAt(0).toUpperCase() + name1[0].toLowerCase(1).slice(1);
name1[1] =  name1[1].charAt(0).toUpperCase() + name1[1].toLowerCase(1).slice(1);
name1[2] =  name1[2].charAt(0).toUpperCase() + name1[2].toLowerCase(1).slice(1);
name1 = name1.join(" ");
name2 = name2.trim = name2.split(/\s+/);
name2[0] =  name2[0].charAt(0).toUpperCase() + name2[0].toLowerCase(1).slice(1);
name2[1] =  name2[1].charAt(0).toUpperCase() + name2[1].toLowerCase(1).slice(1);
name2[2] =  name2[2].charAt(0).toUpperCase() + name2[2].toLowerCase(1).slice(1);
name2 = name2.join(" ");
console.log(name + " " + name1 + " " + name2);

//String: beer
let str = "Було жарко. Василь пив пиво вприкуску з креветками"
str = str.split(' ');
replace = str.splice(4, 1, 'чай');
str = str.join(' ')
console.log(str);

//String: big tag
let str = "якийсь текст у якому є один тег <br /> і всяке інше"
let result = str.slice(0, 33)+str.slice(33, 35).toUpperCase()+str.slice(35)
console.log(result);
