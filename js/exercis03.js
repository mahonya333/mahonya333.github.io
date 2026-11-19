// Використовуючи цикл for вивести на консоль список елементів з масиву fruits.
// Використовуючи цикл while вивести на консоль список елементів з масиву fruits.
// Використовуючи цикл do...while вивести на консоль список елементів з масиву fruits.
const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i] + ' i');
}

let n = 0;
while (n < fruits.length) {
    console.log(fruits[n] + ' n');
    n++;
}

let k = 1;
do {
    console.log(fruits[k] + ' k');
    k++;
} while (k < fruits.length);


// Використовуючи цикл for вивести на консоль парні елементи з масиву Numbs.
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < Numbs.length; i++) {
    if (i % 2) {
        console.log(Numbs[i])
    }
}


// Додати 'Joker' в кінець масиву names:
// Додати 'Bane' на початок масиву names
// Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.
// Перевірити чи існує рядок 'Batman' у масиві names, і якщо існує, видалити його з масиву.
const names = ['Batman'];

names.push('Joker');
names.unshift('Bane');
console.log(names);

if (!names.includes('Alfred')) {
    names.push('Alfred');
}
console.log(names);
if (names.includes('Batman')) {
    names.splice(names.indexOf('Batman'), 1);
}

console.log(names);



// Напишіть функцію sumInput() яка: Просить користувача ввести дані за допомогою prompt та зберігає їх в масив.
// Закінчує робити запити в користувача після того, як введено не числове значення, порожня строка або натиснуто “відмінити”.
// Підраховує та повертає суму елементів масиву.
function sumInput() {
    let array = [];
    let sum = 0;
    let answear;
    let number;

    do {
        answear = prompt('Введіть число');

        if (answear == null || answear == '') {
            break;
        }

        number = Number(answear);

        if (!(number >= 0 || number < 0)) {
            break;
        }

        array.push(number);

    } while (true);

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}
console.log(sumInput());



// Створіть масив styles з елементами “Jazz” та “Blues”. Додайте “Rock-n-Roll” в кінець масиву.
// Замініть значення в середині масиву на “Classics”.
// Видаліть перший елемент масиву та покажіть його. Вставте Rap та Reggae на початок масиву.
let styles =['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[1] = 'Classics';



console.log(styles.shift());
styles.unshift('Rap');
styles.unshift('Reggae');
console.log(styles);



