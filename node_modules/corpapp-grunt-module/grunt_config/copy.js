module.exports = {
   copy: {
		module: {
			expand: true,
			cwd: 'src/',
			src: [
				'views/**',
				'images/**',
				'fonts/**'
			],
			dest: 'dist/',
		}
    }
};