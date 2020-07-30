export class Utilities {
    randomRange(lwr, upr) {
        return Math.floor(Math.random() * (upr - lwr)) + lwr
    }

    randomNumbers(amt, upp, lwr) {
        let tmp = []
        for(let i = 0; i < amt; i++) {
            tmp.push(this.randomRange(lwr, upp))
        }
        return tmp
    }
    

}