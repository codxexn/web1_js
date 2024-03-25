// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// Set-ExecutionPolicy Unrestricted
// tsc --init

// function add(num1, num2) {
//   return num1 + num2;
// }

// let result = add(1, 2);
// console.log(result);

function add(num1, num2, num3 = 0) {
  return num1 + num2 + num3;
}

// let result = add(1, 2);
// result = add(1, 2, 3);
// console.log(result);

// 아이디, 비번, 닉네임 전달받고, 닉네임은 기본 값을 없음으로 설정한다.
// function login(id, password, nickname){

// }

// 가변인자
// function add(...numbers) {
//   console.log(numbers);
  // for(let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
  // }
  // for(let i in numbers) {
  //   console.log(i);
  // }
  // for(let i of numbers) {
  //   console.log(i);
  // }
// }
// add(1, 2, 3, 4, 5);

// 이름, 나이를 가변인자로 전달받고 출력하기

function information(... info){
  console.log(`이름: ${info[0]}`);
  console.log(`나이: ${info[1]}살`);
}

information("이도은", 20);


