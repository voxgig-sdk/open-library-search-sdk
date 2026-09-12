
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'OpenLibrarySearch',
        slug: "open-library-search",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://openlibrary.org",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      author: {
      },

      search: {
      },

    }
  }


  entity = {
    "author": {
      "fields": [
        {
          "name": "birth_date",
          "short": "Author birth date",
          "type": "`$STRING`"
        },
        {
          "name": "death_date",
          "short": "Author death date",
          "type": "`$STRING`"
        },
        {
          "name": "key",
          "short": "Open Library author key",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Author name",
          "type": "`$STRING`"
        },
        {
          "name": "top_subjects",
          "short": "Top subjects associated with this author",
          "type": "`$ARRAY`"
        },
        {
          "name": "top_work",
          "short": "Title of top work",
          "type": "`$STRING`"
        },
        {
          "name": "work_count",
          "short": "Number of works by this author",
          "type": "`$INTEGER`"
        }
      ],
      "name": "author",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "twain",
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/search/authors.json",
              "segments": [
                {
                  "lit": "search"
                },
                {
                  "lit": "authors.json"
                }
              ],
              "select": {
                "exist": [
                  "limit",
                  "offset",
                  "q"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.docs`"
              },
              "parts": [
                "search",
                "authors.json"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "search": {
      "fields": [
        {
          "name": "author_key",
          "short": "List of Open Library author keys",
          "type": "`$ARRAY`"
        },
        {
          "name": "author_name",
          "short": "List of author names",
          "type": "`$ARRAY`"
        },
        {
          "name": "cover_i",
          "short": "Cover image ID",
          "type": "`$INTEGER`"
        },
        {
          "name": "edition_count",
          "short": "Number of editions for this work",
          "type": "`$INTEGER`"
        },
        {
          "name": "editions",
          "short": "Nested editions data when fields parameter includes editions",
          "type": "`$OBJECT`"
        },
        {
          "name": "first_publish_year",
          "short": "Year of first publication",
          "type": "`$INTEGER`"
        },
        {
          "name": "has_fulltext",
          "short": "Whether full text is available",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "ia",
          "short": "Internet Archive identifiers",
          "type": "`$ARRAY`"
        },
        {
          "name": "isbn",
          "short": "List of ISBNs",
          "type": "`$ARRAY`"
        },
        {
          "name": "key",
          "short": "Open Library work key",
          "type": "`$STRING`"
        },
        {
          "name": "language",
          "short": "List of language codes",
          "type": "`$ARRAY`"
        },
        {
          "name": "public_scan_b",
          "short": "Whether public scans are available",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "publisher",
          "short": "List of publishers",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "short": "Title of the book",
          "type": "`$STRING`"
        }
      ],
      "name": "search",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "tolkien",
                    "kind": "query",
                    "name": "author",
                    "orig": "author",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "ebook_access",
                    "orig": "ebook_access",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "key,title,author_name,editions",
                    "kind": "query",
                    "name": "field",
                    "orig": "field",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "has_fulltext",
                    "orig": "has_fulltext",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "eng",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "publisher",
                    "orig": "publisher",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "the lord of the rings",
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "new",
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "the lord of the rings",
                    "kind": "query",
                    "name": "title",
                    "orig": "title",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/search.json",
              "segments": [
                {
                  "lit": "search.json"
                }
              ],
              "select": {
                "exist": [
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
                  "title"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.docs`"
              },
              "parts": [
                "search.json"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

