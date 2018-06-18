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

});