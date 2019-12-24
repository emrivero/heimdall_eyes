import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Feature } from "ol";
import { Polygon } from "ol/geom";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import { extent } from './constants';
import Parent from './Parent';
import difference from '@turf/difference/index.js';
import { polygon as createPolygon } from '@turf/helpers';

const geometry = new Polygon([
  [
    [extent[0], extent[1]],
    [extent[0], extent[3]],
    [extent[2], extent[3]],
    [extent[2], extent[1]],
    [extent[0], extent[1]],

  ]
]);

const feature = new Feature({
  geometry,
});

const layer = new VectorLayer({
  source: new VectorSource({
    features: [feature],
  }),
  style: new Style({
    fill: new Fill({
      color: 'rgba(0,0,0,1)',

    }),
  }),
  zIndex: 1000,
});

layer.set('id', 'mist');

export const mist = {
  geometry,
  feature,
  layer,
};

/**
 * @class
 */
export class MistManager extends Parent {
  constructor(translate) {
    super();
    this.translate = translate;
    this.tokens = []
    this.on('created_tokens', tokens => {
      if (tokens.length > 0) {
        this.tokens = tokens;
        this.createCircleMist();
      }
    });

    this.translate.on('translating', () => {
      this.createCircleMist()
    });

    this.translate.on('translateend', () => {
      this.createCircleMist()
    });
    this.translate.on('translatestart', () => {
      this.createCircleMist()
    });
  }

  createCircleMist() {
    console.log('illooo');
    const polygonCoords = mist.geometry.getCoordinates();
    let newGeom = new Polygon(polygonCoords);
    this.tokens.forEach(token => {
      const coords = newGeom.getCoordinates();
      const radius = token.visionRange;
      const center = token.getCoordinates();

      const polygon = createPolygon(coords);
      const circle = createPolygon([
        [
          [center[0] - radius, center[1] - radius],
          [center[0] - radius, center[1] + radius],
          [center[0] + radius, center[1] + radius],
          [center[0] + radius, center[1] - radius],
          [center[0] - radius, center[1] - radius],
        ]
      ]);

      const diff = difference(polygon, circle);
      newGeom.setCoordinates(diff.geometry.coordinates);
    })
    mist.feature.setGeometry(newGeom);
  }
}
