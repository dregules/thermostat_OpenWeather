describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can increase temperature by 1', function() {
    thermostat.increaseTemperature();
    expect(thermostat.temperature()).toEqual(21);
  });

  it('can decrease temperature by 1', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.temperature()).toEqual(19);
  });

});
