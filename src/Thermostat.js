function Thermostat() {
  temp = 20;
};


Thermostat.prototype.temperature = function() {
  return temp;
};

Thermostat.prototype.increaseTemperature = function() {
  temp++;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (temp < 11) {
    temp = 10;
  }
  else {
    temp--;
  }
};
