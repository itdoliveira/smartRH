app.controller('CadastroCandidatoCtrl', function ($scope, $location, cadastroEmpresaServices) {

	$scope.candidato = {
		"nome" : "",
		"endereco" : "",
		"telefone" : "",
		"email" : "",
		"senha" : ""
	};

	$scope.cadastrar = function(candidato) {
		cadastroCandidatoServices.cadastrar(candidato, function() {
			$(".alert").alert();
        })
    };
  

});