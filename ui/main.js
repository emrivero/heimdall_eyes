import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { getCenter } from 'ol/extent';
import ImageLayer from 'ol/layer/Image';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate';
import { defaults as defaultInteractions } from 'ol/control';
import { Point } from 'ol/geom';
import { Translate } from 'ol/interaction';
import Feature from 'ol/Feature';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Fill, Icon, Stroke, Style } from 'ol/style';

// Map views always need a projection.  Here we just want to map image
// coordinates directly to map coordinates, so we create a projection that uses
// the image extent in pixels.
var extent = [0, 0, 1024, 968];
var projection = new Projection({
  code: 'xkcd-image',
  units: 'pixels',
  extent: extent
});

var mousePositionControl = new MousePosition({
  coordinateFormat: createStringXY(4),
  projection: 'EPSG:4326',
  // comment the following two lines to have the mouse position
  // be placed within the map.
  className: 'custom-mouse-position',
  target: document.getElementById('mouse-position'),
  undefinedHTML: '&nbsp;'
});

var pointFeature = new Feature(new Point([0, 0]));

const vector = new VectorLayer({
  source: new VectorSource({
    features: [pointFeature]
  }),
  style: new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 1,
      src: 'https://openlayers.org/en/latest/examples/data/icon.png'
    }),
    stroke: new Stroke({
      width: 3,
      color: [255, 0, 0, 1]
    }),
    fill: new Fill({
      color: [0, 0, 255, 0.6]
    })
  })
});

var map = new Map({
  controls: [mousePositionControl],
  layers: [
    new ImageLayer({
      source: new Static({
        attributions: '© <a href="http://xkcd.com/license.html">xkcd</a>',
        url: 'https://imgs.xkcd.com/comics/online_communities.png',
        projection: projection,
        imageExtent: extent
      })
    }), vector,
  ],
  target: 'map',
  view: new View({
    projection: projection,
    center: getCenter(extent),
    zoom: 2,
    maxZoom: 16
  })
});

window.map = map;
map.addInteraction(new Translate({ layers: [vector] }))
