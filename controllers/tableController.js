
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
  $http({
    method : "GET",
    url : "https://jsonplaceholder.typicode.com/posts/1"
  }).then(function mySucces(response) {
  	var respo = response.data;
  	console.log("---- >" + respo.userId);
      $scope.myWelcome = respo.title;
    }, function myError(response) {
      $scope.myWelcome = response.statusText;
  });
});


app.controller('myCtrl2', function($scope, $http) {
  $http({
    method : "GET",
    url : "https://jsonplaceholder.typicode.com/todos"
  }).then(function mySucces(response) {
      $scope.todoList = response.data;
    }, function myError(response) {
      $scope.todoList = response.statusText;
  });
});