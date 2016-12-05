module.exports = function(grunt) {

	grunt.config("concat", {
		app: {
			files: {
				'dist/app.js': [
					'src/app/*.js',
					'src/app/**/*.js',
					'bower_components/**/dist/module.js',
					'bower_components/**/dist/mocks.js',
					'bower_components/**/dist/app/module.js',
					'bower_components/**/dist/app/mocks.js'
				],
				'dist/app.css' : [
					'bower_components/**/dist/module.css',
					'bower_components/**/dist/css/module.css',
					'src/css/*.css'
				]
			}
		}
	});

	grunt.config("copy", {
		lib: {
			expand: true,
			cwd: 'bower_components',
			src: [
				'angular*/*.js',
				'bootstrap/dist/** ',
				'jquery/dist/**',
				'ngAutocomplete/src/**',
				'ngCordova/dist/**',
				'mobile-angular-ui/dist/**'

			], 
			dest: 'dist/lib', 
			filter: 'isFile'
		},
		phone: {
			expand: true,
			cwd: 'src',
			src: [
				'config.xml',
				'icon.png',
				'res/**'
			], 
			dest: 'dist'
		},
		www: {
			expand: true,
			cwd: 'dist',
			src: [
				'**',
			], 
			dest: 'www'
		}
	});

	grunt.config("connect", {
		www: {
			options: {
				port: 3000,
				base: 'www',
				keepalive: true
		    }
		}
	});

	require('corpapp-grunt-app')(grunt);
	require('corpapp-grunt-module')(grunt);

	grunt.registerTask('default', [
		'build',
		'integrate',
		'copy:lib'
	]);

	grunt.registerTask('run', [
		'build',
		'integrate',
		'copy:lib',
		'connect:module',
		'watch'
	]);
	
	grunt.registerTask('dev', [
		'build',
		'integrate',
		'copy:lib',
		'connect:app',
		'hub'
	]);

	grunt.registerTask('phone', [
		'build',
		'integrate',
		'copy:lib',
		'copy:phone',
		'copy:www',
		'connect:www'
	]);

};	