-- OpenLibrarySearch SDK error

local json = require("dkjson")

local OpenLibrarySearchError = {}
OpenLibrarySearchError.__index = OpenLibrarySearchError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function OpenLibrarySearchError.new(code, msg, ctx)
  local self = setmetatable({}, OpenLibrarySearchError)
  self.is_sdk_error = true
  self.sdk = "OpenLibrarySearch"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  CONTEXT[self] = ctx
  return self
end


function OpenLibrarySearchError:context()
  return CONTEXT[self]
end


function OpenLibrarySearchError:error()
  return self.msg
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function OpenLibrarySearchError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function OpenLibrarySearchError:to_json()
  return json.encode(self:to_table())
end


function OpenLibrarySearchError:__tostring()
  return self.msg
end


function OpenLibrarySearchError.__tojson(self)
  return self:to_json()
end


return OpenLibrarySearchError
