// let displayValue = '';
const display = document.getElementById('display')
const calculatorOn = true;

function appendToDisplay(value) {
  if (!calculatorOn) return;
  // Check if calculator is turned off
  // document.getElementById('display').value = display.value;
  if (value === "." && display.value.includes(".")) {
    return;
  }
  
  display.value += value;
}


function clearDisplay() {
  if (!calculatorOn) return;
  display.value = '';
  document.getElementById('display').value = '';
}

function toggleCalculator() {
  calculatorOn = !calculatorOn;
  if (calculatorOn) {
    turnOnCalculator();
  } else {
    turnOffCalculator();
  }
}

function turnOnCalculator() {
  // document.getElementById('display').value = '';
  console.log('Calculator is now ON');
}

function turnOffCalculator() {
  display.value = 'OFF';
  // document.getElementById('display').value = display.value;
  console.log('Calculator is now OFF');
}

function calculateResult() {
  
  if (!calculatorOn) return;
  try {
    display.value = eval(display.value);
    // document.getElementById('display').value = display.value;
  } catch (error) {
    display.value = 'Error';
    // document.getElementById('display').value = 'Error';
  }
}

function backspace() {
  if (!calculatorOn) return;
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = display.value;
}

function lessThan() {
  if (!calculatorOn) return;
  display.value += '<';
  document.getElementById('display').value = display.value;
}
