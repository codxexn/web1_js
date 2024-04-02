// 요청하고 응답까지 받음

// 리턴타입: promise -> then으로 받는다.
// 서버와 언어가 다름. 서버간 데이터 교환을 할 때 JSON을 쓴다.
// resolve에 우리가 받을 response를 담아뒀기 때문에 then에서 callback 함수로 받을 수 있다.
fetch("https://jsonplaceholder.typicode.com/posts")
// fetch에서 promise 객체를 리턴
// resolve에는 response를 담아뒀기 때문에
// then에서 resolve에 담아둔 response를 callback함수 매개변수로 받아서
// 그 response 객체의 .json() 메소드로 JSON으로 바꿔준다.
// 그 리턴 또한 promise 객체이기 때문에 또 .then()을 사용한다.
.then((response) => response.json())
.then(console.log);
// Promise라서 비동기통신이다.
// 동기통신은 요청해서 응답받았을 때 무조건 page가 응답된다.
// 비동기통신은 데이터를 응답 받는다.
// instagram 스크롤 내리면 계속 데이터가 뜨는 것은 스크롤이 아래 화면에 닿으면 fetch 실행
// 따라서 페이지 이동이 필요없다. -> 싱글 페이지 어플리케이션 -> Single Page Application

// 자바스크립트가 특화돼 있는 것은 이미지, 동영상 파일 입출력. 채팅 -> 텍스트 입출력
// 결제 -> 보안이 들어가는 것은 history가 남아야 하기 때문에 페이지가 이동이 돼야 한다.
// JS 쪽 보안은 Spring 사용


