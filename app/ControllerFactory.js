
const fs = require('fs');
const path = require('path');

const controller = {};

function readRecursive(dir) {
	const files = fs.readdirSync(dir);
	files.forEach((file) => {
		if (fs.statSync(dir + file).isDirectory()) {
			readRecursive(`${dir + file}/`);
		} else if (file.indexOf('Controller') !== -1) {
			file = file.split('.')[0];
			controller[file] = require(dir + file);
		}
	});
}

readRecursive(path.join(__dirname , '../src/'));

class ControllerFactory {
	init(controller, method, req) {
		return controller[`${controller}Controller`][`${method}Action`](req);
	}
}

module.exports = new ControllerFactory();
