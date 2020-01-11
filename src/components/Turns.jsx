import React from 'react';
import flecha_inferior from 'assets/images/controls/flechas_inferior.png';
import flecha_superior from 'assets/images/controls/flechas_superior.png';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import rondas from 'assets/images/controls/rondas.png';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  arrows: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  arrow_up: {
    cursor: 'pointer',
    margin: '0  0 -8px 48%',
  },
  arrow_down: {
    cursor: 'pointer',
    margin: '-10px 0 0 48%',
  },
  number: {
    color: '#fff',
    fontFamily: '"augustaFont", serif',
    textShadow: '3px 0 0 #000, -3px 0 0 #000, 0 3px 0 #000, 0 -3px 0 #000, 2px 2px #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000'
  },
  containerNumber: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '60px',
    paddingTop: '15px'
  }
});


/**
 * @class
 */
class Levels extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      turn: 0,
    };
    this.mapController = props.mapController;
  }

  onChangeDown = () => {
    if (this.state.turn > 0) {

      this.setState({ turn: this.state.turn - 1 });
    }
  };

  onChangeUp = () => {
    this.setState({ turn: this.state.turn + 1 });
  };

  changeMapLevel = (level) => {
    this.mapController.changeMapLevel(level);
  }

  render() {
    const { classes, inheritedClasses } = this.props;
    const { turn } = this.state;

    let variant = 'h2';
    if (turn.toString().length > 2) {
      variant = 'h3'
    }

    if (turn.toString().length > 3) {
      variant = 'h4'
    }

    return (
      <div className={classNames(inheritedClasses ? inheritedClasses.root : null, classes.root)}>
        <img src={flecha_superior} className={classNames(inheritedClasses ? inheritedClasses.arrow_up : null, classes.arrow_up)} width="20%" alt="arrow_up" onClick={this.onChangeUp} />
        <div>
          <div className={classes.containerNumber}>
            <Typography variant={variant} className={classes.number}>{turn}</Typography>
          </div>
          <img src={rondas} alt="turns" width="80%" />
        </div>
        <img src={flecha_inferior} className={classNames(inheritedClasses ? inheritedClasses.arrow_down : null, classes.arrow_down)} width="20%" alt="arrow_down" onClick={this.onChangeDown} />
      </div>
    );
  }
}

export default withStyles(styles)(Levels);