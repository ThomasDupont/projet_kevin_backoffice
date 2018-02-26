require('dotenv').config();

const express = require('express');

const app = express();
const CONF = require('./config/conf');
const controllerFactory = require('./app/ControllerFactory');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/**
 * Main class
 *
 * @author Thomas Dupont
 */
class Main {
	constructor() {
		app.use(bodyParser.urlencoded({ extended: false }));
		// parse application/json
		app.use(bodyParser.json());
		app.use((req, res, next) => {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
			res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
			// Set to true if you need the website to include cookies in the requests sent
			// to the API (e.g. in case you use sessions)
			res.setHeader('Access-Control-Allow-Credentials', true);
			// Pass to next layer of middleware
			next();
		});

		mongoose.connect(process.env.MONGODB_URI, {
			promiseLibrary: global.Promise,
		});
		mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

		app.use(require('forest-express-mongoose').init({
			modelsDir: `${__dirname}/src/DocumentComponent/Model`, // Your models directory.
			envSecret: process.env.FOREST_ENV_SECRET,
			authSecret: process.env.FOREST_AUTH_SECRET,
			mongoose: require('mongoose'), // The mongoose database connection.
		}));

		this.initRouter();

		app.listen(process.env.PORT || 3000, () => {
			console.log('launched');
		});
	}

	initRouter() {
		app.get(CONF.APIURL, (req, res) => {
			this.render('Main', 'main', req, res);
		});
	}

	/**
     *
     * @param c Controller
     * @param m Method
     * @param req The request
     * @param res The reponse event
     */
	async render(c, m, req, res) {
		const result = await controllerFactory.init(c, m, req);
		res.status(result.statusCode);
		res.send(result);
	}
}

new Main();

module.exports = app;
