'use strict';

angular.module('myApp.home', ['ui.router'])

  .config(['$stateProvider', function($stateProvider) {
    var indexState = {
      name: 'home',
      url: '/',
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    };

    $stateProvider.state(indexState);
  }])

  .controller('HomeCtrl', ['$rootScope', '$scope', 'flashcardService', function($rootScope, $scope, flashcardService) {

    $scope.params = [];
    $scope.paramsSize = 0;
    $scope.paramTypes = ['object', 'function', 'string', 'number'].map(function(param) {
      return {name: param};
    });

    $scope.$watch('paramsSize', function(){
      $scope.params = [];
      for(var i = 0; i < $scope.paramsSize; i++) {
        $scope.params.push({
          "name": "",
          "type": "",
          "details": "",
          "optional": false
        });
      }
    });

    $scope.card = {
      "framework": "angular",
      "version": "1.6.1",
      "language": "js",
      "parent": {
        "name": "function",
        "id": "fn"
      },


      "key": "",
      "title": "",
      "description": "",
      "definition": {
        "params": [],
        "returns": {
          "type": null,
          "details": null
        },
        "usage": ""
      },
      "sample": ""
    };

  }]);