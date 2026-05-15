# OpenLibrarySearch Python SDK Reference

Complete API reference for the OpenLibrarySearch Python SDK.


## OpenLibrarySearchSDK

### Constructor

```python
from open-library-search_sdk import OpenLibrarySearchSDK

client = OpenLibrarySearchSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `OpenLibrarySearchSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = OpenLibrarySearchSDK.test()
```


### Instance Methods

#### `Author(data=None)`

Create a new `AuthorEntity` instance. Pass `None` for no initial data.

#### `Search(data=None)`

Create a new `SearchEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## AuthorEntity

```python
author = client.Author()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Author().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuthorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SearchEntity

```python
search = client.Search()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Search().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = OpenLibrarySearchSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

