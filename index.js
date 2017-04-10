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

/*
// npm
const envalid = require('envalid')

const validators = {
  BURLESK_DB: envalid.str({
    default: 'burlesk',
    desc: 'CouchDB database name',
    example: 'burlesk',
    docs: 'https://github.com/millette/burlesk'
  }),
  BURLESK_DB_READ: envalid.str({
    default: false,
    desc: 'CouchDB username for reader user',
    example: 'bob',
    docs: 'https://github.com/millette/burlesk'
  }),
  BURLESK_DB_READ_PW: envalid.str({
    default: false,
    desc: 'CouchDB password for reader user',
    example: 'refelemele',
    docs: 'https://github.com/millette/burlesk'
  }),
  BURLESK_DB_URL: envalid.url({
    default: 'http://localhost:5984',
    desc: 'CouchDB server URL',
    example: 'https://example.cloudant.com',
    docs: 'https://github.com/millette/burlesk'
  })
}

const secureWarning = 'Warning, sending password over http.'
const checkEnv = (options) => {
  const env = envalid.cleanEnv(process.env, validators, { strict: true })
  if (!env.BURLESK_DB_READ !== !env.BURLESK_DB_READ_PW) {
    console.error(`BURLESK_DB_READ: ${validators.BURLESK_DB_READ.desc}`)
    console.error(`BURLESK_DB_READ_PW: ${validators.BURLESK_DB_READ_PW.desc}`)
    throw new Error('BURLESK_DB_READ and BURLESK_DB_READ_PW must both be set or undefined.')
  }
  for (let r in env) {
    if (env[r] === '') {
      console.error(`${r}: ${validators[r].desc}`)
      throw new Error(`${r} must not be empty.`)
    }
  }
  const u = url.parse(env.BURLESK_DB_URL)
  if (u.protocol === 'http:' && env.BURLESK_DB_READ_PW) {
    console.error(`BURLESK_DB_URL: ${validators.BURLESK_DB_URL.desc}`)
    console.error(`BURLESK_DB_READ_PW: ${validators.BURLESK_DB_READ_PW.desc}`)

    if (options && options.secure) { throw new Error(secureWarning) }
    console.error(secureWarning)
  }
  return env
}

const env = checkEnv({secure: true})

console.log('ENV', env)
*/

module.exports = function (str, opts) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }

  opts = opts || {}

  return str + ' & ' + (opts.postfix || 'rainbows')
}
