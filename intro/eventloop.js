function func1() {
    console.log('func1')
    func2()
}

function func2() {
    // call back 이므로 0초여도 나머지 함수 실행 후 0초뒤 바로 실행
    setTimeout(() => console.log('func2'), 3000)
    func3()
    console.log('33333333')
}

function func3() {
    console.log('func3')
}

func1()