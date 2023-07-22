
export const addOrder = async (order) => {
  const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(order)
  };
  console.log(`${process.env.REACT_APP_SEARCH_URL}order`);
  const response = await fetch(
    `${process.env.REACT_APP_SEARCH_URL}order`, 
    requestOptions
  );
  if (!response.ok) {
    console.log('URL ERROR');
    throw new Error(response.statusText);
  }
  console.log('Fetch ORDER', response.ok);
  return response;
};

// let note = {
//   'content': content
// }
// const requestOptions = {
// method: 'POST',
// headers: { 'Content-Type': 'application/json' },
// body: JSON.stringify(note)
// };
// fetch(this.URL7777, requestOptions)
// .then(response => response.ok)
// .then(resOk => {
// if (resOk) {
//   this.fetchGet();
// } else {
//   console.error('Не удалось вставить данные');
// }
// })