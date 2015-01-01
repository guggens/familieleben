'use strict';

/**
 * @ngdoc function
 * @name demopageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demopageApp
 */
angular.module('demopageApp')
  .controller('MainCtrl', function ($scope) {
  	$('li').removeClass('active');
  	$('#main').addClass('active');
  });

angular.module('demopageApp')
  .controller('ProfilCtrl', function ($scope) {
  	$('li').removeClass('active');
  	$('#profile').addClass('active');
  });

angular.module('demopageApp')
  .controller('KurseCtrl', function ($scope) {
  	$('li').removeClass('active');
  	$('#courses').addClass('active');
  });

angular.module('demopageApp')
.controller('CoachingCtrl', function ($scope) {
  $('li').removeClass('active');
  $('#coaching').addClass('active');
});

angular.module('demopageApp')
.controller('PekipCtrl', function ($scope) {
  $('li').removeClass('active');
  $('#pekip').addClass('active');
});

angular.module('demopageApp')
.controller('TermineCtrl', function ($scope) {
  $('li').removeClass('active');
  $('#termine').addClass('active');
});

angular.module('demopageApp')
.controller('ImpressumCtrl', function ($scope) {
  $('li').removeClass('active');
  $('#impressum').addClass('active');
});

