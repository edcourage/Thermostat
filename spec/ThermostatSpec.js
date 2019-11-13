describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat
  })



  describe("#new instance", function() {

    it("thermostats default is 20", function() {

      expect(thermostat.currentTemp()).toEqual(20);

    });
  });

  describe("#upTemp", function() {

    it("turns temperature up by 2 as default", function() {

      thermostat.upTemp()
      expect(thermostat.currentTemp()).toEqual(22);
    });

    it("can override default temp change", function() {

      thermostat.upTemp(4)
      expect(thermostat.currentTemp()).toEqual(24);
    });

    it("if temperature will never go above maximum and error with be thrown", function() {


      expect(function(){thermostat.upTemp(100)}).toThrow("Max Temperature Reached");
      expect(thermostat.currentTemp()).toEqual(25);
    })



  });

  describe("#downTemp", function() {

    it("turns temperature down by 2 as default", function() {

      thermostat.downTemp()
      expect(thermostat.currentTemp()).toEqual(18);
    });

    it("can override default temp change", function() {

      thermostat.downTemp(4)
      expect(thermostat.currentTemp()).toEqual(16);
    });

    it("if temperature will never go below minimum and error with be thrown", function() {


      expect(function(){thermostat.downTemp(100)}).toThrow("Max Temperature Reached");
      expect(thermostat.currentTemp()).toEqual(10);
    })



  });






















});
