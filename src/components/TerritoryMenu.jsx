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
          top: '200px',
          left: '240px'
        },
        root_close: {
          width: 0,
          height: height,
          position: 'absolute',
          top: '200px',
          left: 0,
        },
        drawer: {
          flexShrink: 0,
          width: drawerWidth,
        },
        drawerPaper: {
          top: '200px',
          backgroundColor: 'transparent',
          height: height,
          width: drawerWidth,
          left: 0,
        },
        drawerPaper_close: {
          backgroundColor: 'transparent',
          top: '200px',
          height: height,
          width: drawerWidth,
          left: '-240px',
        },
        opener: {
          transform: 'rotate(45deg)',
        },
        opener_close: {
        },
        containerOpener: {
          position: 'absolute',
        },
        containerOpener_close: {
          position: 'absolute',
        }
      }} anchor={'left'}>
      {props.children}
    </SliderMenu>
  );
}
