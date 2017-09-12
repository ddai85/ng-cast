angular.module('video-player')
.service('youTube', function($http){
  this.searchYouTube = (callback) => {
    var server = "https://www.googleapis.com/youtube/v3/search";
    var q = "q=cats";
    var key = "&key=" + YOUTUBE_API_KEY;
    var maxResults = "&maxResults=5";
    var part = "&part=snippet";
    var finalUrl = server + '?' + q + key + maxResults + part;
    return $http.get(finalUrl).then(function successCallback(response){
      // console.log(response.data.items);
      callback(response.data.items);
    }, function errorCallback(response){
      console.error(response);
    });
  }
});
