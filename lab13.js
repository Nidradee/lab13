var app = angular.module('myModule', []);


app.controller('Random', function($scope){
    $scope.words = ['laundry','wash dishes','sweep','mop'];
    $scope.randomFun = [];
    $scope.displayInput= function(){
    	var randomWord = {};
    	randomWord.word = $scope.words[Math.floor(Math.random() * $scope.words.length)];
        //$scope.selectAtRandom+= randomWord;
        $scope.randomFun.push(randomWord);
    };
 });