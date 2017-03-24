module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Tasks
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'public/stylesheets/sass',
          src: ['**/*.scss'],
          dest: 'public/stylesheets',
          ext: '.css'
        }]
      }
    },
    postcss: {
      options: {
        map: false,
        processor: [
          require('autoprefixer')({
            browsers: [
              'Android 2.3',
              'Android >= 4',
              'Chrome >= 20',
              'Firefox >= 24',
              'Explorer >= 8',
              'iOS >= 6',
              'Opera >= 12',
              'Safari >= 6'
            ]
          })
        ]
      },
      dist: {
        src: 'public/stylesheets/main.css'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'public/stylesheets',
          src: ['*.css', '!*.min.css'],
          dest: 'public/stylesheets',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      build: {
        src: ['public/scripts/dev/*.js'],
        dest: 'public/scripts/script.min.js',
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss', 'cssmin']
      },
      js: {
        files: '**/*.js',
        tasks: ['uglify']
      }
    }
  });

  // Load Grunt Plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Grunt tasks
  grunt.registerTask('default', ['watch']);
};
