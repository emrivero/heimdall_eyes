import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Style, Icon } from 'ol/style';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';

/**
 * @class
 */
export default class GameToken extends Parent {
  constructor(options = {}) {
    super();

    // const normalizeCoord = detectOverflow(options.coordinates, extent);

    /**
     * @public
     */
    this.id = options.id;

    /**
     * @public
     */
    this.feature = new Feature(new Point([0, 0]));

    /**
     * @public
     */
    this.feature.setStyle(new Style({
      image: new Icon({
        src: options.image,
      }),
    }));

    /**
     * @public
     */
    this.image = new Icon({
      scale: 0.05,
      src: options.src,
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
      source: new VectorSource({
        features: [this.feature],
      }),
      style(feature, resolution) {
        const proportion = resolution / 1.174250832408435;
        let scale = 0.05;

        if (resolution < 1) {
          scale = 0.03 / proportion;
        }

        this.image.setScale(scale);

        return this.style;
      }
    });

  }

  /**
   * @public
   */
  addTo(map) {
    map.addLayers(this.olLayer);
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
   * This method compared the equality of this instance and other object
   * 
   * @function
   * @public
   */
  equals(object) {
    return object instanceof GameToken && this.id === object.id;
  }
}
