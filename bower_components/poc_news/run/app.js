angular.module('news.app', [
  'news.module',
  'ui.bootstrap'
])

//routing
.config(function($routeProvider) {
	$routeProvider
	.otherwise({
    	redirectTo: '/news/newsHome'
  	});
})

.constant("config", {
	clarity : {
		url : "/clarity"
	}
});