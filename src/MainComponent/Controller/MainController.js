const CONF = require('./../../../config/conf');
const Response = require('../../../app/Response');

/**
 * Main controller class
 */
class MainController {
	static mainAction(req) {
        return new Response(false, 400, { message: 'api ok' });
	}

    static importAction(req) {
        /*
		convert Groupe_10.png -define histogram:unique-colors=true -colors 4 -format %c  histogram:info:-

		     51920: ( 50, 77, 92,255) #324D5CFF srgba(50,77,92,0.999793)
			 43756: ( 70,178,157,255) #46B29DFF srgba(70,178,157,1)
			 66274: (236, 89, 75,255) #EC594BFF srgba(236,89,75,0.999991)
			 57186: (240,202, 77,255) #F0CA4DFF srgba(240,202,77,1)
		 */
    }
}

module.exports = new MainController();

