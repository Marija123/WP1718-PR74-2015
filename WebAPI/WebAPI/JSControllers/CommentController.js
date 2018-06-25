WebAPI.controller('CommentController', function ($scope, $location, $rootScope, ProfCont, $window) {


    function init() 
    {
        $scope.Usp = false;
        $scope.Neusp = false;
       
    }

    init();

    $scope.DodajKomentarKo = function (ko) {

        if (ko == null) {
            alert('Morate uneti komentar');
            return;
        }
        ProfCont.DodajKomentar(ko, $rootScope.VoznjaZaKomentar).then(function (response) {

            console.log(response.data);
           
            $window.location.href = "#!/MyHome";
        });
    }

   

    $scope.UspesnaVoznja = function () {

        $scope.Usp = true;
        $scope.Neusp = false;
        $scope.apply;
    }

    $scope.NeuspesnaVoznja = function () {
        $scope.Neusp = true;
        $scope.Usp = false;
        $scope.apply;
    }

    $scope.DodajKomentarVozac = function (ko) {

        if (ko == null || ko.Opis == "" || ko.Opis == null) {
            alert('Morate uneti komentar');
            return;
        }
        ProfCont.DodajKomentarVozac(ko, $rootScope.VoznjaZaKomentarVozac).then(function (response) {

            console.log(response.data);
            $window.location.href = "#!/MyHome";
        });
    }

    $scope.DodajKraj = function (drive) {

        if (drive == null) {
            return;
        }

        if (drive.Cena <= 0) {
            alert('Morate uneti cenu');
            return;
        }
        if (document.getElementById("lon").value == null || document.getElementById("lon").value == "") {
            alert('X coordinate cant be empty!');
            return;
        }

        else if (document.getElementById("lat").value == null || document.getElementById("lat").value == "") {
            alert('Y coordinate cant be empty!');
            return;
        }
        else if (document.getElementById("address").innerHTML == null || document.getElementById("address").innerHTML == "") {
            alert('Street cant be empty!');
            return;
        }


        drive.XCoord = document.getElementById("lon").value;
        drive.YCoord = document.getElementById("lat").value;
        drive.Street = document.getElementById("address").innerHTML;

        ProfCont.DodajKraj(drive, $rootScope.VoznjaZaKomentarVozac).then(function (response) {

            console.log(response.data);
            $window.location.href = "#!/MyHome";
        });
    }

});