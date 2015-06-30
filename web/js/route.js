
var app = angular.module('quesoteca', ['ngRoute']);

//Enrutamiento de la pagina con AngularJS

app.config(['$routeProvider',function($routeProvider) {
	
	$routeProvider
		.when('/',{
			templateUrl: 'html/home.html'
		})
		.when('/historia',{
			templateUrl: 'html/historia.html'
		})
		.when('/tipos-queso',{
			templateUrl: 'html/tipos.html'
		})		
		.when('/beneficios-del-queso',{
			templateUrl: 'html/beneficios.html'
		})
		.when('/error',{
			templateUrl: 'html/error.html'
		})
		.when('/html/historia.html',{
			templateUrl: 'html/historia.html'
		})

		//En caso de no encontrar una pagina nos redirecciona a esta pagina.
		.otherwise({
			redirectTo: '/error'
		}); 
}]);






