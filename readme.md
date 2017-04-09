# burlesk
[![Build Status](https://travis-ci.org/millette/burlesk.svg?branch=master)](https://travis-ci.org/millette/burlesk)
[![Coverage Status](https://coveralls.io/repos/github/millette/burlesk/badge.svg?branch=master)](https://coveralls.io/github/millette/burlesk?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/millette/burlesk.svg)](https://gemnasium.com/github.com/millette/burlesk)
> Dereference URLs.

## Install
```
$ npm install --save burlesk
```

## Now with update-notifier
The cli now uses [update-notifier][] to let the user know about updates to this program.

Users have the ability to opt-out of the update notifier by changing
the optOut property to true in ~/.config/configstore/update-notifier-rollodeqc-gh-user-streak.json.
The path is available in notifier.config.path.

Users can also opt-out by setting the environment variable NO_UPDATE_NOTIFIER
with any value or by using the --no-update-notifier flag on a per run basis.

## Usage
```js
const burlesk = require('burlesk')

burlesk('unicorns')
//=> 'unicorns & rainbows'
```

## API
### burlesk(input, [options])
#### input
Type: `string`

Lorem ipsum.

#### options
##### foo
Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## CLI
```
$ npm install --global burlesk
```

```
$ burlesk --help

  Usage
    burlesk [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ burlesk
    unicorns & rainbows
    $ burlesk ponies
    ponies & rainbows
```


## License
AGPL-v3 © 2017 [Robin Millette](http://robin.millette.info)

[update-notifier]: <https://github.com/yeoman/update-notifier>
