WebAPI.controller('HomeDrivesWaiting', function ($scope, $rootScope, RegILogFactory, ProfCont, $window) {

    if (!$rootScope.loggedin) {
        $window.location.href = '#!/Login';
    }

    function init() {

        ProfCont.getWaitingDrives(sessionStorage.getItem("username")).then(function (response) {
            $scope.Drives = response.data;
            $rootScope.RegisterSuccessF = "Voznje sa statusom 'Kreirana_Na Cekanju'";
            console.log(response.data);
        });
    }

    init();

});