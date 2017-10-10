app.factory('cadastroNotaServices', ['$http', function($http) {

       
        function cadastrar(nota, callback) {
            $http({
                method:'POST',
                url:'https://smart-rh.herokuapp.com/api/profile/notas',
                data:JSON.stringify(nota)
            }).then(function (data) {
                console.log(data);
            });
        }
        
        function listarCandidato(callback) {
            $http({
                method:'GET',
                url: 'http://smart-rh.herokuapp.com/api/usuarios'
            }).then(function (data) {
                if (callback) callback(data)
            });
        }
        
        function listarProva(callback) {
            $http({
                method:'GET',
                url: 'http://smart-rh.herokuapp.com/api/provas'
            }).then(function (data) {
                if (callback) callback(data)
            });
        }
        
        return {
            cadastrar:cadastrar,
            listarCandidato:listarCandidato,
            listarProva:listarProva
        };
    }])