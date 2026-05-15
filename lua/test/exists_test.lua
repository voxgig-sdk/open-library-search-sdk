-- ProjectName SDK exists test

local sdk = require("open-library-search_sdk")

describe("OpenLibrarySearchSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
