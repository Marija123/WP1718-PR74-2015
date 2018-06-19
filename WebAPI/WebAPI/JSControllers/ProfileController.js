WebAPI.controller('ProfileController', function ($scope, ProfCont, $routeParams,$window) {


    function init() {
        console.log('Profile controller initialized');


        ProfCont.getUserByUsername($routeParams.username).then(function (response) {
            console.log(response.data);

            $scope.userProfile = response.data;


        });

    }

    init();

    $scope.AddDriveCustomer = function (drive) {

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

    }

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


        
    }

        $scope.EditUser = function (user) {

            if (user.username == null || user.username == "") {
                alert('Username field cant be empty!');
                return;
            }
            else if (user.ime == null || user.ime == "") {
                alert('Name field cant be empty!');
                return;
            }
            else if (user.prezime == null || user.prezime == "") {
                alert('Surname field cant be empty !');
                return;
            }
            else if (user.pol == null || user.pol == "") {
                alert('You must choose a gender!');
                return;
            }
            else if (user.jmbg == null || user.jmbg == "") {
                alert('Jmbg field cant be empty!');
                return;
            }
            else if (user.jmbg.match(/[a-z]/i)) {
                alert('Jmbg cant contain characters: a-z');
                return;
            }
            else if (user.jmbg.length != 13) {
                alert('Jmbg must contain 13 numbers');
                return;
            }
            else if (user.kontaktTelefon == null || user.kontaktTelefon == "") {
                alert('Phone number cant be empty!');
                return;
            }

            else if (user.kontaktTelefon.match(/[a-z]/i)) {
                alert('Phone number cant contain characterse a-z');
                return;
            }
            else if (user.email == null || user.email == "") {
                alert('Email field cant be empty!');
                return;
            }
            else if (!user.email.includes('@')) {
                alert('Email is not valid!');
                return;
            }
            else if (user.pwd == null || user.pwd == "") {
                alert('Password cant be empty!');
                return;
            }

            ProfCont.EditUser(user).then(function (response) {
                if (response.data == true) {
                    console.log(response.data);
                    $rootScope.RegisterSuccess = "Edit was successful. You can login now.";
                    $window.location.href = "#!/MyHome";
                }
                else {
                    alert("Username already exists, try again.");
                }
            });
        };

});