function homeConfig($stateProvider) {

  $stateProvider

    .state('home', {
      url: '/home',
      controller: 'HomeCtrl',
      templateUrl: 'components/home/templates/home.html',
      resolve: HomeCtrl.resolve
    })

}

angular
  .module('app.home')
  .config(homeConfig);
