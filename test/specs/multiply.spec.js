const Calculator = require('./../../app/Calculator');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('multiply', function() {
    let multiply;

    beforeEach(() => {
        multiply = new Calculator();
           });

    afterEach(() => {
        multiply = null;
    });

    it('should return 0 when called with numbers 0 and 15', function() {
        expect(multiply.multiply(0,15)).to.be.equal(0);
    });

    it('should return 0 when called with numbers 0 and 0', function() {
        expect(multiply.multiply(0, 0)).to.be.equal(0);
    });

    it('should return 25 when called with numbers -5 and -5', function() {
        expect(multiply.multiply(-5, -5)).to.be.equal(25);
    });
    
    it('should return -100 when called with numbers -10 and 10', function() {
        expect(multiply.multiply(-10, 10)).to.be.equal(-100);
    });
});