import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Feature } from "ol";
import { Polygon, MultiPolygon } from "ol/geom";
import Style from "ol/style/Style";
import { Fill } from "ol/style";
import { extent } from './constants';
import Parent from './Parent';
import difference from '@turf/difference/index.js';
import { polygon as createPolygon } from '@turf/helpers';
import mistImage from '../../assets/images/misc/mist.png'


/**
 * @class
 */
export default class MistManager extends Parent {
  constructor(translate, map) {
    super();

    this.translate = translate;

    this.map = map;

    this.tokens = []

    this.on('created_tokens', tokens => {
      if (tokens.length > 0) {
        this.tokens = tokens;
        this.createCircleMist();
      }
    });

    this.addTranslateEvent();
    this.geometry = new Polygon([
      [
        [extent[0], extent[1]],
        [extent[0], extent[3]],
        [extent[2], extent[3]],
        [extent[2], extent[1]],
        [extent[0], extent[1]],

      ]
    ]);

    this.feature = new Feature({
      geometry: this.geometry,
    });

    this.layer = new VectorLayer({
      renderBuffer: 10000,
      source: new VectorSource({
        features: [this.feature],
      }),
      style: new Style({
        fill: new Fill({
          color: "#eee",
        }),
      }),
      zIndex: 1000,
    });

    this.layer.set('id', 'mist');

    this.active = false;


    /**
     * Create mist style image
     */
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      img.width = 2000;
      img.height = 2000;
      ctx.drawImage(img, 0, 0, 4726 * 5, 5231 * 5, 0, 0, 2000, 2000);
      const pattern = ctx.createPattern(canvas, 'repeat');
      const style = new Style({
        fill: new Fill({
          color: pattern,
        }),
      });
      this.layer.setStyle(style);
    }
    img.src = mistImage;
  }

  addTo(map) {
    this.map = map;
    this.map.addLayer(this.layer);
    this.layer.setVisible(false);
  }

  setActive(flag) {
    this.active = !!flag;
    this.layer.setVisible(this.active);
    if (flag) {
      this.addTranslateEvent();
    } else {
      this.removeTranslaterEvent();
    }
  }

  createCircleMistEvent = () => {
    // this.createCircleMist();
  };

  addTranslateEvent = () => {
    const id = this.translate.on('translating', this.createCircleMistEvent);
    console.log(id);
  };

  removeTranslaterEvent = () => {
    this.translate.un('translating', this.createCircleMistEvent);
  };

  createCircleMist() {
    const polygonCoords = this.geometry.getCoordinates();
    let newGeom = new Polygon(polygonCoords);
    let diff;
    this.tokens.forEach(token => {

      const coords = newGeom.getCoordinates();
      const coordinates = token.getContainerPolygon();
      const polygon = createPolygon(coords);
      const circle = createPolygon([coordinates]);

      diff = difference(polygon, circle);
      if (diff.geometry.type === 'MultiPolygon') {
        newGeom = new MultiPolygon();
      }
      newGeom.setCoordinates(diff.geometry.coordinates);

    })
    this.feature.setGeometry(newGeom);
  }
}
