# OpenLibrarySearch SDK utility: prepare_body
module OpenLibrarySearchUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
