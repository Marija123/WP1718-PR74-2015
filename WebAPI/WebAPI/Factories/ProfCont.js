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
            Number: drive.Number,
            Town: drive.Town,
            PostalCode: drive.PostalCode,
            tipAuta: drive.tipAuta,
            korisnicko: sessionStorage.getItem("username")
           
        });
    }
    factory.AddDriveDispecer = function (drive) {
        return $http.post('/api/Prof/AddDriveDispecer', {
            XCoord: drive.XCoord,
            YCoord: drive.YCoord,
            Street: drive.Street,
            Number: drive.Number,
            Town: drive.Town,
            PostalCode: drive.PostalCode,
            tipAuta: drive.tipAuta,
            korisnicko: sessionStorage.getItem("username")

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

    //factory.Filter2 = function (Drives,fu) {
    //    return $http.post('/api/Prof/GetFilterUserAll',
    //        {
    //            Username: sessionStorage.getItem("username"),
    //            Uloga: sessionStorage.getItem("role"),
    //            Status: fu,
    //            Drivess: Drives
    //        });
    //}


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
            Email: user.email
        });
    }

    return factory;
});