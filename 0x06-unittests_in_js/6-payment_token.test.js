const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with the correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            assert.deepStrictEqual(response, { data: 'Successful response from the API' });
            done();
        })
        .catch((error) => done(error));
    });

    it('should return undefined when success is false', (done) => {
        const result = getPaymentTokenFromAPI(false);
        assert.strictEqual(result, undefined);
        done();
    });
});