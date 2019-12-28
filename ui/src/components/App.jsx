import React from 'react';
import Map from './Map';
import TerritoryMenu from './TerritoryMenu';
import TerritoryPreview from './TerritoryPreview';
import builder from '../lib/controllers/Map';
import LevelMenu from './LevelMenu';
import PlayersMenu from './PlayersMenu';
import EnemiesMenu from './EnemiesMenu';
import PlayerManager from './PlayerManager';
import { playerTokens } from 'configuration/configuration';

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
        <TerritoryMenu length={length}>
          {territories.map(territory => <TerritoryPreview key={Math.random()} onClick={this.onClick} name={territory.name} src={territory.gameLevels[0].src} />)}
        </TerritoryMenu>
        <LevelMenu />

        <EnemiesMenu>
        </EnemiesMenu>

        <PlayersMenu>
          {playerTokens.map(player => <PlayerManager key={player.id} src={player.src} width={player.size[0] / 8} />)}
        </PlayersMenu>
      </React.Fragment>
    );
  }
}

export default App;
