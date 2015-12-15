
module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    version: '<%= pkg.version %>',

    eslint: {
      src: {
        src: ['src/**/*.js']
      }
    }

  });

  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['eslint']);
  grunt.registerTask('test', ['eslint']);
};
