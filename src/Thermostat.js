function Thermostat() {
  this.temp = 20;
};

Thermostat.prototype.increaseTemperature = function() {
  this.temp++;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temp < 11) {
    this.temp = 10;
  }
  else {
    this.temp--;
  }
};
