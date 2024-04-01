// window 객체의 walkMap에 callback함수 할당(아까 함수이름 walkMap이라고 지음)

//window.walkMap = function () {
/* 
     첫번째인자
     구글 api는 google.maps 라는 네임스페이스 를 통해 접근가능
     맵을 생성할꺼기 때문에 Map이라는 클래스를 생성, 새로운 인스턴스 생성이니 new
     뒤에는 맵을 보여주기로 한 요소
    */
/* 
    두번째인자
     지도를 어떻게 보여줄지에 대한 옵션
     center : 어느지점을 기준으로 지도를 보여주는지
     위도: latitude 경도: longtitude
     zoom : 얼마나 가깝게 보여주는지(지도가 처음로딩됐을때 보여주는 정도)
    */
// 구글맵에 검색하면 주소창에 !3d37.5518911!4d126.9917937! 이부분이 있는데 3d가 위도 4d가 경도
// map이라는 변수를 사용해 인스턴스 할당
//  const map = new google.maps.Map(document.getElementById('map'), {
//    center: { lat: 37.5518911, lng: 126.9917937 },
//    zoom: 10,
//  });

// 마커 생성하기 -> Marker 클래스 이용
// new를 안하면 안보임
//  new google.maps.Marker({
//    position: { lat: 37.5113686, lng: 127.0595931 },
//    label: '코엑스몰',
//    map: map,
//  });
/* 
  여러개 마커 표시 하고싶으면 배열을 변수에 저장해서 사용
  const park = [
    {label: '마커됐을떄 나타나는 이름', name: '클릭하면 나타나는 이름', lat: ,lng: }]
  park를 대상으로 루프를돌아가면서 마커를 생성하게 해주면됨
    park.forEach(({ label, lat, lng }) => {
        new google.maps.Marker({
            position: { lat, lng },
            label: '코엑스몰',
            map: map
        })
    })
    */
//};

// var container = document.getElementById('map');
// var options = {
//   center: new kakao.maps.LatLng(33.450701, 126.570667),
//   level: 3,
// };

// var map = new kakao.maps.Map(container, options);

// // 1. 지도 중심 이동하기
// window.addEventListener('DOMContentLoaded', () => {
//   const { kakao } = window;

//   const mapContainer = document.getElementById('map'); // 지도를 표시한 곳
//   const mapOptions = {
//     // 지도의 옵션
//     center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
//     level: 3, //지도의 레벨(확대, 축소 정도)
//   };

//   const kakaoMap = new kakao.maps.Map(mapContainer, mapOptions);
// });
// // 2. 버튼을 누르면 지도의 중심이 이동
// const state = {
//   center: { lat: 33.452613, lng: 126.570888 },
// };

// function initMap() {
//   const mapContainer = document.getElementById('map');
//   const mapOptions = {
//     center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
//     level: 3,
//   };

//   const kakaoMap = new kakao.maps.Map(mapContainer, mapOptions);

//   const moveButton = document.querySelector('.walkstart');
//   moveButton.addEventListener('click', () => {
//     state.center = { lat: 33.45058, lng: 126.574942 };
//     const newCenter = new kakao.maps.LatLng(state.center.lat, state.center.lng);
//     kakaoMap.setCenter(newCenter);
//   });
// }

// window.addEventListener('DOMContentLoaded', initMap);

// // 3. 부드럽게 지도 이동하기
// var mapContainer = document.getElementById('map'), // 지도를 표시할 div
//   mapOption = {
//     center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//     level: 3, // 지도의 확대 레벨
//   };

// var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// function setCenter() {
//   // 이동할 위도 경도 위치를 생성합니다
//   var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);

//   // 지도 중심을 이동 시킵니다
//   map.setCenter(moveLatLon);
// }

// function panTo() {
//   // 이동할 위도 경도 위치를 생성합니다
//   var moveLatLon = new kakao.maps.LatLng(33.45058, 126.574942);

//   // 지도 중심을 부드럽게 이동시킵니다
//   // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
//   map.panTo(moveLatLon);
// }

// // 4. 지도 위에 마커 표시하기
// // let은 재선언 불가
// map = null;
// let pointObj = {
//   startPoint: { marker: null, lat: null, lng: null },
//   endPoint: { marker: null, lat: null, lng: null },
// };

