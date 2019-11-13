describe("Thermostat", function() {

  describe("#new instance", function() {

    it("thermostats default is 20", function() {
      var thermostat = new Thermostat;
      expect(thermostat.currentTemp()).toEqual(20);

    });
  });

  describe("#upTemp", function() {

    it("turns temperature up by 2 as default", function() {
      var thermostat = new Thermostat;
      thermostat.upTemp()
      expect(thermostat.currentTemp()).toEqual(22);
    });

    it("can override default temp change", function() {
      var thermostat = new Thermostat;
      thermostat.upTemp(4)
      expect(thermostat.currentTemp()).toEqual(24);
    });

    it("if temperature will never go above maximum and error with be thrown", function() {
      var thermostat = new Thermostat;

      expect(function(){thermostat.upTemp(100)}).toThrow("Max Temperature Reached");
      expect(thermostat.currentTemp()).toEqual(25);



    })

  });




















});
