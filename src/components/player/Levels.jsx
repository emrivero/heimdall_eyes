import React from 'react';
import nivel_0 from 'assets/images/controls/nivel_0.png';
import nivel_1 from 'assets/images/controls/nivel_1.png';
import nivel_2 from 'assets/images/controls/nivel_2.png';
import nivel_3 from 'assets/images/controls/nivel_3.png';
import nivel_4 from 'assets/images/controls/nivel_4.png';
import nivel_5 from 'assets/images/controls/nivel_5.png';
import nivel_6 from 'assets/images/controls/nivel_6.png';
import nivel_7 from 'assets/images/controls/nivel_7.png';
import nivel_8 from 'assets/images/controls/nivel_8.png';
import nivel_9 from 'assets/images/controls/nivel_9.png';
import nivel_10 from 'assets/images/controls/nivel_10.png';
import nivel_neg_1 from 'assets/images/controls/nivel_-1.png';
import nivel_neg_2 from 'assets/images/controls/nivel_-2.png';
import nivel_neg_3 from 'assets/images/controls/nivel_-3.png';
import nivel_neg_4 from 'assets/images/controls/nivel_-4.png';
import nivel_neg_5 from 'assets/images/controls/nivel_-5.png';
import nivel_neg_6 from 'assets/images/controls/nivel_-6.png';
import nivel_neg_7 from 'assets/images/controls/nivel_-7.png';
import nivel_neg_8 from 'assets/images/controls/nivel_-8.png';
import nivel_neg_9 from 'assets/images/controls/nivel_-9.png';
import nivel_neg_10 from 'assets/images/controls/nivel_-10.png';
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

const levels =
{
  "0": nivel_0,
  "1": nivel_1,
  "2": nivel_2,
  "3": nivel_3,
  "4": nivel_4,
  "5": nivel_5,
  "6": nivel_6,
  "7": nivel_7,
  "8": nivel_8,
  "9": nivel_9,
  "10": nivel_10,
  "-1": nivel_neg_1,
  "-2": nivel_neg_2,
  "-3": nivel_neg_3,
  "-4": nivel_neg_4,
  "-5": nivel_neg_5,
  "-6": nivel_neg_6,
  "-7": nivel_neg_7,
  "-8": nivel_neg_8,
  "-9": nivel_neg_9,
  "-10": nivel_neg_10,
};


/**
 * @class
 */
class Levels extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      imgLevel: nivel_0,
    };
    this.mapController = props.mapController;
  }

  onChangeDown = () => {
    const { level } = this.state;

    const newLevel = level - 1;
    const imgLevel = levels[newLevel];
    if (newLevel > -2) {
      this.props.onChangeDown(newLevel, level);
      this.setState({
        level: newLevel,
        imgLevel
      });
    }
  };

  onChangeUp = () => {
    const { level } = this.state;

    const newLevel = level + 1;
    const imgLevel = levels[newLevel];
    if (newLevel < 1) {
      this.props.onChangeUp(newLevel, level);
      this.setState({
        level: newLevel,
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
        <img src={imgLevel} alt="level" width="75%" />
        <img src={flecha_inferior} className={classNames(inheritedClasses ? inheritedClasses.arrow_down : null, classes.arrow_down)} width="20%" alt="arrow_down" onClick={this.onChangeDown} />
      </div>
    );
  }
}

export default withStyles(styles)(Levels);