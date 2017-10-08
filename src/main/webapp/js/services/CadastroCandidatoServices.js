app.factory('cadastroCandidatoServices', ['$http', function($http) {

       
        function cadastrar(candidato, callback) {
            $http({
                method:'POST',
                url:'https://smart-rh.herokuapp.com/api/profile/usuarios',
                data:JSON.stringify(candidato)
            }).then(function (data) {
            	console.log(data);
                if (callback) callback(data)
            });
        }

        return {
            cadastrar:cadastrar
        };
    }])