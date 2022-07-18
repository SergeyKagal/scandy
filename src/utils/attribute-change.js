export const attributeChanger = (cart, productId, attributeID, id, fn) => {
  const res = [
    ...cart.map((item) => {
      if (productId === item.id) {
        return {
          id: item.id,
          product: {
            ...item.product,
            attributes: [
              ...item.product.attributes.map((attribute) => {
                if (attribute.id === attributeID) {
                  return {
                    ...attribute,
                    items: [
                      ...attribute.items.map((attributeItem) => {
                        if (attributeItem.id === id) {
                          return { ...attributeItem, isChecked: true };
                        } else {
                          return { ...attributeItem, isChecked: false };
                        }
                      }),
                    ],
                  };
                } else {
                  return attribute;
                }
              }),
            ],
          },
        };
      } else {
        return item;
      }
    }),
  ];
  fn(res);
};
