app.controller('CadastroProvaCtrl', function($scope, $location, $http,
		cadastroProvaServices) {

	$scope.candidato = {
		"descricao" : "",
		"prova" : "",
		"resposta" : "",
		"empresa" : "",
		"vaga" : ""
	};
	
	$scope.empresa = [];
	$scope.vaga = [];

	$scope.cadastrar = function(prova) {
		cadastroProvaServices.cadastrar(prova, function() {
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
	
	$http({
        method:'GET',
        url: 'https://smart-rh.herokuapp.com/api/vagas'
    }).then(function (data) {
    	console.log(data);
    	$scope.vaga = data;
    });
	
});