import routeConfig from './codeDemos.routes.js';
import CodeDemosController from './codeDemos.controller.js';

let moduleName = 'stw.codeDemos';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( moduleName + ' - run' );
	} )
	.controller( 'CodeDemosController', CodeDemosController );

export default moduleName;
