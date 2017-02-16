function HomeCtrl($scope, info) {

  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.info = info;
  });

}

HomeCtrl.resolve = {
  info: function ($q) {
    //TODO ejecutar funciones para obtener informacion que deba estar disponible antes de cargar la vista
    var d = $q.defer();
    d.resolve('Hola Mundo!');
    return d.promise;
  }
};

angular
  .module('app.home')
  .controller('HomeCtrl', HomeCtrl);
