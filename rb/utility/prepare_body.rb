# OpenLibrarySearch SDK utility: prepare_body
require_relative 'media'
module OpenLibrarySearchUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return OpenLibrarySearchUtilities.raw_body(ctx.reqdata) if OpenLibrarySearchUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
