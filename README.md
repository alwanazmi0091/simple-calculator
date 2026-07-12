# Simple Calculator

A simple calculator built with **HTML**, **CSS**, and **vanilla JavaScript**.

This project was created as a learning exercise to practice:

* DOM manipulation
* Event handling
* State management
* Object-based application state
* Keyboard support
* Basic calculator logic

## Features

* Addition (`+`)
* Subtraction (`-`)
* Multiplication (`*`)
* Division (`/`)
* Decimal number support
* Delete last digit (`DEL`)
* Clear all values (`C`)
* Keyboard input support
* Protection against multiple decimal points
* Division by zero error handling
* Chained calculations (`2 + 3 + 4 = 9`)

## Keyboard Shortcuts

| Key            | Action            |
| -------------- | ----------------- |
| `0-9`          | Enter numbers     |
| `+`            | Addition          |
| `-`            | Subtraction       |
| `*`, `x`, `X`  | Multiplication    |
| `/`            | Division          |
| `.`            | Decimal point     |
| `Enter` or `=` | Calculate result  |
| `Backspace`    | Delete last digit |
| `C`            | Clear calculator  |

## Project Structure

```text
calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

The calculator stores its state inside a single JavaScript object:

```javascript
const calculator = {
  firstNum: "",
  secondNum: "",
  operator: null,
  isOnFirstNum: true,
};
```

This object tracks:

* The first number entered
* The second number entered
* The selected operator
* Which number the user is currently editing

The display updates dynamically whenever the calculator state changes.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

## Running the Project

1. Clone the repository:

```bash
git clone https://github.com/alwanazmi0091/simple-calculator.git
```

2. Open `index.html` in your browser.

No installation or dependencies are required.

## Future Improvements

Potential features that could be added:

* Percentage calculations
* Negative number support
* Calculation history
* Scientific calculator functions
* Responsive design improvements
* Theme switching
* Keyboard button highlighting
* Expression parsing (`2 + 3 * 4`)

## What I Learned

Building this project helped me practice:

* Managing application state without frameworks
* Separating logic into small functions
* Handling user input from multiple sources
* Working with `data-*` attributes
* Preventing invalid calculator states

---

Created as a practice project while learning JavaScript and frontend development.

