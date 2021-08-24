//init localStorage

const storage = new Storage();

//Get Location data
const weatherLocation = storage.getLocationData();


//initialize weather Object

const weather = new Weather(weatherLocation.city);



//init UI
const ui = new UI();


//Change Location event

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;



  //Change Location
  weather.changeLocation(city);

  //Set location in LS 
  storage.setLocationData(city);

  //Get and Display Weather
  getWeather();

  //Close modal
  $('#locModal').modal('hide');

});


//GEt weather on dom load
document.addEventListener('DOMContentLoaded', getWeather)

//weather.changeLocation('Abuja');

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err))
}