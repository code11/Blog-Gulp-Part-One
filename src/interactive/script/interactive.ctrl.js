(function(){
	'use strict';

	angular
		.module('app.interactive')
		.controller("InteractiveCtrl", InteractiveCtrl);

	InteractiveCtrl.$inject = ["$scope"];

	function InteractiveCtrl($scope){
		$scope.greeting = "Hello form interactive module";
	}
}());