import jwt from 'jwt-simple'
import config from '../config.json'
import moment from 'moment'

export const token = (id, exp, ref) => {
	return new Promise((resolve, reject) => {
		const payload = {
			sub: id,
			ref: ref,
			iat: moment().valueOf(),
			exp: moment().add(exp, 'ms').valueOf()
		}

		const hash = jwt.encode(payload, config.oauth.TOKEN_SECRET)

		if (hash != null)
			resolve(hash)
		else
			reject({ message: 'jwt encode error' })
	})
}
