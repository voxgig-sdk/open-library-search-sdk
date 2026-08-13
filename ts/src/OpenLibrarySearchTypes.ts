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
  top_subjects?: any[]
  top_work?: string
  work_count?: number
}

export interface AuthorListMatch {
  birth_date?: string
  death_date?: string
  key?: string
  name?: string
  top_subjects?: any[]
  top_work?: string
  work_count?: number
}

export interface Search {
  author_key?: any[]
  author_name?: any[]
  cover_i?: number
  edition_count?: number
  editions?: Record<string, any>
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

export interface SearchListMatch {
  author_key?: any[]
  author_name?: any[]
  cover_i?: number
  edition_count?: number
  editions?: Record<string, any>
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

