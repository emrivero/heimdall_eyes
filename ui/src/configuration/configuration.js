import level11_img from '../assets/images/levels/level11.png'
import level12_img from '../assets/images/levels/level12.png'
import level21_img from '../assets/images/levels/level21.png'
import level22_img from '../assets/images/levels/level22.png'
import level23_img from '../assets/images/levels/level23.png'
import gunar from '../assets/images/pjs/gunar.png'
import aliena from '../assets/images/pjs/aliena.png'
import elba from '../assets/images/pjs/elba.png'

const gunarToken = {
  id: 'gunar',
  src: gunar,
  size: [827, 827],
  visionRange: 30,
  coords: [120, 120]
};

const alienaToken = {
  id: 'aliena',
  src: aliena,
  size: [827, 827],
  visionRange: 30,
  coords: [140, 140]
};

const elbaToken = {
  id: 'elba',
  src: elba,
  size: [827, 827],
  visionRange: 50,
  coords: [100, 100]
};

const level11 = {
  name: 'level11',
  zIndex: 0,
  src: level11_img,
};

const level12 = {
  name: 'level12',
  zIndex: 2,
  tokens: [gunarToken, alienaToken, elbaToken],
  src: level12_img,
};

const level21 = {
  name: 'level21',
  zIndex: 4,
  src: level21_img,
};

const level22 = {
  name: 'level22',
  zIndex: 0,
  src: level22_img,
};

const level23 = {
  name: 'level23',
  zIndex: 2,
  src: level23_img,
};

const territory1 = {
  name: 'territory1',
  gameLevels: [level11, level12],
  active: true,
};

const territory2 = {
  name: 'territory2',
  gameLevels: [level21, level22, level23],
};

const game2 = {
  title: 'Campaña 2',
  territories: [territory1, territory2],
};

const configuration = {
  games: [game2],
};


export default configuration;
