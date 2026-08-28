-- Typed models for the OpenLibrarySearch SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Author
---@field birth_date? string
---@field death_date? string
---@field key? string
---@field name? string
---@field top_subjects? table
---@field top_work? string
---@field work_count? number

---@class AuthorListMatch
---@field limit? number
---@field offset? number
---@field q string

---@class Search
---@field author_key? table
---@field author_name? table
---@field cover_i? number
---@field edition_count? number
---@field editions? table
---@field first_publish_year? number
---@field has_fulltext? boolean
---@field ia? table
---@field isbn? table
---@field key? string
---@field language? table
---@field public_scan_b? boolean
---@field publisher? table
---@field title? string

---@class SearchListMatch
---@field author? string
---@field ebook_access? string
---@field field? string
---@field has_fulltext? boolean
---@field lang? string
---@field language? string
---@field limit? number
---@field offset? number
---@field page? number
---@field publisher? string
---@field q? string
---@field sort? string
---@field title? string

local M = {}

return M
