/**
 * Created by R4nd0mJ0k3r on 28/08/2016.
 */

/**
 * Require AngularJS
 */
require('../node_modules/angular/angular.js');
require('../node_modules/angular-ui-router/release/angular-ui-router.js');

//App Location Constants
APP = './app/';
APP_TEMPLATES = APP+'templates/';
APP_MODULES = APP+'modules/';

CONTROLLERS = './controllers/'

/**
 * Require AngularJS App Files
 */
require('./app.js');
require('./config.route.js');

require(CONTROLLERS+'main.js');

var requireModule = function(moduleName){
    require('./modules/'+moduleName+'/require.js');
}

requireModule('baseModule');
