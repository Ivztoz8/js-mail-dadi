// Dichiarazione variabili
let arrayPotter = ["banana", 0, "DVI", "Stop Loss", "Forks", 42, "3,14 Pi greco", "Johnny Mnemonic", 0,99999, "cos * sin"];
console.log(arrayPotter);
let arrayDisplay = document.getElementById("Arraydisp");

// Stampiamo nell'HTML il contenuto dell'Array
for (let i = 6; i < arrayPotter.length; i++){
    arrayDisplay.innerHTML += `<div class="col" id="resultRoll"> Il contenuto dell'Array è: ${(arrayPotter)[i]} </div>`;
}
