export class Number {
    // VARS
    used
    value
    prime

    constructor (val) {
        this.value = val
        this.isPrime()
        // console.log(`Prime? ${this.prime}`);
    }

    // METHODS
    display(parent, debug=0) {
        // Maybe have a 'debug' flag that has levels for the amount extra data to show?
    }

    // All of the operation methods should return information data objects
    subtractNumber (n) {
        return {
            result: this.value - n,
            positive: this.value - n >= 0 ? true : false
        }
    }

    subtractFrom (n) {
        return {
            result: n - this.value,
            positive: n - this.value >= 0 ? true : false
        }
    }

    add (n) {
        return {
            result: n + this.value
        }
    }

    multiply (n) {  
        return {
            result: n * this.value
        }
    }

    isPrime() {
        if(this.value == 0 || this.value == 1 || this.value == 2) {
            this.prime = true;
            return
        }

        let flag = true
        for(let i = 2; i < this.value; i++) {
            if(parseInt(this.value) % i === 0 && parseInt(this.value) !== i) {
                flag = false
                break
            }
        }
        this.prime = flag
    }
}