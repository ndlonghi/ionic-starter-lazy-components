function baseUrl($apiConfig) {
  return function(path) {
    if (path) {
      return $apiConfig.api[0].url + '/' + path;
    }
    return path;
  }
}

angular
  .module('app.common')
  .filter('baseUrl', baseUrl);
