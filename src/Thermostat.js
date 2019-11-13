function Thermostat() {
  this._temp = 20
  this.maxTemp = 25
}

Thermostat.prototype.currentTemp = function() {
  return this._temp
}

Thermostat.prototype.upTemp = function(temp = 2) {
  if ((this._temp + temp) > this.maxTemp) {
    this._temp = this.maxTemp
    throw "Max Temperature Reached"
  }
  else {
    this._temp += temp
  }

}
