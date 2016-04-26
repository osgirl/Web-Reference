'use strict';

describe('Filter: escape', function () {

  // load the directive's module
    beforeEach(module('styleguide.escape'));

  // initialize a new instance of the filter before each test
  var escape;
  beforeEach(inject(function ($filter) {
    escape = $filter('escape');
  }));

  it('should return the input prefixed with "escape filter:"', function () {
    var text = 'angular js';
    var textToBe = 'angular%20js';

    expect(escape(text)).toBe(textToBe);
  });

});
