import ImageLayer from 'ol/layer/Image';
import Static from 'ol/source/ImageStatic';
import { generateID } from '../util';
import Parent from './Parent';
import { projection, extent } from './constants';

/**
 * @classdesc
 * @description
 */
export default class GameLevel extends Parent {
  constructor(options = {}) {
    super();

    /**
     * @public
     * @type 
     */
    this.id = generateID('gamelevel');

    /**
     * @public
     */
    this.name = options.name;

    /**
     * @public
     */
    this.active = !!options.active;

    /**
     * @public
     */
    this.zIndex = options.zIndex;

    /**
     * @public 
     * @type {OLImageLayer}
     */
    this.olLayer = new ImageLayer({
      source: new Static({
        url: options.src,
        projection,
        imageExtent: extent,
      }),
      visible: this.active,
    });

    this.tokens = options.tokens;
  }

  /**
   * @function
   * @public
   */
  addTo(map) {
    map.addLayer(this.olLayer);
  }

  /**
   * @function
   * @public
   */
  addTokens(tokens) {
    this.tokens.concat(tokens);
  }

  activate() {
    this.active = true;
    this.olLayer.setVisible(true);
    this.tokens.forEach(token => token.activate());
  }

  deactivate() {
    this.active = false;
    this.olLayer.setVisible(false);
    this.tokens.forEach(token => token.deactivate());
  }

  /**
   * This method compared the equality of this instance and other object
   * 
   * @function
   * @public
   */
  equals(object) {
    return object instanceof GameLevel && this.id === object.id;
  }
}
