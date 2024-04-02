async function getName(){
  return "zeus";
}

async function printName() {
  const name = await getName();
  // 비동기 함수인 printName 함수 안에서
  // 비동기 함수인 getName을 사용하면 각자 따로 놀기 때문에
  // getName이 끝날 때까지 printName에 다음 코드인 console.log(name);을 실행하지 말고
  // 기다리라는 의미로 await를 작성해준다.
  // await를 사용하려면 다 비동기여야 한다. 그래서 async를 붙여줌.
  console.log(name);
}

printName();

// fetch로 리턴하는 순간 async로 감싸지니까 그대로 쓰면 된다(??)