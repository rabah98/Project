//global variables

const userInputs = document.querySelector('form')
const userLon = document.getElementById('LON')
const userLat = document.getElementById('LAT')
const locationUrl = `http://www.7timer.info/bin/api.pl?lon=${userLon}&lat=${userLat}&product=civillight&output=json`

const daySelectionBar = document.getElementById('day-selection-bar')
const focusDay = document.getElementById('day-focus-container')

document.getElementById().addEventListener("submit", (e) => {
   const text= e.target.comment.value
    const li=document.createElement("li")
    li.textContent=text
    commentlist.append(li))
}

// Event lisntener for user inputs
userInputs.addEventListener('submit', (e) => {
  e.preventDefault()
  initialFetch()

})

//fetch function
   function initialFetch () {
      // fetch(locationUrl)
      // placeholder fetch for testing
      fetch(locationUrl)
      .then( res => res.json())
      .then( days => funcToRenderDayCards(days.dataseries))
         
      }
      
   

   
 
//render functions
function funcToRenderDayCards(daysObject) {
   daysObject.forEach(day => {
      const dayCard = document.createElement('div')
      const liDate = document.createElement('li')
      const liWeather = document.createElement('li')
      const weatherIcon = document.createElement( 'img' )
      const writeWeather = document.createElement('p')
      const dayDate = day.date
      // const writeDate = toSplitandReadDateForWriter(dayDate); this won't work until we debug this function
      let dayWeather = day.weather
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
      liWeather.append(writeWeather) 
      liWeather.append(weatherIcon)     
      liDate.append(dayDate) //We should cut this for 'writeDate'
      dayCard.appendChild(liDate)
      dayCard.appendChild(liWeather)
      //add event listener to the dayCard here
      dayCard.addEventListener('click', () => {
        const focusDayDate = day.date
        const focusDayWeather = day.weather
        const liFocusDate = document.createElement('li')
        const liFocusWeather = document.createElement('li')
        liFocusDate.append(focusDayDate)
        liFocusWeather.append(focusDayWeather)
        focusDay.append(liFocusDate, liFocusWeather)


      })
      daySelectionBar.append(dayCard) 
   });
   }

function renderFocusDay() {

}   

// function toSplitandReadDateForWriter(dayDate) {
//    //this function needs to accept an input from dayDate and return the date as it will be displayed by the writer...
      //this version does not work because dayDate.slice "isn't a function", so similar problem as earlier, its an array
//    const isoYear = dayDate.slice(0,3)
//    const isoMonth = dayDate.slice(4,5)
//    const isoDay = dayDate.slice(6,7)
//    return ( `${isoMonth}`+' '+`${isoDay}`+ ', '+`${isoYear}` )
//}