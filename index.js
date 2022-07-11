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
      const dayDate = day.date 
      const dayWeather = day.weather
      liDate.append(dayDate)
      liWeather.append(dayWeather)
      // dayCard.append(liDate, liWeather)
      daySelectionBar.append(liDate, liWeather)
      
   });
   }
