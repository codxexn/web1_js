// https://jsonplaceholder.typicode.com/users를 fetch로 요청하여
// zipcode만 추출하기

// await - async 문법으로 바꾸기

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) =>{
  if(!response.ok) {
    throw new Error(`response: ${response.status}`);
  }
    return response.json();
})
.then((users) => {
  if(!users || users.length ==1) {
    throw new Error (`none result`)
  }
  return users.map(user => user.address.zipcode);
  })
  .then(console.log)
  .catch( (error) => {
    console.error(error);
    console.error(`error`);
  });