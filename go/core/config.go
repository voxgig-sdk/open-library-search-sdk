package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "OpenLibrarySearch",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://openlibrary.org",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"author": map[string]any{},
				"search": map[string]any{},
			},
		},
		"entity": map[string]any{
			"author": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "birth_date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "death_date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "top_subjects",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "top_work",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "work_count",
						"type": "`$INTEGER`",
					},
				},
				"name": "author",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "twain",
											"kind": "query",
											"name": "q",
											"orig": "q",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search/authors.json",
								"parts": []any{
									"search",
									"authors.json",
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"offset",
										"q",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.docs`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author_key",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "author_name",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "cover_i",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "edition_count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "editions",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "first_publish_year",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "has_fulltext",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ia",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "isbn",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "public_scan_b",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "publisher",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "tolkien",
											"kind": "query",
											"name": "author",
											"orig": "author",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "ebook_access",
											"orig": "ebook_access",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "key,title,author_name,editions",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "has_fulltext",
											"orig": "has_fulltext",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "eng",
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "publisher",
											"orig": "publisher",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "the lord of the rings",
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "new",
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "the lord of the rings",
											"kind": "query",
											"name": "title",
											"orig": "title",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search.json",
								"parts": []any{
									"search.json",
								},
								"select": map[string]any{
									"exist": []any{
										"author",
										"ebook_access",
										"field",
										"has_fulltext",
										"lang",
										"language",
										"limit",
										"offset",
										"page",
										"publisher",
										"q",
										"sort",
										"title",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.docs`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
