const request = require('request');
const yargs = require('yargs');

const argv = yargs
.options({
    a:{
      demand: true,
      alias: 'Address',
      describe: 'An Address is required !',
      string: true
    }
})
.help()
.argv;

var geoPromise = (address)=>{
  return new Promise((resolve, reject)=>{
    var userAddress = encodeURIComponent(address);

  request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${userAddress}`,
      json : true
    }, (error, response, body)=>{
        if(error){
          reject('Could not connect to the server');
        }
        else if (body.status === 'ZERO_RESULTS' ) {
          reject('Address could not be found !');
        }
        else if (body.status === 'OK') {
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        }
    });
  });
};

geoPromise(argv.a).then((message)=>{
  console.log(message);
}, (someErrorMessage)=>{
  console.log(someErrorMessage);
});
