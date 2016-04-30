/**
 * cylon-rolling-spider adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2015 Chris Taylor
 * Licensed under the MIT License (MIT).
 */

"use strict";

var Cylon = require('cylon'),
	RollingSpider = require('rolling-spider'),
	Commands = require('./commands'),
	Events = require('./events');

var Adaptor = module.exports = function Adaptor(opts) {
	Cylon.Logger.debug('Adaptor#construct');

	Adaptor.__super__.constructor.apply(this, arguments);

	this.opts = opts || {};
	this.uuid = this.opts.uuid || null;

	this.connector = null;
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function (callback) {
	Cylon.Logger.debug('Adaptor#connect');

	this.connector = new RollingSpider({uuid: this.uuid});
	this.proxyMethods(Commands, this.connector, this);

	Events.forEach(function (name) {
		this.defineAdaptorEvent(name);
	}.bind(this));

	callback();
};

Adaptor.prototype.disconnect = function (callback) {
	Cylon.Logger.debug('Adaptor#disconnect');

	var drone = this.connector;

	drone.disconnect(function () {
		Cylon.Logger.log('Disconnected from drone');
		callback();
	});
};
