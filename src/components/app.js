angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.$onInit = function(){
    };
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = function(vid) {
      this.currentVideo = vid;
    };
    this.setVideos = function(vids) {
      this.videos = vids;
      this.currentVideo = this.videos[0];
    }
    this.setVideos = this.setVideos.bind(this);
    this.selectVideo = this.selectVideo.bind(this);
    this.searchResults = function() {};
    youTube.searchYouTube(this.setVideos);

  }
});
