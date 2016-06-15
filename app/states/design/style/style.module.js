/**
 * Created by matthill on 21/05/16.
 */

import routeConfig from './style.routes.js';
import styleController from './style.controller.js';

let moduleName = 'design.style';

angular.module( moduleName, [] )
    .config( routeConfig )
    .run( function ($log) {
        $log.debug( moduleName + ' - run' );
    } )
    .controller( 'styleController', styleController );

export default moduleName;