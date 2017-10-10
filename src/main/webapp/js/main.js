var app = angular.module('website', [
    'ngRoute'
]);


app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    	
        .when("/", {templateUrl: "templates/login.html", controller: "LoginCtrl"})
        
        .when("/menu", {templateUrl: "templates/menu.html", controller: "CadastroEmpresaCtrl"})
        
        .when("/cadastroEmpresa", {templateUrl: "templates/cadastroEmpresa.html", controller: "CadastroEmpresaCtrl"})

        .when("/cadastroCandidato", {templateUrl: "templates/cadastroCandidato.html", controller: "CadastroCandidatoCtrl"})
      
        .when("/cadastroVaga", {templateUrl: "templates/cadastroVaga.html", controller: "CadastroVagaCtrl"})
       
        .when("/cadastroVaga", {templateUrl: "templates/cadastroVaga.html", controller: "CadastroVagaCtrl"})
        
        .when("/cadastroNota", {templateUrl: "templates/cadastroNota.html", controller: "CadastroNotaCtrl"})
        
        .when("/listadeVagas", {templateUrl: "templates/listadeVagas.html", controller: "listadeVagasCtrl"})
     
        .when("/listadeCandidatos", {templateUrl: "templates/listadeCandidatos.html", controller: "listadeCandidatosCtrl"})
            
         .when("/listadeNotas", {templateUrl: "templates/listadeNotas.html", controller: "listadeNotasCtrl"})
        
        .when("/listadeProvas", {templateUrl: "templates/listadeProvas.html", controller: "listadeProvasCtrl"})
        
        .when("/demo", {templateUrl: "templates/notepadsaas.html", controller: "NotepadCtrl"})
       
        .when('/404', {templateUrl: "templates/404.html"})
        .otherwise("/404");

        $locationProvider.hashPrefix('');
}]);