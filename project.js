const path = require('path');

var _path = (file) => {
	return path.join(process.cwd(), file);
}

module.exports = {
	path: _path
}