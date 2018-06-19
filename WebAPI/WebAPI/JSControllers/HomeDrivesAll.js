WebAPI.controller('HomeDrivesAll', function ($scope, $rootScope, RegILogFactory, ProfCont, $window) {

    if (!$rootScope.loggedin) {
        $window.location.href = '#!/Login';
    }

    function init() {

        ProfCont.getAllDrives(sessionStorage.getItem("username")).then(function (response) {
            $scope.Drives = response.data;
            $rootScope.RegisterSuccessF = "Sve voznje";
            console.log(response.data);
        });
    }

    init();

});