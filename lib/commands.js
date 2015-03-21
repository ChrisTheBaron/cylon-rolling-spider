/*
 * cylon-rolling-spider commands
 * http://cylonjs.com
 *
 * Copyright (c) 2015 Chris Taylor
 * Licensed under the MIT License (MIT).
 */

"use strict";

module.exports = [

/**
 * Instructs the drone to take off if it isn't already in the air
 *
 * @export
 */
  'hover',

/**
 * Instructs the drone to start moving forwards at speed
 *
 * @param {Number} speed
 * @export
 */
  'forward',

/**
 * Instructs the drone to start moving backwards at speed
 *
 * @param {Number} speed
 * @export
 */
  'backward',

/**
 * Instructs the drone to start moving left at speed
 *
 * @param {Number} speed
 * @export
 */
  'left',

/**
 * Instructs the drone to start moving right at speed
 *
 * @param {Number} speed
 * @export
 */
  'right',

/**
 * Instructs the drone to start moving up at speed
 *
 * @param {Number} speed
 * @export
 */
  'up',

/**
 * Instructs the drone to start moving down at speed
 *
 * @param {Number} speed
 * @export
 */
  'down',

/**
 * Instructs the drone to start spinning clockwise at speed
 *
 * @param {Number} speed
 * @export
 */
  'clockwise',

/**
 * Instructs the drone to start spinning counter clockwise at speed
 *
 * @param {Number} speed
 * @export
 */
  'counterClockwise',

/**
 * Instructs the drone to trim. Make sure to call this before taking off.
 *
 * @export
 */
  'trim',

/**
 * Instructs the drone to do an emergency landing.
 *
 * @export
 */
  'emergencyLand',

/**
 * Instructs the drone to take off if it isn't already in the air
 *
 * @export
 */
  'takeOff',

/**
 * Instructs the drone to land if it's in the air
 *
 * @export
 */
  'land',

/**
 * Instructs the drone to do a front flip.
 *
 * It will only do this if it's in the air
 *
 * @export
 *
 */
  'frontFlip',

/**
 * Instructs the drone to do a back flip.
 *
 * It will only do this if it's in the air
 *
 * @export
 *
 */
  'backFlip',

/**
 * Instructs the drone to do a right flip.
 *
 * It will only do this if it's in the air.
 *
 * Please only call this function if you haven't got the wheels on!
 *
 * **This has not been confirmed to work yet**
 *
 * @export
 *
 */
  'rightFlip',

/**
 * Instructs the drone to do a left flip.
 *
 * It will only do this if it's in the air.
 *
 * Please only call this function if you haven't got the wheels on!
 *
 * **This has not been confirmed to work yet**
 *
 * @export
 *
 */
  'leftFlip'

];
