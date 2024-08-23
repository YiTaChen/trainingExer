function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  //   console.log(color);
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function getMachineName() {
  return new Promise((resolve, reject) => {
    // Simulate fetching machine name (replace with actual fetching logic if necessary)
    setTimeout(() => {
      resolve(window.location.hostname);
      //   console.log(window.location.hostname); //127.0.0.1
    }, 1000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  changeBackgroundColor();
  setInterval(changeBackgroundColor, 3000); // Change background color every 3 seconds

  getMachineName().then((machineName) => {
    document.getElementById("machine-name").textContent = machineName;
  });
});

function btnClick() {
  let inNumber = askInput();

  let targetUl = document.getElementById("targetUl");

  let liTmp = " <li style=''> test </li> ";

  for (let i = 0; i < inNumber; i++) {
    liTmp = getNewLiStr(i + 1);
    targetUl.innerHTML += liTmp;
  }

  //   targetUl.innerHTML = " <li> test </li> <li> test </li> ";

  //   console.log("get number : ", inNumber);
}

let liColorList = [];

function isNewLiColor(color) {
  if (liColorList.length < 1) return true;
  if (liColorList.indexOf(color) == -1) return true;
  return false;
}

function getNewLiStr(number) {
  let colorStr = getRandomColor();

  while (!isNewLiColor()) {
    colorStr = getRandomColor();
  }

  let liTmpStr =
    ' <li style="background-color: ' +
    colorStr +
    ' ;"> test ' +
    String(number) +
    " </li> ";
  return liTmpStr;
}

function askInput() {
  //   console.log("button test");
  let inputNum = prompt("Please input a number from 21 ~ 99 :");
  while (checkNumberInvalid(inputNum)) {
    inputNum = prompt(
      "Input number invalid. Please input a number from 21 ~ 99 again :"
    );
  }
  return inputNum;
  //   console.log("done");
}

function checkNumberInvalid(inputNumber) {
  let num = Number(inputNumber);
  //   console.log(Number(num));
  if (isNaN(num)) return true;

  if (String(num).length != 2) {
    // console.log("b");
    return true;
  }
  if (num > 99 || num < 21) return true;
  //   console.log(num);
  return false;
}
