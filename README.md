# web1_JS✍️
**웹개발 (2023.06.12.~2023.11.07.) 강의에서 공부한 JS 내용**입니다.

readme 파일에 목차 및 내용 정리해두었으니 참고 부탁드립니다.

감사합니다.🥰


<br><br>

## 📝 Day01
> ### Javascript: 자바스크립트
- 퍼즐 조각처럼 코드 형태로 HTML 페이지에 내장된다.
- 컴파일 과정 없이 브라우저 내부의 자바스크립트 처리기(인터프리터)에 의해 바로 실행된다.

<br>

📌 개발이 발전됨에 따라 컴파일 과정이 가능해졌으며, Node.js로 서버환경을 구축한다.

<br>

> #### 웹 페이지에서 자바스크립트의 역할  
> 웹 페이지 3가지(HTML, CSS, JS) 코드가 결합되어 작성된다.  
> 자바스크립트는 사용자의 입력을 처리하거나 웹 애플리케이션을 작성하는 등 웹 페이지의 동적 제어에 사용된다.  
- 사용자의 입력 및 연산
- 웹 페이지 내용 및 모양의 동적 제어
- 브라우저 제어
- 웹 서버와의 통신
- 웹 애플리케이션 작성

-----------------
📌JS 환경 구축   
- Node.js 설치: https://nodejs.org/ko/download/  
-----------------

<br>

> #### 자바스크립트를 작성할 수 있는 위치  

#### 1. HTML 태그의 이벤트 리스너 속성에 작성
- HTML 태그에는 마우스가 클릭되거나 키보드의 키가 입력되는 등의 이벤트(반응)가 발생할 때 처리하는 코드를 등록하는 리스너 속성이 있다.

<br>

#### 2. <script></script>태그 안에서 작성
- <head></head>, <body></body>, body태그 밖 등 어디든 들어갈 수 있다.
- 웹 페이지 내에서 여러 번 작성할 수 있다.

<br>

#### 3. .js 자바스크립트 파일에 작성
- 자바스크립트 코드를 확장자가 .js인 별도의 파일로 저장하고 html 파일에 경로를 작성해준다.
```html
- <script src=".js경로"></script>
```

<br>

#### 4. URL 부분에 작성
- <a>태그의 href 속성 등에도 자바스크립트 코드를 작성할 수 있다.
- 하지만 href 속성에서 자바스크립트 코드를 쓸 때에는 javascript:라는 키워드를 작성해야 한다.

<br>

📌 **html 요소를 body 태그에 아무것도 작성하지 않고도 JS로 태그를 넣을 수가 있다.**

<br>

> #### 데이터 타입과 변수

<br>

#### 1. 자바스크립트 식별자(이름)
- 식별자(identifier)란 자바스크립트 개발자가 변수, 상수, 함수에 붙이는 이름이다.
- 식별자를 만들 때 다음 규칙을 준수해야 한다.
```
		- 첫 번째 문자 : 알파벳, 언더바, $문자만 사용 가능
		- 두 번째이상 문자 : 알파벳, 언더바, 0-9, $사용 가능
		- 대소문자 구분 : data와 dAta는 다른 식별자이다.
		- 키워드(예약어) 사용 불가
```

<br>

#### 2. 문장 구분
- 세미콜론으로 문장과 문장을 구분한다.
- 한 줄에 한 문장만 있는 경우 세미콜론을 생략할 수 있다.
```
		i = i + 1
		j = j + 1;
		k = k + 1; m = m + 1;
		n = n + 1 p = p + 1 (X)
```

<br>

#### 3. 주석
- 한 줄 주석 : //
- 범위 주석  : /* */

<br>

#### 4. 데이터 타입(typeof())
- 숫자 타입(number) : 42, 3.14, ...
- 논리 타입(bool) : true, false
- 문자열 타입(string) : "안녕", "하세요", "35", 'a', "A", ...
- 객체 레퍼런스 타입(object) : Object, Array, Math, Date,...
- undefined : 타입이 정해지지 않은 것을 의미한다.
- null : 값이 정해지지 않은 것을 의미한다.

<br>

