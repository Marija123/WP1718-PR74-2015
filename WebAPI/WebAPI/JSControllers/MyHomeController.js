WebAPI.controller('MyHomeController', function ($scope, $rootScope, RegILogFactory, ProfCont, $window, $route) {

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
           

            $rootScope.DozvolaZaIzmenuVoznjeKorisniku = false;
            $rootScope.DozvolaZaZavrsenuVoznju = false;
            $rootScope.DozvolaZaObraduVoznji = false;

            ProfCont.getDrives(sessionStorage.getItem("username")).then(function (response) {
                $scope.MyDrives = response.data;
                $scope.listaFlag = 1;
                $scope.posebanFlag = 2;
                $scope.filtFlag = 0;
                console.log(response.data);
            });


            ProfCont.getDriverData(sessionStorage.getItem("username")).then(function (response) {
                $scope.DriverData = response.data;

            });
            $rootScope.DozvolaZaKomentarKorisnika = false;
        });
    }

    init();
    $scope.Sorting = function (Drives, broj) {
        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";

            }
            ProfCont.Sorting(Drives, broj).then(function (response) {

                console.log(response.data);
                $scope.listaFlag = 4;
                $scope.SortedDrives = response.data;
            });
        });
    }

    $scope.getWaitingDrives = function () {

        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";

            }
            ProfCont.getWaitingDrives(sessionStorage.getItem("username")).then(function (response) {

                $scope.WaitingDrives = response.data;

                $scope.listaFlag = 3;
                $scope.posebanFlag = 3;
                $scope.filtFlag = 0;

                console.log(response.data);
            });
        });
    }

    $scope.getAllDrives = function () {
        ProfCont.getAllDrives(sessionStorage.getItem("username")).then(function (response) {
   
            $scope.AllDrives = response.data;
            
            $scope.listaFlag = 2;
            $scope.posebanFlag = 1;
            $scope.filtFlag = 0;
            console.log(response.data);
        });
    }
    $scope.Filter = function (Drive, Status) {
        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";

            }

            if (Status == null || Status == "") {
                alert('Morate uneti po cemu zelite da sortirate!')
                return;
            }
            ProfCont.Filter(Drive, Status).then(function (response) {

                console.log(response.data);

                $scope.FilteredDrives = response.data;

                $scope.listaFlag = 5;
                $scope.filtFlag = 1;

                
            });
        });
    }
    $scope.Pretrazi = function (Drive, su) {

        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";

            }

            if (su == null) {
                //alert('Morate uneti po cemu zelite da pretrazite!');
                return;
            }
            if (su.OcenaOd == "") {
                su.OcenaOd = null;
            }
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
                }
            }



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
                $scope.SearchedDrives = response.data;

                $scope.listaFlag = 6;
                $scope.filtFlag = 2;

               
            });
        });
    }

    $scope.OtkaziVoznju = function (drive) {
        RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
            if (response.data == true) {
                alert('Blokirani ste!');
                document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                sessionStorage.clear();
                $rootScope.loggedin = false;
                $rootScope.user = {};
                document.location.href = "#!/Login";

            }

            ProfCont.OtkaziVoznju(drive).then(function (response) {

                console.log(response.data);
                $rootScope.VoznjaZaKomentar = response.data;
                $rootScope.moraKomentarKorisnik = true;
              
                $rootScope.DozvolaZaKomentarKorisnika = true;
                $window.location.href = "#!/DodajKomentar";


            });
        });
    }

        $scope.ObradiVoznju = function (drive) {
            $rootScope.VoznjaZaObradu = drive; 
            ProfCont.ObradiVoznju(drive).then(function (response) {
                console.log(response.data);
                if (response.data.length == 0) {
                    $rootScope.NemaVozaca = true;
                }
                else {
                    $rootScope.NemaVozaca = false;
                }
                $rootScope.DozvolaZaObraduVoznji = true;
                $rootScope.PonudjeniVozaci = response.data;
                $window.location.href = "#!/ObradiVoznju";
                //if ($scope.listaFlag == 1) {
                //    $scope.MyDrives = response.data;
                //    $scope.apply;
                //}
                //if ($scope.listaFlag == 2) {
                //    $scope.AllDrives = response.data;
                //    $scope.apply;
                //}
                //if ($scope.listaFlag == 4) {
                //    $scope.SortedDrives = response.data;
                //    $scope.apply;
                //}
                //if ($scope.listaFlag == 5) {
                //    $scope.FilteredDrives = response.data;
                //    $scope.apply;
                //}
                //if ($scope.listaFlag == 6) {
                //    $scope.SearchedDrives = response.data;
                //    $scope.apply;
                //}

            });
        }

        $scope.PreuzmiVoznju = function (drive, drives) {

            RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
                if (response.data == true) {
                    alert('Blokirani ste!');
                    document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                    sessionStorage.clear();
                    $rootScope.loggedin = false;
                    $rootScope.user = {};
                    document.location.href = "#!/Login";

                }

                ProfCont.PreuzmiVoznju(drive, drives).then(function (response) {
                    console.log(response.data);

                    $scope.DriverData.Zauzet = true;

                    if ($scope.listaFlag == 3) {
                        $scope.WaitingDrives = response.data;
                    }

                    if ($scope.listaFlag == 4) {
                        $scope.SortedDrives = response.data;
                    }

                    if ($scope.listaFlag == 6) {
                        $scope.SearchedDrives = response.data;
                    }

                    $scope.apply;

                });
            });
        }

        $scope.ZavrsiVoznju = function (drive) {

            RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
                if (response.data == true) {
                    alert('Blokirani ste!');
                    document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                    sessionStorage.clear();
                    $rootScope.loggedin = false;
                    $rootScope.user = {};
                    document.location.href = "#!/Login";

                }
                $rootScope.VoznjaZaKomentarVozac = drive;
                $rootScope.DozvolaZaZavrsenuVoznju = true;
                $window.location.href = "#!/ZavrsiVoznju";
            });
        }

        $scope.DodajKomentar = function (drive) {
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
                    return;
                }
                $rootScope.DozvolaZaKomentarKorisnika = true;
                $rootScope.VoznjaZaKomentar = drive;
                $window.location.href = "#!/DodajKomentar";
            });
        }

        $scope.IzmeniVoznju = function (drive) {
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
                    return;
                }
                $rootScope.VoznjaZaIzmenu = drive;
                $rootScope.DozvolaZaIzmenuVoznjeKorisniku = true;
                $window.location.href = "#!/IzmeniVoznju";
            });
        }

        $scope.IzmeniLokaciju = function () {
            RegILogFactory.GetUserStatusByUsername(sessionStorage.getItem("username")).then(function (response) {
                if (response.data == true) {
                    alert('Blokirani ste!');
                    document.cookie = 'user=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                    sessionStorage.clear();
                    $rootScope.loggedin = false;
                    $rootScope.user = {};
                    document.location.href = "#!/Login";

                }
                $rootScope.drverUsername = $scope.DriverData;
                $window.location.href = "#!/IzmeniLokaciju";
            });
        }

});