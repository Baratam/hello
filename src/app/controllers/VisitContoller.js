angular.module('capapp')

.controller("visitContoller", function ($log, $scope) {

	$log.debug("init visit Contoller");
	$scope.visitImages = [
	{name: "1.png"}, 
	{name:"2.png"},
	{name:"3.png"},
	{name:"4.png"},
	{name:"5.png"}
	];

   });
