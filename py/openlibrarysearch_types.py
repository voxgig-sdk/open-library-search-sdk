# Typed models for the OpenLibrarySearch SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Author:
    birth_date: Optional[str] = None
    death_date: Optional[str] = None
    key: Optional[str] = None
    name: Optional[str] = None
    top_subject: Optional[list] = None
    top_work: Optional[str] = None
    work_count: Optional[int] = None


@dataclass
class AuthorListMatch:
    birth_date: Optional[str] = None
    death_date: Optional[str] = None
    key: Optional[str] = None
    name: Optional[str] = None
    top_subject: Optional[list] = None
    top_work: Optional[str] = None
    work_count: Optional[int] = None


@dataclass
class Search:
    author_key: Optional[list] = None
    author_name: Optional[list] = None
    cover_i: Optional[int] = None
    edition: Optional[dict] = None
    edition_count: Optional[int] = None
    first_publish_year: Optional[int] = None
    has_fulltext: Optional[bool] = None
    ia: Optional[list] = None
    isbn: Optional[list] = None
    key: Optional[str] = None
    language: Optional[list] = None
    public_scan_b: Optional[bool] = None
    publisher: Optional[list] = None
    title: Optional[str] = None


@dataclass
class SearchListMatch:
    author_key: Optional[list] = None
    author_name: Optional[list] = None
    cover_i: Optional[int] = None
    edition: Optional[dict] = None
    edition_count: Optional[int] = None
    first_publish_year: Optional[int] = None
    has_fulltext: Optional[bool] = None
    ia: Optional[list] = None
    isbn: Optional[list] = None
    key: Optional[str] = None
    language: Optional[list] = None
    public_scan_b: Optional[bool] = None
    publisher: Optional[list] = None
    title: Optional[str] = None

