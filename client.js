
import {ReactInstance, Surface, Module} from 'react-360-web';

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      new surfaceModule(),
    ],
    ...options,
  });

  entryPanel = new Surface(
    500,400,
    Surface.SurfaceShape.Cylinder
  );
  introRoot = r360.renderToSurface(
    r360.createRoot('Tourism360', {}),
    entryPanel
  );
//marketPanel is replaced by templePanel Function
  templePanel = new Surface(
    100,100, Surface.SurfaceShape.Flat
  )

  templePanel.setAngle(
    0.2,0
    );

// museumPanel is replaced by entryPanel Function
  entryPanel = new Surface(
    100,100,
    Surface.SurfaceShape.Flat
  )

  entryPanel.setAngle(
    3.5,
    0
  );

//resturantPanel is replaced ny gardenPanel Function

  gardenPanel = new Surface(
    100,100,
    Surface.SurfaceShape.Flat  
  )

  gardenPanel.setAngle(
    -Math.PI / 2,
    0
  );

//shoppingPanel is replaced by riverPanel Function

  riverPanel = new Surface(
    100,100,
    Surface.SurfaceShape.Flat
  )

  riverPanel.setAngle(
    Math.PI / 2,
    0
  );


  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('akshrdhmair.jpg'));
}

class surfaceModule extends Module {
  constructor() {
    super('surfaceModule');
  }

  resizeSurface(width, heigth, id) {
    if (id === 'temple'){
      templePanel.resize(width, heigth);
    } else if (id === 'entry'){
      entryPanel.resize(width, heigth);
    } else if (id === 'garden'){
      gardenPanel.resize(width, heigth);
    } else if (id === 'river'){
      riverPanel.resize(width, heigth);
    }
  }

  start() {
      // Render your app content to the default cylinder surface

      // templePanel
  r360.renderToSurface(
    r360.createRoot('InfoPanel', {id: 'temple',
      text: 'Visit the beautiful temple'  }),
    templePanel
  );
//  entryPanel
  r360.renderToSurface(
    r360.createRoot('InfoPanel', {id: 'entry',
    text: 'Enter into this way'}),
    entryPanel
  );
//  gardenPanel
  r360.renderToSurface(
    r360.createRoot('InfoPanel', {id: 'garden',
    text: 'This beautiful garden in temple'}),
    gardenPanel
  );
//  riverPanel
  r360.renderToSurface(
    r360.createRoot('InfoPanel', {id: 'river',
    text: 'Yamuna river beside it.'}),
    riverPanel
  );

  r360.detachRoot(introRoot);

}

}
window.React360 = {init};
