(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController); // passing name of function; defined below

function DIController ($scope, $filter, $injector) {
  $scope.name = "Yaakov"; // scope  service

  $scope.upper = function() {
    var upCase = $filter('uppercase');
    $scope.name  = upCase($scope.name);
  };

  console.log($injector.annotate(DIController));
}

function AnnotateMe(name, job, blah) {
  return "Blah";
}


})();
