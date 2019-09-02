'use strict';

module.exports = class Calculator {
    constructor(){}

    division(a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error('invalid input');
          
        }
        else if (b === 0) {
            throw new Error('the quotient of a number and 0 is undefined');
        } 
        else {
            return a / b;
        }        
    }


}

