# grunt-kssgen
KSS styleguide generator for grunt. - Alternative to grunt-kss since it is dead

[![Build Status](https://secure.travis-ci.org/disqus/grunt-kssgen.svg?branch=master)](http://travis-ci.org/disqus/grunt-kssgen)
[![NPM version](https://badge.fury.io/js/grunt-kssgen.svg)](http://badge.fury.io/js/grunt-kssgen)
[![Dependency Status](https://david-dm.org/disqus/grunt-kssgen.svg)](https://david-dm.org/disqus/grunt-kssgen)

> KSS styleguide generator for Grunt.

## Getting Started
This plugin requires Grunt `~0.4.x`

```shell
npm install grunt-kssgen --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-kssgen');
```

## The "kssgen" config and an example task

### Overview
To set up the kssgen config, add a section named `kssgen` to the data object passed into `grunt.initConfig()`, in your project's Gruntfile.

```js
grunt.initConfig({
  kssgen: {
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
  'kssgen'
  // Add other tasks here if needed
]);
```

Finally, you can call kssgen by running `grunt styleguide` (or directly by `grunt kssgen`).

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
