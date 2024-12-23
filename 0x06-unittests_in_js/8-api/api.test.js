const request = require('request');
const { expect } = require('chai');


describe('Index page', () => {
    const url = 'http://localhost:7865';

    it('should return 200 status code', (done) => {
        request(url, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done()
        });
    });

    it('should return "Welcome to the payment system" message', (done) => {
        request(url, (err, res, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    it('should have Content-Type text/html', (done) => {
        request(url, (err, res, body) => {
            expect(res.headers['content-type']).to.include('text/html');
            done();
        });
    });
});