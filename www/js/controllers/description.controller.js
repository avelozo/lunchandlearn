'use strict';

angular.module('app.controllers.description', []).controller('DescriptionController', function ($scope) {


 $scope.workshop = {};
 $scope.workshop = window.localStorage.getItem("workshop");

  $scope.buyWorkshop = function () {  
     $state.go('success');
  };

});