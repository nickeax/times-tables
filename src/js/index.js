import { Number } from './Number.js'
import { Utilities } from './Utilities.js'

const num = new Number()
const util = new Utilities()

const errorTimeout = 1300

let gameArr = []

const elements = document.querySelectorAll('input')

const btnBegin = document.querySelector('#btnBegin')

const answer = document.querySelector('#answer')
const questionA = document.querySelector('#questionA')
const questionB = document.querySelector('#questionB')
const factor = document.querySelector('#factor')
const upper = document.querySelector('#upper')
const mainScreen = document.querySelector('#mainScreen')
const messageContainer = document.querySelector('#messageContainer')
const errorMessage = document.querySelector('#errorMessage')

let correctAnswer = 0; 

messageContainer.classList.add('hide')

document.addEventListener('click', ev => {
  let t = ev.target
  switch (t.id) {
    case 'btnBegin':
      if (!factor.value || !upper.value) {
        error('Please enter all items')
        break
      } else {
        gameArr = num.buildTables(factor.value, upper.value)
        let tmp = gameArr[util.randomNumber(gameArr.length)]
        questionA.innerHTML = `${factor.value} X `
        questionB.innerHTML = ` = ${tmp}`
        correctAnswer = tmp / factor.value
      }
      break
    case 'btnAnswer':
      if(!answer.value) error('Please type in your answer')
      console.log(`answered: ${answer.value} correct: ${correctAnswer}`);
      if(parseInt(answer.value)  === parseInt(correctAnswer)) {
        error("CORRECT!")
        questionA.innerHTML = ""
        questionB.innerHTML = ""
        answer.value = ""
        btnBegin.click()
      } else {
        error("Sorry, please try again!")
      }
      break
  }
})

function error(str) {
  console.log(`ERROR`);
  mainScreen.classList.add('obscure')
  messageContainer.classList.remove('hide')
  messageContainer.classList.add('show')
  errorMessage.classList.remove('hide')
  errorMessage.classList.add('show')
  errorMessage.innerHTML = `<strong>${str}</strong>`
  setTimeout(clearErrorMessage, errorTimeout)
}

function clearErrorMessage() {
  mainScreen.classList.remove('obscure')
  messageContainer.classList.remove('show')
  messageContainer.classList.add('hide')

  errorMessage.classList.remove('show')
  errorMessage.classList.add('hide')
}