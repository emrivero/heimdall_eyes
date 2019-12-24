import React from 'react';
import Map from './Map';
import TerritoryMenu from './TerritoryMenu';
import TerritoryPreview from './TerritoryPreview';
import builder from '../lib/controllers/Map';

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

    return (
      <React.Fragment>
        <Map {...this.props} mapController={mapController} />
        <TerritoryMenu>
          {territories.map(territory => <TerritoryPreview key={Math.random()} onClick={this.onClick} name={territory.name} src={territory.gameLevels[0].src} />)}
        </TerritoryMenu>
      </React.Fragment>
    );
  }
}

export default App;
