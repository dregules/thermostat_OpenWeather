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


class_name.prototype.method_name = function(first_argument) {
  // body...
};

