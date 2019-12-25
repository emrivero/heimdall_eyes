import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import marco from '../assets/images/decoration/marco.png';
import flecha_inferior from 'assets/images/controls/flechas_inferior.png';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    width: drawerWidth,
    height: '100vh',
    position: 'absolute',
    top: 0,
    transition: 'all 1s',
  },
  root_close: {
    width: 0,
    height: '100vh',
    position: 'absolute',
    top: 0,
    transition: 'all 1s',
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerPaper: {
    border: '15px solid',
    borderImage: `url(${marco}) 30 30 round`,
    backgroundColor: 'transparent',
    width: drawerWidth,
    height: 'auto',
    transition: 'all 1s',
  },
  drawerPaper_close: {
    border: '15px solid',
    borderImage: `url(${marco}) 30 30 round`,
    backgroundColor: 'transparent',
    width: drawerWidth,
    height: 'auto',
    left: '-240px',
    transition: 'all 1s',
  },
  opener: {
    width: '4vw',
    height: '5vh',
    position: 'absolute',
    left: '90%',
    top: '5%',
    transform: 'rotate(90deg)',
    backgroundImage: `url(${flecha_inferior})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
    transition: 'all 1s',
  },
  opener_close: {
    width: '4vw',
    height: '5vh',
    position: 'absolute',
    top: '5%',
    left: 0,
    transform: 'rotate(-90deg)',
    backgroundImage: `url(${flecha_inferior})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
    transition: 'all 1s',
  }
}));

export default function TerritoryMenu(props) {
  const classes = useStyles();

  const [isOpen, open] = useState(false);

  let openerClass = classes.opener;
  let drawerClass = classes.drawerPaper;
  let rootClass = classes.root;
  if (!isOpen) {
    rootClass = classes.root_close;
    openerClass = classes.opener_close;
    drawerClass = classes.drawerPaper_close;
  }

  return (
    <div className={rootClass}>
      <div className={openerClass} onClick={() => open(!isOpen)} />
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: drawerClass,
        }}
        anchor="left"
        open={true}>
        {props.children}
      </Drawer>
    </div>
  );
}
