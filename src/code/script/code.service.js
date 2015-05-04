(function(){
	'use strict';

	angular
		.module("app.code")
		.factory("CoreService", CoreService);

	CoreService.$inject = ["$q", "$ttp"];

	function CoreService($q, $http){

	}
}());