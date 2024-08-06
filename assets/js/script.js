document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition")
});

function runGame(gameType){
    let num1=Math.floor(Math.random()*25)+1;
    let num2=Math.floor(Math.random()*25)+1;

    if(gameType === "addition"){
        displayAdditionQuestion(num1,num2);
    }
    else{
        alert(`Unknown game type:${gameType}`);
        throw ` Unknown game type:${gameType}.Aborting`;
    }
}
function checkAnswer(){
    let userAnswer=parseInt(document.getElementById("answer-box").value);
    let calculateAnswer=calculateCorrectScore();
    let isCorrect=userAnswer === calculateAnswer[0];
    if(isCorrect){
        alert("you got it right");
        incrementScore()
    }
    else{
        alert(`Awwww... You answered ${userAnswer} but the answer was: ${calculateAnswer[0]}`);
        incremenWrongAnswer();
    }
    runGame(calculateAnswer[1])
}
function calculateCorrectScore(){
    let operand1=parseInt( document.getElementById("operand1").innerText);
    let operand2=parseInt( document.getElementById("operand2").innerText);
    let operator=document.getElementById("operator").innerText;
    if(operator==="+"){
        return [operand1 + operand2,"addition"]
    }
    else{
        alert(`unimplemented operator :${operator}`);
        throw `unimplemented operator :${operator}.Aborted!`;
    }
}
function incrementScore(){
    let oldScore=parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText=++oldScore;
}
function incremenWrongAnswer(){
    let oldScore=parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText=++oldScore;
}
function displayAdditionQuestion(operand1,operand2){
    document.getElementById("operand1").textContent=operand1;
    document.getElementById("operand2").textContent=operand2;
    document.getElementById("operator").textContent="+";

}
function displaySubtractQuestion(operand1,operand2){
    document.getElementById("operand1").textContent=operand1;
    document.getElementById("operand2").textContent=operand2;
    document.getElementById("operator").textContent="-";
}
function displayMultiplyQuestion(operand1,operand2){
    document.getElementById("operand1").textContent=operand1;
    document.getElementById("operand2").textContent=operand2;
    document.getElementById("operator").textContent="*";
}