angular.module('news.module')

.controller("itemsController",  function ($scope) {

                $scope.$parent.isopen = ($scope.$parent.default === $scope.item);

                $scope.$watch('isopen', function (newvalue, oldvalue, $scope) {
                    $scope.$parent.isopen = newvalue;
                });

            });