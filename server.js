'use strict'

import express from 'express'
import bodyparser from 'body-parser'
import DBConnectMongoose from './tools/db_tools'
import * as routes from './routes/routes'
const app = express()

DBConnectMongoose().then(() => {

	// configure app to use bodyParser()
	// this will let us get the data from a POST
	app.use(bodyparser.urlencoded({ extended: true }))
	app.use(bodyparser.json({ limit: '10mb' }))
	app.use(express.static('public'))

	//configure routes
	routes.assign(app)

	const port = process.env.PORT || 3000,
		ip = process.env.IP || '0.0.0.0'

	app.listen(port, ip)
	console.log('Server listening on port 3000')

}).catch((err) => {
	console.log('Error: ' + err)
})


