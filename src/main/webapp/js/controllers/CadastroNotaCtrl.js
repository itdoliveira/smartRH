app.controller('CadastroNotaCtrl', function($scope, $location, $http,
		cadastroNotaServices) {

	$scope.candidato = {
		"nota" : "",
		"obs" : "",
		"candidato" : "",
		"prova" : "",
	};
	
	$scope.candidato = [];
	$scope.prova = [];

	$scope.cadastrar = function(nota) {
		cadastroNotaServices.cadastrar(nota, function() {
			$(".alert").alert();
		})
	};

	$http({
        method:'GET',
        url: 'http://smart-rh.herokuapp.com/api/usuarios'
    }).then(function (data) {
    	console.log(data);
    	$scope.candidato = data;
    });
	
	$http({
        method:'GET',
        url: 'http://smart-rh.herokuapp.com/api/provas'
    }).then(function (data) {
    	console.log(data);
    	$scope.candidato = data;
    });
	
});