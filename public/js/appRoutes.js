angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/transactions', {
			templateUrl: 'views/transactions.html',
			controller: 'TransactionsController'
		})

		.when('/alltransactions', {
			templateUrl: 'views/alltransactions.html',
			controller: 'AllTransactionsController'	
		});

	$locationProvider.html5Mode(true);

}]);