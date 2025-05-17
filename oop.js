class Calculator {
  constructor(
    input1,
    input2,
    addButton,
    subtractButton,
    multiplyButton,
    divideButton,
    result,
    resultValue
  ) {
    this.calculator = document.getElementById("calculator");

    this.input1 = input1;
    this.input2 = input2;
    this.addButton = addButton;
    this.subtractButton = subtractButton;
    this.multiplyButton = multiplyButton;
    this.divideButton = divideButton;
    this.result = result;
    this.resultValue = resultValue;
  }

  init() {
    this.addButton.addEventListener("click", () => this.handleAdd());
    this.subtractButton.addEventListener("click", () => this.handlesubtract());
    this.multiplyButton.addEventListener("click", () => this.handlemultiply());
    this.divideButton.addEventListener("click", () => this.handledivide());
  }

  handleAdd() {
    const value1 = input1.value;
    const value2 = input2.value;
    const result = parseInt(value1) + parseInt(value2);
    this.resultValue.textContent = result;
  }

  handledivide() {
    const value1 = input1.value;
    const value2 = input2.value;
    const result = parseInt(value1) / parseInt(value2);
    this.resultValue.textContent = result;
  }
  handlesubtract() {
    const value1 = input1.value;
    const value2 = input2.value;
    const result = parseInt(value1) - parseInt(value2);
    this.resultValue.textContent = result;
  }

  handlemultiply() {
    const value1 = input1.value;
    const value2 = input2.value;
    const result = parseInt(value1) * parseInt(value2);
    this.resultValue.textContent = result;
  }
}

const calculator = new Calculator(
  document.getElementById("input1"),

  document.getElementById("input2"),

  document.getElementById("add"),

  document.getElementById("subtract"),
  document.getElementById("multiply"),
  document.getElementById("divide"),

  document.getElementById("result"),

  document.getElementById("result-value")
);

calculator.init();
