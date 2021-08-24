class Weather {
  constructor(city) {
    this.apiKey = "6c604aa0185fdd8f08f6e92346e17554";
    this.city = city;

  }

  async getWeather() {
    const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);


    const responseData = await response1.json();


    // responseData.forEach(function(array) {
    //   console.log(array)
    // });

    return responseData;






  }

  //   async getMain() {
  //     const response = await fetch(`http://https://api.openweathermap.org/data/2.5/weater?q=${this.state}&appid=${this.apiKey}.json`);

  //     const responseData = await response.json();

  //     return responseData.main;
  //   }


  //Change weather Location

  changeLocation(city) {
    this.city = city;
  }
}