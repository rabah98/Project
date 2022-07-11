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
      .then( days => days.forEach(element => {
         renderDayCard(element)
         
      }))
      
   

   }
   initialFetch()
//render functions

// renderDayCard function
function renderDayCard(element) {
   return element
}