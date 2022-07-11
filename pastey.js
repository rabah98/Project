if (dayWeather = 'clear') {
    weatherIcon.src = `.assets/weathericons/clear.png` ;
  } else if (dayWeather = 'pcloudy') {
    weatherIcon.src = `.assets/weathericons/pcloudy.png` ;
  } else if (dayWeather = 'cloudy') {
    weatherIcon.src = `.assets/weathericons/cloudy.png` ;
  } else if (dayWeather = 'rain' || 'lightrain') {
    weatherIcon.src = `.assets/weathericons/rain.png` ;   
  } else if (dayWeather = 'snow' || 'lightsnow') {
    weatherIcon.src = `.assets/weathericons/snow.png` ;
  } else if (dayWeather = 'ts') {
    weatherIcon.src = `.assets/weathericons/ts.png` ; 
  } else if (dayWeather = 'tsrain') {
    weatherIcon.src = `.assets/weathericons/tsrain.png` ;
  } else {
    weatherIcon.src = `.assets/weathericons/oops.png`
  } 