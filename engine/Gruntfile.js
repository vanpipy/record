
module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    version: '<%= pkg.version %>',

    eslint: {
      src: {
        src: ['src/**/*.js']
      },
      build: {
        src: ['Gruntfile.js', 'build/**/*.js']
      }
    }

  });

  grunt.loadNpmTasks('grunt-eslint');

  require('./build/grunt-tasks/build')(grunt);

  grunt.registerTask('default', ['eslint']);
  grunt.registerTask('test', ['eslint']);
};
