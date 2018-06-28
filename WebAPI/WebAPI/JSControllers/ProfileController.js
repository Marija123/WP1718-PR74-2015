WebAPI.controller('ProfileController', function ($scope, ProfCont, $window, $rootScope, RegILogFactory) {

    if (!$rootScope.loggedin) {
        $window.location.href = '#!/Login';
    }

    function init() {

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
            $rootScope.moraKomentarKorisnik = false;
          

            console.log('Profile controller initialized');
            $scope.PrikaziKorisnickoIme = false;
            $scope.PrikaziIme = false;
            $scope.PrikaziPrezime = false;
            $scope.najbliziVozaci = false;
            $scope.Prazna = false;

            ProfCont.getUserByUsername(sessionStorage.getItem("username")).then(function (response) {
                console.log(response.data);


                $scope.userProfile = response.data;
                if ($scope.userProfile.Pol == "Musko") {
                    $scope.P = 'Musko';
                }
                else {
                    $scope.P = 'Zensko';
                }
               

            });
        });

    }

    init();

    $scope.AddDriveCustomer = function (drive) {

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
                alert('Morate uneti podatke voznje!');
                return;
            }

            if (drive.tipAuta == null || drive.tipAuta == "") {
                alert('Morate uneti tip auta');
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
            ProfCont.AddDriveCustomer(drive).then(function (response) {
                if (response.data == true) {
                    console.log(response.data);
                    $scope.newDrive = response.data;
                    //$rootScope.RegisterSuccess = "Registration was successful. You can login now.";
                    $window.location.href = "#!/MyHome";
                }
                else {
                    alert("Voznja ne postoji.");
                }
            });
        });

    };

    $scope.AddDriveDispecer = function (drive) {

        //RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
        //    if (response.data == true) {
        //        alert('Blokirani ste!');
        //        document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        //        sessionStorage.clear();
        //        $rootScope.loggedin = false;
        //        $rootScope.user = {};
        //        document.location.href = "#!/Login";

        //    }
        if (drive == null) {
            alert('Morate uneti podatke!');
            return;
        }

        if (drive.tipAuta == null || drive.tipAuta == "") {
            alert('Morate uneti tip auta');
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
            $scope.VoznjaZaDodavanjeDispecer = drive;

            ProfCont.AddDriveDispecer(drive).then(function (response) {

                console.log(response.data);
                // $scope.newDrive = response.data;
                if (response.data.length == 0) {
                    $scope.Prazna = true;
                }


                $scope.ListaNajblizih = response.data;
                $scope.najbliziVozaci = true;
                $scope.apply;
                //$rootScope.RegisterSuccess = "Registration was successful. You can login now.";
                // $window.location.href = "#!/MyHome";


            });


      //  });
    };

    $scope.DodajVoznjuDisp = function (noviModel) {

        //RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
        //    if (response.data == true) {
        //        alert('Blokirani ste!');
        //        document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        //        sessionStorage.clear();
        //        $rootScope.loggedin = false;
        //        $rootScope.user = {};
        //        document.location.href = "#!/Login";

        //    }

            if (noviModel == null) {
                alert('Morate selektovati vozaca');
                return;
            }
            ProfCont.DodajVoznjuDisp(noviModel, $scope.VoznjaZaDodavanjeDispecer).then(function (response) {

                console.log(response.data);

                $window.location.href = "#!/MyHome";
            });
       // });
    }

    $scope.EditUser = function (user) {

        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";

            }

            if (user.username == null || user.username == "") {
                user.username = $scope.userProfile.KorisnickoIme;
            }
            if (user.ime == null || user.ime == "") {
                user.ime = $scope.userProfile.Ime;
            }
            if (user.prezime == null || user.prezime == "") {
                user.prezime = $scope.userProfile.Prezime;
            }
            if (user.pol == null || user.pol == "") {
                user.pol = $scope.userProfile.Pol;
            }
            if (user.jmbg == null || user.jmbg == "") {
                user.jmbg = $scope.userProfile.JMBG;

            }

            if (user.kontaktTelefon == null || user.kontaktTelefon == "") {
                user.kontaktTelefon = $scope.userProfile.KontaktTelefon;

            }
            if (user.email == null || user.email == "") {
                user.email = $scope.userProfile.Email;
            }

            if (user.pwd == null || user.pwd == "") {
                user.pwd = $scope.userProfile.Lozinka;
            }

            //user.OldUsername = $scope.userProfile.UserName;
            ProfCont.EditUser(user).then(function (response) {
                // if (response.data == true) {
                if (response.data != 3) {
                    console.log(response.data);
                    //var cookieInfo = document.cookie.substring(5, document.cookie.length);
                    //var parsed1 = JSON.parse(cookieInfo)
                    document.cookie = "user=" + JSON.stringify({
                        username: user.username, //response.data.UserName,
                        role: response.data, //response.data.Role,
                        nameSurname: user.ime + " " + user.prezime //response.data.Name + " " + response.data.Surname
                    }) + ";expires=Thu, 01 Jan 2019 00:00:01 GMT;";

                    sessionStorage.setItem("username", user.username);
                    sessionStorage.setItem("role", response.data);
                    sessionStorage.setItem("nameSurname", user.ime + " " + user.prezime);

                    $rootScope.user.username = sessionStorage.getItem("username");
                    $rootScope.user.nameSurname = sessionStorage.getItem("nameSurname");

                    $window.location.href = "#!/MyHome";
                }
                else {
                    alert("Korisnik sa tim imenom vec postoji.");
                }
            });

        });


    };
    
    $scope.Izmeni = function (drivee) {
        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";

            }

            if (drivee == null) {
                drivee = {};
                drivee.tipAuta = $rootScope.VoznjaZaIzmenu.TipAuta;

            }

            if (drivee.tipAuta == null || drivee.tipAuta == "") {
                drivee.tipAuta = $rootScope.VoznjaZaIzmenu.TipAuta;
            }
        

            if (document.getElementById("lon").innerHTML == null || document.getElementById("lon").innerHTML == "") {
                drivee.XCoord = $rootScope.VoznjaZaIzmenu.LokacijaZaDolazak.Xkoordinate;
            }
            else {
                drivee.XCoord = document.getElementById("lon").innerHTML;
            }

            if (document.getElementById("lat").innerHTML == null || document.getElementById("lat").innerHTML == "") {
                drivee.YCoord = $rootScope.VoznjaZaIzmenu.LokacijaZaDolazak.Ykoordinate;
            } else {
                drivee.YCoord = document.getElementById("lat").innerHTML;
            }
            if (document.getElementById("address").innerText == null || document.getElementById("address").innerText == "") {
                drivee.Street = $rootScope.VoznjaZaIzmenu.LokacijaZaDolazak.Adr.FormatAdrese;
            } else {
                drivee.Street = document.getElementById("address").innerText;
            }

           
            drivee.Datum = $rootScope.VoznjaZaIzmenu.DatumIVremePorudzbine;
            ProfCont.Izmeni(drivee).then(function (response) {
                if (response.data == true) {
                    console.log(response.data);
                  
                    $window.location.href = "#!/MyHome";
                }
                else {
                    alert("Voznja ne postoji.");
                }
            });
        });
    }

    $scope.IzmeniV = function () {

        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";

            }

            drivee = {};
            if (document.getElementById("lon").innerHTML == null || document.getElementById("lon").innerHTML == "" || document.getElementById("lat").innerHTML == null || document.getElementById("lat").innerHTML == "" || document.getElementById("address").innerText == null || document.getElementById("address").innerText == "") {
                alert('Morate odabrati novu lokaciju');
                return;
            }
            else {
                drivee.XCoord = document.getElementById("lon").innerHTML;
                drivee.YCoord = document.getElementById("lat").innerHTML;
                drivee.Street = document.getElementById("address").innerText;
            }

            ProfCont.IzmeniV(drivee).then(function (response) {
                window.location.href = "#!/MyHome";
            });
        });
    }


    

    $scope.ObradiVoznjuDisp = function (noviModel) {

        //RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
        //    if (response.data == true) {
        //        alert('Blokirani ste!');
        //        document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        //        sessionStorage.clear();
        //        $rootScope.loggedin = false;
        //        $rootScope.user = {};
        //        document.location.href = "#!/Login";

        //    }

            if (noviModel == null) {
                alert('Morate odabrati vozaca');
                return;
            }

            ProfCont.ObradiVoznjuDisp(noviModel, $rootScope.VoznjaZaObradu).then(function (response) {
                window.location.href = "#!/MyHome";
            });
       // });
    }

});