import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import opener from 'assets/images/controls/opener_menu.png';
import marco from '../assets/images/decoration/marco.png';
import gema from 'assets/images/decoration/gema_verde.png'

const openArrow = {
  backgroundImage: `url(${opener})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  height: '65px',
  width: '65px',
  margin: '5px'
};

const circleImage = {
  backgroundImage: `url(${gema})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  height: '75px',
  width: '75px',
}

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
    containerOpener: {
      ...inheritedClasses.containerOpener,
      ...circleImage,
    },
    containerOpener_close: {
      ...inheritedClasses.containerOpener_close,
      ...circleImage,
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
  let containerOpener = classes.containerOpener;
  if (!isOpen) {
    rootClass = classes.root_close;
    openerClass = classes.opener_close;
    drawerClass = classes.drawerPaper_close;
    containerOpener = classes.containerOpener_close;
  }

  return (
    <div className={rootClass}>
      <div className={containerOpener}>
        <div className={openerClass} onClick={() => open(!isOpen)} />
      </div>
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
