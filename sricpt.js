let win = 0;
let draw = 0;
let lose = 0;

document.getElementById("points").textContent = `A Pontjaid:`;
document.getElementById("winner").textContent = `Nyertes kör: ${win}`;
document.getElementById("draw").textContent = `Döntetlen kör: ${draw}`;
document.getElementById("loser").textContent = `Vesztes kör: ${lose}`;

function newGame(){
win = 0;
draw = 0;
lose = 0;
document.getElementById("winner").textContent = `Nyertes kör: ${win}`;
document.getElementById("draw").textContent = `Döntetlen kör: ${draw}`;
document.getElementById("loser").textContent = `Vesztes kör: ${lose}`;
}

function theGameCheck(me, enemy){
    if (me == "paper") {
        if (enemy == "rock") {
            return "Győztes";
        }
        else if(enemy == "paper"){
            return "Döntetlen";
        }
        else
        {
            return "Vesztes";
        }    
    }
    else if(me == "rock"){
        if (enemy == "scissors") {
            return "Győztes";
        }
        else if(enemy == "rock"){
            return "Döntetlen";
        }
        else
        {
            return "Vesztes";
        }
    }
    else
    {
        if (enemy == "paper") {
            return "Győztes";
        }
        else if(enemy == "scissors"){
            return "Döntetlen";
        }
    }

    return "Vesztes";  
}

function enemyChoice(){
    let randomInRange = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let choice;

    switch(randomInRange){
        case 1: choice = "rock";
                break;
        case 2: choice = "paper";
                break;
        default: choice = "scissors";
    }

    return choice;
}

function removeHighlight() {
    document.getElementById("pic1").classList.remove("highlight");
    document.getElementById("pic2").classList.remove("highlight");
    document.getElementById("pic3").classList.remove("highlight");
}

function getRock(){
    removeHighlight(); // Eltávolítjuk az előző kiemelést
    let enemy  = enemyChoice();
    let rock = "rock";
    let result = theGameCheck(rock,enemy);
    determiningTheRanking(result);
    highlightTheImage(enemy, result);
}

function getPaper(){
    removeHighlight(); // Eltávolítjuk az előző kiemelést
    let enemy  = enemyChoice();
    let paper = "paper";
    let result = theGameCheck(paper,enemy);
    determiningTheRanking(result);
    highlightTheImage(enemy, result);
}

function getScissors(){
    removeHighlight(); // Eltávolítjuk az előző kiemelést
    let enemy  = enemyChoice();
    let sc = "scissors";
    let result = theGameCheck(sc,enemy);
    determiningTheRanking(result);
    highlightTheImage(enemy,result);
}

function determiningTheRanking(result){
    if(result == "Győztes"){
        ++win;
        document.getElementById("winner").textContent = `Nyertes kör: ${win}`;
    }
    else if (result == "Döntetlen") {
        ++draw;
        document.getElementById("draw").textContent = `Döntetlen kör: ${draw}`;
    }
    else
    {
        ++lose;
        document.getElementById("loser").textContent = `Vesztes kör: ${lose}`;
    }
}

function highlightTheImage(enemy,result) {
    // Ha a gép választása Ko
    if (enemy === "rock") {
        document.getElementById("pic1").classList.add("highlight");
    }
    // Ha a gép választása Papir
    else if (enemy === "paper") {
        document.getElementById("pic2").classList.add("highlight");
    }
    // Ha a gép választása Ollo
    else if (enemy === "scissors") {
        document.getElementById("pic3").classList.add("highlight");
    }

    document.getElementById("result12").textContent = `${result}`;

    // 1 másodperc múlva eltávolítjuk a kiemelést és a kiírást is
    setTimeout(function() {
        removeHighlight(); // Eltávolítjuk a kiemelést
        document.getElementById("result12").textContent = ""; // Eltávolítjuk az eredményt
    }, 1000); // 1000 ms = 1 másodperc
}

