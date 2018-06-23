WebAPI.controller('MyHomeController', function ($scope, $rootScope, RegILogFactory, ProfCont, $window, $route) {

    if (!$rootScope.loggedin) {
        $window.location.href = '#!/Login';
    }

    function init() {

       // $rootScope.PostavljenKomentar = false;
        //$scope.FilterRez = null;
        ProfCont.getDrives(sessionStorage.getItem("username")).then(function (response) {
            $scope.MyDrives = response.data;
            $rootScope.RegisterSuccessF = "Vase voznje";
            $scope.listaFlag = 1;
            $scope.posebanFlag = 2;
            $scope.filtFlag = 0;
            console.log(response.data);
        });

        ProfCont.getDriverData(sessionStorage.getItem("username")).then(function (response) {
            $scope.DriverData = response.data;

        });

     
    }

    init();
    $scope.Sorting = function (Drives, broj) {
        ProfCont.Sorting(Drives,broj).then(function (response) {

            console.log(response.data);
            //$scope.MD = false;
            //$scope.AD = false;
            //$scope.CD = false;
            //$scope.SD = true;
            //$scope.FD = false;

            $scope.listaFlag = 4;
          
            
            $scope.SortedDrives = response.data;
        });
    }

    $scope.getWaitingDrives = function () {
        ProfCont.getWaitingDrives(sessionStorage.getItem("username")).then(function (response) {
           // $scope.FilterRez = response.data;
            $scope.WaitingDrives = response.data;
            $rootScope.RegisterSuccessF = "Voznje sa statusom 'Kreirana_Na Cekanju'";
            //$scope.MD = false;
            //$scope.AD = false;
            //$scope.CD = true;
            //$scope.SD = false;
            //$scope.FD = false;
            //$scope.FILT1 = false;
            //$scope.FILT2 = false;
            //$scope.SVE = false;
           // $scope.F = true;

            $scope.listaFlag = 3;
            $scope.posebanFlag = 3;
            $scope.filtFlag = 0;

            console.log(response.data);
        });
    }

    $scope.getAllDrives = function () {
        ProfCont.getAllDrives(sessionStorage.getItem("username")).then(function (response) {
           // $scope.FilterRez = response.data;
            $scope.AllDrives = response.data;
            $rootScope.RegisterSuccessF = "Sve voznje";
            //$scope.MD = false;
            //$scope.AD = true;
            //$scope.CD = false;
            //$scope.SD = false;
            //$scope.FD = false;
            //$scope.SVE = true;
            //$scope.FILT1 = false;
            //$scope.FILT2 = false;

            $scope.listaFlag = 2;
            $scope.posebanFlag = 1;
            $scope.filtFlag = 0;
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
            //$scope.MD = false;
            //$scope.AD = false;
            //$scope.CD = false;
            //$scope.SD = false;
            //$scope.FD = true;
            //$scope.FILT1 = true;
            //$scope.FILT2 = true;
            $scope.FilteredDrives = response.data;

            $scope.listaFlag = 5;
            // $scope.posebanFlag = 1;
            $scope.filtFlag = 1;

            //$scope.Drives = response.data;
        });
    }
        $scope.Pretrazi = function (Drive, su) {
            if (su == null) {
                //alert('Morate uneti po cemu zelite da pretrazite!');
                return;
            }
            if (su.OcenaOd == "") {
                su.OcenaOd = null;
            }
            //else {

            if (su.OcenaOd != null) {

                if (!/^\d+$/.test(su.OcenaOd)) {
                    alert("Uneta ocena mora biti broj");
                    return;
                }
            }
                

                
            //}
            if (su.OcenaDo == "") {
                su.OcenaDo = null;
            }
            //else {
            if (su.OcenaDo != null) {
                if (!/^\d+$/.test(su.OcenaDo)) {
                    alert("Uneta ocena mora biti broj");
                    return;
                }}
                

                   
            ////}
            if (su.CenaOd == "") {
                su.CenaOd = null;
            }
            //else {
            if (su.CenaOd != null) {
                if (!/^\d+$/.test(su.CenaOd)) {
                    alert("Uneta cena mora biti broj");
                    return;
                }
            }
               

                
            //}
            if (su.CenaDo == "") {
                su.CenaDo = null;
            }
            //else {
            if (su.CenaDo != null) {

                if (!/^\d+$/.test(su.CenaDo)) {
                    alert("Uneta cena mora biti broj");
                    return;
                }

            }
                
            //}

          
            if (su.VozIme == "") {
                su.VozIme = null;
            }
            if (su.VozPrezime == "") {
                su.VozPrezime = null;
            }
            if (su.MustIme == "") {
                su.MustIme = null;
            }
            if (su.MustPrezime == "") {
                su.MustPrezime = null;
            }



            ProfCont.Pretrazi(Drive, su).then(function (response) {

                console.log(response.data);
                //$scope.MD = false;
                //$scope.AD = false;
                //$scope.CD = false;
                //$scope.SD = false;
                //$scope.FD = true;
                //$scope.FILT1 = true;
                //$scope.FILT2 = true;
                $scope.SearchedDrives = response.data;

                $scope.listaFlag = 6;
                // $scope.posebanFlag = 1;
                $scope.filtFlag = 2;

                //$scope.Drives = response.data;
            });
        }

        $scope.OtkaziVoznju = function (drive) {
          
            ProfCont.OtkaziVoznju(drive).then(function (response) {

                console.log(response.data);
                $rootScope.VoznjaZaKomentar = response.data;

                $window.location.href = "#!/DodajKomentar";

               
            });
        }

        $scope.ObradiVoznju = function (drive, drives) {
            ProfCont.ObradiVoznju(drive, drives).then(function (response) {
                console.log(response.data);

                if ($scope.listaFlag == 1) {
                    $scope.MyDrives = response.data;
                    $scope.apply();
                }
                if ($scope.listaFlag == 2) {
                    $scope.AllDrives = response.data;
                    $scope.apply();
                }
                if ($scope.listaFlag == 4) {
                    $scope.SortedDrives = response.data;
                    $scope.apply();
                }
                if ($scope.listaFlag == 5) {
                    $scope.FilteredDrives = response.data;
                    $scope.apply();
                }
                if ($scope.listaFlag == 6) {
                    $scope.SearchedDrives = response.data;
                    $scope.apply();
                }

            });
        }

        $scope.PreuzmiVoznju = function (drive, drives) {
            ProfCont.PreuzmiVoznju(drive, drives).then(function (response) {
                console.log(response.data);

                $scope.DriverData.Zauzet = true;

                if ($scope.listaFlag == 3) {
                    $scope.WaitingDrives = response.data;
                    //$scope.apply();
                }

                if ($scope.listaFlag == 4) {
                    $scope.SortedDrives = response.data;
                    //$scope.apply();
                }

                if ($scope.listaFlag == 6) {
                    $scope.SearchedDrives = response.data;
                    // $scope.apply();
                }

                $scope.apply();

            });
        }

        $scope.ZavrsiVoznju = function (drive) {


            $rootScope.VoznjaZaKomentarVozac = drive;

            $window.location.href = "#!/ZavrsiVoznju";

        }

        $scope.DodajKomentar = function (drive) {

            if (drive == null) {
                return;
            }

            $rootScope.VoznjaZaKomentar = drive;

            
            
            $window.location.href = "#!/DodajKomentar";
           
        }

});