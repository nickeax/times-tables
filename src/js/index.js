import { Problems } from './Problems.js'
import { Number } from './Number.js'
import { Utilities } from './Utilities.js'

const num = new Number()
const util = new Utilities()

const elements = document.querySelectorAll('input')

const btnBegin = document.querySelector('#btnBegin')
const statsBar = document.querySelector('#statsBar')
const answer = document.querySelector('#answer')
const questionA = document.querySelector('#questionA')
const questionB = document.querySelector('#questionB')
const factor = document.querySelector('#factor')
const upper = document.querySelector('#upper')
const mainScreen = document.querySelector('#mainScreen')
const messageContainer = document.querySelector('#messageContainer')
const errorMessage = document.querySelector('#errorMessage')
let probs = {}

factor.focus()

messageContainer.classList.add('hide')

document.addEventListener('click', ev => {
  ev.preventDefault()
  let t = ev.target
  switch (t.id) {
    case 'btnBegin':
      if (!factor.value || !upper.value) {
        error('Please enter all items')
        break
      } else {
        statsBar.innerHTML = ""
        probs = new Problems(factor.value, upper.value)
        btnAnswer.disabled = false
        
        probs.playNext()
      }
      break
    // case 'btnAnswer':
    //   probs.playNext()
    //   break
  }
})

function error(str) {
  mainScreen.classList.add('obscure')
  messageContainer.classList.remove('hide')
  messageContainer.classList.add('show')
  errorMessage.classList.remove('hide')
  errorMessage.classList.add('show')
  errorMessage.innerHTML = `<strong>${str}</strong>`
  setTimeout(clearErrorMessage, 1500)
}

function clearErrorMessage() {
  console.log('clearErrorMessage()');
  mainScreen.classList.remove('obscure')
  messageContainer.classList.remove('show')
  messageContainer.classList.add('hide')
  errorMessage.classList.remove('show')
  errorMessage.classList.add('hide')
}