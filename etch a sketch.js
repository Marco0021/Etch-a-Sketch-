let clear = document.querySelector("button");
let container = document.querySelector(".container");

clear.addEventListener("click", () => {
  removeAllChildNodes(container);
});

function question() {
  do {
    number = prompt("Choose the size of your design.");
  } while (number < 2 || number > 100);
}

clear.addEventListener("click", choiceUser);

function choiceUser() {
  question();
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;

  for (let i = 0; i < number * number; i++) {
    let divSquares = document.createElement("div");
    divSquares.style.backgroundColor = "black";
    divSquares.style.border = " 1px solid white";
    container.appendChild(divSquares);
    divSquares.addEventListener("mouseover", (e) => {
      divSquares.style.backgroundColor = "red";
    });
  }
  console.log(number);
}

function createGrid(size) {
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let divSquares = document.createElement("div");
    divSquares.className = "divSquares";
    divSquares.style.backgroundColor = "black";
    divSquares.style.border = " 1px solid white";
    container.appendChild(divSquares);

    divSquares.addEventListener("mouseover", (e) => {
      divSquares.style.backgroundColor = "red";
    });
  }
}

createGrid(4);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// function questionGrid() {
//   let choiceSquares;
//   do {
//     choiceSquares = prompt("quanti quadrati vuoi?", 64);
//   } while ((choiceSquares < 2 || choiceSquares > 100) && choiceSquares);
// }
// choiceSquares = numberOfRows;
// questionGrid();
