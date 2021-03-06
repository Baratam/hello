angular.module('capapp', [
	'mobile-angular-ui',
	'mobile-angular-ui.gestures',
	'mobile-angular-ui.components.switch',
	'ngRoute',
	'ngMockE2E',
	'agenda.module',
	'news.module',
	'capapp.clarity.module',
    'capapp.clarity.mock',
	'directivesClarityApp',
	'ui.bootstrap',
	'directivesClarityApp',
	'mobile-angular-ui.directives.overlay',
	'customDirectives',
	'scrollableDirectives',
	'ui.bootstrap'
])

/*
.run(function($httpBackend, config) {
	$httpBackend.whenGET(new RegExp(config.API_URL + "/users/me")).passThrough();
	$httpBackend.whenPUT(new RegExp(config.API_URL + "/users/me")).passThrough();
})
*/
// handle authentication
/*
.run(function($log, $location, authenticationService, capAppService){
	    // Init on resume
    document.addEventListener("resume", initAuthentication, false);

    function initAuthentication(){
    	authenticationService.init().then(
    	function(user){
			$log.debug("authentication succesfull", user);
			capAppService.user = user;
			$location.path("/home");
		},
		function(response){
			$log.debug("authentication failed");
		});
    }
    initAuthentication();

	
})*/

//routing
.config(function($routeProvider) {
		$routeProvider
		.when('/', {
            templateUrl: 'views/home/menu.html',
            controller: 'capAppContoller'
        })
        .when('/profile', {
            templateUrl: 'views/home/profile.html',
            controller: 'capAppContoller'
        })
        .when('/login', {
            templateUrl: 'views/home/login.html',
            controller: 'loginCapAppContoller'
        })
		.when('/alerts/list', {
            templateUrl: 'views/home/alerts.html',
            controller: 'alertsContoller'
        })
		.when('/visiting/list', {
            templateUrl: 'views/home/places.html',
            controller: 'visitContoller'
        })
		.when('/contacts', {
            templateUrl: 'views/home/contacts.html',
            controller: 'contactsContoller'
        })
        .otherwise({
        	redirectTo: '/'
        });
	}
)

.constant("config", {
	//API_URL: "http://localhost:8080/capapi/api",
    //AUTH_URL: "http://localhost:8080/capapi/oauth",

    API_URL: "https://capapp.azurewebsites.net/api",
    AUTH_URL: "https://capapp.azurewebsites.net/oauth",



	peoplefinder : {
		url : "/people"
	},
	carpool : {
		url : "/carpool"
	},
	clarity : {
		url : "/clarity"
	},
	linkedin : {
		url : ""
	}
});