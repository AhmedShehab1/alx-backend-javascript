const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
        
        const spy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        expect(spy.calledOnce).to.be.true;

        expect(spy.calledWithExactly('SUM', 100, 20)).to.be.true;

        spy.restore();
    });
});