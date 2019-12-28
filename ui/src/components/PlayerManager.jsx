import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Levels from './Levels';

const styles = theme => ({
  root: {
    padding: '2px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#000',
    border: '1px solid #fff',
    borderRadius: '5px'
  },
  imgContainer: {},
  controls: {
    display: 'flex',
    // flexDirection: 'column'
  },
  mapSelector: {
    backgroundColor: '#f00',
    width: '60%',
    height: '100%',
  },
  levels: {
    width: '200px',
    alignItems: 'center'
  }
});


/**
 * @class
 */
class PlayerManager extends React.Component {
  render() {
    const { classes, src, width } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.imgContainer}>
          <img src={src} alt="player" width={width} />
        </div>
        {/* <div className={classes.mapSelector}>
        </div> */}
        <Levels inheritedClasses={{ root: classes.levels }} />
      </div>
    );
  }
}

export default withStyles(styles)(PlayerManager);