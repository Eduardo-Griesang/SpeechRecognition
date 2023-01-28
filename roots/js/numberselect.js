const minValue = " 0 "
const maxValue = " 100 "

const elementMinValue = document.querySelector('.min-value');
elementMinValue.innerHTML = minValue

const elementMaxValue = document.querySelector('.max-value');
elementMaxValue.innerHTML = maxValue

const secretNumber = generateNumber();
console.log(secretNumber)


function generateNumber () {
    return Math.floor(Math.random() * maxValue+1);
}

