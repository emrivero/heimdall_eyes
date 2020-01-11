import Game from '../entities/Game';
import { enemyTokens } from 'configuration/configuration';
import GameToken from 'lib/entities/Token';
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

  changeTokenLevel(id, level, lastLevel, territory) {
    const gameTerritory = this.game.territories.find(terr => terr.number === territory);
    if (gameTerritory) {
      const currentLevel = gameTerritory.gameLevels.find(lvl => lvl.number === lastLevel);
      const nextLevel = gameTerritory.gameLevels.find(lvl => lvl.number === level);
      const token = currentLevel.tokens.find(tkn => tkn.id === id);
      currentLevel.removeToken(token);
      nextLevel.addToken(token);
    }
  }

  addEnemyToken(enemyLevel) {
    const territory = this.game.getActiveTerritory();
    if (territory) {
      const level = territory.getActiveLevel();
      if (level) {
        const { map } = this.game;
        const view = map.getView();
        const options = enemyTokens[enemyLevel];
        let coordinates = options.coords;
        if (view) {
          coordinates = view.getCenter();
        }
        level.addToken(new GameToken({ ...options, coords: coordinates, id: `enemy_${enemyLevel}_${Math.random()}` }))
      }
    }
  }

  removeEnemyToken(enemyLevel) {
    const territory = this.game.getActiveTerritory();
    if (territory) {
      const level = territory.getActiveLevel();
      if (level) {
        const token = level.tokens.find(token => token.id.startsWith(`enemy_${enemyLevel}`));
        if (token) {
          level.deleteToken(token);
        }
      }
    }
  }
}

const mapController = new MapController();

const MapControllerBuilder = (conf) => {
  mapController.configuration = conf;
  return mapController;
}

export default MapControllerBuilder;
