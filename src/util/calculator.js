'use strict';

module.exports = class Calculator {

    constructor(number1 , number2 ){
        this.number1 = number1;
        this.number2 = number2;
    }

    division() {
        if (isNaN(this.number1) || isNaN(this.number2)) {
            throw new Error('invalid input');

        }
        else if (this.number2 === 0) {
            throw new Error('the divisor of the number is 0');
        }
        else {
            return this.number1 / this.number2;
        }
    }
}

