import { config } from './config.js';
document.getElementById('fetchWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    const apiKey = config.apiKey;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.location) {
                document.getElementById('weatherData').innerHTML = `
                    <h2>${data.location.name}</h2>
                    <p>Temperature: ${data.current.temp_c}°C</p>
                    <p>Weather: ${data.current.condition.text}</p>
                `;
            } else {
                document.getElementById('weatherData').innerHTML = `<p>City not found. Please try again.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
