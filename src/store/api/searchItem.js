
export const searchItem = async (search) => {
  //const params = new URLSearchParams({ q: search});
  // console.log('www2', process.env.REACT_APP_SEARCH_URL);
  // console.log('URL search', search);
  // console.log('URL2', `${process.env.REACT_APP_SEARCH_URL}/${search}`);
  const response = await fetch(`${process.env.REACT_APP_SEARCH_URL}/${search}`)
  if (!response.ok) {
    // console.log('URL-2 ERROR');
    throw new Error(response.statusText);
  }
  // console.log('555-2', response.json);
  return await response.json();
}