// function initMap() {
//   const mapContainer = document.getElementById('map');
//   const mapOptions = {
//     center: new kakao.maps.LatLng(33.450701, 126.570667),
//     level: 3,
//   };

//   map = new kakao.maps.Map(mapContainer, mapOptions);

//   // 현재 좌표
//   document.getElementById('startButton').addEventListener('click', () => {
//     setPoint({ lat: 33.452613, lng: 126.570888 }, 'startPoint');
//   });
//   // 목적지 좌표
//   document.getElementById('endButton').addEventListener('click', () => {
//     setPoint({ lat: 33.45058, lng: 126.574942 }, 'endPoint');
//   });
// }

// function setCenter({ lat, lng }) {
//   const moveLatLon = new kakao.maps.LatLng(lat, lng);
//   map.panTo(moveLatLon);
// }

// function setPoint({ lat, lng }, pointType) {
//   setCenter({ lat, lng });

//   if (pointObj[pointType].marker !== null) {
//     pointObj[pointType].marker.setMap(null);
//   }

//   const marker = new kakao.maps.Marker({
//     position: new kakao.maps.LatLng(lat, lng),
//   });
//   marker.setMap(map);

//   pointObj[pointType] = { marker, lat, lng };
// }

// document.addEventListener('DOMContentLoaded', initMap);

// // 5. 경로 표시하기
// async function getCarDirection() {
//   const REST_API_KEY = 'a';
//   const url = 'https://apis-navi.kakaomobility.com/v1/directions';

//   const origin = `${pointObj.startPoint.lng},${pointObj.startPoint.lat}`;
//   const destination = `${pointObj.endPoint.lng},${pointObj.endPoint.lat}`;

//   const headers = {
//     Authorization: `KakaoAK ${REST_API_KEY}`,
//     'Content-Type': 'application/json',
//   };

//   const queryParams = new URLSearchParams({
//     origin: origin,
//     destination: destination,
//   });

//   const requestUrl = `${url}?${queryParams}`;

//   try {
//     const response = await fetch(requestUrl, {
//       method: 'GET',
//       headers: headers,
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
//   // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
//   var linePath = [
//     new kakao.maps.LatLng(33.452344169439975, 126.56878163224233),
//     new kakao.maps.LatLng(33.452739313807456, 126.5709308145358),
//     new kakao.maps.LatLng(33.45178067090639, 126.5726886938753),
//   ];

//   // 지도에 표시할 선을 생성합니다
//   var polyline = new kakao.maps.Polyline({
//     path: linePath, // 선을 구성하는 좌표배열 입니다
//     strokeWeight: 5, // 선의 두께 입니다
//     strokeColor: '#FFAE00', // 선의 색깔입니다
//     strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
//     strokeStyle: 'solid', // 선의 스타일입니다
//   });

//   // 지도에 선을 표시합니다
//   polyline.setMap(map);
// }

// 1. 현재 위치 찍기
let map;
let mapContainer;
let locPosition;
let init = 0;

