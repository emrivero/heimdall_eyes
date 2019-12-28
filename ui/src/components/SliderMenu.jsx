import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import flecha_inferior from 'assets/images/controls/flechas_inferior.png';
import marco from '../assets/images/decoration/marco.png';


const openArrow = {
  backgroundImage: `url(${flecha_inferior})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
};

const border = {
  border: '15px solid',
  borderImage: `url(${marco}) 30 30 round`,
};

export default function SliderMenu(props) {
  const { inheritedClasses, children, anchor } = props;
  const useStyles = makeStyles(theme => ({
    root: {
      transition: theme.transitions.create(['all'], {
        easing: theme.transitions.easing.easeInOut,
        duration: '1s',
      }),
      ...inheritedClasses.root,
      [theme.breakpoints.up('xl')]: {
        ...inheritedClasses.rootLG,
      }
    },
    root_close: {
      transition: theme.transitions.create(['all'], {
        easing: theme.transitions.easing.easeInOut,
        duration: '1s',
      }),
      ...inheritedClasses.root_close,
      [theme.breakpoints.up('xl')]: {
        ...inheritedClasses.rootCloseLG,
      }
    },
    drawer: {
      ...inheritedClasses.drawer,
      [theme.breakpoints.up('xl')]: {
        ...inheritedClasses.drawerLG,
      }
    },
    drawerPaper: {
      ...border,
      transition: theme.transitions.create(['all'], {
        easing: theme.transitions.easing.easeInOut,
        duration: '1s',
      }),
      ...inheritedClasses.drawerPaper,
      [theme.breakpoints.up('xl')]: {
        ...inheritedClasses.drawerPaperLG,
      }
    },
    drawerPaper_close: {
      ...border,
      transition: theme.transitions.create(['all'], {
        easing: theme.transitions.easing.easeInOut,
        duration: '1s',
      }),
      ...inheritedClasses.drawerPaper_close,
      [theme.breakpoints.up('xl')]: {
        ...inheritedClasses.drawerPaperCloseLG,
      }
    },
    opener: {
      ...openArrow,
      cursor: 'pointer',
      transition: theme.transitions.create(['all'], {
        easing: theme.transitions.easing.easeInOut,
        duration: '1s',
      }),
      ...inheritedClasses.opener,
      [theme.breakpoints.up('xl')]: {
        ...inheritedClasses.openerLG,
      }
    },
    opener_close: {
      ...openArrow,
      cursor: 'pointer',
      transition: theme.transitions.create(['all'], {
        easing: theme.transitions.easing.easeInOut,
        duration: '1s',
      }),
      ...inheritedClasses.opener_close,
      [theme.breakpoints.up('xl')]: {
        ...inheritedClasses.openerCloseLG,
      },
    },
    subcontainer: {
      ...inheritedClasses.subcontainer,
    }
  }));

  const classes = useStyles();

  const [isOpen, open] = useState(props.open);

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
        anchor={anchor}>
        <div className={classes.subcontainer}>
          {children}
        </div>
      </Drawer>
    </div>
  );
}
