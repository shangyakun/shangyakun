var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when("", "/PageTab");

     $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "PageTab.html"
        })
        .state("PageTab.page1", {
            url:"/page1",
            templateUrl: "page1.html"
        })
        .state("PageTab.page2", {
            url:"/page2",
            templateUrl: "page2.html"
        })
        .state("PageTab.page3", {
            url:"/page3",
            templateUrl: "page3.html"
        });
});

