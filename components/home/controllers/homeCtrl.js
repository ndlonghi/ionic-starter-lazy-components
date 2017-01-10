angular.module('app.home')

  .controller('HomeCtrl', function ($scope, info) {

    $scope.$on('$ionicView.beforeEnter', function () {
      $scope.info = info;
    });

  });
