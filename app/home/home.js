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

    var defaultCard = {
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

    $scope.$watch('paramsSize', function(){
      $scope.params = [];
      for(var i = 0; i < $scope.paramsSize; i++) {
        $scope.card.definition.params.push({
          "name": "",
          "type": "",
          "details": "",
          "optional": false
        });
      }
    });

    function format() {
      $scope.card.key = $scope.card.title.replace(' ', '.')
    }

    $scope.reset = function() {
      $scope.card = angular.copy(defaultCard);
    };

    $scope.save = function() {
      format();

      $scope.toJSON = angular.toJson($scope.card);
      var blob = new Blob([$scope.toJSON], { type:"application/json;charset=utf-8;" });
      var downloadLink = angular.element('<a></a>');
      downloadLink.attr('href',window.URL.createObjectURL(blob));
      downloadLink.attr('download', $scope.card.title + '.json');
      downloadLink[0].click();

      $scope.reset();
    };

    $scope.reset();

  }]);