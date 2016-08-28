/**
 * Created by R4nd0mJ0k3r on 28/08/2016.
 */

/**
 * Application Settings
 */

//App Location Constants
APP = './app/';
APP_TEMPLATES = APP+'templates/';
CONTROLLERS = './controllers/'

/**
 * Require AngularJS App Files
 */
require('./app.js');
require('./config.route.js');
require(CONTROLLERS+'main.js');

/**
 * Require Modules
 */

APP_MODULES = APP+'modules/';

/**
 * Require Module Function
 * @param moduleName
 */
var requireModule = function(moduleName){
    require('./modules/'+moduleName+'/require.js');
}

requireModule('baseModule');
