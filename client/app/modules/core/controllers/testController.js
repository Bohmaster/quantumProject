'use strict';

angular.module('module.core')
	.controller('testController', function($scope, $modal) {
		$scope.openModal = function() {
			$modal.open({
				template: "modal"
			});
		};
	});