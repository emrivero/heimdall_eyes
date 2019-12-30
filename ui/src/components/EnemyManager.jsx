import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import addSrc from 'assets/images/controls/sumar_enemigos.png';
import removeSrc from 'assets/images/controls/restar_enemigos.png';

const styles = theme => {
  return {
    root: {
      padding: '0 100px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '5px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '260px',
    },
    imgContainer: {
      cursor: 'pointer',
    },
    controls: {
      display: 'flex',
      flexDirection: 'column'
    },
    mapSelector: {
      backgroundColor: '#f00',
      width: '60%',
      height: '100%',
    },
    containerButtons: {
      padding: '5px 0',
      cursor: 'pointer',
    }
  }
};


/**
 * @class
 */
class EnemyManager extends React.Component {
  render() {
    const { classes, src, width, background } = this.props;
    return (
      <div className={classes.root} style={{ backgroundImage: `url(${background})` }}>
        <div className={classes.controls}>
          <div className={classes.containerButtons}>
            <img src={addSrc} alt="add" width="45" />
          </div>
          <div className={classes.containerButtons}>
            <img src={removeSrc} alt="remove" width="45" />
          </div>
        </div>
        <div className={classes.imgContainer}>
          <img src={src} alt="enemy" width={width} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EnemyManager);