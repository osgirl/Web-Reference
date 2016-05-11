/**
 * Created by matthewhill on 11/05/2016.
 */

/**
 * Error Handling Factory
 */


'use strict';

/**
 * @namespace ErrorHandler
 * @desc Manages error responses from forms and API calls
 * @memberOf Factories
 */
function errorhandler() {

	var _stwErrors = {};

	return {
		formatResponseErrors: function(response) {

			if (response) {
				this.error = response.errors;
				_stwErrors = {};
				angular.forEach(response.errors, function(value) {
					this[value.field] = {message: value.message};
				}, _stwErrors);

			}

			return _stwErrors;
		}

	};
}

errorhandler.$inject = [];

module.exports = angular.module('stw.errorhandler', [])
	.factory('errorhandler', errorhandler);


