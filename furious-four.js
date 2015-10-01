angular.module('ffApp', [])
    .controller('FuriousFourController', function ($scope) {

        $scope.values = {
            time: "4",
            budget: "3",
            quality: "2",
            scope: "1"
        };

        var inWatch = false;

        $scope.$watch('values', function (newVal, oldVal) {
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
                $scope.values[replaceProperty] = oldNum;
            }
            else {
                inWatch = false;
            }
        }, true);
    });
