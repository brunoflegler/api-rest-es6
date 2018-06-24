import * as domain from '../domain/users'

export const create = (req, res) => {
	const body = req.body
	domain.create(body)
		.then((user) => {
			res.send(user)
		})
		.catch((err) => {
			res.status(400).send(err)
		})
}


export const findById = (req, res) => {
	const id = req.params.id

	domain.findById(id)
		.then((user) => {
			res.send(user)
		})
		.catch((err) => {
			res.status(404).send(err)
		})
}

export const find = (req, res) => {
	domain.find()
		.then((users) => {
			res.send(users)
		})
		.catch((err) => {
			res.status(400).send(err)
		})
}

export const remove = (req, res) => {
	const id = req.params.id
	domain.remove(id)
		.then((docs) => {
			res.status(200).send(docs)
		})
		.catch((err) => {
			res.status(400).send(err)
		})
}

export const authenticate = (req, res) => {
	domain.authenticate(req.body)
		.then((token) => {
			res.status(200).send(token)
		})
		.catch((err) => {
			if (err.type === 'bloked') res.status(401).send(err)
			if (err.type === 'unknown') res.status(400).send(err)
			else
				res.status(400).send(err)
		})
}
