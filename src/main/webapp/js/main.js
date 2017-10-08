
var app = angular.module('website', [
    'ngRoute'
]);


app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    	
        .when("/", {templateUrl: "templates/login.html", controller: "LoginCtrl"})
        
        .when("/cadastroEmpresa", {templateUrl: "templates/cadastroEmpresa.html", controller: "CadastroEmpresaCtrl"})

        .when("/cadastroCandidato", {templateUrl: "templates/cadastroCandidato.html", controller: "CadastroCandidatoCtrl"})
      
        .when("/cadastroVaga", {templateUrl: "templates/cadastroVaga.html", controller: "CadastroVagaCtrl"})
       
        .when("/listadeVagas", {templateUrl: "templates/listadeVagas.html", controller: "listadeVagasCtrl"})
     
        .when("/listadeCandidatos", {templateUrl: "templates/listadeCandidatos.html", controller: "listadeCandidatosCtrl"})
            
        .when("/demo", {templateUrl: "templates/notepadsaas.html", controller: "NotepadCtrl"})
       
        .when('/404', {templateUrl: "templates/404.html"})
        .otherwise("/404");

        $locationProvider.hashPrefix('');
}]);