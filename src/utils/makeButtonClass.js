export const makeButtonClass = (attributeName, isButtonChecked) => {
  if (attributeName === 'Color') {
    return isButtonChecked ? 'color-button color-checked' : 'color-button';
  } else {
    return isButtonChecked ? 'pdp__prop-button cheked' : 'pdp__prop-button';
  }
};
