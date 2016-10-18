var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=eea72e4658e555869cbe1c89a35e8888&units=metric';
//weather?&appid=eea72e4658e555869cbe1c89a35e8888&units=metric
// eea72e4658e555869cbe1c89a35e8888
module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);

    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res)
  {
    if (res.data.cod && res.data.message){
      throw new Error(res.data.message);
    }
    else {
      return res.data.main.temp;
    }
  }, function(res){
    throw new Erorr(res.data.message);
  });
  }
}
