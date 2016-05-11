/**
 * Created by matthewhill on 12/01/2016.
 */

import color from 'tempdata/colours/colours.json'

function coloursController($log, ColourService) {

	let vm = this;
	vm.navTitle = 'Colours Module';

	vm._colours = ColourService.getColours();

	vm._colours = color;

	$log.info(vm._colours);

}

coloursController.$inject = ['$log', 'ColourService'];
export default coloursController;
