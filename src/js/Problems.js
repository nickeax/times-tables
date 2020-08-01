import { Problem } from './Problem.js'
import { Utilities } from './Utilities.js'

const u = new Utilities();

export class Problems {
  problems = []
  incorrect = []
  errorTimeout = 1200
  firstTimeThrough = true
  originalLength
  btnAnswer
  ind
  correctAnswer

  constructor(fact, upperLim) {
    this.buildTable(fact, upperLim)
    this.btnAnswer = document.querySelector('#btnAnswer')

    this.btnAnswer.addEventListener('click', ev => {
      if (!answer.value) {
        this.error('Please type in your answer')
        return
      }
      if (this.problems[this.ind].makeAttempt(answer.value, this.correctAnswer)) {
        this.error("CORRECT!")
        answer.value = ""
      } else {
        this.error("WRONG ANSWER...")
        this.incorrect.push(this.problems[this.ind])
        answer.value = ""
      }
      this.problems = this.problems.filter(y => !y.attempted)
      statsBar.innerHTML = `${this.problems.length} QUESTION${this.problems.length > 1 ? 'S' : ''} LEFT of ${this.originalLength}`
      if (this.problems.length == 0) {
        console.log('got here');
        this.report()
      } else {
        this.playNext()
      }
    })
  }

  report() {
    console.log('report()');
    let tmp = ""
    tmp = '<div><h3>These are the ones you missed</h3></div><ul>'
    this.incorrect.forEach(x => {
      tmp += `<li>${factor.value} X ${x.value / factor.value} = ${x.value}</li>`
    })
    tmp += '</ul><tt>enter some new numbers and hit PLAY to play again!</tt>'

    statsBar.innerHTML = tmp
    this.init()
  }

  init() {
    factor.value = ""
    upper.value = ""
    answer.classList.add('hide')
    this.btnAnswer.classList.add('hide')
    questionA.classList.add('hide')
    questionB.classList.add('hide')
    return
  }

  buildTable(f, u) {
    for (let i = 1; i <= u; i++) {
      if (i * f > u) break
      this.problems.push(new Problem(i * f))
    }
    this.originalLength = this.problems.length

  }

  getNotAttempted() {
    this.problems = this.problems.filter(x => {
      return !x.attempted
    })
  }

  playNext() {
    answer.classList.remove('hide')
    // answer.classList.add('show')

    this.btnAnswer.classList.remove('hide')
    // this.btnAnswer.classList.add('show')

    questionA.classList.remove('hide')
    // questionA.classList.add('hide')

    questionB.classList.remove('hide')
    // questionB.classList.add('show')

    this.ind = u.randomNumber(this.problems.length)
    questionA.innerHTML = `${factor.value} X `
    questionB.innerHTML = ` = ${this.problems[this.ind].value}`
    this.correctAnswer = this.problems[this.ind].value / factor.value
    // if (this.firstTimeThrough) {
    //   this.firstTimeThrough = false
    //   return
    // }
  }

  makeAttempt() {
    console.log(this);

  }

  error(str) {
    mainScreen.classList.add('obscure')
    messageContainer.classList.remove('hide')
    messageContainer.classList.add('show')
    errorMessage.classList.remove('hide')
    errorMessage.classList.add('show')
    errorMessage.innerHTML = `<strong>${str}</strong>`
    setTimeout(this.clearErrorMessage, this.errorTimeout)
  }

  clearErrorMessage() {
    mainScreen.classList.remove('obscure')
    messageContainer.classList.remove('show')
    messageContainer.classList.add('hide')

    errorMessage.classList.remove('show')
    errorMessage.classList.add('hide')
  }
}

// if (!answer.value) error('Please type in your answer')
// if (parseInt(answer.value) === parseInt(correctAnswer)) {
//   error("CORRECT!")
//   questionA.innerHTML = ""
//   questionB.innerHTML = ""
//   answer.value = ""
//   btnBegin.click()
//   answer.focus()
// } else {
//   error("Sorry, please try again!")
//}

// questionA.innerHTML = `${factor.value} X `
// questionB.innerHTML = ` = ${tmp}`
// correctAnswer = tmp / factor.value
// answer.focus()