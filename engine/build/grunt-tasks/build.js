
module.exports = function(grunt){
  grunt.registerTask('build', function(){

    var done = this.async();
    var webpack = require('webpack');
    var webpackConfig = require('../webpack.build.config');

    webpack(webpackConfig, function(err, stats){
      console.log('in')
    });

  });

};
