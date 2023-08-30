export const toJSON = (obj: object) => {
  return JSON.parse(JSON.stringify(obj));
};
