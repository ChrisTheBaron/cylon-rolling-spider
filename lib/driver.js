/*
 * cylon-rolling-spider driver
 * http://cylonjs.com
 *
 * Copyright (c) 2015 Chris Taylor
 * Licensed under the MIT License (MIT).
 */

"use strict";

var Cylon = require('cylon'),
  Commands = require('./commands');

var Driver = module.exports = function Driver(opts) {

  Cylon.Logger.info('Driver#construct');

  Driver.__super__.constructor.apply(this, arguments);

  this.setupCommands(Commands);

  this.opts = opts || {};

};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function (callback) {

  Cylon.Logger.info('Driver#start');

  var drone = this.connection.connector;

  drone.connect(function () {

    Cylon.Logger.info('Connected to drone');

    callback();

  });

};

Driver.prototype.halt = function (callback) {

  Cylon.Logger.info('Driver#halt');

  callback();
};
