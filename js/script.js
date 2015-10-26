//TODO: Umbau auf http://www.quotes.net/quotes_api.php

var QuoteApp = angular.module('QuoteApp', []);
QuoteApp.controller('QuoteCtrl', function($scope, $http){
  $scope.quote = '';
  $scope.author = '';

  quotes = [
    {quote: "There is nothing noble in being superior to your fellow men. True nobility lies in being superior to your former self.", author:"Ernest Hemingway"},
    {quote: "An intelligent man is sometimes forced to be drunk to spend time with his fools.", author:"Ernest Hemingway"},
    {quote: "There is no lonelier man in death, except the suicide, than that man who has lived many years with a good wife and then outlived her. If two people love each other there can be no happy end to it.", author:"Ernest Hemingway"},
    {quote: "Every man's life ends the same way. It is only the details of how he lived and how he died that distinguish one man from another.", author:"Ernest Hemingway"},
    {quote: "Always do sober what you said you'd do drunk. That will teach you to keep your mouth shut.", author:"Ernest Hemingway"},
    {quote: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.", author:"Winston Churchill"},
    {quote: "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.", author:"Winston Churchill"},
    {quote: "Socialism is a philosophy of failure, the creed of ignorance, and the gospel of envy, its inherent virtue is the equal sharing of misery.", author:"Winston Churchill"},
    {quote: "To improve is to change; to be perfect is to change often.", author:"Winston Churchill"},
    {quote: "Attitude is a little thing that makes a big difference.", author:"Winston Churchill"},
    {quote: "Kindness is the language which the deaf can hear and the blind can see.", author:"Mark Twain"},
    {quote: "All you need in this life is ignorance and confidence, and then success is sure.", author:"Mark Twain"},
    {quote: "It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.", author:"Mark Twain"},
    {quote: "You can't depend on your eyes when your imagination is out of focus.", author:"Mark Twain"},
    {quote: "Part of the secret of a success in life is to eat what you like and let the food fight it out inside.", author:"Mark Twain"},
    {quote: "People ask the difference between a leader and a boss. The leader leads, and the boss drives.", author: "Theodore Roosevelt"},
    {quote: "In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.", author: "Theodore Roosevelt"},
    {quote: "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.", author: "Theodore Roosevelt"},
    {quote: "Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.", author: "Theodore Roosevelt"},
    {quote: "Far and away the best prize that life has to offer is the chance to work hard at work worth doing.", author: "Theodore Roosevelt"},
    {quote:"Never look backwards or you'll fall down the stairs.", author:"Rudyard Kipling"},
    {quote:"A woman is only a woman, but a good cigar is a smoke.", author:"Rudyard Kipling"},
    {quote:"Small miseries, like small debts, hit us in so many places, and meet us at so many turns and corners, that what they want in weight, they make up in number, and render it less hazardous to stand the fire of one cannon ball, than a volley composed of such a shower of bullets.", author:"Rudyard Kipling"},
    {quote:"If you can keep your wits about you while all others are losing theirs, and blaming you. The world will be yours and everything in it, what's more, you'll be a man, my son.", author:"Rudyard Kipling"},
    {quote:"I always prefer to believe the best of everybody, it saves so much trouble.", author:"Rudyard Kipling"}
  ];
  length = quotes.length - 1;
  //$scope.quote = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';  $scope.author = 'internet';

  $scope.newQuote = function(){

    /*$http.get('http://www.stands4.com/services/v2/quotes.php?searchtype=AUTHOR&query=Albert+Einstein').then(function(res){
      $scope.quote = res.data.results.result.quote;
      $scope.author = res.data.results.result.author;
    });*/

    randomInt = Math.floor((Math.random() * length) + 1);
    $scope.quote = quotes[randomInt].quote;
    $scope.author = quotes[randomInt].author;
	};

  $scope.initQuote = function(){
    $scope.quote = "Press the button for a new quote";
    $scope.author = "Toreador";
  };
});
