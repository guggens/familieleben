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

  	$("li").removeClass("active");
  	$("#main").addClass("active");

  });

angular.module('demopageApp')
  .controller('ProfilCtrl', function ($scope) {

  	$("li").removeClass("active");
  	$("#profile").addClass("active");

  });

angular.module('demopageApp')
  .controller('KurseCtrl', function ($scope) {

  	$("li").removeClass("active");
  	$("#courses").addClass("active");

  });
