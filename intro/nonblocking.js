// const nothing = () => {}
// console.log('start sleeping')

// // settimeout(function, ms)
// // nonblock이므로 3초 뒤 다른 곳에서 실행됨.
// setTimeout(nothing, 3000) // callback 함수
// console.log('end of program')

function first() {
    console.log('first')
}

function second() {
    console.log('second')
}

function third() {
    console.log('third')
}

first()
setTimeout(second, 1000)
third()