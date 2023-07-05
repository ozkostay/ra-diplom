export const searchHits = async (search) => {
  //const params = new URLSearchParams({ q: search});
  console.log("Hits param: ", search);
  console.log("Hits URL: ", `${process.env.REACT_APP_SEARCH_URL}${search}`);
  const response = await fetch(`${process.env.REACT_APP_SEARCH_URL}${search}`);
  if (!response.ok) {
    // console.log('URL ERROR');
    throw new Error(response.statusText);
  }
  // console.log('555', response.json);
  return await response.json();
};
