// Typed models for the OpenLibrarySearch SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Author {
  birth_date?: string
  death_date?: string
  key?: string
  name?: string
  top_subject?: any[]
  top_work?: string
  work_count?: number
}

export type AuthorListMatch = Partial<Author>

export interface Search {
  author_key?: any[]
  author_name?: any[]
  cover_i?: number
  edition?: Record<string, any>
  edition_count?: number
  first_publish_year?: number
  has_fulltext?: boolean
  ia?: any[]
  isbn?: any[]
  key?: string
  language?: any[]
  public_scan_b?: boolean
  publisher?: any[]
  title?: string
}

export type SearchListMatch = Partial<Search>

