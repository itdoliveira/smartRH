app.controller('CadastroEmpresaCtrl', function ($scope, $location, cadastroEmpresaServices) {
	
	$scope.empresa = {
		"nome" : ""
	};

	$scope.cadastrar = function(empresa) {
		cadastroEmpresaServices.cadastrar(empresa, function() {
			$(".alert").alert();
        })
    };

});