# OpenLibrarySearch TypeScript SDK Reference

Complete API reference for the OpenLibrarySearch TypeScript SDK.


## OpenLibrarySearchSDK

### Constructor

```ts
new OpenLibrarySearchSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `OpenLibrarySearchSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = OpenLibrarySearchSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `OpenLibrarySearchSDK` instance in test mode.


### Instance Methods

#### `Author(data?: object)`

Create a new `Author` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthorEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `OpenLibrarySearchSDK.test()`.

**Returns:** `OpenLibrarySearchSDK` instance in test mode.


---

## AuthorEntity

```ts
const author = client.Author()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `birth_date` | `string` | No | Author birth date |
| `death_date` | `string` | No | Author death date |
| `key` | `string` | No | Open Library author key |
| `name` | `string` | No | Author name |
| `top_subjects` | `any[]` | No | Top subjects associated with this author |
| `top_work` | `string` | No | Title of top work |
| `work_count` | `number` | No | Number of works by this author |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Author().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthorEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenLibrarySearchSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_key` | `any[]` | No | List of Open Library author keys |
| `author_name` | `any[]` | No | List of author names |
| `cover_i` | `number` | No | Cover image ID |
| `edition_count` | `number` | No | Number of editions for this work |
| `editions` | `Record<string, any>` | No | Nested editions data when fields parameter includes editions |
| `first_publish_year` | `number` | No | Year of first publication |
| `has_fulltext` | `boolean` | No | Whether full text is available |
| `ia` | `any[]` | No | Internet Archive identifiers |
| `isbn` | `any[]` | No | List of ISBNs |
| `key` | `string` | No | Open Library work key |
| `language` | `any[]` | No | List of language codes |
| `public_scan_b` | `boolean` | No | Whether public scans are available |
| `publisher` | `any[]` | No | List of publishers |
| `title` | `string` | No | Title of the book |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Search().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `OpenLibrarySearchSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new OpenLibrarySearchSDK({
  feature: {
    test: { active: true },
  }
})
```

