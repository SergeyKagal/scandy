export const queries = {
  currensy: 'query {currencies {label,symbol}}',
  categories:
    'query{categories{name,products{id,gallery,name,inStock,prices{amount,currency{symbol,label}}}}}',
};
