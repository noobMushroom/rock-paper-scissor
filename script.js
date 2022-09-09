console.log("Hello world")
computer_score = 0
user_score = 0
tie = 0
const getComputerChoice = () => {

    const choice = Math.floor(Math.random() * 3)
    switch (choice) {
        case (0):
            return "rock"
        case (1):
            return "paper"
        case (2):
            return "scissors"
    }
}
// r>s>p>r
const rock_paper_scissors = (player, opponent) => {
    if (player === opponent) {
        return "tie"
    } else if (player === 'r' && opponent === 'scissors' || player === 's' && opponent === 'paper' || player === 'p' && opponent === "rock") {
        return "win"

    } else if (opponent === 'rock' && player === 's' || opponent === 'scissors' && player === 'p' || opponent === 'paper' && player === "r") {
        return 'lose'
    }

    else {
        return "invalid"
    }
}
const playground = (userChoice, computerChoice) => {

    if (rock_paper_scissors(userChoice, computerChoice) === "win") {
        user_score++
        return ("Hurray you won!")

    }

    else if (rock_paper_scissors(userChoice, computerChoice) === "lose") {
        computer_score++
        return ("You lost Try again!")

    }

    else if (rock_paper_scissors(userChoice, computerChoice) === 'tie') {
        tie++
        return ("It's a tie")

    }

    else {
        return ("Invalid input")

    }

}
//asking for user input
for (let i = 0; i < 5; i++) {
    console.log(`The round number is ${i + 1}`)


    userChoice = prompt("Choose (r) rock, (p) paper and (s) scissors").toLowerCase()


    computerChoice = getComputerChoice()
    console.log(`You choose is ${userChoice} and computer choose ${computerChoice}`)

    console.log(playground(userChoice, computerChoice))
    console.log(`You won ${user_score} round and computer won ${computer_score} rounds and ${tie} were tie`)

}

console.log(`The computer score is ${computer_score} and your score is ${user_score} and ${tie} rounds were tie`)

if (computer_score > user_score) {
    console.log("You lost try agian!")
} else if (user_score > computer_score) {
    console.log("hurray you won congratulations")
} else {
    console.log("It's a tie. You both won")
}