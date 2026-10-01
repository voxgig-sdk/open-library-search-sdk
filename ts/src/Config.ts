
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
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
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "title": "Birth Date",
          "type": "`$STRING`",
          "short": "Author birth date"
        },
        {
          "name": "death_date",
          "title": "Death Date",
          "type": "`$STRING`",
          "short": "Author death date"
        },
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "short": "Open Library author key"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Author name"
        },
        {
          "name": "top_subjects",
          "title": "Top Subjects",
          "type": "`$ARRAY`",
          "short": "Top subjects associated with this author"
        },
        {
          "name": "top_work",
          "title": "Top Work",
          "type": "`$STRING`",
          "short": "Title of top work"
        },
        {
          "name": "work_count",
          "title": "Work Count",
          "type": "`$INTEGER`",
          "short": "Number of works by this author"
        }
      ],
      "name": "author",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
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
              "parts": [
                "search",
                "authors.json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.docs`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "twain"
                  }
                ]
              },
              "select": {
                "exist": [
                  "limit",
                  "offset",
                  "q"
                ]
              }
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
          "title": "Author Key",
          "type": "`$ARRAY`",
          "short": "List of Open Library author keys"
        },
        {
          "name": "author_name",
          "title": "Author Name",
          "type": "`$ARRAY`",
          "short": "List of author names"
        },
        {
          "name": "cover_i",
          "title": "Cover I",
          "type": "`$INTEGER`",
          "short": "Cover image ID"
        },
        {
          "name": "edition_count",
          "title": "Edition Count",
          "type": "`$INTEGER`",
          "short": "Number of editions for this work"
        },
        {
          "name": "editions",
          "title": "Editions",
          "type": "`$OBJECT`",
          "short": "Nested editions data when fields parameter includes editions"
        },
        {
          "name": "first_publish_year",
          "title": "First Publish Year",
          "type": "`$INTEGER`",
          "short": "Year of first publication"
        },
        {
          "name": "has_fulltext",
          "title": "Has Fulltext",
          "type": "`$BOOLEAN`",
          "short": "Whether full text is available"
        },
        {
          "name": "ia",
          "title": "Ia",
          "type": "`$ARRAY`",
          "short": "Internet Archive identifiers"
        },
        {
          "name": "isbn",
          "title": "Isbn",
          "type": "`$ARRAY`",
          "short": "List of ISBNs"
        },
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "short": "Open Library work key"
        },
        {
          "name": "language",
          "title": "Language",
          "type": "`$ARRAY`",
          "short": "List of language codes"
        },
        {
          "name": "public_scan_b",
          "title": "Public Scan B",
          "type": "`$BOOLEAN`",
          "short": "Whether public scans are available"
        },
        {
          "name": "publisher",
          "title": "Publisher",
          "type": "`$ARRAY`",
          "short": "List of publishers"
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "short": "Title of the book"
        }
      ],
      "name": "search",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/search.json",
              "segments": [
                {
                  "lit": "search.json"
                }
              ],
              "parts": [
                "search.json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.docs`"
              },
              "args": {
                "query": [
                  {
                    "name": "author",
                    "orig": "author",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "tolkien"
                  },
                  {
                    "name": "ebook_access",
                    "orig": "ebook_access",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "field",
                    "orig": "fields",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "key,title,author_name,editions"
                  },
                  {
                    "name": "has_fulltext",
                    "orig": "has_fulltext",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "en"
                  },
                  {
                    "name": "language",
                    "orig": "language",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "eng"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "publisher",
                    "orig": "publisher",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "the lord of the rings"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "new"
                  },
                  {
                    "name": "title",
                    "orig": "title",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "the lord of the rings"
                  }
                ]
              },
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
              }
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

