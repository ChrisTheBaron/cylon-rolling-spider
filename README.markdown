# Cylon.js For RollingSpider

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and
physical computing using Node.js

This repository contains the Cylon adaptor for RollingSpider.

For more information about Cylon, check out the repo at
https://github.com/hybridgroup/cylon

## How to Install

Install the module with:

    $ npm install cylon-rolling-spider

## How to Use

## How to Connect

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'rolling-spider', adaptor: 'rolling-spider' },
  device: {name: 'rolling-spider', driver: 'rolling-spider'},

  work: function(my) {
    // provide an example of your module here
  }
}).start();
```

Explain how to connect from the computer to the device here...

## Documentation

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

None yet...

## License

Copyright (c) 2015 Chris Taylor. See `LICENSE` for more details
