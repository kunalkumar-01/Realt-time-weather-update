const Khalo = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a8be01c37msh71f0477912c301ep1afe5fjsn4a9a7e2d4a58',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhopal', Khalo)

	.then(response => response.json())
	.then(response => {console.log(response)

        cloud_pct5.innerHTML = response.cloud_pct
        temp5.innerHTML = response.temp
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        min_temp5.innerHTML = response.min_temp
        max_temp5.innerHTML = response.max_temp
        wind_speed5.innerHTML = response.wind_speed
        wind_degrees5.innerHTML = response.wind_degrees
        sunrise5.innerHTML = response.sunrise
        sunset5.innerHTML = response.sunset
    
    
    })
	.catch(err => console.error(err));