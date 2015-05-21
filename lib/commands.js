/**
 * cylon-rolling-spider commands
 * http://cylonjs.com
 *
 * Copyright (c) 2015 Chris Taylor
 * Licensed under the MIT License (MIT).
 */

"use strict";

module.exports = [
/**
 * Send direct drive instructions to the drone.
 *
 * @param tilt: Number
 * @param forward: Number
 * @param turn: Number
 * @param up: Number
 * @param steps: Number
 * @export
 */
	'drive',

/**
 * Instructs the drone to take off if it isn't already in the air
 *
 * @export
 */
	'hover',

/**
 * Instructs the drone to start moving forwards at speed for a number of steps.
 *
 * @param {{speed: Number, steps: Number}} options
 * @export
 */
	'forward',

/**
 * Instructs the drone to start moving backwards at speed
 *
 * @param {{speed: Number, steps: Number}} options
 * @export
 */
	'backward',

/**
 * Instructs the drone to start moving left at speed
 *
 * @param {{speed: Number, steps: Number}} options
 * @export
 */
	'left',

/**
 * Instructs the drone to start moving right at speed
 *
 * @param {{speed: Number, steps: Number}} options
 * @export
 */
	'right',

/**
 * Instructs the drone to start moving up at speed
 *
 * @param {{speed: Number, steps: Number}} options
 * @export
 */
	'up',

/**
 * Instructs the drone to start moving down at speed
 *
 * @param {{speed: Number, steps: Number}} options
 * @export
 */
	'down',

/**
 * Instructs the drone to start spinning clockwise at speed
 *
 * @param {{speed: Number, steps: Number}} options
 * @export
 */
	'clockwise',

/**
 * Instructs the drone to start spinning counter clockwise at speed
 *
 * @param {{speed: Number, steps: Number}} options
 * @export
 */
	'counterClockwise',

/**
 * Instructs the drone to trim. Make sure to call this before taking off.
 *
 * @export
 */
	'flatTrim',

/**
 * Instructs the drone to do an emergency landing.
 *
 * @export
 */
	'emergency',

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
	'leftFlip',

/**
 * Configures the drone to fly with the wheels on.
 *
 * It is recommended to only call this when the drone is not in the air.
 *
 * @export
 */
	'wheelOn',

/**
 * Configures the drone to fly with the wheels off.
 *
 * It is recommended to only call this when the drone is not in the air.
 *
 * @export
 */
	'wheelOff',

/**
 * Gets the signal strength of the connected drone in dBm
 *
 * @param {Function} callback to call when the function is done
 *
 * @export
 */
	'signalStrength'
];
