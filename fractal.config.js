'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Maps prototyping');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/dist');

/* Specify a directory for the build */
fractal.web.set('builder.dest', __dirname + '/build');
