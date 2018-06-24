'use strict'

import * as users from './users'
import ensureAuthenticated from '../functions/ensure-authenticated'


export const assign = (app) => {
	app.post('/users', ensureAuthenticated, users.create)
	/**
	 * @api {get} /users/:id Find a user
	 * @apiGroup User
	 * @apiParam {id} id User id
	 * @apiSuccess {String} _id User id
	 * @apiSuccess {String} username User username
	 * @apiSuccess {String} password User password crypt
	 * @apiSuccess {Boolean} bloked User is bloked?
	 * @apiSuccess {Number} __v Version document
	 * @apiSuccessExample {json} Success
	 *    HTTP/1.1 200 OK
	 *    {
	 *      "_id": 1,
	 *      "username": "bruno.dalcol",
	 *      "password": "asdknasdknfasndfasdf"
	 *      "blocked": false,
	 *      "__v": 0
	 *    }
	 * @apiErrorExample {json} User not found
	 *    HTTP/1.1 404 Not Found
	 * @apiErrorExample {json} Find error
	 *    HTTP/1.1 500 Internal Server Error
	*/
	app.get('/users/:id', ensureAuthenticated, users.findById)
	app.get('/users', ensureAuthenticated, users.find)
	app.delete('/users/:id', ensureAuthenticated, users.remove)
	app.post('/oauth/login', users.authenticate)
}
