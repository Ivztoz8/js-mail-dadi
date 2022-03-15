// Dichiarazione variabili
let arrayPotter = ["banana", 0, "DVI", "Stop Loss", "Forks", 42, "3,14 Pi greco", "Johnny Mnemonic", 0,99999, "cos * sin"];
// console.log(arrayPotter);
let arrayDisplay = document.getElementById("Arraydisp");

// Stampiamo nell'HTML il contenuto dell'Array
for (let i = 0; i < 5; i++){
    arrayPotter.reverse()
    arrayDisplay.innerHTML += `<div class="col"> Il contenuto dell'Array è: ${(arrayPotter)[i]} </div>`;
}

// Parte Bonus Bonus
// Dichiarazione variabili
let arrayPotter2 = [];
let arrayDisplay2 = document.getElementById("Arraydisp2");
let arrayDisplay3 = document.getElementById("Arraydisp3");
let arrayPotter2reverse;


// Stampiamo nell'HTML il contenuto dell'Array
let quantitArray = prompt("Quanti elementi avrà l'Array2? ")
let lungArray = (quantitArray / 2);
for (let i2 = 5; i2 < quantitArray; i2++){
    arrayNumRandom = Math.floor(Math.random()* 99) + 1;
    arrayPotter2.push(arrayNumRandom);
    arrayPotter2reverse = arrayPotter2.reverse();
    arrayDisplay2.innerHTML = `<div class="col"> Il contenuto dell'Array è: ${(arrayPotter2)} </div>`;
arrayDisplay3.innerHTML = `<div class="col"> Gli ultimi 3 numeri dell'Array sono: ${(arrayPotter2reverse[0])}, ${(arrayPotter2reverse[1])}, ${(arrayPotter2reverse[2])}</div>`;
}

