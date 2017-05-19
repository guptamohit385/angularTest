
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
  $http({
    method : "GET",
    url : "https://jsonplaceholder.typicode.com/photos"
  }).then(function mySucces(response) {
      $scope.photos = response.data;
    }, function myError(response) {
      $scope.photos = response.statusText;
  });
});