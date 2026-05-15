
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OpenLibrarySearchSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await OpenLibrarySearchSDK.test()
    equal(null !== testsdk, true)
  })

})
