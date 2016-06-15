/**
 * Created by matthill on 21/05/16.
 */

import routeConfig from './entry.routes.js';
import entryController from './entry.controller.js';

let moduleName = 'design.entry';

angular.module( moduleName, [] )
    .config( routeConfig )
    .run( function ($log) {
        $log.debug( moduleName + ' - run' );
    } )
    .controller( 'entryController', entryController );

export default moduleName;