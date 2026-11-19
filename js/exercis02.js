function checkAge(age) {
    return age >= 18 || confirm('Батьки дозволили?');
}

function checkAge2(age) {
    return age >= 18 ? true : confirm('Батьки дозволили?');
}

alert(checkAge(Number(prompt('Скільки вам років? перша функція'))));
alert(checkAge2(Number(prompt('Скільки вам років? друга функція'))));

function min(a, b) {
    if (a < b) {
        return a
    }
    else {
        return b
    }
}

function min2(a, b) {
    return a < b ? a : b
}

alert(min(2, 5));
alert(min(3, -1));
alert(min(1, 1));

alert(min2(2, 5));
alert(min2(3, -1));
alert(min2(1, 1));

function pow(x, n) {
    if (n == 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}


alert(pow(3, 2));
alert(pow(3, 3));
alert(pow(1, 100));

let ask1 = function (question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask1("Ви згодні?",
    () => { alert("Ви погодились."); },
    () => { alert("Ви скасували виконання."); }
) 
