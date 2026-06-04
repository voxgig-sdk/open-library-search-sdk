# OpenLibrarySearch SDK

Search the Open Library catalogue for books, works, editions, and authors over a free public HTTP API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Open Library Search API

[Open Library](https://openlibrary.org) is an open, editable catalogue from the [Internet Archive](https://archive.org) that aims to build a web page for every book ever published. Alongside its public website, it exposes a family of read-only HTTP APIs that let applications search the catalogue and look up works, editions, authors, and covers.

This SDK targets the Search endpoint, which returns book metadata (work and edition identifiers, author identifiers, and availability information) as JSON.

What you get from the API:

- Search books by title via `GET /search.json?title=`
- Search books by author via `GET /search.json?author=&sort=`
- JSON responses with work/edition info, author IDs, and availability data

Operational notes:

- No authentication is required.
- Default rate limit is roughly 1 request per second; identified clients sending a `User-Agent` with a contact email may use up to 3 requests per second.
- CORS is disabled on the search endpoint, so browser-side calls will need a proxy.
- For bulk access, use the monthly Open Library data dumps rather than the API.

## Try it

**TypeScript**
```bash
npm install open-library-search
```

**Python**
```bash
pip install open-library-search-sdk
```

**PHP**
```bash
composer require voxgig/open-library-search-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/open-library-search-sdk/go
```

**Ruby**
```bash
gem install open-library-search-sdk
```

**Lua**
```bash
luarocks install open-library-search-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { OpenLibrarySearchSDK } from 'open-library-search'

const client = new OpenLibrarySearchSDK({})

// List all authors
const authors = await client.Author().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o open-library-search-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "open-library-search": {
      "command": "/abs/path/to/open-library-search-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Author** | Author-related lookups exposed by the Search API; author queries are issued via `GET /search.json?author=` and results include Open Library author identifiers. | `/search/authors.json` |
| **Search** | The book search resource backed by `GET /search.json`, returning works, editions, author IDs, and availability data matching a title or author query. | `/search.json` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from openlibrarysearch_sdk import OpenLibrarySearchSDK

client = OpenLibrarySearchSDK({})

# List all authors
authors, err = client.Author(None).list(None, None)
```

### PHP

```php
<?php
require_once 'openlibrarysearch_sdk.php';

$client = new OpenLibrarySearchSDK([]);

// List all authors
[$authors, $err] = $client->Author(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/open-library-search-sdk/go"

client := sdk.NewOpenLibrarySearchSDK(map[string]any{})

// List all authors
authors, err := client.Author(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "OpenLibrarySearch_sdk"

client = OpenLibrarySearchSDK.new({})

# List all authors
authors, err = client.Author(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("open-library-search_sdk")

local client = sdk.new({})

-- List all authors
local authors, err = client:Author(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = OpenLibrarySearchSDK.test()
const result = await client.Author().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = OpenLibrarySearchSDK.test(None, None)
result, err = client.Author(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = OpenLibrarySearchSDK::test(null, null);
[$result, $err] = $client->Author(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Author(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = OpenLibrarySearchSDK.test(nil, nil)
result, err = client.Author(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Author(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Open Library Search API

- Upstream: [https://openlibrary.org](https://openlibrary.org)
- API docs: [https://openlibrary.org/developers/api](https://openlibrary.org/developers/api)

- Open Library is run by the [Internet Archive](https://archive.org), a 501(c)(3) nonprofit.
- Catalogue data is community-edited; no explicit data licence is published on the homepage.
- The APIs are intended for open-source and mission-aligned projects and are not a bulk data backend - use the monthly data dumps for bulk needs.
- Identified clients should send a `User-Agent` header including a contact email.

---

Generated from the Open Library Search API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
