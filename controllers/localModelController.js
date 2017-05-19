
var app = angular.module('myApp', []).constant('ENV', 'dev');


app.controller('myCtrl', function($scope, $http) {
	var data = [{
			"name": "mohit",
			"lastname": "gupta",
			"feeStatus": "Done",
			"placement": "Bangalore"
		},
		{
			"name": "himanshu",
			"lastname": "verma",
			"feeStatus": "Done",
			"placement": "Noida"
		},
		{
			"name": "bittu",
			"lastname": "singh",
			"feeStatus": "not done",
			"placement": "ghaziabad"
		}];
		
		$scope.student = data;

});