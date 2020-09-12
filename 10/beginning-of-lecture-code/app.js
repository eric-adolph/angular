(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController',  DIController);

DIController.$inject = ['$scope', '$filter'] // to make minification work

function DIController ($scope, $filter) {
  $scope.name = "Eric ";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

})();
