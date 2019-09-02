var assert = require('assert');
var chai = require('chai').should();
var expect = require('chai').expect;
var Calculator = require('../../src/util/calculator');

describe('Rectangle', () => {
    describe('#constructor()', () => { 
        it('requires two numerical arguments', () => {
            () => {
                new Calculator().should.throw(Error);
            }
            
            () => {
                new Calculator(10).should.throw(Error);
            }

            () => {
                new Calculator('foo', 'bar').should.throw(Error);
            }
            
            () => {
                new Calculator(10,5).should.not.throw(Error);
            }
        });  
    }); 

    describe('#division()', () => {
        it('passes when divisor is non zero', () => {
            var result = new Calculator().division(10,5);
            result.should.not.throw('Error')
        });

        it('fails when divisor zero', () => {
            var result = new Calculator().division(10,0);
            result.should.throw('Error')
        });
    });


});
    
/*
describe('#constructor()', () => {
      it('requires two numerical arguments', () => {
        () => {
          new Rectangle();
        }.should.throw(Error);
  
        () => {
          new Rectangle(1.0);
        }.should.throw(Error);
  
        () => {
          new Rectangle('foo', 'bar');
        }.should.throw(Error);
  
        () => {
          new Rectangle(5, 7);
        }.should.not.throw(Error);
      });
    });

describe('Calculator', function() {
    describe('division', function() {
        it('Should return false if divide by zero', function() {
            var calculator = new Calculator(10,0);
            var result = calculator.division(a,b);
            console.log("Result 1 "+result);
            expected = Error;
            assert.equal('NaN', result);
        });

        
        it('Should true false if divide by non zero', function() {
            var calculator = new Calculator(10,5);
            
            console.log("Result 2 "+calculator.division(a,b));
            assert.equal(2, result);
        });
    })
});
*/