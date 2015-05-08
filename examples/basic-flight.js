/**
 * cylon-rolling-spider example
 * http://cylonjs.com
 *
 * Copyright (c) 2015 Chris Taylor
 * Licensed under the MIT License (MIT).
 */

'use strict';

var Cylon = require('cylon');

Cylon.robot({

	connections: {

		/*
		 * Remember to change the uuid to your own devices uuid
		 */

		'rolling-spider': {adaptor: 'rolling-spider', uuid: 'e014e7fa3d64'}
	},

	devices: {
		drone: {driver: 'rolling-spider'}
	},

	work: function (my) {

		my.drone.wheelOn();

		my.drone.flatTrim();

		my.drone.takeOff();

		after(2500, function () {

			my.drone.land();

			after(1500, function () {

				Cylon.halt();

			});

		});

	}

}).start();
