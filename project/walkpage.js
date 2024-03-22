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

// ------------------------------------------------------------------------
// 현재 위치
// var mapContainer = document.getElementById('map'), // 지도를 표시할 div
//   mapOption = {
//     center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//     level: 10, // 지도의 확대 레벨
//   };

// var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
// if (navigator.geolocation) {
//   // GeoLocation을 이용해서 접속 위치를 얻어옵니다
//   navigator.geolocation.getCurrentPosition(function (position) {
//     var lat = position.coords.latitude, // 위도
//       lon = position.coords.longitude; // 경도

//     var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
//       message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

//     // 마커와 인포윈도우를 표시합니다
//     displayMarker(locPosition, message);
//   });
// } else {
//   // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

//   var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
//     message = 'geolocation을 사용할수 없어요..';

//   displayMarker(locPosition, message);
// }

// // 지도에 마커와 인포윈도우를 표시하는 함수입니다
// function displayMarker(locPosition, message) {
//   // 마커를 생성합니다
//   var marker = new kakao.maps.Marker({
//     map: map,
//     position: locPosition,
//   });

//   var iwContent = message, // 인포윈도우에 표시할 내용
//     iwRemoveable = true;

//   // 인포윈도우를 생성합니다
//   var infowindow = new kakao.maps.InfoWindow({
//     content: iwContent,
//     removable: iwRemoveable,
//   });

//   // 인포윈도우를 마커위에 표시합니다
//   infowindow.open(map, marker);

//   // 지도 중심좌표를 접속위치로 변경합니다
//   map.setCenter(locPosition);
// }
// ------------------------------------------------------------------------
// 출발 도착
// var mapContainer = document.getElementById('map'), // 지도를 표시할 div
//   mapOption = {
//     center: new kakao.maps.LatLng(33.450701, 126.570667),
//     level: 3, // 지도의 확대 레벨
//   };

// var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// var startSrc =
//     'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_b.png', // 출발 마커이미지의 주소입니다
//   startSize = new kakao.maps.Size(50, 45), // 출발 마커이미지의 크기입니다
//   startOption = {
//     offset: new kakao.maps.Point(15, 43), // 출발 마커이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
//   };

// // 출발 마커 이미지를 생성합니다
// var startImage = new kakao.maps.MarkerImage(startSrc, startSize, startOption);

// var startDragSrc =
//     'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_drag.png', // 출발 마커의 드래그 이미지 주소입니다
//   startDragSize = new kakao.maps.Size(50, 64), // 출발 마커의 드래그 이미지 크기입니다
//   startDragOption = {
//     offset: new kakao.maps.Point(15, 54), // 출발 마커의 드래그 이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
//   };

// // 출발 마커의 드래그 이미지를 생성합니다
// var startDragImage = new kakao.maps.MarkerImage(
//   startDragSrc,
//   startDragSize,
//   startDragOption
// );

// // 출발 마커가 표시될 위치입니다
// var startPosition = new kakao.maps.LatLng(33.450701, 126.570667);

// // 출발 마커를 생성합니다
// var startMarker = new kakao.maps.Marker({
//   map: map, // 출발 마커가 지도 위에 표시되도록 설정합니다
//   position: startPosition,
//   draggable: true, // 출발 마커가 드래그 가능하도록 설정합니다
//   image: startImage, // 출발 마커이미지를 설정합니다
// });

// // 출발 마커에 dragstart 이벤트를 등록합니다
// kakao.maps.event.addListener(startMarker, 'dragstart', function () {
//   // 출발 마커의 드래그가 시작될 때 마커 이미지를 변경합니다
//   startMarker.setImage(startDragImage);
// });

// // 출발 마커에 dragend 이벤트를 등록합니다
// kakao.maps.event.addListener(startMarker, 'dragend', function () {
//   // 출발 마커의 드래그가 종료될 때 마커 이미지를 원래 이미지로 변경합니다
//   startMarker.setImage(startImage);
// });

// var arriveSrc =
//     'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_b.png', // 도착 마커이미지 주소입니다
//   arriveSize = new kakao.maps.Size(50, 45), // 도착 마커이미지의 크기입니다
//   arriveOption = {
//     offset: new kakao.maps.Point(15, 43), // 도착 마커이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
//   };

// // 도착 마커 이미지를 생성합니다
// var arriveImage = new kakao.maps.MarkerImage(
//   arriveSrc,
//   arriveSize,
//   arriveOption
// );

// var arriveDragSrc =
//     'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_drag.png', // 도착 마커의 드래그 이미지 주소입니다
//   arriveDragSize = new kakao.maps.Size(50, 64), // 도착 마커의 드래그 이미지 크기입니다
//   arriveDragOption = {
//     offset: new kakao.maps.Point(15, 54), // 도착 마커의 드래그 이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
//   };

// // 도착 마커의 드래그 이미지를 생성합니다
// var arriveDragImage = new kakao.maps.MarkerImage(
//   arriveDragSrc,
//   arriveDragSize,
//   arriveDragOption
// );

// // 도착 마커가 표시될 위치입니다
// var arrivePosition = new kakao.maps.LatLng(33.450701, 126.572667);

// // 도착 마커를 생성합니다
// var arriveMarker = new kakao.maps.Marker({
//   map: map, // 도착 마커가 지도 위에 표시되도록 설정합니다
//   position: arrivePosition,
//   draggable: true, // 도착 마커가 드래그 가능하도록 설정합니다
//   image: arriveImage, // 도착 마커이미지를 설정합니다
// });

// // 도착 마커에 dragstart 이벤트를 등록합니다
// kakao.maps.event.addListener(arriveMarker, 'dragstart', function () {
//   // 도착 마커의 드래그가 시작될 때 마커 이미지를 변경합니다
//   arriveMarker.setImage(arriveDragImage);
// });

