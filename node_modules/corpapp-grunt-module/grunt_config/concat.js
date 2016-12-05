module.exports = {
  concat: {
    module: {
      files: {
        'dist/module.js': [
          'src/app/*.js',
          'src/app/**/*.js'
        ],
        'dist/mocks.js' : [
          'src/mocks/*.js'
        ],
        'dist/module.css' : [
          'src/css/*.css'
        ]
      }
    }
  }
};