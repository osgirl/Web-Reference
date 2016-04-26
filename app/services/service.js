/**
 * @ngdoc service
 * @name DataService
 * @function
 *
 * @description
 * Gets the feed data from a data service
 *
 */

import faker from 'faker';

/**
 * @ngdoc function
 * @name styleguide.faker:DataService
 * @description
 * # DataService
 * Creates a service constructor with fake data from an external api
 */
function DataService($log) {

	let service = {
		getFeedData: getFeedData,
		getUser: getUser
	};

	return service;

	////////////


	function getUser() {
		faker.name.findName().then( result => result.data );
	}

	function getFeedData() {
		$log.info(faker);

		const appHeaders = {
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
		};
		
		let vm = this;
		let deferred = $q.defer();

		vm.data = {
			isLoading: false
		};

		$http.get( 'main/services/data/uk.json', appHeaders, {cache: true} )
			.success( function (data) {
				$timeout( function () {
					console.log( 'HTTP call went as planned' );
					deferred.resolve( data );
				}, 1000 );
			} )
			.error( function (status, error) {
				console.log( 'Error while making HTTP call' + 'Status is: ' + status + 'The error was: ' + error );
				vm.loadingIndicator.hide();
				deferred.reject();
			} );

		return deferred.promise;
	}
}

DataService.$inject = ['$http', '$q', '$timeout', '$log'];
export default DataService;


