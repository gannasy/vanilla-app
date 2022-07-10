let api = "ef83a86d6c6e19e2b4352f1ab9249fd9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${api}&units=metric`;
let temperature = document.querySelector("#temperature");
let city = document.querySelector("#city");
let desc = document.querySelector("#desc");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");

function displayTemp(response) {
    temperature.innerHTML = Math.round(response.data.main.temp);
    city.innerHTML = response.data.name;
    desc.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = response.data.main.humidity;
    wind.innerHTML = response.data.wind.speed;
}
axios.get(apiUrl).then(displayTemp);