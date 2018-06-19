WebAPI.controller('MyHomeController', function ($scope, $rootScope, RegILogFactory,ProfCont,$window) {

    if (!$rootScope.loggedin) {
        $window.location.href = '#!/Login';
    }
  
    function init() {

        //$scope.FilterRez = null;
        ProfCont.getDrives(sessionStorage.getItem("username")).then(function (response) {
            $scope.Drives = response.data;
            $rootScope.RegisterSuccessF = "Vase voznje";
            console.log(response.data);
        });
    }

    init();

    //$scope.Filter = function (fu) {


    //    ProfCont.Filter(fu).then(function (response) {
           
    //            console.log(response.data);
    //           // $scope.newDrive = response.data;
    //            //$rootScope.RegisterSuccess = "Registration was successful. You can login now.";
    //           // $window.location.href = "#!/Filter";
    //            $scope.FilterRez = response.data;
    //            $scope.Drives = null;
                
            
    //    });



    //}

});