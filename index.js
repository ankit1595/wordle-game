createWordMatrix();
createKeyboard();

let masterWord = "APRIL";
var isMatched = false;
let alphabetArray = new Array(26).fill(0);
for (let masterIndex = 0; masterIndex < masterWord.length; masterIndex++) {
  const masterL = masterWord[masterIndex];
  const charPos = masterL.charCodeAt(0) - 65;
  alphabetArray[charPos]++;
}
console.log(alphabetArray);

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
        matchWord(wordMatrix[row].textContent);
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
  const alphabetCount = { ...alphabetArray };
  let charPos;
  let arr = [];
  console.log("alphabet count array", alphabetCount);
  let isMarked = Boolean;
  //   console.log(isMarked);

  for (let index = 0; index < userWord.length; index++) {
    const userL = userWord[index];
    const masterL = masterWord[index];
    if (userL === masterL) {
      //   if (alphabetCount[charPos] === 0) {
      //     break;
      //   }
      isMatchedAtPos(row, index); // GREEN COLOR
      alphabetCount[charPos]--;
      //   console.log("alphabetCount array", alphabetCount);
      //   console.log("matched", userL + userIndex + masterL + masterIndex);
      //   isMarked = true;
      //   console.log("isMarked : ", isMarked);

      arr[index] = 1;
    }
  }
  console.log("ismarked : ", arr);
  for (let userIndex = 0; userIndex < userWord.length; userIndex++) {
    const userL = userWord[userIndex];
    charPos = userL.charCodeAt(0) - 65;
    console.log(alphabetCount);
    // console.log("isMarked", isMarked);

    for (let masterIndex = 0; masterIndex < masterWord.length; masterIndex++) {
      const masterL = masterWord[masterIndex];
      console.log(
        "color",
        wordMatrix[row].childNodes[userIndex].style["backgroundColor"]
      );

      //Yellow color logic
      if (
        alphabetCount[charPos] &&
        userL === masterL &&
        userIndex !== masterIndex &&
        !arr[userIndex]
      ) {
        // if (alphabetCount[charPos] === 0) {
        //   break;
        // }
        // if (isMarked) {
        //   break;
        // }
        // else {
        console.log("Yellow ", userL + userIndex + masterL + masterIndex);
        alphabetCount[charPos]--;
        isMatchedAtAnyPos(row, userIndex);
        break;
        // }
      }
      //   Gray color logic
      else if (!arr[userIndex]) {
        console.log("not matched ", userL + userIndex + masterL + masterIndex);
        notMatched(row, userIndex);
      }
    }
  }
}
// }

//Yellow color logic: compare userLetter to whole master array elements
// }

//Green color logic
function isMatchedAtPos(row, index) {
  setTimeout(() => {
    wordMatrix[row].childNodes[index].style.backgroundColor = "green";
    wordMatrix[row].childNodes[index].style.borderColor = "green";
  }, 200);
}

//Yellow color logic
function isMatchedAtAnyPos(row, index) {
  setTimeout(() => {
    wordMatrix[row].childNodes[index].style.backgroundColor = "yellow";
    wordMatrix[row].childNodes[index].style.borderColor = "yellow";
  }, 200);
}

// GREY COLOR LOGIC
function notMatched(row, index) {
  setTimeout(() => {
    wordMatrix[row].childNodes[index].style.backgroundColor =
      "var(--gray-color)";
    wordMatrix[row].childNodes[index].style.borderColor = "var(--gray-color)";
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
