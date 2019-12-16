import ImageLayer from 'ol/layer/Image';
import Static from 'ol/source/ImageStatic';
import { generateID } from './util'
/**
 * @classdesc
 * @desc
 * Lo que en Openlayers se llama "layer" o capa, aqui
 * será mapa en referencia a que cada imagen estática 
 * es un mapa del lugar del juego. 
 */
export default class GameMap {
  constructor(id, options = {}) {

    /**
     * @public
     * @type 
     */
    this.id = generateID('gamemap');

    /**
     * @public 
     * @type {OLImageLayer}
     */
    this.olLayer = new ImageLayer({
      source: new Static({
        url: options.url,
        projection: options.projection,
        imageExtent: options.extent
      })
    });
  }

  /**
   * @function
   * @public
   */
  addTo(map) {
    map.addLayer(this.olLayer);
  }

  /**
   * This method compared the equality of this instance and other object
   * 
   * @function
   * @public
   */
  equals(object) {
    return object instanceof GameMap && this.id === object.id;
  }
}
