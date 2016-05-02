var cylon = require("cylon");

cylon.robot({
  connections: {
    joystick: { adaptor: "joystick" },
    spider:  { adaptor: 'rolling-spider', uuid: 'e0143d573d4a'}
  },
  devices: {
    controller: { driver: "dualshock-3", connection: "joystick" },
    drone:      { driver: "rolling-spider", connection: "spider" }
  },
  work: function() {
    var that = this,
        rightStick = { x: 0.0, y: 0.0 },
        leftStick = { x: 0.0, y: 0.0 },
        cmd = {};

    that.controller.on("circle:press", function() {
      that.drone.frontFlip();
    });

    that.controller.on("square:press", function() {
      that.drone.takeOff();
    });

    that.controller.on("triangle:press", function() {
      that.drone.hover();
    });

    that.controller.on("x:press", function() {
      that.drone.land();
    });

    that.controller.on("right_x:move", function(data) {
      rightStick.x = data;
    });

    that.controller.on("right_y:move", function(data) {
      rightStick.y = data;
    });

    that.controller.on("left_x:move", function(data) {
      leftStick.x = data;
    });

    that.controller.on("left_y:move", function(data) {
      leftStick.y = data;
    });

    setInterval(function() {
      var tilt = 0,
          forward = 0,
          turn = 0,
          up = 0,
          steps = 1;

      if (rightStick.y < 0) {
        forward = validatePitch(rightStick.y);
      } else if (rightStick.y > 0) {
        forward = validatePitch(rightStick.y) * -1;
      }

      if (rightStick.x > 0) {
        tilt = validatePitch(rightStick.x);
      } else if (rightStick.x < 0) {
        tilt = validatePitch(rightStick.x) * -1;
      }

      if (leftStick.y < 0) {
        up = validatePitch(leftStick.y);
      } else if (leftStick.y > 0) {
        up = validatePitch(leftStick.y) * -1;
      }

      if (leftStick.x > 0) {
        turn = validatePitch(leftStick.x);
      } else if (leftStick.x < 0) {
        turn = validatePitch(leftStick.x) * -1;
      }

      cmd.tilt = tilt;
      cmd.forward = forward;
      cmd.turn = turn;
      cmd.up = up;

      that.drone.drive(cmd, steps);
    }, 0);
  }
}).start();

function validatePitch(data) {
  var value = Math.abs(data);
  if (value >= 0.1) {
    if (value <= 1.0) {
      return ((Math.round(value * 100.0) / 100.0) * 100) | 0;
    } else {
      return (1.0 * 100) | 0;
    }
  } else {
    return 0 ;
  }
}
