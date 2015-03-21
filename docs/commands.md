# Commands
These are the commands that are currently supported. Ones that are not confirmed to be working are specified.
## client.takeOff()
Instructs the drone to take off. Please make sure to call `client.trim()` beforehand to ensure the drone takes off correctly.
## client.land()
Instructs the drone to do a soft landing. This can take a few seconds so please be patient.
## client.up(speed) / client.down(speed)
Instructs the drone to gain or reduce altitude. `speed` can be a value from `0` to `100`.
## client.clockwise(speed) / client.counterClockwise(speed) 
Instructs the drone to spin. `speed` can be a value from `0` to `100`.
## client.forward(speed) / client.backward(speed)
Instructs the drone to pitch. `speed` can be a value from `0` to `100`.
## client.left(speed) / client.right(speed)
Instructs the drone to roll, `speed` can be a value from `0` to `100`.
## client.hover()
Instructs the drone to hover.
## client.frontFlip()
Causes the drone to do an amazing front flip.
## client.backFlip()
Causes the drone to do an amazing back flip.
## client.leftFlip() 
**This has not been confirmed as working.**

**DO NOT USE WITH THE WHEELS ON.**

Causes the drone to do an amazing left flip. 
## client.rightFlip()
**This has not been confirmed as working.**

**DO NOT USE WITH THE WHEELS ON.**

Causes the drone to do an amazing right flip. 
## client.trim()
Resets the trim so that your drone's flight is stable. It should always be
called before taking off.
## client.emergencyLand()
Instructs the drone to cut off power to the motors, landing immediately.   
