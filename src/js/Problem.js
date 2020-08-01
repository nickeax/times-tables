export class Problem {
  value
  correct
  attempted

  constructor (value) {
    this.value = value
    this.correct = false
    this.attempted = false
  }

  makeAttempt (guess, corr) {
    this.attempted = true
    if(parseInt(guess) === parseInt(corr)) {
      this.correct = true
      return true
    } else {
      this.correct = false
      return false
    }    
  }
}