#### 5. 변수
- var 키워드: 함수의 영역만 영역으로 판단한다.
- let 키워드: 모든 영역을 영역으로 판단한다.

<br>

#### 6. 상수
- const 키워드: 값을 변경시킬 수 없다.

<br>
	
#### 7. 지역변수와 전역변수
> 변수의 사용 범위(scope)에 따라서 전역변수(global)와 지역변수(local)로 나뉜다.
- 전역 변수: 영역 밖에서 선언된 변수
- 지역 변수: 영역 안에서 선언된 변수

📌 **전역 변수를 사용할 때는 그냥 전역으로 쓰지 말고 지역변수랑 이름이 겹쳐도 쓸 수 있게끔 global 객체로 쓰자.**  
📌 **브라우저에 가지고 가면 오류가 나니까 globalThis 객체로 쓰자.**


<br>

📌 **node.js에서 너무 많이 작성해서 밑에 잘 안 보이면 cls 엔터 치면 clear 된다.**


<br>

> #### Sync and Async: 동기와 비동기
> 동기가 stack으로 먼저 처리가 되고 비동기도 따로(비동기 안에 또 동기 처리가 우선) 처리된다.
- Sync(동기): 하나 다 해야 다음으로 넘어감
- Async(비동기): 다른 게 안 돼도 넘어감(비동기 안에 로직은 또 동기)
	- then을 통해서 동기화가 된다.


<br>

📌 **await ➡️ 멀티쓰레드에서 sync 걸어준 것이나 마찬가지**

<br>

> #### DOM: Document Object Model
- js로 html을 가지고 오면 DOM 이다.
- 무조건 하나의 DOM Tree로 묶어주는 게 성능이 좋다.
- [DOM] 없이는 fetch 로 가지고 온 정보를 화면에 뿌릴 수 없다.
```js
Document.getElementby
Document.querySelector
Document.innerHTML
.. 등
```

<br><br>

## 📝 Paging

> ### 필요한 파라미터


> #### 게시물
- rowCount: 한페이지에 보여줄 게시물 개수
- offset: 한페이지에서 시작할 게시물 번호
- limit: 한페이지에서 끝나야 할 게시물 번호 + 1



> #### 페이지바
- page: 현재 페이지
- pageCount: 한번에 보여줄 페이지 개수
- startPage: 게시물에 따라서 시작할 페이지 번호
- endPage: 게시물에 따라서 끝날 페이지 번호
- realEndPage: 가장 마지막 페이지

<br>

> ### 1. 한페이지에 뿌려줄 게시글 수 연산 코드


📌 **한페이지당 보여질 게시글의 수도 변수로 선언해두면 나중에 유지/보수에 편하다.**
```js
const rowCount = 10;
```
- offset: 그 페이지에서 시작할 게시글 혹은 사진의 번호
```js
시작 ➡️ 현재페이지 -1 * rowCount (한페이지당 게시글 10개라는 가정)
	예) 
		1페이지 -1 = 0 * 10 하면 0이니까 시작점(게시글(혹은 사진) 번호 0부터 시작
```
- limit: 그 페이지에서 끝나야할 게시글 혹은 사진의 번호(exclusive라서 +1)
```js
제한 ➡️ offset + rowCount (한페이지당 게시글 10개라는 가정)
	따라서 한페이지에 뿌려줄 photos 라는 Array 객체에
	photos = photos.slice(offset, limit); 을 담아주면 알아서 자동 연산이 된다.
		(시작 게시글(혹은 사진)부터 마지막 게시글(혹은 사진)까지 포함해서 잘라주는 메소드)
```

<br>

> ### 2. 아래에 보여줄 페이지 버튼의 단위
- 현재페이지 = page
- 한번에 보여줄 페이지 단위= pageCount
- startPage, endPage
- 내림: Math.floor
- 올림: Math.ceil
```js
startPage = Math.floor(page / pageCount) * pageCount + 1;
[ 33페이지인데 31이 나오게 해야 하면  33/10  floor3.3(내림) * 10 +1 ]

endPage = Math.ceil(page / pageCount) * pageCount;
```

<br>

