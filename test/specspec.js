var assert = require('assert');
describe('true', function() {
    it('should be true', function () {
      assert.equal(true, true);
    });
});
var app = require('../jssrc/controllers/nav_controller.js');
describe('boilerplate', function() {
    it('should return "boilerplate"', function () {
      var $scope = {};
      var actual = app($scope);
      assert.equal($scope.boilerplate, "boilerplate");
    });
});
