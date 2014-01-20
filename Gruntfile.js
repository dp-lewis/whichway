module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jasmine: {
            pivotal: {
                src: 'src/**/*.js',
                options: {
                    specs: 'spec/*spec.js'
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
        },
        release: {
            options: {
                file: 'bower.json', //default: package.json
                push: false
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-release');

    // Default task(s).
    grunt.registerTask('default', ['jasmine']);
    grunt.registerTask('test', ['jshint', 'jasmine']);

};