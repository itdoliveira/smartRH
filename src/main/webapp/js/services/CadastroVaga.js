app.factory('cadastroVaga', ['$http', function($http) {

       
        function cadastrar(vaga, callback) {
            $http({
                method:'POST',
                url:'https://notepadcloud.herokuapp.com/nota/',
                data:JSON.stringify(vaga)
            }).then(function (data) {
                if (callback) callback(data)
            });
        }

        return {
            cadastrar:cadastrar
        };
    }])