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

describe('GET /cart/:id', () => {
    const baseUrl = 'http://localhost:7865';

    it('should return 200 status code and correct content when id is a number', (done) => {
        request(`${baseUrl}/cart/12`, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('should return 404 status code when id is not a number', (done) => {
        request(`${baseUrl}/cart/abc`, (err, res, body) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });

});