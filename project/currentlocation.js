const API_KEY = 'f63752187839787153e6df04805b5f9b';

function getAddr(lat, lng) {
  let geocoder = new kakao.maps.services.Geocoder();
  let coord = new kakao.maps.LatLng(lat, lng);
  let callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      console.log(result);
    }
  };
  geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        //getAddr(위도, 경도);
        getAddr(position.coords.latitude, position.coords.longitude);
      },
      function (error) {
        console.error(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
  } else {
    alert('현재 브라우저에서는 geolocation를 지원하지 않습니다');
  }
  return;
}

getLocation();
