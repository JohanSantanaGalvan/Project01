AFRAME.registerComponent('play-super-video', {

  init: function () {
    // Do something when component first attached.
    const el = this.el;
    var video = document.querySelector('#el-hierro');
    video.pause();
    el.addEventListener("mouseenter", function () {
      console.log("hola");
      video.play();
    });
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});