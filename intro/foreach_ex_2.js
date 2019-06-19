// 아래 코드의 images 배열 안에 있는 정보(height,width)를 곱해 넓이를 구하여 
// areas 배열에 저장하는 코드를 forEach 메서드를 사용해 작성해 보자.
const images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  
  const areas = []
  
  
  // answer
  images.forEach(function(image){
    areas.push(image.height * image.width)
  })
  
  // 한줄로
  images.forEach(image => areas.push(image.height * image.width))
  
  console.log(areas)