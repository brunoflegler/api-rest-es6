'use strict'

import mongoose from 'mongoose'
import config from '../config.json'

let db

const DBConnectMongoose = () => {
	return new Promise(function (resolve, reject) {
		if (db) {
			return db
		}
		mongoose.Promise = global.Promise

		// database connect
		mongoose.connect('mongodb://' + config.db_config.host + ':' + config.db_config.port + '/' + config.db_config.name)
			.then(() => {
				resolve({ message: 'mongo connection created' })
			})
			.catch(() => {
				reject(reject({ message: 'mongo connection error' }))
			})
	})
}

export default DBConnectMongoose
