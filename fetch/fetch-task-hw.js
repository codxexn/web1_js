// city 받기

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//   if(!response.ok) {
//     throw new Error(`response: ${response.status}`);
//   }
//   return response.json();
// })
// .then((user) => {
//   if(!user) {
//     throw new Error(`none result`);
//   }
//   return user.map(user => user.address.city);
// })
// .then(console.log)
// .catch((error) => {
//   console.error(error);
//   console.error(`error`);
// })

// 이처럼 async를 사용하면 promise 코드를 훨씬 직관적으로 나타낼 수 있습니다.
// 함수에 async만 붙이면 자동으로 promise 객체로 인식되고, return값은 resolve()값과 동일합니다.

// async가 붙은 함수는 promise 객체를 반환합니다. 따라서 .then((a) => {}를 이용할 수 있습니다.

// async - await 로 바꾸기
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const resultData = data.map((data) => data.address.zipcode);
  // promise 객체로 반환되는 것이 아니기 때문에 await 붙여줄 필요없다.
  console.log(resultData);
}

getData();
