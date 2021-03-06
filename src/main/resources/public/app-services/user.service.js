(function () {
    'use strict';
 
    angular
        .module('app')
        .factory('UserService', UserService);
 
    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};
 
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByEmail = GetByEmail;
        service.Create = Create;
        service.Update = Update;
        //service.Delete = Delete;
        service.GetLeagueIDFromUser = GetLeagueIDFromUser;
        return service;
 
        function GetAll() {
            return $http.get('/user/').then(handleSuccess, handleError('Error getting all users'));
        }
 
        function GetById(id) {
            return $http.get('/user?userID=' + id).then(handleSuccess, handleError('Error getting user by id'));
        }
        
        function GetByEmail(email) {
            return $http.get('/user?emailID=' + email).then(handleSuccess, handleError('Error getting user by email'));
        }
        
        function Create(user) {
            return $http.post('/user/', user).then(handleSuccess, handleError('Error creating user'));
        }
 
        function Update(user) {
            return $http.put('/user/', user).then(handleSuccess, handleError('Error updating user'));
        }
        
        function GetLeagueIDFromUser(id){
        	return $http.get('/user/getLeagueIDFromUser?UserID=' + id).then(function (result) {
                return result.data[0].LeagueID;
            });
        }
        /*
        function Delete(id) {
            return $http.delete('/ffa/user/' + id).then(handleSuccess, handleError('Error deleting user'));
        }
        */
 
        // private functions
 
        function handleSuccess(res) {
            return res;
        }
 
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }
 
})();