'use strict';

/**
 * Represents the Run function.
 * @constructor
 */
function AppRun() {

	if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
		cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
		cordova.plugins.Keyboard.disableScroll( true );

	}
	if (window.StatusBar) {
		StatusBar.styleDefault();
	}
}

export default AppRun;
