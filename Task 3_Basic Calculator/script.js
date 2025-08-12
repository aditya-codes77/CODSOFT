// Calculator state variables
let currentOperand = '0';
let previousOperand = '';
let operation = undefined;
let shouldResetScreen = false;

// DOM elements
const currentOperandElement = document.getElementById('current-operand');
const previousOperandElement = document.getElementById('previous-operand');

// Function to update the display
function updateDisplay() {
    currentOperandElement.textContent = currentOperand;
    if (operation != null) {
        previousOperandElement.textContent = `${previousOperand} ${operation}`;
    } else {
        previousOperandElement.textContent = '';
    }
}

// Function to append numbers
function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    if (shouldResetScreen) {
        currentOperand = '';
        shouldResetScreen = false;
    }
    if (currentOperand === '0' && number !== '.') {
        currentOperand = number;
    } else {
        currentOperand += number;
    }
    updateDisplay();
}

// Function to choose operation
function chooseOperation(selectedOperation) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = selectedOperation;
    previousOperand = currentOperand;
    shouldResetScreen = true;
    updateDisplay();
}

// Function to perform calculations
function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    // Using if-else statements and operators for calculations
    if (operation === '+') {
        computation = prev + current;
    } else if (operation === '-') {
        computation = prev - current;
    } else if (operation === '×') {
        computation = prev * current;
    } else if (operation === '÷') {
        if (current === 0) {
            alert('Cannot divide by zero!');
            return;
        }
        computation = prev / current;
    } else if (operation === '%') {
        computation = (prev * current) / 100;
    } else {
        return;
    }
    
    // Format the result
    currentOperand = formatNumber(computation);
    operation = undefined;
    previousOperand = '';
    shouldResetScreen = true;
    updateDisplay();
}

// Function to format numbers
function formatNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    
    let integerDisplay;
    if (isNaN(integerDigits)) {
        integerDisplay = '';
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0
        });
    }
    
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
    } else {
        return integerDisplay;
    }
}

// Function to clear all
function clearAll() {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
    shouldResetScreen = false;
    updateDisplay();
}

// Function to delete last character
function deleteLast() {
    if (currentOperand.length === 1) {
        currentOperand = '0';
    } else {
        currentOperand = currentOperand.slice(0, -1);
    }
    updateDisplay();
}

// Keyboard event listeners
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    // Using loops to check for number keys (0-9)
    for (let i = 0; i <= 9; i++) {
        if (key === i.toString()) {
            appendNumber(i.toString());
            return;
        }
    }
    
    // Check for operators and other keys
    if (key === '.') {
        appendNumber('.');
    } else if (key === '+') {
        chooseOperation('+');
    } else if (key === '-') {
        chooseOperation('-');
    } else if (key === '*') {
        chooseOperation('×');
    } else if (key === '/') {
        event.preventDefault();
        chooseOperation('÷');
    } else if (key === '%') {
        chooseOperation('%');
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearAll();
    }
});

// Initialize display
updateDisplay(); 