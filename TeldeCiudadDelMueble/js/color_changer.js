AFRAME.registerComponent('color-changer', {
  schema: {
    color: {type: 'string'}
  },

  init: function () {
    // Do something when component first attached.
    
    const myCube = document.getElementById("my-cube");
    myCube.addEventListener("mouseenter", function(){
      myCube.setAttribute("material", "color", "black")
    } );
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