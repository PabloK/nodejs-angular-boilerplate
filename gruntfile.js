var fs = require('fs');
module.exports = function(grunt) {
  grunt.config.set('watch', {
    client: {
      // Assets to watch
      files: ['jssrc/**/*'],
      // When assets are changed run the following
      tasks: ['build']
    },
    test: {
      files: ['test/**/*','jssrc/**/*'],
      // When assets are changed run the following
      tasks: ['test']
    }
  });

  grunt.config.set('browserify', {
    // When something changes rebundle the game
    app: {
      src: ['jssrc/app.js'],
      dest: 'public/js/bundle.js',
      options: {
        options: {
          transform: ['browserify-shim']
        },
        watch: true,
        browserifyOptions: {
          debug: false
        }
      }
    }
  });

  grunt.config.set('nodemon',{
    start: {
      script: 'app.js',
      watch: ['app.js'],
    }
  });

  grunt.registerTask('test', function() {
    // Wait until the done method is called.
    var done = this.async();

    var child = grunt.util.spawn({
      cmd: 'mocha',
      args: ['--reporter', 'spec', 'test']
    }, function(err, stdout, stderr) {
      done();
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  });

  // Run watcher and http-server concurrently
  grunt.config.set('concurrent',{
    target: {
      tasks: [['build'], 'nodemon:start','watch:client', 'watch:test'],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  grunt.registerTask('build', ['browserify']);
  // Build and then Start the server and the watcher.
  grunt.registerTask('default', ['concurrent']);

  // Imported tasks
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.option('force', true);
};
