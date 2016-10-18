var React = require('react');



var WeatherMessage =  ({location,temp}) => {
    return(
      <div>
        <p>location: {location} </p>
        <p>temp: {temp}</p>
    </div>)
}
module.exports = WeatherMessage;
