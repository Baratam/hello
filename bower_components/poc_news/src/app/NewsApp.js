angular.module('news.module', [
	'ngRoute'])

//routing
.config(function($routeProvider) {
		$routeProvider
	
		.when('/news/newsHome', {
            templateUrl: 'views/news/newsHome.html',
            controller: 'newsHomeController'
        });
	}
);