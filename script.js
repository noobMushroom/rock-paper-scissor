const choices = document.getElementById("choices")
const result = document.getElementById("result");
const total_score = document.getElementById('scores')
const roundDiv = document.getElementById('round')
const finalResultDiv = document.getElementById("finalResult")

let computer_score = 0;
let player_score = 0;
let tie = 0;
let round = 0;

const start = () => {
    let buttons = document.querySelectorAll('.btn')

    buttons.forEach(square => {
        square.onclick = () => onClickRPS(square)
    })
}

const onClickRPS = (square) => {
    let computerChoice= opponent()
    let score= getResult(square.value, computerChoice)
    scoreCal(score);
    if (player_score === 5) {
        reset()
        return
    } else if (computer_score === 5) {
        reset()
        return
    } else {
        showResult(square.value, computerChoice, score)
    }

}

// get computer choice

const opponent = () => {
    const choice = Math.floor(Math.random() * 3)
    switch (choice) {
        case (0):
            return "Rock"
        case (1):
            return "Paper"
        case (2):
            return "Scissors"
    }
}

// this function will decide who win 

const getResult = (player, opponent) => {
    let score;
    if (player === opponent) {
        score = 0
    } else if (player === 'Rock' && opponent === 'Scissors') {
        score = 1
    } else if (player === "Paper" && opponent === "Rock") {
        score = 1
    } else if (player === "Scissors" && opponent === "Paper") {
        score = 1
    } else {
        score = -1
    }
    return score
}
// decides who won the round
const winner = (result) => {
    if (result == 1) {
        return ("Hurray! you won")
    } else if (result == -1) {
        return ("You lost")
    } else {
        return ("It's a tie")
    }
}

// it calculate the player and computer score
const scoreCal = (score) => {

    if (score == 1) {
        return player_score += 1
    } else if (score == -1) {
        return computer_score += 1
    } else {
        return tie += 1
    }

}

// it shows all the reuslt in the screen 

const showResult = (pChoice, compChoice, score) => {
    round += 1;
    // it shows choices of players
    choices.innerHTML = ` <img src="images/person.png">: ${pChoice} |<img src="images/battle.png" > | ${compChoice}:  &nbsp <img src="images/computer.png" >`;
    // it return score from getResult function 
    // const score = getResult(pChoice, compChoice);
    // it shows who won the round in display
    result.textContent = winner(score)
    // it shows the number of round in the display
    roundDiv.innerHTML = ` Round no: ${round}`
    roundDiv.setAttribute('style', 'background: pink; border-radius: 3em; padding: .2em 1.3em; border: 2px solid #f95d9b;')

    //calling scoreCal function to calculate total score of computer and player 
    // scoreCal(score)

    // display total score  in the screen of player and computer
    total_score.innerHTML = `<img src="images/person.png"> ${player_score} ||  ${computer_score}  &nbsp <img src="images/computer.png" >`
}

//shows result if player reaches to 5

const finalResult = (rounds) => {
    if (player_score ===5) {
        if (rounds <= 6) {
            return `<img src="images/person.png"> Hurray! you won in just ${rounds} rounds you are the champion you destroyed me`
        } else if (rounds <= 10) {
            return `<img src="images/person.png"> Hurray! you won in ${rounds} rounds you are a pro player`
        } else {
            return `<img src="images/person.png"> Hurray! you won in ${rounds} rounds, congratulations`
        }
    } else if (computer_score ===5) {
        return `<img src="images/computer.png" > computer won try again`
    }
}

// this function reset everything in screen and add reset button and shows who won from who won function 

function reset() {
    result.innerHTML = ''
    choices.innerHTML = `${finalResult(round)}`
    total_score.innerHTML = ''
    const endgame = document.createElement('button')
    endgame.classList.toggle('endGameBtn');
    endgame.textContent = "Reset the board"
    total_score.appendChild(endgame)
    let endGameButton = document.querySelector('.endGameBtn')
    endGameButton.onclick = () => endGame()
    endgame.setAttribute('style', 'background:pink; border-radius: 3em; padding: .2em 1.3em; border: 2px solid #f95d9b;')
}

// this function clears everything and reset the board 

function endGame() {
    choices.innerHTML = ''
    total_score.innerHTML=''
    player_score=0
    computer_score=0
    round=0
    roundDiv.innerHTML=''
    roundDiv.removeAttribute("style")
  }

start()
