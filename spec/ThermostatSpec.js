describe("Thermostat", function() {

  describe("#new instance", function() {

    it("thermostats default is 20", function() {
    var thermostat = new Thermostat;
    expect(thermostat.currentTemp()).toEqual(20);

    });
  });

  describe("#upTemp", function() {

    it("turns temperature up by 5 as default", function() {
    var thermostat = new Thermostat;
    thermostat.upTemp()
    expect(thermostat.currentTemp()).toEqual(25);
    });

    it("can override defult temp change", function() {
    var thermostat = new Thermostat;
    thermostat.upTemp(13)
    expect(thermostat.currentTemp()).toEqual(33);
    });

  });




















});
