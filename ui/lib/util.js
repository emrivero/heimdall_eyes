export const generateID = (instance) => {
  const rand = Math.random().toString().slice(2);
  return `${rand}_${instance}`;
};