> ### 3. 불편한 사항
> 실제로 마지막 페이지는 배수로 끝나지 않을 수도 있다.  
> 실제 마지막 페이지를 구해줘야 한다.  
> 전체 게시글 수에서 한 페이지당 보여줄 게시글 수를 나누면 총 몇 개의 페이지가 필요한지 나온다.

예를 들면 5000개의 게시글을 10개씩 보여주면 총 500개의 페이지가 필요하다.  
따라서,
```js
const realEndPage = Math.ceil(photos.length / rowCount);
[photos -> resolve 로 받아준 객체]
```
✔️ 경우의 수 2가지  
➡️ endPage == realEndPage: 그냥 두면 됨  
➡️ endPage > realEndPage: realEndPage 이후에 뜨는 것을 없애줘야 함
```js
endPage = endPage > realEndPage ?  realEndPage : endPage;
```
📌 따라서 endPage 는 달라질 수 있기 때문에 let 타입으로 선언해준다.

<br>

> ### 4. 버그


> 게시글이 0일 때
```js
	endPage = pageCount
	realEndPage = 0
```

이기 때문에 아래 페이지 버튼이 0으로 뜬다.  
📌 따라서 그럴 때는 **if문을 써서 endPage를 1로** 바꿔준다. 

<br>

> ### 5. 페이징처리를 구현해야 클릭이벤트를 넣어줄 수 있다.  
> #### div 를 paging 으로 만들어주고 JS에서 반복문 돌려서 페이지만큼 innerHTML로 append 하는 것!
> #### Promise 객체로 게시글을 받은 후에 then 으로 받아서 그 게시글을 하나씩 돌리는 콜백함수 안에서 반복문 작업을 해준다.
- 페이징 기본 구조
- 이전, for문(버튼 뽑는 것), 다음 버튼 순
```js
if( ){ }
for( ){ }
if( ){ }
```

<br>

> ### 6. css
- clear: both ➡️ 양 옆에 아무것도 없게끔 하는 것, 다음 줄로 넘어간다.
- text-decoration: none; ➡️ 밑줄 등 없애기
- height 가 늘어나는 만큼 line - height도 늘려야 한다. 똑같이 해야 위 아래 가운데에 위치가 된다.

<br>


📌 js에서는 전체를 다 가지고 와서 화면에 원하는 개수만 뿌리는 구조라서 가지고 오는데 시간이 많이 걸린다.  
📌 spring에서는 DB query를 이용해서 애초에 원하는 개수만큼만 가지고 오도록 할 수 있다.
```oracle
 <select id="selectCasesAndRepliesByLawyerId" resultType="lawyerReplyDTO">
        SELECT P2.CONSULTING_CASE_ID, P2.MEMBER_ID, P2.CASE_TITLE, P2.CONSULTING_CASE_REPLY_ID, P2.LAWYER_ID, P2.CONSULTING_CASE_REPLY_CONTENT, P2.CREATE_DATE, P2.UPDATE_DATE
        FROM
            (SELECT ROWNUM R, P1.CONSULTING_CASE_ID, P1.MEMBER_ID, P1.CASE_TITLE, P1.CONSULTING_CASE_REPLY_ID, P1.LAWYER_ID, P1.CONSULTING_CASE_REPLY_CONTENT, P1.CREATE_DATE, P1.UPDATE_DATE
            FROM
                (SELECT CC.CONSULTING_CASE_ID, CC.MEMBER_ID, CC.CASE_TITLE, CCR.CONSULTING_CASE_REPLY_ID, CCR.LAWYER_ID, CCR.CONSULTING_CASE_REPLY_CONTENT, CCR.CREATE_DATE, CCR.UPDATE_DATE
                FROM TBL_CONSULTING_CASE CC
                JOIN TBL_CONSULTING_CASE_REPLY CCR
                ON CC.CONSULTING_CASE_ID = CCR.CONSULTING_CASE_ID
                WHERE CCR.LAWYER_ID = #{lawyerId}
                ORDER BY CCR.CONSULTING_CASE_REPLY_ID DESC) P1 ) P2
        WHERE P2.R IN (1, 2, 3)
    </select>
```




