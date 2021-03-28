var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with hey Nicole', function(done) {
 //navigate to root and check the the response is "hey Nicole"
 request(app).get('/').expect('hey Nicole', done);
 });
});
