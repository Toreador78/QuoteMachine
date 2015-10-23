//TODO: Umbau auf http://www.quotes.net/quotes_api.php

var QuoteApp = angular.module('QuoteApp', []);
QuoteApp.controller('QuoteCtrl', function($scope, $http){
  $scope.quote = '';
  $scope.author = '';

  //$scope.quote = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';  $scope.author = 'internet';

  $scope.newQuote = function(){

    $http.get('http://www.stands4.com/services/v2/quotes.php?searchtype=AUTHOR&query=Albert+Einstein').then(function(res){
      $scope.quote = res.data.results.result.quote;
      $scope.author = res.data.results.result.author;
    });
	};

  $scope.initQuote = function(){
    $scope.quote = "Press the button for a new quote";
    $scope.author = "Toreador";
  };
});
