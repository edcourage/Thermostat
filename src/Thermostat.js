function Thermostat() {
  this._temp = 20
}

Thermostat.prototype.currentTemp = function() {
  return this._temp
}

Thermostat.prototype.upTemp = function(temp = 5) {
  this._temp += temp

}
