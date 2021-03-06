import React from 'react';
import SliderMenu from '../SliderMenu';


export default function PlayersMenu(props) {
  return (
    <SliderMenu
      inheritedClasses={{
        root: {
          top: 0,
          left: 'calc(100% - 470px)',
          height: '220px',
          position: 'absolute',
        },
        root_close: {
          top: 0,
          left: 'calc(100% - 75px)',
          height: '220px',
          position: 'absolute',
        },
        drawerPaper: {
          width: '420px',
          left: 'calc(100% - 420px)',
          top: 0,
          backgroundColor: 'transparent',
          height: 'unset',
          maxHeight: '100%',
          border: 'none'
        },
        drawerPaper_close: {
          width: '420px',
          left: '100%',
          top: 0,
          backgroundColor: 'transparent',
          height: 'unset',
          maxHeight: '100%',
          border: 'none'
        },
        opener: {
          transform: 'rotate(-45deg)',
        },
        opener_close: {
        },
        containerOpener: {
          zIndex: 2000,
          top: '50px',
          left: '10%',
          position: 'absolute',
        },
        containerOpener_close: {
          top: '50px',
          position: 'absolute',
          left: '90%',
        },
        subcontainer: {
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '100%',
        }
      }} anchor={'right'}>
      {props.children}
    </SliderMenu>
  );
}
