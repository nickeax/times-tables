import { Problems } from './Problems.js'
import { Number } from './Number.js'
import { Utilities } from './Utilities.js'

const numerals = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

const num = new Number()
const util = new Utilities()

const elements = document.querySelectorAll('input')

const btnBegin = document.querySelector('#btnBegin')
const btnReset = document.querySelector('#btnReset')
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

document.addEventListener('keydown', ev => {
  // ev.preventDefault()
  if(ev.keyCode === 13) return false
  return true
})

// document.addEventListener('submit', ev) {
//   ev.preventDefault()
//   return
// }

btnReset.addEventListener('click', ev => {
  location.reload()
})

document.addEventListener('keyup', ev => {
  console.log(ev.keyCode);
  //48 - 57
  isAllowed(ev.target.id)
})

function isAllowed(id) {
  if(id === 'factor') {
    let tmp = factor.value.split('')
    factor.value = tmp.filter(x => {
      return x >= 0 || x <= 9 
    }).join('')
  } else {
    let tmp = upper.value.split('')
    upper.value = tmp.filter(x => {
      return x >= 0 || x <= 9 
    }).join('')
    console.log('Checking upper');
  }
}

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
        if(parseInt(factor.value) > parseInt(upper.value)) {
          error("The factor number must be less than the upper bound number")
        }
        statsBar.innerHTML = ""
        probs = new Problems(factor.value, upper.value)
        btnAnswer.disabled = false
        btnBegin.classList.add('hide')
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
  location.reload()
}