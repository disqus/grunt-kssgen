# grunt-livestyle
KSS styleguide generator for grunt. - Alternative to grunt-kss since it is dead

[![Build Status](https://secure.travis-ci.org/disqus/grunt-livestyle.svg?branch=master)](http://travis-ci.org/disqus/grunt-livestyle)
[![NPM version](https://badge.fury.io/js/grunt-kss.svg)](http://badge.fury.io/js/grunt-kss)
[![Dependency Status](https://david-dm.org/disqus/grunt-livestyle.svg)](https://david-dm.org/disqus/grunt-livestyle)

> KSS styleguide generator for Grunt.

## Getting Started
This plugin requires Grunt `~0.4.x`

```shell
npm install grunt-kss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-kss');
```

## The "livestyle" config and an example task

### Overview
To set up the livestyle config, add a section named `livestyle` to the data object passed into `grunt.initConfig()`, in your project's Gruntfile.

```js
grunt.initConfig({
  livestyle: {
    options: {
      css: '/path/to/style.css',
    },
    dist: {
        files: {
          '/path/to/destdir': ['/path/to/sourcedir']
       }
    }
  }
});
```

Then, once you've added the config information above, you can add the kss build step to an existing task (not shown) or can create your own task. Here is an example task that you can create:

```js
grunt.registerTask('styleguide', [
  // Add other tasks here if needed
  'livestyle'
  // Add other tasks here if needed
]);
```

Finally, you can call livestyle by running `grunt styleguide` (or directly by `grunt livestyle`).

### Options

#### options.template
Type: `String`
Default value: `generator/handlebars/template` (KSS default)

A string value that is used to use a custom template to build your styleguide.

#### options.helpers
Type: `Array`
Default value: `[]`

Specify the location of custom handlebars helpers; see http://bit.ly/kss-helpers

#### options.mask
Type: `String`
Default value: `null`

A string value that is used to use a custom mask for detecting stylesheets.

#### options.custom
Type: `String`
Default value: `null`

A string value that is used to use a custom property name when parsing KSS comments.

#### options.css
Type: `String`
Default value: `null`

A string value that is used to use including a CSS stylesheet for your styleguide.

#### options.js
Type: `String`
Default value: `null`

A string value that is used to use including a JavaScript file for your styleguide.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
