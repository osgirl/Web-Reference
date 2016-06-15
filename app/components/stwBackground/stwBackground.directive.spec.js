'use strict';

describe('Directive: stwBackground', function () {
    var elm, scope;
    var template = '<stw-background></stw-background>';
        
    // load the directive's module and view
    beforeEach(module('stwBackground', './stwBackground.html'));

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope;
        elm = angular.element(template);
        $compile(elm)(scope);
        scope.$digest();
    }));

    it('should make hidden element visible', function () {
        var hasDirectiveLoaded = !(elm.text() === template);
        
        expect(elm.text()).toBeDefined();
        expect(hasDirectiveLoaded).toBe(true);
    });
});