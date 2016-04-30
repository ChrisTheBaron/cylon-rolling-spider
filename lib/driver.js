/**
 * cylon-rolling-spider driver
 * http://cylonjs.com
 *
 * Copyright (c) 2015 Chris Taylor
 * Licensed under the MIT License (MIT).
 */

"use strict";

var Cylon = require('cylon'),
	Commands = require('./commands'),
	Events = require('./events');

var Driver = module.exports = function Driver(opts) {
	Cylon.Logger.debug('Driver#construct');
	Driver.__super__.constructor.apply(this, arguments);
	this.setupCommands(Commands);
	this.opts = opts || {};
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function (callback) {
	Cylon.Logger.debug('Driver#start');

	Events.forEach(function (e) {
		this.defineDriverEvent(e);
	}.bind(this));

	var drone = this.connection.connector;
	drone.connect(function () {
		Cylon.Logger.log('Connected to Rolling Spider');
	  drone.setup(function () {
	    Cylon.Logger.log("Setting up Rolling Spider");

	    drone.flatTrim();
	    drone.startPing();
	    drone.flatTrim();

			setTimeout(function () {
        Cylon.Logger.log("Rolling Spider ready");
        callback();
      }, 1000);
		});
	});
};

Driver.prototype.halt = function (callback) {
	Cylon.Logger.debug('Driver#halt');
	var drone = this.connection.connector;
	drone.land();
	callback();
};

/**
 * Gets the Drones battery level
 *
 * @returns {Number} between 0 and 100
 */
Driver.prototype.getBatteryLevel = function () {
	return this.connection.connector.status.battery;
};
