//global variables

// const userInput = document.getElementById('user-loc')
const userLon = -79.87
const userLat = 40.42
const locationUrl = `http://www.7timer.info/bin/api.pl?lon=${userLon}&lat=${userLat}&product=civillight&output=json`

const daySelectionBar = document.getElementById('day-selection-bar')

 


//fetch function
   function initialFetch () {
      // fetch(locationUrl)
      // placeholder fetch for testing
      fetch('http://www.7timer.info/bin/api.pl?lon=-79.87&lat=40.42&product=civillight&output=json')
      .then( res => res.json())
      .then( days => funcToRenderDayCards(days.dataseries))
         
      }
      
   

   
   initialFetch()
//render functions
function funcToRenderDayCards(daysObject) {
   daysObject.forEach(day => {
      console.log(day)
      const liDate = document.createElement('li')
      const liWeather = document.createElement('li')
      const weatherIcon = document.createElement( 'img' )
      const dayDate = day.date 
      let dayWeather = day.weather
      if (dayWeather === 'clear') {
         weatherIcon.src = `assets/weathericons/clear.png` ;
       } else if (dayWeather === 'pcloudy') {
         weatherIcon.src = `assets/weathericons/pcloudy.png` ;
       } else if (dayWeather === 'cloudy') {
         weatherIcon.src = `assets/weathericons/cloudy.png` ;
       } else if (dayWeather === 'rain' || 'lightrain') {
         weatherIcon.src = `assets/weathericons/rain.png` ;   
       } else if (dayWeather === 'snow' || 'lightsnow') {
         weatherIcon.src = `assets/weathericons/snow.png` ;
       } else if (dayWeather === 'ts') {
         weatherIcon.src = `assets/weathericons/ts.png` ; 
       } else if (dayWeather === 'tsrain') {
         weatherIcon.src = `assets/weathericons/tsrain.png` ;
       } else {
         weatherIcon.src = `assets/weathericons/oops.png`
       }
      liWeather.append(weatherIcon)     
      liDate.append(dayDate)
      liWeather.append(dayWeather)
      // dayCard.append(liDate, liWeather)
      daySelectionBar.append(liDate, liWeather)
      
   });
   }
