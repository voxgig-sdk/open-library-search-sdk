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
						"title": "Birth Date",
						"type": "`$STRING`",
						"short": "Author birth date",
					},
					map[string]any{
						"name": "death_date",
						"title": "Death Date",
						"type": "`$STRING`",
						"short": "Author death date",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"short": "Open Library author key",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Author name",
					},
					map[string]any{
						"name": "top_subjects",
						"title": "Top Subjects",
						"type": "`$ARRAY`",
						"short": "Top subjects associated with this author",
					},
					map[string]any{
						"name": "top_work",
						"title": "Top Work",
						"type": "`$STRING`",
						"short": "Title of top work",
					},
					map[string]any{
						"name": "work_count",
						"title": "Work Count",
						"type": "`$INTEGER`",
						"short": "Number of works by this author",
					},
				},
				"name": "author",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"search",
									"authors.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.docs`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "twain",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"offset",
										"q",
									},
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
						"title": "Author Key",
						"type": "`$ARRAY`",
						"short": "List of Open Library author keys",
					},
					map[string]any{
						"name": "author_name",
						"title": "Author Name",
						"type": "`$ARRAY`",
						"short": "List of author names",
					},
					map[string]any{
						"name": "cover_i",
						"title": "Cover I",
						"type": "`$INTEGER`",
						"short": "Cover image ID",
					},
					map[string]any{
						"name": "edition_count",
						"title": "Edition Count",
						"type": "`$INTEGER`",
						"short": "Number of editions for this work",
					},
					map[string]any{
						"name": "editions",
						"title": "Editions",
						"type": "`$OBJECT`",
						"short": "Nested editions data when fields parameter includes editions",
					},
					map[string]any{
						"name": "first_publish_year",
						"title": "First Publish Year",
						"type": "`$INTEGER`",
						"short": "Year of first publication",
					},
					map[string]any{
						"name": "has_fulltext",
						"title": "Has Fulltext",
						"type": "`$BOOLEAN`",
						"short": "Whether full text is available",
					},
					map[string]any{
						"name": "ia",
						"title": "Ia",
						"type": "`$ARRAY`",
						"short": "Internet Archive identifiers",
					},
					map[string]any{
						"name": "isbn",
						"title": "Isbn",
						"type": "`$ARRAY`",
						"short": "List of ISBNs",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"short": "Open Library work key",
					},
					map[string]any{
						"name": "language",
						"title": "Language",
						"type": "`$ARRAY`",
						"short": "List of language codes",
					},
					map[string]any{
						"name": "public_scan_b",
						"title": "Public Scan B",
						"type": "`$BOOLEAN`",
						"short": "Whether public scans are available",
					},
					map[string]any{
						"name": "publisher",
						"title": "Publisher",
						"type": "`$ARRAY`",
						"short": "List of publishers",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"short": "Title of the book",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/search.json",
								"segments": []any{
									map[string]any{
										"lit": "search.json",
									},
								},
								"parts": []any{
									"search.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.docs`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "author",
											"orig": "author",
											"type": "`$STRING`",
											"kind": "query",
											"example": "tolkien",
										},
										map[string]any{
											"name": "ebook_access",
											"orig": "ebook_access",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "field",
											"orig": "fields",
											"type": "`$STRING`",
											"kind": "query",
											"example": "key,title,author_name,editions",
										},
										map[string]any{
											"name": "has_fulltext",
											"orig": "has_fulltext",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
										map[string]any{
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
											"kind": "query",
											"example": "eng",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "publisher",
											"orig": "publisher",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
											"example": "the lord of the rings",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
											"example": "new",
										},
										map[string]any{
											"name": "title",
											"orig": "title",
											"type": "`$STRING`",
											"kind": "query",
											"example": "the lord of the rings",
										},
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
