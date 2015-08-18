thermostat = new Thermostat();


updateTemperature = function() {
  var currentTempElement =  document.getElementById('currentTemp');
  currentTempElement.innerHTML = thermostat.temp;
  document.body.style.backgroundColor = thermostat.displayColour;
};

updateTemperature();


//var increaseTempElement = document.getElementById('increaseTemp');
$('#increaseTemp').click(function () {
  thermostat.increaseTemperature();
  updateTemperature();
});

// increaseTempElement.onclick = function() {
//   thermostat.increaseTemperature();
//   updateTemperature();
// };

var decreaseTempElement = document.getElementById('decreaseTemp');

decreaseTempElement.onclick = function() {
  thermostat.decreaseTemperature();
  updateTemperature();
};

var resetTempElement = document.getElementById('resetTemp');

resetTempElement.onclick = function() {
  thermostat.resetTemperature();
  updateTemperature();
};

var powerSaveElement = document.getElementById('powerSave');

powerSaveElement.onchange = function() {
  thermostat.setPowerSave();
  updateTemperature();
};

