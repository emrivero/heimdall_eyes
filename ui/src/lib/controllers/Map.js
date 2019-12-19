import Game from '../entities/Game';

class MapController {

  init() {
    const { games } = this.configuration;

    // TODO: Manejar mas de un juego
    this.game = new Game(games[0]);
  }
}

const mapController = new MapController();

const MapControllerBuilder = (conf) => {
  mapController.configuration = conf;
  return mapController;
}

export default MapControllerBuilder;
