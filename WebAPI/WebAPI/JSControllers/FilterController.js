WebAPI.controller('FilterController', function ($scope, $rootScope,$routeParams, RegILogFactory, ProfCont, $window) {

    if (!$rootScope.loggedin) {
        $window.location.href = '#!/Login';
    }

    function init() {

        

        ProfCont.Filter($routeParams.Status).then(function (response) {

            console.log(response.data);
            $scope.S = false;
            $scope.FilterRez = response.data;
        });
       
    }

    init();
    //$scope.Sorting = function () {
    //    ProfCont.Sorting(sessionStorage.getItem("username")).then(function (response) {

    //        console.log(response.data);
    //        $scope.S = false;
    //        $scope.FilterRez = response.data;
    //    });
    //}
  

});