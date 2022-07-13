//global variables
const userLon = document.getElementById('LON')
const userLat = document.getElementById('LAT')
const locationUrl = `http://www.7timer.info/bin/api.pl?lon=${userLon}&lat=${userLat}&product=civillight&output=json`
const daySelectionBar = document.getElementById('day-selection-bar')
const focusDay = document.getElementById('day-focus-container')
const focusDayCardInbox = document.querySelectorAll(':scope > div')
// Event lisntener for user inputs
document.querySelector('form').addEventListener('submit', (e) => {
  if (userLat.value && userLon.value) {
    e.preventDefault()
    daySelectionBar.innerHTML = ""
    initialFetch()
  }
})
//fetch function
function initialFetch () {
  fetch(locationUrl)
  .then( res => res.json())
  .then( days => {
    console.log(days)
    funcToRenderDayCards(days.dataseries) 
  })
}
//render functions
function funcToRenderDayCards(daysObject) {
  daysObject.forEach(day => {
    const dayCard = document.createElement('div')
    const liDate = document.createElement('li')
    const liWeather = document.createElement('li')
    const weatherIcon = document.createElement( 'img' )
    const writeWeather = document.createElement('p')
    const dayDateToString = day.date.toString()
    const dayDate = `${dayDateToString.substring(4,6)} - ${dayDateToString.substring(6,8)} - ${dayDateToString.substring(0,4)}`
    // const writeDate = toSplitandReadDateForWriter(dayDate); this won't work until we debug this function
    let dayWeather = day.weather
    weatherAssigner(dayWeather, writeWeather, weatherIcon)
    liWeather.append(writeWeather) 
    liWeather.append(weatherIcon)     
    liDate.append(dayDate) //We should cut this for 'writeDate'
    const likeButton = document.createElement('button')
    const likeCounterSpan = document.createElement('span')
    likeCounterSpan.textContent = 0
    likeButton.textContent = `❤️ ${likeCounterSpan.textContent} likes`
      // Event listener for likeButton
    likeButton.addEventListener('click', (e) => {
      e.stopPropagation()
      likeCounterSpan.textContent = parseInt(likeCounterSpan.textContent) + 1
      likeButton.textContent = `❤️ ${likeCounterSpan.textContent} likes`
    })
    dayCard.append(liDate, liWeather, likeButton) 
    //add event listener to the dayCard here
    dayCard.addEventListener('click', () => {
      const focusDayWeatherIcon = document.createElement( 'img' )
      const focusDayCard = document.createElement('div')
      const dayTempHigh = day.temp2m.max
      const dayTempLow =  day.temp2m.min
      const dayWind = day.wind10m_max
      const focusDayWind = ('10m Wind Speed rating:' + dayWind)
      const focusDayTemps = ('High of '+ dayTempHigh +'; Low of ' + dayTempLow )
      const focusDayDateToString = day.date.toString()
      const focusDayDate = `${focusDayDateToString.substring(4,6)} - ${focusDayDateToString.substring(6,8)} - ${focusDayDateToString.substring(0,4)}`
      const focusDayWeather = day.weather
      const focusDayWeatherWriter = document.createElement( 'p' )
      const liFocusDate = document.createElement('li')
      const liFocusWeather = document.createElement('li')
      const focusDayCardLineOne = document.createElement( 'p' )
      const focusDayCardLineTwo = document.createElement( 'p' )
      weatherAssigner(focusDayWeather,focusDayWeatherWriter, focusDayWeatherIcon)
      focusDayCardLineOne.textContent = focusDayTemps
      focusDayCardLineTwo.textContent = focusDayWind
      liFocusDate.append(focusDayDate)
      liFocusWeather.append(focusDayWeatherWriter)
      focusDayCard.setAttribute('id','div-that-card-replaces') 
      focusDay.innerHTML = ""
      focusDay.append(focusDayCard)
      focusDayCard.append(focusDayCardLineOne, focusDayWeatherIcon, liFocusWeather, liFocusDate, focusDayCardLineTwo)
    })
    daySelectionBar.append(dayCard)    
  })
}

function weatherAssigner(dayWeather, writeWeather, weatherIcon) {
  if (dayWeather === 'clear') {
    writeWeather.textContent = 'Clear'
    weatherIcon.src = `assets/weathericons/clear.png`
  } else if (dayWeather === 'pcloudy') {
    writeWeather.textContent = 'Partly Cloudy'
    weatherIcon.src = `assets/weathericons/pcloudy.png`
  } else if (dayWeather === 'cloudy') {
    writeWeather.textContent = 'Cloudy'
    weatherIcon.src = `assets/weathericons/cloudy.png`
  } else if (dayWeather === 'rain' || 'lightrain') {
    writeWeather.textContent = 'Rain'
    weatherIcon.src = `assets/weathericons/rain.png`
  } else if (dayWeather === 'snow' || 'lightsnow') {
    writeWeather.textContent = 'Snow'
    weatherIcon.src = `assets/weathericons/snow.png`
  } else if (dayWeather === 'ts') {
    writeWeather.textContent = 'Thunder Storm'
    weatherIcon.src = `assets/weathericons/ts.png`
  } else if (dayWeather === 'tsrain') {
    writeWeather.textContent = 'Thunder and Rain'
    weatherIcon.src = `assets/weathericons/tsrain.png`
  } else {
    writeWeather.textContent = "there was error:("
    weatherIcon.src = `assets/weathericons/oops.png`
  }
}
function renderFocusDay() {}   