function Thermostat() {
  this.temp = 20;
  this.powerMode = true;
  this.displayColour = "yellow";
  this.CurrentWeather = null;
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.temp < 25) {
    this.temp++;
  } else if (this.temp < 32 && this.powerMode === false) {
    this.temp++;
  };
  this._setDisplayColour();
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temp < 11) {
    this.temp = 10;
  } else {
    this.temp--;
  }
  this._setDisplayColour();
};

Thermostat.prototype.setPowerSave = function() {
  this.powerMode = !this.powerMode;
  if(this.temp > 25) {
    this.temp = 25
  };
};

Thermostat.prototype.resetTemperature = function() {
  this.temp = 20;
  this._setDisplayColour();
};

Thermostat.prototype._setDisplayColour = function() {
  if(this.temp < 18) {
    this.displayColour = "green";
  } else if (this.temp < 25) {
    this.displayColour = "yellow";
  } else {
    this.displayColour = "red";
  }
};

Thermostat.prototype.getCurrentWeather = function() {

};
