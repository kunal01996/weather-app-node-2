const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
.options({
a:{
  demand: true,
  alias: 'address',
  describe: 'Address of fetch weather for',
  string: true
}
})
.help()
.alias('help', 'h')
.argv;

//console.log(argv);

geocode.getGeocode(argv.a, (errorMessage, results)=>{
  if(errorMessage){
    console.log(errorMessage);
  }
  else{
    console.log(`${results.address}`);
    weather.getWeather(latitude = results.latitude, longitude = results.longitude, (errorMessage, weatherResults)=>{
      if(errorMessage){
          console.log(errorMessage);
        }
        else{
          console.log(`It is ${weatherResults.temperature}, but it feels like ${weatherResults.feelsLike}`);
        }
    })
  }
});
