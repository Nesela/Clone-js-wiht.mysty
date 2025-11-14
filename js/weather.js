const API_KEY = "408070f629528295e33d431e9838f366";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
           const weather = document.querySelector("#weather span:first-child");
           const city = document.querySelector("#weather span:last-child");
           city.innerText = data.name;
           weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("위치를 찾을수 없어 날씨정보 제공이 불가능합니다");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //사용자 위치 정보확인
