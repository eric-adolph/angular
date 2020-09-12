(function () { // view-model

'user strict';

angular.module('myFirstApp', []) // name of mpdule plus array of dependanccies

.controller('myFirstController', function($scope) { // $ = angular variable
  $scope.name = "eric"; // attached to text box, and changes if text box changes

  $scope.sayHello = function() {
    return "Hello Coursera!";
  };


});

})(); // what is this - stops local variables form entering local scope
