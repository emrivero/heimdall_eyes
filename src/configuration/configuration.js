import farton from '../assets/images/levels/farton.png'
import dungeon from '../assets/images/levels/dungeon.png'
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

const fartonLevel = {
  name: 'farton',
  src: farton,
  number: 0,
  tokens: playerTokens,
};

const dungeonLevel = {
  name: 'dungeon',
  src: dungeon,
  number: -1,
};

const territory = {
  name: 'territory2',
  gameLevels: [fartonLevel, dungeonLevel],
  number: 1,
  active: true,
};

const game2 = {
  title: 'Campaña 2',
  territories: [territory],
};

const configuration = {
  games: [game2],
};


export default configuration;
