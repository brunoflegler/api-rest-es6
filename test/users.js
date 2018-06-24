import supertest from 'supertest'
import should from 'should'

var server = supertest.agent('http://localhost:3000')

describe('GET Users', () => {
	it('return all users', (done) => {
		server
			.get('/users')
			.expect('Content-type', /json/)
			.expect(200)
			.end((err, res) => {
				res.status.should.equal(200)
				done()
			})
	})
})

/**
 * Teste da rota: /POST
 */
describe('/POST users', function () {
	it('save the user', function (done) {
		const user = {
			username : 'luana.effgen'
		}
		server
			.post('/users')
			.send(user)
			.expect('Content-type', /json/)
			.expect(200)
			.end((err, res) => {
				res.status.should.equal(200)
				res.body.username.should.equal(user.username)
				done()
			})
	})
})
