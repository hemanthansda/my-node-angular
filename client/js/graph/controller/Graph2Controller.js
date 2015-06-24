'use strict';

angular
  .module('app')
  .controller('Graph2Controller', ['$scope', '$state', 'Data', function($scope, $state, Data) {
    $scope.graph = [];
    console.log("GRAPH CONTROLLER 2")
    $scope.graph = Data.find(
      function(data) { 
      /* success */ },
      function(errorResponse) { /* error */ }
    );
    
  }]);
