function getArea(width, height) {
    let area = width * height;
    console.log(area);
  } // 함수 선언식, 함수 선언 방식의 함수 생성
  
  getArea(1, 200);
  getArea(2, 200);
  getArea(3, 200);
  getArea(4, 200);
  getArea(5, 200);
  getArea(6, 200);
  getArea(7, 200);
  getArea(8, 200);
  getArea(9, 200);
  getArea(10, 200);
  console.log("함수 실행 완료");
  
  function getArea2(width, height) {
    let area = width * height;
    return area;
  } // 함수 선언식, 함수 선언 방식의 함수 생성
  // area 변수는 함수 외부에서는 접근 불가 -> 지역변수
  
  let area1 = getArea2(100, 200);
  // area1은 함수 내부에서도 접근 가능 -> 전역변수
  console.log("area1 : ", area1);
  console.log("함수 실행 완료");
  