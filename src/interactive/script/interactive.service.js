(function(){
	'use strict';

	angular
		.module('app.interactive')
		.factory("InteractiveService", InteractiveService);

	InteractiveService.$inject = ["$q", "$ttp"];

	function InteractiveService($q, $http){

	}
}());