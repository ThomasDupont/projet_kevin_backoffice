const CONF = require('./../../../config/conf');

/**
 * Main controller class
 */
class MainController {

	constructor () {
		/*
		convert Groupe_10.png -define histogram:unique-colors=true -colors 4 -format %c  histogram:info:-

		     51920: ( 50, 77, 92,255) #324D5CFF srgba(50,77,92,0.999793)
			 43756: ( 70,178,157,255) #46B29DFF srgba(70,178,157,1)
			 66274: (236, 89, 75,255) #EC594BFF srgba(236,89,75,0.999991)
			 57186: (240,202, 77,255) #F0CA4DFF srgba(240,202,77,1)
		 */
	}
	mainAction(req) {
		return { status: 'ok', message: 'api ok', statusCode: 200 };
	}
}

module.exports = new MainController();

