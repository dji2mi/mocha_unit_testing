const Calculator = require('./../../app/Calculator');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('plus', function() {
    let plus;

    beforeEach(() => {
        plus = new Calculator();
    });

    afterEach(() => {
        plus = null;
    });

    it('should return 25 when called with numbers 10 and 15', function() {
        expect(plus.plus(10,15)).to.be.equal(25);
    });

    it('should return 0 when called with numbers 0 and 0', function() {
        expect(plus.plus(0, 0)).to.be.equal(0);
    });

    it('should return 5 when called with numbers -10 and 15', function() {
        expect(plus.plus(-10, 15)).to.be.equal(5);
    });

});