'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20
let highestScore = 0

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}
const displayScore = (score) => {
    document.querySelector('.score').textContent = score
}
const displayNumber = (number) => {
    document.querySelector('.number').textContent = number
}
const displayStyle = (backgroundColor, width) => {
    document.querySelector('body').style.backgroundColor = backgroundColor
    document.querySelector('.number').style.width = width
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)
    if (!guess) {
        //When there is no guess number
        displayMessage("⛔ Not A Number...!")
    } else if (secretNumber === guess) {
        //When the guess number is correct
        displayMessage("🎉 Correct Number...!")
        displayNumber(secretNumber)
        displayStyle('green', '30rem')
        if (highestScore < score) {
            highestScore = score
            document.querySelector('.highscore').textContent = highestScore
        }

    } else if (guess !== secretNumber) {
        //when the guess is wrong 
        if (score > 1) {
            score--
            displayMessage(guess > secretNumber ? "📈 Too High...!" : "📉 Too Low...!")
            displayScore(score)
        } else {
            displayMessage("💥You lost the game...!")
            displayScore("0")
            displayStyle('red', '30rem')
        }

    }

})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;    
    displayScore(20)
    displayMessage('Start guessing...')
    displayNumber("?")
    displayStyle('#222', '15rem')
    document.querySelector('.guess').value = ''
})