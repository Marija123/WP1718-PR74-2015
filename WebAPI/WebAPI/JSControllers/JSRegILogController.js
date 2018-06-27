WebAPI.controller('JSRegILogController', function ($scope, RegILogFactory, $window, $rootScope) {

    $scope.user = {}; //inicijalizacija na prazno


    function init() {
        console.log('Login controller initialized'); //ispis na konzoli da se inicijalizovao
        $rootScope.Uloga = sessionStorage.getItem("role");
        $rootScope.RegisterSuccess = "";
    };

    init();

    $scope.RegisterUser = function (user) {

        if (user.username == null || user.username == "") {
            alert('Polje korsnicko ime mora biti popunjeno!');
            return;
        }
        else if (user.ime == null || user.ime == "") {
            alert('Polje ime mora biti popunjeno!');
            return;
        }
        else if (user.prezime == null || user.prezime == "") {
            alert('Polje prezime mora biti popunjeno !');
            return;
        }
        else if (user.pol == null || user.pol == "") {
            alert('Morate odabrati pol!');
            return;
        }
        else if (user.jmbg == null || user.jmbg == "") {
            alert('Polje jmbg mora biti popunjeno!');
            return;
        }
        else if (user.jmbg.match(/[a-z]/i)) {
            alert('Jmbg ne moze da sadrzi karaktere: a-z');
            return;
        }
        else if (user.jmbg.length != 13) {
            alert('Jmbg mora da sadrzi 13 cifara');
            return;
        }
        else if (user.kontaktTelefon == null || user.kontaktTelefon == "") {
            alert('Polje kontakt telefon mora biti popunjeno!');
            return;
        }

        else if (user.kontaktTelefon.match(/[a-z]/i)) {
            alert('Kontakt telefon ne moze da sadrzi karaktere a-z');
            return;
        }
        else if (user.email == null || user.email == "") {
            alert('Polje email mora biti popunjeno!');
            return;
        }
        else if (!user.email.includes('@')) {
            alert('Email email nije validan!');
            return;
        }
        else if (user.pwd == null || user.pwd == "") {
            alert('Polje lozinka mora biti popunjeno!');
            return;
        }

        RegILogFactory.RegisterUser(user).then(function (response) {
            if (response.data == true) {
                console.log(response.data);
                $rootScope.RegisterSuccess = "Registracija uspesna.Mozete se ulogovati.";
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
                alert("Korisnik sa unetim korisnickim imenom i lozinkom ne postoji!");
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
            alert('Polje korsnicko ime mora biti popunjeno!');
            return;
        }
        else if (user.ime == null || user.ime == "") {
            alert('Polje ime mora biti popunjeno!');
            return;
        }
        else if (user.prezime == null || user.prezime == "") {
            alert('Polje prezime mora biti popunjeno!');
            return;
        }
        else if (user.pol == null || user.pol == "") {
            alert('Morate odabrati pol!');
            return;
        }
        else if (user.jmbg == null || user.jmbg == "") {
            alert('Polje jmbg mora biti popunjeno!');
            return;
        }
        else if (user.jmbg.match(/[a-z]/i)) {
            alert('Jmbg ne moze da sadrzi karaktere: a-z');
            return;
        }
        else if (user.jmbg.length != 13) {
            alert('Jmbg mora da sadrzi 13 cifara');
            return;
        }
        else if (user.kontaktTelefon == null || user.kontaktTelefon == "") {
            alert('Polje kontakt telefon mora biti popunjeno!');
            return;
        }

        else if (user.kontaktTelefon.match(/[a-z]/i)) {
            alert('Kontakt telefon ne moze da sadrzi karaktere a-z');
            return;
        }
        else if (user.email == null || user.email == "") {
            alert('Polje email mora biti popunjeno!');
            return;
        }
        else if (!user.email.includes('@')) {
            alert('Email nije validan!');
            return;
        }
        else if (user.pwd == null || user.pwd == "") {
            alert('Polje lozinka mora biti popunjeno!');
            return;
        }
        else if (user.godina == null || user.godina == "") {
            alert('Polje godste auta mora biti popunjeno!');
            return;
        }
        
        else if (user.registarskaOznaka == null || user.registarskaOznaka == "") {
            alert('Polje registarska oznaka mora biti popunjeno!');
            return;
        }
        else if (user.tipVozila == null || user.tipVozila == "") {
            alert('Morate odabrati tip automobila!');
            return;
        }

        RegILogFactory.RegisterDriver(user).then(function (response) {
            if (response.data == true) {
                console.log(response.data);
               // $rootScope.RegisterSuccess = "Registration was successful. You can login now.";
                $window.location.href = "#!/MyHome";
            }
            else {
                alert("Korisnicko ime postoji, pokusajte ponovo.");
            }
        });
    };



});