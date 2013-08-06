'use strict';

angular.module('Sauron')
  .controller('TargetBitratesCtrl',['$scope', 'TargetBitrates', function($scope, TargetBitrates){
    $scope.targetBitrates = TargetBitrates.all;
}]);
