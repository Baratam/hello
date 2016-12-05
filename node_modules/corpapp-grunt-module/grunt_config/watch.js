module.exports = {
	watch: {
		module: {
			files: [
				'src/*',
				'src/**/*',
				'run/*'
			],
			tasks: [
				'build'
			],
			options: {
				spawn: false
			}
		}
	}
}