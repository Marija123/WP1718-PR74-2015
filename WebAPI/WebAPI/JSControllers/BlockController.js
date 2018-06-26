WebAPI.controller('BlockController', function ($scope, $rootScope, RegILogFactory, ProfCont, $window, $route) {

    if (!$rootScope.loggedin) {
        $window.location.href = '#!/Login';
    }
    if (sessionStorage.getItem("role") != 1) {
        $window.location.href = '#!/MyHome';
    }
    function init() {
        console.log('BlockController inicijalizovan');
        $scope.FlegZaBlokirane = false;
        $scope.FlegZaNeblokirane = false;
    }
    init();

    $scope.PrikaziBlokirane = function () {
        $scope.FlegZaBlokirane = true;
        $scope.FlegZaNeblokirane = false;


        ProfCont.getBlockedUsers().then(function (response) {
            $scope.BlokiraniKorisnici = response.data;
            console.log(response.data);
        });

    }
    $scope.PrikaziNeblokirane = function () {
        $scope.FlegZaBlokirane = false;
        $scope.FlegZaNeblokirane = true;

        ProfCont.getUnblockedUsers().then(function (response) {
            $scope.NeblokiraniKorisnici = response.data;
            console.log(response.data);
        });
    }

    $scope.Blokiraj = function (korisnicko) {
        ProfCont.Blokiraj(korisnicko).then(function (response) {
            $scope.NeblokiraniKorisnici = response.data;
            $scope.apply;
        });
    }
    $scope.Odblokiraj = function (korisnicko) {
        ProfCont.Odblokiraj(korisnicko).then(function (response) {
            $scope.BlokiraniKorisnici = response.data;
            $scope.apply;
        });
    }

});