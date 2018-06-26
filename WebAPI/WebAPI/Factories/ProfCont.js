WebAPI.factory('ProfCont', function ($http) {

    var factory = {};
    factory.getUserByUsername = function (username) {
        return $http.get('/api/Prof/GetUserByUsername?username=' + username);
    }

    factory.AddDriveCustomer = function (drive) {
        return $http.post('/api/Prof/AddDriveCustomer', {
            XCoord: drive.XCoord,
            YCoord: drive.YCoord,
            Street: drive.Street,
            tipAuta: drive.tipAuta,
            korisnicko: sessionStorage.getItem("username")
           
        });
    }
    factory.AddDriveDispecer = function (drive) {
        return $http.post('/api/Prof/AddDriveDispecer', {
            XCoord: drive.XCoord,
            YCoord: drive.YCoord,
            Street: drive.Street,
            tipAuta: drive.tipAuta,
            korisnicko: sessionStorage.getItem("username")

        });
    }

    factory.DodajVoznjuDisp = function (v, drive) {
        return $http.post('/api/Prof/DodajVoznjuDisp', {
            voznja: drive,
            korisnickoImeAdmin: sessionStorage.getItem("username"),
            korisnickoImeVozac: v.SelektovaniVozac
        });
    }

   

    factory.getDrives = function (username) {
        return $http.get('/api/Prof/GetDrives?username=' + username);
    }

    factory.getAllDrives = function (username) {
        return $http.get('/api/Prof/GetAllDrives?username=' + username);
    }

    factory.getWaitingDrives = function (username) {
        return $http.get('/api/Prof/GetWaitingDrives?username=' + username);
    }

    factory.Filter = function (Drives,fu) {
        return $http.post('/api/Prof/GetFilterUser',
            {
                Username: sessionStorage.getItem("username"),
                Uloga: sessionStorage.getItem("role"),
                Status: fu,
                Drivess: Drives

            });
    }

    factory.Pretrazi = function (Drives, su) {
        return $http.post('/api/Prof/Pretraga',
            {
                Username: sessionStorage.getItem("username"),
                Uloga: sessionStorage.getItem("role"),
                Drivess: Drives,
                DatumOd: su.DatumOd,
                DatumDo: su.DatumDo,
                OcenaOd: su.OcenaOd,
                OcenaDo: su.OcenaDo,
                CenaOd: su.CenaOd,
                CenaDo: su.CenaDo,
                VozIme: su.VozIme,
                VozPrezime: su.VozPrezime,
                MustIme: su.MustIme,
                MustPrezime: su.MustPrezime

            });
    }

   

    factory.Sorting = function (Drives,fu) {
        return $http.post('/api/Prof/SortingUser',
            {
                Username: sessionStorage.getItem("username"),
                Uloga: sessionStorage.getItem("role"),
                Status: "none",
                Drivess: Drives,
                PoCemu: fu
            });
    }


    factory.EditUser = function (user) {
        return $http.post('/api/Prof/Edit', {
            Username: user.username,
            Password: user.pwd,
            Ime: user.ime,
            Prezime: user.prezime,
            Pol: user.pol,
            Jmbg: user.jmbg,
            Telefon: user.kontaktTelefon,
            Email: user.email,
            OldUsername: sessionStorage.getItem("username")
        });

    }


    factory.OtkaziVoznju = function (drive) {
        return $http.post('/api/Prof/OtkaziVoznju', {
            Voznj: drive
        });
    }

    factory.DodajKomentar = function (ko,voz) {
        return $http.post('/api/Prof/Komentarisanje',
            {
                KomOpis: ko.Opis,
                KomOcena: ko.Ocena,
                Voz: voz
            });
    }

    factory.ObradiVoznju = function (drive) {
        return $http.post('/api/Prof/ObradiVoznju', {
            Kometar: sessionStorage.getItem("username"),
            Voz: drive
        });
    }

    factory.PreuzmiVoznju = function (drive, drives) {
        return $http.post('/api/Prof/PreuzmiVoznju', {
            Username: sessionStorage.getItem("username"),
            Voznj: drive,
            ListaVoznji: drives
        });
    }

    factory.getDriverData = function (username) {
        return $http.get('/api/Prof/getDriverData?username=' + username);
    }

    factory.DodajKomentarVozac = function (ko, voz) {
        return $http.post('/api/Prof/KomentarisanjeVozac',
            {
                Opis: ko.Opis,
                Voz: voz
            });
    }

    factory.DodajKraj = function (drive, dri) {
        return $http.post('/api/Prof/DodajKraj', {
            Cena: drive.Cena,
            XCoord: drive.XCoord,
            YCoord: drive.YCoord,
            Street: drive.Street,
            Voz: dri
           

        });
    }

    factory.Izmeni = function (drive) {
        return $http.post('/api/Prof/Izmeni', {
            XCoord: drive.XCoord,
            YCoord: drive.YCoord,
            Street: drive.Street,
            tipAuta: drive.tipAuta,
            Datum: drive.Datum,
            korisnicko: sessionStorage.getItem("username")

        });
    }

    factory.IzmeniV = function (drive) {
        return $http.post('/api/Prof/IzmeniV', {
            XCoord: drive.XCoord,
            YCoord: drive.YCoord,
            Street: drive.Street,
            tipAuta: drive.tipAuta,
            Datum: drive.Datum,
            korisnicko: sessionStorage.getItem("username")

        });
    }

    factory.ObradiVoznjuDisp = function (noviModel, voz) {
        return $http.post('/api/Prof/ObradiVoznjuDisp', {
            voznja: voz,
            korisnickoImeAdmin: sessionStorage.getItem("username"),
            korisnickoImeVozac: noviModel.SelektovaniVozac
        });
    }

    
    factory.getBlockedUsers = function (username) {
        return $http.get('/api/Prof/getBlockedUsers');
    }

    factory.getUnblockedUsers = function (username) {
        return $http.get('/api/Prof/getUnblockedUsers');
    }

    factory.Blokiraj = function (username) {
        return $http.get('/api/Prof/Blokiraj?username=' + username);
    }

    factory.Odblokiraj = function (username) {
        return $http.get('/api/Prof/Odblokiraj?username=' + username);
    }
    

    return factory;
});
//?username=' + username