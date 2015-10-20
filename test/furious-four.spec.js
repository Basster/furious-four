describe('Furious Four', function () {
    beforeEach(module('ffApp'));

    describe('FuriousFourController', function () {

        var $scope, $controller;

        beforeEach(inject(function ($rootScope, _$controller_) {
            $scope = $rootScope.$new();
            $controller = _$controller_('FuriousFourController', {$scope: $scope});

            $scope.vm = $controller;
            $scope.$apply();
        }));

        /**
         * Checks all scope values.
         *
         * @param time
         * @param budget
         * @param quality
         * @param scope
         */
        function assertValues(time, budget, quality, scope) {
            $scope.$digest();

            expect($controller.values.time).toEqual(time);
            expect($controller.values.budget).toEqual(budget);
            expect($controller.values.quality).toEqual(quality);
            expect($controller.values.scope).toEqual(scope);
        }

        it('should set the default values', function () {
            assertValues('4', '3', '2', '1');
        });

        it('should switch the values of two properties', function () {
            $controller.values.time = '3';
            assertValues('3', '4', '2', '1');

            $controller.values.scope = '3';
            assertValues('1', '4', '2', '3');

            $controller.values.budget = '2';
            assertValues('1', '2', '4', '3');

            $controller.values.quality = '1';
            assertValues('4', '2', '1', '3');
        })
    });
});