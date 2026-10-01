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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "author_key": { "a": true, "h": "Author Key", "n": "author_key", "r": false, "sh": "List of Open Library author keys", "t": "`$ARRAY`", "key$": "author_key", "index$": 0 }, "author_name": { "a": true, "h": "Author Name", "n": "author_name", "r": false, "sh": "List of author names", "t": "`$ARRAY`", "key$": "author_name", "index$": 1 }, "cover_i": { "a": true, "h": "Cover I", "n": "cover_i", "r": false, "sh": "Cover image ID", "t": "`$INTEGER`", "key$": "cover_i", "index$": 2 }, "edition_count": { "a": true, "h": "Edition Count", "n": "edition_count", "r": false, "sh": "Number of editions for this work", "t": "`$INTEGER`", "key$": "edition_count", "index$": 3 }, "editions": { "a": true, "h": "Editions", "n": "editions", "r": false, "sh": "Nested editions data when fields parameter includes editions", "t": "`$OBJECT`", "key$": "editions", "index$": 4 }, "first_publish_year": { "a": true, "h": "First Publish Year", "n": "first_publish_year", "r": false, "sh": "Year of first publication", "t": "`$INTEGER`", "key$": "first_publish_year", "index$": 5 }, "has_fulltext": { "a": true, "h": "Has Fulltext", "n": "has_fulltext", "r": false, "sh": "Whether full text is available", "t": "`$BOOLEAN`", "key$": "has_fulltext", "index$": 6 }, "ia": { "a": true, "h": "Ia", "n": "ia", "r": false, "sh": "Internet Archive identifiers", "t": "`$ARRAY`", "key$": "ia", "index$": 7 }, "isbn": { "a": true, "h": "Isbn", "n": "isbn", "r": false, "sh": "List of ISBNs", "t": "`$ARRAY`", "key$": "isbn", "index$": 8 }, "key": { "a": true, "h": "Key", "n": "key", "r": false, "sh": "Open Library work key", "t": "`$STRING`", "key$": "key", "index$": 9 }, "language": { "a": true, "h": "Language", "n": "language", "r": false, "sh": "List of language codes", "t": "`$ARRAY`", "key$": "language", "index$": 10 }, "public_scan_b": { "a": true, "h": "Public Scan B", "n": "public_scan_b", "r": false, "sh": "Whether public scans are available", "t": "`$BOOLEAN`", "key$": "public_scan_b", "index$": 11 }, "publisher": { "a": true, "h": "Publisher", "n": "publisher", "r": false, "sh": "List of publishers", "t": "`$ARRAY`", "key$": "publisher", "index$": 12 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Title of the book", "t": "`$STRING`", "key$": "title", "index$": 13 } }, "name": "search", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /search.json", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "tolkien", "k": "query", "n": "author", "or": "author", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "ebook_access", "or": "ebook_access", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "key,title,author_name,editions", "k": "query", "n": "field", "or": "fields", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "has_fulltext", "or": "has_fulltext", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "ex": "en", "k": "query", "n": "lang", "or": "lang", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": "eng", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 6 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 7 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 8 }, { "a": true, "k": "query", "n": "publisher", "or": "publisher", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "ex": "the lord of the rings", "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "ex": "new", "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 11 }, { "a": true, "ex": "the lord of the rings", "k": "query", "n": "title", "or": "title", "r": false, "t": "`$STRING`", "index$": 12 }] }, "k": "http", "m": "GET", "o": "/search.json", "q": { "exist": ["author", "ebook_access", "field", "has_fulltext", "lang", "language", "limit", "offset", "page", "publisher", "q", "sort", "title"] }, "r": {}, "s": [{ "lit": "search.json" }], "t": { "req": "`reqdata`", "res": "`body.docs`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "search", "name__orig": "search", "Name": "Search", "name_": "search", "name-": "search", "NAME": "SEARCH", "index$": 1 }, { "active": true, "entity": "search", "key$": "BasicSearchFlow", "kind": "basic", "name": "BasicSearchFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "search_ref01" } }], "index$": 0 }] }, 'Search', { "GET /search.json": { "protocol": "http", "parameters": [{ "name": "q", "in": "query", "description": "The solr query. General search term for books.", "required": false, "schema": { "type": "string" }, "example": "the lord of the rings", "index$": 0 }, { "name": "title", "in": "query", "description": "Search by book title", "required": false, "schema": { "type": "string" }, "example": "the lord of the rings", "index$": 1 }, { "name": "author", "in": "query", "description": "Search by author name", "required": false, "schema": { "type": "string" }, "example": "tolkien", "index$": 2 }, { "name": "fields", "in": "query", "description": "Comma-separated list of fields to return from solr. Use * to fetch all fields. Add 'availability' to fetch availability data from archive.org. Can also specify edition fields like 'editions.key,editions.title'.", "required": false, "schema": { "type": "string" }, "example": "key,title,author_name,editions", "index$": 3 }, { "name": "sort", "in": "query", "description": "Sort results by various facets such as 'new', 'old', 'random', or 'key'. Default is relevance.", "required": false, "schema": { "type": "string", "enum": ["new", "old", "random", "key", "relevance"] }, "example": "new", "index$": 4 }, { "name": "lang", "in": "query", "description": "Two letter ISO 639-1 language code. Influences but doesn't exclude search results by preferring editions in this language.", "required": false, "schema": { "type": "string", "pattern": "^[a-z]{2}$" }, "example": "en", "index$": 5 }, { "name": "offset", "in": "query", "description": "Number of results to skip for pagination.", "required": false, "schema": { "type": "integer", "minimum": 0, "default": 0 }, "index$": 6 }, { "name": "limit", "in": "query", "description": "Maximum number of results to return (page size).", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 100, "default": 10 }, "index$": 7 }, { "name": "page", "in": "query", "description": "Page number for pagination (starts at 1). Use with 'limit' parameter.", "required": false, "schema": { "type": "integer", "minimum": 1, "default": 1 }, "index$": 8 }, { "name": "publisher", "in": "query", "description": "Filter by publisher name", "required": false, "schema": { "type": "string" }, "index$": 9 }, { "name": "language", "in": "query", "description": "Filter by language code (e.g., 'fre' for French, 'eng' for English)", "required": false, "schema": { "type": "string" }, "example": "eng", "index$": 10 }, { "name": "has_fulltext", "in": "query", "description": "Filter for books with full text available", "required": false, "schema": { "type": "boolean" }, "index$": 11 }, { "name": "ebook_access", "in": "query", "description": "Filter by ebook access type", "required": false, "schema": { "type": "string" }, "index$": 12 }] } });
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