'use strict';

let message1 = 'Hello';
let message2 = 'JavaScript';
alert(message1 + ' ' + message2);


let x = prompt('Введіть число x');
let y = prompt('Введіть число y');
let sum = Number(x) + Number(y);
alert(sum);


let myNumber = 33;
let randomNumber = prompt('Вгадай число');

if (randomNumber == myNumber) {
    alert('Ви вгадали число');

} else if (randomNumber < myNumber) {
    alert('Ваше число більше заданого');

} else {
    alert('Ваше число менше заданого');
}

let userDay = prompt('Введіть назву дня неділі');

if (userDay == 'Понеділок' || userDay == 'Monday') {
    alert('Start of the work week!');
} else if (userDay == `П'ятниця` || userDay == 'Friday') {
    alert('End of the work week!');
} else {
    alert('A regular day');
}

switch (userDay) {
    case 'Monday':
    case 'Понеділок':
        alert('Start of the work week!');
        break;
    case `П'ятниця`:
    case 'Friday':
        alert('End of the work week!');
        break;
    default:
        alert('A regular day');
        break;
}

let score = Number(prompt('Скільки стундент отримав балів?'));

if (score <= 50) {
    alert('F');
} else if (score <= 70) {
    alert('D');
} else if (score <= 80) {
    alert('C');
} else if (score <= 90) {
    alert('B');
} else {
    alert('A');
}