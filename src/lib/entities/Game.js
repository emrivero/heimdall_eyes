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

    this.translate = new Translate({
      filter: (feature, layer) => layer.get('id') !== 'mist',
    });
    this.map.addInteraction(this.translate);

    this.mistManger = new MistManager(this.translate);

    this.mistManger.addTo(this.map);
    window.game = this;
    /**
     * @public
     */
    this.territories = options.territories.map(config => new Territory(config));

    this.territories.forEach(territory => territory.addTo(this.map));
  }

  setActive(name) {
    this.territories.forEach(territory => territory.deactivate());
    this.territories.find(territory => territory.name === name).activate();
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
