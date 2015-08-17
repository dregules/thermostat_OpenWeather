function Thermostat() {
  temp = 20;
};


Thermostat.prototype.temperature = function() {
  return temp;
};

Thermostat.prototype.increaseTemperature = function() {
  temp = temp + 1
};

Thermostat.prototype.decreaseTemperature = function() {
  temp = temp - 1
};
