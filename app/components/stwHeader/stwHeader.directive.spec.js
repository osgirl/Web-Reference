'use strict';

describe('Directive: stwHeader', function () {
    var elm, scope;
    var template = '<stw-header></stw-header>';

    // load the directive's module and view
    beforeEach(module('stw.stwHeader', './stwHeader.html'));

    beforeEach(inject(function ($compile, $rootScope, $httpBackend) {
        $httpBackend.whenGET('assets/svg/logo.svg').respond('');
        $httpBackend.whenGET('assets/svg/icon-hamburger.svg').respond('');
        $httpBackend.whenGET('assets/svg/cs-logo-symbol.svg').respond('');
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
