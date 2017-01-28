var app = angular.module('myApp.models.flashcard', ['firebase']);
app.factory('flashcardService', ['$firebaseArray', '$rootScope', function ($firebaseArray, $rootScope) {
  var _ref = firebase.database().ref().child('angular');
  // download the data into a local object
  var cards = $firebaseArray(_ref);
  // Emit that we are loaded
  cards.$loaded(function(){
    $rootScope.$emit('cards_loaded');
  });

  return {
    getList: function() {
      return cards;
    }
  };
}]);