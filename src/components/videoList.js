angular.module('video-player')
.component('videoList', {
  bindings: {
    videoData: '<',
    selectVideo: '<'
  },
  templateUrl: 'src/templates/videoList.html',
  controller: function() {
    this.$onInit = function() {
    };
  }
});
