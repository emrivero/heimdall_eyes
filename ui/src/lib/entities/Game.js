import { generateID } from '../util';
import Parent from './Parent';
import Map from 'ol/Map';
import View from 'ol/View';
import { extent, limit, projection } from './constants';
import { Translate } from 'ol/interaction';
import { getCenter } from 'ol/extent';
import Territory from './Territory';

/**
 * @classdesc
 * @description
 */
export default class Game extends Parent {
  constructor(options = {}) {
    super();

    /**
     * @public
     * @type 
     */
    this.id = generateID('game');

    /**
     * @public
     */
    this.title = options.title;

    /**
     * @public 
     * @type {OLImageLayer}
     */
    this.map = new Map({
      controls: [],
      target: 'map',
      view: new View({
        projection: projection,
        center: getCenter(extent),
        zoom: 0,
        maxZoom: 10,
        extent: limit,
      }),
    });

    window.map = this.map;

    /**
     * @public
     */
    this.territories = options.territories.map(config => new Territory(config));

    this.territories.forEach(territory => territory.addTo(this.map));
    this.map.addInteraction(new Translate());
  }

  /**
   * This method compared the equality of this instance and other object
   * 
   * @function
   * @public
   */
  equals(object) {
    return object instanceof Game && this.id === object.id;
  }
}
