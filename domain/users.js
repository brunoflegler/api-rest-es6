import * as usersDB from '../db/users'
import config from '../config.json'
import bcrypt from 'bcrypt'
import * as myjwt from '../functions/token-jwt'


export const create = (data) => {
	return new Promise((resolve, reject) => {
		bcrypt.hash(data.password, 10, function (err, hash) {
			const userByCrypt = {
				username: data.username,
				password: hash,
				blocked: false
			}
			usersDB.save(userByCrypt)
				.then((user) => {
					resolve(user)
				})
				.catch(err => {
					reject(err)
				})
		})

	})
}

export const findById = (id) => {
	return new Promise((resolve, reject) => {
		usersDB.findById(id)
			.then((user) => {
				resolve(user)
			})
			.catch(err => {
				reject(err)
			})
	})
}

export const find = () => {
	return new Promise((resolve, reject) => {
		usersDB.find()
			.then((users) => {
				resolve(users)
			})
			.catch(err => {
				reject(err)
			})
	})
}

export const remove = (id) => {
	return new Promise((resolve, reject) => {
		usersDB.remove(id)
			.then((res) => {
				resolve(res)
			})
			.catch(err => {
				reject(err)
			})
	})
}

export const authenticate = (body) => {
	return new Promise((resolve, reject) => {
		const where = {
			username: body.username
		}
		usersDB.findByWhere(where)
			.then((user) => {

				if (user.blocked) {
					reject({ message: 'User was locked', type: 'blocked' })
				}

				bcrypt.compare(body.password, user.password).then((isMatch) => {
					if (isMatch) {
						const exp = body.remember ? config.oauth.TOKEN_SECRET_NOT_EXPIRE : config.oauth.TOKEN_SECRET_EXPIRE

						myjwt.token(user._id, exp, body.remember)
							.then((hash) => {
								resolve({ token: hash })
							})

					} else {
						reject({ message: 'User not found', type: 'unknown' })
					}
				})
			})
			.catch(err => {
				reject(err)
			})
	})
}
