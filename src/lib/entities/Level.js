import GameToken from './Token';
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
    this.number = options.number;

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
      zIndex: 0,
    });

    this.tokens = options.tokens || [];

    this.tokens = this.tokens.map(token => new GameToken({ ...token }));
  }

  /**
   * @function
   * @public
   */
  addTo(map) {
    this.map = map;
    map.addLayer(this.olLayer);
    this.tokens.forEach(token => {
      token.addTo(map);
      token.setActive(!this.active);
    });
    this.emit('created_tokens', this.tokens);
  }

  /**
   * @function
   * @public
   */
  addToken(token) {
    if (!token.map) {
      token.addTo(this.map);
    }
    this.tokens.push(token);
    token.setActive(this.active);
  }

  removeToken(token) {
    this.tokens = this.tokens.filter(tkn => tkn.id !== token.id);
  }

  deleteToken(token) {
    this.removeToken(token);
    token.destroy();
  }

  setActive(flag) {
    this.active = !!flag;
    this.olLayer.setVisible(this.active);
    this.tokens.forEach(token => token.setActive(this.active));
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
