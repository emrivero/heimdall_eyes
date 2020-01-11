import Projection from 'ol/proj/Projection';

/**
 * @constant
 */
const buffer = 500;

/**
 * @constant
 */
export const extent = [0, 0, 3594, 2019];

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
export const limit = [extent[0] - buffer, extent[1] - buffer / 2, extent[2] + buffer, extent[3] + buffer / 2];
