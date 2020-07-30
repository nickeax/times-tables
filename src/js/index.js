import { Number } from './Number.js'
import { Utilities } from './Utilities.js'

const num = new Number()
const util = new Utilities()

let gameArr = []

const elements = document.querySelectorAll('input')

const answer = document.querySelector('#answer')
const question = document.querySelector('#question')
const factor = document.querySelector('#factor')
const upper = document.querySelector('#upper')
const messageContainer = document.querySelector('#messageContainer')
const errorMessage = document.querySelector('#errorMessage')

document.addEventListener('click', ev => {
  let t = ev.target
  switch (t.id) {
    case 'btnBegin':
      if(!factor.value || !upper.value) {
        error('Please enter all items')
        break
      } else {
        gameArr = num.buildTables(factor.value, upper.value)
        console.log(gameArr);
      }
      break
    case 'btnAnswer':
      console.log('Ready to process answer');
      break
  }
})

function error(str) {
  messageContainer.classList.add('show')
  errorMessage.classList.add('show')
  errorMessage.innerHTML = `<strong>${str}</strong>`
  setTimeout(clearErrorMessage, 2000)
}

function clearErrorMessage() {
  messageContainer.classList.add('hide')
  errorMessage.classList.remove('show')
  errorMessage.classList.add('hide')
}