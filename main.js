const calculator = document.getElementById("calculator");

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const result = document.getElementById("result");
const resultValue = document.getElementById("result-value");

add.addEventListener("click", () => {
  const value1 = input1.value;
  const value2 = input2.value;
  const result = parseInt(value1) + parseInt(value2);
  resultValue.textContent = result;
});

subtract.addEventListener("click", () => {
  const value1 = input1.value;
  const value2 = input2.value;
  const result = parseInt(value1) - parseInt(value2);
  resultValue.textContent = result;
});

multiply.addEventListener("click", () => {
  const value1 = input1.value;
  const value2 = input2.value;
  const result = parseInt(value1) * parseInt(value2);
  resultValue.textContent = result;
});

divide.addEventListener("click", () => {
  const value1 = input1.value;
  const value2 = input2.value;
  const result = parseInt(value1) / parseInt(value2);
  resultValue.textContent = result;
});

clear.addEventListener("click", () => {
  const value1 = input1.value;
  const value2 = input2.value;
  const result = parseInt(value1) / parseInt(value2);
  resultValue.textContent = result;
});
