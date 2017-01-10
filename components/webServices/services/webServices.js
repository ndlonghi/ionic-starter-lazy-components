angular.module('app.webServices')

  .factory('$webServices', function ($q, $http, $apiConfig) {

    return {

      /**
       *   Funcion para efectuar una peticion HTTP personalizada, manejando promesas
       *   y retornando resultados segun su respuesta
       */
      http: function (config) {
        var d = $q.defer();

        $http({
          method: config.method,
          url: config.api + config.url,
          params: config.params,
          data: config.data,
          headers: config.headers,
          timeout: (config.timeout ? config.timeout : 15000)
        }).then(function (res) {
          console.log('[Web Service] HTTP ' + config.method + ' URL ' + config.url + ' OK');
          d.resolve(res.data);
        }, function (err) {
          console.log('[Web Service] HTTP ' + config.method + ' URL ' + config.url + ' ERROR: ' + JSON.stringify(err));

          //TODO manejo de errores de acuerdo a la aplicacion
          switch (err.status) {
            case -1:
              d.reject({
                'error': 'timeout',
                'text': 'Verifique su conexión a internet e inténtelo nuevamente.'
              });
              break;
            case 400:
              d.reject({
                'error': err.data.errors.children,
                'text': 'Error de validación'
              });
              break;
            case 401:
              d.reject({
                'error': 'unauthorized',
                'text': err.data.message
              });
              break;
            default:
              d.reject({
                'error': 'error',
                'text': 'Ha ocurrido un error. Por favor, inténtelo nuevamente.'
              });
          }
        });
        return d.promise;
      },

      //TODO funcion de ejemplo
      setAssistance: function (params) {
        return this.http({
          method: 'PUT',
          api: $apiConfig.api[0].url,
          url: '/mobile/event/assistance/' + params.id + '/status',
          data: {
            assistance: params.assistance
          }
        })
      }

    }

  });
