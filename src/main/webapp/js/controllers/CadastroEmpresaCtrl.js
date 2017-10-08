app.controller('CadastroEmpresaCtrl', function ($scope, $location, cadastroEmpresaServices) {

	$scope.empresa = {
		"nome" : "",
		"endereco" : "",
		"telefone" : "",
		"email" : "",
		"senha" : ""
	};

	$scope.cadastrar = function(empresa) {
		cadastroEmpresaServices.cadastrar(empresa, function() {
			$(".alert").alert();
        })
    };
  

});