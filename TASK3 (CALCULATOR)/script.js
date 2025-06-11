// Calculator logic
let display = document.querySelector('.display-text');
let currentInput = '0';
let operator = null;
let firstOperand = null;
let waitingForSecondOperand = false;

function updateDisplay() {
    display.textContent = currentInput;
}

function inputNumber(num) {
    if (waitingForSecondOperand) {
        currentInput = num;
        waitingForSecondOperand = false;
    } else {
        currentInput = currentInput === '0' ? num : currentInput + num;
    }
    // If entering second operand, show full expression
    if (operator && firstOperand !== null && !waitingForSecondOperand) {
        display.textContent = `${firstOperand} ${operator} ${currentInput}`;
    } else {
        updateDisplay();
    }
}

function inputDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentInput);
    if (operator && waitingForSecondOperand) {
        operator = nextOperator;
        // Show the full expression: firstOperand operator
        display.textContent = `${firstOperand} ${operator}`;
        return;
    }
    if (firstOperand == null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation(operator, firstOperand, inputValue);
        currentInput = String(result);
        firstOperand = result;
        updateDisplay();
    }
    operator = nextOperator;
    waitingForSecondOperand = true;
    // Show the full expression: firstOperand operator
    display.textContent = `${firstOperand} ${operator}`;
}

function performCalculation(operator, first, second) {
    switch (operator) {
        case '+': return first + second;
        case '−': return first - second;
        case '×': return first * second;
        case '÷': return second !== 0 ? first / second : 'Error';
        default: return second;
    }
}

function handleEquals() {
    if (operator && !waitingForSecondOperand) {
        const inputValue = parseFloat(currentInput);
        const result = performCalculation(operator, firstOperand, inputValue);
        currentInput = String(result);
        firstOperand = result;
        operator = null;
        waitingForSecondOperand = false;
        updateDisplay();
    }
}

function handleClear() {
    currentInput = '0';
    operator = null;
    firstOperand = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function handlePercent() {
    currentInput = String(parseFloat(currentInput) / 100);
    updateDisplay();
}

function handleSign() {
    currentInput = String(parseFloat(currentInput) * -1);
    updateDisplay();
}

// Event listeners
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn')) return;
    if (e.target.classList.contains('btn-number')) {
        inputNumber(e.target.textContent);
    } else if (e.target.classList.contains('btn-operator')) {
        handleOperator(e.target.textContent);
    } else if (e.target.classList.contains('btn-equals')) {
        handleEquals();
    } else if (e.target.textContent === 'C') {
        handleClear();
    } else if (e.target.textContent === '%') {
        handlePercent();
    } else if (e.target.textContent === '±') {
        handleSign();
    }
});

updateDisplay();
