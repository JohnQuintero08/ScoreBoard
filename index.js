let scoreFirst = document.getElementById("score1")
let scoreSecond = document.getElementById("score2")
let scoreOne = 0
let scoreTwo = 0

function add1(){
    scoreOne += 1
    scoreFirst.textContent = scoreOne 
}
function add2(){
    scoreOne += 2
    scoreFirst.textContent = scoreOne 
}
function add3(){
    scoreOne += 3
    scoreFirst.textContent = scoreOne 
}
function add1Two(){
    scoreTwo += 1
    scoreSecond.textContent = scoreTwo 
}
function add2Two(){
    scoreTwo += 2
    scoreSecond.textContent = scoreTwo 
}
function add3Two(){
    scoreTwo += 3
    scoreSecond.textContent = scoreTwo 
}
function newGame(){
    scoreOne = 0
    scoreTwo = 0
    scoreFirst.textContent = scoreOne 
    scoreSecond.textContent = scoreTwo 
}