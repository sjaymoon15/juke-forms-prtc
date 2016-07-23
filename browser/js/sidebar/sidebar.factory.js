juke.factory('SidebarFactory', function ($http) {

  var SidebarFactory = {};

  function getData (res) { return res.data; }

  SidebarFactory.fetchAll = function () {
    return $http.get('/api/playlists')
    .then(getData);
  };
  return SidebarFactory;
})