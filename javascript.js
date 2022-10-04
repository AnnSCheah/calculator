const display = document.querySelector(".display");

let operator = "",
  firstNumber = 0,
  secondNumber = 0;

let operatorActive = false;

display.textContent = firstNumber; // * Display defaults to first number

// * Operand and functionality buttons (clear, decimal, sign)
const numbers = document.querySelectorAll(".operand");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    input(number.value);
  });
  // * Keyboard support
  document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key == number.value) {
      input(number.value);
    }
  });
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", addDecimal);

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

const signBtn = document.querySelector(".sign");
signBtn.addEventListener("click", changeSign);

document.addEventListener("keydown", backspaceKey);

// TODO Delete this function once the project is done.
// const button = document.addEventListener("keydown", function (event) {
//   const key = event.key;
//   console.log(key);
// });

// * Operator Event Listeners
const addBtn = document.querySelector("button[value='plus']");
addBtn.addEventListener("click", () => {
  if (operator != "") {
    calculate();
  }
  selectOperator(add);
});

const subtractBtn = document.querySelector("button[value='minus']");
subtractBtn.addEventListener("click", () => {
  if (operator != "") {
    calculate();
  }
  selectOperator(subtract);
});

const multiplyBtn = document.querySelector("button[value='multiply']");
multiplyBtn.addEventListener("click", () => {
  if (operator != "") {
    calculate();
  }
  selectOperator(multiply);
});

const divideBtn = document.querySelector("button[value='divide']");
divideBtn.addEventListener("click", () => {
  if (operator != "") {
    calculate();
  }
  selectOperator(divide);
});

const equalsBtn = document.querySelector("button[value='equal']");
equalsBtn.addEventListener("click", calculate);

// * Function that shows the operand in the display
function input(value) {
  if (operatorActive) {
    operatorActive = false;
    display.textContent = value;
  } else if (display.textContent.length >= 9) {
    return; // * Limits the display to 9 digits
  } else if (display.textContent != 0 || display.textContent.includes(".")) {
    display.textContent = display.textContent + value; // * Append the next input to the back instead of overwriting the current one
  } else {
    display.textContent = value;
  }
}

function addDecimal() {
  if (display.textContent.includes(".")) {
    return;
  }
  display.textContent = display.textContent + ".";
}

function clear() {
  firstNumber = 0;
  secondNumber = 0;
  operator = "";

  display.textContent = firstNumber;
}

function changeSign() {
  if (display.textContent == "0") return;
  display.textContent = parseInt(display.textContent) * -1;
}

function selectOperator(operateSign) {
  operator = operateSign;
  operatorActive = true;
  firstNumber = display.textContent;
  //display.textContent = secondNumber;
}

function backspaceKey(event) {
  const key = event.key;
  if (key == "Backspace") {
    // * Stops the function when the display is 0
    if (display.textContent == "0") return;
    // * Change display to 0 if there is only one digit
    else if (display.textContent.length == 1)
      return (display.textContent = "0");

    display.textContent = display.textContent.slice(0, -1);
  }
}

function calculate() {
  if (operator == "") {
    display.textContent = "ERROR";
    return;
  }
  operatorActive = true;
  secondNumber = display.textContent;
  display.textContent = operate(operator, firstNumber, secondNumber);
  if (display.textContent.length > 9)
    display.textContent = parseFloat(display.textContent).toExponential(2);
  firstNumber = display.textContent;
  secondNumber = 0;
}

function operate(operator, a, b) {
  return operator(parseFloat(a), parseFloat(b));
}

// * Mathematic functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) return "(?____?)";
  return a / b;
}
