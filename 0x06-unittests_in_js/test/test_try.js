const request = require('supertest');
const app = require('../try');

describe('Integration Test Example', () => {
	it('should respond with Hello', (done) => {
		request(app)
		.get('/')
		.expect(200)
		.expect('Hello', done);
	});

});
