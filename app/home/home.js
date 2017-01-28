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

    $scope.flipped = false;

    $scope.index = 0;
    $scope.card = {};

    var cards = [];
    $rootScope.$on('cards_loaded', function(){
      cards = flashcardService.getList();
      $scope.card = cards[$scope.index];
      $scope.total = cards.length;
    });

    $scope.next = function(){
      $scope.index++;
      $scope.card = cards[$scope.index];
    };

    $scope.getHintClass = function(type) {
      return 'type-hint-' + type.replace(/[^a-z]/g,'');
    };

  }]);