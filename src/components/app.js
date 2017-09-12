angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.$onInit = function() {

    }
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = function(vid) {
      this.currentVideo = vid;
    };
    this.selectVideo = this.selectVideo.bind(this);
    this.searchResults = function() {};

  }
});
