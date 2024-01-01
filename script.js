function getWeather() {
    const apiKey = '97057f242601ae9224efb67a073729e4'; 
    const city = document.getElementById('cityInput').value;
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('There was a problem fetching the weather data:', error);
        document.getElementById('weatherData').innerText = 'Failed to fetch weather data. Please try again.';
      });
  }
  
  function displayWeather(data) {
    const cityTemp = document.getElementById('cityTemp');
    cityTemp.innerHTML = `
        <h2 id="city">${data.name}, ${data.sys.country}</h2>
        <p id="temperature">${data.main.temp}°C</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="" />
    `;

    const weatherData = document.getElementById('weatherData');
    weatherData.innerHTML = `
        <p>Feels Like: ${data.main.feels_like}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Minimum Temperature: ${data.main.temp_min}°C</p>
        <p>Maximum Temperature: ${data.main.temp_max}°C</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}


  