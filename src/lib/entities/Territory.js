import { generateID } from '../util'
import Parent from './Parent';
import GameLevel from './Level';

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
     */
    this.number = options.number;

    /**
     * @public
     */
    this.activeLevel = 0;

    /**
     * @public 
     * @type {OLImageLayer}
     */
    this.gameLevels = options.gameLevels.map(config => new GameLevel({ ...config }));
  }

  addTo(map) {
    this.gameLevels.forEach((gameLevel) => {
      gameLevel.addTo(map);
      if (this.active) {
        gameLevel.setActive(false);
        if (gameLevel.number === 0) {
          gameLevel.setActive(true);
        }
      }
    });
  }

  setActive(flag) {
    this.active = flag;
    this.gameLevels.forEach((gameLevel) => {
      gameLevel.setActive(false);
      if (gameLevel.number === this.activeLevel) {
        gameLevel.setActive(this.active);
      }
    });
  }

  activateLevel(level) {
    this.activeLevel = level;
    if (this.active) {
      this.gameLevels.forEach((gameLevel) => {
        gameLevel.setActive(false);
        if (gameLevel.number === level) {
          gameLevel.setActive(true);
        }
      });
    }
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
