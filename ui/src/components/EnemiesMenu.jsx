import React from 'react';
import SliderMenu from './SliderMenu';

const drawerWidth = 550;

export default function EnemiesMenu(props) {
  return (
    <SliderMenu
      inheritedClasses={{
        root: {
          top: '300px',
          left: 'calc(100% - 550px)',
          width: drawerWidth,
          height: '200px',
          position: 'absolute',
        },
        root_close: {
          top: '300px',
          left: 'calc(100% - 75px)',
          width: 0,
          height: '200px',
          position: 'absolute',
        },
        drawer: {
          flexShrink: 0,
          width: drawerWidth,
        },
        drawerPaper: {
          left: 'calc(100% - 550px)',
          top: '300px',
          backgroundColor: 'transparent',
          width: drawerWidth,
          height: '200px',
        },
        drawerPaper_close: {
          left: '100%',
          top: '300px',
          backgroundColor: 'transparent',
          width: drawerWidth,
          height: '200px',
        },
        opener: {
          left: 'calc(100% - 600px)',
          width: '75px',
          height: '48px',
          position: 'absolute',
          transform: 'rotate(-90deg)',
          top: '50px'
        },
        opener_close: {
          left: '90%',
          width: '75px',
          height: '48px',
          position: 'absolute',
          transform: 'rotate(90deg)',
          top: '50px'
        }
      }} anchor={'right'}>
      {props.children}
    </SliderMenu>
  );
}
