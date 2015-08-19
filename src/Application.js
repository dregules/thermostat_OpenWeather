thermostat = new Thermostat();


updateTemperature = function() {
  $('#currentTemp').html(thermostat.temp);
  $('#currentTemp').css('color', thermostat.displayColour);
};

  updateTemperature();


$('#increaseTemp').click(function() {
  thermostat.increaseTemperature();
  updateTemperature();
});

$('#decreaseTemp').click(function() {
  thermostat.decreaseTemperature();
  updateTemperature();
});

$('#resetTemp').click(function() {
  thermostat.resetTemperature();
  updateTemperature();
});

$('#powerSave').change(function() {
  thermostat.setPowerSave();
  updateTemperature();
});

$('#submit_button').click(function() {
  captureCity = $('#city').val();
  updateTemperature();
});

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=', function(results) {
  //$('#currentTemp').html(results.main.temp);
  $('#currentCity').html(captureCity);

});



