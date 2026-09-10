export const queries = {
  currensy: 'query {currencies {label,symbol}}',
  categories:
    'query{categories{name,products{id,gallery,name,inStock,prices{amount,currency{symbol,label}}}}}',
  pdp: (id) => {
    return `query {
      product(id:"${id}"){brand
        name
        id
        inStock
        gallery
        description
        attributes{id,name,type,items{value,id,displayValue}}
        prices{
          currency{label,symbol},amount}
      }
    }`;
  },
  navList: 'query{categories{name}}',
  products: (categoryName) => `query {
    category(input:{title:"${categoryName}"}){   
      products{
        id
        gallery
        name
        inStock
        prices{amount,currency{symbol,label}}}
    }
  }`,
};
