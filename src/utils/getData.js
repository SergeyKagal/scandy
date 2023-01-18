const URL = 'https://scandy-back.onrender.com/';

export const getData = async (query) => {
  return await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: {},
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data);
};
console.log('');
