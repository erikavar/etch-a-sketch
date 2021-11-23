const container = document.querySelector(".container");
const button = document.querySelector("#btn");

function createGrid(input) {
    document.querySelector(".container").innerHTML = "";
    container.style.setProperty("--grid-rows", input);
    container.style.setProperty("--grid-columns", input);
    if (input <= 100 && input >= 1) {
        for (i = 0; i < (input * input); i++) {
            let newSquare = document.createElement("div");
            container.appendChild(newSquare).className = "newSquare";
            newSquare.addEventListener("mouseover", () => {
                    newSquare.setAttribute("class", "touchedSquare");
                });
        }
    } else if (input === "") {
       alert("No number entered. Please press the Start button to try again.");
    } else {
        alert("Please ensure that you entered a number between 1 and 100 (inclusively).");
    }
}

function getInput() {
    input = prompt("How many squares would you like each side of the grid to have? (Please choose a number between 1 and 100 inclusively.)");
    createGrid(input);
}

button.addEventListener("click", () => {
    getInput();
})