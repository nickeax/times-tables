export class Utilities {
    randomRange(lwr, upr) {
        return Math.floor(Math.random() * (upr - lwr)) + lwr
    }

    randomNumber(upp) {
        return Math.floor(Math.random() * upp)
    }

    randomNumbers(amt, upp, lwr) {
        let tmp = []
        for(let i = 0; i < amt; i++) {
            tmp.push(this.randomRange(lwr, upp))
        }
        return tmp
    }
    

}