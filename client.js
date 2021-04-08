// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Module, Surface} from 'react-360-web';

let surface;
let surfacePanel;
let r360;
let buttonSurface;

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
        new surfaceModule(),
    ],
    ...options,
  });

  //panel with create panel button
  buttonSurface = new Surface(300,300, Surface.SurfaceShape.Flat)
  buttonSurface.setAngle(5,0);
  r360.renderToSurface(
      r360.createRoot('ButtonSurface',{}),
      buttonSurface
  )

  //default panel with buttons
  surface = r360.getDefaultSurface()
  surfacePanel = r360.renderToSurface(
    r360.createRoot('DynamicSurfaces', { /* initial props */ }),
    surface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}


class surfaceModule extends Module {
  constructor(){
    super('surfaceModule')
  }

  resizeSurface(width,height){
    surface.resize(width, height);
  }

  changeSurfaceType(Type){
    if(Type === "Flat"){
      surface.setShape(Surface.SurfaceShape.Flat)
    }else{
      surface.setShape(Surface.SurfaceShape.Cylinder)
    }
  }

  destroyPanel(){
    r360.detachRoot(surfacePanel);
  }

  createPanel(){
    surfacePanel = r360.renderToSurface(
        r360.createRoot('DynamicSurfaces', { /* initial props */ }),
        surface
    );
  }

}

window.React360 = {init};
