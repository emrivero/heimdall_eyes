import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Levels from './Levels';
import Territories from './Territories';

const styles = theme => ({
  root: {
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: '5px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    justifyContent: 'center',
    height: '220px',
  },
  imgContainer: {
    cursor: 'pointer',
  },
  controls: {
    display: 'flex',
    flexDirection: 'column'
  },
  levels: {
    width: '200px',
    alignItems: 'center'
  },
  arrow_up: {
    margin: '0 0 0 35%'
  },
  arrow_down: {
    margin: '0 0 0 35%'
  }
});


/**
 * @class
 */
class PlayerManager extends React.Component {

  onChangeUpLevel = (number) => {
    const { id } = this.props;
  };

  onChangeDownLevel = (number) => {
    const { id } = this.props;

  };

  onChangeUpTerritory = (number) => {
    const { id } = this.props;

  };

  onChangeDownTerritory = (number) => {
    const { id } = this.props;

  };

  render() {
    const { classes, src, width, background } = this.props;
    return (
      <div className={classes.root} style={{ backgroundImage: `url(${background})` }}>
        <div className={classes.controls}>
          <Territories onChangeUp={this.onChangeUpTerritory} onChangeDown={this.onChangeDownTerritory}
            inheritedClasses={{ root: classes.levels, arrow_up: classes.arrow_up, arrow_down: classes.arrow_down }} />
          <Levels onChangeUp={this.onChangeUpLevel} onChangeDown={this.onChangeDownLevel}
            inheritedClasses={{ root: classes.levels, arrow_up: classes.arrow_up, arrow_down: classes.arrow_down }} />
        </div>
        <div className={classes.imgContainer}>
          <img src={src} alt="player" width={width} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PlayerManager);