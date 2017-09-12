angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    currentVideo: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html',
  controller: function() {
    this.$onInit = function() {
      this.youtubeEmbed = 'https://www.youtube.com/embed/';
    };
  }
});
