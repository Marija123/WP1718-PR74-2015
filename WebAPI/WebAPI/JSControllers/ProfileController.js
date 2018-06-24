WebAPI.controller('ProfileController', function ($scope, ProfCont, $routeParams,$window, $rootScope) {


    function init() {
        console.log('Profile controller initialized');
        $scope.PrikaziKorisnickoIme = false;
        $scope.PrikaziIme = false;
        $scope.PrikaziPrezime = false;

        ProfCont.getUserByUsername($routeParams.username).then(function (response) {
            console.log(response.data);

            if (response.data.Pol == 0) {
                $scope.P = 'Musko';
            }
            else {
                $scope.P = 'Zensko';
            }
            $scope.userProfile = response.data;
            //$rootScope.XCoord = "";
            //$scope.user = response.data;

        });

    }

    init();

    $scope.AddDriveCustomer = function (drive) {

        //alert($rootScope.XCoord);
        
        if (document.getElementById("xCoord") == null || document.getElementById("xCoord") == "") {
            alert('X coordinate cant be empty!');
            return;
        }

        //if (drive.XCoord == null || drive.XCoord == "") {
        //    alert('X coordinate cant be empty!');
        //    return;
        //}
        //else if (drive.YCoord == null || drive.YCoord == "") {
        //    alert('Y coordinate cant be empty!');
        //    return;
        //}
        else if (document.getElementById("yCoord") == null || document.getElementById("yCoord") == "") {
            alert('Y coordinate cant be empty!');
            return;
        }
        else if (drive.Street == null || drive.Street == "") {
            alert('Street cant be empty!');
            return;
        }
        else if (drive.Number == null || drive.Number == "") {
            alert('Number cant be empty!');
            return;
        } else if (drive.Town == null || drive.Town == "") {
            alert('Town cant be empty!');
            return;
        } else if (drive.PostalCode == null || drive.PostalCode == "") {
            alert('Postal code cant be empty!');
            return;
        }

        drive.XCoord = document.getElementById("xCoord").value;
        drive.YCoord = document.getElementById("yCoord").value;
        ProfCont.AddDriveCustomer(drive).then(function (response) {
            if (response.data == true) {
                console.log(response.data);
                $scope.newDrive = response.data;
                //$rootScope.RegisterSuccess = "Registration was successful. You can login now.";
                $window.location.href = "#!/MyHome";
            }
            else {
                alert("Drive does not exist.");
            }
        });

    };

    $scope.AddDriveDispecer = function (drive) {

        if (drive.XCoord == null || drive.XCoord == "") {
            alert('X coordinate cant be empty!');
            return;
        }
        else if (drive.YCoord == null || drive.YCoord == "") {
            alert('Y coordinate cant be empty!');
            return;
        }
        else if (drive.Street == null || drive.Street == "") {
            alert('Street cant be empty!');
            return;
        }
        else if (drive.Number == null || drive.Number == "") {
            alert('Number cant be empty!');
            return;
        } else if (drive.Town == null || drive.Town == "") {
            alert('Town cant be empty!');
            return;
        } else if (drive.PostalCode == null || drive.PostalCode == "") {
            alert('Postal code cant be empty!');
            return;
        }


        ProfCont.AddDriveDispecer(drive).then(function (response) {
            if (response.data == true) {
                console.log(response.data);
                $scope.newDrive = response.data;
                //$rootScope.RegisterSuccess = "Registration was successful. You can login now.";
                $window.location.href = "#!/MyHome";
            }
            else {
                alert("Drive does not exist.");
            }
        });



    };

    $scope.EditUser = function (user) {

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

                //$rootScope.loggedin = true;
                $rootScope.user.username = sessionStorage.getItem("username");
                $rootScope.user.nameSurname = sessionStorage.getItem("nameSurname");
                // = {
                //    username: sessionStorage.getItem("username"),
                //    role: sessionStorage.getItem("role"),
                //    nameSurname: sessionStorage.getItem("nameSurname")
                //};


                $window.location.href = "#!/MyHome";
            }
            else {
                alert("Username already exists.");
            }
        });




    };


            //ProfCont.EditUser(user, userProfileA).then(function (response) {
            //    if (response.data == true) {
            //        console.log(response.data);
            //        $rootScope.RegisterSuccess = "Edit was successful. You can login now.";
            //        $window.location.href = "#!/MyHome";
            //    }
               
            //});
        

       
});