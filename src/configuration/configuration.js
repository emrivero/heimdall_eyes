import farton from '../assets/images/levels/farton.png'
import dungeon from '../assets/images/levels/dungeon.png'

import gunar from '../assets/images/pjs/gunar.png'
import aliena from '../assets/images/pjs/aliena.png'
import elba from '../assets/images/pjs/elba.png'
import etrion from '../assets/images/pjs/etrion.png';
import baelos from '../assets/images/pjs/baelos.png';
import rumple from '../assets/images/pjs/rumple.png';
import wulf from '../assets/images/pjs/wulf.png';

import baseEnemy from 'assets/images/enemies/base.png';
import eliteEnemy from 'assets/images/enemies/elite.png';
import bossEnemy from 'assets/images/enemies/boss.png';
import backgroundBase from 'assets/images/banners/banner_enemigo_base.png';
import backgroundElite from 'assets/images/banners/banner_enemigo_elite.png';
import backgroundBoss from 'assets/images/banners/banner_enemigo_boss.png';

import banner_azul from 'assets/images/banners/banner_azul.png';
import banner_verde from 'assets/images/banners/banner_verde.png';
import banner_rojo from 'assets/images/banners/banner_rojo.png';
import banner_morado from '../assets/images/banners/banner_morado.png';
import banner_marron from '../assets/images/banners/banner_marron.png';
import banner_naranja from '../assets/images/banners/banner_naranja.png';
import banner_negro from '../assets/images/banners/banner_negro.png';

import { extent } from 'lib/entities/constants';

export const enemyTokens = [{
    src: baseEnemy,
    size: [827, 827],
    background: backgroundBase,
    level: 0,
    coords: [500, 500],
  },
  {
    src: eliteEnemy,
    size: [827, 827],
    background: backgroundElite,
    level: 1,
    coords: [500, 500]
  },
  {
    src: bossEnemy,
    size: [827, 827],
    background: backgroundBoss,
    level: 2,
    coords: [500, 500]
  }
];

const gunarToken = {
  id: 'gunar',
  src: gunar,
  background: banner_azul,
  size: [827, 827],
  visionRange: 30,
  coords: [extent[2] / 2, 0]
};

const alienaToken = {
  id: 'aliena',
  src: aliena,
  background: banner_rojo,
  size: [827, 827],
  visionRange: 30,
  coords: [extent[2] / 2 + 20, 0]
};

const elbaToken = {
  id: 'elba',
  src: elba,
  background: banner_verde,
  size: [827, 827],
  visionRange: 50,
  coords: [extent[2] / 2 + 40, 0]
};

const etrionToken = {
  id: 'etrion',
  src: etrion,
  background: banner_morado,
  size: [827, 827],
  visionRange: 50,
  coords: [extent[2] / 2 + 60, 0]
};

const wulfToken = {
  id: 'wulf',
  src: wulf,
  background: banner_negro,
  size: [827, 827],
  visionRange: 50,
  coords: [extent[2] / 2 + 80, 0]
};

const baelosToken = {
  id: 'baelos',
  src: baelos,
  background: banner_marron,
  size: [827, 827],
  visionRange: 50,
  coords: [extent[2] / 2 + 100, 0]
};

const rumpleToken = {
  id: 'rumple',
  src: rumple,
  background: banner_naranja,
  size: [827, 827],
  visionRange: 50,
  coords: [extent[2] / 2 + 120, 0]
};



export const playerTokens = [
  gunarToken, alienaToken, etrionToken, rumpleToken
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
