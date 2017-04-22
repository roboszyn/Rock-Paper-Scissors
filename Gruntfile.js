module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/style.css': 'sass/style.sass'
  			}
  		}
  	},
  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'images/build/'
  			}]
  		}
  	},
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/*.css',
          ]
        },
        options: {
          watchTask: true,
            server: {
              baseDir: './'
            }
          }
       }
    },
    watch: {
      scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
      } 
    },
  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  
  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};