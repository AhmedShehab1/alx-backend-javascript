const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return 4', () => {
        assert.strictEqual(calculateNumber(1.4, 3.2), 4);
    });

    it('should return 5', () => {
        assert.strictEqual(calculateNumber(1.9, 3), 5);
    });

    it('should return 1', () => {
        assert.strictEqual(calculateNumber(0.9, 0.3), 1);
    });
});