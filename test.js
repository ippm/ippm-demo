var System = require('ippm-systemjs').default;

System.config({
	ippm: {
		baseURL: 'http://127.0.0.1:8081/ipfs/',
	},
});

System.init()
	.then(() => System.import('./test2'))
	.then(m => {
		console.log("test2.js: " + m);
	})
	.catch(e => {
		console.error(e.stack);
	});
