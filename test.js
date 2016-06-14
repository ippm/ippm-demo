var System = require('ippm-systemjs').default;

System.init()
	.then(() => System.import('./test2'))
	.then(m => {
		console.log("test2.js: " + m);
	})
	.catch(e => {
		console.log(System);
		console.error(e);
	});
