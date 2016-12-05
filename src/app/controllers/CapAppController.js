angular.module('capapp')

.controller("capAppContoller", function ($log, $scope, $http, config, capAppService) {

	$log.debug("init capAppContoller");

	// Date
	var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var months = ['January', 'Februari', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    $scope.day = days[new Date().getDay()];
    $scope.date = new Date().getDate() + " " + months[new Date().getMonth()] + " " + new Date().getFullYear();

    // User
    $log.debug("User", capAppService.user);
	$scope.user = capAppService.user;
	$scope.user.pictureUrl = "images/logo_ing.png";

 

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
     //   $http.put("http://localhost:8080/capapi/api/users/me", $scope.user).success(function(){
      //  	$log.debug("Saved Profile");
        //});
		alert("User Registered");
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


});
