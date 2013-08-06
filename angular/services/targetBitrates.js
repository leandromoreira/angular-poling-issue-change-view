'use strict';

angular.module('Sauron')
  .factory('TargetBitrates', ["$http", "$timeout", "Config", function($http, $timeout, Config){
    var data = {list: []};
    var onSuccess = function(result){
      data.list = result.data.data;
      $timeout(poller, Config.pollingTimeout);
    };
    var poller = function() {
      $http.get('api/streams.json', Config.httpOptions).then(onSuccess);
    };
    poller();
    return {all: data};
  }]);
