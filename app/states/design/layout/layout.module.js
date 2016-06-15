/**
 * Created by matthill on 21/05/16.
 */

import routeConfig from './layout.routes.js';
import layoutController from './layout.controller.js';

let moduleName = 'design.layout';

angular.module( moduleName, [] )
    .config( routeConfig )
    .run( function ($log) {
        $log.debug( moduleName + ' - run' );
    } )
    .controller( 'layoutController', layoutController );

export default moduleName;