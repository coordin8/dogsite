module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: ['./build/js/scripts.js'],
        dest: './build/js/scripts.min.js'
      }
    },

    sass: {
      options: {
        sourceMap: false,
        style: 'compressed'
        ,includePaths: require('node-bourbon').includePaths
      },
      dist: {
        files: {
          'build/css/style.css': 'css/style.scss'
        }
      },
    },

    copy: {
      main: {
        files: [
        {expand: true, src: ['*.html'], dest: 'build/'},
        {expand: true, src: ['favicon*'], dest: 'build/'},
        {expand: true, src: ['browserconfig.xml'], dest: 'build/'},
        {expand: true, src: ['images/*'], dest: 'build/'},
        {expand: true, src: ['fonts/*.*'], dest: 'build/'},
        {expand: true, src: ['data/*'], dest: 'build/'},
        {expand: true, src: ['css/img/*'], dest: 'build/'},
        ],
      },
    },

    watch: {
      sass: {
        files: [ './css/*.scss' ],
        tasks: ['sass']
      },
      js: {
        files: ['./js/third_party/*.js','./js/*.js'],
        tasks: ['import'],
      },
      data: {
        files: ['./data/*'],
        tasks: ['copy']
      },
      images: {
        files: ['./images/*','./css/img/*'] ,
        tasks: ['copy']
      },
      copy: {
        files: ['./*.html'],
        tasks: ['copy'],
      },
      options: {
        livereload: true
      }
    },

    connect: {
      server: {
        options: {
          livereload: true,
          base: 'build/',
          port: 3000
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: './',
          src: ['./images/*.{png,jpg,gif}'],
          dest: './build/'
        }]
      }
    },

    import: {
      options: {},
      dist: {
       src: './js/scripts.js',
       dest: './build/js/scripts.js',
     }

    },

   });

// Load Plugins Here.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-import');


  // Default task(s).
  grunt.registerTask('default', ['sass', 'import', 'uglify', 'copy', 'imagemin']);
  grunt.registerTask('build',   ['sass', 'import', 'uglify', 'copy', 'imagemin']);
  grunt.registerTask('dev', ['connect', 'watch']);

};