console.log("hello world");
let buffer = "0";
const screen = document.querySelector(".free-space");
let totalResult = 0;
let previousOprator;
// with this function (buttonClick) we check if our value is number or symbol,beacuse every of them has diffrent functionality
function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handelSymbol(value);
  } else {
    handelNumber(value);
  }
  update();
}
function handelMath(value) {
  if (buffer === "0") {
    return;
  }
  const startBuffer = parseInt(buffer);
  if (totalResult === 0) {
    totalResult = startBuffer;
  } else {
    mathOpration(startBuffer);
  }
  previousOprator = value;
  buffer = "0";
  console.log(totalResult);
}

function mathOpration(startBuffer) {
  if (previousOprator === "+") {
    totalResult += startBuffer;
  } else if (previousOprator === "X") {
    totalResult *= startBuffer;
  } else if (previousOprator === "-") {
    totalResult -= startBuffer;
  } else if (previousOprator === "/") {
    totalResult /= startBuffer;
  }
}
// with this function we are adding every number that user will add,ej=>if number is equal with "0" number is 0 in other case will be like => 0=0+number
function handelNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}
function handelSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      break;

    case "<-":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "=":
      if (previousOprator === null) {
        return;
      }
      mathOpration(parseInt(buffer));
      previousOprator = null;
      buffer = +totalResult;
      totalResult = 0;
      break;
    case "+":
    case "-":
    case "/":
    case "X":
      {
        handelMath(value);
      }
      break;
  }
}
//  with update function we can see the numbers that user adding in calculator in screen section.
function update() {
  screen.innerText = buffer;
}

// // this is our initial function through addeventlistener will return us the value of target event(the value of each button).
function init() {
  document
    .querySelector(".container")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
