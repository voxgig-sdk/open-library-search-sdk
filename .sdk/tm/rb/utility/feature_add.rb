# OpenLibrarySearch SDK utility: feature_add
module OpenLibrarySearchUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
