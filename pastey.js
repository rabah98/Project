if (dayWeather === 'clear') {
    writeWeather.textContent = 'Clear';
    weatherIcon.src = `assets/weathericons/clear.png` ;
  } else if (dayWeather === 'pcloudy') {
    writeWeather.textContent = 'Partly Cloudy';
    weatherIcon.src = `assets/weathericons/pcloudy.png` ;
  } else if (dayWeather === 'cloudy') {
    writeWeather.textContent = 'Cloudy';
    weatherIcon.src = `assets/weathericons/cloudy.png` ;
  } else if (dayWeather === 'rain' || 'lightrain') {
    writeWeather.textContent = 'Rain';
    weatherIcon.src = `assets/weathericons/rain.png` ;   
  } else if (dayWeather === 'snow' || 'lightsnow') {
    writeWeather.textContent = 'Snow';
    weatherIcon.src = `assets/weathericons/snow.png` ;
  } else if (dayWeather === 'ts') {
    writeWeather.textContent = 'Thunder Storm';
    weatherIcon.src = `assets/weathericons/ts.png` ; 
  } else if (dayWeather === 'tsrain') {
    writeWeather.textContent = 'Thunder and Rain';
    weatherIcon.src = `assets/weathericons/tsrain.png` ;
  } else {
    writeWeather.textContent = "there was error:("
    weatherIcon.src = `assets/weathericons/oops.png`
  }