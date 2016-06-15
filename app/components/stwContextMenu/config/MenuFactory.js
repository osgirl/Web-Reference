'use strict';

MenuFactory.$inject = ['$location'];

function MenuFactory() {

	var menuOpen;

	return {
		getState : function () {
			return menuOpen;
		},
		setState : function (newState) {
			menuOpen = (menuOpen === undefined) ? newState : undefined;
			return menuOpen;
		},
		getHeight: function () {
			if (/iP/.test( navigator.platform ) && /Safari/i.test( navigator.userAgent )) {
				var mobileSafari = 'Safari';
			}

			// Set the div height
			var newHeight = window.innerHeight;
			// if mobileSafari add +60px
			if (typeof mobileSafari === 'string') {
				newHeight += 60;
			}

			return newHeight;

		}
	};

}

module.exports = MenuFactory;
