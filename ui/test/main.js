import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { getCenter } from 'ol/extent';
import ImageLayer from 'ol/layer/Image';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';

import { Point } from 'ol/geom';
import Feature from 'ol/Feature';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';
import nave from '../assets/images/levels/nave_1.jpg';
import gunar from '../assets/images/pjs/gunar.png'
import { Translate } from 'ol/interaction';

export const init = () => {

  var extent = [0, 0, 1024, 968];
  const buffer = 500;
  const limit = [extent[0] - buffer, extent[1] - 45, extent[2] + buffer, extent[3] + 45]
  var projection = new Projection({
    code: 'xkcd-image',
    units: 'pixels',
    extent: extent
  });

  var pointFeature = new Feature(new Point([0, 0]));

  const vector = new VectorLayer({
    source: new VectorSource({
      features: [pointFeature]
    }),
    style(feature, resolution) {
      const proportion = resolution / 1.174250832408435;
      let scale = 0.05;

      if (resolution < 1) {
        scale = 0.03 / proportion;
      }
      return new Style({
        image: new Icon({
          scale,
          src: gunar,
        }),
      });
    }
  });


  var map = new Map({
    controls: [],
    layers: [
      new ImageLayer({
        source: new Static({
          attributions: '© <a href="http://xkcd.com/license.html">xkcd</a>',
          url: nave,
          projection: projection,
          imageExtent: extent
        })
      }), vector,
    ],
    target: 'map',
    view: new View({
      projection: projection,
      center: getCenter(extent),
      zoom: 0,
      maxZoom: 16,
      extent: limit,
    })
  });

  window.map = map;
  map.addInteraction(new Translate())
}
