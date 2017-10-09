app.factory('loginServices', ['$http', '$location', function($http, $location) {
			
        function logar(logar ,callback) {
        	
            $http({
                method:'GET',
                url: 'https://smart-rh.herokuapp.com/base/usuario?login='+logar.usuario+'&senha='+logar.senha
            }).then(function (data) {
            	$location.path('#/');
                if (callback) callback(data)
            });
        }
        
        return {
            logar:logar
        };
    }])