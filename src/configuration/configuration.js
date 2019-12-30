import level11_img from '../assets/images/levels/mapa_prueba_1.png'
import level21_img from '../assets/images/levels/mapa_prueba_2.png'
import level12_img from '../assets/images/levels/level21.png'
import level22_img from '../assets/images/levels/level22.png'
import level23_img from '../assets/images/levels/level23.png'
import gunar from '../assets/images/pjs/gunar.png'
import aliena from '../assets/images/pjs/aliena.png'
import elba from '../assets/images/pjs/elba.png'
import baseEnemy from 'assets/images/enemies/base.png';
import eliteEnemy from 'assets/images/enemies/elite.png';
import bossEnemy from 'assets/images/enemies/boss.png';

import backgroundBase from 'assets/images/banners/banner_enemigo_base.png';
import backgroundElite from 'assets/images/banners/banner_enemigo_elite.png';
import backgroundBoss from 'assets/images/banners/banner_enemigo_boss.png';

import banner_azul from 'assets/images/banners/banner_azul.png';
import banner_verde from 'assets/images/banners/banner_verde.png';
import banner_rojo from 'assets/images/banners/banner_rojo.png';


export const enemyTokens = [{
    src: baseEnemy,
    size: [827, 827],
    background: backgroundBase
  },
  {
    src: eliteEnemy,
    size: [827, 827],
    background: backgroundElite
  },
  {
    src: bossEnemy,
    size: [827, 827],
    background: backgroundBoss
  }
];

const gunarToken = {
  id: 'gunar',
  src: gunar,
  background: banner_azul,
  size: [827, 827],
  visionRange: 30,
  coords: [120, 120]
};

const alienaToken = {
  id: 'aliena',
  src: aliena,
  background: banner_rojo,
  size: [827, 827],
  visionRange: 30,
  coords: [140, 140]
};

const elbaToken = {
  id: 'elba',
  src: elba,
  background: banner_verde,
  size: [827, 827],
  visionRange: 50,
  coords: [100, 100]
};

export const playerTokens = [
  gunarToken, alienaToken, elbaToken
];

const level11 = {
  tokens: playerTokens,
  name: 'level11',
  zIndex: 0,
  src: level11_img,
};

const level12 = {
  name: 'level12',
  zIndex: -2,
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
