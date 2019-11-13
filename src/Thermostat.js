function Thermostat() {
  this._temp = 20
  this._maxTemp = 25
  this._minTemp = 10
}

Thermostat.prototype.currentTemp = function() {
  return this._temp
}

Thermostat.prototype.upTemp = function(temp = 2) {
  if ((this._temp + temp) > this._maxTemp) {
    this._temp = this._maxTemp
    throw "Max Temperature Reached"
  }
  else {
    this._temp += temp
  }
}

Thermostat.prototype.downTemp = function(temp = 2) {
  if ((this._temp - temp) < this._minTemp) {
    this._temp = this._minTemp
    throw "Max Temperature Reached"
  }
  else {
    this._temp -= temp
  }
}
