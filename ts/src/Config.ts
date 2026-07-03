
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://openlibrary.org',

    auth: {
      prefix: 'Bearer',
    },

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
          "active": true,
          "name": "birth_date",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "death_date",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "key",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "top_subject",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 4
        },
        {
          "active": true,
          "name": "top_work",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "work_count",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 6
        }
      ],
      "name": "author",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": "twain",
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/search/authors.json",
              "parts": [
                "search",
                "authors.json"
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
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "search": {
      "fields": [
        {
          "active": true,
          "name": "author_key",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "author_name",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "cover_i",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 2
        },
        {
          "active": true,
          "name": "edition",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 3
        },
        {
          "active": true,
          "name": "edition_count",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 4
        },
        {
          "active": true,
          "name": "first_publish_year",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 5
        },
        {
          "active": true,
          "name": "has_fulltext",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 6
        },
        {
          "active": true,
          "name": "ia",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 7
        },
        {
          "active": true,
          "name": "isbn",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 8
        },
        {
          "active": true,
          "name": "key",
          "req": false,
          "type": "`$STRING`",
          "index$": 9
        },
        {
          "active": true,
          "name": "language",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 10
        },
        {
          "active": true,
          "name": "public_scan_b",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 11
        },
        {
          "active": true,
          "name": "publisher",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 12
        },
        {
          "active": true,
          "name": "title",
          "req": false,
          "type": "`$STRING`",
          "index$": 13
        }
      ],
      "name": "search",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "tolkien",
                    "kind": "query",
                    "name": "author",
                    "orig": "author",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "ebook_access",
                    "orig": "ebook_access",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "key,title,author_name,editions",
                    "kind": "query",
                    "name": "field",
                    "orig": "field",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "has_fulltext",
                    "orig": "has_fulltext",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "example": "en",
                    "kind": "query",
                    "name": "lang",
                    "orig": "lang",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "eng",
                    "kind": "query",
                    "name": "language",
                    "orig": "language",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "publisher",
                    "orig": "publisher",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "the lord of the rings",
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "new",
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "the lord of the rings",
                    "kind": "query",
                    "name": "title",
                    "orig": "title",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/search.json",
              "parts": [
                "search.json"
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
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
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
  config
}

