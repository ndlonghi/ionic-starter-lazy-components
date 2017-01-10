angular.module('app.common')

  .filter('baseUrl', function($apiConfig) {
    return function(path) {
      if (path) {
        return $apiConfig.api[0].url + '/' + path;
      }
      return path;
    }
  });
