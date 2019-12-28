import React from 'react';
import SliderMenu from './SliderMenu';

const drawerWidth = 240;

export default function TerritoryMenu(props) {

  const { length } = props;

  let height = `${150 * length}px`;
  if (length < 3) {
    height = 'auto';
  }

  return (
    <SliderMenu
      inheritedClasses={{
        root: {
          width: drawerWidth,
          height: height,
          position: 'absolute',
          top: '100px',
        },
        root_close: {
          width: 0,
          height: height,
          position: 'absolute',
          top: '100px',
        },
        drawer: {
          flexShrink: 0,
          width: drawerWidth,
        },
        drawerPaper: {
          top: '100px',
          backgroundColor: 'transparent',
          height: height,
          width: drawerWidth,
        },
        drawerPaper_close: {
          backgroundColor: 'transparent',
          top: '100px',
          height: height,
          width: drawerWidth,
          left: '-240px',
        },
        opener: {
          width: '75px',
          height: '48px',
          position: 'absolute',
          left: '90%',
          top: '15%',
          transform: 'rotate(90deg)',
        },
        opener_close: {
          width: '75px',
          height: '48px',
          position: 'absolute',
          top: '15%',
          left: 0,
          transform: 'rotate(-90deg)',
        }
      }} anchor={'left'}>
      {props.children}
    </SliderMenu>
  );
}
