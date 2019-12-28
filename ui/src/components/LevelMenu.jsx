import React from 'react';
import SliderMenu from './SliderMenu';
import Levels from './Levels';

const drawerWidth = 400;
export default function LevelMenu(props) {
  return (
    <SliderMenu
      open={true}
      inheritedClasses={{
        root: {
          width: drawerWidth,
          position: 'absolute',
          top: 'calc(100% - 180px)',
          overflow: 'hidden',
        },
        drawer: {
          flexShrink: 0,
          width: drawerWidth,
        },
        drawerPaper: {
          overflow: 'hidden',
          border: 'none',
          top: 'unset',
          backgroundColor: 'transparent',
          width: drawerWidth,
          height: '200px',
        },
        opener: {
          backgroundImage: 'none'
        }
      }} anchor={'left'}>
      <Levels />
    </SliderMenu>
  );
}
