function fetchfunction() {
   fetch('http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0')
   .then(res => res.json())
   .then(console.log)
}