WebAPI.controller('MainController', function ($scope, $location, $rootScope) {

    // Kontroler koji je zaduzen za Index.cshtml, svaki put kada se bilo koja stranica ucita, proverava se cookie

    if (document.cookie !== "") {
        //console.log(document.cookie);
        var cookieInfo = document.cookie.substring(5, document.cookie.length);
        //var parsed = JSON.parse(cookieInfo);
        var parsed = jQuery.parseJSON(cookieInfo);
        sessionStorage.setItem("username", parsed.username);
        sessionStorage.setItem("role", parsed.role);
        sessionStorage.setItem("nameSurname", parsed.nameSurname);

        $rootScope.loggedin = true;
        $rootScope.moraKomentar = false;
        $rootScope.moraKomentarKorisnik = false;

      
        $rootScope.user = {
            username: sessionStorage.getItem("username"),
            role: sessionStorage.getItem("role"),
            nameSurname: sessionStorage.getItem("nameSurname")
        };
    } else {
        $rootScope.loggedin = false;
    }

    $scope.checkActive = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }


    $scope.Logout = function () {
        document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        sessionStorage.clear();
        $rootScope.loggedin = false;
        $rootScope.user = {};
        document.location.href = "#!/Login";
    }
});