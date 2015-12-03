'use strict';
var path = require('path');

module.exports = function (grunt) {
    grunt.registerMultiTask('livestyle', 'Generate a style guide using kss-node.', function () {
        var done = this.async();

        var taskCount = this.files.length;

        this.files.forEach(function (file) {
            var options = this.options({
                template: path.dirname(require.resolve('kss/generator/handlebars/template')),
                helpers: [],
                mask: null,
                custom: null,
                css: null,
                js: null
            });

            var generator;

            options.source = file.src;
            options.destination = file.dest;
            // Load the template's generator.
            try {
                generator = require(options.template).generator;
            } catch (err) {
                // Templates don't have to load their own generator. If the template fails to
                // load a generator, we assume it wanted the default generator.
                generator = require('kss/generator/handlebars');
            }

            // Confirm this is a compatible generator.
            generator.checkGenerator();

            // Initialize the generator.
            generator.init(options);

            generator.parse(function () {
                generator.generate.apply(generator, arguments);
                if (--taskCount === 0) done();
            });
        }, this);
    });
};
