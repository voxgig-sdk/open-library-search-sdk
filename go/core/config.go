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
			"slug": "open-library-search",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"short": "Author birth date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "death_date",
						"short": "Author death date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key",
						"short": "Open Library author key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Author name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "top_subjects",
						"short": "Top subjects associated with this author",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "top_work",
						"short": "Title of top work",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "work_count",
						"short": "Number of works by this author",
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
								"segments": []any{
									map[string]any{
										"lit": "search",
									},
									map[string]any{
										"lit": "authors.json",
									},
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
								"parts": []any{
									"search",
									"authors.json",
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
						"short": "List of Open Library author keys",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "author_name",
						"short": "List of author names",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "cover_i",
						"short": "Cover image ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "edition_count",
						"short": "Number of editions for this work",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "editions",
						"short": "Nested editions data when fields parameter includes editions",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "first_publish_year",
						"short": "Year of first publication",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "has_fulltext",
						"short": "Whether full text is available",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ia",
						"short": "Internet Archive identifiers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "isbn",
						"short": "List of ISBNs",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "key",
						"short": "Open Library work key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"short": "List of language codes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "public_scan_b",
						"short": "Whether public scans are available",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "publisher",
						"short": "List of publishers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"short": "Title of the book",
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
								"segments": []any{
									map[string]any{
										"lit": "search.json",
									},
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
								"parts": []any{
									"search.json",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
