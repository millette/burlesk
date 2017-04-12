/*
Dereference URLs.

Copyright 2017
Robin Millette <mailto:robin@millette.info>
<http://robin.millette.info>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the
[GNU Affero General Public License](LICENSE.md)
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict'

// core
const url = require('url')

// npm
const joi = require('joi')
const clivage = require('clivage')

const schema = joi.object({
  dbServer: joi.string().uri({scheme: ['http', 'https']}).default('http://localhost:5984').optional(),
  user: joi.string().optional(),
  password: joi.string().optional()
})
  .with('password', 'user')
  .with('user', 'password')

const help = `
  Usage
    $ burlesk [input]

  Options
    --db-server  CouchDB server url. [Default: http://localhost:5984]
    --user       CouchDB username (optional).
    --password   CouchDB password (optional).

  If provided, user and password must both be set.

  Examples
    $ burlesk
    unicorns & rainbows
    $ burlesk ponies
    ponies & rainbows`

const alias = {
  s: 'dbServer',
  u: 'user',
  p: 'password'
}

const cli = clivage({ schema, help, alias })
if (cli.flags.password) {
  if (url.parse(cli.flags.dbServer).protocol === 'http:') {
    console.error('Warning: password sent over http.')
  }
}

module.exports = () => Promise.resolve(cli)
