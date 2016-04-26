/**
 * Created by matthewhill on 12/01/2016.
 */

function HomeController() {

	let vm = this;

	vm.navTitle = 'STW Styleguide';
	vm.tester = 'Style Guide Grid example';
	vm.pageClass = 'page-about';

	vm.rightButtons = [{
		type   : 'button button-icon icon ion-ios-minus-outline',
		content: 'Delete',
		tap    : function () {
			vm.shouldShowDelete = !vm.shouldShowDelete;
		}
	}];

	console.log('we\'ve hit out controller')
}

export default HomeController;
