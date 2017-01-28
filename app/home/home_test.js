'use strict';

describe('myApp.home module', function() {

  beforeEach(module('myApp.home'));

  describe('home controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
      var scope = $rootScope.$new();
      //spec body
      var viewCtrl = $controller('HomeCtrl', {$scope: scope});
      expect(viewCtrl).toBeDefined();
    }));

  });
});