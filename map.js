// // 지도 좌표 이동
// function setCenter() {            
//     // 이동할 위도 경도 위치를 생성합니다 
//     var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
    
//     // 지도 중심을 이동 시킵니다
//     map.setCenter(moveLatLon);
// }
// //  panTo 함수를 index.html 에 연동되게끔 만들어야함
// //  index.html 에서는 <script src="map.js"></script> 를 추가해야함

// function panTo() {
//     // 이동할 위도 경도 위치를 생성합니다 
//     var moveLatLon = new kakao.maps.LatLng(33.450580, 126.574942);
    
//     // 지도 중심을 부드럽게 이동시킵니다
//     // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
//     map.panTo(moveLatLon);            
// } 

// // 이미지 마커
// var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
//     imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
//     imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
// // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
// var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
//     markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//     position: markerPosition, 
//     image: markerImage // 마커이미지 설정 
// });

// // 마커가 지도 위에 표시되도록 설정합니다
// // marker.setMap(map);  
