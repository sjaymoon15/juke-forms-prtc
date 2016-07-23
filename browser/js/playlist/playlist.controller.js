'use strict';

juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory, $log) {

  // nothing to see here for now… state transitions happening with ui-sref!
  $scope.log = function(name){
  	console.log("The new playlist: {name: "+ name + " }");

  }

  $scope.createPlaylist = function(){
  	console.log('$scope.newList', $scope.newList);
  	PlaylistFactory.create($scope.newList)
  	.then(function(res){
  		console.log("Saved in DB: ",res);
  	})
  	.catch(function(err){
  		$log.error(err);
  	});
  }
});
