import store from '../store';

export const isAllAttributesChecked = () => {
  if (store.currentProduct.attributes) {
    let counter = 0;
    store.currentProduct.attributes.forEach((attribute) => {
      attribute.items.map((item) => {
        if (item.isChecked) {
          counter++;
        }
      });
    });
    return counter === store.currentProduct.attributes.length;
  }
};
