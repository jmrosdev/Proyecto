// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('quesoteca', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

/* 
* Función de enrutamiento con AngularJS.
*/

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      }
    }
  })

  .state('app.historia', {
    url: "/historia",
    views: {
      'menuContent': {
        templateUrl: "templates/historia.html"
      }
    }
  })
    .state('app.tipos', {
      url: "/tipos",
      views: {
        'menuContent': {
          templateUrl: "templates/tipos.html"
          
        }
      }
    })

     .state('app.tipo', {
      url: "/tipo/:tiposTitulo",
      views: {
        'menuContent': {
          templateUrl: "templates/tipo.html",
          controller: "tipos"
          
        }
      }
    })

    .state('app.ferias', {
      url: "/ferias",
      views: {
        'menuContent': {
          templateUrl: "templates/ferias.html"
          
        }
      }
    })

  .state('app.beneficios', {
    url: "/beneficios",
    views: {
      'menuContent': {
        templateUrl: "templates/beneficios.html"
        
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});