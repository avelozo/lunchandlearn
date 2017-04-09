'use strict';

angular.module('app.routes', []).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  });

   $stateProvider.state('description', {
    url: '/description',
    templateUrl: 'views/description.html',
    controller: 'DescriptionController'
  });

    $stateProvider.state('success', {
    url: '/success',
    templateUrl: 'views/success.html',
    controller: 'SuccessController'
  });

  $urlRouterProvider.otherwise('/home');

});