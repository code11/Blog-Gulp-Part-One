(function(){
	'use strict';

	angular
		.module('app')
		.controller("MainCtrl", MainCtrl);

	MainCtrl.$inject = ["$scope"];

	function MainCtrl($scope){
		$scope.greeting = "Hello Test App";
	}
}());