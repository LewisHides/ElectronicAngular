/**
 * Created by R4nd0mJ0k3r on 28/08/2016.
 */

/**
 * Node Modules
 */

/**
 * Node Modules Location
 * @type {string}
 */
var nodeModules = './node_modules/'

//Angular JS
require(nodeModules+'angular/angular.js');
require(nodeModules+'/angular-ui-router/release/angular-ui-router.js');

/**
 * AngularJS App
 */
require('./app/require.js');