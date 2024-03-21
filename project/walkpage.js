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
