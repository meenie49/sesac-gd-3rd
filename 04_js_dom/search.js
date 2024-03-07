const products = [
  {
    id: 1,
    name: '노트북',
    price: 1000000,
    image: './img/laptop.jpg',
    description: '고성능 노트북입니다.',
  },
  {
    id: 2,
    name: '스마트폰',
    price: 800000,
    image: './img/smartphone.jpg',
    description: '최신 스마트폰입니다.',
  },
  {
    id: 3,
    name: '유선키보드',
    price: 20000,
    image: './img/keyboard.jpg',
    description: '유선 키보드입니다.',
  },
  {
    id: 4,
    name: '블루투스 키보드',
    price: 30000,
    image: './img/bluetooth-keyboard.jpg',
    description: '사용이 편리한 무선 키보드입니다.',
  },
  {
    id: 5,
    name: '기계식 키보드',
    price: 180000,
    image: './img/mechanical-keyboard.jpg',
    description: '소리가 매력적인 기계식 키보드입니다.',
  },
  {
    id: 6,
    name: '마우스',
    price: 50000,
    image: './img/mouse.jpg',
    description: '편리한 이용이 가능한 마우스입니다.',
  },
  {
    id: 7,
    name: '게이밍 마우스',
    price: 80000,
    image: './img/gaming-mouse.jpg',
    description: '게이밍용 마우스입니다.',
  },
  {
    id: 8,
    name: '32인치 모니터',
    price: 300000,
    image: './img/monitor-32.jpg',
    description: '32인치의 모니터입니다.',
  },
  {
    id: 9,
    name: '20인치 모니터',
    price: 180000,
    image: './img/monitor-20.jpg',
    description: '20인치의 키보드입니다.',
  },
];

// 변수 선언은 위치를 한곳에 하기

const productList = document.querySelector('#product-list');
// querySelector 이기 때문에 #을 앞에 써줘야함
const btn = document.querySelector('#search-btn');

// 서버에서 받아온 데이터를 브라우저에 로드함
function displayProducts(products) {
  // 만약 검색을 한 경우에는 원래 있던 요소들을 삭제해야
  // 검색 결과 요소들만 볼 수 있음
  productList.innerHTML = ''; // 상품 목록 초기화
  products.forEach((product) => {
    // 프로덕트 하나하나를 객체라 함 key와 value로 접근
    // key나 value 는  = 값으로 하고, 객체는 ''로 쓰기
    const productElement = document.createElement('div');
    // ``을 써서 창에 보이도록
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <p>상품 이름: ${product.name}, 가격: ${product.price}원</p>  
        `;
    productElement.addEventListener('click', () => {
      window.location.href = `detail.html?id=${product.id}`;
      // 쿼리스트링을 사용해 detail.html 파일로 이동하는데,
      // id라는 key로 product.id 값을 함께 전달
    });

    productList.append(productElement);
  });
}

// 검색 결과를 표시하는 함수
function searchProducts(keyword) {
  const filteredProducts = products.filter((product) => {
    // .filter() : 배열 내부에서 조건에 부합하는 요소만 찾아서 '배열로' 반환
    // .find() : 배열 내부에서 조건에 부합하는 첫번째 요소를 찾아서 '값'으로 반환
    // return을 작성해야 포함하고 있는 배열을 반환해줌
    return product.name.includes(keyword);
  });
  // 필터된 상품을 화면에 보여줌
  displayProducts(filteredProducts);
}

btn.addEventListener('click', () => {
  const keyword = document.querySelector('#search-input').value;
  searchProducts(keyword);
});

// 함수로 만들어서 아직 실행시키지 않아서 실행시켜 준거임
displayProducts(products);
