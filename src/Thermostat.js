function Thermostat() {
  this.temp = 20;
};

Thermostat.prototype.increaseTemperature = function() {
  this.temp++;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (temp < 11) {
    temp = 10;
  }
  else {
    temp--;
  }
};
