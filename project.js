'use strict';

const path = require('path');

let _path = (file) => {
	return path.join(process.cwd(), file);
}

module.exports = {
	path: _path
}