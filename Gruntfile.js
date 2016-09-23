module.exports = function (grunt) {

  var npmTasks = [
    'grunt-contrib-clean',
    'grunt-contrib-copy',
    'grunt-contrib-requirejs'
  ];

  grunt.initConfig({
    clean: {
      build: ['www-build', 'dist']
    },
    requirejs: {
      dist: {
        options: {
          appDir: 'www/',
          dir: 'dist/',
          optimize: 'none',
          mainConfigFile: 'www/require.config.js',
          modules: [
            {
              name: 'loader',
              include: [
                'angular',
                'ui-router',
                'q',
                'oclazyload',
                'text'
              ],
              optimize: 'uglify'
            },
            {
              name: 'main',
              exclude: ['loader']
            },
            {
              name: 'lazy',
              exclude: ['loader']
            }
          ]
        }
      }
    }
  });

  npmTasks.forEach(grunt.loadNpmTasks);

  grunt.registerTask('clear', ['clean:build']);
  grunt.registerTask('build', [
    'clean',
    // 'copy',
    'requirejs:dist'
  ]);
};