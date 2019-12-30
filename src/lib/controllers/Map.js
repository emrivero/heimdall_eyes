import Game from '../entities/Game';

class MapController {

  init() {
    // TODO: Manejar mas de un juego

    const { games } = this.configuration;

    this.game = new Game(games[0]);
  }

  setActive(name) {
    this.game.setActive(name);
  }
}

const mapController = new MapController();

const MapControllerBuilder = (conf) => {
  mapController.configuration = conf;
  return mapController;
}

export default MapControllerBuilder;
