let weather = {
  "apiKey": "7763264924b0389bbf0c52628ceaef3a",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + this.apikey)
    .then((response) => response.json())
    .then((data) => console.log(data));
  },
  displayWeather: function(data) {

  }
}
