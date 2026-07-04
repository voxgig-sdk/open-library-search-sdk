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
const author = client.author
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `birth_date` | ``$STRING`` | No |  |
| `death_date` | ``$STRING`` | No |  |
| `key` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `top_subject` | ``$ARRAY`` | No |  |
| `top_work` | ``$STRING`` | No |  |
| `work_count` | ``$INTEGER`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.author.list()
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
const search = client.search
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author_key` | ``$ARRAY`` | No |  |
| `author_name` | ``$ARRAY`` | No |  |
| `cover_i` | ``$INTEGER`` | No |  |
| `edition` | ``$OBJECT`` | No |  |
| `edition_count` | ``$INTEGER`` | No |  |
| `first_publish_year` | ``$INTEGER`` | No |  |
| `has_fulltext` | ``$BOOLEAN`` | No |  |
| `ia` | ``$ARRAY`` | No |  |
| `isbn` | ``$ARRAY`` | No |  |
| `key` | ``$STRING`` | No |  |
| `language` | ``$ARRAY`` | No |  |
| `public_scan_b` | ``$BOOLEAN`` | No |  |
| `publisher` | ``$ARRAY`` | No |  |
| `title` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.search.list()
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

