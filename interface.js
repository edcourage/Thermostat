
$(document).ready(function() {
  var thermostat = new Thermostat
  // jQuery methods go here...


  $('#temperature').text(thermostat.currentTemp())

  $('#tempurature-up').on('click', function() {
    thermostat.upTemp()
    $('#temperature').text(thermostat.currentTemp())

  })

  $('#tempurature-down').on('click', function() {
    thermostat.downTemp()
    $('#temperature').text(thermostat.currentTemp())

  })

  $('#tempurature-down').on('click', function() {
    thermostat.downTemp()
    $('#temperature').text(thermostat.currentTemp())

  })

  $('#reset-temp').on('click', function() {
    thermostat.reset()
    $('#temperature').text(thermostat.currentTemp())

  })

  $('#powersaving-on').on('click', function() {
    thermostat.powerSaveModeOn()
    $('#usage').text("Power Saving On")

  })

  $('#powersaving-off').on('click', function() {
    thermostat.powerSaveModeOff()
    $('#usage').text("Power Saving Off")

  })
});
