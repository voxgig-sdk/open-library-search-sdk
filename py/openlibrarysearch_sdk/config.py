# OpenLibrarySearch SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "OpenLibrarySearch",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://openlibrary.org",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "author": {},
                "search": {},
            },
        },
        "entity": {
      "author": {
        "fields": [
          {
            "name": "birth_date",
            "type": "`$STRING`",
          },
          {
            "name": "death_date",
            "type": "`$STRING`",
          },
          {
            "name": "key",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "top_subjects",
            "type": "`$ARRAY`",
          },
          {
            "name": "top_work",
            "type": "`$STRING`",
          },
          {
            "name": "work_count",
            "type": "`$INTEGER`",
          },
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
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "twain",
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/search/authors.json",
                "parts": [
                  "search",
                  "authors.json",
                ],
                "select": {
                  "exist": [
                    "limit",
                    "offset",
                    "q",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.docs`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "name": "author_key",
            "type": "`$ARRAY`",
          },
          {
            "name": "author_name",
            "type": "`$ARRAY`",
          },
          {
            "name": "cover_i",
            "type": "`$INTEGER`",
          },
          {
            "name": "edition_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "editions",
            "type": "`$OBJECT`",
          },
          {
            "name": "first_publish_year",
            "type": "`$INTEGER`",
          },
          {
            "name": "has_fulltext",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "ia",
            "type": "`$ARRAY`",
          },
          {
            "name": "isbn",
            "type": "`$ARRAY`",
          },
          {
            "name": "key",
            "type": "`$STRING`",
          },
          {
            "name": "language",
            "type": "`$ARRAY`",
          },
          {
            "name": "public_scan_b",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "publisher",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "ebook_access",
                      "orig": "ebook_access",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "key,title,author_name,editions",
                      "kind": "query",
                      "name": "field",
                      "orig": "field",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "has_fulltext",
                      "orig": "has_fulltext",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "eng",
                      "kind": "query",
                      "name": "language",
                      "orig": "language",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "publisher",
                      "orig": "publisher",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "the lord of the rings",
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "new",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "the lord of the rings",
                      "kind": "query",
                      "name": "title",
                      "orig": "title",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/search.json",
                "parts": [
                  "search.json",
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
                    "title",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.docs`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
