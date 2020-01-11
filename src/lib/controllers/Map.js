import Game from '../entities/Game';

class MapController {

  init() {
    // TODO: Manejar mas de un juego

    const { games } = this.configuration;

    this.game = new Game(games[0]);
    window.game = this.game;
  }

  changeMapTerritory(number) {
    this.game.territories.forEach((territory) => {
      territory.setActive(number === territory.number);
    });
  }

  changeMapLevel(number) {
    this.game.territories.forEach((territory) => {
      territory.activateLevel(number);
    });
  }
}

const mapController = new MapController();

const MapControllerBuilder = (conf) => {
  mapController.configuration = conf;
  return mapController;
}

export default MapControllerBuilder;
