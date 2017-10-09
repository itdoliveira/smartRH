app.controller('LoginCtrl', function ($scope, $location, loginServices) {

	$scope.login = {
		"usuario" : "",
		"senha" : ""
	};
	
	$scope.logar = function (login) {
		loginServices.logar(login, function(data) {
			console.log(data);
        })
	};

});