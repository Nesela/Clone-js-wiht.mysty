function onGeoOk(position){
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
    console.log("넌 여기 살고 있어",lat, lng);
}
function onGeoError(){
    alert("위치를 찾을수 없어 날씨정보 제공이 불가능합니다");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //사용자 위치 정보확인
