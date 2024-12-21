const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    it('should return 4', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 5', () => {
        expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5);
    });

    it('should return 6', () => {
        expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
    });
});
    