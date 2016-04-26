/**
 * @ngdoc function
 * @name styleguide.shortlists:shortlists
 * @description
 * # shortlists
 * Creates a service constructor with defined methods
 */

function shortlists($ionicLoading, $timeout) {

	var shortlists = {
		add   : add,
		remove: remove
	};

	return shortlists;

	///////////////////////

	function add(stand) {
		shortlists.list = [];
		$timeout( function () {
			$ionicLoading.hide();
			shortlists.list.push( {
				stands: stand
			} );
			console.log( shortlists.list );
		}, 250 );
	}

	function remove(index) {
		$timeout( function () {
			$ionicLoading.hide();
			shortlists.list.splice( shortlists.list.indexOf( index ), 1 );
			console.log( shortlists.list );
		}, 250 );
	}
}

shortlists.$inject = ['$ionicLoading', '$timeout'];
export default shortlists;


