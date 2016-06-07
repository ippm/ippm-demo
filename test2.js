const c = require('js-utils');

const add = c.toAsync((a, b, cb) => {
	cb(null, a + b);
});

add(40, 2).then(a => {
	console.log(a);
});
