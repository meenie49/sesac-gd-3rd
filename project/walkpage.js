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
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3, // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var startSrc =
    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_b.png', // 출발 마커이미지의 주소입니다
  startSize = new kakao.maps.Size(50, 45), // 출발 마커이미지의 크기입니다
  startOption = {
    offset: new kakao.maps.Point(15, 43), // 출발 마커이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
  };

// 출발 마커 이미지를 생성합니다
var startImage = new kakao.maps.MarkerImage(startSrc, startSize, startOption);

var startDragSrc =
    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/red_drag.png', // 출발 마커의 드래그 이미지 주소입니다
  startDragSize = new kakao.maps.Size(50, 64), // 출발 마커의 드래그 이미지 크기입니다
  startDragOption = {
    offset: new kakao.maps.Point(15, 54), // 출발 마커의 드래그 이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
  };

// 출발 마커의 드래그 이미지를 생성합니다
var startDragImage = new kakao.maps.MarkerImage(
  startDragSrc,
  startDragSize,
  startDragOption
);

// 출발 마커가 표시될 위치입니다
var startPosition = new kakao.maps.LatLng(33.450701, 126.570667);

// 출발 마커를 생성합니다
var startMarker = new kakao.maps.Marker({
  map: map, // 출발 마커가 지도 위에 표시되도록 설정합니다
  position: startPosition,
  draggable: true, // 출발 마커가 드래그 가능하도록 설정합니다
  image: startImage, // 출발 마커이미지를 설정합니다
});

// 출발 마커에 dragstart 이벤트를 등록합니다
kakao.maps.event.addListener(startMarker, 'dragstart', function () {
  // 출발 마커의 드래그가 시작될 때 마커 이미지를 변경합니다
  startMarker.setImage(startDragImage);
});

// 출발 마커에 dragend 이벤트를 등록합니다
kakao.maps.event.addListener(startMarker, 'dragend', function () {
  // 출발 마커의 드래그가 종료될 때 마커 이미지를 원래 이미지로 변경합니다
  startMarker.setImage(startImage);
});

var arriveSrc =
    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_b.png', // 도착 마커이미지 주소입니다
  arriveSize = new kakao.maps.Size(50, 45), // 도착 마커이미지의 크기입니다
  arriveOption = {
    offset: new kakao.maps.Point(15, 43), // 도착 마커이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
  };

// 도착 마커 이미지를 생성합니다
var arriveImage = new kakao.maps.MarkerImage(
  arriveSrc,
  arriveSize,
  arriveOption
);

var arriveDragSrc =
    'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_drag.png', // 도착 마커의 드래그 이미지 주소입니다
  arriveDragSize = new kakao.maps.Size(50, 64), // 도착 마커의 드래그 이미지 크기입니다
  arriveDragOption = {
    offset: new kakao.maps.Point(15, 54), // 도착 마커의 드래그 이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
  };

// 도착 마커의 드래그 이미지를 생성합니다
var arriveDragImage = new kakao.maps.MarkerImage(
  arriveDragSrc,
  arriveDragSize,
  arriveDragOption
);

// 도착 마커가 표시될 위치입니다
var arrivePosition = new kakao.maps.LatLng(33.450701, 126.572667);

// 도착 마커를 생성합니다
var arriveMarker = new kakao.maps.Marker({
  map: map, // 도착 마커가 지도 위에 표시되도록 설정합니다
  position: arrivePosition,
  draggable: true, // 도착 마커가 드래그 가능하도록 설정합니다
  image: arriveImage, // 도착 마커이미지를 설정합니다
});

// 도착 마커에 dragstart 이벤트를 등록합니다
kakao.maps.event.addListener(arriveMarker, 'dragstart', function () {
  // 도착 마커의 드래그가 시작될 때 마커 이미지를 변경합니다
  arriveMarker.setImage(arriveDragImage);
});

// 도착 마커에 dragend 이벤트를 등록합니다
kakao.maps.event.addListener(arriveMarker, 'dragend', function () {
  // 도착 마커의 드래그가 종료될 때 마커 이미지를 원래 이미지로 변경합니다
  arriveMarker.setImage(arriveImage);
});
