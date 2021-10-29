const API_KEY = "3f2fa9528367888e6b63bce49587ecd5";

const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");

onGeoSucess = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        city.innerText = `This City is ${data.name}`;
        weather.innerText = `Today is ${data.weather[0].main}`;
    }));
    console.log(`my location is ${lat}, ${lon}`);
};

onGeoError = () => {
    alert("on Geo Error");
};

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);