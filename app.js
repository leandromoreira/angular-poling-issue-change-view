'use strict';

var app = angular.module('Sauron', []);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
      .when('/list_streams', {
        templateUrl: '/angular/views/target_bitrates.html',
        controller: 'TargetBitratesCtrl'
      })
      .when('/docs', {
        templateUrl: '/angular/views/docs.html'
      })
      .otherwise({redirectTo: '/list_streams'});
}]);

app.run(function(TargetBitrates){});

app.value('Config', {
  httpOptions: {timeout: 5000},
  pollingTimeout: 2000
});
