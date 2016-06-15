'use strict';

/** import some styles of your own, these will all be imported */
import '../public/scss/index.scss';

/** import the main app module */
import stwRef from './app.module';

/** bootstrap the application into the document */
angular.element( document ).ready( function () {
	angular.bootstrap( document, [stwRef] );
});
