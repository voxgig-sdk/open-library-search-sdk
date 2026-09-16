"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SearchEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OPEN_LIBRARY_SEARCH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OPEN_LIBRARY_SEARCH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OpenLibrarySearchSDK.test();
        const ent = testsdk.Search();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OPEN_LIBRARY_SEARCH_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'search.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "author_key", "req": false, "short": "List of Open Library author keys", "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "author_name", "req": false, "short": "List of author names", "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "cover_i", "req": false, "short": "Cover image ID", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "edition_count", "req": false, "short": "Number of editions for this work", "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "editions", "req": false, "short": "Nested editions data when fields parameter includes editions", "type": "`$OBJECT`", "index$": 4 }, { "active": true, "name": "first_publish_year", "req": false, "short": "Year of first publication", "type": "`$INTEGER`", "index$": 5 }, { "active": true, "name": "has_fulltext", "req": false, "short": "Whether full text is available", "type": "`$BOOLEAN`", "index$": 6 }, { "active": true, "name": "ia", "req": false, "short": "Internet Archive identifiers", "type": "`$ARRAY`", "index$": 7 }, { "active": true, "name": "isbn", "req": false, "short": "List of ISBNs", "type": "`$ARRAY`", "index$": 8 }, { "active": true, "name": "key", "req": false, "short": "Open Library work key", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "language", "req": false, "short": "List of language codes", "type": "`$ARRAY`", "index$": 10 }, { "active": true, "name": "public_scan_b", "req": false, "short": "Whether public scans are available", "type": "`$BOOLEAN`", "index$": 11 }, { "active": true, "name": "publisher", "req": false, "short": "List of publishers", "type": "`$ARRAY`", "index$": 12 }, { "active": true, "name": "title", "req": false, "short": "Title of the book", "type": "`$STRING`", "index$": 13 }], "name": "search", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "tolkien", "kind": "query", "name": "author", "orig": "author", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "ebook_access", "orig": "ebook_access", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "key,title,author_name,editions", "kind": "query", "name": "field", "orig": "field", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "kind": "query", "name": "has_fulltext", "orig": "has_fulltext", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "example": "en", "kind": "query", "name": "lang", "orig": "lang", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "example": "eng", "kind": "query", "name": "language", "orig": "language", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "example": 10, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 6 }, { "active": true, "example": 0, "kind": "query", "name": "offset", "orig": "offset", "reqd": false, "type": "`$INTEGER`", "index$": 7 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 8 }, { "active": true, "kind": "query", "name": "publisher", "orig": "publisher", "reqd": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "example": "the lord of the rings", "kind": "query", "name": "q", "orig": "q", "reqd": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "example": "new", "kind": "query", "name": "sort", "orig": "sort", "reqd": false, "type": "`$STRING`", "index$": 11 }, { "active": true, "example": "the lord of the rings", "kind": "query", "name": "title", "orig": "title", "reqd": false, "type": "`$STRING`", "index$": 12 }] }, "contract": { "id": "GET /search.json", "json": "{\"operationId\":\"searchBooks\",\"parameters\":[{\"description\":\"The solr query. General search term for books.\",\"example\":\"the lord of the rings\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Search by book title\",\"example\":\"the lord of the rings\",\"in\":\"query\",\"name\":\"title\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Search by author name\",\"example\":\"tolkien\",\"in\":\"query\",\"name\":\"author\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of fields to return from solr. Use * to fetch all fields. Add 'availability' to fetch availability data from archive.org. Can also specify edition fields like 'editions.key,editions.title'.\",\"example\":\"key,title,author_name,editions\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Sort results by various facets such as 'new', 'old', 'random', or 'key'. Default is relevance.\",\"example\":\"new\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"enum\":[\"new\",\"old\",\"random\",\"key\",\"relevance\"],\"type\":\"string\"}},{\"description\":\"Two letter ISO 639-1 language code. Influences but doesn't exclude search results by preferring editions in this language.\",\"example\":\"en\",\"in\":\"query\",\"name\":\"lang\",\"required\":false,\"schema\":{\"pattern\":\"^[a-z]{2}$\",\"type\":\"string\"}},{\"description\":\"Number of results to skip for pagination.\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Maximum number of results to return (page size).\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Page number for pagination (starts at 1). Use with 'limit' parameter.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter by publisher name\",\"in\":\"query\",\"name\":\"publisher\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by language code (e.g., 'fre' for French, 'eng' for English)\",\"example\":\"eng\",\"in\":\"query\",\"name\":\"language\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter for books with full text available\",\"in\":\"query\",\"name\":\"has_fulltext\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Filter by ebook access type\",\"in\":\"query\",\"name\":\"ebook_access\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"docs\":[{\"author_key\":[\"OL26320A\"],\"author_name\":[\"J. R. R. Tolkien\"],\"cover_i\":258027,\"edition_count\":120,\"first_publish_year\":1954,\"has_fulltext\":true,\"ia\":[\"returnofking00tolk_1\",\"lordofrings00tolk_1\"],\"key\":\"/works/OL27448W\",\"public_scan_b\":true,\"title\":\"The Lord of the Rings\"}],\"numFound\":629,\"numFoundExact\":true,\"start\":0},\"schema\":{\"properties\":{\"docs\":{\"description\":\"Array of book documents\",\"items\":{\"properties\":{\"author_key\":{\"description\":\"List of Open Library author keys\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"author_name\":{\"description\":\"List of author names\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"cover_i\":{\"description\":\"Cover image ID\",\"type\":\"integer\"},\"edition_count\":{\"description\":\"Number of editions for this work\",\"type\":\"integer\"},\"editions\":{\"description\":\"Nested editions data when fields parameter includes editions\",\"properties\":{\"docs\":{\"description\":\"Array of edition documents\",\"items\":{\"properties\":{\"ebook_access\":{\"description\":\"Ebook access type (e.g., 'public', 'borrowable')\",\"type\":\"string\"},\"isbn\":{\"description\":\"ISBNs for this edition\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"key\":{\"description\":\"Open Library edition key\",\"example\":\"/books/OL37239326M\",\"type\":\"string\"},\"language\":{\"description\":\"Language codes for this edition\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"publish_date\":{\"description\":\"Publication date\",\"type\":\"string\"},\"publisher\":{\"description\":\"Publishers of this edition\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the edition\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"numFound\":{\"description\":\"Total number of editions found\",\"type\":\"integer\"},\"numFoundExact\":{\"description\":\"Whether the count is exact\",\"type\":\"boolean\"},\"start\":{\"description\":\"Starting offset\",\"type\":\"integer\"}},\"type\":\"object\"},\"first_publish_year\":{\"description\":\"Year of first publication\",\"type\":\"integer\"},\"has_fulltext\":{\"description\":\"Whether full text is available\",\"type\":\"boolean\"},\"ia\":{\"description\":\"Internet Archive identifiers\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"isbn\":{\"description\":\"List of ISBNs\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"key\":{\"description\":\"Open Library work key\",\"example\":\"/works/OL27448W\",\"type\":\"string\"},\"language\":{\"description\":\"List of language codes\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"public_scan_b\":{\"description\":\"Whether public scans are available\",\"type\":\"boolean\"},\"publisher\":{\"description\":\"List of publishers\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the book\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"numFound\":{\"description\":\"Total number of documents found\",\"type\":\"integer\"},\"numFoundExact\":{\"description\":\"Whether the numFound is exact or an estimate\",\"type\":\"boolean\"},\"start\":{\"description\":\"Starting offset of the results\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful search response\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid query parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/search.json", "segments": [{ "lit": "search.json" }], "select": { "exist": ["author", "ebook_access", "field", "has_fulltext", "lang", "language", "limit", "offset", "page", "publisher", "q", "sort", "title"] }, "transform": { "req": "`reqdata`", "res": "`body.docs`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "search", "name__orig": "search", "Name": "Search", "name_": "search", "name-": "search", "NAME": "SEARCH", "index$": 1 }, { "active": true, "entity": "search", "key$": "BasicSearchFlow", "kind": "basic", "name": "BasicSearchFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "search_ref01" } }], "index$": 0 }] }, 'Search');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let search_ref01_data = Object.values(setup.data.existing.search)[0];
        // LIST
        const search_ref01_ent = client.Search();
        const search_ref01_match = {};
        const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/search/SearchTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OpenLibrarySearchSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['search01', 'search02', 'search03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OPEN_LIBRARY_SEARCH_TEST_SEARCH_ENTID': idmap,
        'OPEN_LIBRARY_SEARCH_TEST_LIVE': 'FALSE',
        'OPEN_LIBRARY_SEARCH_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['OPEN_LIBRARY_SEARCH_TEST_SEARCH_ENTID'];
    const live = 'TRUE' === env.OPEN_LIBRARY_SEARCH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OPEN_LIBRARY_SEARCH_TEST_SEARCH_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.OpenLibrarySearchSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.OPEN_LIBRARY_SEARCH_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=SearchEntity.test.js.map