module.exports = {
	watch: {
		module: {
			files: [
				'src/*',
				'src/**/*',
				'run/*'
			],
			tasks: [
				'module'
			],
			options: {
				spawn: false
			}
		}
	}
}