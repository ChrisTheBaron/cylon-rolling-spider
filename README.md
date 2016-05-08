# Cylon.js For RollingSpider
Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and
physical computing using Node.js

This repository contains the Cylon adaptor/driver for the Parrot Rolling Spider.

The implementation uses the [node-rolling-spider](https://github.com/FluffyJack/node-rolling-spider) node module from [@FluffyJack](https://github.com/FluffyJack/). Thank you!

For more information about Cylon, check out the repo at
https://github.com/hybridgroup/cylon
## How to Install
Install the module with:
``` bash
$ npm install cylon-rolling-spider
```
## How to Use
```javascript
var Cylon = require('cylon');

Cylon.robot({

	connections: {
		'rolling-spider': { adaptor: 'rolling-spider' },
	},

	devices: {
    	drone: { driver: 'rolling-spider' },
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
```
## How to Connect
You will need a Bluetooth adaptor capable of using the new BLE protocols. 
## Documentation
Please look under `/docs` for documentation on commands and events.

We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!
## Contributing
* Put your contribution guidelines here
* Submit a Pull Request to the appropriate branch and ideally discuss the changes with us in IRC.
* We will look at the patch, test it out, and give you feedback.
* Avoid doing minor whitespace changes, renamings, etc. along with merged content. These will be done by the maintainers from time to time but they can complicate merges and should be done seperately.
* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality & lint and test your code using `make test` and `make lint`.
* All pull requests should be "fast forward"
  * If there are commits after yours use “git rebase -i <new_head_branch>”
  * If you have local changes you may need to use “git stash”
  * For git help see [progit](http://git-scm.com/book) which is an awesome (and free) book on git
  
## Release History

1.2.2 - Reverse control sticks to match 'normal' RC controls.

1.2.1 - Upgraded dependencies to latest version.

1.2.0 - Upgraded dependencies to latest version.

1.1.0 - Add support for 'drive' function needed for smooth joystick flight.

1.0.0 - Upgraded dependencies to latest version. 

0.2.0 - Added ability to do flips. Added documentation for existing commands. Updates adaptor to use new constructor. Updates driver to call disconnect function

0.1.1 - Added example code in README, also added previous release history

0.1.0 - Able to take off, land, and drift around. Flips not tested yet
## License
Copyright (c) 2015 Chris Taylor. See `LICENSE` for more details
