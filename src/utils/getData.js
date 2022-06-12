export const getData = async (query) => {
  const response = await fetch('http://localhost:4000/', {
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
  return response;
};
