# OpenLibrarySearch SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module OpenLibrarySearchFeatures
  def self.make_feature(name)
    case name
    when "base"
      OpenLibrarySearchBaseFeature.new
    when "test"
      OpenLibrarySearchTestFeature.new
    else
      OpenLibrarySearchBaseFeature.new
    end
  end
end
