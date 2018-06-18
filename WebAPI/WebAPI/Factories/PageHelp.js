var WebAPI = angular.module('WebAPI', ['ngRoute']);

WebAPI.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            redirectTo: '/MyHome' //za sad

            }).when('/MyHome',
            {
                controller: 'MyHomeController',
                templateUrl: 'HTMLovi/MyHome.html',
                activeTab: 'Home'

            //}).
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
        }).when('/Profile/:username', {

            controller: 'ProfileController',
            templateUrl: 'HTMLovi/Profile.html',
            activetab: 'Profile'
        }).when('/DriveGet/:username',
        {
            controller: 'ProfileController',
            templateUrl: 'HTMLovi/DriveGet.html',
            activetab: 'none'
        }).when('/DriverGet/:username',
        {
            controller: 'ProfileController',
            templateUrl: 'HTMLovi/DriverGet.html',
            activetab: 'none'

        })
    //       .when('Edit/:username',
    //{
    //    controller: 'ProfileController',
    //    templateUrl: 'MyHtmls/Edit.html',
    //    activeTab: 'Edit'
    //})

});
