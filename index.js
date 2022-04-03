createWordMatrix();
createKeyboard();

// document.addEventListener("keydown",function(event){
//     console.log(event.target);
// }
document.addEventListener("keydown",(e)=>{
    console.log(e.key);
});

function createWordMatrix(){
var tableRow;
for(let i=0;i<6;i++){
    tableRow = document.createElement("tr");
    for(let j=0;j<5;j++){
        tableRow.appendChild(document.createElement("td"));
    }
    document.querySelector(".word-matrix").appendChild(tableRow);
}
}


function createKeyboard(){
var keyboardRow1=document.createElement("tr");
var keyboardRow2=document.createElement("tr");
var keyboardRow3=document.createElement("tr");

for(let j=0;j<10;j++){
    keyboardRow1.appendChild(document.createElement("td"));
}
document.querySelector(".keyboard1").appendChild(keyboardRow1);

for(let j=0;j<10;j++){
    keyboardRow2.appendChild(document.createElement("td"));
}
document.querySelector(".keyboard2").appendChild(keyboardRow2);

for(let j=0;j<8;j++){
    keyboardRow3.appendChild(document.createElement("td"));
}
document.querySelector(".keyboard3").appendChild(keyboardRow3);

var charArr1=["Q","W","E","R","T","Y","U","I","O","P"];
var firstRow=document.querySelectorAll(".keyboard1 tr td");
for(let i=0;i<charArr1.length;i++){
    firstRow[i].textContent=charArr1[i];
    firstRow[i].setAttribute("id",charArr1[i]);
}

var charArr2=["A","S","D","F","G","H","J","K","L","Del"];
var secondRow=document.querySelectorAll(".keyboard2 tr td");
for(let i=0;i<charArr2.length;i++){
    secondRow[i].textContent=charArr2[i];
    secondRow[i].setAttribute("id",charArr2[i]);
}

var charArr3=["Z","X","C","V","B","N","M","Enter"];
var thirdRow=document.querySelectorAll(".keyboard3 tr td");
for(let i=0;i<charArr3.length;i++){
    thirdRow[i].textContent=charArr3[i];
    thirdRow[i].setAttribute("id",charArr3[i]);
}
}


// const element = document
//   .querySelector(".word-matrix")
//   .getElementsByTagName("tr");
// // console.log(element[0].cells[0].textContent);
// document.addEventListener("keydown", handlerKey);

// function handlerKey(e) {
//   console.log(e.key);

//   console.log("element", element[0].cells);
//   for (let i = 0; i < element.length; i++) {
//     e.stopPropagation();
//     for (let j = 0; j < element[i].cells.length; j++) {
//       console.log("element", element[i].cells[j]);
//       //   let key = e.key;
//       //   do {
//       //     element[i].cells[j].textContent = e.key;
//       //   } while (key !== e.key);
//       //   document.addEventListener("keyup", () => handlerKey());

//       element[i].cells[j].textContent = e.key;
//     }
//   }
//   //   const keyStroke = e.key;
//   //   element[0].cells[0].textContent = keyStroke;
// }
