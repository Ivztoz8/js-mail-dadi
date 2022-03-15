// Dichiarazione variabili
let buttonRoll = document.getElementById("btRoll");
let userDice;
let computerDice;
let resultofDiceRoll = document.getElementById("resultRoll");
let winnerRoll;

// Premendo il pulsante js tira i dadi
buttonRoll.addEventListener("click",
    function(){
        resultofDiceRoll.classList.remove("d-none");
        computerDice = Math.floor(Math.random()*6) + 1;
        userDice = Math.floor(Math.random()*6) + 1;
        console.log(userDice);
        console.log(computerDice);
        if ( userDice > computerDice ){
            winnerRoll = "YOU"
        }else if (userDice == computerDice){
            winnerRoll = "DRAW"
        }else {
            winnerRoll = "PC"
        }

        resultofDiceRoll.innerHTML += `<div class="col" id="resultRoll"> Your dice number: ${(userDice)} || Computer dice number: ${(computerDice)} || Winner is: ${(winnerRoll)}  </div>`;
    }
) 