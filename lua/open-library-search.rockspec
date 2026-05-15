package = "voxgig-sdk-open-library-search"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/open-library-search-sdk.git"
}
description = {
  summary = "OpenLibrarySearch SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["open-library-search_sdk"] = "open-library-search_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
