import React from 'react';

/**
 * @class
 */
class Map extends React.Component {
  componentDidMount() {
    const { mapController } = this.props;
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