// Ionic Starter App

angular.module('umovil', ['ionic', 'ngCordova', 'lokijs', 'uiGmapgoogle-maps', 'umovil.controllers', 'umovil.services'])

.value('configs', {
		Tipo: 'opciones',
		UrlConsulta: "https://salasusach.herokuapp.com",
		Semestre: "2015-02",
		ModoOffline: false,
		Geolocalizacion: true
	}
)

.run(function($ionicPlatform, LokiDatabase, Utilidades) {
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

		LokiDatabase.initDB().then(function(f) {
			Utilidades.toastCorto("DB iniciada");
			LokiDatabase.loadDB().then(function(g) {
				Utilidades.toastCorto("DB cargada");
			});
		});
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
})

/*
.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];  
	}
]);
*/

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //key: 'AIzaSyDZeruOWEJnGYDERS7s16XaxKgJwweKfxM', // key: 'your api key',
        v: '3.20', // defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})