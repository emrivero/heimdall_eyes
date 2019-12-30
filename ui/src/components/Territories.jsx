import React from 'react';
import mapa_1 from 'assets/images/controls/mapa_1.png';
import mapa_2 from 'assets/images/controls/mapa_2.png';
import mapa_3 from 'assets/images/controls/mapa_3.png';
import mapa_4 from 'assets/images/controls/mapa_4.png';
import mapa_5 from 'assets/images/controls/mapa_5.png';
import mapa_6 from 'assets/images/controls/mapa_6.png';
import mapa_7 from 'assets/images/controls/mapa_7.png';
import mapa_8 from 'assets/images/controls/mapa_8.png';
import mapa_9 from 'assets/images/controls/mapa_9.png';
import mapa_10 from 'assets/images/controls/mapa_10.png';
import flecha_inferior from 'assets/images/controls/flechas_inferior.png';
import flecha_superior from 'assets/images/controls/flechas_superior.png';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

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
    margin: '-8px 0 0 48%',
  }
});

const territories =
{
  "1": mapa_1,
  "2": mapa_2,
  "3": mapa_3,
  "4": mapa_4,
  "5": mapa_5,
  "6": mapa_6,
  "7": mapa_7,
  "8": mapa_8,
  "9": mapa_9,
  "10": mapa_10,
};


/**
 * @class
 */
class Territories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      imgLevel: mapa_1,
    }
  }

  onChangeDown = () => {
    const { level } = this.state;

    const newTerritory = level - 1;
    const imgLevel = territories[newTerritory];
    if (newTerritory > 0) {
      this.setState({
        level: newTerritory,
        imgLevel
      });
    }
  };

  onChangeUp = () => {
    const { level } = this.state;

    const newTerritory = level + 1;
    const imgLevel = territories[newTerritory];
    if (newTerritory < 11) {
      this.setState({
        level: newTerritory,
        imgLevel,
      });
    }
  };

  render() {
    const { classes, inheritedClasses } = this.props;
    const { imgLevel } = this.state;


    return (
      <div className={classNames(inheritedClasses ? inheritedClasses.root : null, classes.root)}>
        <img src={flecha_superior} className={classNames(inheritedClasses ? inheritedClasses.arrow_up : null, classes.arrow_up)} width="20%" alt="arrow_up" onClick={this.onChangeUp} />
        <img src={imgLevel} alt="territory" width="80%" />
        <img src={flecha_inferior} className={classNames(inheritedClasses ? inheritedClasses.arrow_down : null, classes.arrow_down)} width="20%" alt="arrow_down" onClick={this.onChangeDown} />
      </div>
    );
  }
}

export default withStyles(styles)(Territories);