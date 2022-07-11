//global variables



//fetch function
function fetchfunction() {
   fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json')
   .then(res => res.json())
   .catch(errorCatch => {
      console.log(errorCatch);
   })
}

//render functions
