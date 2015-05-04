(function(){
	'use strict';

	angular
		.module("app.code")
		.controller("CodeCtrl", CodeCtrl);

	CodeCtrl.$inject = ["$scope"];

	function CodeCtrl($scope){
		$scope.greeting = "Hello from code module";
	}
}());