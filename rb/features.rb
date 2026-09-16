# OpenLibrarySearch SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module OpenLibrarySearchFeatures
  def self.make_feature(name)
    case name
    when "base"
      OpenLibrarySearchBaseFeature.new
    when "ratelimit"
      OpenLibrarySearchRatelimitFeature.new
    when "retry"
      OpenLibrarySearchRetryFeature.new
    when "test"
      OpenLibrarySearchTestFeature.new
    when "timeout"
      OpenLibrarySearchTimeoutFeature.new
    else
      OpenLibrarySearchBaseFeature.new
    end
  end
end
