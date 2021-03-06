// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    /*
    db = $cordovaSQLite.openDB({ name: "my.db" });
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS opciones
      ( id_opcion integer PRIMARY KEY,
        nombre_opcion text,
        valor_opcion text )");
    */
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('umovil', {
      url: "/umovil",
      abstract: true,
      templateUrl: "app/um_sidemenu.html"
    })

  .state('umovil.inicio', {
      url: "/inicio",
      views: {
        'menuContent' :{
          templateUrl: "app/um_inicio.html"
        }
      }
    })

  .state('umovil.opciones', {
      url: "/opciones",
      views: {
        'menuContent' :{
          templateUrl: "app/um_opciones.html"
        }
      }
    })

  .state('umovil.ayuda', {
      url: "/ayuda",
      views: {
        'menuContent' :{
          templateUrl: "app/um_ayuda.html"
        }
      }
    })

  .state('umovil.buscarsala', {
      url: "/buscarsala",
      views: {
        'menuContent' :{
          templateUrl: "app/um_buscarsala.html"
        }
      }
    })

  .state('umovil.lugares', {
      url: "/lugares",
      views: {
        'menuContent' :{
          templateUrl: "app/um_lugares.html"
        }
      }
    })
  
  /*
  .state('umovil.ingenieria', {
      url: "/ingenieria",
      views: {
        'menuContent' :{
          templateUrl: "app/um_ingenieria.html"
        }
      }
    })
  */

  .state('umovil.links', {
      url: "/links",
      views: {
        'menuContent' :{
          templateUrl: "app/um_links.html"
        }
      }
    })

  .state('umovil.acercade', {
      url: "/acercade",
      views: {
        'menuContent' :{
          templateUrl: "app/um_acercade.html"
        }
      }
    })

  .state('salas', {
      url: "/salas",
      abstract: true,
      templateUrl: "app/um_salasmenu.html"
    })


  .state('salas.resultadosala', {
      url: "/resultadosala/:nombre",
      views: {
        'menuContent' :{
          templateUrl: "app/um_resultadosala.html"
        }
      }
    })
	
	$urlRouterProvider.otherwise('/umovil/inicio');
});

var db = null;
