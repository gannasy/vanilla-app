let api = "ef83a86d6c6e19e2b4352f1ab9249fd9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${api}&units=metric`;
let temperature = document.querySelector("#temperature");
let city = document.querySelector("#city");
let desc = document.querySelector("#desc");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let date = document.querySelector("#date");
let days = ["Sunday", "Monday", "Tuethday", "Wensday", "Thurthday", "Friday", "Saturday"];
let icon = document.querySelector("#icon");
let form = document.querySelector("#search-form");
let feringeit = document.querySelector("#feringeit");
let celcius = document.querySelector("#celcius");
let celciusTemp = null;


function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let day = days[date.getDay()];

    return `${day} ${hours}:${minutes}`;


}

function displayTemp(response) {
    console.log(response);
    temperature.innerHTML = Math.round(response.data.main.temp);
    city.innerHTML = response.data.name;
    desc.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = response.data.main.humidity;
    wind.innerHTML = response.data.wind.speed;
    date.innerHTML = formatDate(response.data.dt * 1000);
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
    icon.setAttribute("alt", response.data.weather[0].description);

    celciusTemp = response.data.main.temp;
}


function handleSubmit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input").value;
    search(cityInput);

}

function search(city) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`).then(displayTemp);
}

form.addEventListener("submit", handleSubmit);


function convertFeringeit(event) {
    event.preventDefault();
    let farengeitTemp = (celciusTemp * 9) / 5 + 32;
    temperature.innerHTML = Math.round(farengeitTemp);
    celcius.classList.remove("active");
    feringeit.classList.add("active");

}

function convertCelcius(event) {
    event.preventDefault();
    temperature.innerHTML = Math.round(celciusTemp);
    celcius.classList.add("active");
    feringeit.classList.remove("active");

}
feringeit.addEventListener("click", convertFeringeit);
celcius.addEventListener("click", convertCelcius);