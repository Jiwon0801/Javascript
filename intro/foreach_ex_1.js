// 아래 함수에서 for 를 forEach 로 바꾸시오
function handlePosts() {
    const posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ]

    for (let i = 0; i < posts.length; i++){
      console.log(posts[i]) 
  }
}


// forEach
function handlePosts() {
    const posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ]

    // answer
    posts.forEach(post => console.log(post))
}

handlePosts()