import React from 'react';
import Map from './Map';
import TerritoryMenu from './TerritoryMenu';
import TerritoryPreview from './TerritoryPreview';
import builder from '../lib/controllers/Map';
import PlayersMenu from './player/PlayersMenu';
import EnemiesMenu from './EnemiesMenu';
import PlayerManager from './player/PlayerManager';
import { playerTokens, enemyTokens } from 'configuration/configuration';
import Menu from './Menu';
import Levels from './Levels';
import Territories from './Territories';
import EnemyManager from './EnemyManager';

class App extends React.Component {

  onClick = (number) => {
    this.mapController.changeMapTerritory(number);
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
          <Levels mapController={this.mapController} />
        </Menu>
        <Menu>
          <Territories mapController={this.mapController} />
        </Menu>
        <TerritoryMenu length={length}>
          {territories.map(territory => <TerritoryPreview key={Math.random()} number={territory.number} onClick={this.onClick} name={territory.name} src={territory.gameLevels[0].src} />)}
        </TerritoryMenu>

        <EnemiesMenu>
          {enemyTokens.map(enemy => <EnemyManager key={Math.random()} background={enemy.background} src={enemy.src} width={enemy.size[0] / 4} />)}
        </EnemiesMenu>

        <PlayersMenu>
          {playerTokens.map(player => <PlayerManager key={player.id} id={player.id} 
          mapController={this.mapController} background={player.background} 
          src={player.src} width={player.size[0] / 5} />)}
        </PlayersMenu>
      </React.Fragment>
    );
  }
}

export default App;
