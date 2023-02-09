require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera) {

      var scene = new WebScene({
        portalItem:{
         id:"46bcdc83c0e84759bd879dc85bae765f" 
        }
      });
       var view = new SceneView({
        container: "viewDiv",
        map: scene,
		viewingMode:'global'
      });
  
      var camera1 = new Camera({
        position: {
          x: -86.423,
          y: 36.9801,
          z: 30000
        },
        tilt: 0,
        heading: 0
      });
  
         [nash].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    nash.addEventListener('click', function() {
view.goTo({
        target:camera1
      });
    });
    });