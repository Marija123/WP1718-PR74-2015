WebAPI.controller('JSRegILogController', function ($scope, RegILogFactory, $window, $rootScope) {

    $scope.user = {}; //inicijalizacija na prazno


    function init() {
        console.log('Login controller initialized'); //ispis na konzoli da se inicijalizovao
        $rootScope.Uloga = sessionStorage.getItem("role");
    };

    init();

    $scope.RegisterUser = function (user) {

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

        RegILogFactory.RegisterUser(user).then(function (response) {
            if (response.data == true) {
                console.log(response.data);
                $rootScope.RegisterSuccess = "Registration was successful. You can login now.";
                $window.location.href = "#!/Login";
            }
            else {
                alert("Username already exists, try again.");
            }
        });
    };

    $scope.LoginUser = function (user) {
        if (user.username == null || user.username == "") {
            alert('Username cant be empty!');
            return;
        }
        else if (user.pwd == null || user.pwd == "") {
            alert('Password cant be empty!');
            return;
        }
        

        RegILogFactory.LoginUser(user).then(function (response) {
            $rootScope.ZapamtiKorisnika = response.data;
            if (response.data == null) {
                alert("User with the given username and password does not exist.");
                return;
            }
            else {

                RegILogFactory.GetUserStatusByUsername(user.username).then(function (response) {
                    if (response.data == true) {
                        alert('Blokirani ste!');
                        return;
                    }
                   
                
                //    }
                //});

                console.log(response);
                document.cookie = "user=" + JSON.stringify({
                    username: $rootScope.ZapamtiKorisnika.KorisnickoIme, /*response.data.KorisnickoIme,*/
                    role: $rootScope.ZapamtiKorisnika.Uloga, /*response.data.Uloga*/
                    nameSurname: $rootScope.ZapamtiKorisnika.Ime + " " + $rootScope.ZapamtiKorisnika.Prezime/*response.data.Ime + " " + response.data.Prezime*/
                }) + ";expires=Thu, 01 Jan 2019 00:00:01 GMT;";
                sessionStorage.setItem("username", $rootScope.ZapamtiKorisnika.KorisnickoIme);
                sessionStorage.setItem("role", $rootScope.ZapamtiKorisnika.Uloga);
                sessionStorage.setItem("nameSurname", $rootScope.ZapamtiKorisnika.Ime + " " + $rootScope.ZapamtiKorisnika.Prezime);

                $rootScope.loggedin = true;

                $rootScope.moraKomentar = false;
                $rootScope.moraKomentarKorisnik = false;
         
           
                $rootScope.user = {
                    username: sessionStorage.getItem("username"),
                    role: sessionStorage.getItem("role"),
                    nameSurname: sessionStorage.getItem("nameSurname")
                };
                $window.location.href = "#!/";
                });  
               
            }
        });
    }

    $scope.RegisterDriver = function (user) {



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
        else if (user.godina == null || user.godina == "") {
            alert('Godina field cant be empty!');
            return;
        }
        
        else if (user.registarskaOznaka == null || user.registarskaOznaka == "") {
            alert('Registarska oznaka field cant be empty!');
            return;
        }
        else if (user.tipVozila == null || user.tipVozila == "") {
            alert('You must choose a type!');
            return;
        }

        RegILogFactory.RegisterDriver(user).then(function (response) {
            if (response.data == true) {
                console.log(response.data);
                $rootScope.RegisterSuccess = "Registration was successful. You can login now.";
                $window.location.href = "#!/MyHome";
            }
            else {
                alert("Username already exists, try again.");
            }
        });
    };



});