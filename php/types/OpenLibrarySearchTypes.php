<?php
declare(strict_types=1);

// Typed models for the OpenLibrarySearch SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Author entity data model. */
class Author
{
    public ?string $birth_date = null;
    public ?string $death_date = null;
    public ?string $key = null;
    public ?string $name = null;
    public ?array $top_subject = null;
    public ?string $top_work = null;
    public ?int $work_count = null;
}

/** Match filter for Author#list (any subset of Author fields). */
class AuthorListMatch
{
    public ?string $birth_date = null;
    public ?string $death_date = null;
    public ?string $key = null;
    public ?string $name = null;
    public ?array $top_subject = null;
    public ?string $top_work = null;
    public ?int $work_count = null;
}

/** Search entity data model. */
class Search
{
    public ?array $author_key = null;
    public ?array $author_name = null;
    public ?int $cover_i = null;
    public ?array $edition = null;
    public ?int $edition_count = null;
    public ?int $first_publish_year = null;
    public ?bool $has_fulltext = null;
    public ?array $ia = null;
    public ?array $isbn = null;
    public ?string $key = null;
    public ?array $language = null;
    public ?bool $public_scan_b = null;
    public ?array $publisher = null;
    public ?string $title = null;
}

/** Match filter for Search#list (any subset of Search fields). */
class SearchListMatch
{
    public ?array $author_key = null;
    public ?array $author_name = null;
    public ?int $cover_i = null;
    public ?array $edition = null;
    public ?int $edition_count = null;
    public ?int $first_publish_year = null;
    public ?bool $has_fulltext = null;
    public ?array $ia = null;
    public ?array $isbn = null;
    public ?string $key = null;
    public ?array $language = null;
    public ?bool $public_scan_b = null;
    public ?array $publisher = null;
    public ?string $title = null;
}

