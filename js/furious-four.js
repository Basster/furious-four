(function () {
    "use strict";
    var furiousFour = angular.module('furious-four', []);

    furiousFour.controller('FuriousFourController', ['$scope', function ($scope) {

        var vm = this;
        var inWatch = false;

        vm.values = {
            time: "4",
            budget: "3",
            quality: "2",
            scope: "1"
        };

        var watcher = function (newVal, oldVal) {
            var changedProperty, replaceProperty = null;

            for (var prop in oldVal) {
                if (oldVal.hasOwnProperty(prop) && oldVal[prop] !== newVal[prop]) {
                    changedProperty = prop;
                    break;
                }
            }

            var oldNum = oldVal[changedProperty];
            var newNum = newVal[changedProperty];

            for (var p in oldVal) {
                if (oldVal.hasOwnProperty(p) && oldVal[p] === newNum) {
                    replaceProperty = p;
                    break;
                }
            }

            if (changedProperty && inWatch === false) {
                inWatch = true;
                vm.values[replaceProperty] = oldNum;
            }
            else {
                inWatch = false;
            }
        };

        var watchValues = function () {
            return vm.values;
        };

        $scope.$watch(watchValues, watcher, true);
    }]);

    furiousFour.directive('theFuriousFour', function () {
        return {
            restrict: 'EA',
            templateUrl: 'template/furious-four.html',
            controller: 'FuriousFourController',
            controllerAs: 'vm'
        }
    })
})();
