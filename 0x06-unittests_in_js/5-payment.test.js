const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');


describe('sendPaymentRequestToApi', () => {

    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('should call the console.log once with the sum of 100 and 20', () => {

        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;

    });

    it('should call the console.log once with the sum of 10 and 10', () => {

        sendPaymentRequestToApi(10, 10);

        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;

    });
});