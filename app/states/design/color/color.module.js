/**
 * Created by matthill on 21/05/16.
 */

import routeConfig from './color.routes.js';
import colorController from './color.controller.js';

let moduleName = 'design.color';

angular.module( moduleName, [] )
    .config( routeConfig )
    .run( function ($log) {
        $log.debug( moduleName + ' - run' );
    } )
    .controller( 'colorController', colorController );

export default moduleName;