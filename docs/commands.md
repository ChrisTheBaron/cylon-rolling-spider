# Commands
These are the commands that are currently supported. Ones that are not confirmed to be working are specified.

## client.takeOff()
Instructs the drone to take off. Please make sure to call `client.flatTrim()` beforehand to ensure the drone takes off correctly.

## client.land()
Instructs the drone to do a soft landing. This can take a few seconds so please be patient.

## client.up({speed: Number, steps: Number}) / client.down({speed: Number, steps: Number})
Instructs the drone to gain or reduce altitude. `speed` can be a value from `0` to `100`.

## client.clockwise({speed: Number, steps: Number}) / client.counterClockwise({speed: Number, steps: Number})
Instructs the drone to spin. `speed` can be a value from `0` to `100`.

## client.forward({speed: Number, steps: Number}) / client.backward({speed: Number, steps: Number})
Instructs the drone to pitch. `speed` can be a value from `0` to `100`.

## client.left({speed: Number, steps: Number}) / client.right({speed: Number, steps: Number})
Instructs the drone to roll, `speed` can be a value from `0` to `100`.

## client.hover()
Instructs the drone to hover.

## client.frontFlip()
Causes the drone to do an amazing front flip.

## client.backFlip()
Causes the drone to do an amazing back flip.

## client.leftFlip()
**DO NOT USE WITH THE WHEELS ON.**
Causes the drone to do an amazing left flip.

## client.rightFlip()
**DO NOT USE WITH THE WHEELS ON.**
Causes the drone to do an amazing right flip.

## client.flatTrim()
Resets the trim so that your drone's flight is stable. It should always be called before taking off.

## client.emergency()
Instructs the drone to cut off power to the motors, landing immediately.   

## client.wheelOn()
**This is not confirmed to be working.**
Configures the drone to fly with the wheels on. It is recommended to only call this when the drone is not in the air.

## client.wheelOff()
**This is not confirmed to be working.**
Configures the drone to fly with the wheels on. It is recommended to only call this when the drone is not in the air.

## client.signalStrength(callback: (Error, Number))
**This is not confirmed to be working.**
Gets the signal strength of the connected drone in dBm.

## client.getBatteryLevel()
**This is not confirmed to be working.**
Gets the Drones battery level.

## client.drive(parameters, steps)
Low level drove movement commands. `parameters` object has the following values:
- cmd.tilt
- cmd.forward
- cmd.turn
- cmd.up
