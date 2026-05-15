# OpenLibrarySearch SDK utility: make_context
require_relative '../core/context'
module OpenLibrarySearchUtilities
  MakeContext = ->(ctxmap, basectx) {
    OpenLibrarySearchContext.new(ctxmap, basectx)
  }
end
