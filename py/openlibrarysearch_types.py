# Typed models for the OpenLibrarySearch SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Author(TypedDict, total=False):
    birth_date: str
    death_date: str
    key: str
    name: str
    top_subject: list
    top_work: str
    work_count: int


class AuthorListMatch(TypedDict, total=False):
    birth_date: str
    death_date: str
    key: str
    name: str
    top_subject: list
    top_work: str
    work_count: int


class Search(TypedDict, total=False):
    author_key: list
    author_name: list
    cover_i: int
    edition: dict
    edition_count: int
    first_publish_year: int
    has_fulltext: bool
    ia: list
    isbn: list
    key: str
    language: list
    public_scan_b: bool
    publisher: list
    title: str


class SearchListMatch(TypedDict, total=False):
    author_key: list
    author_name: list
    cover_i: int
    edition: dict
    edition_count: int
    first_publish_year: int
    has_fulltext: bool
    ia: list
    isbn: list
    key: str
    language: list
    public_scan_b: bool
    publisher: list
    title: str
