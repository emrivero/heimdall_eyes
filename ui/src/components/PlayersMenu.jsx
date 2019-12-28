import React from 'react';
import SliderMenu from './SliderMenu';


export default function PlayersMenu(props) {
  return (
    <SliderMenu
      inheritedClasses={{
        root: {
          top: 0,
          left: 'calc(23% - 50px)',
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
          left: '24%',
          top: 0,
          backgroundColor: 'transparent',
          height: '250px',
        },
        drawerPaper_close: {
          left: '100%',
          top: 0,
          height: '250px',
          backgroundColor: 'transparent'
        },
        opener: {
          left: '10%',
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
        },
        subcontainer: {
          display: 'flex',
          height: "100%",
          backgroundColor: '#000',
        }
      }} anchor={'right'}>
      {props.children}
    </SliderMenu>
  );
}
