var WebAPI = angular.module('WebAPI', ['ngRoute']);

WebAPI.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            redirectTo: '/MyHome' 

        }).when('/MyHome',
        {
            controller: 'MyHomeController',
            templateUrl: 'HTMLovi/MyHome.html',
            activeTab: 'Home'

        }).when('/Register',
        {
            controller: 'JSRegILogController',
            templateUrl: 'HTMLovi/Register.html',
            activeTab: 'Register'

        })
        .when('/Login',
        {
            controller: 'JSRegILogController',
            templateUrl: 'HTMLovi/Login.html',
            activeTab: 'Login'
        }).when('/Profile',
        {
            controller: 'ProfileController',
            templateUrl: 'HTMLovi/Profile.html',
            activeTab: 'Profile'
        }).when('/DriveGet',
        {
            controller: 'ProfileController',
            templateUrl: 'HTMLovi/DriveGet.html',
            activetab: 'none'
        }).when('/DriverGet',
        {
            controller: 'JSRegILogController',
            templateUrl: 'HTMLovi/DriverGet.html',
            activetab: 'none'

        }).when('/Edit',
        {
            controller: 'ProfileController',
            templateUrl: 'HTMLovi/Edit.html',
            activeTab: 'Edit'
        }).when('/DodajKomentar',
        {
            controller: 'CommentController',
            templateUrl: 'HTMLovi/Comment.html',
            activeTab: 'none'
        }).when('/ZavrsiVoznju',
        {
            controller: 'CommentController',
            templateUrl: 'HTMLovi/ZavrsiVoznju.html',
            activeTab: 'none'
        }).when('/IzmeniVoznju',
        {
            controller: 'ProfileController',
            templateUrl: 'HTMLovi/IzmeniVoznju.html',
            activeTab: 'none'
        }).when('/IzmeniLokaciju',
        {
            controller: 'ProfileController',
            templateUrl: 'HTMLovi/IzmeniLokaciju.html',
            activeTab: 'none'
        }).when('/ObradiVoznju',
        {
            controller: 'ProfileController',
            templateUrl: 'HTMLovi/ObradiVoznju.html',
            activeTab: 'none'
        }).when('/BlockUsers',
        {
            controller: 'BlockController',
            templateUrl: 'HTMLovi/BlockUsers.html',
            activeTab: 'none'
        })
    
    

});
