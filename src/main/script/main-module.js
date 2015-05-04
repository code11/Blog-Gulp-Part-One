(function(){
	'use strict';

	angular
		.module('app', [
			'ui.router',
			'app.code',
			'app.interactive'
		])
		.config(config);

	config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

	function config($locationProvider, $stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode({
			enabled: true,
			rewriteLinks: true
		});
		$stateProvider
			.state('code', {
				url: '/code',
				templateUrl: 'views/code.html',
				controller: 'CodeCtrl'
			})
			.state('interactive', {
				url: '/interactive',
				templateUrl: 'views/interactive.html',
				controller: 'InteractiveCtrl'
			})
			.state('main', {
				url: '/',
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			});
	}

}());