module.exports = {
	build : [
		'bower',
		'jshint:all', 
		'concat:module',
		'uglify:module',
		'cssmin:module',
		'copy:module'
	]
};