angular.module('app',
  [
    'ionic',
    'oc.lazyLoad',
    'ngCordova'
  ])

  .value('$apiConfig', {
    'api': [
      {'url': 'http://php55.projectsunderdev.com/'}//TODO Acá va la dirección de la api
    ]
  })

  .config(function ($ionicConfigProvider) {

    // TODO Revisar. Son configuraciones utilizadas normalmente pero dependen de cada proyecto
    //define la transicion entre las pantallas
    $ionicConfigProvider.views.transition("platform");

    //deshabilita el swipe back en iOS
    $ionicConfigProvider.views.swipeBackEnabled(false);

    //establece 0 vistas en cache como maximo
    $ionicConfigProvider.views.maxCache(0);

    $ionicConfigProvider.scrolling.jsScrolling(true);

    $ionicConfigProvider.backButton.previousTitleText(false).text('');
    $ionicConfigProvider.navBar.alignTitle('center');

  });
