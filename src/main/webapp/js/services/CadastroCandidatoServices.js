app.factory('cadastroCandidatoServices', ['$http', function($http) {

       
        function cadastrar(candidato, callback) {
            $http({
                method:'POST',
                url:'https://notepadcloud.herokuapp.com/nota/',
                data:JSON.stringify(candidato)
            }).then(function (data) {
                if (callback) callback(data)
            });
        }

        return {
            cadastrar:cadastrar
        };
    }])