
import { Context } from './Context'


class OpenLibrarySearchError extends Error {

  isOpenLibrarySearchError = true

  sdk = 'OpenLibrarySearch'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  OpenLibrarySearchError
}

