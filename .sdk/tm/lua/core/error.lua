-- OpenLibrarySearch SDK error

local OpenLibrarySearchError = {}
OpenLibrarySearchError.__index = OpenLibrarySearchError


function OpenLibrarySearchError.new(code, msg, ctx)
  local self = setmetatable({}, OpenLibrarySearchError)
  self.is_sdk_error = true
  self.sdk = "OpenLibrarySearch"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function OpenLibrarySearchError:error()
  return self.msg
end


function OpenLibrarySearchError:__tostring()
  return self.msg
end


return OpenLibrarySearchError
