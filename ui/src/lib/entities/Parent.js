import eventBus from '../event/EventBus';

/**
 * Parent class of entities.
 * 
 * @abstract
 * @class
 */
export default class Parent {
  constructor() {
    this.eventBus = eventBus;
  }

  /**
   * @public
   */
  emit(eventType, args) {
    this.eventBus.emit(eventType, args);
  }

  /**
   * @public
   */
  on(eventType, callback) {
    this.eventBus.addSubscriber(eventType, callback);
  }

  /**
   * @public
   */

  equals() {}
}
