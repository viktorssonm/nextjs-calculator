class Calculator {
  constructor(prevOperand = "", currentOperand = "", operation = null) {
    this.prevOperand = prevOperand;
    this.currentOperand = currentOperand;
    this.operation = operation;
  }

  handleButtonInput(button) {
    if (!isNaN(button)) {
      this.addNumber(button);
    } else if (button === "+" || button === "-" || button === "/") {
      this.handleOperationButton(button);
    } else if (button === "=") {
      this.handleExecButton();
    } else if (button === "AC") {
      this.handleReset();
    } else if (button === ",") {
      this.addNumber(".");
    } else if (button === "x") {
      this.handleOperationButton("*");
    }
  }

  handleOperationButton(operation) {
    if (this.currentOperand === null) return;
    if (this.prevOperand !== "") {
      this.handleExecButton();
    }
    this.operation = operation;
    this.prevOperand = this.currentOperand;
    this.currentOperand = "";
  }

  handleExecButton() {
    if (this.prevOperand === "" || this.currentOperand === "") return;
    console.log(
      `computation: ${this.prevOperand} ${this.operation} ${this.currentOperand}`
    );
    let computation = eval(
      `${this.prevOperand} ${this.operation} ${this.currentOperand}`
    );
    this.currentOperand = computation;
    this.operation = null;
    this.prevOperand = "";
  }

  addNumber(number) {
    if (number === "," && this.currentOperand.includes(".")) return;
    if (this.currentOperand === "0") {
      this.currentOperand = number;
    } else {
      this.currentOperand += number;
    }
  }

  handleReset() {
    this.prevOperand = "";
    this.currentOperand = "";
    this.lastOperand = null;
  }
}

export default Calculator;
