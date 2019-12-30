import React from 'react';
import Map from './Map';
import TerritoryMenu from './TerritoryMenu';
import TerritoryPreview from './TerritoryPreview';
import builder from '../lib/controllers/Map';
import PlayersMenu from './PlayersMenu';
import EnemiesMenu from './EnemiesMenu';
import PlayerManager from './PlayerManager';
import { playerTokens, enemyTokens } from 'configuration/configuration';
import Menu from './Menu';
import Levels from './Levels';
import Territories from './Territories';
import EnemyManager from './EnemyManager';

class App extends React.Component {

  onClick = (name) => {
    this.mapController.setActive(name);
  }

  render() {
    //TODO: Manejar mas de un juego 


    const { territories } = this.props.configuration.games[0];
    const { configuration } = this.props;
    const mapController = builder(configuration);
    this.mapController = mapController;

    const length = Math.min(3, territories.length);

    return (
      <React.Fragment>
        <Map {...this.props} mapController={mapController} />
        <Menu anchor={'right'}>
          <Levels />
        </Menu>
        <Menu>
          <Territories />
        </Menu>
        <TerritoryMenu length={length}>
          {territories.map(territory => <TerritoryPreview key={Math.random()} onClick={this.onClick} name={territory.name} src={territory.gameLevels[0].src} />)}
        </TerritoryMenu>

        <EnemiesMenu>
          {enemyTokens.map(enemy => <EnemyManager key={Math.random()} background={enemy.background} src={enemy.src} width={enemy.size[0] / 4} />)}
        </EnemiesMenu>

        <PlayersMenu>
          {playerTokens.map(player => <PlayerManager key={player.id} background={player.background} src={player.src} width={player.size[0] / 5} />)}
        </PlayersMenu>
      </React.Fragment>
    );
  }
}

export default App;
