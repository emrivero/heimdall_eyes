/**
 * Event bus
 * 
 * @classdesc
 */
class EventBus {
  constructor() {
    this.subscribers = [];
  }

  /**
   * @method
   * @public
   */
  emit(eventType, args) {
    const filteredSubs = this.filter(eventType);
    filteredSubs.forEach((subscriber) => {
      const { callback } = subscriber;
      callback(args);
    });
  }

  /**
   * @method
   * @public
   */
  addSubscriber(eventType, callback) {
    if (typeof eventType === 'string' && typeof callback === 'function') {
      this.subscribers.push({
        eventType,
        callback,
      });
    }
  }

  filter(evtType) {
    return this.subscribers.filter(subscriber => subscriber.eventType === evtType);
  }
}

export default new EventBus();
