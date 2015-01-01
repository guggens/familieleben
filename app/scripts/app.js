'use strict';

/**
 * @ngdoc overview
 * @name demopageApp
 * @description
 * # demopageApp
 *
 * Main module of the application.
 */
angular
  .module('demopageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/profil', {
        templateUrl: 'views/profil.html',
        controller: 'ProfilCtrl'
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'KurseCtrl'
      })      
      .when('/coaching', {
        templateUrl: 'views/coaching.html',
        controller: 'CoachingCtrl'
      })  
      .when('/pekip', {
        templateUrl: 'views/pekip.html',
        controller: 'PekipCtrl'
      })  
      .when('/termine', {
        templateUrl: 'views/termine.html',
        controller: 'TermineCtrl'
      })  
      .when('/impressum', {
        templateUrl: 'views/impressum.html',
        controller: 'ImpressumCtrl'
      })        
      .otherwise({
        redirectTo: '/'
      });
  });
