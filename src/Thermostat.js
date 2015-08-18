function Thermostat() {
  this.temp = 20;
  this.powerMode = true;
  this.displayColour = "yellow";
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.temp < 25) {
    this.temp++;
  } else if (this.temp < 32 && this.powerMode === false) {
    this.temp++;
  };
  this.setDisplayColour();
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temp < 11) {
    this.temp = 10;
  } else {
    this.temp--;
  }
  this.setDisplayColour();
};

Thermostat.prototype.setPowerSaveOff = function() {
  this.powerMode = false;
};

Thermostat.prototype.resetTemperature = function() {
  this.temp = 20;
};

Thermostat.prototype.setDisplayColour = function() {
  if(this.temp < 18) {
    this.displayColour = "green";
  } else if (this.temp < 25) {
    this.displayColour = "yellow";
  } else {
    this.displayColour = "red";
  }
};