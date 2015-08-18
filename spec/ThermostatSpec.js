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
    for ( i = 0; i < 15; i++) {
      thermostat.decreaseTemperature();
    };
    expect(thermostat.temp).toEqual(10);
  });

});
