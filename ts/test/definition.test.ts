import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "author",
    "accessor": "Author",
    "op": "list",
    "method": "GET",
    "path": "/search/authors.json",
    "args": [],
    "select": {
      "q": "twain",
      "limit": 10,
      "offset": 0
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "offset",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "q",
        "wire": "q"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "numFound": 1,
      "start": 1,
      "numFoundExact": true,
      "docs": [
        {
          "key": "x",
          "name": "x",
          "birth_date": "x",
          "death_date": "x",
          "work_count": 1,
          "top_work": "x",
          "top_subjects": [
            "x"
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "search",
    "accessor": "Search",
    "op": "list",
    "method": "GET",
    "path": "/search.json",
    "args": [],
    "select": {
      "author": "tolkien",
      "ebook_access": "v1",
      "field": "key,title,author_name,editions",
      "has_fulltext": "v1",
      "lang": "en",
      "language": "eng",
      "limit": 10,
      "offset": 0,
      "page": 1,
      "publisher": "v1",
      "q": "the lord of the rings",
      "sort": "new",
      "title": "the lord of the rings"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "title",
      "author",
      "fields",
      "sort",
      "lang",
      "offset",
      "limit",
      "page",
      "publisher",
      "language",
      "has_fulltext",
      "ebook_access"
    ],
    "queryArgs": [
      {
        "name": "author",
        "wire": "author"
      },
      {
        "name": "ebook_access",
        "wire": "ebook_access"
      },
      {
        "name": "field",
        "wire": "fields"
      },
      {
        "name": "has_fulltext",
        "wire": "has_fulltext"
      },
      {
        "name": "lang",
        "wire": "lang"
      },
      {
        "name": "language",
        "wire": "language"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "publisher",
        "wire": "publisher"
      },
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "sort",
        "wire": "sort"
      },
      {
        "name": "title",
        "wire": "title"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "numFound": 629,
      "start": 0,
      "numFoundExact": true,
      "docs": [
        {
          "key": "/works/OL27448W",
          "title": "The Lord of the Rings",
          "author_name": [
            "J. R. R. Tolkien"
          ],
          "author_key": [
            "OL26320A"
          ],
          "first_publish_year": 1954,
          "cover_i": 258027,
          "has_fulltext": true,
          "edition_count": 120,
          "ia": [
            "returnofking00tolk_1",
            "lordofrings00tolk_1"
          ],
          "public_scan_b": true
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
