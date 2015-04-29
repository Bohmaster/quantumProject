'use strict',

angular.module('module.core')
	.config(function() {
		// confib block configuration
	})
	.run(function($rootScope, $log) {
		// run block configuration
		
		$rootScope.app = {};
		$rootScope.app.title = "Quantum Project";
		$rootScope.app.description = "Quantum Project web system";
	});
