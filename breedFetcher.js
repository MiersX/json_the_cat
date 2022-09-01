const request = require('request');
const args = process.argv.slice(2);



request.get(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  //console.log('body:', body);
  //console.log(typeof body);
  const data = JSON.parse(body);
  //console.log(typeof data);
  if (data.length === 0) {
    console.log(`Breed "${args[0]}" not found, ensure correct spelling of breed name!`);
  } else {
    console.log(data[0].description);
  }

});
