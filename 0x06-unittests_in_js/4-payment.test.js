const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
        
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

        sendPaymentRequestToApi(100, 20);

        expect(stub.calledOnce).to.be.true;
        expect(stub.calledWithExactly('SUM', 100, 20)).to.be.true;
        
        stub.restore();

    });
});