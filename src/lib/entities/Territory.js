import { generateID } from '../util'
import Parent from './Parent';
import GameLevel from './GameLevel';

/**
 * @classdesc
 * @description
 */
export default class Territory extends Parent {
  constructor(options = {}) {
    super();

    /**
     * @public
     * @type 
     */
    this.id = generateID('territory');

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
     * @type {OLImageLayer}
     */
    this.gameLevels = options.gameLevels.map(config => new GameLevel({ ...config, active: this.active }));

  }

  addTo(map) {
    this.gameLevels.forEach(gameLevel => gameLevel.addTo(map));
  }


  activate() {
    this.active = true;
    this.gameLevels.forEach(gameLevel => gameLevel.activate());
  }

  deactivate() {
    this.active = false;
    this.gameLevels.forEach(gameLevel => gameLevel.deactivate());
  }

  /**
   * This method compared the equality of this instance and other object
   * 
   * @function
   * @public
   */
  equals(object) {
    return object instanceof Territory && this.id === object.id;
  }
}
