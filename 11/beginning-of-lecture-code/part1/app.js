(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Eric";

  $scope.sayMessage = function () {
    return "Eric Like to Eat Snacks";
  };

  $scope.stateOfBeing="hungry";

  $scope.feedEric = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
