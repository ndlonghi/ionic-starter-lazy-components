angular.module('app.home', [
  [
    'components/home/controllers/homeCtrl.js',
    'components/home/css/style.css'//TODO estilos para este componente
  ]
])

  .config(function ($stateProvider) {

    $stateProvider

      .state('home', {
        url: '/home',
        controller: 'HomeCtrl',
        templateUrl: 'components/home/templates/home.html',
        resolve: {
          info: function ($q) {
            //TODO ejecutar funciones para obtener informacion que deba estar disponible antes de cargar la vista
            var d = $q.defer();
            d.resolve('Hola Mundo!');
            return d.promise;
          }
        }
      })

  });
