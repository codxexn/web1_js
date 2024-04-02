fetch("https://jsonplaceholder.typicode.com/posts/100")
.then((response) =>{
  if (!response.ok) {
    throw new Error(`response: ${response.status}`);
  }
  return response.json();
})
.then((post) => {
  if(!post) {
    throw new Error(`none result`);
  }
  return {id: post.id, title: post.title};
})
.then(console.log)
.catch((error) => {
  console.error(error);
  console.error(`error`);
});
// resolve 에 담겼던 정보를 callback 함수의 매개변수인 response로 받는데
// 그 response에 있는 ok 메소드는 통신이 성공했는지, 실패했는지를 알려준다.
// 따라서 !response.ok 가 false 면 통신이 실패했다는 의미이다. (경로가 잘못됐거나..)
// Java Exception 과 같다.
// Error 를 발생시키고 띄울 메시지 작성 ${response.status] -> response의 현재 상태}

// fetch로 받아오면 then을 통해서 그 다음 작업을 계속 이어가고
// 문제 생기면 catch에서 한번에 잡는다.
// 그래서 catch는 마지막에 한번만 써준다.
