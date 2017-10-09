app.controller('CadastroCandidatoCtrl', function($scope, $location, $http,
		cadastroCandidatoServices) {

	$scope.candidato = {
		"nome" : "",
		"endereco" : "",
		"telefone" : "",
		"email" : "",
		"senha" : "",
		"empresa" : ""
	};
	
	$scope.empresa = [];

	$scope.cadastrar = function(candidato) {
		cadastroCandidatoServices.cadastrar(candidato, function() {
			$(".alert").alert();
		})
	};

	$http({
        method:'GET',
        url: 'http://smart-rh.herokuapp.com/api/empresas'
    }).then(function (data) {
    	console.log(data);
    	$scope.empresa = data;
    });
	
	/*$scope.listarEmpresa = function() {
		cadastroCandidatoServices.pesquisarPor(function(empresa) {
			console.log(empresa);
			if (empresa.data.length > 0)
				$scope.empresa = nota.data[0];
			else {
				$scope.empresa = "";
			}
		})

	};*/
});