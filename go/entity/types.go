// Typed models for the OpenLibrarySearch SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Author is the typed data model for the author entity.
type Author struct {
	BirthDate *string `json:"birth_date,omitempty"`
	DeathDate *string `json:"death_date,omitempty"`
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
	TopSubject *[]any `json:"top_subject,omitempty"`
	TopWork *string `json:"top_work,omitempty"`
	WorkCount *int `json:"work_count,omitempty"`
}

// AuthorListMatch mirrors the author fields as an all-optional match
// filter (Go analog of Partial<Author>).
type AuthorListMatch struct {
	BirthDate *string `json:"birth_date,omitempty"`
	DeathDate *string `json:"death_date,omitempty"`
	Key *string `json:"key,omitempty"`
	Name *string `json:"name,omitempty"`
	TopSubject *[]any `json:"top_subject,omitempty"`
	TopWork *string `json:"top_work,omitempty"`
	WorkCount *int `json:"work_count,omitempty"`
}

// Search is the typed data model for the search entity.
type Search struct {
	AuthorKey *[]any `json:"author_key,omitempty"`
	AuthorName *[]any `json:"author_name,omitempty"`
	CoverI *int `json:"cover_i,omitempty"`
	Edition *map[string]any `json:"edition,omitempty"`
	EditionCount *int `json:"edition_count,omitempty"`
	FirstPublishYear *int `json:"first_publish_year,omitempty"`
	HasFulltext *bool `json:"has_fulltext,omitempty"`
	Ia *[]any `json:"ia,omitempty"`
	Isbn *[]any `json:"isbn,omitempty"`
	Key *string `json:"key,omitempty"`
	Language *[]any `json:"language,omitempty"`
	PublicScanB *bool `json:"public_scan_b,omitempty"`
	Publisher *[]any `json:"publisher,omitempty"`
	Title *string `json:"title,omitempty"`
}

// SearchListMatch mirrors the search fields as an all-optional match
// filter (Go analog of Partial<Search>).
type SearchListMatch struct {
	AuthorKey *[]any `json:"author_key,omitempty"`
	AuthorName *[]any `json:"author_name,omitempty"`
	CoverI *int `json:"cover_i,omitempty"`
	Edition *map[string]any `json:"edition,omitempty"`
	EditionCount *int `json:"edition_count,omitempty"`
	FirstPublishYear *int `json:"first_publish_year,omitempty"`
	HasFulltext *bool `json:"has_fulltext,omitempty"`
	Ia *[]any `json:"ia,omitempty"`
	Isbn *[]any `json:"isbn,omitempty"`
	Key *string `json:"key,omitempty"`
	Language *[]any `json:"language,omitempty"`
	PublicScanB *bool `json:"public_scan_b,omitempty"`
	Publisher *[]any `json:"publisher,omitempty"`
	Title *string `json:"title,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
