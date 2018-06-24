import jwt from 'jwt-simple'
import moment from 'moment'
import config from '../config.json'
import * as myjwt from './token-jwt'


export default function ensureAuthenticated(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Expose-Headers', 'X-Client-Authorization')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')

	if (!req.header('Authorization')) {
		return res.status(401).send({ message: 'Please make sure your request has an Authorization header' })
	}

	const token = req.header('Authorization')
	let payload = {}
	try {
		payload = jwt.decode(token, config.oauth.TOKEN_SECRET)
	} catch (err) {
		return res.status(401).send({ message: err.message })
	}

	if (payload.exp <= moment().valueOf()) {
		return res.status(408).send({ message: 'Token has expired' })
	}

	// Usuario.findById(payload.sub).then((user) => {
	//   if (user.inativo) {
	//     return res.status(401).send({ message: 'User was locked' })
	//   }
	// })

	if (!payload.ref) {
		myjwt.token(payload.sub, config.oauth.TOKEN_SECRET_EXPIRE, payload.ref)
			.then((hash) => {
				res.set('X-Client-Authorization', hash)
				req.user = payload.sub
				next()
			})
	}
}
