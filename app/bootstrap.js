'use strict';

/** import some styles of your own, these will all be imported */
import '../public/scss/app.scss';

/** import the main app module */
import stwSeed from './app.module';

/** bootstrap the application into the document */
angular.element( document ).ready( function () {
	angular.bootstrap( document, [stwSeed] );
});

