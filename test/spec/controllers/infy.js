'use strict';

describe('Controller: InfyctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('infyscrollApp'));

  var InfyctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InfyctrlCtrl = $controller('InfyctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InfyctrlCtrl.awesomeThings.length).toBe(3);
  });
});
