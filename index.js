const display = document.querySelector('input');

function writeDigit(digit) {
    display.value += digit;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let a = [...display.value];
    console.log(a);
    let i = 0;
    let d = '';
    while (a[i] != '+' || a[i] != '-' || a[i] != "*" || a[i] != "/"){
        if (a[i] == '+' || a[i] == '-' || a[i] == "*" || a[i] == "/"){
            break;
        }
        d += a[i];
        i++;
    }


    let r = "";
    r += a[i];
    i++;

    let s = "";
    while (i != a.length){
        s += a[i];
        i++;
    }

    if ((d.includes(".") || d.includes(",")) && (s.includes(".") || s.includes(","))){
        if (r == "+"){
            display.value = parseFloat(d) + parseFloat(s);
        } else if (r == "-"){
            display.value = parseFloat(d) - parseFloat(s);
        } else if (r == "*"){
            display.value = parseFloat(d) * parseFloat(s);
        } else {
            display.value = parseFloat(d) / parseFloat(s);
        }
    } else if (d.includes(".") || d.includes(",")) {
        if (r == "+"){
            display.value = parseFloat(d) + parseInt(s);
        } else if (r == "-"){
            display.value = parseFloat(d) - parseInt(s);
        } else if (r == "*"){
            display.value = parseFloat(d) * parseInt(s);
        } else {
            display.value = parseFloat(d) / parseInt(s);
        }
    } else if (s.includes(".") || s.includes(",")) {
        if (r == "+"){
            display.value = parseInt(d) + parseFloat(s);
        } else if (r == "-"){
            display.value = parseInt(d) - parseFloat(s);
        } else if (r == "*"){
            display.value = parseInt(d) * parseFloat(s);
        } else {
            display.value = parseInt(d) / parseFloat(s);
        }
        }
     else {
        if (r == "+"){
            display.value = parseInt(d) + parseInt(s);
        } else if (r == "-"){
            display.value = parseInt(d) - parseInt(s);
        } else if (r == "*"){
            display.value = parseInt(d) * parseInt(s);
        } else {
            display.value = parseInt(d) / parseInt(s);
        }
    }
}



document.querySelector('.C').addEventListener('click', clearDisplay);
document.querySelector('.del').addEventListener('click', deleteLastCharacter);
document.querySelector('.raz').addEventListener('click', () => writeDigit('/'));
document.querySelector('.seven').addEventListener('click', () => writeDigit('7'));
document.querySelector('.eight').addEventListener('click', () => writeDigit('8'));
document.querySelector('.nine').addEventListener('click', () => writeDigit('9'));
document.querySelector('.umn').addEventListener('click', () => writeDigit('*'));
document.querySelector('.four').addEventListener('click', () => writeDigit('4'));
document.querySelector('.five').addEventListener('click', () => writeDigit('5'));
document.querySelector('.six').addEventListener('click', () => writeDigit('6'));
document.querySelector('.minus').addEventListener('click', () => writeDigit('-'));
document.querySelector('.one').addEventListener('click', () => writeDigit('1'));
document.querySelector('.two').addEventListener('click', () => writeDigit('2'));
document.querySelector('.three').addEventListener('click', () => writeDigit('3'));
document.querySelector('.plus').addEventListener('click', () => writeDigit('+'));
document.querySelector('.zero').addEventListener('click', () => writeDigit('0'));
document.querySelector('.dot').addEventListener('click', () => writeDigit('.'));
document.querySelector('.is').addEventListener('click', calculateResult);