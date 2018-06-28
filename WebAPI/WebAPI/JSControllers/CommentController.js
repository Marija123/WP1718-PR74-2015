WebAPI.controller('CommentController', function ($scope, $location, $rootScope, ProfCont, RegILogFactory, $window) {

    if (!$rootScope.loggedin) {
        $window.location.href = '#!/Login';
    }
    function init() 
    {

        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";

            }

            $rootScope.moraKomentar = false;
   
            $scope.Usp = false;
            $scope.Neusp = false;
        });
    }

    init();

    $scope.DodajKomentarKo = function (ko) {

        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";
               
            }
        

        if (ko == null) {
            alert('Morate uneti komentar');
            return;
        }
        if (ko.Opis == "") {
            ko.Opis = null;
        }
        if ($rootScope.moraKomentarKorisnik == true) {
            ko.Ocena = "0";
            if (ko.Opis == null) {
                alert('Morate uneti komentar!');
                return;
            }
        }
        if ($rootScope.moraKomentarKorisnik == false) {
            if (ko.Ocena == "") {
                ko.Ocena = null;
            }
           
            if (ko.Opis == null && ko.Ocena == null) {
                alert('Morate uneti komentar!');
                return;
            }
            if (ko.Ocena != "1" && ko.Ocena != "2" && ko.Ocena != "3" && ko.Ocena != "4" && ko.Ocena != "5") {
                alert('Ocena mora biti od 1 do 5!');
                return;
            }
        }
        
        
        ProfCont.DodajKomentar(ko, $rootScope.VoznjaZaKomentar).then(function (response) {

            console.log(response.data);
            $rootScope.moraKomentarKorisnik = false;
            $rootScope.apply;
            $window.location.href = "#!/MyHome";
        });

        });
    }

   

    $scope.UspesnaVoznja = function () {

        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";

            }

            $scope.Usp = true;
            $scope.Neusp = false;
            $scope.apply;
            $rootScope.moraKomentar = false;
            $rootScope.apply;

        });
    }

    $scope.NeuspesnaVoznja = function () {
        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";

            }

            $scope.Neusp = true;
            $scope.Usp = false;
            $scope.apply;
            $rootScope.moraKomentar = true;
            $rootScope.apply;
        });
    }

    $scope.DodajKomentarVozac = function (ko) {

        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";

            }

            if (ko == null || ko.Opis == "" || ko.Opis == null) {
                alert('Morate uneti komentar');
                return;
            }



            ProfCont.DodajKomentarVozac(ko, $rootScope.VoznjaZaKomentarVozac).then(function (response) {
               
                console.log(response.data);

                $rootScope.moraKomentar = false;
                $rootScope.apply;
                $window.location.href = "#!/MyHome";
            });
        });
    }

    $scope.DodajKraj = function (drive) {

        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";

            }

            if (drive == null) {
                alert('Morate popuniti polja');
                return;
            }

            if (drive.Cena <= 0) {
                alert('Morate uneti cenu');
                return;
            }
            if (document.getElementById("lon").innerHTML == null || document.getElementById("lon").innerHTML == "") {
                alert('X ne moze biti prazna!');
                return;
            }

            else if (document.getElementById("lat").innerHTML == null || document.getElementById("lat").innerHTML == "") {
                alert('Y ne moze biti prazna!');
                return;
            }
            else if (document.getElementById("address").innerHTML == null || document.getElementById("address").innerHTML == "") {
                alert('Adresa ne moze biti prazna!');
                return;
            }


            drive.XCoord = document.getElementById("lon").innerHTML;
            drive.YCoord = document.getElementById("lat").innerHTML;
            drive.Street = document.getElementById("address").innerHTML;

            ProfCont.DodajKraj(drive, $rootScope.VoznjaZaKomentarVozac).then(function (response) {

                console.log(response.data);
                $window.location.href = "#!/MyHome";
            });
        });
    }

});