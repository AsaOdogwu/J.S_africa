// let displayValue = '';
const display = document.getElementById("display");
let calculatorOn = false;
let allowDot = false;
let specialKey = true;
let allowSpecialKey = false;

function appendToDisplay(val) {
  if (!calculatorOn) return;
  // Check if calculator is turned off
  // document.getElementById('display').value = display.value;
  if (val === ".") {
    if (!allowDot) return;
    else {
      display.value += val;
      specialKey = false;
      allowDot = false;
    }
  } else if (/[*+/\-]/.test(val)) {
    // console.log("Hello Chidi")
    if(display.value === "" || /[*+/\-]/.test(display.value.slice(display.value.length -1)) )return;
    display.value.slice(display.value.length -1)
    display.value += val;
    specialKey = true;
    allowSpecialKey= false;
  } else {
    if (allowSpecialKey)return;
    display.value += val;
    if (specialKey) {
      allowDot = true;
    }
  }
}
function delete_Val(){
  if (!calculatorOn) return;
  // let a = "Hello"
  a.slice(0)
  display.value = display.value.slice(0, display.value.length - 1);
}


function clearDisplay() {
  if (!calculatorOn) return;
  display.value = "";
  specialKey = true;
  allowDot = false;
  allowSpecialKey = false;
}

// function toggleCalculator() {
// calculatorOn = !calculatorOn;
// if (calculatorOn) {
//   turnOnCalculator();
// } else {
//   turnOffCalculator();
// }
// }

function turnOnCalculator() {
  display.value = "";
  // document.getElementById('display').value = '';
  console.log("Calculator is now ON");
  calculatorOn = true;
  specialKey = true;
  allowDot = false;
  allowSpecialKey = false;
}

function turnOffCalculator() {
  display.value = "";
  // document.getElementById('display').value = display.value;
  console.log("Calculator is now OFF");
  allowDot = false;
  specialKey = true;
  calculatorOn = false;
  allowSpecialKey = false;
}

function calculateResult() {
  if (!calculatorOn) return;
  try {
    display.value = eval(display.value);
    allowDot = false;
    allowSpecialKey=true;
    // document.getElementById('display').value = display.value;
  } catch (error) {
    display.value = "Error";
    // document.getElementById('display').value = 'Error';
  }
}

function backspace() {
  if (!calculatorOn) return;
  displayValue = displayValue.slice(0, -1);
  document.getElementById("display").value = display.value;
}

function greaterThan() {
  if (!calculatorOn) return;
  display.value += ">";
  // document.getElementById("display").value = display.value;
}
