angular.module('capapp', [
	'mobile-angular-ui',

	'ngRoute',

	

	'ngMockE2E'
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
.config(['$routeProvider', function($routeProvider) {
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
        .otherwise({
        	redirectTo: '/'
        });
	}]
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
angular.module('capapp')

.controller("capAppContoller", ['$log', '$scope', '$http', 'config', 'capAppService', function ($log, $scope, $http, config, capAppService) {

	$log.debug("init capAppContoller");

	// Date
	var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var months = ['January', 'Februari', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    $scope.day = days[new Date().getDay()];
    $scope.date = new Date().getDate() + " " + months[new Date().getMonth()];

    // User
    $log.debug("User", capAppService.user);
	$scope.user = capAppService.user;
	$scope.user.pictureUrl = "images/dagmarvanpelt.jpg";

 

    $scope.color = function (i) {

        color = {
            "0": "color0",
            "1": "color1",
            "2": "color2",
            "3": "color3"
        };

        return color[i % 4];
    };

    $scope.saveProfile = function(){
        $http.put("http://localhost:8080/capapi/api/users/me", $scope.user).success(function(){
        	$log.debug("Saved Profile");
        });
    };

	// Show and Hide footer
    $scope.showFooter = true;
    
    window.addEventListener('native.keyboardshow', function (e) {
        $scope.showFooter = false;
        $scope.$apply();
    });

    window.addEventListener('native.keyboardhide', function (e) {
        $scope.showFooter = true;
        $scope.$apply();
    });


}]);

angular.module('capapp')

.filter('moduleFilter', function () {
    return function (items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function (item) {
            filtered.push(item);
        });
        filtered.sort(function (a, b) {
            return (a[field] > b[field] ? 1 : -1);
        });
        if (reverse) filtered.reverse();
        return filtered;
    };
});

angular.module('capapp')

.service('capAppService', function(){

	this.user = {};
});

