document.getElementById('getWeatherBtn').addEventListener('click', async () => {
    const cityName = document.getElementById('cityName').value;
    const apiKey = 'MY_API_KEY'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    if (!cityName) {
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            
            document.getElementById('weatherResult').style.display = 'block';
            document.getElementById('city').innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('errorMessage').innerText = ''; 
        } else {
           
            document.getElementById('weatherResult').style.display = 'none';
            document.getElementById('errorMessage').innerText = 'City not found or invalid API key';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('errorMessage').innerText = 'An error occurred. Please try again later.';
    }
});
