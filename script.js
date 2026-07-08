const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

const calculator = {
  firstNum: "",
  secondNum: "",
  operator: null,
  isOnFirstNum: true,
};

const updateDisplay = (inp = null) => {
  if (inp !== null) {
    display.textContent = inp;
    return;
  }

  if (calculator.isOnFirstNum) {
    display.textContent =
      calculator.firstNum.length === 0 ? "0" : calculator.firstNum;
  } else {
    display.textContent =
      calculator.secondNum.length === 0 ? "0" : calculator.secondNum;
  }
};

const handleNumbers = (num) => {
  if (calculator.isOnFirstNum) {
    calculator.firstNum += num;
  } else {
    calculator.secondNum += num;
  }
  updateDisplay();
};

const handleOperators = (op) => {
  if (calculator.firstNum.length === 0) {
    calculator.firstNum += "0";
  }

  if (
    calculator.operator &&
    calculator.firstNum.length > 0 &&
    calculator.secondNum.length > 0
  ) {
    calculate(calculator.firstNum, calculator.secondNum, calculator.operator);
  }

  calculator.operator = op;
  calculator.isOnFirstNum = false;
};

const calculate = (firstValue, secondValue, operator) => {
  let firstVal = parseFloat(firstValue);
  let secondVal = parseFloat(secondValue);
  let res;

  switch (operator) {
    case "add":
      res = firstVal + secondVal;
      break;
    case "substract":
      res = firstVal - secondVal;
      break;
    case "time":
      res = firstVal * secondVal;
      break;
    case "divide":
      res = secondVal === 0 ? "Error" : firstVal / secondVal;
      break;
  }

  if (res === "Error") {
    updateDisplay(res);
    calculator.firstNum = "";
    calculator.operator = null;
    calculator.secondNum = "";
    calculator.isOnFirstNum = true;
    return;
  }

  res = parseFloat(res.toFixed(12));

  calculator.firstNum = String(res);
  calculator.isOnFirstNum = true;
  calculator.secondNum = "";
  updateDisplay();
  return res;
};

const handleDecimal = () => {
  if (calculator.isOnFirstNum) {
    if (calculator.firstNum.length === 0) {
      calculator.firstNum = "0";
    }
    if (calculator.firstNum.includes(".")) {
      return;
    }
    calculator.firstNum += ".";
  } else {
    if (calculator.secondNum.length === 0) {
      calculator.secondNum = "0";
    }
    if (calculator.secondNum.includes(".")) {
      return;
    }
    calculator.secondNum += ".";
  }
  updateDisplay();
};

const handleClear = () => {
  calculator.firstNum = "";
  calculator.secondNum = "";
  calculator.operator = null;
  calculator.isOnFirstNum = true;
  updateDisplay();
};

const handleDel = () => {
  if (calculator.isOnFirstNum) {
    if (calculator.firstNum.length > 0) {
      calculator.firstNum = calculator.firstNum.slice(0, -1);
      updateDisplay();
    }
  } else {
    if (calculator.secondNum.length === 0) {
      calculator.operator = null;
      calculator.isOnFirstNum = true;
      updateDisplay();
    } else {
      calculator.secondNum = calculator.secondNum.slice(0, -1);
      updateDisplay();
    }
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.type === "number") {
      handleNumbers(button.dataset.value);
    } else if (button.dataset.type === "operator") {
      handleOperators(button.dataset.value);
    } else if (button.dataset.value === "equals") {
      if (calculator.secondNum.length === 0) return;
      calculate(calculator.firstNum, calculator.secondNum, calculator.operator);
    } else if (button.dataset.value === "decimal") {
      handleDecimal();
    } else if (button.dataset.value === "clear") {
      handleClear();
    } else if (button.dataset.value === "delete") {
      handleDel();
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (/[0-9]/.test(e.key)) {
    handleNumbers(e.key);
  } else if (e.key === "Backspace") {
    handleDel();
  } else if (e.key === "x" || e.key === "X" || e.key === "*") {
    handleOperators("time");
  } else if (e.key === "/") {
    handleOperators("divide");
  } else if (e.key === "+") {
    handleOperators("add");
  } else if (e.key === "-") {
    handleOperators("substract");
  } else if (e.key === ".") {
    handleDecimal();
  } else if (e.key === "Enter" || e.key === "=") {
    if (calculator.secondNum.length === 0) return;
    calculate(calculator.firstNum, calculator.secondNum, calculator.operator);
  } else if (e.key === "c" || e.key === "C") {
    handleClear();
  }
});
