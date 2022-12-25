const hello = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a8be01c37msh71f0477912c301ep1afe5fjsn4a9a7e2d4a58',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Rampur', hello)

	.then(response => response.json())
	.then(response => {console.log(response)

        cloud_pct3.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        min_temp3.innerHTML = response.min_temp
        max_temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
        wind_degrees3.innerHTML = response.wind_degrees
        sunrise3.innerHTML = response.sunrise
        sunset3.innerHTML = response.sunset
    
    
    })
	.catch(err => console.error(err));