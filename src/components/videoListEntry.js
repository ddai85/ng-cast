angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    selectVideo: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html',
  controller: function() {
    this.$onInit = function() {
      this.thumbnail = this.video.snippet.thumbnails.default.url;
      this.clickHandler = function() {
        this.selectVideo(this.video);
      }
    }
  }
});
