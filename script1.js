const buttons = document.querySelectorAll(".btn");

const choices = document.getElementById("choices")
const result = document.getElementById("result");
const total_score = document.getElementById('scores')
const roundDiv = document.getElementById('round')
const finalResultDiv = document.getElementById("finalResult")


// scores

let computer_score = 0
let player_score = 0
let round = 0

const choice= buttons.forEach(square => {
    square.onclick = () => {
        onClick(square)
    } 
})

// this function pics a random choice for computer  and takes no arguement 

const getComputerChoice = () => {

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

// this function choses who wins  and take two arguement player and oppnent (opponent will be the computer)
const rock_paper_scissors = (player, opponent) => {

    if (player === opponent) {
        return 'it\'s a tie'
    } else if (player === 'Rock' && opponent === 'Scissors' || player === 'Scissors' && opponent === 'Paper' || player === 'Paper' && opponent === "Rock") {
        return 'you won'

    } else {
        return 'you lose'
    }

}

// this function will calculate the score of players and takes one arguement and for now reuslt is coming from rock-paper-scissors function and returns computer score and player score 

const keepScore = (result) => {
    computer_score=0
    player_score=0

    if (result == "you won") {
        return player_score += 1

    } else if (result == "you lose") {
        return computer_score += 1

    }
    // return computer_score, player_score

}

// this fucntion tells who won and takes one argument which is right now coming form 

const winner = () => {

    if (player_score ==1) {
        console.log('some', player_score)
        return ("you won")
    } else if (computer_score == 1) {
        console.log('cs', computer_score)
        return ("you lose")
    }
}


// this is the show result function and it shows all the result in the screen and takes two argruments computer choice and player choice player choice is coming from playerchoice.value from onclick funcition. 
const showResult = (pChoice, compChoice) => {
    round += 1
    // this changes the innerHTML of choices which shows player choices
    choices.innerHTML = ` <img src="images/person.png">: ${pChoice} |<img src="images/battle.png" > | ${compChoice}:  &nbsp <img src="images/computer.png" >`;
    // it bring back the score of player according to choice of players
    const score = rock_paper_scissors(pChoice, compChoice);
    // then it's changing result content according to score
    result.textContent = score.toUpperCase()
    // it's is just showing the round
    // todo: don't add round if it's a tie
    roundDiv.innerHTML = ` Round no: ${round}`
    roundDiv.setAttribute('style', 'background: pink; border-radius: 3em; padding: .2em 1.3em; border: 2px solid #f95d9b;')
    // keepscore function calculates the score of players by and we are passing score which is again come from rock paper scissors fucntion
    keepScore(score)

    // it shows the totol score of players and it's retruned from the keep score function 
    total_score.innerHTML = `<img src="images/person.png"> ${player_score} ||  ${computer_score}  &nbsp <img src="images/computer.png" >`

    // this is supposed to stop fucntion if they won certain round but so far it's not working but it will work soon 
    finalResultDiv.textContent = finalResult(round)

}

// this is kinda main function it shows reuslt on the screen and the value is coming from for each loop 
const onClick = (playerChoice) => {

    console.log("i am clicked")
}

// this function tell who won in how many rounds 
const finalResult = (rounds) => {
    if (player_score == 5) {
        if (rounds <= 6) {
            return `Hurray! you won in just ${rounds} rounds you are the champion you destroyed me`
        } else if (rounds <= 10) {
            return `Hurray! you won in ${rounds} rounds you are a pro player`
        } else {
            return `Hurray! you won in ${rounds} rounds, congratulations`
        }
    } else if (computer_score == 5) {
        return `computer won in ${rounds} rounds`
    }
}

// this is supposed to be the main function which will drive the whole program so far it's not working but I will make it work tonight 
const playGame = (computerScore, playerScore) => {
    if (computerScore <= 5) {
        buttons.forEach(square => {
            square.onclick = () => {
                onClick(square) 

            }
        })
    } else if (playerScore) {
        buttons.forEach(square => {
            square.onclick = () => {
                onClick(square)
                console.log("this is second if")

            }
        })
    } else {
        console.log("This is else")
    }
}
// playGame(computer_score, player_score)
winner()
// onClick(playerChoice)