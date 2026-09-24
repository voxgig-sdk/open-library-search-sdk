
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OpenLibrarySearchSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = OpenLibrarySearchSDK.test()
    equal(testsdk instanceof OpenLibrarySearchSDK, true,
      'OpenLibrarySearchSDK.test() must return a client synchronously')
  })

})
