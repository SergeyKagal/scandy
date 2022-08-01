export const imageChanger = (current, max, action) => {
  if (!max) {
    return 0;
  }
  if (current + action > max) {
    return 0;
  }
  if (current + action < 0) {
    return max;
  }
  return current + action;
};
