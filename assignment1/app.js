(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "";
  $scope.color = "black";
  $scope.border = "2px solid black;"

  $scope.process = function () {
    $scope.message = "";
    var list = $scope.name;
    var result = splitItems(list);

    let index = 0;
    var len = 0;
    for (index = 0; index < result.length; index++) {
      if (result[index].trim().length > 0) {
        len = len + 1;
      };

    }


    if(list == "" || len == 0) {
      $scope.message = "Please enter data first";
      $scope.color = "red";
      $scope.border = "2px solid red"
      }
    else if (len < 4) {
        $scope.message = "Enjoy!";
        $scope.color = "green";
        $scope.border = "2px solid green"
            }
    else {
        $scope.message = "Too Much!";
        $scope.color = "green";
        $scope.border = "2px solid green"
      }
  };

  function splitItems(list) {
    return list.split(",");
  };

}

})();
