thermostat = new Thermostat();

updateTemperature = function() {
  var currentTempElement =  document.getElementById('currentTemp');
  currentTempElement.innerHTML = thermostat.temp;
};

updateTemperature();

var increaseTempElement = document.getElementById('increaseTemp');

increaseTempElement.onclick = function() {
  thermostat.increaseTemperature();
  updateTemperature();
};

var decreaseTempElement = document.getElementById('decreaseTemp');

decreaseTempElement.onclick = function() {
  thermostat.decreaseTemperature();
  updateTemperature();
};
