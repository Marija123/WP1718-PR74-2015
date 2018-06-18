WebAPI.controller('MyHomeController', function ($scope, $rootScope, RegILogFactory,ProfCont,$window) {

    if (!$rootScope.loggedin) {
        $window.location.href = '#!/Login';
    }
  
    function init() {
       
        ProfCont.getDrives(sessionStorage.getItem("username")).then(function (response) {
            $scope.Drives = response.data;
            console.log(response.data);
        });
    }

    init();

});