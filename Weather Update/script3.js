const Jilo = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a8be01c37msh71f0477912c301ep1afe5fjsn4a9a7e2d4a58',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=patna', Jilo)

	.then(response => response.json())
	.then(response => {console.log(response)

        cloud_pct4.innerHTML = response.cloud_pct
        temp4.innerHTML = response.temp
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        min_temp4.innerHTML = response.min_temp
        max_temp4.innerHTML = response.max_temp
        wind_speed4.innerHTML = response.wind_speed
        wind_degrees4.innerHTML = response.wind_degrees
        sunrise4.innerHTML = response.sunrise
        sunset4.innerHTML = response.sunset
    
    
    })
	.catch(err => console.error(err));