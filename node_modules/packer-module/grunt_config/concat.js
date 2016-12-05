module.exports = {
  concat: {
    module: {
      files: {
        'dist/app/module.js': [
          'src/app/*.js',
          'src/app/**/*.js'
        ],
        'dist/app/mocks.js' : [
          'src/mocks/*.js'
        ],
        'dist/css/module.css' : [
          'src/css/*.css'
        ]
      }
    }
  }
};