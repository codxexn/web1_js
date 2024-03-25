// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다

function User(name, age, point) {
  this.name = name;
  this.age = age;
  this.point = point;
}

Hong = new User("홍길동", "30", "3500");
Lee = new User("이순신", "22", "0");
Jang = new User("장보고", "66", "9500");

// console.log(Hong, Lee, Jang);


function Olympus(name, age, id, address) {
  this.name = name;
  this.age = age;
  this.id = id;
  this.address = address;
}

 zeus = new Olympus("제우스", "18", "no1zeus", "올림푸스 관저");
 poseidon = new Olympus("포세이돈", "23", "seaOfL0ve", "부산시 해운대구");
 hades = new Olympus("하데스", "24", "kingofunderground", "전남 해남군");
 orphe = new Olympus("오르페우스", "22", "on1yEury", "사랑시 고백구");

 console.log(zeus, poseidon, hades, orphe);

