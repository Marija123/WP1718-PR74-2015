WebAPI.controller('CommentController', function ($scope, $location, $rootScope, ProfCont, $window) {

    $scope.DodajKomentar = function (ko) {

        if (ko == null) {
            return;
        }
        ProfCont.DodajKomentar(ko, $rootScope.VoznjaZaKomentar).then(function (response) {

            console.log(response.data);
            $window.location.href = "#!/MyHome";
        });
    }
});