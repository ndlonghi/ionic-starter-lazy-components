angular.module('app')

  .run(function ($ionicPlatform, $ocLazyLoad, $q, $state) {

    $ionicPlatform.ready(function () {

      var promises = [];
      promises.push($ocLazyLoad.load('components/webServices/main.js'));
      promises.push($ocLazyLoad.load('components/common/main.js'));
      promises.push($ocLazyLoad.load('components/home/main.js'));

      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      $q.all(promises).then(
        function () {
          //TODO que hacer al iniciar la aplicacion
          $state.go('home');
        }, function (error) {
          console.log('ERROR al cargar los modulos: ' + JSON.stringify(error));
        }
      );

    });

  });
