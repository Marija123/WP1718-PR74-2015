WebAPI.controller('MyHomeController', function ($scope, $rootScope, RegILogFactory,ProfCont,$window) {

    if (!$rootScope.loggedin) {
        $window.location.href = '#!/Login';
    }

    function init() {

        //$scope.FilterRez = null;
        ProfCont.getDrives(sessionStorage.getItem("username")).then(function (response) {
            $scope.MyDrives = response.data;
            $rootScope.RegisterSuccessF = "Vase voznje";
            $scope.MD = true;
            $scope.AD = false;
            $scope.CD = false;
            $scope.SD = false;
            $scope.FD = false;
            $scope.SVE = false;
            $scope.FILT1 = false;
            $scope.FILT2 = false;
            console.log(response.data);
        });
    }

    init();
    $scope.Sorting = function (Drives, broj) {
        ProfCont.Sorting(Drives,broj).then(function (response) {

            console.log(response.data);
            $scope.MD = false;
            $scope.AD = false;
            $scope.CD = false;
            $scope.SD = true;
            $scope.FD = false;
            
            $scope.SortedDrives = response.data;
        });
    }

    $scope.getWaitingDrives = function () {
        ProfCont.getWaitingDrives(sessionStorage.getItem("username")).then(function (response) {
           // $scope.FilterRez = response.data;
            $scope.WaitingDrives = response.data;
            $rootScope.RegisterSuccessF = "Voznje sa statusom 'Kreirana_Na Cekanju'";
            $scope.MD = false;
            $scope.AD = false;
            $scope.CD = true;
            $scope.SD = false;
            $scope.FD = false;
            $scope.FILT1 = false;
            $scope.FILT2 = false;
            $scope.SVE = false;
           // $scope.F = true;
            console.log(response.data);
        });
    }

    $scope.getAllDrives = function () {
        ProfCont.getAllDrives(sessionStorage.getItem("username")).then(function (response) {
           // $scope.FilterRez = response.data;
            $scope.AllDrives = response.data;
            $rootScope.RegisterSuccessF = "Sve voznje";
            $scope.MD = false;
            $scope.AD = true;
            $scope.CD = false;
            $scope.SD = false;
            $scope.FD = false;
            $scope.SVE = true;
            $scope.FILT1 = false;
            $scope.FILT2 = false;
            console.log(response.data);
        });
    }
    $scope.Filter = function (Drive, Status) {
        if (Status == null || Status == "") {
            alert('Morate uneti po cemu zelite da sortirate!')
            return;
        }
        ProfCont.Filter(Drive, Status).then(function (response) {

            console.log(response.data);
            $scope.MD = false;
            $scope.AD = false;
            $scope.CD = false;
            $scope.SD = false;
            $scope.FD = true;
            $scope.FILT1 = true;
            $scope.FILT2 = true;
            $scope.FilteredDrives = response.data;
            //$scope.Drives = response.data;
        });
    }
    

});