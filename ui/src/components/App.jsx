import React from 'react';
import Map from './Map';
import TerritoryMenu from './TerritoryMenu';
import TerritoryPreview from './TerritoryPreview';

function App(props) {
  //TODO: Manejar mas de un juego 
  const { territories } = props.configuration.games[0];

  return (
    <React.Fragment>
      <Map {...props} />
      <TerritoryMenu>
        {territories.map(territory => <TerritoryPreview id={territory.name} src={territory.gameLevels[0].src} />)}
      </TerritoryMenu>
    </React.Fragment>
  );
}

export default App;
