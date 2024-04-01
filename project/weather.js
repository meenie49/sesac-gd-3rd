// // 화면에 보여지게 하는 함수
// function displayProduct(products) {
//     const productListEL = document.querySelector('#product-list');
//     productListEL.innerHTML = ''; // 상품목록 초기화

//     // 상품 목록 껍데기
//     products.forEach((product) => {
//       const div = document.createElement('div');
//       // 템플릿 리터럴로 바로 접근
//       div.innerHTML = `
//           <img src="${product.image}" alt="$product.name" />
//           <p>상품 이름 ${product.name}", 가격: ${product.price}원</p>`;

//       productListEL.append(div);
//     });
//   }

// // 상품 데이터를 (json mock)를 가져오는 함수
// function fetchProducts() {
//     fetch('./data.json')
//       .then((response) => response.json())
//       .then((data) => {
//         displayProduct(data);
//       })
//       .catch((err) => console.log('상품 데이터를 불러오는데 실패했습니다.'));
//   }

//   fetchProducts();

// function fetchWeather() {
//   fetch('./weather.json')
//     .then((response) => response.json())
//     .catch((err) => console.log('날씨 데이터를 불러오는데 실패했습니다.'));
// }

// var apiURI =
//   'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={aa} ' +
//   city +
//   '&appid=' +
//   'f63752187839787153e6df04805b5f9b';
// $.ajax({
//   url: apiURI,
//   dataType: 'json',
//   type: 'GET',
//   async: 'false',
//   success: function (resp) {
//     console.log(resp);
//     console.log('현재온도 : ' + (resp.main.temp - 273.15));
//     console.log('현재습도 : ' + resp.main.humidity);
//     console.log('날씨 : ' + resp.weather[0].main);
//     console.log('상세날씨설명 : ' + resp.weather[0].description);
//     console.log('날씨 이미지 : ' + resp.weather[0].icon);
//     console.log('바람   : ' + resp.wind.speed);
//     console.log('나라   : ' + resp.sys.country);
//     console.log('도시이름  : ' + resp.name);
//     console.log('구름  : ' + resp.clouds.all + '%');
//   },
// });

// const button = document.querySelector('.button');
// const API_KEY = 'f63752187839787153e6df04805b5f9b';
// const tempSection = document.querySelector('.temperature');
// const placeSection = document.querySelector('.place');
// const descSection = document.querySelector('.description');

// button.addEventListener('click', () => {
//   // geolocation API는 navigator.geolocation 객체를 통해 사용할 수 있음
//   // geolocation.getCurrentPosition() : 사용자의 현재 위치를 가져오는 메서드
//   // navigator.geolocation.getCurrentPosition(success, error, [options]);
//   const success = (position) => {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;

//       navigator.geolocation.getCurrentPosition(success, fail);
//     getWeather(latitude, longitude);

//     const getWeather = (lat, lon) => {
//       fetch(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
//       ).then((response) => {
//         return response.json();
//       });
//       .then((json) => {
//         const temperature = json.main.temp;
//         const place = json.name;
//         const description = json.weather[0].description;

//         tempSection.innerText = temperature;
//         placeSection.innerText = place;
//         descSection.innerText = description;
//       })
//     };
//   };
// });
// const fail = () => {
//   alert('좌표를 받아올 수 없음');
// };

// let weather = document.querySelector('.w');

// weather.addEventListener('click', () => {
//   weather.style.display == 'block';
// });

// weatherButton.addEventListener('click', () => {
//   modal.classList.remove('hidden');
// });

// modalCloseButton.addEventListener('click', () => {
//   modal.classList.add('hidden');
// });
const weatherButton = document.getElementById('weatherbutton');
const modalCloseButton = document.getElementById('modalclosebutton');
const modal = document.getElementById('modalcontainer');

const button = document.querySelector('.weatherbutton');
const API_KEY = 'aa';
const tempSection = document.querySelector('.temperature');
const placeSection = document.querySelector('.place');
const descSection = document.querySelector('.description');
const iconSection = document.querySelector('.icon');
const maxSection = document.querySelector('.maxtemp');
const minSection = document.querySelector('.mintemp');

weatherButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
  navigator.geolocation.getCurrentPosition(success);
});
// 성공하면 position을 찍는다
// const success = (position) => {
//   console.log(position);
// };
const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  getWeather(latitude, longitude);
  // 함수명은 getWeather이며 latitude, longitude 두개의 매개변수가 전달
};
const fail = () => {
  alert('좌표를 받아올 수 없음');
};

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log('json', json);
      const temperature = json.main.temp;
      const temperatureMax = json.main.temp_max;
      const temperatureMin = json.main.temp_min;

      const place = json.name;
      const description = json.weather[0].description;
      const icon = json.weather[0].icon;
      const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      let today = new Date();
      let month = today.getMonth() + 1;
      let date = today.getDate();
      let monthDate = document.querySelector('.monthdate');

      monthDate.innerText = month + '.' + date;
      tempSection.innerText = temperature + ' °C';
      placeSection.innerText = place;
      descSection.innerText = description;
      iconSection.setAttribute('src', iconURL);
      //   HTML쓸 때는 ''안에 쓰고 변수만 그대로
      minSection.innerHTML =
        '<img src="./img/low.png" style="width: 30px">' +
        temperatureMin +
        ' °C';
      maxSection.innerHTML =
        '<img src="./img/HIGH.png" style="width: 30px">' +
        temperatureMax +
        ' °C';
    });
  modalCloseButton.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
};
