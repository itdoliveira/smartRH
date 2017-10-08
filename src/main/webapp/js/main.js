
var app = angular.module('website', [
    'ngRoute'
]);


app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    	
        .when("/", {templateUrl: "templates/login.html", controller: "LoginCtrl"})
        
        .when("/cadastroEmpresa", {templateUrl: "templates/cadastroEmpresa.html", controller: "CadastroEmpresaCtrl"})
        
        .when("/demo", {templateUrl: "templates/notepadsaas.html", controller: "NotepadCtrl"})
       
        .when('/404', {templateUrl: "templates/404.html"})
        .otherwise("/404");

        $locationProvider.hashPrefix('');
}]);