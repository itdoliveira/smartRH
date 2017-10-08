app.controller('CadastroVagaCtrl', function ($scope, $location, cadastroEmpresaServices) {

	$scope.vaga = {
		"area" : "",
		"nome" : "",
		"beneficios" : "",
		"salario" : "",
		"localidade" : "",
		"disponibilidade" : "",
		"descricao" : ""
	};

	$scope.cadastrar = function(vaga) {
		cadastroVagaServices.cadastrar(vaga, function() {
			$(".alert").alert();
        })
    };
  

});