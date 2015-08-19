describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('can increase temperature by 1', function() {
    thermostat.increaseTemperature();
    expect(thermostat.temp).toEqual(21);
  });

  it('can decrease temperature by 1', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.temp).toEqual(19);
  });

  it('has a minimum temperature of 10', function() {
    for (i = 0; i < 15; i++) {
      thermostat.decreaseTemperature();
    };
    expect(thermostat.temp).toEqual(10);
  });

  it('can be reset to 20', function() {
    thermostat.increaseTemperature();
    thermostat.resetTemperature();
    expect(thermostat.temp).toEqual(20)
  });

  describe('display colour', function() {

    it('is green when temperature is below 18', function() {
      while (thermostat.temp > 17) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.displayColour).toEqual("green");
    });

    it('is yellow when temperature is below 25', function() {
      while (thermostat.temp < 25) {
        thermostat.increaseTemperature();
      };
      thermostat.decreaseTemperature();
      expect(thermostat.displayColour).toEqual("yellow");
    });

    it('is yellow when temperature is above 17', function() {
      while (thermostat.temp > 17) {
        thermostat.decreaseTemperature();
      };
      thermostat.increaseTemperature();
      expect(thermostat.displayColour).toEqual("yellow");
    });

    it('is red when temperature is above 24', function() {
      while (thermostat.temp < 25) {
        thermostat.increaseTemperature();
      };
      expect(thermostat.displayColour).toEqual("red");
    });

    it('is yellow when temperature is reset', function(){
      while (thermostat.temp < 25) {
        thermostat.increaseTemperature();
      };
      thermostat.resetTemperature();
      expect(thermostat.displayColour).toEqual("yellow");
    });

  });

  describe('power save mode', function() {
    it('is ON by default', function() {
      expect(thermostat.powerMode).toEqual(true);
    });

    it('is ON and max temp cannot surpass 25', function() {
      while (thermostat.temp < 25) {
        thermostat.increaseTemperature();
      }
      thermostat.increaseTemperature();
      expect(thermostat.temp).toEqual(25);
    });

    it('can be set to OFF', function() {
      thermostat.setPowerSave();
      expect(thermostat.powerMode).toEqual(false);
    });

    it('is OFF and max cannot surpass 32', function() {
      thermostat.setPowerSave();
      while (thermostat.temp < 32) {
        thermostat.increaseTemperature();
      }
      thermostat.increaseTemperature();
      expect(thermostat.temp).toEqual(32);
    });
  });

  describe('current weather outside', function() {
    it('is displayed', function(){
      // thermostat.getCurrentWeather();
      // expect(thermostat.currentWeather).toEqual('Sunny')
    });
  });

});