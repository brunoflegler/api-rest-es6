'use strict'

import * as users from './users'
import ensureAuthenticated from '../functions/ensure-authenticated'


export const assign = (app) => {

	/**
	 * @api {post} /oauth/login Authenticate a user
	 * @apiGroup Login
	 * @apiExample Example usage:
	 * endpoint: https://api-rest-model.herokuapp.com/oauth/login
	 * body:
	 *    {
	 *      "username": "bruno.dalcol",
	 *      "password": "123456"
	 *      "blocked": false,
	 *    }
	 * @apiSuccess {String} token User token
	 * @apiSuccessExample {json} Success
	 *    HTTP/1.1 200 OK
	 *    {
	 *      "token": "maoiina´bdjba´sdfasd484asdf5as45454a54sd5fa454sd81asdd8sd",
	 *    }
	 * @apiErrorExample {json} User not found
	 *    HTTP/1.1 404 Not Found
	 * @apiErrorExample {json} Find error
	 *    HTTP/1.1 500 Internal Server Error
	*/

	app.post('/oauth/login', users.authenticate)

	/**
	 * @api {get} /users/:id Find a user
	 * @apiGroup User
	 * @apiParam {Strings} id User id
	 * @apiHeader (Header) {String} Authorization Token authentication value.
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
	 * @apiErrorExample {json} Unauthorized
	 * 		HTTP/1.1 401 Unauthorized
	 * @apiErrorExample {json} Request Timeout
	 * 		HTTP/1.1 408 Token has expired
	*/
	app.get('/users/:id', ensureAuthenticated, users.findById)
	/**
	 * @api {get} /users Find all users
	 * @apiGroup User
	 * @apiHeader (Header) {String} Authorization Token authentication value.
	 * @apiSuccess {String} _id User id
	 * @apiSuccess {String} username User username
	 * @apiSuccess {String} password User password crypt
	 * @apiSuccess {Boolean} bloked User is bloked?
	 * @apiSuccess {Number} __v Version document
	 * @apiSuccessExample {json} Success
	 *    HTTP/1.1 200 OK
	 *    [{
	 *      "_id": 1,
	 *      "username": "bruno.dalcol",
	 *      "password": "asdknasdknfasndfasdf"
	 *      "blocked": false,
	 *      "__v": 0
	 *    }]
	 * @apiErrorExample {json} User not found
	 *    HTTP/1.1 404 Not Found
	 * @apiErrorExample {json} Find error
	 *    HTTP/1.1 500 Internal Server Error
	 * @apiErrorExample {json} Unauthorized
	 * 		HTTP/1.1 401 Unauthorized
	 * @apiErrorExample {json} Request Timeout
	 * 		HTTP/1.1 408 Token has expired
	*/
	app.get('/users', ensureAuthenticated, users.find)
	/**
	 * @api {post} /users Create a user
	 * @apiGroup User
	 * @apiHeader (Header) {String} Authorization Token authentication value.
	 * @apiExample Example usage:
	 * endpoint: https://api-rest-model.herokuapp.com/users
	 * body:
	 *    {
	 *      "username": "bruno.dalcol",
	 *      "password": "aoasnasknasñaãsodbfa~sdfib"
	 *      "blocked": false,
	 *    }
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
	 *      "password": "123456"
	 *      "blocked": false,
	 *      "__v": 0
	 *    }
	 * @apiErrorExample {json} User not found
	 *    HTTP/1.1 404 Not Found
	 * @apiErrorExample {json} Find error
	 *    HTTP/1.1 500 Internal Server Error
	 * @apiErrorExample {json} Unauthorized
	 * 		HTTP/1.1 401 Unauthorized
	 * @apiErrorExample {json} Request Timeout
	 * 		HTTP/1.1 408 Token has expired
	*/
	app.post('/users', ensureAuthenticated, users.create)
	/**
	 * @api {delete} /users Delete a user
	 * @apiGroup User
	 * @apiHeader (Header) {String} Authorization Token authentication value.
	 * @apiSuccessExample {json} Success
	 *    HTTP/1.1 200 OK
	 *    {
	 *      s"message" : "User removed successfully"
	 *    }
	 * @apiErrorExample {json} User not found
	 *    HTTP/1.1 404 Not Found
	 * @apiErrorExample {json} Find error
	 *    HTTP/1.1 500 Internal Server Error
	 * @apiErrorExample {json} Unauthorized
	 * 		HTTP/1.1 401 Unauthorized
	 * @apiErrorExample {json} Request Timeout
	 * 		HTTP/1.1 408 Token has expired
	*/
	app.delete('/users/:id', ensureAuthenticated, users.remove)

}
