const URL = 'http://localhost:4000/';

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
