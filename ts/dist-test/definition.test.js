"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "author",
        "accessor": "Author",
        "op": "list",
        "method": "GET",
        "path": "/search/authors.json",
        "args": [],
        "select": {
            "limit": "v1",
            "offset": "v1",
            "q": "twain"
        },
        "headers": [],
        "query": [
            "q",
            "offset",
            "limit"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "numFound": 1,
            "start": 1,
            "numFoundExact": true,
            "docs": [
                {
                    "birth_date": "x",
                    "death_date": "x",
                    "key": "x",
                    "name": "x",
                    "top_subjects": [
                        "x"
                    ],
                    "top_work": "x",
                    "work_count": 1
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
            "field": "v1",
            "has_fulltext": "v1",
            "lang": "en",
            "language": "eng",
            "limit": "v1",
            "offset": "v1",
            "page": "v1",
            "publisher": "v1",
            "q": "the lord of the rings",
            "sort": "new",
            "title": "the lord of the rings"
        },
        "headers": [],
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
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map