// // 도착 마커에 dragend 이벤트를 등록합니다
// kakao.maps.event.addListener(arriveMarker, 'dragend', function () {
//   // 도착 마커의 드래그가 종료될 때 마커 이미지를 원래 이미지로 변경합니다
//   arriveMarker.setImage(arriveImage);
// });

// 1. 지도 중심 이동하기
window.addEventListener('DOMContentLoaded', () => {
  const { kakao } = window;

  const mapContainer = document.getElementById('map'); // 지도를 표시한 곳
  const mapOptions = {
    // 지도의 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };

  const kakaoMap = new kakao.maps.Map(mapContainer, mapOptions);
});
// 2. 버튼을 누르면 지도의 중심이 이동
const state = {
  center: { lat: 33.452613, lng: 126.570888 },
};

function initMap() {
  const mapContainer = document.getElementById('map');
  const mapOptions = {
    center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
    level: 3,
  };

  const kakaoMap = new kakao.maps.Map(mapContainer, mapOptions);

  const moveButton = document.querySelector('.walkstart');
  moveButton.addEventListener('click', () => {
    state.center = { lat: 33.45058, lng: 126.574942 };
    const newCenter = new kakao.maps.LatLng(state.center.lat, state.center.lng);
    kakaoMap.setCenter(newCenter);
  });
}

window.addEventListener('DOMContentLoaded', initMap);

// 3. 부드럽게 지도 이동하기
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

function setCenter() {
  // 이동할 위도 경도 위치를 생성합니다
  var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);

  // 지도 중심을 이동 시킵니다
  map.setCenter(moveLatLon);
}

function panTo() {
  // 이동할 위도 경도 위치를 생성합니다
  var moveLatLon = new kakao.maps.LatLng(33.45058, 126.574942);

  // 지도 중심을 부드럽게 이동시킵니다
  // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
  map.panTo(moveLatLon);
}

// 4. 지도 위에 마커 표시하기
// let은 재선언 불가
map = null;
let pointObj = {
  startPoint: { marker: null, lat: null, lng: null },
  endPoint: { marker: null, lat: null, lng: null },
};

function initMap() {
  const mapContainer = document.getElementById('map');
  const mapOptions = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };

  map = new kakao.maps.Map(mapContainer, mapOptions);

  // 현재 좌표
  document.getElementById('startButton').addEventListener('click', () => {
    setPoint({ lat: 33.452613, lng: 126.570888 }, 'startPoint');
  });
  // 목적지 좌표
  document.getElementById('endButton').addEventListener('click', () => {
    setPoint({ lat: 33.45058, lng: 126.574942 }, 'endPoint');
  });
}

function setCenter({ lat, lng }) {
  const moveLatLon = new kakao.maps.LatLng(lat, lng);
  map.panTo(moveLatLon);
}

function setPoint({ lat, lng }, pointType) {
  setCenter({ lat, lng });

  if (pointObj[pointType].marker !== null) {
    pointObj[pointType].marker.setMap(null);
  }

  const marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(lat, lng),
  });
  marker.setMap(map);

  pointObj[pointType] = { marker, lat, lng };
}

document.addEventListener('DOMContentLoaded', initMap);

// 5. 경로 표시하기
pointObj = {
  startPoint: { lat: 33.452613, lng: 126.570888 },
  endPoint: { lat: 33.45058, lng: 126.574942 },
};

async function getCarDirection() {
  // !!!!!!!!!!!!!여기 api키 바꾸기
  const REST_API_KEY = 'aa';
  const url =
    'curl -v -X GET "https://apis-navi.kakaomobility.com/v1/directions?origin=127.11015314141542,37.39472714688412&destination=127.10824367964793,37.401937080111644&waypoints=&priority=RECOMMEND&car_fuel=GASOLINE&car_hipass=false&alternatives=false&road_details=false" \
  -H "Authorization: KakaoAK ${REST_API_KEY}"';

  const origin = `${pointObj.startPoint.lng},${pointObj.startPoint.lat}`;
  const destination = `${pointObj.endPoint.lng},${pointObj.endPoint.lat}`;

  const headers = {
    Authorization: `KakaoAK ${REST_API_KEY}`,
    'Content-Type': 'application/json',
  };

  const queryParams = new URLSearchParams({
    origin: origin,
    destination: destination,
  });

  const requestUrl = `${url}?${queryParams}`;

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

document
  .getElementById('getDirectionButton')
  .addEventListener('click', getCarDirection);

//
// let map = null;

function initMap() {
  //   const mapContainer = document.getElementById('map');
  //   const mapOptions = {
  //     center: new kakao.maps.LatLng(33.450701, 126.570667),
  //     level: 3,
  //   };

  //   map = new kakao.maps.Map(mapContainer, mapOptions);

  // 여기에 데이터를 가져와서 polyline을 표시하는 코드를 추가합니다.
  // 예시 데이터를 사용하거나 실제 데이터를 가져와서 사용할 수 있습니다.
  // 아래에 있는 코드는 예시 데이터를 기반으로 작성되었습니다.

  const linePath = [
    new kakao.maps.LatLng(33.452344169439975, 126.56878163224233),
    new kakao.maps.LatLng(33.452739313807456, 126.5709308145358),
    new kakao.maps.LatLng(33.45178067090639, 126.5726886938753),
  ];

  const polyline = new kakao.maps.Polyline({
    path: linePath,
    strokeWeight: 5,
    strokeColor: '#000000',
    strokeOpacity: 0.7,
    strokeStyle: 'solid',
  });

  polyline.setMap(map);
}

document.addEventListener('DOMContentLoaded', initMap);
