/**
 * Created by R4nd0mJ0k3r on 28/08/2016.
 */

//Electron Renderer
require('./renderer.js')

global.jQuery = require('jquery');
require('bootstrap');
require('angular');
require('angular-ui-router');

/**
 * AngularJS App
 */
require('./app/require.js');

