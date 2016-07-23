'use strict';

juke.controller('SidebarCtrl', function ($log, $scope, SidebarFactory) {

  // nothing to see here for now… state transitions happening with ui-sref!
  SidebarFactory.fetchAll()
  .then(function(playlists){
  	$scope.playlists = playlists;
  })
  .catch(function(err){
		$log.error(err);
	});
});
