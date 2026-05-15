# OpenLibrarySearch SDK exists test

require "minitest/autorun"
require_relative "../OpenLibrarySearch_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = OpenLibrarySearchSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
