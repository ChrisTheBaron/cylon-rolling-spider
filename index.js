/**
 * cylon-rolling-spider
 * http://cylonjs.com
 *
 * Copyright (c) 2015 Chris Taylor
 * Licensed under the MIT License (MIT).
 */

'use strict';

var Adaptor = require('./lib/adaptor'),
	Driver = require('./lib/driver');

module.exports = {
	// Adaptors your module provides, e.g. ['spark']
	adaptors: ['rolling-spider'],

	// Drivers your module provides, e.g. ['led', 'button']
	drivers: ['rolling-spider'],

	// Modules intended to be used with yours, e.g. ['cylon-gpio']
	dependencies: [],

	adaptor: function (opts) {
		return new Adaptor(opts);
	},

	driver: function (opts) {
		return new Driver(opts);
	}
};
