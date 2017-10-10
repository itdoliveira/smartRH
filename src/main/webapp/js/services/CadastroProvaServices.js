app.factory('cadastroProvaServices', ['$http', function($http) {

       
        function cadastrar(prova, callback) {
            $http({
                method:'POST',
                url:'https://smart-rh.herokuapp.com/api/profile/provas',
                data:JSON.stringify(prova)
            }).then(function (data) {
                console.log(data);
            });
        }
        
        function listarEmpresa(callback) {
            $http({
                method:'GET',
                url: 'http://smart-rh.herokuapp.com/api/empresas'
            }).then(function (data) {
                if (callback) callback(data)
            });
        }
        
        function listarVaga(callback) {
            $http({
                method:'GET',
                url: 'http://smart-rh.herokuapp.com/api/vagas'
            }).then(function (data) {
                if (callback) callback(data)
            });
        }
        
        return {
            cadastrar:cadastrar,
            listarEmpresa:listarEmpresa,
            listarVaga:listarVaga
        };
    }])