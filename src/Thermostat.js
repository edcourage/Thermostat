'use strict';

function Thermostat() {
  this._temp = 20
  this._maxTemp = 25
  this._minTemp = 10
  this._powerSavingMode = true
}

Thermostat.prototype.currentTemp = function() {
  return this._temp
}

Thermostat.prototype.upTemp = function(temp = 2) {
  if ((this._temp + temp) > this._maxTemp) {
    this._temp = this._maxTemp
    return "Max Temperature Reached"
  }
  else {
    this._temp += temp
  }
}

Thermostat.prototype.downTemp = function(temp = 2) {
  if ((this._temp - temp) < this._minTemp) {
    this._temp = this._minTemp
    return "Max Temperature Reached"
  }
  else {
    this._temp -= temp
  }
}

Thermostat.prototype.reset = function() {
  this._temp = 20
}

Thermostat.prototype.powerSaveModeOff = function() {
  this._maxTemp = 32
  this._powerSavingMode = false
}

Thermostat.prototype.powerSaveModeOn = function() {
  this._maxTemp = 25
  this._powerSavingMode = true
}

Thermostat.prototype.usage = function() {
  if (this._temp < 18) {
    return "low-usage"
  } else if (this._temp < 25) {
    return "medium-usage"
  } else {
    return "high-usage"
  }
}
