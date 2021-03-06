var React = require('react');

var WeatherForm = React.createClass({
  onFormSumbit: function(e)
    {
      e.preventDefault();

      var location = this.refs.location.value;
      if (location.length > 0)
      {
        this.refs.location.value = "";
        this.props.onSearch(location);
      }
    },
  render: function(){
    return(
      <form onSubmit={this.onFormSumbit}>
        <div>
          <input type="text" ref="location" placeholder="Enter location"/>
        </div>
        <button>Get weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
