angular.module('capapp')

.controller("alertsContoller", function ($log, $scope) {

	$log.debug("init alertsContoller");

   $scope.notices = [];

  for (var j = 0; j < 15; j++) {
    $scope.notices.push({icon: 'envelope', message: 'Notice ' + (j + 1)});
  }

  $scope.deleteNotice = function(notice) {
    var index = $scope.notices.indexOf(notice);
    if (index > -1) {
      $scope.notices.splice(index, 1);
    }
  };





});
