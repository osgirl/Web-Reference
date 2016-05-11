/**
 * Created by matthill on 24/02/2016.
 *
 * var user = {
	  name: faker.name.findName(),
	  email: faker.internet.email(),
	  address: faker.address.streetAddress(),
	  bio: faker.lorem.sentence(),
	  image: faker.image.avatar()
	};
 *
 */

var moduleName = 'styleguide.services';

const HTTP = new WeakMap();

/**
 * @ngdoc function
 * @name styleguide.service:MockService
 * @description
 * # MockService
 * Creates a service constructor with defined methods
 */
	
class MockService {
	constructor($http) {
		HTTP.set( this, $http );
	}

	getActiveBooks() {
		return HTTP.get( this ).faker.name.findName().then( result => result.data );
	}

	getArchivedBooks() {
		return HTTP.get( this ).get( '/api/archivedBooks' ).then( result => result.data );
	}

	markBookRead(bookId, isBookRead) {
		return HTTP.get( this ).put( `/api/markRead/${bookId}`, {
			bookId: bookId,
			read  : isBookRead
		} );
	}

	addToArchive(bookId) {
		return HTTP.get( this ).put( `/api/addToArchive/${bookId}`, {} );
	}

	checkIfBookExists(title) {
		return HTTP.get( this ).get( `/api/bookExists/${title}` ).then( result => result.data );
	}

	addBook(book) {
		return HTTP.get( this ).post( '/api/books', book );
	}

	static mockServiceFactory($http) {
		return new MockService( $http );
	}
}

MockService.mockServiceFactory.$inject = ['$http'];

angular.module( moduleName, [] )
	.factory( 'mockService', MockService.mockServiceFactory );

export default moduleName;


