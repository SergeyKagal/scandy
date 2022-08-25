import React, { PureComponent } from 'react';
import { makeButtonClass } from '../../utils/makeButtonClass';
import store from '../../store';
import { observer } from 'mobx-react';

class PdpProperties extends PureComponent {
  render() {
    return (
      <div className="pdp__props">
        {store.currentProductAttributes.map((attribute) => (
          <div key={attribute.id} className="pdp__prop-wrapper">
            <span>{attribute.name}:</span>
            <div className="pdp__prop-buttons">
              {attribute.items.map((item) => (
                <button
                  key={item.id}
                  className={makeButtonClass(
                    attribute.name,
                    item.isChecked,
                    'pdp'
                  )}
                  style={
                    attribute.name === 'Color'
                      ? { backgroundColor: item.value }
                      : null
                  }
                  onClick={() => {
                    store.productAttributesHandler(attribute, item);
                  }}
                  disabled={!store.currentProduct.inStock}
                >
                  {item.value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default observer(PdpProperties);
