// Beklager for her er lite gjort. Har prøvd å ta igjen på scrimba for å få mer forståelse av når man skal bruke de forskjellige typene osv. Denne quizen blir noe jeg kommer til å jobbe med utover kurset og oppdatere denne jo mer ting jeg lærer og lærer å bruke.

"use strict"

import {quizQuestions } from "./questions/quizQuestions.js"

let currentQuestion = 0
let score = 0


function createElement() {

}

function displayQuestions(display) {
  const {question, choices} = display

  const scoreElement = createElement("h3",{textContent: `Score ${score}`})
  const questionText = document.createElement("p")
  questionText.textContent = question
}

function startQuiz() {
  quizEl.innerHTML = ""
  score = 0
  currentQuestion = 0

  let questionElements = displayQuestion(quizQuestions[currentQuestion])
  quizEl.append(questionElements)
}

function endQuiz() {

}

function updateScore() {

}

