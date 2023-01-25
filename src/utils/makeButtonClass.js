export const makeButtonClass = (
  attributeName,
  isButtonChecked,
  componentName
) => {
  if (attributeName === 'Color') {
    return isButtonChecked
      ? `${componentName}__color-button ${componentName}__color-checked`
      : `${componentName}__color-button`;
  } else {
    return isButtonChecked
      ? `${componentName}__prop-button cheked`
      : `${componentName}__prop-button`;
  }
};
