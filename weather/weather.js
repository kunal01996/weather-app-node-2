const request = require('request');

var getWeather = (latitude, longitude, callback)=>{
  request({
    url: `https://api.darksky.net/forecast/6a0ead4bce35c8f7842d5eb3d22af956/${latitude},${longitude}`,
    json: true
  }, (error, response, body)=>{
    if(error){
      callback("Could not connect to the servers !");
    }
    else if(response.statusCode !== 200){
      callback('Could not get Weather');
    }
    else{
      callback(undefined, {
        temperature: body.currently.temperature,
        feelsLike: body.currently.apparentTemperature
      });
    }
  });
};

module.exports = {
  getWeather
};
