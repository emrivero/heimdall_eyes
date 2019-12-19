import React from 'react';
import builder from '../lib/controllers/Map';

/**
 * @class
 */
class Map extends React.Component {


  componentDidMount() {
    const { configuration } = this.props;
    const mapController = builder(configuration);

    mapController.init();
  }

  render() {
    return (
      <React.Fragment>
        <div id="map" className="map" />
      </React.Fragment>
    );
  }
}

export default Map;