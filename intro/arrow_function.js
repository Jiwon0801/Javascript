// arrow function
// 1. function을 생략해도 된다.
// 2. 함수의 매개변수가 단 하나뿐이라면 소괄호 생략 가능
// 3. 함수 바디의 표현식이 하나라면 (return 1줄) 중괄호와 return 생략 가능

const mulcam = function () {
    return 'hello'
}

const mulcam = ()=> 'hello'

const mulcam2 = name => `hello ${name}`

const sayHello = (name='noName') => `hi ${name}`



// 익명 함수
// 1회용으로 사용할 함수는 이름을 짓지 않을 수 있다.
function (num) { return num ** 3; }
num => num**3

// 익명함수 즉시 실행
(num => num**3)(4)

// 기명 함수로 만들기
const cube = num => num**3
cube(4)