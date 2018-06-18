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
    return factory;
});