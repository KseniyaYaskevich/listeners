const button = document.querySelector('#btn');
const eButton = document.querySelector('#e_btn');

const textInput = document.querySelector('input[type=text]');
const textSpan = document.querySelector('#text-span');

const rangeInput = document.querySelector('input[type=range]');
const rangeSpan = document.querySelector('#range-span');

const square = document.querySelector('#square');
const circle = document.querySelector('#circle');

const COLORS = ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua'];

eButton.style.display = 'none';

const createWarning = () => {
    let element = document.createElement('p');

    element.style.color = 'red';
    element.style.textAlign = 'center';
    element.style.width = '200px';

    element.textContent = `Введите один из цветов: ${COLORS.join(', ')}`;

    textInput.before(element);
};

const changeSquareColor = (evt) => {
    evt.preventDefault();

    const colorValue = textInput.value.trim();

    textSpan.textContent = '';

    for (let i = 0; i < COLORS.length; i++) {
        if (colorValue.toLowerCase() === COLORS[i]) {
            square.style.backgroundColor = colorValue;
            textSpan.textContent = `Цвет круга изменен на ${colorValue.toLowerCase()}`;
            break;
        }
        if (colorValue === '') {
            textSpan.textContent = 'Введите цвет';
        } else {
            textSpan.textContent = 'Неправильный цвет';
        }
    }

    textInput.value = '';
};

const changeCircleSize = (evt) => {
    const value = evt.target.value;

    rangeSpan.textContent = value;

    circle.style.height = `${value}%`;
    circle.style.width = `${value}%`;
};

createWarning();

button.addEventListener('click', changeSquareColor);
rangeInput.addEventListener('input', changeCircleSize);