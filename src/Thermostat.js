function Thermostat() {
  this.temp = 20;
  this.powerMode = true;
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.temp < 25) {
    this.temp++;
  } else if (this.temp < 32 && this.powerMode === false) {
    this.temp++;
  };

};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temp < 11) {
    this.temp = 10;
  } else {
    this.temp--;
  }
};

Thermostat.prototype.setPowerSaveOff = function() {
  this.powerMode = false;
};