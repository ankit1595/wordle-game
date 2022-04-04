createWordMatrix();
createKeyboard();

let masterWord = "VIREN";
var isMatched = false;

var wordMatrix = document.querySelectorAll(".word-matrix tr");
var row = 0;
var indexWord = 0;

//Keystrokes input logic
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 8) {
    if (indexWord == 0) return; // so that index will not go to negative
    wordMatrix[row].childNodes[--indexWord].textContent = "";
  }

  //FOR key from A to Z or ENTER key   can be used isString or isalpha
  if (
    (e.keyCode >= 65 && e.keyCode <= 90 && indexWord < 5) ||
    e.keyCode === 13
  ) {
    console.log(indexWord);

    //When ENTER key pressed
    if (e.keyCode === 13) {
      if (indexWord === 5 && e.keyCode === 13) {
        console.log("enter pressed");
        // console.log(wordMatrix[0].textContent);
        matchWord(wordMatrix[row].textContent);
        row++;
        indexWord = 0;
      }
    } else {
      wordMatrix[row].childNodes[indexWord++].textContent = e.key.toUpperCase();
    }
  }
});

// UI-keyboard input logic
var keySelect = document.querySelectorAll(".keyboard tr");
var k = 0;
while (k < 3) {
  keySelect[k++].addEventListener("click", function (e) {
    if (e.target.textContent === "Del") {
      console.log("del pressed", e.target);
      if (indexWord == 0) return; // so that index will not go to negative
      wordMatrix[row].childNodes[--indexWord].textContent = "";
      return;
    }
    //When ENTER key pressed
    if (e.target.textContent === "Enter") {
      if (indexWord === 5 && e.target.textContent === "Enter") {
        console.log("enter pressed");
        row++;
        indexWord = 0;
      }
    } else if (indexWord < 5) {
      wordMatrix[row].childNodes[indexWord++].textContent =
        e.target.textContent;
    }
  });
}

function matchWord(userWord) {
  console.log(`user word ${userWord}, master ${masterWord}`);
  //   if (masterWord === userWord) {
  //     isMatched = true;
  //     console.log(`user word ${userWord}, master ${masterWord}`, userWord[0]);
  //   }
  console.log("row: ", row);
  for (let index = 0; index < userWord.length; index++) {
    const userL = userWord[index];
    const masterL = masterWord[index];
    if (userL === masterL) {
      console.log("matched");
      isMatchedAtPos(row, index);
    } else {
      userWord.indexOf(userL);
      console.log("not matched index: ", userL);
    }
  }
}

function isMatchedAtPos(row, index) {
  setTimeout(() => {
    wordMatrix[row].childNodes[index].style.backgroundColor = "green";
    wordMatrix[row].childNodes[index].style.borderColor = "green";
  }, 200);
}

function createWordMatrix() {
  var tableRow;
  for (let i = 0; i < 6; i++) {
    tableRow = document.createElement("tr");
    for (let j = 0; j < 5; j++) {
      tableRow.appendChild(document.createElement("td"));
    }
    document.querySelector(".word-matrix").appendChild(tableRow);
  }
}

function createKeyboard() {
  var keyboardRow1 = document.createElement("tr");
  var keyboardRow2 = document.createElement("tr");
  var keyboardRow3 = document.createElement("tr");

  for (let j = 0; j < 10; j++) {
    keyboardRow1.appendChild(document.createElement("td"));
  }
  document.querySelector(".keyboard1").appendChild(keyboardRow1);

  for (let j = 0; j < 10; j++) {
    keyboardRow2.appendChild(document.createElement("td"));
  }
  document.querySelector(".keyboard2").appendChild(keyboardRow2);

  for (let j = 0; j < 8; j++) {
    keyboardRow3.appendChild(document.createElement("td"));
  }
  document.querySelector(".keyboard3").appendChild(keyboardRow3);

  var charArr1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  var firstRow = document.querySelectorAll(".keyboard1 tr td");
  for (let i = 0; i < charArr1.length; i++) {
    firstRow[i].textContent = charArr1[i];
    firstRow[i].setAttribute("id", charArr1[i]);
  }

  var charArr2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Del"];
  var secondRow = document.querySelectorAll(".keyboard2 tr td");
  for (let i = 0; i < charArr2.length; i++) {
    secondRow[i].textContent = charArr2[i];
    secondRow[i].setAttribute("id", charArr2[i]);
  }

  var charArr3 = ["Z", "X", "C", "V", "B", "N", "M", "Enter"];
  var thirdRow = document.querySelectorAll(".keyboard3 tr td");
  for (let i = 0; i < charArr3.length; i++) {
    thirdRow[i].textContent = charArr3[i];
    thirdRow[i].setAttribute("id", charArr3[i]);
  }
}
