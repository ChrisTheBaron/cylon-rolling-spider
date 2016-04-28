/**
 * cylon-rolling-spider example
 * http://cylonjs.com
 *
 * Copyright (c) 2015 Chris Taylor
 * Licensed under the MIT License (MIT).
 */

"use strict";

var Cylon = require("cylon");

Cylon.robot({
	connections: {
		/*
		 * Remember to change the uuid to your own devices uuid
		 */
		spider: { adaptor: "rolling-spider", uuid: "e0143d573d4a" }
	},

	devices: {
		drone: { driver: "rolling-spider" }
	},

	work: function (my) {
		my.drone.wheelOn();
		my.drone.flatTrim();
		my.drone.takeOff();

		after(5000, function () {
			my.drone.land();
		});
	}
}).start();
