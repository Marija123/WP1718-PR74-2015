WebAPI.controller('Filter2Controller', function ($scope, $rootScope, $routeParams, RegILogFactory, ProfCont, $window) {

    if (!$rootScope.loggedin) {
        $window.location.href = '#!/Login';
    }

    function init() {


        ProfCont.Filter2($routeParams.Status).then(function (response) {

            console.log(response.data);

            $scope.S = true;
            $scope.FilterRez2 = response.data;
        });

    }

    init();



});