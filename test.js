'use strict'
import test from 'ava'
import fn from './'

test('title', async t => {
  const ret = await fn()
  t.is(ret.flags.dbServer, 'http://localhost:5984')
})
