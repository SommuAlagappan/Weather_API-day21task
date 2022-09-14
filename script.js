  async function weatherData() {
 
  var cityName = document.getElementById("cityName").value
  console.log(cityName)

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=64e1a54af35fc47bdafa5f1d6619ae1d`)
  const data = await res.json()
  console.log(data)

  var weatherContainer = document.getElementById("weatherContainer")
  weatherContainer.innerHTML = `<img src="https://play-lh.googleusercontent.com/pCQw51XRP4UPr-FCYDjvNnEpFa0HDGJjjLDldN3rmw4KkwhqPu0PZXE8EopmAxzH9mQ" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Weather in ${cityName}</h5>
    <p class="card-text">Minimum temperature: ${data.main.temp_min} 
     Maximum Temperature: ${data.main.temp_max} </p>
    <p class="card-text">Windspeed: ${data.wind.speed}</p>
    <p class="card-text">Humidity: ${data.main.humidity}</p>
    <p class="card-text">Weather id: ${data.weather[0].id}</p>
    <a href="#" class="btn btn-primary">Click for more</a>
  </div>`
}

//Assigning submit button with addeventlistener and a callback function(weatherData)
var submitButton = document.getElementById("submitButton")
submitButton.addEventListener('click', weatherData)
