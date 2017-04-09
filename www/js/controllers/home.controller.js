'use strict';

angular.module('app.controllers.home', []).controller('HomeController', function ($scope, $state,  WorkshopService) {

 $scope.workshops = [];
  
 WorkshopService.getWorkshops().then(function (responseWorkshops) {
     $scope.workshops = responseWorkshops.data.data;
 });

 
  $scope.selectedWorkshop = function () {
     $state.go('description');
  };


});