const display = document.querySelector(".display");

let operator,
  firstNumber = 0,
  secondNumber = 0;

display.textContent = firstNumber;

const numbers = document.querySelectorAll(".operand");
numbers.forEach((number) => {
  number.addEventListener("click", input);
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

const signBtn = document.querySelector(".sign");
signBtn.addEventListener("click", positiveNegative);

function input() {
  if (display.textContent.length >= 9) return; // * Limits the display to 9 digits
  if (display.textContent != 0) {
    display.textContent = parseInt(display.textContent) * 10;
  }
  display.textContent = parseInt(display.textContent) + parseInt(this.value);
}

function clear() {
  firstNumber = 0;
  secondNumber = 0;
  operator = "";

  display.textContent = firstNumber;
}

function positiveNegative() {
  if (display.textContent == "0") return;
  display.textContent = parseInt(display.textContent) * -1;
}

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
  return a / b;
}

function operate(operator, a, b) {
  return operator(a, b);
}
