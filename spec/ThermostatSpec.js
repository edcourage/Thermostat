'use strict';

describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });



  describe("#new instance", function() {

    it("thermostats default is 20", function() {
      expect(thermostat.currentTemp()).toEqual(20);
    });

    it("Power Saver Mode should be turned on by default", function() {
      thermostat.upTemp(100);
      expect(thermostat.currentTemp()).toEqual(25);
    })


  });

  describe("#upTemp", function() {

    it("turns temperature up by 2 as default", function() {

      thermostat.upTemp();
      expect(thermostat.currentTemp()).toEqual(22);
    });

    it("can override default temp change", function() {
      thermostat.upTemp(4);
      expect(thermostat.currentTemp()).toEqual(24);
    });

    it("if temperature will never go above maximum and error with be thrown", function() {
      expect(thermostat.upTemp(100)).toEqual("Max Temperature Reached");
      expect(thermostat.currentTemp()).toEqual(25);
    })



  });

  describe("#downTemp", function() {

    it("turns temperature down by 2 as default", function() {
      thermostat.downTemp();
      expect(thermostat.currentTemp()).toEqual(18);
    });

    it("can override default temp change", function() {
      thermostat.downTemp(4);
      expect(thermostat.currentTemp()).toEqual(16);
    });

    it("if temperature will never go below minimum and error with be thrown", function() {
      expect(thermostat.downTemp(100)).toEqual("Max Temperature Reached");
      expect(thermostat.currentTemp()).toEqual(10);
    })

  });

  describe("#reset", function() {
    it("temperature will be reset to 20", function() {
      thermostat.downTemp(6);
      thermostat.reset();
      expect(thermostat.currentTemp()).toEqual(20);
    });
  });

  describe("#powerSaveModeOff", function() {
    it("Maximum temperature is now 32", function() {
      thermostat.powerSaveModeOff()
      thermostat.upTemp(100);
      expect(thermostat.currentTemp()).toEqual(32);

    })

  })

  describe("#powerSaveModeOn", function() {

    it("Maximum temperature is now 32", function() {
      thermostat.powerSaveModeOn()
      thermostat.upTemp(100);
      expect(thermostat.currentTemp()).toEqual(25);

    })

  })

  describe("#usage", function() {

    it("Returns low usage if temperature is below 18", function() {

      thermostat.downTemp(6);
      expect(thermostat.usage()).toEqual("low-usage");
    })

    it("Returns medium usage if temperature is below 25", function() {

      expect(thermostat.usage()).toEqual("medium-usage");
    })

    it("Returns high usage if temperature is above 24", function() {
      thermostat.powerSaveModeOff()
      thermostat.upTemp(11)
      expect(thermostat.usage()).toEqual("high-usage");
    })

  })



});
