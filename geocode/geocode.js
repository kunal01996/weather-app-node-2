const request = require('request');

var getGeocode = (address, callback) => {
  var userAddress = encodeURIComponent(address);

request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${userAddress}`,
    json : true
  }, (error, response, body)=>{
      if(error){
        callback('Could not connect to the server');
      }
      else if (body.status === 'ZERO_RESULTS' ) {
        callback('Address could not be found !');
      }
      else if (body.status === 'OK') {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
  });
}

module.exports = {
  getGeocode,
}
