console.log("script is working");
const element = document
  .querySelector(".word-matrix")
  .getElementsByTagName("tr");
// console.log(element[0].cells[0].textContent);
document.addEventListener("keydown", handlerKey);

function handlerKey(e) {
  console.log(e.key);

  console.log("element", element[0].cells);
  for (let i = 0; i < element.length; i++) {
    e.stopPropagation();
    for (let j = 0; j < element[i].cells.length; j++) {
      console.log("element", element[i].cells[j]);
      //   let key = e.key;
      //   do {
      //     element[i].cells[j].textContent = e.key;
      //   } while (key !== e.key);
      //   document.addEventListener("keyup", () => handlerKey());

      element[i].cells[j].textContent = e.key;
    }
  }
  //   const keyStroke = e.key;
  //   element[0].cells[0].textContent = keyStroke;
}
