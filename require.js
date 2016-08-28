/**
 * Created by R4nd0mJ0k3r on 28/08/2016.
 */

//Electron Renderer
require('./renderer.js')

/**
 * Node Modules
 */

/**
 * Node Modules Location
 * @type {string}
 */
var nodeModules = './node_modules/'

var requireModule = function(moduleLocation){
    require(nodeModules+moduleLocation);
}

//Angular JS
requireModule('angular/angular.js');
requireModule('angular-ui-router/release/angular-ui-router.js');

/**
 * AngularJS App
 */
require('./app/require.js');