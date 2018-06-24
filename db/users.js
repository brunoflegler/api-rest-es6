'use strict'

import mongoose from 'mongoose'

const schema = new mongoose.Schema({
	username: String,
	password: String,
	blocked : Boolean
})

export const User = mongoose.model('user', schema)

export const save = (data) => {
	const user = new User(data)
	return new Promise( (resolve, reject) => {
		user.save()
			.then((user) => {
				console.log('User saved!')
				resolve(user)
			})
			.catch((err) => {
				console.log('Error saving user: ' + err)
				reject(err)
			})
	})
}

export const findById = (id) => {
	return new Promise( (resolve, reject) => {
		User.findById(id)
			.then((user) => {
				if (!user) reject({ msg: 'user not found' })
				resolve(user)
			})
			.catch((err) => {
				console.log('Error user not found: ' + err)
				reject(err)
			})
	})
}

export const find = () => {
	return new Promise( (resolve, reject) => {
		User.find({})
			.then((users) => {
				resolve(users)
			})
			.catch((err) => {
				reject(err)
			})
	})
}


export const remove = (id) => {
	return new Promise((resolve, reject) => {
		User.remove({ _id: id })
			.then((docs) => {
				resolve(docs)
			})
			.catch((err) => {
				console.log('error', err)
				reject(err)
			})
	})
}

export const findByWhere = (where) => {
	return new Promise( (resolve, reject) => {
		User.findOne(where)
			.then((user) => {
				resolve(user)
			})
			.catch((err) => {
				reject(err)
			})
	})
}
