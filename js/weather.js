function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((reponse) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather:first-chlid");
      const city = document.querySelector("#weather:last-chlid");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

const API_KEY = "dbcf3835a5244a4ebb87a5c9fceed833";

// function onGeoError() {
//   alert("Can't find you. No weather for you.");
// }

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
