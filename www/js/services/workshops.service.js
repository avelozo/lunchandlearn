'use strict';

angular.module('app.services.workshops', [])
    .factory('WorkshopService', function ($http, $q) {

        var exposedService = {};
        var getWorkshops = function () {
            return $http({
                method: 'GET',
                url: 'https://demo3968437.mockable.io/workshops',
                headers: {
                     'Accept': 'application/json'     
                }
            })   
        }   
    exposedService.getWorkshops = getWorkshops;
    return exposedService;
});
