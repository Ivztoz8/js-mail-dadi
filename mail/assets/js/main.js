

// dichiarazione variabili
let dataArray = ["mario.draghi2020@gmail.com", "rocco.tanica@gmail.com", "philip.jfry3000@gmail.com", "mario.rossi@gmail.com", "hulk.keepcalm@gmail.com", "alibabastock958@gmail.com", "semodemo_prozac@gmail.com", "samuraishampoo77@gmail.com", "pinolalavatrice2000@gmail.com","fred_nietzsche_boh@gmail.com", "suicidianonimi_senzaalcolisti@gmail.com", "interstellar1010909@gmail.com"];
let confirmYourEmail;

// usiamo prompt per chiedere la mail dell'utente
let yourEmail = prompt("Qual è la tua mail? ")
//dataArray.push(yourEmail);

// controlliamo con indexOf() se la mail è presente nel dataArray di chi può accedere
let itsContained = dataArray.indexOf(yourEmail);
console.log(itsContained);

if (itsContained > -1){
    alert(` La seguente mail, ${yourEmail}, è gia contenuta nel database del sito. Chiudere la pagina ed seguire l'accesso.`);
} else {
    confirmYourEmail = prompt("La tua mail non era nel database, inseriscila nuovamente per registrarti.")
    if (confirmYourEmail === yourEmail){
        alert("E-mail inserita con successo!")
    }
    else {
        alert("Le mail inserite non combaciano, riaggiornare la pagina per ritentare la registrazione.")
    }
}