/**
 * @public
 */
export const generateID = (instance) => {
  const rand = Math.random().toString().slice(2);
  return `${rand}_${instance}`;
};

/**
 * @public
 */
export const detectOverflow = (coord, extent) => {
  const minX = extent[0];
  const maxX = extent[2];
  const minY = extent[1];
  const maxY = extent[3];

  const coordinates = [
    Math.min(maxX, Math.max(coord[0], minX)),
    Math.min(maxY, Math.max(coord[1], minY)),
  ];

  return coordinates
};

/**
 * @public
 */
export const validate = (options = {}, parameters = []) => {
  parameters.forEach(parameter => {
    if (!(parameter in options)) {
      console.warn(`${parameter} is not setted.`);
    }

    if (parameter === null || parameter === undefined) {
      console.warn(`${parameter} is null or undefined.`);
    }
  });
};
