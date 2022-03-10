let weather = {
  "apiKey": "7763264924b0389bbf0c52628ceaef3a",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=" + this.apiKey)
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, feels_like, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temperature").innerText = temp + "°C";
    document.querySelector(".feel").innerText = "Feels like: " + feels_like + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
    // L'api ne permet que de chercher par l'id et non par keywords. A voir autre solution
    //document.body.style.backgroundImage = "url('https://picsum.photos/1600/900?" + name + "')";
  },
  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value)
  }
};

document.querySelector(".search button").addEventListener("click", function() {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function() {
  if (event.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Denver");
