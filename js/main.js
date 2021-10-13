// TEST NEW 3 buttons

const lightBtn = document.getElementById("light-mode-toggle");
const darkBtn = document.getElementById("dark-mode-toggle");
const purpleBtn = document.getElementById("purple-mode-toggle");
const ball = document.querySelector(".ball");

// START OF TOGGLE THEME
const setThemee = (themee) => (document.documentElement.className = themee);

purpleBtn.addEventListener("click", function () {
  // setThemee("purple");
  setThemee(this.dataset.id);
  ball.classList.add("ball-move-right");
  ball.classList.remove("ball-move-left");
});
lightBtn.addEventListener("click", function () {
  // setThemee("purple");
  setThemee(this.dataset.id);
  ball.classList.remove("ball-move-right");

  ball.classList.add("ball-move-left");
});
darkBtn.addEventListener("click", function () {
  // setThemee("purple");
  setThemee(this.dataset.id);
  ball.classList.remove("ball-move-right");

  ball.classList.remove("ball-move-left");
});

// TEST
// let darkMode = localStorage.getItem("darkMode");
// const darkModToggle = document.querySelector("#dark-mode-toggle");

// //check if dark mode is enabled
// // if enable turn it off
// // if disable turn it on
// const enableDarkMode = () => {
//   // add the class dark mode to body
//   document.body.classList.add("darkmode");
//   // update dark mode in local storage
//   localStorage.setItem("darkMode", "enabled");
// };

// const disableDarkMode = () => {
//   // add the class dark mode to body
//   document.body.classList.remove("darkmode");
//   // update dark mode in local storage
//   localStorage.setItem("darkMode", null);
// };
// if (darkMode === "enabled") {
//   enableDarkMode();
// }
// darkModToggle.addEventListener("click", () => {
//   darkMode = localStorage.getItem("darkMode");
//   if (darkMode !== "enabled") {
//     enableDarkMode();
//     console.log(darkMode);
//   } else {
//     disableDarkMode();
//     console.log(darkMode);
//   }
//   // console.log("test");
// });

// END OF TOGGLE THEME

function getHistory() {
  return document.getElementById("history-value").innerText;
}
function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

function getOutput() {
  return document.getElementById("output-value").innerText;
}
function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}
function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        //if output has a value
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      // if output is number
      output = output + this.id;
      printOutput(output);
    }
  });
}
