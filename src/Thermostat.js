function Thermostat() {
  this.temp = 20;
};

Thermostat.prototype.increaseTemperature = function() {
  this.temp++;
};

Thermostat.prototype.decreaseTemperature = function() {
  this.temp--;
};
