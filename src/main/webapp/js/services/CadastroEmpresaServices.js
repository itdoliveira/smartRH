app.factory('cadastroEmpresaServices', ['$http', function($http) {

       
        function cadastrar(empresa, callback) {
            $http({
                method:'POST',
                url:'https://notepadcloud.herokuapp.com/nota/',
                data:JSON.stringify(empresa)
            }).then(function (data) {
                if (callback) callback(data)
            });
        }

        return {
            cadastrar:cadastrar
        };
    }])