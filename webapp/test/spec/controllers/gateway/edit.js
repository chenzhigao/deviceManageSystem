'use strict';

describe('Controller: GatewayEditCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var GatewayEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GatewayEditCtrl = $controller('GatewayEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GatewayEditCtrl.awesomeThings.length).toBe(3);
  });
});
