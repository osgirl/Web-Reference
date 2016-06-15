/**
 * @desc Colour service for Colours API
 */

class ColourService {

	/**
	 * @name constructor
	 * @desc Sets dependencies for class
	 * @param {object} $q Angularv promise framework
	 * @param {object} $http Angular $http class
	 * @param {object} errorhandler Global error handler
	 */
	constructor($q, $http, errorhandler) {

		/**
		 * @name $q
		 * @type Object
		 * @desc Angular promise framework
		 */
		this.$q = $q;

		/**
		 * @name $http
		 * @type Object
		 * @desc Angular $http framework
		 */
		this.$http = $http;

		/**
		 * @name errorhandler
		 * @type Object
		 * @desc Global errorhandler service
		 */
		this.errorhandler = errorhandler;

		this.baseSettings();
	}

	/**
	 * @name baseSettings
	 * @desc Sets up the models, needs to be called within constructor and when
	 *     ever you need to wipe the model
	 */
	baseSettings() {
		this._colours = [];
	}

	/**
	 * @name getColours
	 * @desc Checks to see if collour data has been fetched
	 * @returns {Object}
	 */
	getColours() {
		var deferred = this.$q.defer();

		if(!angular.isDefined(this._colours)) {
			deferred.resolve(this._colours);

			return deferred.promise;
		}

		// TODO: Maybe host our colour pallet on a server somewhere
		this.$http.get('/tempdata/colours/colours.json').success((response) => {
			this._colours = response;
		}).error((response) => {
			this._colours = [];
			deferred.reject(this.errorhandler.formatResponseErrors(response));
		});

		return deferred.promise;
	}

}

ColourService.$inject = ['$q', '$http', 'errorhandler'];
export default ColourService;