// document.querySelector('.mwalkbt').addEventListener('click',() => {
// })
document.querySelector('#distance').innerText = init;
document.querySelector('#pointDisplay').innerText = init;
document.querySelector('#hours').innerText = init;
document.querySelector('#minutes').innerText = init;
// HTML5의 geolocation으로 사용할 수 있는지 확인합니다
// navigator.geolocation가 undefined가 아니라면
// document.querySelector('.ing') = init;
// document.querySelector('.play') = init;
// document.querySelector('.walkfinish') = init;
if (navigator.geolocation) {
  // GeoLocation을 이용해서 현재 위치를 얻어옵니다
  // 현재위치를 성공적으로 가져오면 position 객체를 갖는 callback함수를 호출
  navigator.geolocation.getCurrentPosition(function (position) {
    (lat = position.coords.latitude), // 현재 위치 위도
      (lon = position.coords.longitude); // 현재 위치 경도
    // 위에서 얻어온 위도와 경도를 사용하여 카카오맵의 LatLng 객체를 생성
    // locPosition과 message를 같이 정의
    // 이는 마커를 표시할 위치를 나타냄
    (locPosition = new kakao.maps.LatLng(lat, lon)),
      // 인포윈도우 꾸미는
      (message = '<div style="pang:5px;"ddi>현재위치</div>');
    (mapContainer = document.getElementById('map')), // 지도를 표시할 div
      // 지도를 생성할때 필요한 기본 옵션
      (mapOption = {
        center: locPosition, // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
      });
    // console.log(mapOption); // center 와 level 정보를 보여줌

    // kakao.maps.Map은 카카오맵에서 제공하는 지도객체를 생성하는 생성자 함수 인자 두개를 가짐
    // mapContainer는 지도가 표시될 html요소
    map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커와 인포윈도우를 표시합니다
    // displayMarker 함수를 호출하여 마커를 표시
    // 이 함수는 지도에 마커를 표시하고 인포윈도우를 연결하는 역할을 합니다.
    displayMarker(locPosition, message);
  });
} else {
  // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

  (locPosition = new kakao.maps.LatLng(33.450701, 126.570667)),
    (message = 'geolocation을 사용할수 없어요..');
  // kakao.maps.Map은 카카오맵에서 제공하는 지도객체를 생성하는 생성자 함수 인자 두개를 가짐
  // mapContainer는 지도가 표시될 html요소
  (mapContainer = document.getElementById('map')), // 지도를 표시할 div
    // 지도를 생성할때 필요한 기본 옵션
    (mapOption = {
      center: locPosition, // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
    });
  // console.log(mapOption); // center 와 level 정보를 보여줌

  // kakao.maps.Map은 카카오맵에서 제공하는 지도객체를 생성하는 생성자 함수 인자 두개를 가짐
  // mapContainer는 지도가 표시될 html요소
  map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
  displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {
  // 마커를 생성합니다
  let currentMarker = new kakao.maps.MarkerImage(
    '../img/map/c-marker.png',
    new kakao.maps.Size(33, 35),
    {
      offset: new kakao.maps.Point(16, 34),
      alt: '마커 이미지',
      shape: 'poly',
      coords: '1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33',
    }
  );

  marker = new kakao.maps.Marker({
    map: map,
    image: currentMarker,
    position: locPosition,
  });
  marker.setMap(map);

  (iwContent = message), // 인포윈도우에 표시할 내용
    (iwRemoveable = true); // 인포윈도우를 닫을 수 있는지 여부, true로 설정하면 사용자가 인포윈도우를 닫을 수 있음

  // 인포윈도우를 생성합니다
  infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });

  // 인포윈도우를 마커위에 표시합니다
  // 지도 상에 특정한 위치나 요소에 연다 .앞에는 열고자하는 객체
  infowindow.open(map, marker);

  // 지도 중심좌표를 접속위치로 변경합니다
  map.setCenter(locPosition);
  // 37.5572397, 127.1734381;
  // 37.5572406, 127.1713051;
  // 37.5597007, 127.170877;
  // 37.5596547, 127.1696005;
  // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
  let endPoint = new kakao.maps.LatLng(37.5596547, 127.1696005);
  let endMarker = new kakao.maps.MarkerImage(
    '../img/map/e-marker.png',
    new kakao.maps.Size(33, 35),
    {
      offset: new kakao.maps.Point(16, 34),
      alt: '마커 이미지',
      shape: 'poly',
      coords: '1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33',
    }
  );
  document.querySelector('.walkstart').addEventListener('click', () => {
    marker = new kakao.maps.Marker({
      map: map,
      image: endMarker,
      position: endPoint,
    });
    marker.setMap(map);

    (iwContent = '도착위치'), // 인포윈도우에 표시할 내용
      (iwRemoveable = true); // 인포윈도우를 닫을 수 있는지 여부, true로 설정하면 사용자가 인포윈도우를 닫을 수 있음

    // 인포윈도우를 생성합니다
    infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    // 인포윈도우를 마커위에 표시합니다
    // 지도 상에 특정한 위치나 요소에 연다 .앞에는 열고자하는 객체
    infowindow.open(map, marker);
    let linePath = [
      locPosition,
      new kakao.maps.LatLng(37.5572406, 127.1713051),
      new kakao.maps.LatLng(37.5597007, 127.170877),
      new kakao.maps.LatLng(37.5596547, 127.1696005),
    ];

    // 지도에 표시할 선을 생성합니다
    let polyline = new kakao.maps.Polyline({
      path: linePath, // 선을 구성하는 좌표배열 입니다
      strokeWeight: 5, // 선의 두께 입니다
      strokeColor: '#ff8f8f', // 선의 색깔입니다
      strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: 'solid', // 선의 스타일입니다
    });

    // 지도에 선을 표시합니다
    polyline.setMap(map);

    // ================================================================
    // 두 지점 간의 거리를 계산하는 함수
    function calculateDistance(lat1, lon1, lat2, lon2) {
      let R = 6371; // 지구의 반지름 (단위: km)
      let dLat = deg2rad(lat2 - lat1);
      let dLon = deg2rad(lon2 - lon1);
      let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let d = R * c; // 두 지점 사이의 거리 (단위: km)
      return d;
    }

    // 각도를 라디안 값으로 변환하는 함수
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }

    // 주어진 경로의 총 거리를 계산하는 함수
    function calculatePathDistance(path) {
      let totalDistance = 0;
      for (var i = 0; i < path.length - 1; i++) {
        let point1 = path[i];
        let point2 = path[i + 1];
        let distance = calculateDistance(
          point1.getLat(),
          point1.getLng(),
          point2.getLat(),
          point2.getLng()
        );
        totalDistance += distance;
      }
      return totalDistance;
    }

    // 총 거리 계산
    let totalDistance = calculatePathDistance(linePath);
    console.log('Total distance:', totalDistance.toFixed(2), 'km');

    // =============================================================
    // 거리에 따른 예상 이동 시간을 계산하는 함수
    function calculateTravelTime(distance, averageSpeed) {
      // 거리를 평균 속도로 나누어 시간을 계산
      let time = distance / averageSpeed;
      return time;
    }

    // 거리 (km)
    let distance = totalDistance; // 위에서 계산한 총 거리

    // 평균 이동 속도 (km/h)
    let averageSpeed = 5; // 예시로 5km/h로 설정

    // 예상 이동 시간 계산
    let travelTime = calculateTravelTime(distance, averageSpeed);

    // 시간을 시간과 분으로 변환
    let hours = Math.floor(travelTime);
    let minutes = Math.round((travelTime - hours) * 60);

    console.log('Estimated travel time:', hours, 'hours', minutes, 'minutes');
    // ======================================================================
    // 100m당 30포인트 쌓이도록 포인트 생성
    let pointInterval = 100; // 미터
    let pointsPerInterval = 30;

    let totalPoints =
      Math.floor((totalDistance * 1000) / pointInterval) * pointsPerInterval; // 거리를 미터로 변환하여 계산
    let ceilPoint = Math.ceil(totalPoints);
    console.log('Total points:', ceilPoint);
    // 결과를 화면에 출력
    document.getElementById('distance').innerText = distance.toFixed(2);
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('pointDisplay').innerText = ceilPoint;

    // for (let i = 0; i < totalPoints; i++) {
    //   let pointElement = document.createElement('span');
    //   pointElement.textContent = '●'; // 원하는 모양으로 변경 가능
    //   pointDisplay.appendChild(pointElement);
    // }
    document.querySelector('.walkfinish').addEventListener('click', () => {
      document.querySelector('#distance').innerText = init;
      document.querySelector('#pointDisplay').innerText = init;
      document.querySelector('#hours').innerText = init;
      document.querySelector('#minutes').innerText = init;
    });
  });
}

document.querySelector('.walkstart').addEventListener('click', () => {
  document.querySelector('.ing').style.display = 'block';
  document.querySelector('.walkstart').style.display = 'none';
  document.querySelector('.walkfinish').style.display = 'block';
});
document.querySelector('.ing').addEventListener('click', () => {
  document.querySelector('.ing').style.display = 'none';
  document.querySelector('.walkstart').style.display = 'block';
  document.querySelector('.walkfinish').style.display = 'block';
});
document.querySelector('.walkfinish').addEventListener('click', () => {
  document.querySelector('.ing').style.display = 'none';
  document.querySelector('.walkstart').style.display = 'block';
  document.querySelector('.walkfinish').style.display = 'none';
});

document.querySelector('#weatherbutton').addEventListener('click', () => {
  document.querySelector('#weatherbutton').style.display = 'none';
  document.querySelector('.back').style.display = 'none';
});
document.querySelector('#modalclosebutton').addEventListener('click', () => {
  document.querySelector('#weatherbutton').style.display = 'block';
  document.querySelector('.back').style.display = 'block';
});
