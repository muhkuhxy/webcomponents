'use strict';

module.exports = function(grunt) {
   grunt.initConfig({
      watch: {
         bla: {
            files: '**/*'
         }
      },
      connect: {
         server: {
            options: {
               livereload: 43271,
               port: 9000,
               hostname: 'localhost'
            }
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-connect');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['connect', 'watch' ]);
};

