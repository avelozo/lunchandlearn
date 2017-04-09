'use strict';

angular.module('app.controllers.home', []).controller('HomeController', function ($scope, WorkshopService) {

 $scope.workshops = [];
  
 WorkshopService.getWorkshops().then(function (responseWorkshops) {
     $scope.workshops = responseWorkshops.data.data;
 });
});