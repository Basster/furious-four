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

        it('should set the default values', function () {
            expect($controller.values.quality).toEqual('4');
            expect($controller.values.scope).toEqual('3');
            expect($controller.values.time).toEqual('2');
            expect($controller.values.budget).toEqual('1');
        });

        it('should switch the values of two properties', function () {
            $controller.values.quality = '3';
            $scope.$digest();
            // quality: 3, scope: 4, time: 2, budget: 1
            expect($controller.values.quality).toEqual('3');
            expect($controller.values.scope).toEqual('4');

            $controller.values.budget = '3';
            $scope.$digest();
            // quality: 1, scope: 4, time: 2, budget: 3
            expect($controller.values.quality).toEqual('1');

            $controller.values.time = '3';
            $scope.$digest();
            // quality: 1, scope: 4, time: 3, budget: 2
            expect($controller.values.budget).toEqual('2');

            $controller.values.scope = '3';
            $scope.$digest();
            // quality: 1, scope: 3, time: 4, budget: 2
            expect($controller.values.time).toEqual('4');
        })
    });
});