/**
 * Created by matthewhill on 12/01/2016.
 */

/** Import faker Service **/
let faker = require( 'faker' );

function AvatarsController($log) {

	let vm = this;

	vm.faker = {
		firstname: '',
		lastname : '',
		birth    : '',
		address  : '',
		city     : '',
		country  : '',
		phone    : '',
		username : '',
		password : '',
		email    : '',
		src      : ''
	};

	vm.helper = {};

	let contextualCard = faker.helpers.contextualCard();
	$log.info( contextualCard );

	let userCard = faker.helpers.userCard();
	$log.info( userCard );

// 	let transaction = faker.helpers.createTransaction();
// 	$log.info( transaction );

	let card = faker.helpers.createCard();
	$log.info( card );

	vm.generate = function () {

		let firstName = faker.name.firstName();
		let lastName = faker.name.lastName();

		vm.faker.firstname = firstName;
		vm.faker.lastname = lastName;

		let birth = faker.date.past( 50, new Date( 'Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)' ) );
		birth = birth.getFullYear() + '-' + birth.getMonth() + '-' + birth.getDate();

		vm.faker.birth = birth;
		vm.faker.address = faker.address.streetAddress();
		vm.faker.cityStateZip = faker.address.city() + ', ' + faker.address.stateAbbr() + ' ' + faker.address.zipCode();
		vm.faker.country = faker.locales[faker.locale].address.default_country || '';
		vm.faker.phone = faker.phone.phoneNumber();
		vm.faker.username = faker.internet.userName( firstName, lastName );
		vm.faker.password = faker.internet.password();
		vm.faker.email = faker.internet.email( firstName.toLowerCase(), lastName.toLowerCase() );
		vm.faker.src = faker.internet.avatar();
	};

	vm.generateObject = function () {
		vm.helper = faker.helpers.contextualCard()
	};

	// generate the fake objects
	vm.generate();
	vm.generateObject();

// 	$log.info( vm.helper );
}

AvatarsController.$inject = ['$log'];
export {AvatarsController}
