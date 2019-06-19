const COLORS = ['red', 'blue', 'green']

COLORS.forEach(function(color){
    // forEach뒤에 오는 익명 함수를 callback 함수라 부른다.
    console.log(color)
})

// COLORS.forEach( color => console.log(color))