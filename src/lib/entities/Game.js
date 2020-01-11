import { generateID } from '../util';
import Parent from './Parent';
import Map from 'ol/Map';
import View from 'ol/View';
import { extent, limit, projection } from './constants';
import { Translate } from 'ol/interaction';
import { getCenter } from 'ol/extent';
import Territory from './Territory';
import MistManager from './Mist';

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
        maxZoom: 8,
        extent: limit,
      }),
    });
    window.map = this.map;
    window.game = this;
    /**
     * @public
     */
    this.translate = new Translate({
      filter: (feature, layer) => layer.get('id') !== 'mist',
    });

    /**
     * @public
     */
    this.mistManger = new MistManager(this.translate);

    /**
     * @public
     */
    this.territories = options.territories.map(config => new Territory(config));

    this.map.addInteraction(this.translate);
    this.mistManger.addTo(this.map);
    this.territories.forEach(territory => territory.addTo(this.map));
  }

  getActiveTerritory() {
    return this.territories.find(territory => territory.active);
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
