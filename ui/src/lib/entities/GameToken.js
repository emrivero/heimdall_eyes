import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';
import Parent from './Parent';
import { validate, getRegularPolygon } from '../util';

/**
 * @class
 */
export default class GameToken extends Parent {
  constructor(options = {}) {
    super();

    validate(options, ['id', 'coords', 'size', 'src', 'visionRange']);

    /**
     * @public
     */
    this.id = options.id;

    /**
     * @public
     */
    this.coords = options.coords || [500, 500];
    /**
     * @public
     */
    this.feature = new Feature(new Point(this.coords));

    /**
     * @public
     */
    this.size = options.size || [0, 0];

    /**
     * @public
     */
    this.scale = 0.05;


    /**
     * @public
     */
    this.image = new Icon({
      scale: this.scale,
      src: options.src,
      size: [827, 827],
    });

    /**
     * @public
     */
    this.style = new Style({
      image: this.image,
    });

    /**
     * @public
     */
    this.olLayer = new VectorLayer({
      zIndex: options.zIndex,
      source: new VectorSource({
        features: [this.feature],
      }),
      style: (feature, resolution) => {
        const proportion = resolution / 1.174250832408435;
        if (resolution < 1) {
          this.scale = 0.03 / proportion;
        }

        this.image.setScale(this.scale);

        return this.style;
      }
    });

    /**
     * @public
     */
    this.visionRange = options.visionRange || 1;
  }

  /**
   * @public
   */
  addTo(map) {
    map.addLayer(this.olLayer);
    this.emit('added_token', this);
    window.map = map;
  }

  /**
   * @public
   */
  activate() {
    this.olLayer.setVisible(true);
  }

  /**
   * @public
   */
  deactivate() {
    this.olLayer.setVisible(false);
  }

  /**
   * @public
   */
  getCoordinates() {
    return this.feature.getGeometry().getCoordinates();
  }

  /**
   * @function
   */
  getVisibilityRange() {
    return this.size[0] * this.scale * this.visionRange;
  }

  getPixelsPosition(map) {
    return map.getPixelFromCoordinate(this.getCoordinates());
  }

  getContainerPolygon() {
    return getRegularPolygon(this.getCoordinates(), this.visionRange, 60);
  }

  /**
   * This method compared the equality of this instance and other object
   * 
   * @function
   * @public
   */
  equals(object) {
    return object instanceof GameToken && this.id === object.id;
  }
}
