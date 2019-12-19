import Projection from 'ol/proj/Projection';

/**
 * @constant
 */
const buffer = 300;

/**
 * @constant
 */
export const extent = [0, 0, Math.round(window.innerWidth * 0.9), Math.round(window.innerHeight * 0.9)];

/**
 * @constant
 */
export const projection = new Projection({
  code: 'fantasy-proj',
  units: 'pixels',
  extent: extent
});

/**
 * @constant
 */
export const limit = [extent[0] - buffer, extent[1] - 45, extent[2] + buffer, extent[3] + 45];
