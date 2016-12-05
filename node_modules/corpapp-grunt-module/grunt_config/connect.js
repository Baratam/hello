module.exports = {
	connect: {
		module: {
			options: {
				port: 3000,
				base: [
					'bower_components',
					'dist',
					'run'
				]
			}
		}
	}
};
